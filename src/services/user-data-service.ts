import type { Service } from "./Service";

type UserDataResponse = {
  message: string;
  name: string;
  age: number;
  gender: string;
};

export class UserDataService
  implements Service<undefined, undefined, UserDataResponse>
{
  public constructor(public repository = undefined) {}

  async run(_?: undefined) {
    return {
      message: "This is a User Data",
      name: "John Doe",
      age: 21,
      gender: "male",
    };
  }
}
