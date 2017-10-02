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

export default (startDate, loanAmount, rate, years, paymentsPerYear, annualTaxes, annualInsurance) => {
  const r = rate / 100.0 / 12;
  const n = years * paymentsPerYear;
  const factor = (1+r)**n;
  const principalPlusInterestPayment = r > 0 ? loanAmount * r * factor / (factor - 1) : loanAmount / n;
  const totalPayment = principalPlusInterestPayment + annualTaxes / 12 + annualInsurance / 12;

  let bal = loanAmount;
  let date = new Date(startDate.getTime());
  const paymentSchedule = [];

  const taxes = annualTaxes / 12;
  const insurance = annualInsurance / 12;

  let totalCost = 0;
  let totalPrincipal = 0;
  let totalInterest = 0;
  let totalTaxes = 0;
  let totalInsurance = 0;
  for (let i = 0; i < n; i++) {
    const interest = bal * r;
    const principal = principalPlusInterestPayment - interest;
    bal -= principal;
    const row = {
      date: date.getTime(),
      principal,
      interest: interest > 0 ? interest : 0,
      balance: bal > 0 ? bal : 0,
      taxes,
      insurance
    };
    paymentSchedule.push(row);
    totalCost += principal + interest + taxes + insurance;
    totalPrincipal += principal;
    totalInterest += interest;
    totalTaxes += taxes;
    totalInsurance += insurance;
    date.setMonth(date.getMonth() + 1);
  }

  // Group by the year, sum up all amounts and return the groupedSummedSchedule
  const grouped = groupByArray(paymentSchedule, s => new Date(s.date).getFullYear());

  const yearlySchedule = grouped.map( g => {
    return {
      year: g.key,
      principal: g.values.reduce( (a, b) => a + b.principal, 0),
      interest:  g.values.reduce( (a, b) => a + b.interest, 0),
      balance:   g.values.reduce( (a, b) => a < b.balance ? a : b.balance, loanAmount),
      taxes:     g.values.reduce( (a, b) => a + b.taxes, 0),
      insurance: g.values.reduce( (a, b) => a + b.insurance, 0)
    };
  });
  return {
    input: {
      loanAmount,
      rate,
      years,
      paymentsPerYear
    },

    payments: {
      principalPlusInterest: principalPlusInterestPayment,
      taxes,
      insurance
    },

    totals: {
      payment: totalPayment,
      cost: totalCost,
      principal: totalPrincipal,
      interest: totalInterest,
      taxes: totalTaxes,
      insurance: totalInsurance,
    },

    schedule: yearlySchedule
  };
};
