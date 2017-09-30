function groupByArray(data, key) {
  return data.reduce( (rv, x) => {
    let v = key instanceof Function ? key(x) : x[key];
    let el = rv.find((r) => r && r.key === v);
    if (el) {
      el.values.push(x);
    }
    else {
      rv.push({ key: v, values: [x] }); }
      return rv;
  }, []);
}

export default (startDate, loanAmount, rate, years, paymentsPerYear, taxesAndFees = 0) => {
  const r = rate / 100.0 / 12;
  const n = years * paymentsPerYear;
  const factor = (1+r)**n;
  const principalPlusInterestPayment = r > 0 ? loanAmount * r * factor / (factor - 1) : loanAmount / n;
  const totalPayment = principalPlusInterestPayment + taxesAndFees;

  let bal = loanAmount;
  let date = new Date(startDate.getTime());
  const paymentSchedule = [];

  let totalCost = 0;
  let totalPrincipal = 0;
  let totalInterest = 0;
  let totalTaxesAndFees = 0;
  for (let i = 0; i < n; i++) {
    const interest = bal * r;
    const principal = principalPlusInterestPayment - interest;
    bal -= principal;
    const row = {
      date: date.getTime(),
      principal: principal,
      interest: interest > 0 ? interest : 0,
      balance: bal > 0 ? bal : 0,
      taxesAndFees
    };
    paymentSchedule.push(row);
    totalCost += principal + interest + taxesAndFees;
    totalPrincipal += principal;
    totalInterest += interest;
    totalTaxesAndFees += taxesAndFees;
    date.setMonth(date.getMonth() + 1);
  }

  // Group by the year, sum up all amounts and return the groupedSummedSchedule
  const grouped = groupByArray(paymentSchedule, s => new Date(s.date).getFullYear());

  const yearlySchedule = grouped.map( g => {
    return {
      year: g.key,
      principal:    g.values.reduce( (a, b) => a + b.principal   , 0),
      interest:     g.values.reduce( (a, b) => a + b.interest    , 0),
      balance:      g.values.reduce( (a, b) => a < b.balance ? a : b.balance, loanAmount),
      taxesAndFees: g.values.reduce( (a, b) => a + b.taxesAndFees, 0)
    };
  });
  return {
    loanAmount,
    rate,
    years,
    paymentsPerYear,
    principalPlusInterestPayment,
    totalPayment,
    totalCost,
    totalPrincipal,
    totalInterest,
    totalTaxesAndFees,
    schedule: yearlySchedule
  };
};
