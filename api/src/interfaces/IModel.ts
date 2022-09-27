export interface IModel<T> {
  create(object: T): Promise<T>;
  read(): Promise<T[]>;
  delete(id: string): Promise<T | null>;
}