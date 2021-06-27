import { InMemoryDbService } from 'angular-in-memory-web-api';

export class UserData implements InMemoryDbService {
  createDb() {
    const retirementPlan: any = {
      createDate: '26/11/2018',
      investmentAmount: 3000,
      accountNumber: '123456',
      chargeDate: '26/11/2018',
      status: 'Monthly Charge',
      accumulatedInvestAmount: 5000,
      currentMarketValue: 4718,
    };
    return { retirementPlan };
  }
}
