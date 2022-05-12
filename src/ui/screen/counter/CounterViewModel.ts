import { action, computed, makeObservable, observable } from "mobx";

class CounterViewModel {
  @observable
  private _count = 0;

  constructor() {
    makeObservable(this);
  }

  @action
  increment = (): void => {
    this._count += 1;
  };

  @computed
  get count() {
    return this._count;
  }
}

export default CounterViewModel;
