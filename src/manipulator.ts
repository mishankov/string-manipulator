export interface Manipulator {
  do(input: string): string
}


export class ReplaceManipulator implements Manipulator {
  searchValue: string
  replaceValue: string

  constructor(searchValue: string, replaceValue: string = "") {
    this.searchValue = searchValue
    this.replaceValue = replaceValue
  }
  do(input: string) {
    return input.replaceAll(this.searchValue, this.replaceValue)
  }
}
