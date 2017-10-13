import faker from 'faker';

const getTestData = (numResults) => {
  const testData = [];
  for (let i = 0; i < numResults; i++) {
    testData.push({
      _id: i,
      fullName: faker.name.findName(),
      'email.address': faker.internet.email(),
      phone_number: faker.phone.phoneNumber(),
      address: {
        city: faker.address.city(),
        state: faker.address.state(),
        country: faker.address.country()
      }
    });
  }

  return testData;
};

export default getTestData;
