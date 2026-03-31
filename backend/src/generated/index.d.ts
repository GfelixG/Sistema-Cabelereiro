
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Clientes
 * 
 */
export type Clientes = $Result.DefaultSelection<Prisma.$ClientesPayload>
/**
 * Model Profissionais
 * 
 */
export type Profissionais = $Result.DefaultSelection<Prisma.$ProfissionaisPayload>
/**
 * Model Servicos
 * 
 */
export type Servicos = $Result.DefaultSelection<Prisma.$ServicosPayload>
/**
 * Model Agendamentos
 * 
 */
export type Agendamentos = $Result.DefaultSelection<Prisma.$AgendamentosPayload>
/**
 * Model Vendedores
 * 
 */
export type Vendedores = $Result.DefaultSelection<Prisma.$VendedoresPayload>
/**
 * Model Produtos
 * 
 */
export type Produtos = $Result.DefaultSelection<Prisma.$ProdutosPayload>
/**
 * Model Vendas
 * 
 */
export type Vendas = $Result.DefaultSelection<Prisma.$VendasPayload>
/**
 * Model ItensVenda
 * 
 */
export type ItensVenda = $Result.DefaultSelection<Prisma.$ItensVendaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.clientes.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clientes
   * const clientes = await prisma.clientes.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.clientes`: Exposes CRUD operations for the **Clientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.clientes.findMany()
    * ```
    */
  get clientes(): Prisma.ClientesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profissionais`: Exposes CRUD operations for the **Profissionais** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profissionais
    * const profissionais = await prisma.profissionais.findMany()
    * ```
    */
  get profissionais(): Prisma.ProfissionaisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicos`: Exposes CRUD operations for the **Servicos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicos
    * const servicos = await prisma.servicos.findMany()
    * ```
    */
  get servicos(): Prisma.ServicosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agendamentos`: Exposes CRUD operations for the **Agendamentos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agendamentos
    * const agendamentos = await prisma.agendamentos.findMany()
    * ```
    */
  get agendamentos(): Prisma.AgendamentosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendedores`: Exposes CRUD operations for the **Vendedores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendedores
    * const vendedores = await prisma.vendedores.findMany()
    * ```
    */
  get vendedores(): Prisma.VendedoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produtos`: Exposes CRUD operations for the **Produtos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produtos.findMany()
    * ```
    */
  get produtos(): Prisma.ProdutosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendas`: Exposes CRUD operations for the **Vendas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendas
    * const vendas = await prisma.vendas.findMany()
    * ```
    */
  get vendas(): Prisma.VendasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itensVenda`: Exposes CRUD operations for the **ItensVenda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItensVendas
    * const itensVendas = await prisma.itensVenda.findMany()
    * ```
    */
  get itensVenda(): Prisma.ItensVendaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Clientes: 'Clientes',
    Profissionais: 'Profissionais',
    Servicos: 'Servicos',
    Agendamentos: 'Agendamentos',
    Vendedores: 'Vendedores',
    Produtos: 'Produtos',
    Vendas: 'Vendas',
    ItensVenda: 'ItensVenda'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "clientes" | "profissionais" | "servicos" | "agendamentos" | "vendedores" | "produtos" | "vendas" | "itensVenda"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Clientes: {
        payload: Prisma.$ClientesPayload<ExtArgs>
        fields: Prisma.ClientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          findFirst: {
            args: Prisma.ClientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          findMany: {
            args: Prisma.ClientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>[]
          }
          create: {
            args: Prisma.ClientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          createMany: {
            args: Prisma.ClientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          update: {
            args: Prisma.ClientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          deleteMany: {
            args: Prisma.ClientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          aggregate: {
            args: Prisma.ClientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientes>
          }
          groupBy: {
            args: Prisma.ClientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientesCountArgs<ExtArgs>
            result: $Utils.Optional<ClientesCountAggregateOutputType> | number
          }
        }
      }
      Profissionais: {
        payload: Prisma.$ProfissionaisPayload<ExtArgs>
        fields: Prisma.ProfissionaisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfissionaisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionaisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfissionaisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionaisPayload>
          }
          findFirst: {
            args: Prisma.ProfissionaisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionaisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfissionaisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionaisPayload>
          }
          findMany: {
            args: Prisma.ProfissionaisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionaisPayload>[]
          }
          create: {
            args: Prisma.ProfissionaisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionaisPayload>
          }
          createMany: {
            args: Prisma.ProfissionaisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProfissionaisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionaisPayload>
          }
          update: {
            args: Prisma.ProfissionaisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionaisPayload>
          }
          deleteMany: {
            args: Prisma.ProfissionaisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfissionaisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfissionaisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionaisPayload>
          }
          aggregate: {
            args: Prisma.ProfissionaisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfissionais>
          }
          groupBy: {
            args: Prisma.ProfissionaisGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfissionaisGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfissionaisCountArgs<ExtArgs>
            result: $Utils.Optional<ProfissionaisCountAggregateOutputType> | number
          }
        }
      }
      Servicos: {
        payload: Prisma.$ServicosPayload<ExtArgs>
        fields: Prisma.ServicosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicosPayload>
          }
          findFirst: {
            args: Prisma.ServicosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicosPayload>
          }
          findMany: {
            args: Prisma.ServicosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicosPayload>[]
          }
          create: {
            args: Prisma.ServicosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicosPayload>
          }
          createMany: {
            args: Prisma.ServicosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServicosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicosPayload>
          }
          update: {
            args: Prisma.ServicosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicosPayload>
          }
          deleteMany: {
            args: Prisma.ServicosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServicosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicosPayload>
          }
          aggregate: {
            args: Prisma.ServicosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicos>
          }
          groupBy: {
            args: Prisma.ServicosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicosGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicosCountArgs<ExtArgs>
            result: $Utils.Optional<ServicosCountAggregateOutputType> | number
          }
        }
      }
      Agendamentos: {
        payload: Prisma.$AgendamentosPayload<ExtArgs>
        fields: Prisma.AgendamentosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgendamentosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgendamentosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentosPayload>
          }
          findFirst: {
            args: Prisma.AgendamentosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgendamentosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentosPayload>
          }
          findMany: {
            args: Prisma.AgendamentosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentosPayload>[]
          }
          create: {
            args: Prisma.AgendamentosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentosPayload>
          }
          createMany: {
            args: Prisma.AgendamentosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AgendamentosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentosPayload>
          }
          update: {
            args: Prisma.AgendamentosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentosPayload>
          }
          deleteMany: {
            args: Prisma.AgendamentosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgendamentosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AgendamentosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentosPayload>
          }
          aggregate: {
            args: Prisma.AgendamentosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgendamentos>
          }
          groupBy: {
            args: Prisma.AgendamentosGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgendamentosGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgendamentosCountArgs<ExtArgs>
            result: $Utils.Optional<AgendamentosCountAggregateOutputType> | number
          }
        }
      }
      Vendedores: {
        payload: Prisma.$VendedoresPayload<ExtArgs>
        fields: Prisma.VendedoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendedoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendedoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedoresPayload>
          }
          findFirst: {
            args: Prisma.VendedoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendedoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedoresPayload>
          }
          findMany: {
            args: Prisma.VendedoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedoresPayload>[]
          }
          create: {
            args: Prisma.VendedoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedoresPayload>
          }
          createMany: {
            args: Prisma.VendedoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VendedoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedoresPayload>
          }
          update: {
            args: Prisma.VendedoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedoresPayload>
          }
          deleteMany: {
            args: Prisma.VendedoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendedoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VendedoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedoresPayload>
          }
          aggregate: {
            args: Prisma.VendedoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendedores>
          }
          groupBy: {
            args: Prisma.VendedoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendedoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendedoresCountArgs<ExtArgs>
            result: $Utils.Optional<VendedoresCountAggregateOutputType> | number
          }
        }
      }
      Produtos: {
        payload: Prisma.$ProdutosPayload<ExtArgs>
        fields: Prisma.ProdutosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutosPayload>
          }
          findFirst: {
            args: Prisma.ProdutosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutosPayload>
          }
          findMany: {
            args: Prisma.ProdutosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutosPayload>[]
          }
          create: {
            args: Prisma.ProdutosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutosPayload>
          }
          createMany: {
            args: Prisma.ProdutosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProdutosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutosPayload>
          }
          update: {
            args: Prisma.ProdutosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutosPayload>
          }
          deleteMany: {
            args: Prisma.ProdutosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProdutosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutosPayload>
          }
          aggregate: {
            args: Prisma.ProdutosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProdutos>
          }
          groupBy: {
            args: Prisma.ProdutosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutosGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutosCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutosCountAggregateOutputType> | number
          }
        }
      }
      Vendas: {
        payload: Prisma.$VendasPayload<ExtArgs>
        fields: Prisma.VendasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendasPayload>
          }
          findFirst: {
            args: Prisma.VendasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendasPayload>
          }
          findMany: {
            args: Prisma.VendasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendasPayload>[]
          }
          create: {
            args: Prisma.VendasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendasPayload>
          }
          createMany: {
            args: Prisma.VendasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VendasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendasPayload>
          }
          update: {
            args: Prisma.VendasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendasPayload>
          }
          deleteMany: {
            args: Prisma.VendasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VendasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendasPayload>
          }
          aggregate: {
            args: Prisma.VendasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendas>
          }
          groupBy: {
            args: Prisma.VendasGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendasGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendasCountArgs<ExtArgs>
            result: $Utils.Optional<VendasCountAggregateOutputType> | number
          }
        }
      }
      ItensVenda: {
        payload: Prisma.$ItensVendaPayload<ExtArgs>
        fields: Prisma.ItensVendaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItensVendaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItensVendaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItensVendaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItensVendaPayload>
          }
          findFirst: {
            args: Prisma.ItensVendaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItensVendaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItensVendaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItensVendaPayload>
          }
          findMany: {
            args: Prisma.ItensVendaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItensVendaPayload>[]
          }
          create: {
            args: Prisma.ItensVendaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItensVendaPayload>
          }
          createMany: {
            args: Prisma.ItensVendaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ItensVendaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItensVendaPayload>
          }
          update: {
            args: Prisma.ItensVendaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItensVendaPayload>
          }
          deleteMany: {
            args: Prisma.ItensVendaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItensVendaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItensVendaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItensVendaPayload>
          }
          aggregate: {
            args: Prisma.ItensVendaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItensVenda>
          }
          groupBy: {
            args: Prisma.ItensVendaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItensVendaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItensVendaCountArgs<ExtArgs>
            result: $Utils.Optional<ItensVendaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    clientes?: ClientesOmit
    profissionais?: ProfissionaisOmit
    servicos?: ServicosOmit
    agendamentos?: AgendamentosOmit
    vendedores?: VendedoresOmit
    produtos?: ProdutosOmit
    vendas?: VendasOmit
    itensVenda?: ItensVendaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientesCountOutputType
   */

  export type ClientesCountOutputType = {
    agendamentos: number
    vendas: number
  }

  export type ClientesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | ClientesCountOutputTypeCountAgendamentosArgs
    vendas?: boolean | ClientesCountOutputTypeCountVendasArgs
  }

  // Custom InputTypes
  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientesCountOutputType
     */
    select?: ClientesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentosWhereInput
  }

  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeCountVendasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendasWhereInput
  }


  /**
   * Count Type ProfissionaisCountOutputType
   */

  export type ProfissionaisCountOutputType = {
    agendamentos: number
  }

  export type ProfissionaisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | ProfissionaisCountOutputTypeCountAgendamentosArgs
  }

  // Custom InputTypes
  /**
   * ProfissionaisCountOutputType without action
   */
  export type ProfissionaisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfissionaisCountOutputType
     */
    select?: ProfissionaisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfissionaisCountOutputType without action
   */
  export type ProfissionaisCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentosWhereInput
  }


  /**
   * Count Type ServicosCountOutputType
   */

  export type ServicosCountOutputType = {
    agendamentos: number
  }

  export type ServicosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | ServicosCountOutputTypeCountAgendamentosArgs
  }

  // Custom InputTypes
  /**
   * ServicosCountOutputType without action
   */
  export type ServicosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicosCountOutputType
     */
    select?: ServicosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicosCountOutputType without action
   */
  export type ServicosCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentosWhereInput
  }


  /**
   * Count Type AgendamentosCountOutputType
   */

  export type AgendamentosCountOutputType = {
    servicos: number
  }

  export type AgendamentosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicos?: boolean | AgendamentosCountOutputTypeCountServicosArgs
  }

  // Custom InputTypes
  /**
   * AgendamentosCountOutputType without action
   */
  export type AgendamentosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendamentosCountOutputType
     */
    select?: AgendamentosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgendamentosCountOutputType without action
   */
  export type AgendamentosCountOutputTypeCountServicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicosWhereInput
  }


  /**
   * Count Type VendedoresCountOutputType
   */

  export type VendedoresCountOutputType = {
    vendas: number
  }

  export type VendedoresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendas?: boolean | VendedoresCountOutputTypeCountVendasArgs
  }

  // Custom InputTypes
  /**
   * VendedoresCountOutputType without action
   */
  export type VendedoresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendedoresCountOutputType
     */
    select?: VendedoresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendedoresCountOutputType without action
   */
  export type VendedoresCountOutputTypeCountVendasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendasWhereInput
  }


  /**
   * Count Type ProdutosCountOutputType
   */

  export type ProdutosCountOutputType = {
    itensVenda: number
  }

  export type ProdutosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itensVenda?: boolean | ProdutosCountOutputTypeCountItensVendaArgs
  }

  // Custom InputTypes
  /**
   * ProdutosCountOutputType without action
   */
  export type ProdutosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutosCountOutputType
     */
    select?: ProdutosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutosCountOutputType without action
   */
  export type ProdutosCountOutputTypeCountItensVendaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItensVendaWhereInput
  }


  /**
   * Count Type VendasCountOutputType
   */

  export type VendasCountOutputType = {
    itens: number
  }

  export type VendasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | VendasCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * VendasCountOutputType without action
   */
  export type VendasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendasCountOutputType
     */
    select?: VendasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendasCountOutputType without action
   */
  export type VendasCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItensVendaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Clientes
   */

  export type AggregateClientes = {
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  export type ClientesAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientesSumAggregateOutputType = {
    id: number | null
  }

  export type ClientesMinAggregateOutputType = {
    id: number | null
    nome: string | null
    telefone: string | null
    email: string | null
    dataCadastro: Date | null
    isFlamengo: boolean | null
    assisteOP: boolean | null
    cidadeNascimento: string | null
  }

  export type ClientesMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    telefone: string | null
    email: string | null
    dataCadastro: Date | null
    isFlamengo: boolean | null
    assisteOP: boolean | null
    cidadeNascimento: string | null
  }

  export type ClientesCountAggregateOutputType = {
    id: number
    nome: number
    telefone: number
    email: number
    dataCadastro: number
    isFlamengo: number
    assisteOP: number
    cidadeNascimento: number
    _all: number
  }


  export type ClientesAvgAggregateInputType = {
    id?: true
  }

  export type ClientesSumAggregateInputType = {
    id?: true
  }

  export type ClientesMinAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    email?: true
    dataCadastro?: true
    isFlamengo?: true
    assisteOP?: true
    cidadeNascimento?: true
  }

  export type ClientesMaxAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    email?: true
    dataCadastro?: true
    isFlamengo?: true
    assisteOP?: true
    cidadeNascimento?: true
  }

  export type ClientesCountAggregateInputType = {
    id?: true
    nome?: true
    telefone?: true
    email?: true
    dataCadastro?: true
    isFlamengo?: true
    assisteOP?: true
    cidadeNascimento?: true
    _all?: true
  }

  export type ClientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to aggregate.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientesMaxAggregateInputType
  }

  export type GetClientesAggregateType<T extends ClientesAggregateArgs> = {
        [P in keyof T & keyof AggregateClientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientes[P]>
      : GetScalarType<T[P], AggregateClientes[P]>
  }




  export type ClientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientesWhereInput
    orderBy?: ClientesOrderByWithAggregationInput | ClientesOrderByWithAggregationInput[]
    by: ClientesScalarFieldEnum[] | ClientesScalarFieldEnum
    having?: ClientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientesCountAggregateInputType | true
    _avg?: ClientesAvgAggregateInputType
    _sum?: ClientesSumAggregateInputType
    _min?: ClientesMinAggregateInputType
    _max?: ClientesMaxAggregateInputType
  }

  export type ClientesGroupByOutputType = {
    id: number
    nome: string
    telefone: string
    email: string | null
    dataCadastro: Date
    isFlamengo: boolean
    assisteOP: boolean
    cidadeNascimento: string | null
    _count: ClientesCountAggregateOutputType | null
    _avg: ClientesAvgAggregateOutputType | null
    _sum: ClientesSumAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  type GetClientesGroupByPayload<T extends ClientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientesGroupByOutputType[P]>
            : GetScalarType<T[P], ClientesGroupByOutputType[P]>
        }
      >
    >


  export type ClientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    telefone?: boolean
    email?: boolean
    dataCadastro?: boolean
    isFlamengo?: boolean
    assisteOP?: boolean
    cidadeNascimento?: boolean
    agendamentos?: boolean | Clientes$agendamentosArgs<ExtArgs>
    vendas?: boolean | Clientes$vendasArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientes"]>



  export type ClientesSelectScalar = {
    id?: boolean
    nome?: boolean
    telefone?: boolean
    email?: boolean
    dataCadastro?: boolean
    isFlamengo?: boolean
    assisteOP?: boolean
    cidadeNascimento?: boolean
  }

  export type ClientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "telefone" | "email" | "dataCadastro" | "isFlamengo" | "assisteOP" | "cidadeNascimento", ExtArgs["result"]["clientes"]>
  export type ClientesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | Clientes$agendamentosArgs<ExtArgs>
    vendas?: boolean | Clientes$vendasArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clientes"
    objects: {
      agendamentos: Prisma.$AgendamentosPayload<ExtArgs>[]
      vendas: Prisma.$VendasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      telefone: string
      email: string | null
      dataCadastro: Date
      isFlamengo: boolean
      assisteOP: boolean
      cidadeNascimento: string | null
    }, ExtArgs["result"]["clientes"]>
    composites: {}
  }

  type ClientesGetPayload<S extends boolean | null | undefined | ClientesDefaultArgs> = $Result.GetResult<Prisma.$ClientesPayload, S>

  type ClientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientesCountAggregateInputType | true
    }

  export interface ClientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clientes'], meta: { name: 'Clientes' } }
    /**
     * Find zero or one Clientes that matches the filter.
     * @param {ClientesFindUniqueArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientesFindUniqueArgs>(args: SelectSubset<T, ClientesFindUniqueArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientesFindUniqueOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientesFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesFindFirstArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientesFindFirstArgs>(args?: SelectSubset<T, ClientesFindFirstArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesFindFirstOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientesFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.clientes.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.clientes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientesWithIdOnly = await prisma.clientes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientesFindManyArgs>(args?: SelectSubset<T, ClientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clientes.
     * @param {ClientesCreateArgs} args - Arguments to create a Clientes.
     * @example
     * // Create one Clientes
     * const Clientes = await prisma.clientes.create({
     *   data: {
     *     // ... data to create a Clientes
     *   }
     * })
     * 
     */
    create<T extends ClientesCreateArgs>(args: SelectSubset<T, ClientesCreateArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClientesCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const clientes = await prisma.clientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientesCreateManyArgs>(args?: SelectSubset<T, ClientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clientes.
     * @param {ClientesDeleteArgs} args - Arguments to delete one Clientes.
     * @example
     * // Delete one Clientes
     * const Clientes = await prisma.clientes.delete({
     *   where: {
     *     // ... filter to delete one Clientes
     *   }
     * })
     * 
     */
    delete<T extends ClientesDeleteArgs>(args: SelectSubset<T, ClientesDeleteArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clientes.
     * @param {ClientesUpdateArgs} args - Arguments to update one Clientes.
     * @example
     * // Update one Clientes
     * const clientes = await prisma.clientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientesUpdateArgs>(args: SelectSubset<T, ClientesUpdateArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClientesDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.clientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientesDeleteManyArgs>(args?: SelectSubset<T, ClientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientesUpdateManyArgs>(args: SelectSubset<T, ClientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clientes.
     * @param {ClientesUpsertArgs} args - Arguments to update or create a Clientes.
     * @example
     * // Update or create a Clientes
     * const clientes = await prisma.clientes.upsert({
     *   create: {
     *     // ... data to create a Clientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clientes we want to update
     *   }
     * })
     */
    upsert<T extends ClientesUpsertArgs>(args: SelectSubset<T, ClientesUpsertArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.clientes.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClientesCountArgs>(
      args?: Subset<T, ClientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientesAggregateArgs>(args: Subset<T, ClientesAggregateArgs>): Prisma.PrismaPromise<GetClientesAggregateType<T>>

    /**
     * Group by Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientesGroupByArgs['orderBy'] }
        : { orderBy?: ClientesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clientes model
   */
  readonly fields: ClientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agendamentos<T extends Clientes$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, Clientes$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vendas<T extends Clientes$vendasArgs<ExtArgs> = {}>(args?: Subset<T, Clientes$vendasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Clientes model
   */
  interface ClientesFieldRefs {
    readonly id: FieldRef<"Clientes", 'Int'>
    readonly nome: FieldRef<"Clientes", 'String'>
    readonly telefone: FieldRef<"Clientes", 'String'>
    readonly email: FieldRef<"Clientes", 'String'>
    readonly dataCadastro: FieldRef<"Clientes", 'DateTime'>
    readonly isFlamengo: FieldRef<"Clientes", 'Boolean'>
    readonly assisteOP: FieldRef<"Clientes", 'Boolean'>
    readonly cidadeNascimento: FieldRef<"Clientes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Clientes findUnique
   */
  export type ClientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes findUniqueOrThrow
   */
  export type ClientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes findFirst
   */
  export type ClientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * Clientes findFirstOrThrow
   */
  export type ClientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * Clientes findMany
   */
  export type ClientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * Clientes create
   */
  export type ClientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * The data needed to create a Clientes.
     */
    data: XOR<ClientesCreateInput, ClientesUncheckedCreateInput>
  }

  /**
   * Clientes createMany
   */
  export type ClientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClientesCreateManyInput | ClientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clientes update
   */
  export type ClientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * The data needed to update a Clientes.
     */
    data: XOR<ClientesUpdateInput, ClientesUncheckedUpdateInput>
    /**
     * Choose, which Clientes to update.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes updateMany
   */
  export type ClientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClientesUpdateManyMutationInput, ClientesUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClientesWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Clientes upsert
   */
  export type ClientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * The filter to search for the Clientes to update in case it exists.
     */
    where: ClientesWhereUniqueInput
    /**
     * In case the Clientes found by the `where` argument doesn't exist, create a new Clientes with this data.
     */
    create: XOR<ClientesCreateInput, ClientesUncheckedCreateInput>
    /**
     * In case the Clientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientesUpdateInput, ClientesUncheckedUpdateInput>
  }

  /**
   * Clientes delete
   */
  export type ClientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter which Clientes to delete.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes deleteMany
   */
  export type ClientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClientesWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Clientes.agendamentos
   */
  export type Clientes$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamentos
     */
    select?: AgendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamentos
     */
    omit?: AgendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentosInclude<ExtArgs> | null
    where?: AgendamentosWhereInput
    orderBy?: AgendamentosOrderByWithRelationInput | AgendamentosOrderByWithRelationInput[]
    cursor?: AgendamentosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendamentosScalarFieldEnum | AgendamentosScalarFieldEnum[]
  }

  /**
   * Clientes.vendas
   */
  export type Clientes$vendasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendas
     */
    select?: VendasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendas
     */
    omit?: VendasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendasInclude<ExtArgs> | null
    where?: VendasWhereInput
    orderBy?: VendasOrderByWithRelationInput | VendasOrderByWithRelationInput[]
    cursor?: VendasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VendasScalarFieldEnum | VendasScalarFieldEnum[]
  }

  /**
   * Clientes without action
   */
  export type ClientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
  }


  /**
   * Model Profissionais
   */

  export type AggregateProfissionais = {
    _count: ProfissionaisCountAggregateOutputType | null
    _avg: ProfissionaisAvgAggregateOutputType | null
    _sum: ProfissionaisSumAggregateOutputType | null
    _min: ProfissionaisMinAggregateOutputType | null
    _max: ProfissionaisMaxAggregateOutputType | null
  }

  export type ProfissionaisAvgAggregateOutputType = {
    id: number | null
  }

  export type ProfissionaisSumAggregateOutputType = {
    id: number | null
  }

  export type ProfissionaisMinAggregateOutputType = {
    id: number | null
    nome: string | null
    especialidade: string | null
  }

  export type ProfissionaisMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    especialidade: string | null
  }

  export type ProfissionaisCountAggregateOutputType = {
    id: number
    nome: number
    especialidade: number
    _all: number
  }


  export type ProfissionaisAvgAggregateInputType = {
    id?: true
  }

  export type ProfissionaisSumAggregateInputType = {
    id?: true
  }

  export type ProfissionaisMinAggregateInputType = {
    id?: true
    nome?: true
    especialidade?: true
  }

  export type ProfissionaisMaxAggregateInputType = {
    id?: true
    nome?: true
    especialidade?: true
  }

  export type ProfissionaisCountAggregateInputType = {
    id?: true
    nome?: true
    especialidade?: true
    _all?: true
  }

  export type ProfissionaisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profissionais to aggregate.
     */
    where?: ProfissionaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionais to fetch.
     */
    orderBy?: ProfissionaisOrderByWithRelationInput | ProfissionaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfissionaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profissionais
    **/
    _count?: true | ProfissionaisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfissionaisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfissionaisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfissionaisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfissionaisMaxAggregateInputType
  }

  export type GetProfissionaisAggregateType<T extends ProfissionaisAggregateArgs> = {
        [P in keyof T & keyof AggregateProfissionais]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfissionais[P]>
      : GetScalarType<T[P], AggregateProfissionais[P]>
  }




  export type ProfissionaisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfissionaisWhereInput
    orderBy?: ProfissionaisOrderByWithAggregationInput | ProfissionaisOrderByWithAggregationInput[]
    by: ProfissionaisScalarFieldEnum[] | ProfissionaisScalarFieldEnum
    having?: ProfissionaisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfissionaisCountAggregateInputType | true
    _avg?: ProfissionaisAvgAggregateInputType
    _sum?: ProfissionaisSumAggregateInputType
    _min?: ProfissionaisMinAggregateInputType
    _max?: ProfissionaisMaxAggregateInputType
  }

  export type ProfissionaisGroupByOutputType = {
    id: number
    nome: string
    especialidade: string
    _count: ProfissionaisCountAggregateOutputType | null
    _avg: ProfissionaisAvgAggregateOutputType | null
    _sum: ProfissionaisSumAggregateOutputType | null
    _min: ProfissionaisMinAggregateOutputType | null
    _max: ProfissionaisMaxAggregateOutputType | null
  }

  type GetProfissionaisGroupByPayload<T extends ProfissionaisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfissionaisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfissionaisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfissionaisGroupByOutputType[P]>
            : GetScalarType<T[P], ProfissionaisGroupByOutputType[P]>
        }
      >
    >


  export type ProfissionaisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    especialidade?: boolean
    agendamentos?: boolean | Profissionais$agendamentosArgs<ExtArgs>
    _count?: boolean | ProfissionaisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profissionais"]>



  export type ProfissionaisSelectScalar = {
    id?: boolean
    nome?: boolean
    especialidade?: boolean
  }

  export type ProfissionaisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "especialidade", ExtArgs["result"]["profissionais"]>
  export type ProfissionaisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | Profissionais$agendamentosArgs<ExtArgs>
    _count?: boolean | ProfissionaisCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProfissionaisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profissionais"
    objects: {
      agendamentos: Prisma.$AgendamentosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      especialidade: string
    }, ExtArgs["result"]["profissionais"]>
    composites: {}
  }

  type ProfissionaisGetPayload<S extends boolean | null | undefined | ProfissionaisDefaultArgs> = $Result.GetResult<Prisma.$ProfissionaisPayload, S>

  type ProfissionaisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfissionaisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfissionaisCountAggregateInputType | true
    }

  export interface ProfissionaisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profissionais'], meta: { name: 'Profissionais' } }
    /**
     * Find zero or one Profissionais that matches the filter.
     * @param {ProfissionaisFindUniqueArgs} args - Arguments to find a Profissionais
     * @example
     * // Get one Profissionais
     * const profissionais = await prisma.profissionais.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfissionaisFindUniqueArgs>(args: SelectSubset<T, ProfissionaisFindUniqueArgs<ExtArgs>>): Prisma__ProfissionaisClient<$Result.GetResult<Prisma.$ProfissionaisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profissionais that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfissionaisFindUniqueOrThrowArgs} args - Arguments to find a Profissionais
     * @example
     * // Get one Profissionais
     * const profissionais = await prisma.profissionais.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfissionaisFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfissionaisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfissionaisClient<$Result.GetResult<Prisma.$ProfissionaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissionais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionaisFindFirstArgs} args - Arguments to find a Profissionais
     * @example
     * // Get one Profissionais
     * const profissionais = await prisma.profissionais.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfissionaisFindFirstArgs>(args?: SelectSubset<T, ProfissionaisFindFirstArgs<ExtArgs>>): Prisma__ProfissionaisClient<$Result.GetResult<Prisma.$ProfissionaisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissionais that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionaisFindFirstOrThrowArgs} args - Arguments to find a Profissionais
     * @example
     * // Get one Profissionais
     * const profissionais = await prisma.profissionais.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfissionaisFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfissionaisFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfissionaisClient<$Result.GetResult<Prisma.$ProfissionaisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profissionais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionaisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profissionais
     * const profissionais = await prisma.profissionais.findMany()
     * 
     * // Get first 10 Profissionais
     * const profissionais = await prisma.profissionais.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profissionaisWithIdOnly = await prisma.profissionais.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfissionaisFindManyArgs>(args?: SelectSubset<T, ProfissionaisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfissionaisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profissionais.
     * @param {ProfissionaisCreateArgs} args - Arguments to create a Profissionais.
     * @example
     * // Create one Profissionais
     * const Profissionais = await prisma.profissionais.create({
     *   data: {
     *     // ... data to create a Profissionais
     *   }
     * })
     * 
     */
    create<T extends ProfissionaisCreateArgs>(args: SelectSubset<T, ProfissionaisCreateArgs<ExtArgs>>): Prisma__ProfissionaisClient<$Result.GetResult<Prisma.$ProfissionaisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profissionais.
     * @param {ProfissionaisCreateManyArgs} args - Arguments to create many Profissionais.
     * @example
     * // Create many Profissionais
     * const profissionais = await prisma.profissionais.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfissionaisCreateManyArgs>(args?: SelectSubset<T, ProfissionaisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profissionais.
     * @param {ProfissionaisDeleteArgs} args - Arguments to delete one Profissionais.
     * @example
     * // Delete one Profissionais
     * const Profissionais = await prisma.profissionais.delete({
     *   where: {
     *     // ... filter to delete one Profissionais
     *   }
     * })
     * 
     */
    delete<T extends ProfissionaisDeleteArgs>(args: SelectSubset<T, ProfissionaisDeleteArgs<ExtArgs>>): Prisma__ProfissionaisClient<$Result.GetResult<Prisma.$ProfissionaisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profissionais.
     * @param {ProfissionaisUpdateArgs} args - Arguments to update one Profissionais.
     * @example
     * // Update one Profissionais
     * const profissionais = await prisma.profissionais.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfissionaisUpdateArgs>(args: SelectSubset<T, ProfissionaisUpdateArgs<ExtArgs>>): Prisma__ProfissionaisClient<$Result.GetResult<Prisma.$ProfissionaisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profissionais.
     * @param {ProfissionaisDeleteManyArgs} args - Arguments to filter Profissionais to delete.
     * @example
     * // Delete a few Profissionais
     * const { count } = await prisma.profissionais.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfissionaisDeleteManyArgs>(args?: SelectSubset<T, ProfissionaisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profissionais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionaisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profissionais
     * const profissionais = await prisma.profissionais.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfissionaisUpdateManyArgs>(args: SelectSubset<T, ProfissionaisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profissionais.
     * @param {ProfissionaisUpsertArgs} args - Arguments to update or create a Profissionais.
     * @example
     * // Update or create a Profissionais
     * const profissionais = await prisma.profissionais.upsert({
     *   create: {
     *     // ... data to create a Profissionais
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profissionais we want to update
     *   }
     * })
     */
    upsert<T extends ProfissionaisUpsertArgs>(args: SelectSubset<T, ProfissionaisUpsertArgs<ExtArgs>>): Prisma__ProfissionaisClient<$Result.GetResult<Prisma.$ProfissionaisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profissionais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionaisCountArgs} args - Arguments to filter Profissionais to count.
     * @example
     * // Count the number of Profissionais
     * const count = await prisma.profissionais.count({
     *   where: {
     *     // ... the filter for the Profissionais we want to count
     *   }
     * })
    **/
    count<T extends ProfissionaisCountArgs>(
      args?: Subset<T, ProfissionaisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfissionaisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profissionais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionaisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfissionaisAggregateArgs>(args: Subset<T, ProfissionaisAggregateArgs>): Prisma.PrismaPromise<GetProfissionaisAggregateType<T>>

    /**
     * Group by Profissionais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionaisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfissionaisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfissionaisGroupByArgs['orderBy'] }
        : { orderBy?: ProfissionaisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfissionaisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfissionaisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profissionais model
   */
  readonly fields: ProfissionaisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profissionais.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfissionaisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agendamentos<T extends Profissionais$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, Profissionais$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profissionais model
   */
  interface ProfissionaisFieldRefs {
    readonly id: FieldRef<"Profissionais", 'Int'>
    readonly nome: FieldRef<"Profissionais", 'String'>
    readonly especialidade: FieldRef<"Profissionais", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Profissionais findUnique
   */
  export type ProfissionaisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissionais
     */
    select?: ProfissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissionais
     */
    omit?: ProfissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionaisInclude<ExtArgs> | null
    /**
     * Filter, which Profissionais to fetch.
     */
    where: ProfissionaisWhereUniqueInput
  }

  /**
   * Profissionais findUniqueOrThrow
   */
  export type ProfissionaisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissionais
     */
    select?: ProfissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissionais
     */
    omit?: ProfissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionaisInclude<ExtArgs> | null
    /**
     * Filter, which Profissionais to fetch.
     */
    where: ProfissionaisWhereUniqueInput
  }

  /**
   * Profissionais findFirst
   */
  export type ProfissionaisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissionais
     */
    select?: ProfissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissionais
     */
    omit?: ProfissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionaisInclude<ExtArgs> | null
    /**
     * Filter, which Profissionais to fetch.
     */
    where?: ProfissionaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionais to fetch.
     */
    orderBy?: ProfissionaisOrderByWithRelationInput | ProfissionaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profissionais.
     */
    cursor?: ProfissionaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profissionais.
     */
    distinct?: ProfissionaisScalarFieldEnum | ProfissionaisScalarFieldEnum[]
  }

  /**
   * Profissionais findFirstOrThrow
   */
  export type ProfissionaisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissionais
     */
    select?: ProfissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissionais
     */
    omit?: ProfissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionaisInclude<ExtArgs> | null
    /**
     * Filter, which Profissionais to fetch.
     */
    where?: ProfissionaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionais to fetch.
     */
    orderBy?: ProfissionaisOrderByWithRelationInput | ProfissionaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profissionais.
     */
    cursor?: ProfissionaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profissionais.
     */
    distinct?: ProfissionaisScalarFieldEnum | ProfissionaisScalarFieldEnum[]
  }

  /**
   * Profissionais findMany
   */
  export type ProfissionaisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissionais
     */
    select?: ProfissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissionais
     */
    omit?: ProfissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionaisInclude<ExtArgs> | null
    /**
     * Filter, which Profissionais to fetch.
     */
    where?: ProfissionaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionais to fetch.
     */
    orderBy?: ProfissionaisOrderByWithRelationInput | ProfissionaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profissionais.
     */
    cursor?: ProfissionaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionais.
     */
    skip?: number
    distinct?: ProfissionaisScalarFieldEnum | ProfissionaisScalarFieldEnum[]
  }

  /**
   * Profissionais create
   */
  export type ProfissionaisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissionais
     */
    select?: ProfissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissionais
     */
    omit?: ProfissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionaisInclude<ExtArgs> | null
    /**
     * The data needed to create a Profissionais.
     */
    data: XOR<ProfissionaisCreateInput, ProfissionaisUncheckedCreateInput>
  }

  /**
   * Profissionais createMany
   */
  export type ProfissionaisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profissionais.
     */
    data: ProfissionaisCreateManyInput | ProfissionaisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profissionais update
   */
  export type ProfissionaisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissionais
     */
    select?: ProfissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissionais
     */
    omit?: ProfissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionaisInclude<ExtArgs> | null
    /**
     * The data needed to update a Profissionais.
     */
    data: XOR<ProfissionaisUpdateInput, ProfissionaisUncheckedUpdateInput>
    /**
     * Choose, which Profissionais to update.
     */
    where: ProfissionaisWhereUniqueInput
  }

  /**
   * Profissionais updateMany
   */
  export type ProfissionaisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profissionais.
     */
    data: XOR<ProfissionaisUpdateManyMutationInput, ProfissionaisUncheckedUpdateManyInput>
    /**
     * Filter which Profissionais to update
     */
    where?: ProfissionaisWhereInput
    /**
     * Limit how many Profissionais to update.
     */
    limit?: number
  }

  /**
   * Profissionais upsert
   */
  export type ProfissionaisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissionais
     */
    select?: ProfissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissionais
     */
    omit?: ProfissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionaisInclude<ExtArgs> | null
    /**
     * The filter to search for the Profissionais to update in case it exists.
     */
    where: ProfissionaisWhereUniqueInput
    /**
     * In case the Profissionais found by the `where` argument doesn't exist, create a new Profissionais with this data.
     */
    create: XOR<ProfissionaisCreateInput, ProfissionaisUncheckedCreateInput>
    /**
     * In case the Profissionais was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfissionaisUpdateInput, ProfissionaisUncheckedUpdateInput>
  }

  /**
   * Profissionais delete
   */
  export type ProfissionaisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissionais
     */
    select?: ProfissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissionais
     */
    omit?: ProfissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionaisInclude<ExtArgs> | null
    /**
     * Filter which Profissionais to delete.
     */
    where: ProfissionaisWhereUniqueInput
  }

  /**
   * Profissionais deleteMany
   */
  export type ProfissionaisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profissionais to delete
     */
    where?: ProfissionaisWhereInput
    /**
     * Limit how many Profissionais to delete.
     */
    limit?: number
  }

  /**
   * Profissionais.agendamentos
   */
  export type Profissionais$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamentos
     */
    select?: AgendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamentos
     */
    omit?: AgendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentosInclude<ExtArgs> | null
    where?: AgendamentosWhereInput
    orderBy?: AgendamentosOrderByWithRelationInput | AgendamentosOrderByWithRelationInput[]
    cursor?: AgendamentosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendamentosScalarFieldEnum | AgendamentosScalarFieldEnum[]
  }

  /**
   * Profissionais without action
   */
  export type ProfissionaisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissionais
     */
    select?: ProfissionaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissionais
     */
    omit?: ProfissionaisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionaisInclude<ExtArgs> | null
  }


  /**
   * Model Servicos
   */

  export type AggregateServicos = {
    _count: ServicosCountAggregateOutputType | null
    _avg: ServicosAvgAggregateOutputType | null
    _sum: ServicosSumAggregateOutputType | null
    _min: ServicosMinAggregateOutputType | null
    _max: ServicosMaxAggregateOutputType | null
  }

  export type ServicosAvgAggregateOutputType = {
    id: number | null
    preco: number | null
  }

  export type ServicosSumAggregateOutputType = {
    id: number | null
    preco: number | null
  }

  export type ServicosMinAggregateOutputType = {
    id: number | null
    descricao: string | null
    preco: number | null
  }

  export type ServicosMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
    preco: number | null
  }

  export type ServicosCountAggregateOutputType = {
    id: number
    descricao: number
    preco: number
    _all: number
  }


  export type ServicosAvgAggregateInputType = {
    id?: true
    preco?: true
  }

  export type ServicosSumAggregateInputType = {
    id?: true
    preco?: true
  }

  export type ServicosMinAggregateInputType = {
    id?: true
    descricao?: true
    preco?: true
  }

  export type ServicosMaxAggregateInputType = {
    id?: true
    descricao?: true
    preco?: true
  }

  export type ServicosCountAggregateInputType = {
    id?: true
    descricao?: true
    preco?: true
    _all?: true
  }

  export type ServicosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicos to aggregate.
     */
    where?: ServicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicosOrderByWithRelationInput | ServicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servicos
    **/
    _count?: true | ServicosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicosMaxAggregateInputType
  }

  export type GetServicosAggregateType<T extends ServicosAggregateArgs> = {
        [P in keyof T & keyof AggregateServicos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicos[P]>
      : GetScalarType<T[P], AggregateServicos[P]>
  }




  export type ServicosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicosWhereInput
    orderBy?: ServicosOrderByWithAggregationInput | ServicosOrderByWithAggregationInput[]
    by: ServicosScalarFieldEnum[] | ServicosScalarFieldEnum
    having?: ServicosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicosCountAggregateInputType | true
    _avg?: ServicosAvgAggregateInputType
    _sum?: ServicosSumAggregateInputType
    _min?: ServicosMinAggregateInputType
    _max?: ServicosMaxAggregateInputType
  }

  export type ServicosGroupByOutputType = {
    id: number
    descricao: string
    preco: number
    _count: ServicosCountAggregateOutputType | null
    _avg: ServicosAvgAggregateOutputType | null
    _sum: ServicosSumAggregateOutputType | null
    _min: ServicosMinAggregateOutputType | null
    _max: ServicosMaxAggregateOutputType | null
  }

  type GetServicosGroupByPayload<T extends ServicosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicosGroupByOutputType[P]>
            : GetScalarType<T[P], ServicosGroupByOutputType[P]>
        }
      >
    >


  export type ServicosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    preco?: boolean
    agendamentos?: boolean | Servicos$agendamentosArgs<ExtArgs>
    _count?: boolean | ServicosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicos"]>



  export type ServicosSelectScalar = {
    id?: boolean
    descricao?: boolean
    preco?: boolean
  }

  export type ServicosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao" | "preco", ExtArgs["result"]["servicos"]>
  export type ServicosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | Servicos$agendamentosArgs<ExtArgs>
    _count?: boolean | ServicosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ServicosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Servicos"
    objects: {
      agendamentos: Prisma.$AgendamentosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
      preco: number
    }, ExtArgs["result"]["servicos"]>
    composites: {}
  }

  type ServicosGetPayload<S extends boolean | null | undefined | ServicosDefaultArgs> = $Result.GetResult<Prisma.$ServicosPayload, S>

  type ServicosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicosCountAggregateInputType | true
    }

  export interface ServicosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servicos'], meta: { name: 'Servicos' } }
    /**
     * Find zero or one Servicos that matches the filter.
     * @param {ServicosFindUniqueArgs} args - Arguments to find a Servicos
     * @example
     * // Get one Servicos
     * const servicos = await prisma.servicos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicosFindUniqueArgs>(args: SelectSubset<T, ServicosFindUniqueArgs<ExtArgs>>): Prisma__ServicosClient<$Result.GetResult<Prisma.$ServicosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servicos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicosFindUniqueOrThrowArgs} args - Arguments to find a Servicos
     * @example
     * // Get one Servicos
     * const servicos = await prisma.servicos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicosFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicosClient<$Result.GetResult<Prisma.$ServicosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicosFindFirstArgs} args - Arguments to find a Servicos
     * @example
     * // Get one Servicos
     * const servicos = await prisma.servicos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicosFindFirstArgs>(args?: SelectSubset<T, ServicosFindFirstArgs<ExtArgs>>): Prisma__ServicosClient<$Result.GetResult<Prisma.$ServicosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicosFindFirstOrThrowArgs} args - Arguments to find a Servicos
     * @example
     * // Get one Servicos
     * const servicos = await prisma.servicos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicosFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicosFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicosClient<$Result.GetResult<Prisma.$ServicosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicos
     * const servicos = await prisma.servicos.findMany()
     * 
     * // Get first 10 Servicos
     * const servicos = await prisma.servicos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicosWithIdOnly = await prisma.servicos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicosFindManyArgs>(args?: SelectSubset<T, ServicosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servicos.
     * @param {ServicosCreateArgs} args - Arguments to create a Servicos.
     * @example
     * // Create one Servicos
     * const Servicos = await prisma.servicos.create({
     *   data: {
     *     // ... data to create a Servicos
     *   }
     * })
     * 
     */
    create<T extends ServicosCreateArgs>(args: SelectSubset<T, ServicosCreateArgs<ExtArgs>>): Prisma__ServicosClient<$Result.GetResult<Prisma.$ServicosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicos.
     * @param {ServicosCreateManyArgs} args - Arguments to create many Servicos.
     * @example
     * // Create many Servicos
     * const servicos = await prisma.servicos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicosCreateManyArgs>(args?: SelectSubset<T, ServicosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Servicos.
     * @param {ServicosDeleteArgs} args - Arguments to delete one Servicos.
     * @example
     * // Delete one Servicos
     * const Servicos = await prisma.servicos.delete({
     *   where: {
     *     // ... filter to delete one Servicos
     *   }
     * })
     * 
     */
    delete<T extends ServicosDeleteArgs>(args: SelectSubset<T, ServicosDeleteArgs<ExtArgs>>): Prisma__ServicosClient<$Result.GetResult<Prisma.$ServicosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servicos.
     * @param {ServicosUpdateArgs} args - Arguments to update one Servicos.
     * @example
     * // Update one Servicos
     * const servicos = await prisma.servicos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicosUpdateArgs>(args: SelectSubset<T, ServicosUpdateArgs<ExtArgs>>): Prisma__ServicosClient<$Result.GetResult<Prisma.$ServicosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicos.
     * @param {ServicosDeleteManyArgs} args - Arguments to filter Servicos to delete.
     * @example
     * // Delete a few Servicos
     * const { count } = await prisma.servicos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicosDeleteManyArgs>(args?: SelectSubset<T, ServicosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicos
     * const servicos = await prisma.servicos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicosUpdateManyArgs>(args: SelectSubset<T, ServicosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Servicos.
     * @param {ServicosUpsertArgs} args - Arguments to update or create a Servicos.
     * @example
     * // Update or create a Servicos
     * const servicos = await prisma.servicos.upsert({
     *   create: {
     *     // ... data to create a Servicos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servicos we want to update
     *   }
     * })
     */
    upsert<T extends ServicosUpsertArgs>(args: SelectSubset<T, ServicosUpsertArgs<ExtArgs>>): Prisma__ServicosClient<$Result.GetResult<Prisma.$ServicosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicosCountArgs} args - Arguments to filter Servicos to count.
     * @example
     * // Count the number of Servicos
     * const count = await prisma.servicos.count({
     *   where: {
     *     // ... the filter for the Servicos we want to count
     *   }
     * })
    **/
    count<T extends ServicosCountArgs>(
      args?: Subset<T, ServicosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicosAggregateArgs>(args: Subset<T, ServicosAggregateArgs>): Prisma.PrismaPromise<GetServicosAggregateType<T>>

    /**
     * Group by Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServicosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicosGroupByArgs['orderBy'] }
        : { orderBy?: ServicosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServicosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servicos model
   */
  readonly fields: ServicosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servicos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agendamentos<T extends Servicos$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, Servicos$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Servicos model
   */
  interface ServicosFieldRefs {
    readonly id: FieldRef<"Servicos", 'Int'>
    readonly descricao: FieldRef<"Servicos", 'String'>
    readonly preco: FieldRef<"Servicos", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Servicos findUnique
   */
  export type ServicosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicos
     */
    select?: ServicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicos
     */
    omit?: ServicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicosInclude<ExtArgs> | null
    /**
     * Filter, which Servicos to fetch.
     */
    where: ServicosWhereUniqueInput
  }

  /**
   * Servicos findUniqueOrThrow
   */
  export type ServicosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicos
     */
    select?: ServicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicos
     */
    omit?: ServicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicosInclude<ExtArgs> | null
    /**
     * Filter, which Servicos to fetch.
     */
    where: ServicosWhereUniqueInput
  }

  /**
   * Servicos findFirst
   */
  export type ServicosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicos
     */
    select?: ServicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicos
     */
    omit?: ServicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicosInclude<ExtArgs> | null
    /**
     * Filter, which Servicos to fetch.
     */
    where?: ServicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicosOrderByWithRelationInput | ServicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicos.
     */
    cursor?: ServicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicos.
     */
    distinct?: ServicosScalarFieldEnum | ServicosScalarFieldEnum[]
  }

  /**
   * Servicos findFirstOrThrow
   */
  export type ServicosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicos
     */
    select?: ServicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicos
     */
    omit?: ServicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicosInclude<ExtArgs> | null
    /**
     * Filter, which Servicos to fetch.
     */
    where?: ServicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicosOrderByWithRelationInput | ServicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicos.
     */
    cursor?: ServicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicos.
     */
    distinct?: ServicosScalarFieldEnum | ServicosScalarFieldEnum[]
  }

  /**
   * Servicos findMany
   */
  export type ServicosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicos
     */
    select?: ServicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicos
     */
    omit?: ServicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicosInclude<ExtArgs> | null
    /**
     * Filter, which Servicos to fetch.
     */
    where?: ServicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicosOrderByWithRelationInput | ServicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servicos.
     */
    cursor?: ServicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    distinct?: ServicosScalarFieldEnum | ServicosScalarFieldEnum[]
  }

  /**
   * Servicos create
   */
  export type ServicosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicos
     */
    select?: ServicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicos
     */
    omit?: ServicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicosInclude<ExtArgs> | null
    /**
     * The data needed to create a Servicos.
     */
    data: XOR<ServicosCreateInput, ServicosUncheckedCreateInput>
  }

  /**
   * Servicos createMany
   */
  export type ServicosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servicos.
     */
    data: ServicosCreateManyInput | ServicosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servicos update
   */
  export type ServicosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicos
     */
    select?: ServicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicos
     */
    omit?: ServicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicosInclude<ExtArgs> | null
    /**
     * The data needed to update a Servicos.
     */
    data: XOR<ServicosUpdateInput, ServicosUncheckedUpdateInput>
    /**
     * Choose, which Servicos to update.
     */
    where: ServicosWhereUniqueInput
  }

  /**
   * Servicos updateMany
   */
  export type ServicosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servicos.
     */
    data: XOR<ServicosUpdateManyMutationInput, ServicosUncheckedUpdateManyInput>
    /**
     * Filter which Servicos to update
     */
    where?: ServicosWhereInput
    /**
     * Limit how many Servicos to update.
     */
    limit?: number
  }

  /**
   * Servicos upsert
   */
  export type ServicosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicos
     */
    select?: ServicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicos
     */
    omit?: ServicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicosInclude<ExtArgs> | null
    /**
     * The filter to search for the Servicos to update in case it exists.
     */
    where: ServicosWhereUniqueInput
    /**
     * In case the Servicos found by the `where` argument doesn't exist, create a new Servicos with this data.
     */
    create: XOR<ServicosCreateInput, ServicosUncheckedCreateInput>
    /**
     * In case the Servicos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicosUpdateInput, ServicosUncheckedUpdateInput>
  }

  /**
   * Servicos delete
   */
  export type ServicosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicos
     */
    select?: ServicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicos
     */
    omit?: ServicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicosInclude<ExtArgs> | null
    /**
     * Filter which Servicos to delete.
     */
    where: ServicosWhereUniqueInput
  }

  /**
   * Servicos deleteMany
   */
  export type ServicosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicos to delete
     */
    where?: ServicosWhereInput
    /**
     * Limit how many Servicos to delete.
     */
    limit?: number
  }

  /**
   * Servicos.agendamentos
   */
  export type Servicos$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamentos
     */
    select?: AgendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamentos
     */
    omit?: AgendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentosInclude<ExtArgs> | null
    where?: AgendamentosWhereInput
    orderBy?: AgendamentosOrderByWithRelationInput | AgendamentosOrderByWithRelationInput[]
    cursor?: AgendamentosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendamentosScalarFieldEnum | AgendamentosScalarFieldEnum[]
  }

  /**
   * Servicos without action
   */
  export type ServicosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicos
     */
    select?: ServicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicos
     */
    omit?: ServicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicosInclude<ExtArgs> | null
  }


  /**
   * Model Agendamentos
   */

  export type AggregateAgendamentos = {
    _count: AgendamentosCountAggregateOutputType | null
    _avg: AgendamentosAvgAggregateOutputType | null
    _sum: AgendamentosSumAggregateOutputType | null
    _min: AgendamentosMinAggregateOutputType | null
    _max: AgendamentosMaxAggregateOutputType | null
  }

  export type AgendamentosAvgAggregateOutputType = {
    id: number | null
    clienteId: number | null
    profissionalId: number | null
  }

  export type AgendamentosSumAggregateOutputType = {
    id: number | null
    clienteId: number | null
    profissionalId: number | null
  }

  export type AgendamentosMinAggregateOutputType = {
    id: number | null
    dataHora: Date | null
    clienteId: number | null
    profissionalId: number | null
  }

  export type AgendamentosMaxAggregateOutputType = {
    id: number | null
    dataHora: Date | null
    clienteId: number | null
    profissionalId: number | null
  }

  export type AgendamentosCountAggregateOutputType = {
    id: number
    dataHora: number
    clienteId: number
    profissionalId: number
    _all: number
  }


  export type AgendamentosAvgAggregateInputType = {
    id?: true
    clienteId?: true
    profissionalId?: true
  }

  export type AgendamentosSumAggregateInputType = {
    id?: true
    clienteId?: true
    profissionalId?: true
  }

  export type AgendamentosMinAggregateInputType = {
    id?: true
    dataHora?: true
    clienteId?: true
    profissionalId?: true
  }

  export type AgendamentosMaxAggregateInputType = {
    id?: true
    dataHora?: true
    clienteId?: true
    profissionalId?: true
  }

  export type AgendamentosCountAggregateInputType = {
    id?: true
    dataHora?: true
    clienteId?: true
    profissionalId?: true
    _all?: true
  }

  export type AgendamentosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agendamentos to aggregate.
     */
    where?: AgendamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentosOrderByWithRelationInput | AgendamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgendamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agendamentos
    **/
    _count?: true | AgendamentosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgendamentosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgendamentosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgendamentosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgendamentosMaxAggregateInputType
  }

  export type GetAgendamentosAggregateType<T extends AgendamentosAggregateArgs> = {
        [P in keyof T & keyof AggregateAgendamentos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgendamentos[P]>
      : GetScalarType<T[P], AggregateAgendamentos[P]>
  }




  export type AgendamentosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentosWhereInput
    orderBy?: AgendamentosOrderByWithAggregationInput | AgendamentosOrderByWithAggregationInput[]
    by: AgendamentosScalarFieldEnum[] | AgendamentosScalarFieldEnum
    having?: AgendamentosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgendamentosCountAggregateInputType | true
    _avg?: AgendamentosAvgAggregateInputType
    _sum?: AgendamentosSumAggregateInputType
    _min?: AgendamentosMinAggregateInputType
    _max?: AgendamentosMaxAggregateInputType
  }

  export type AgendamentosGroupByOutputType = {
    id: number
    dataHora: Date
    clienteId: number
    profissionalId: number
    _count: AgendamentosCountAggregateOutputType | null
    _avg: AgendamentosAvgAggregateOutputType | null
    _sum: AgendamentosSumAggregateOutputType | null
    _min: AgendamentosMinAggregateOutputType | null
    _max: AgendamentosMaxAggregateOutputType | null
  }

  type GetAgendamentosGroupByPayload<T extends AgendamentosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgendamentosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgendamentosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgendamentosGroupByOutputType[P]>
            : GetScalarType<T[P], AgendamentosGroupByOutputType[P]>
        }
      >
    >


  export type AgendamentosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataHora?: boolean
    clienteId?: boolean
    profissionalId?: boolean
    cliente?: boolean | ClientesDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionaisDefaultArgs<ExtArgs>
    servicos?: boolean | Agendamentos$servicosArgs<ExtArgs>
    _count?: boolean | AgendamentosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamentos"]>



  export type AgendamentosSelectScalar = {
    id?: boolean
    dataHora?: boolean
    clienteId?: boolean
    profissionalId?: boolean
  }

  export type AgendamentosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dataHora" | "clienteId" | "profissionalId", ExtArgs["result"]["agendamentos"]>
  export type AgendamentosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClientesDefaultArgs<ExtArgs>
    profissional?: boolean | ProfissionaisDefaultArgs<ExtArgs>
    servicos?: boolean | Agendamentos$servicosArgs<ExtArgs>
    _count?: boolean | AgendamentosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AgendamentosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agendamentos"
    objects: {
      cliente: Prisma.$ClientesPayload<ExtArgs>
      profissional: Prisma.$ProfissionaisPayload<ExtArgs>
      servicos: Prisma.$ServicosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dataHora: Date
      clienteId: number
      profissionalId: number
    }, ExtArgs["result"]["agendamentos"]>
    composites: {}
  }

  type AgendamentosGetPayload<S extends boolean | null | undefined | AgendamentosDefaultArgs> = $Result.GetResult<Prisma.$AgendamentosPayload, S>

  type AgendamentosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgendamentosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgendamentosCountAggregateInputType | true
    }

  export interface AgendamentosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agendamentos'], meta: { name: 'Agendamentos' } }
    /**
     * Find zero or one Agendamentos that matches the filter.
     * @param {AgendamentosFindUniqueArgs} args - Arguments to find a Agendamentos
     * @example
     * // Get one Agendamentos
     * const agendamentos = await prisma.agendamentos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgendamentosFindUniqueArgs>(args: SelectSubset<T, AgendamentosFindUniqueArgs<ExtArgs>>): Prisma__AgendamentosClient<$Result.GetResult<Prisma.$AgendamentosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agendamentos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgendamentosFindUniqueOrThrowArgs} args - Arguments to find a Agendamentos
     * @example
     * // Get one Agendamentos
     * const agendamentos = await prisma.agendamentos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgendamentosFindUniqueOrThrowArgs>(args: SelectSubset<T, AgendamentosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgendamentosClient<$Result.GetResult<Prisma.$AgendamentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentosFindFirstArgs} args - Arguments to find a Agendamentos
     * @example
     * // Get one Agendamentos
     * const agendamentos = await prisma.agendamentos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgendamentosFindFirstArgs>(args?: SelectSubset<T, AgendamentosFindFirstArgs<ExtArgs>>): Prisma__AgendamentosClient<$Result.GetResult<Prisma.$AgendamentosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendamentos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentosFindFirstOrThrowArgs} args - Arguments to find a Agendamentos
     * @example
     * // Get one Agendamentos
     * const agendamentos = await prisma.agendamentos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgendamentosFindFirstOrThrowArgs>(args?: SelectSubset<T, AgendamentosFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgendamentosClient<$Result.GetResult<Prisma.$AgendamentosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agendamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agendamentos
     * const agendamentos = await prisma.agendamentos.findMany()
     * 
     * // Get first 10 Agendamentos
     * const agendamentos = await prisma.agendamentos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agendamentosWithIdOnly = await prisma.agendamentos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgendamentosFindManyArgs>(args?: SelectSubset<T, AgendamentosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agendamentos.
     * @param {AgendamentosCreateArgs} args - Arguments to create a Agendamentos.
     * @example
     * // Create one Agendamentos
     * const Agendamentos = await prisma.agendamentos.create({
     *   data: {
     *     // ... data to create a Agendamentos
     *   }
     * })
     * 
     */
    create<T extends AgendamentosCreateArgs>(args: SelectSubset<T, AgendamentosCreateArgs<ExtArgs>>): Prisma__AgendamentosClient<$Result.GetResult<Prisma.$AgendamentosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agendamentos.
     * @param {AgendamentosCreateManyArgs} args - Arguments to create many Agendamentos.
     * @example
     * // Create many Agendamentos
     * const agendamentos = await prisma.agendamentos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgendamentosCreateManyArgs>(args?: SelectSubset<T, AgendamentosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Agendamentos.
     * @param {AgendamentosDeleteArgs} args - Arguments to delete one Agendamentos.
     * @example
     * // Delete one Agendamentos
     * const Agendamentos = await prisma.agendamentos.delete({
     *   where: {
     *     // ... filter to delete one Agendamentos
     *   }
     * })
     * 
     */
    delete<T extends AgendamentosDeleteArgs>(args: SelectSubset<T, AgendamentosDeleteArgs<ExtArgs>>): Prisma__AgendamentosClient<$Result.GetResult<Prisma.$AgendamentosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agendamentos.
     * @param {AgendamentosUpdateArgs} args - Arguments to update one Agendamentos.
     * @example
     * // Update one Agendamentos
     * const agendamentos = await prisma.agendamentos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgendamentosUpdateArgs>(args: SelectSubset<T, AgendamentosUpdateArgs<ExtArgs>>): Prisma__AgendamentosClient<$Result.GetResult<Prisma.$AgendamentosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agendamentos.
     * @param {AgendamentosDeleteManyArgs} args - Arguments to filter Agendamentos to delete.
     * @example
     * // Delete a few Agendamentos
     * const { count } = await prisma.agendamentos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgendamentosDeleteManyArgs>(args?: SelectSubset<T, AgendamentosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agendamentos
     * const agendamentos = await prisma.agendamentos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgendamentosUpdateManyArgs>(args: SelectSubset<T, AgendamentosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agendamentos.
     * @param {AgendamentosUpsertArgs} args - Arguments to update or create a Agendamentos.
     * @example
     * // Update or create a Agendamentos
     * const agendamentos = await prisma.agendamentos.upsert({
     *   create: {
     *     // ... data to create a Agendamentos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agendamentos we want to update
     *   }
     * })
     */
    upsert<T extends AgendamentosUpsertArgs>(args: SelectSubset<T, AgendamentosUpsertArgs<ExtArgs>>): Prisma__AgendamentosClient<$Result.GetResult<Prisma.$AgendamentosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentosCountArgs} args - Arguments to filter Agendamentos to count.
     * @example
     * // Count the number of Agendamentos
     * const count = await prisma.agendamentos.count({
     *   where: {
     *     // ... the filter for the Agendamentos we want to count
     *   }
     * })
    **/
    count<T extends AgendamentosCountArgs>(
      args?: Subset<T, AgendamentosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgendamentosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgendamentosAggregateArgs>(args: Subset<T, AgendamentosAggregateArgs>): Prisma.PrismaPromise<GetAgendamentosAggregateType<T>>

    /**
     * Group by Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgendamentosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgendamentosGroupByArgs['orderBy'] }
        : { orderBy?: AgendamentosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgendamentosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendamentosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agendamentos model
   */
  readonly fields: AgendamentosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agendamentos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgendamentosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClientesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientesDefaultArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profissional<T extends ProfissionaisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfissionaisDefaultArgs<ExtArgs>>): Prisma__ProfissionaisClient<$Result.GetResult<Prisma.$ProfissionaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servicos<T extends Agendamentos$servicosArgs<ExtArgs> = {}>(args?: Subset<T, Agendamentos$servicosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Agendamentos model
   */
  interface AgendamentosFieldRefs {
    readonly id: FieldRef<"Agendamentos", 'Int'>
    readonly dataHora: FieldRef<"Agendamentos", 'DateTime'>
    readonly clienteId: FieldRef<"Agendamentos", 'Int'>
    readonly profissionalId: FieldRef<"Agendamentos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Agendamentos findUnique
   */
  export type AgendamentosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamentos
     */
    select?: AgendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamentos
     */
    omit?: AgendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentosInclude<ExtArgs> | null
    /**
     * Filter, which Agendamentos to fetch.
     */
    where: AgendamentosWhereUniqueInput
  }

  /**
   * Agendamentos findUniqueOrThrow
   */
  export type AgendamentosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamentos
     */
    select?: AgendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamentos
     */
    omit?: AgendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentosInclude<ExtArgs> | null
    /**
     * Filter, which Agendamentos to fetch.
     */
    where: AgendamentosWhereUniqueInput
  }

  /**
   * Agendamentos findFirst
   */
  export type AgendamentosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamentos
     */
    select?: AgendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamentos
     */
    omit?: AgendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentosInclude<ExtArgs> | null
    /**
     * Filter, which Agendamentos to fetch.
     */
    where?: AgendamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentosOrderByWithRelationInput | AgendamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agendamentos.
     */
    cursor?: AgendamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agendamentos.
     */
    distinct?: AgendamentosScalarFieldEnum | AgendamentosScalarFieldEnum[]
  }

  /**
   * Agendamentos findFirstOrThrow
   */
  export type AgendamentosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamentos
     */
    select?: AgendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamentos
     */
    omit?: AgendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentosInclude<ExtArgs> | null
    /**
     * Filter, which Agendamentos to fetch.
     */
    where?: AgendamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentosOrderByWithRelationInput | AgendamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agendamentos.
     */
    cursor?: AgendamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agendamentos.
     */
    distinct?: AgendamentosScalarFieldEnum | AgendamentosScalarFieldEnum[]
  }

  /**
   * Agendamentos findMany
   */
  export type AgendamentosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamentos
     */
    select?: AgendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamentos
     */
    omit?: AgendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentosInclude<ExtArgs> | null
    /**
     * Filter, which Agendamentos to fetch.
     */
    where?: AgendamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentosOrderByWithRelationInput | AgendamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agendamentos.
     */
    cursor?: AgendamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    distinct?: AgendamentosScalarFieldEnum | AgendamentosScalarFieldEnum[]
  }

  /**
   * Agendamentos create
   */
  export type AgendamentosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamentos
     */
    select?: AgendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamentos
     */
    omit?: AgendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentosInclude<ExtArgs> | null
    /**
     * The data needed to create a Agendamentos.
     */
    data: XOR<AgendamentosCreateInput, AgendamentosUncheckedCreateInput>
  }

  /**
   * Agendamentos createMany
   */
  export type AgendamentosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agendamentos.
     */
    data: AgendamentosCreateManyInput | AgendamentosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agendamentos update
   */
  export type AgendamentosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamentos
     */
    select?: AgendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamentos
     */
    omit?: AgendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentosInclude<ExtArgs> | null
    /**
     * The data needed to update a Agendamentos.
     */
    data: XOR<AgendamentosUpdateInput, AgendamentosUncheckedUpdateInput>
    /**
     * Choose, which Agendamentos to update.
     */
    where: AgendamentosWhereUniqueInput
  }

  /**
   * Agendamentos updateMany
   */
  export type AgendamentosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agendamentos.
     */
    data: XOR<AgendamentosUpdateManyMutationInput, AgendamentosUncheckedUpdateManyInput>
    /**
     * Filter which Agendamentos to update
     */
    where?: AgendamentosWhereInput
    /**
     * Limit how many Agendamentos to update.
     */
    limit?: number
  }

  /**
   * Agendamentos upsert
   */
  export type AgendamentosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamentos
     */
    select?: AgendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamentos
     */
    omit?: AgendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentosInclude<ExtArgs> | null
    /**
     * The filter to search for the Agendamentos to update in case it exists.
     */
    where: AgendamentosWhereUniqueInput
    /**
     * In case the Agendamentos found by the `where` argument doesn't exist, create a new Agendamentos with this data.
     */
    create: XOR<AgendamentosCreateInput, AgendamentosUncheckedCreateInput>
    /**
     * In case the Agendamentos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgendamentosUpdateInput, AgendamentosUncheckedUpdateInput>
  }

  /**
   * Agendamentos delete
   */
  export type AgendamentosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamentos
     */
    select?: AgendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamentos
     */
    omit?: AgendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentosInclude<ExtArgs> | null
    /**
     * Filter which Agendamentos to delete.
     */
    where: AgendamentosWhereUniqueInput
  }

  /**
   * Agendamentos deleteMany
   */
  export type AgendamentosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agendamentos to delete
     */
    where?: AgendamentosWhereInput
    /**
     * Limit how many Agendamentos to delete.
     */
    limit?: number
  }

  /**
   * Agendamentos.servicos
   */
  export type Agendamentos$servicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicos
     */
    select?: ServicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicos
     */
    omit?: ServicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicosInclude<ExtArgs> | null
    where?: ServicosWhereInput
    orderBy?: ServicosOrderByWithRelationInput | ServicosOrderByWithRelationInput[]
    cursor?: ServicosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicosScalarFieldEnum | ServicosScalarFieldEnum[]
  }

  /**
   * Agendamentos without action
   */
  export type AgendamentosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamentos
     */
    select?: AgendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamentos
     */
    omit?: AgendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentosInclude<ExtArgs> | null
  }


  /**
   * Model Vendedores
   */

  export type AggregateVendedores = {
    _count: VendedoresCountAggregateOutputType | null
    _avg: VendedoresAvgAggregateOutputType | null
    _sum: VendedoresSumAggregateOutputType | null
    _min: VendedoresMinAggregateOutputType | null
    _max: VendedoresMaxAggregateOutputType | null
  }

  export type VendedoresAvgAggregateOutputType = {
    id: number | null
  }

  export type VendedoresSumAggregateOutputType = {
    id: number | null
  }

  export type VendedoresMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type VendedoresMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type VendedoresCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type VendedoresAvgAggregateInputType = {
    id?: true
  }

  export type VendedoresSumAggregateInputType = {
    id?: true
  }

  export type VendedoresMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type VendedoresMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type VendedoresCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type VendedoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendedores to aggregate.
     */
    where?: VendedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendedores to fetch.
     */
    orderBy?: VendedoresOrderByWithRelationInput | VendedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendedores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendedores
    **/
    _count?: true | VendedoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendedoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendedoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendedoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendedoresMaxAggregateInputType
  }

  export type GetVendedoresAggregateType<T extends VendedoresAggregateArgs> = {
        [P in keyof T & keyof AggregateVendedores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendedores[P]>
      : GetScalarType<T[P], AggregateVendedores[P]>
  }




  export type VendedoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendedoresWhereInput
    orderBy?: VendedoresOrderByWithAggregationInput | VendedoresOrderByWithAggregationInput[]
    by: VendedoresScalarFieldEnum[] | VendedoresScalarFieldEnum
    having?: VendedoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendedoresCountAggregateInputType | true
    _avg?: VendedoresAvgAggregateInputType
    _sum?: VendedoresSumAggregateInputType
    _min?: VendedoresMinAggregateInputType
    _max?: VendedoresMaxAggregateInputType
  }

  export type VendedoresGroupByOutputType = {
    id: number
    nome: string
    _count: VendedoresCountAggregateOutputType | null
    _avg: VendedoresAvgAggregateOutputType | null
    _sum: VendedoresSumAggregateOutputType | null
    _min: VendedoresMinAggregateOutputType | null
    _max: VendedoresMaxAggregateOutputType | null
  }

  type GetVendedoresGroupByPayload<T extends VendedoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendedoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendedoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendedoresGroupByOutputType[P]>
            : GetScalarType<T[P], VendedoresGroupByOutputType[P]>
        }
      >
    >


  export type VendedoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    vendas?: boolean | Vendedores$vendasArgs<ExtArgs>
    _count?: boolean | VendedoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendedores"]>



  export type VendedoresSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type VendedoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["vendedores"]>
  export type VendedoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendas?: boolean | Vendedores$vendasArgs<ExtArgs>
    _count?: boolean | VendedoresCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VendedoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendedores"
    objects: {
      vendas: Prisma.$VendasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["vendedores"]>
    composites: {}
  }

  type VendedoresGetPayload<S extends boolean | null | undefined | VendedoresDefaultArgs> = $Result.GetResult<Prisma.$VendedoresPayload, S>

  type VendedoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendedoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendedoresCountAggregateInputType | true
    }

  export interface VendedoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendedores'], meta: { name: 'Vendedores' } }
    /**
     * Find zero or one Vendedores that matches the filter.
     * @param {VendedoresFindUniqueArgs} args - Arguments to find a Vendedores
     * @example
     * // Get one Vendedores
     * const vendedores = await prisma.vendedores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendedoresFindUniqueArgs>(args: SelectSubset<T, VendedoresFindUniqueArgs<ExtArgs>>): Prisma__VendedoresClient<$Result.GetResult<Prisma.$VendedoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendedores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendedoresFindUniqueOrThrowArgs} args - Arguments to find a Vendedores
     * @example
     * // Get one Vendedores
     * const vendedores = await prisma.vendedores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendedoresFindUniqueOrThrowArgs>(args: SelectSubset<T, VendedoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendedoresClient<$Result.GetResult<Prisma.$VendedoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendedores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedoresFindFirstArgs} args - Arguments to find a Vendedores
     * @example
     * // Get one Vendedores
     * const vendedores = await prisma.vendedores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendedoresFindFirstArgs>(args?: SelectSubset<T, VendedoresFindFirstArgs<ExtArgs>>): Prisma__VendedoresClient<$Result.GetResult<Prisma.$VendedoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendedores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedoresFindFirstOrThrowArgs} args - Arguments to find a Vendedores
     * @example
     * // Get one Vendedores
     * const vendedores = await prisma.vendedores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendedoresFindFirstOrThrowArgs>(args?: SelectSubset<T, VendedoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendedoresClient<$Result.GetResult<Prisma.$VendedoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendedores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendedores
     * const vendedores = await prisma.vendedores.findMany()
     * 
     * // Get first 10 Vendedores
     * const vendedores = await prisma.vendedores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendedoresWithIdOnly = await prisma.vendedores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendedoresFindManyArgs>(args?: SelectSubset<T, VendedoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendedoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendedores.
     * @param {VendedoresCreateArgs} args - Arguments to create a Vendedores.
     * @example
     * // Create one Vendedores
     * const Vendedores = await prisma.vendedores.create({
     *   data: {
     *     // ... data to create a Vendedores
     *   }
     * })
     * 
     */
    create<T extends VendedoresCreateArgs>(args: SelectSubset<T, VendedoresCreateArgs<ExtArgs>>): Prisma__VendedoresClient<$Result.GetResult<Prisma.$VendedoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendedores.
     * @param {VendedoresCreateManyArgs} args - Arguments to create many Vendedores.
     * @example
     * // Create many Vendedores
     * const vendedores = await prisma.vendedores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendedoresCreateManyArgs>(args?: SelectSubset<T, VendedoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vendedores.
     * @param {VendedoresDeleteArgs} args - Arguments to delete one Vendedores.
     * @example
     * // Delete one Vendedores
     * const Vendedores = await prisma.vendedores.delete({
     *   where: {
     *     // ... filter to delete one Vendedores
     *   }
     * })
     * 
     */
    delete<T extends VendedoresDeleteArgs>(args: SelectSubset<T, VendedoresDeleteArgs<ExtArgs>>): Prisma__VendedoresClient<$Result.GetResult<Prisma.$VendedoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendedores.
     * @param {VendedoresUpdateArgs} args - Arguments to update one Vendedores.
     * @example
     * // Update one Vendedores
     * const vendedores = await prisma.vendedores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendedoresUpdateArgs>(args: SelectSubset<T, VendedoresUpdateArgs<ExtArgs>>): Prisma__VendedoresClient<$Result.GetResult<Prisma.$VendedoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendedores.
     * @param {VendedoresDeleteManyArgs} args - Arguments to filter Vendedores to delete.
     * @example
     * // Delete a few Vendedores
     * const { count } = await prisma.vendedores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendedoresDeleteManyArgs>(args?: SelectSubset<T, VendedoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendedores
     * const vendedores = await prisma.vendedores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendedoresUpdateManyArgs>(args: SelectSubset<T, VendedoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vendedores.
     * @param {VendedoresUpsertArgs} args - Arguments to update or create a Vendedores.
     * @example
     * // Update or create a Vendedores
     * const vendedores = await prisma.vendedores.upsert({
     *   create: {
     *     // ... data to create a Vendedores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendedores we want to update
     *   }
     * })
     */
    upsert<T extends VendedoresUpsertArgs>(args: SelectSubset<T, VendedoresUpsertArgs<ExtArgs>>): Prisma__VendedoresClient<$Result.GetResult<Prisma.$VendedoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedoresCountArgs} args - Arguments to filter Vendedores to count.
     * @example
     * // Count the number of Vendedores
     * const count = await prisma.vendedores.count({
     *   where: {
     *     // ... the filter for the Vendedores we want to count
     *   }
     * })
    **/
    count<T extends VendedoresCountArgs>(
      args?: Subset<T, VendedoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendedoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendedoresAggregateArgs>(args: Subset<T, VendedoresAggregateArgs>): Prisma.PrismaPromise<GetVendedoresAggregateType<T>>

    /**
     * Group by Vendedores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedoresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendedoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendedoresGroupByArgs['orderBy'] }
        : { orderBy?: VendedoresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendedoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendedoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendedores model
   */
  readonly fields: VendedoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendedores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendedoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendas<T extends Vendedores$vendasArgs<ExtArgs> = {}>(args?: Subset<T, Vendedores$vendasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vendedores model
   */
  interface VendedoresFieldRefs {
    readonly id: FieldRef<"Vendedores", 'Int'>
    readonly nome: FieldRef<"Vendedores", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vendedores findUnique
   */
  export type VendedoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedores
     */
    select?: VendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedores
     */
    omit?: VendedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedoresInclude<ExtArgs> | null
    /**
     * Filter, which Vendedores to fetch.
     */
    where: VendedoresWhereUniqueInput
  }

  /**
   * Vendedores findUniqueOrThrow
   */
  export type VendedoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedores
     */
    select?: VendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedores
     */
    omit?: VendedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedoresInclude<ExtArgs> | null
    /**
     * Filter, which Vendedores to fetch.
     */
    where: VendedoresWhereUniqueInput
  }

  /**
   * Vendedores findFirst
   */
  export type VendedoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedores
     */
    select?: VendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedores
     */
    omit?: VendedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedoresInclude<ExtArgs> | null
    /**
     * Filter, which Vendedores to fetch.
     */
    where?: VendedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendedores to fetch.
     */
    orderBy?: VendedoresOrderByWithRelationInput | VendedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendedores.
     */
    cursor?: VendedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendedores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendedores.
     */
    distinct?: VendedoresScalarFieldEnum | VendedoresScalarFieldEnum[]
  }

  /**
   * Vendedores findFirstOrThrow
   */
  export type VendedoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedores
     */
    select?: VendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedores
     */
    omit?: VendedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedoresInclude<ExtArgs> | null
    /**
     * Filter, which Vendedores to fetch.
     */
    where?: VendedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendedores to fetch.
     */
    orderBy?: VendedoresOrderByWithRelationInput | VendedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendedores.
     */
    cursor?: VendedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendedores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendedores.
     */
    distinct?: VendedoresScalarFieldEnum | VendedoresScalarFieldEnum[]
  }

  /**
   * Vendedores findMany
   */
  export type VendedoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedores
     */
    select?: VendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedores
     */
    omit?: VendedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedoresInclude<ExtArgs> | null
    /**
     * Filter, which Vendedores to fetch.
     */
    where?: VendedoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendedores to fetch.
     */
    orderBy?: VendedoresOrderByWithRelationInput | VendedoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendedores.
     */
    cursor?: VendedoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendedores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendedores.
     */
    skip?: number
    distinct?: VendedoresScalarFieldEnum | VendedoresScalarFieldEnum[]
  }

  /**
   * Vendedores create
   */
  export type VendedoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedores
     */
    select?: VendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedores
     */
    omit?: VendedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedoresInclude<ExtArgs> | null
    /**
     * The data needed to create a Vendedores.
     */
    data: XOR<VendedoresCreateInput, VendedoresUncheckedCreateInput>
  }

  /**
   * Vendedores createMany
   */
  export type VendedoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendedores.
     */
    data: VendedoresCreateManyInput | VendedoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendedores update
   */
  export type VendedoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedores
     */
    select?: VendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedores
     */
    omit?: VendedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedoresInclude<ExtArgs> | null
    /**
     * The data needed to update a Vendedores.
     */
    data: XOR<VendedoresUpdateInput, VendedoresUncheckedUpdateInput>
    /**
     * Choose, which Vendedores to update.
     */
    where: VendedoresWhereUniqueInput
  }

  /**
   * Vendedores updateMany
   */
  export type VendedoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendedores.
     */
    data: XOR<VendedoresUpdateManyMutationInput, VendedoresUncheckedUpdateManyInput>
    /**
     * Filter which Vendedores to update
     */
    where?: VendedoresWhereInput
    /**
     * Limit how many Vendedores to update.
     */
    limit?: number
  }

  /**
   * Vendedores upsert
   */
  export type VendedoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedores
     */
    select?: VendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedores
     */
    omit?: VendedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedoresInclude<ExtArgs> | null
    /**
     * The filter to search for the Vendedores to update in case it exists.
     */
    where: VendedoresWhereUniqueInput
    /**
     * In case the Vendedores found by the `where` argument doesn't exist, create a new Vendedores with this data.
     */
    create: XOR<VendedoresCreateInput, VendedoresUncheckedCreateInput>
    /**
     * In case the Vendedores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendedoresUpdateInput, VendedoresUncheckedUpdateInput>
  }

  /**
   * Vendedores delete
   */
  export type VendedoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedores
     */
    select?: VendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedores
     */
    omit?: VendedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedoresInclude<ExtArgs> | null
    /**
     * Filter which Vendedores to delete.
     */
    where: VendedoresWhereUniqueInput
  }

  /**
   * Vendedores deleteMany
   */
  export type VendedoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendedores to delete
     */
    where?: VendedoresWhereInput
    /**
     * Limit how many Vendedores to delete.
     */
    limit?: number
  }

  /**
   * Vendedores.vendas
   */
  export type Vendedores$vendasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendas
     */
    select?: VendasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendas
     */
    omit?: VendasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendasInclude<ExtArgs> | null
    where?: VendasWhereInput
    orderBy?: VendasOrderByWithRelationInput | VendasOrderByWithRelationInput[]
    cursor?: VendasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VendasScalarFieldEnum | VendasScalarFieldEnum[]
  }

  /**
   * Vendedores without action
   */
  export type VendedoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedores
     */
    select?: VendedoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedores
     */
    omit?: VendedoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedoresInclude<ExtArgs> | null
  }


  /**
   * Model Produtos
   */

  export type AggregateProdutos = {
    _count: ProdutosCountAggregateOutputType | null
    _avg: ProdutosAvgAggregateOutputType | null
    _sum: ProdutosSumAggregateOutputType | null
    _min: ProdutosMinAggregateOutputType | null
    _max: ProdutosMaxAggregateOutputType | null
  }

  export type ProdutosAvgAggregateOutputType = {
    id: number | null
    preco: number | null
    estoque: number | null
  }

  export type ProdutosSumAggregateOutputType = {
    id: number | null
    preco: number | null
    estoque: number | null
  }

  export type ProdutosMinAggregateOutputType = {
    id: number | null
    nome: string | null
    preco: number | null
    categoria: string | null
    fabricadoEmMari: boolean | null
    estoque: number | null
  }

  export type ProdutosMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    preco: number | null
    categoria: string | null
    fabricadoEmMari: boolean | null
    estoque: number | null
  }

  export type ProdutosCountAggregateOutputType = {
    id: number
    nome: number
    preco: number
    categoria: number
    fabricadoEmMari: number
    estoque: number
    _all: number
  }


  export type ProdutosAvgAggregateInputType = {
    id?: true
    preco?: true
    estoque?: true
  }

  export type ProdutosSumAggregateInputType = {
    id?: true
    preco?: true
    estoque?: true
  }

  export type ProdutosMinAggregateInputType = {
    id?: true
    nome?: true
    preco?: true
    categoria?: true
    fabricadoEmMari?: true
    estoque?: true
  }

  export type ProdutosMaxAggregateInputType = {
    id?: true
    nome?: true
    preco?: true
    categoria?: true
    fabricadoEmMari?: true
    estoque?: true
  }

  export type ProdutosCountAggregateInputType = {
    id?: true
    nome?: true
    preco?: true
    categoria?: true
    fabricadoEmMari?: true
    estoque?: true
    _all?: true
  }

  export type ProdutosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to aggregate.
     */
    where?: ProdutosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutosOrderByWithRelationInput | ProdutosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutosMaxAggregateInputType
  }

  export type GetProdutosAggregateType<T extends ProdutosAggregateArgs> = {
        [P in keyof T & keyof AggregateProdutos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProdutos[P]>
      : GetScalarType<T[P], AggregateProdutos[P]>
  }




  export type ProdutosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutosWhereInput
    orderBy?: ProdutosOrderByWithAggregationInput | ProdutosOrderByWithAggregationInput[]
    by: ProdutosScalarFieldEnum[] | ProdutosScalarFieldEnum
    having?: ProdutosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutosCountAggregateInputType | true
    _avg?: ProdutosAvgAggregateInputType
    _sum?: ProdutosSumAggregateInputType
    _min?: ProdutosMinAggregateInputType
    _max?: ProdutosMaxAggregateInputType
  }

  export type ProdutosGroupByOutputType = {
    id: number
    nome: string
    preco: number
    categoria: string
    fabricadoEmMari: boolean
    estoque: number
    _count: ProdutosCountAggregateOutputType | null
    _avg: ProdutosAvgAggregateOutputType | null
    _sum: ProdutosSumAggregateOutputType | null
    _min: ProdutosMinAggregateOutputType | null
    _max: ProdutosMaxAggregateOutputType | null
  }

  type GetProdutosGroupByPayload<T extends ProdutosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutosGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutosGroupByOutputType[P]>
        }
      >
    >


  export type ProdutosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    preco?: boolean
    categoria?: boolean
    fabricadoEmMari?: boolean
    estoque?: boolean
    itensVenda?: boolean | Produtos$itensVendaArgs<ExtArgs>
    _count?: boolean | ProdutosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produtos"]>



  export type ProdutosSelectScalar = {
    id?: boolean
    nome?: boolean
    preco?: boolean
    categoria?: boolean
    fabricadoEmMari?: boolean
    estoque?: boolean
  }

  export type ProdutosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "preco" | "categoria" | "fabricadoEmMari" | "estoque", ExtArgs["result"]["produtos"]>
  export type ProdutosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itensVenda?: boolean | Produtos$itensVendaArgs<ExtArgs>
    _count?: boolean | ProdutosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProdutosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produtos"
    objects: {
      itensVenda: Prisma.$ItensVendaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      preco: number
      categoria: string
      fabricadoEmMari: boolean
      estoque: number
    }, ExtArgs["result"]["produtos"]>
    composites: {}
  }

  type ProdutosGetPayload<S extends boolean | null | undefined | ProdutosDefaultArgs> = $Result.GetResult<Prisma.$ProdutosPayload, S>

  type ProdutosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutosCountAggregateInputType | true
    }

  export interface ProdutosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produtos'], meta: { name: 'Produtos' } }
    /**
     * Find zero or one Produtos that matches the filter.
     * @param {ProdutosFindUniqueArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutosFindUniqueArgs>(args: SelectSubset<T, ProdutosFindUniqueArgs<ExtArgs>>): Prisma__ProdutosClient<$Result.GetResult<Prisma.$ProdutosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produtos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutosFindUniqueOrThrowArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutosFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutosClient<$Result.GetResult<Prisma.$ProdutosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutosFindFirstArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutosFindFirstArgs>(args?: SelectSubset<T, ProdutosFindFirstArgs<ExtArgs>>): Prisma__ProdutosClient<$Result.GetResult<Prisma.$ProdutosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produtos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutosFindFirstOrThrowArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutosFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutosFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutosClient<$Result.GetResult<Prisma.$ProdutosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produtos.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produtos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtosWithIdOnly = await prisma.produtos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutosFindManyArgs>(args?: SelectSubset<T, ProdutosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produtos.
     * @param {ProdutosCreateArgs} args - Arguments to create a Produtos.
     * @example
     * // Create one Produtos
     * const Produtos = await prisma.produtos.create({
     *   data: {
     *     // ... data to create a Produtos
     *   }
     * })
     * 
     */
    create<T extends ProdutosCreateArgs>(args: SelectSubset<T, ProdutosCreateArgs<ExtArgs>>): Prisma__ProdutosClient<$Result.GetResult<Prisma.$ProdutosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {ProdutosCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produtos = await prisma.produtos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutosCreateManyArgs>(args?: SelectSubset<T, ProdutosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Produtos.
     * @param {ProdutosDeleteArgs} args - Arguments to delete one Produtos.
     * @example
     * // Delete one Produtos
     * const Produtos = await prisma.produtos.delete({
     *   where: {
     *     // ... filter to delete one Produtos
     *   }
     * })
     * 
     */
    delete<T extends ProdutosDeleteArgs>(args: SelectSubset<T, ProdutosDeleteArgs<ExtArgs>>): Prisma__ProdutosClient<$Result.GetResult<Prisma.$ProdutosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produtos.
     * @param {ProdutosUpdateArgs} args - Arguments to update one Produtos.
     * @example
     * // Update one Produtos
     * const produtos = await prisma.produtos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutosUpdateArgs>(args: SelectSubset<T, ProdutosUpdateArgs<ExtArgs>>): Prisma__ProdutosClient<$Result.GetResult<Prisma.$ProdutosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutosDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produtos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutosDeleteManyArgs>(args?: SelectSubset<T, ProdutosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produtos = await prisma.produtos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutosUpdateManyArgs>(args: SelectSubset<T, ProdutosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produtos.
     * @param {ProdutosUpsertArgs} args - Arguments to update or create a Produtos.
     * @example
     * // Update or create a Produtos
     * const produtos = await prisma.produtos.upsert({
     *   create: {
     *     // ... data to create a Produtos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produtos we want to update
     *   }
     * })
     */
    upsert<T extends ProdutosUpsertArgs>(args: SelectSubset<T, ProdutosUpsertArgs<ExtArgs>>): Prisma__ProdutosClient<$Result.GetResult<Prisma.$ProdutosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutosCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produtos.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutosCountArgs>(
      args?: Subset<T, ProdutosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProdutosAggregateArgs>(args: Subset<T, ProdutosAggregateArgs>): Prisma.PrismaPromise<GetProdutosAggregateType<T>>

    /**
     * Group by Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProdutosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutosGroupByArgs['orderBy'] }
        : { orderBy?: ProdutosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProdutosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produtos model
   */
  readonly fields: ProdutosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produtos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itensVenda<T extends Produtos$itensVendaArgs<ExtArgs> = {}>(args?: Subset<T, Produtos$itensVendaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItensVendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Produtos model
   */
  interface ProdutosFieldRefs {
    readonly id: FieldRef<"Produtos", 'Int'>
    readonly nome: FieldRef<"Produtos", 'String'>
    readonly preco: FieldRef<"Produtos", 'Float'>
    readonly categoria: FieldRef<"Produtos", 'String'>
    readonly fabricadoEmMari: FieldRef<"Produtos", 'Boolean'>
    readonly estoque: FieldRef<"Produtos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Produtos findUnique
   */
  export type ProdutosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos
     */
    select?: ProdutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtos
     */
    omit?: ProdutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutosInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where: ProdutosWhereUniqueInput
  }

  /**
   * Produtos findUniqueOrThrow
   */
  export type ProdutosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos
     */
    select?: ProdutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtos
     */
    omit?: ProdutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutosInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where: ProdutosWhereUniqueInput
  }

  /**
   * Produtos findFirst
   */
  export type ProdutosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos
     */
    select?: ProdutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtos
     */
    omit?: ProdutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutosInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutosOrderByWithRelationInput | ProdutosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutosScalarFieldEnum | ProdutosScalarFieldEnum[]
  }

  /**
   * Produtos findFirstOrThrow
   */
  export type ProdutosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos
     */
    select?: ProdutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtos
     */
    omit?: ProdutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutosInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutosOrderByWithRelationInput | ProdutosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutosScalarFieldEnum | ProdutosScalarFieldEnum[]
  }

  /**
   * Produtos findMany
   */
  export type ProdutosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos
     */
    select?: ProdutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtos
     */
    omit?: ProdutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutosInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutosOrderByWithRelationInput | ProdutosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    distinct?: ProdutosScalarFieldEnum | ProdutosScalarFieldEnum[]
  }

  /**
   * Produtos create
   */
  export type ProdutosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos
     */
    select?: ProdutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtos
     */
    omit?: ProdutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutosInclude<ExtArgs> | null
    /**
     * The data needed to create a Produtos.
     */
    data: XOR<ProdutosCreateInput, ProdutosUncheckedCreateInput>
  }

  /**
   * Produtos createMany
   */
  export type ProdutosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutosCreateManyInput | ProdutosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produtos update
   */
  export type ProdutosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos
     */
    select?: ProdutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtos
     */
    omit?: ProdutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutosInclude<ExtArgs> | null
    /**
     * The data needed to update a Produtos.
     */
    data: XOR<ProdutosUpdateInput, ProdutosUncheckedUpdateInput>
    /**
     * Choose, which Produtos to update.
     */
    where: ProdutosWhereUniqueInput
  }

  /**
   * Produtos updateMany
   */
  export type ProdutosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutosUpdateManyMutationInput, ProdutosUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutosWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produtos upsert
   */
  export type ProdutosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos
     */
    select?: ProdutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtos
     */
    omit?: ProdutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutosInclude<ExtArgs> | null
    /**
     * The filter to search for the Produtos to update in case it exists.
     */
    where: ProdutosWhereUniqueInput
    /**
     * In case the Produtos found by the `where` argument doesn't exist, create a new Produtos with this data.
     */
    create: XOR<ProdutosCreateInput, ProdutosUncheckedCreateInput>
    /**
     * In case the Produtos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutosUpdateInput, ProdutosUncheckedUpdateInput>
  }

  /**
   * Produtos delete
   */
  export type ProdutosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos
     */
    select?: ProdutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtos
     */
    omit?: ProdutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutosInclude<ExtArgs> | null
    /**
     * Filter which Produtos to delete.
     */
    where: ProdutosWhereUniqueInput
  }

  /**
   * Produtos deleteMany
   */
  export type ProdutosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutosWhereInput
    /**
     * Limit how many Produtos to delete.
     */
    limit?: number
  }

  /**
   * Produtos.itensVenda
   */
  export type Produtos$itensVendaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItensVenda
     */
    select?: ItensVendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItensVenda
     */
    omit?: ItensVendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItensVendaInclude<ExtArgs> | null
    where?: ItensVendaWhereInput
    orderBy?: ItensVendaOrderByWithRelationInput | ItensVendaOrderByWithRelationInput[]
    cursor?: ItensVendaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItensVendaScalarFieldEnum | ItensVendaScalarFieldEnum[]
  }

  /**
   * Produtos without action
   */
  export type ProdutosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produtos
     */
    select?: ProdutosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produtos
     */
    omit?: ProdutosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutosInclude<ExtArgs> | null
  }


  /**
   * Model Vendas
   */

  export type AggregateVendas = {
    _count: VendasCountAggregateOutputType | null
    _avg: VendasAvgAggregateOutputType | null
    _sum: VendasSumAggregateOutputType | null
    _min: VendasMinAggregateOutputType | null
    _max: VendasMaxAggregateOutputType | null
  }

  export type VendasAvgAggregateOutputType = {
    id: number | null
    clienteId: number | null
    vendedorId: number | null
    valorTotal: number | null
  }

  export type VendasSumAggregateOutputType = {
    id: number | null
    clienteId: number | null
    vendedorId: number | null
    valorTotal: number | null
  }

  export type VendasMinAggregateOutputType = {
    id: number | null
    clienteId: number | null
    vendedorId: number | null
    dataHora: Date | null
    formaPagamento: string | null
    statusPagamento: string | null
    valorTotal: number | null
  }

  export type VendasMaxAggregateOutputType = {
    id: number | null
    clienteId: number | null
    vendedorId: number | null
    dataHora: Date | null
    formaPagamento: string | null
    statusPagamento: string | null
    valorTotal: number | null
  }

  export type VendasCountAggregateOutputType = {
    id: number
    clienteId: number
    vendedorId: number
    dataHora: number
    formaPagamento: number
    statusPagamento: number
    valorTotal: number
    _all: number
  }


  export type VendasAvgAggregateInputType = {
    id?: true
    clienteId?: true
    vendedorId?: true
    valorTotal?: true
  }

  export type VendasSumAggregateInputType = {
    id?: true
    clienteId?: true
    vendedorId?: true
    valorTotal?: true
  }

  export type VendasMinAggregateInputType = {
    id?: true
    clienteId?: true
    vendedorId?: true
    dataHora?: true
    formaPagamento?: true
    statusPagamento?: true
    valorTotal?: true
  }

  export type VendasMaxAggregateInputType = {
    id?: true
    clienteId?: true
    vendedorId?: true
    dataHora?: true
    formaPagamento?: true
    statusPagamento?: true
    valorTotal?: true
  }

  export type VendasCountAggregateInputType = {
    id?: true
    clienteId?: true
    vendedorId?: true
    dataHora?: true
    formaPagamento?: true
    statusPagamento?: true
    valorTotal?: true
    _all?: true
  }

  export type VendasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendas to aggregate.
     */
    where?: VendasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendas to fetch.
     */
    orderBy?: VendasOrderByWithRelationInput | VendasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendas
    **/
    _count?: true | VendasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendasMaxAggregateInputType
  }

  export type GetVendasAggregateType<T extends VendasAggregateArgs> = {
        [P in keyof T & keyof AggregateVendas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendas[P]>
      : GetScalarType<T[P], AggregateVendas[P]>
  }




  export type VendasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendasWhereInput
    orderBy?: VendasOrderByWithAggregationInput | VendasOrderByWithAggregationInput[]
    by: VendasScalarFieldEnum[] | VendasScalarFieldEnum
    having?: VendasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendasCountAggregateInputType | true
    _avg?: VendasAvgAggregateInputType
    _sum?: VendasSumAggregateInputType
    _min?: VendasMinAggregateInputType
    _max?: VendasMaxAggregateInputType
  }

  export type VendasGroupByOutputType = {
    id: number
    clienteId: number
    vendedorId: number
    dataHora: Date
    formaPagamento: string
    statusPagamento: string
    valorTotal: number
    _count: VendasCountAggregateOutputType | null
    _avg: VendasAvgAggregateOutputType | null
    _sum: VendasSumAggregateOutputType | null
    _min: VendasMinAggregateOutputType | null
    _max: VendasMaxAggregateOutputType | null
  }

  type GetVendasGroupByPayload<T extends VendasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendasGroupByOutputType[P]>
            : GetScalarType<T[P], VendasGroupByOutputType[P]>
        }
      >
    >


  export type VendasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    vendedorId?: boolean
    dataHora?: boolean
    formaPagamento?: boolean
    statusPagamento?: boolean
    valorTotal?: boolean
    cliente?: boolean | ClientesDefaultArgs<ExtArgs>
    vendedor?: boolean | VendedoresDefaultArgs<ExtArgs>
    itens?: boolean | Vendas$itensArgs<ExtArgs>
    _count?: boolean | VendasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendas"]>



  export type VendasSelectScalar = {
    id?: boolean
    clienteId?: boolean
    vendedorId?: boolean
    dataHora?: boolean
    formaPagamento?: boolean
    statusPagamento?: boolean
    valorTotal?: boolean
  }

  export type VendasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clienteId" | "vendedorId" | "dataHora" | "formaPagamento" | "statusPagamento" | "valorTotal", ExtArgs["result"]["vendas"]>
  export type VendasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClientesDefaultArgs<ExtArgs>
    vendedor?: boolean | VendedoresDefaultArgs<ExtArgs>
    itens?: boolean | Vendas$itensArgs<ExtArgs>
    _count?: boolean | VendasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VendasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendas"
    objects: {
      cliente: Prisma.$ClientesPayload<ExtArgs>
      vendedor: Prisma.$VendedoresPayload<ExtArgs>
      itens: Prisma.$ItensVendaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clienteId: number
      vendedorId: number
      dataHora: Date
      formaPagamento: string
      statusPagamento: string
      valorTotal: number
    }, ExtArgs["result"]["vendas"]>
    composites: {}
  }

  type VendasGetPayload<S extends boolean | null | undefined | VendasDefaultArgs> = $Result.GetResult<Prisma.$VendasPayload, S>

  type VendasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendasCountAggregateInputType | true
    }

  export interface VendasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendas'], meta: { name: 'Vendas' } }
    /**
     * Find zero or one Vendas that matches the filter.
     * @param {VendasFindUniqueArgs} args - Arguments to find a Vendas
     * @example
     * // Get one Vendas
     * const vendas = await prisma.vendas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendasFindUniqueArgs>(args: SelectSubset<T, VendasFindUniqueArgs<ExtArgs>>): Prisma__VendasClient<$Result.GetResult<Prisma.$VendasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendasFindUniqueOrThrowArgs} args - Arguments to find a Vendas
     * @example
     * // Get one Vendas
     * const vendas = await prisma.vendas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendasFindUniqueOrThrowArgs>(args: SelectSubset<T, VendasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendasClient<$Result.GetResult<Prisma.$VendasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendasFindFirstArgs} args - Arguments to find a Vendas
     * @example
     * // Get one Vendas
     * const vendas = await prisma.vendas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendasFindFirstArgs>(args?: SelectSubset<T, VendasFindFirstArgs<ExtArgs>>): Prisma__VendasClient<$Result.GetResult<Prisma.$VendasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendasFindFirstOrThrowArgs} args - Arguments to find a Vendas
     * @example
     * // Get one Vendas
     * const vendas = await prisma.vendas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendasFindFirstOrThrowArgs>(args?: SelectSubset<T, VendasFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendasClient<$Result.GetResult<Prisma.$VendasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendas
     * const vendas = await prisma.vendas.findMany()
     * 
     * // Get first 10 Vendas
     * const vendas = await prisma.vendas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendasWithIdOnly = await prisma.vendas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendasFindManyArgs>(args?: SelectSubset<T, VendasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendas.
     * @param {VendasCreateArgs} args - Arguments to create a Vendas.
     * @example
     * // Create one Vendas
     * const Vendas = await prisma.vendas.create({
     *   data: {
     *     // ... data to create a Vendas
     *   }
     * })
     * 
     */
    create<T extends VendasCreateArgs>(args: SelectSubset<T, VendasCreateArgs<ExtArgs>>): Prisma__VendasClient<$Result.GetResult<Prisma.$VendasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendas.
     * @param {VendasCreateManyArgs} args - Arguments to create many Vendas.
     * @example
     * // Create many Vendas
     * const vendas = await prisma.vendas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendasCreateManyArgs>(args?: SelectSubset<T, VendasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vendas.
     * @param {VendasDeleteArgs} args - Arguments to delete one Vendas.
     * @example
     * // Delete one Vendas
     * const Vendas = await prisma.vendas.delete({
     *   where: {
     *     // ... filter to delete one Vendas
     *   }
     * })
     * 
     */
    delete<T extends VendasDeleteArgs>(args: SelectSubset<T, VendasDeleteArgs<ExtArgs>>): Prisma__VendasClient<$Result.GetResult<Prisma.$VendasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendas.
     * @param {VendasUpdateArgs} args - Arguments to update one Vendas.
     * @example
     * // Update one Vendas
     * const vendas = await prisma.vendas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendasUpdateArgs>(args: SelectSubset<T, VendasUpdateArgs<ExtArgs>>): Prisma__VendasClient<$Result.GetResult<Prisma.$VendasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendas.
     * @param {VendasDeleteManyArgs} args - Arguments to filter Vendas to delete.
     * @example
     * // Delete a few Vendas
     * const { count } = await prisma.vendas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendasDeleteManyArgs>(args?: SelectSubset<T, VendasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendas
     * const vendas = await prisma.vendas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendasUpdateManyArgs>(args: SelectSubset<T, VendasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vendas.
     * @param {VendasUpsertArgs} args - Arguments to update or create a Vendas.
     * @example
     * // Update or create a Vendas
     * const vendas = await prisma.vendas.upsert({
     *   create: {
     *     // ... data to create a Vendas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendas we want to update
     *   }
     * })
     */
    upsert<T extends VendasUpsertArgs>(args: SelectSubset<T, VendasUpsertArgs<ExtArgs>>): Prisma__VendasClient<$Result.GetResult<Prisma.$VendasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendasCountArgs} args - Arguments to filter Vendas to count.
     * @example
     * // Count the number of Vendas
     * const count = await prisma.vendas.count({
     *   where: {
     *     // ... the filter for the Vendas we want to count
     *   }
     * })
    **/
    count<T extends VendasCountArgs>(
      args?: Subset<T, VendasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendasAggregateArgs>(args: Subset<T, VendasAggregateArgs>): Prisma.PrismaPromise<GetVendasAggregateType<T>>

    /**
     * Group by Vendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendasGroupByArgs['orderBy'] }
        : { orderBy?: VendasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendas model
   */
  readonly fields: VendasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClientesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientesDefaultArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendedor<T extends VendedoresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendedoresDefaultArgs<ExtArgs>>): Prisma__VendedoresClient<$Result.GetResult<Prisma.$VendedoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens<T extends Vendas$itensArgs<ExtArgs> = {}>(args?: Subset<T, Vendas$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItensVendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vendas model
   */
  interface VendasFieldRefs {
    readonly id: FieldRef<"Vendas", 'Int'>
    readonly clienteId: FieldRef<"Vendas", 'Int'>
    readonly vendedorId: FieldRef<"Vendas", 'Int'>
    readonly dataHora: FieldRef<"Vendas", 'DateTime'>
    readonly formaPagamento: FieldRef<"Vendas", 'String'>
    readonly statusPagamento: FieldRef<"Vendas", 'String'>
    readonly valorTotal: FieldRef<"Vendas", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Vendas findUnique
   */
  export type VendasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendas
     */
    select?: VendasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendas
     */
    omit?: VendasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendasInclude<ExtArgs> | null
    /**
     * Filter, which Vendas to fetch.
     */
    where: VendasWhereUniqueInput
  }

  /**
   * Vendas findUniqueOrThrow
   */
  export type VendasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendas
     */
    select?: VendasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendas
     */
    omit?: VendasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendasInclude<ExtArgs> | null
    /**
     * Filter, which Vendas to fetch.
     */
    where: VendasWhereUniqueInput
  }

  /**
   * Vendas findFirst
   */
  export type VendasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendas
     */
    select?: VendasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendas
     */
    omit?: VendasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendasInclude<ExtArgs> | null
    /**
     * Filter, which Vendas to fetch.
     */
    where?: VendasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendas to fetch.
     */
    orderBy?: VendasOrderByWithRelationInput | VendasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendas.
     */
    cursor?: VendasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendas.
     */
    distinct?: VendasScalarFieldEnum | VendasScalarFieldEnum[]
  }

  /**
   * Vendas findFirstOrThrow
   */
  export type VendasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendas
     */
    select?: VendasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendas
     */
    omit?: VendasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendasInclude<ExtArgs> | null
    /**
     * Filter, which Vendas to fetch.
     */
    where?: VendasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendas to fetch.
     */
    orderBy?: VendasOrderByWithRelationInput | VendasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendas.
     */
    cursor?: VendasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendas.
     */
    distinct?: VendasScalarFieldEnum | VendasScalarFieldEnum[]
  }

  /**
   * Vendas findMany
   */
  export type VendasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendas
     */
    select?: VendasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendas
     */
    omit?: VendasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendasInclude<ExtArgs> | null
    /**
     * Filter, which Vendas to fetch.
     */
    where?: VendasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendas to fetch.
     */
    orderBy?: VendasOrderByWithRelationInput | VendasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendas.
     */
    cursor?: VendasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendas.
     */
    skip?: number
    distinct?: VendasScalarFieldEnum | VendasScalarFieldEnum[]
  }

  /**
   * Vendas create
   */
  export type VendasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendas
     */
    select?: VendasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendas
     */
    omit?: VendasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendasInclude<ExtArgs> | null
    /**
     * The data needed to create a Vendas.
     */
    data: XOR<VendasCreateInput, VendasUncheckedCreateInput>
  }

  /**
   * Vendas createMany
   */
  export type VendasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendas.
     */
    data: VendasCreateManyInput | VendasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendas update
   */
  export type VendasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendas
     */
    select?: VendasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendas
     */
    omit?: VendasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendasInclude<ExtArgs> | null
    /**
     * The data needed to update a Vendas.
     */
    data: XOR<VendasUpdateInput, VendasUncheckedUpdateInput>
    /**
     * Choose, which Vendas to update.
     */
    where: VendasWhereUniqueInput
  }

  /**
   * Vendas updateMany
   */
  export type VendasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendas.
     */
    data: XOR<VendasUpdateManyMutationInput, VendasUncheckedUpdateManyInput>
    /**
     * Filter which Vendas to update
     */
    where?: VendasWhereInput
    /**
     * Limit how many Vendas to update.
     */
    limit?: number
  }

  /**
   * Vendas upsert
   */
  export type VendasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendas
     */
    select?: VendasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendas
     */
    omit?: VendasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendasInclude<ExtArgs> | null
    /**
     * The filter to search for the Vendas to update in case it exists.
     */
    where: VendasWhereUniqueInput
    /**
     * In case the Vendas found by the `where` argument doesn't exist, create a new Vendas with this data.
     */
    create: XOR<VendasCreateInput, VendasUncheckedCreateInput>
    /**
     * In case the Vendas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendasUpdateInput, VendasUncheckedUpdateInput>
  }

  /**
   * Vendas delete
   */
  export type VendasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendas
     */
    select?: VendasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendas
     */
    omit?: VendasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendasInclude<ExtArgs> | null
    /**
     * Filter which Vendas to delete.
     */
    where: VendasWhereUniqueInput
  }

  /**
   * Vendas deleteMany
   */
  export type VendasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendas to delete
     */
    where?: VendasWhereInput
    /**
     * Limit how many Vendas to delete.
     */
    limit?: number
  }

  /**
   * Vendas.itens
   */
  export type Vendas$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItensVenda
     */
    select?: ItensVendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItensVenda
     */
    omit?: ItensVendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItensVendaInclude<ExtArgs> | null
    where?: ItensVendaWhereInput
    orderBy?: ItensVendaOrderByWithRelationInput | ItensVendaOrderByWithRelationInput[]
    cursor?: ItensVendaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItensVendaScalarFieldEnum | ItensVendaScalarFieldEnum[]
  }

  /**
   * Vendas without action
   */
  export type VendasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendas
     */
    select?: VendasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendas
     */
    omit?: VendasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendasInclude<ExtArgs> | null
  }


  /**
   * Model ItensVenda
   */

  export type AggregateItensVenda = {
    _count: ItensVendaCountAggregateOutputType | null
    _avg: ItensVendaAvgAggregateOutputType | null
    _sum: ItensVendaSumAggregateOutputType | null
    _min: ItensVendaMinAggregateOutputType | null
    _max: ItensVendaMaxAggregateOutputType | null
  }

  export type ItensVendaAvgAggregateOutputType = {
    id: number | null
    vendaId: number | null
    produtoId: number | null
    quantidade: number | null
    precoUnitario: number | null
  }

  export type ItensVendaSumAggregateOutputType = {
    id: number | null
    vendaId: number | null
    produtoId: number | null
    quantidade: number | null
    precoUnitario: number | null
  }

  export type ItensVendaMinAggregateOutputType = {
    id: number | null
    vendaId: number | null
    produtoId: number | null
    quantidade: number | null
    precoUnitario: number | null
  }

  export type ItensVendaMaxAggregateOutputType = {
    id: number | null
    vendaId: number | null
    produtoId: number | null
    quantidade: number | null
    precoUnitario: number | null
  }

  export type ItensVendaCountAggregateOutputType = {
    id: number
    vendaId: number
    produtoId: number
    quantidade: number
    precoUnitario: number
    _all: number
  }


  export type ItensVendaAvgAggregateInputType = {
    id?: true
    vendaId?: true
    produtoId?: true
    quantidade?: true
    precoUnitario?: true
  }

  export type ItensVendaSumAggregateInputType = {
    id?: true
    vendaId?: true
    produtoId?: true
    quantidade?: true
    precoUnitario?: true
  }

  export type ItensVendaMinAggregateInputType = {
    id?: true
    vendaId?: true
    produtoId?: true
    quantidade?: true
    precoUnitario?: true
  }

  export type ItensVendaMaxAggregateInputType = {
    id?: true
    vendaId?: true
    produtoId?: true
    quantidade?: true
    precoUnitario?: true
  }

  export type ItensVendaCountAggregateInputType = {
    id?: true
    vendaId?: true
    produtoId?: true
    quantidade?: true
    precoUnitario?: true
    _all?: true
  }

  export type ItensVendaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItensVenda to aggregate.
     */
    where?: ItensVendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItensVendas to fetch.
     */
    orderBy?: ItensVendaOrderByWithRelationInput | ItensVendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItensVendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItensVendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItensVendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItensVendas
    **/
    _count?: true | ItensVendaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItensVendaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItensVendaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItensVendaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItensVendaMaxAggregateInputType
  }

  export type GetItensVendaAggregateType<T extends ItensVendaAggregateArgs> = {
        [P in keyof T & keyof AggregateItensVenda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItensVenda[P]>
      : GetScalarType<T[P], AggregateItensVenda[P]>
  }




  export type ItensVendaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItensVendaWhereInput
    orderBy?: ItensVendaOrderByWithAggregationInput | ItensVendaOrderByWithAggregationInput[]
    by: ItensVendaScalarFieldEnum[] | ItensVendaScalarFieldEnum
    having?: ItensVendaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItensVendaCountAggregateInputType | true
    _avg?: ItensVendaAvgAggregateInputType
    _sum?: ItensVendaSumAggregateInputType
    _min?: ItensVendaMinAggregateInputType
    _max?: ItensVendaMaxAggregateInputType
  }

  export type ItensVendaGroupByOutputType = {
    id: number
    vendaId: number
    produtoId: number
    quantidade: number
    precoUnitario: number
    _count: ItensVendaCountAggregateOutputType | null
    _avg: ItensVendaAvgAggregateOutputType | null
    _sum: ItensVendaSumAggregateOutputType | null
    _min: ItensVendaMinAggregateOutputType | null
    _max: ItensVendaMaxAggregateOutputType | null
  }

  type GetItensVendaGroupByPayload<T extends ItensVendaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItensVendaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItensVendaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItensVendaGroupByOutputType[P]>
            : GetScalarType<T[P], ItensVendaGroupByOutputType[P]>
        }
      >
    >


  export type ItensVendaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendaId?: boolean
    produtoId?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    venda?: boolean | VendasDefaultArgs<ExtArgs>
    produto?: boolean | ProdutosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itensVenda"]>



  export type ItensVendaSelectScalar = {
    id?: boolean
    vendaId?: boolean
    produtoId?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
  }

  export type ItensVendaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendaId" | "produtoId" | "quantidade" | "precoUnitario", ExtArgs["result"]["itensVenda"]>
  export type ItensVendaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venda?: boolean | VendasDefaultArgs<ExtArgs>
    produto?: boolean | ProdutosDefaultArgs<ExtArgs>
  }

  export type $ItensVendaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItensVenda"
    objects: {
      venda: Prisma.$VendasPayload<ExtArgs>
      produto: Prisma.$ProdutosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vendaId: number
      produtoId: number
      quantidade: number
      precoUnitario: number
    }, ExtArgs["result"]["itensVenda"]>
    composites: {}
  }

  type ItensVendaGetPayload<S extends boolean | null | undefined | ItensVendaDefaultArgs> = $Result.GetResult<Prisma.$ItensVendaPayload, S>

  type ItensVendaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItensVendaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItensVendaCountAggregateInputType | true
    }

  export interface ItensVendaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItensVenda'], meta: { name: 'ItensVenda' } }
    /**
     * Find zero or one ItensVenda that matches the filter.
     * @param {ItensVendaFindUniqueArgs} args - Arguments to find a ItensVenda
     * @example
     * // Get one ItensVenda
     * const itensVenda = await prisma.itensVenda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItensVendaFindUniqueArgs>(args: SelectSubset<T, ItensVendaFindUniqueArgs<ExtArgs>>): Prisma__ItensVendaClient<$Result.GetResult<Prisma.$ItensVendaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItensVenda that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItensVendaFindUniqueOrThrowArgs} args - Arguments to find a ItensVenda
     * @example
     * // Get one ItensVenda
     * const itensVenda = await prisma.itensVenda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItensVendaFindUniqueOrThrowArgs>(args: SelectSubset<T, ItensVendaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItensVendaClient<$Result.GetResult<Prisma.$ItensVendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItensVenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItensVendaFindFirstArgs} args - Arguments to find a ItensVenda
     * @example
     * // Get one ItensVenda
     * const itensVenda = await prisma.itensVenda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItensVendaFindFirstArgs>(args?: SelectSubset<T, ItensVendaFindFirstArgs<ExtArgs>>): Prisma__ItensVendaClient<$Result.GetResult<Prisma.$ItensVendaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItensVenda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItensVendaFindFirstOrThrowArgs} args - Arguments to find a ItensVenda
     * @example
     * // Get one ItensVenda
     * const itensVenda = await prisma.itensVenda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItensVendaFindFirstOrThrowArgs>(args?: SelectSubset<T, ItensVendaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItensVendaClient<$Result.GetResult<Prisma.$ItensVendaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItensVendas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItensVendaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItensVendas
     * const itensVendas = await prisma.itensVenda.findMany()
     * 
     * // Get first 10 ItensVendas
     * const itensVendas = await prisma.itensVenda.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itensVendaWithIdOnly = await prisma.itensVenda.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItensVendaFindManyArgs>(args?: SelectSubset<T, ItensVendaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItensVendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItensVenda.
     * @param {ItensVendaCreateArgs} args - Arguments to create a ItensVenda.
     * @example
     * // Create one ItensVenda
     * const ItensVenda = await prisma.itensVenda.create({
     *   data: {
     *     // ... data to create a ItensVenda
     *   }
     * })
     * 
     */
    create<T extends ItensVendaCreateArgs>(args: SelectSubset<T, ItensVendaCreateArgs<ExtArgs>>): Prisma__ItensVendaClient<$Result.GetResult<Prisma.$ItensVendaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItensVendas.
     * @param {ItensVendaCreateManyArgs} args - Arguments to create many ItensVendas.
     * @example
     * // Create many ItensVendas
     * const itensVenda = await prisma.itensVenda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItensVendaCreateManyArgs>(args?: SelectSubset<T, ItensVendaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ItensVenda.
     * @param {ItensVendaDeleteArgs} args - Arguments to delete one ItensVenda.
     * @example
     * // Delete one ItensVenda
     * const ItensVenda = await prisma.itensVenda.delete({
     *   where: {
     *     // ... filter to delete one ItensVenda
     *   }
     * })
     * 
     */
    delete<T extends ItensVendaDeleteArgs>(args: SelectSubset<T, ItensVendaDeleteArgs<ExtArgs>>): Prisma__ItensVendaClient<$Result.GetResult<Prisma.$ItensVendaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItensVenda.
     * @param {ItensVendaUpdateArgs} args - Arguments to update one ItensVenda.
     * @example
     * // Update one ItensVenda
     * const itensVenda = await prisma.itensVenda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItensVendaUpdateArgs>(args: SelectSubset<T, ItensVendaUpdateArgs<ExtArgs>>): Prisma__ItensVendaClient<$Result.GetResult<Prisma.$ItensVendaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItensVendas.
     * @param {ItensVendaDeleteManyArgs} args - Arguments to filter ItensVendas to delete.
     * @example
     * // Delete a few ItensVendas
     * const { count } = await prisma.itensVenda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItensVendaDeleteManyArgs>(args?: SelectSubset<T, ItensVendaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItensVendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItensVendaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItensVendas
     * const itensVenda = await prisma.itensVenda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItensVendaUpdateManyArgs>(args: SelectSubset<T, ItensVendaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ItensVenda.
     * @param {ItensVendaUpsertArgs} args - Arguments to update or create a ItensVenda.
     * @example
     * // Update or create a ItensVenda
     * const itensVenda = await prisma.itensVenda.upsert({
     *   create: {
     *     // ... data to create a ItensVenda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItensVenda we want to update
     *   }
     * })
     */
    upsert<T extends ItensVendaUpsertArgs>(args: SelectSubset<T, ItensVendaUpsertArgs<ExtArgs>>): Prisma__ItensVendaClient<$Result.GetResult<Prisma.$ItensVendaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ItensVendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItensVendaCountArgs} args - Arguments to filter ItensVendas to count.
     * @example
     * // Count the number of ItensVendas
     * const count = await prisma.itensVenda.count({
     *   where: {
     *     // ... the filter for the ItensVendas we want to count
     *   }
     * })
    **/
    count<T extends ItensVendaCountArgs>(
      args?: Subset<T, ItensVendaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItensVendaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItensVenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItensVendaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItensVendaAggregateArgs>(args: Subset<T, ItensVendaAggregateArgs>): Prisma.PrismaPromise<GetItensVendaAggregateType<T>>

    /**
     * Group by ItensVenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItensVendaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItensVendaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItensVendaGroupByArgs['orderBy'] }
        : { orderBy?: ItensVendaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItensVendaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItensVendaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItensVenda model
   */
  readonly fields: ItensVendaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItensVenda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItensVendaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venda<T extends VendasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendasDefaultArgs<ExtArgs>>): Prisma__VendasClient<$Result.GetResult<Prisma.$VendasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends ProdutosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutosDefaultArgs<ExtArgs>>): Prisma__ProdutosClient<$Result.GetResult<Prisma.$ProdutosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItensVenda model
   */
  interface ItensVendaFieldRefs {
    readonly id: FieldRef<"ItensVenda", 'Int'>
    readonly vendaId: FieldRef<"ItensVenda", 'Int'>
    readonly produtoId: FieldRef<"ItensVenda", 'Int'>
    readonly quantidade: FieldRef<"ItensVenda", 'Int'>
    readonly precoUnitario: FieldRef<"ItensVenda", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ItensVenda findUnique
   */
  export type ItensVendaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItensVenda
     */
    select?: ItensVendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItensVenda
     */
    omit?: ItensVendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItensVendaInclude<ExtArgs> | null
    /**
     * Filter, which ItensVenda to fetch.
     */
    where: ItensVendaWhereUniqueInput
  }

  /**
   * ItensVenda findUniqueOrThrow
   */
  export type ItensVendaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItensVenda
     */
    select?: ItensVendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItensVenda
     */
    omit?: ItensVendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItensVendaInclude<ExtArgs> | null
    /**
     * Filter, which ItensVenda to fetch.
     */
    where: ItensVendaWhereUniqueInput
  }

  /**
   * ItensVenda findFirst
   */
  export type ItensVendaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItensVenda
     */
    select?: ItensVendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItensVenda
     */
    omit?: ItensVendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItensVendaInclude<ExtArgs> | null
    /**
     * Filter, which ItensVenda to fetch.
     */
    where?: ItensVendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItensVendas to fetch.
     */
    orderBy?: ItensVendaOrderByWithRelationInput | ItensVendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItensVendas.
     */
    cursor?: ItensVendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItensVendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItensVendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItensVendas.
     */
    distinct?: ItensVendaScalarFieldEnum | ItensVendaScalarFieldEnum[]
  }

  /**
   * ItensVenda findFirstOrThrow
   */
  export type ItensVendaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItensVenda
     */
    select?: ItensVendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItensVenda
     */
    omit?: ItensVendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItensVendaInclude<ExtArgs> | null
    /**
     * Filter, which ItensVenda to fetch.
     */
    where?: ItensVendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItensVendas to fetch.
     */
    orderBy?: ItensVendaOrderByWithRelationInput | ItensVendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItensVendas.
     */
    cursor?: ItensVendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItensVendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItensVendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItensVendas.
     */
    distinct?: ItensVendaScalarFieldEnum | ItensVendaScalarFieldEnum[]
  }

  /**
   * ItensVenda findMany
   */
  export type ItensVendaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItensVenda
     */
    select?: ItensVendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItensVenda
     */
    omit?: ItensVendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItensVendaInclude<ExtArgs> | null
    /**
     * Filter, which ItensVendas to fetch.
     */
    where?: ItensVendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItensVendas to fetch.
     */
    orderBy?: ItensVendaOrderByWithRelationInput | ItensVendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItensVendas.
     */
    cursor?: ItensVendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItensVendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItensVendas.
     */
    skip?: number
    distinct?: ItensVendaScalarFieldEnum | ItensVendaScalarFieldEnum[]
  }

  /**
   * ItensVenda create
   */
  export type ItensVendaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItensVenda
     */
    select?: ItensVendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItensVenda
     */
    omit?: ItensVendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItensVendaInclude<ExtArgs> | null
    /**
     * The data needed to create a ItensVenda.
     */
    data: XOR<ItensVendaCreateInput, ItensVendaUncheckedCreateInput>
  }

  /**
   * ItensVenda createMany
   */
  export type ItensVendaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItensVendas.
     */
    data: ItensVendaCreateManyInput | ItensVendaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItensVenda update
   */
  export type ItensVendaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItensVenda
     */
    select?: ItensVendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItensVenda
     */
    omit?: ItensVendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItensVendaInclude<ExtArgs> | null
    /**
     * The data needed to update a ItensVenda.
     */
    data: XOR<ItensVendaUpdateInput, ItensVendaUncheckedUpdateInput>
    /**
     * Choose, which ItensVenda to update.
     */
    where: ItensVendaWhereUniqueInput
  }

  /**
   * ItensVenda updateMany
   */
  export type ItensVendaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItensVendas.
     */
    data: XOR<ItensVendaUpdateManyMutationInput, ItensVendaUncheckedUpdateManyInput>
    /**
     * Filter which ItensVendas to update
     */
    where?: ItensVendaWhereInput
    /**
     * Limit how many ItensVendas to update.
     */
    limit?: number
  }

  /**
   * ItensVenda upsert
   */
  export type ItensVendaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItensVenda
     */
    select?: ItensVendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItensVenda
     */
    omit?: ItensVendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItensVendaInclude<ExtArgs> | null
    /**
     * The filter to search for the ItensVenda to update in case it exists.
     */
    where: ItensVendaWhereUniqueInput
    /**
     * In case the ItensVenda found by the `where` argument doesn't exist, create a new ItensVenda with this data.
     */
    create: XOR<ItensVendaCreateInput, ItensVendaUncheckedCreateInput>
    /**
     * In case the ItensVenda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItensVendaUpdateInput, ItensVendaUncheckedUpdateInput>
  }

  /**
   * ItensVenda delete
   */
  export type ItensVendaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItensVenda
     */
    select?: ItensVendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItensVenda
     */
    omit?: ItensVendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItensVendaInclude<ExtArgs> | null
    /**
     * Filter which ItensVenda to delete.
     */
    where: ItensVendaWhereUniqueInput
  }

  /**
   * ItensVenda deleteMany
   */
  export type ItensVendaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItensVendas to delete
     */
    where?: ItensVendaWhereInput
    /**
     * Limit how many ItensVendas to delete.
     */
    limit?: number
  }

  /**
   * ItensVenda without action
   */
  export type ItensVendaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItensVenda
     */
    select?: ItensVendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItensVenda
     */
    omit?: ItensVendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItensVendaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClientesScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    telefone: 'telefone',
    email: 'email',
    dataCadastro: 'dataCadastro',
    isFlamengo: 'isFlamengo',
    assisteOP: 'assisteOP',
    cidadeNascimento: 'cidadeNascimento'
  };

  export type ClientesScalarFieldEnum = (typeof ClientesScalarFieldEnum)[keyof typeof ClientesScalarFieldEnum]


  export const ProfissionaisScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    especialidade: 'especialidade'
  };

  export type ProfissionaisScalarFieldEnum = (typeof ProfissionaisScalarFieldEnum)[keyof typeof ProfissionaisScalarFieldEnum]


  export const ServicosScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao',
    preco: 'preco'
  };

  export type ServicosScalarFieldEnum = (typeof ServicosScalarFieldEnum)[keyof typeof ServicosScalarFieldEnum]


  export const AgendamentosScalarFieldEnum: {
    id: 'id',
    dataHora: 'dataHora',
    clienteId: 'clienteId',
    profissionalId: 'profissionalId'
  };

  export type AgendamentosScalarFieldEnum = (typeof AgendamentosScalarFieldEnum)[keyof typeof AgendamentosScalarFieldEnum]


  export const VendedoresScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type VendedoresScalarFieldEnum = (typeof VendedoresScalarFieldEnum)[keyof typeof VendedoresScalarFieldEnum]


  export const ProdutosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    preco: 'preco',
    categoria: 'categoria',
    fabricadoEmMari: 'fabricadoEmMari',
    estoque: 'estoque'
  };

  export type ProdutosScalarFieldEnum = (typeof ProdutosScalarFieldEnum)[keyof typeof ProdutosScalarFieldEnum]


  export const VendasScalarFieldEnum: {
    id: 'id',
    clienteId: 'clienteId',
    vendedorId: 'vendedorId',
    dataHora: 'dataHora',
    formaPagamento: 'formaPagamento',
    statusPagamento: 'statusPagamento',
    valorTotal: 'valorTotal'
  };

  export type VendasScalarFieldEnum = (typeof VendasScalarFieldEnum)[keyof typeof VendasScalarFieldEnum]


  export const ItensVendaScalarFieldEnum: {
    id: 'id',
    vendaId: 'vendaId',
    produtoId: 'produtoId',
    quantidade: 'quantidade',
    precoUnitario: 'precoUnitario'
  };

  export type ItensVendaScalarFieldEnum = (typeof ItensVendaScalarFieldEnum)[keyof typeof ItensVendaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ClientesOrderByRelevanceFieldEnum: {
    nome: 'nome',
    telefone: 'telefone',
    email: 'email',
    cidadeNascimento: 'cidadeNascimento'
  };

  export type ClientesOrderByRelevanceFieldEnum = (typeof ClientesOrderByRelevanceFieldEnum)[keyof typeof ClientesOrderByRelevanceFieldEnum]


  export const ProfissionaisOrderByRelevanceFieldEnum: {
    nome: 'nome',
    especialidade: 'especialidade'
  };

  export type ProfissionaisOrderByRelevanceFieldEnum = (typeof ProfissionaisOrderByRelevanceFieldEnum)[keyof typeof ProfissionaisOrderByRelevanceFieldEnum]


  export const ServicosOrderByRelevanceFieldEnum: {
    descricao: 'descricao'
  };

  export type ServicosOrderByRelevanceFieldEnum = (typeof ServicosOrderByRelevanceFieldEnum)[keyof typeof ServicosOrderByRelevanceFieldEnum]


  export const VendedoresOrderByRelevanceFieldEnum: {
    nome: 'nome'
  };

  export type VendedoresOrderByRelevanceFieldEnum = (typeof VendedoresOrderByRelevanceFieldEnum)[keyof typeof VendedoresOrderByRelevanceFieldEnum]


  export const ProdutosOrderByRelevanceFieldEnum: {
    nome: 'nome',
    categoria: 'categoria'
  };

  export type ProdutosOrderByRelevanceFieldEnum = (typeof ProdutosOrderByRelevanceFieldEnum)[keyof typeof ProdutosOrderByRelevanceFieldEnum]


  export const VendasOrderByRelevanceFieldEnum: {
    formaPagamento: 'formaPagamento',
    statusPagamento: 'statusPagamento'
  };

  export type VendasOrderByRelevanceFieldEnum = (typeof VendasOrderByRelevanceFieldEnum)[keyof typeof VendasOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ClientesWhereInput = {
    AND?: ClientesWhereInput | ClientesWhereInput[]
    OR?: ClientesWhereInput[]
    NOT?: ClientesWhereInput | ClientesWhereInput[]
    id?: IntFilter<"Clientes"> | number
    nome?: StringFilter<"Clientes"> | string
    telefone?: StringFilter<"Clientes"> | string
    email?: StringNullableFilter<"Clientes"> | string | null
    dataCadastro?: DateTimeFilter<"Clientes"> | Date | string
    isFlamengo?: BoolFilter<"Clientes"> | boolean
    assisteOP?: BoolFilter<"Clientes"> | boolean
    cidadeNascimento?: StringNullableFilter<"Clientes"> | string | null
    agendamentos?: AgendamentosListRelationFilter
    vendas?: VendasListRelationFilter
  }

  export type ClientesOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrderInput | SortOrder
    dataCadastro?: SortOrder
    isFlamengo?: SortOrder
    assisteOP?: SortOrder
    cidadeNascimento?: SortOrderInput | SortOrder
    agendamentos?: AgendamentosOrderByRelationAggregateInput
    vendas?: VendasOrderByRelationAggregateInput
    _relevance?: ClientesOrderByRelevanceInput
  }

  export type ClientesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    telefone?: string
    email?: string
    AND?: ClientesWhereInput | ClientesWhereInput[]
    OR?: ClientesWhereInput[]
    NOT?: ClientesWhereInput | ClientesWhereInput[]
    nome?: StringFilter<"Clientes"> | string
    dataCadastro?: DateTimeFilter<"Clientes"> | Date | string
    isFlamengo?: BoolFilter<"Clientes"> | boolean
    assisteOP?: BoolFilter<"Clientes"> | boolean
    cidadeNascimento?: StringNullableFilter<"Clientes"> | string | null
    agendamentos?: AgendamentosListRelationFilter
    vendas?: VendasListRelationFilter
  }, "id" | "telefone" | "email">

  export type ClientesOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrderInput | SortOrder
    dataCadastro?: SortOrder
    isFlamengo?: SortOrder
    assisteOP?: SortOrder
    cidadeNascimento?: SortOrderInput | SortOrder
    _count?: ClientesCountOrderByAggregateInput
    _avg?: ClientesAvgOrderByAggregateInput
    _max?: ClientesMaxOrderByAggregateInput
    _min?: ClientesMinOrderByAggregateInput
    _sum?: ClientesSumOrderByAggregateInput
  }

  export type ClientesScalarWhereWithAggregatesInput = {
    AND?: ClientesScalarWhereWithAggregatesInput | ClientesScalarWhereWithAggregatesInput[]
    OR?: ClientesScalarWhereWithAggregatesInput[]
    NOT?: ClientesScalarWhereWithAggregatesInput | ClientesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Clientes"> | number
    nome?: StringWithAggregatesFilter<"Clientes"> | string
    telefone?: StringWithAggregatesFilter<"Clientes"> | string
    email?: StringNullableWithAggregatesFilter<"Clientes"> | string | null
    dataCadastro?: DateTimeWithAggregatesFilter<"Clientes"> | Date | string
    isFlamengo?: BoolWithAggregatesFilter<"Clientes"> | boolean
    assisteOP?: BoolWithAggregatesFilter<"Clientes"> | boolean
    cidadeNascimento?: StringNullableWithAggregatesFilter<"Clientes"> | string | null
  }

  export type ProfissionaisWhereInput = {
    AND?: ProfissionaisWhereInput | ProfissionaisWhereInput[]
    OR?: ProfissionaisWhereInput[]
    NOT?: ProfissionaisWhereInput | ProfissionaisWhereInput[]
    id?: IntFilter<"Profissionais"> | number
    nome?: StringFilter<"Profissionais"> | string
    especialidade?: StringFilter<"Profissionais"> | string
    agendamentos?: AgendamentosListRelationFilter
  }

  export type ProfissionaisOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    especialidade?: SortOrder
    agendamentos?: AgendamentosOrderByRelationAggregateInput
    _relevance?: ProfissionaisOrderByRelevanceInput
  }

  export type ProfissionaisWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProfissionaisWhereInput | ProfissionaisWhereInput[]
    OR?: ProfissionaisWhereInput[]
    NOT?: ProfissionaisWhereInput | ProfissionaisWhereInput[]
    nome?: StringFilter<"Profissionais"> | string
    especialidade?: StringFilter<"Profissionais"> | string
    agendamentos?: AgendamentosListRelationFilter
  }, "id">

  export type ProfissionaisOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    especialidade?: SortOrder
    _count?: ProfissionaisCountOrderByAggregateInput
    _avg?: ProfissionaisAvgOrderByAggregateInput
    _max?: ProfissionaisMaxOrderByAggregateInput
    _min?: ProfissionaisMinOrderByAggregateInput
    _sum?: ProfissionaisSumOrderByAggregateInput
  }

  export type ProfissionaisScalarWhereWithAggregatesInput = {
    AND?: ProfissionaisScalarWhereWithAggregatesInput | ProfissionaisScalarWhereWithAggregatesInput[]
    OR?: ProfissionaisScalarWhereWithAggregatesInput[]
    NOT?: ProfissionaisScalarWhereWithAggregatesInput | ProfissionaisScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profissionais"> | number
    nome?: StringWithAggregatesFilter<"Profissionais"> | string
    especialidade?: StringWithAggregatesFilter<"Profissionais"> | string
  }

  export type ServicosWhereInput = {
    AND?: ServicosWhereInput | ServicosWhereInput[]
    OR?: ServicosWhereInput[]
    NOT?: ServicosWhereInput | ServicosWhereInput[]
    id?: IntFilter<"Servicos"> | number
    descricao?: StringFilter<"Servicos"> | string
    preco?: FloatFilter<"Servicos"> | number
    agendamentos?: AgendamentosListRelationFilter
  }

  export type ServicosOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    agendamentos?: AgendamentosOrderByRelationAggregateInput
    _relevance?: ServicosOrderByRelevanceInput
  }

  export type ServicosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServicosWhereInput | ServicosWhereInput[]
    OR?: ServicosWhereInput[]
    NOT?: ServicosWhereInput | ServicosWhereInput[]
    descricao?: StringFilter<"Servicos"> | string
    preco?: FloatFilter<"Servicos"> | number
    agendamentos?: AgendamentosListRelationFilter
  }, "id">

  export type ServicosOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
    _count?: ServicosCountOrderByAggregateInput
    _avg?: ServicosAvgOrderByAggregateInput
    _max?: ServicosMaxOrderByAggregateInput
    _min?: ServicosMinOrderByAggregateInput
    _sum?: ServicosSumOrderByAggregateInput
  }

  export type ServicosScalarWhereWithAggregatesInput = {
    AND?: ServicosScalarWhereWithAggregatesInput | ServicosScalarWhereWithAggregatesInput[]
    OR?: ServicosScalarWhereWithAggregatesInput[]
    NOT?: ServicosScalarWhereWithAggregatesInput | ServicosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Servicos"> | number
    descricao?: StringWithAggregatesFilter<"Servicos"> | string
    preco?: FloatWithAggregatesFilter<"Servicos"> | number
  }

  export type AgendamentosWhereInput = {
    AND?: AgendamentosWhereInput | AgendamentosWhereInput[]
    OR?: AgendamentosWhereInput[]
    NOT?: AgendamentosWhereInput | AgendamentosWhereInput[]
    id?: IntFilter<"Agendamentos"> | number
    dataHora?: DateTimeFilter<"Agendamentos"> | Date | string
    clienteId?: IntFilter<"Agendamentos"> | number
    profissionalId?: IntFilter<"Agendamentos"> | number
    cliente?: XOR<ClientesScalarRelationFilter, ClientesWhereInput>
    profissional?: XOR<ProfissionaisScalarRelationFilter, ProfissionaisWhereInput>
    servicos?: ServicosListRelationFilter
  }

  export type AgendamentosOrderByWithRelationInput = {
    id?: SortOrder
    dataHora?: SortOrder
    clienteId?: SortOrder
    profissionalId?: SortOrder
    cliente?: ClientesOrderByWithRelationInput
    profissional?: ProfissionaisOrderByWithRelationInput
    servicos?: ServicosOrderByRelationAggregateInput
  }

  export type AgendamentosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AgendamentosWhereInput | AgendamentosWhereInput[]
    OR?: AgendamentosWhereInput[]
    NOT?: AgendamentosWhereInput | AgendamentosWhereInput[]
    dataHora?: DateTimeFilter<"Agendamentos"> | Date | string
    clienteId?: IntFilter<"Agendamentos"> | number
    profissionalId?: IntFilter<"Agendamentos"> | number
    cliente?: XOR<ClientesScalarRelationFilter, ClientesWhereInput>
    profissional?: XOR<ProfissionaisScalarRelationFilter, ProfissionaisWhereInput>
    servicos?: ServicosListRelationFilter
  }, "id">

  export type AgendamentosOrderByWithAggregationInput = {
    id?: SortOrder
    dataHora?: SortOrder
    clienteId?: SortOrder
    profissionalId?: SortOrder
    _count?: AgendamentosCountOrderByAggregateInput
    _avg?: AgendamentosAvgOrderByAggregateInput
    _max?: AgendamentosMaxOrderByAggregateInput
    _min?: AgendamentosMinOrderByAggregateInput
    _sum?: AgendamentosSumOrderByAggregateInput
  }

  export type AgendamentosScalarWhereWithAggregatesInput = {
    AND?: AgendamentosScalarWhereWithAggregatesInput | AgendamentosScalarWhereWithAggregatesInput[]
    OR?: AgendamentosScalarWhereWithAggregatesInput[]
    NOT?: AgendamentosScalarWhereWithAggregatesInput | AgendamentosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Agendamentos"> | number
    dataHora?: DateTimeWithAggregatesFilter<"Agendamentos"> | Date | string
    clienteId?: IntWithAggregatesFilter<"Agendamentos"> | number
    profissionalId?: IntWithAggregatesFilter<"Agendamentos"> | number
  }

  export type VendedoresWhereInput = {
    AND?: VendedoresWhereInput | VendedoresWhereInput[]
    OR?: VendedoresWhereInput[]
    NOT?: VendedoresWhereInput | VendedoresWhereInput[]
    id?: IntFilter<"Vendedores"> | number
    nome?: StringFilter<"Vendedores"> | string
    vendas?: VendasListRelationFilter
  }

  export type VendedoresOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    vendas?: VendasOrderByRelationAggregateInput
    _relevance?: VendedoresOrderByRelevanceInput
  }

  export type VendedoresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VendedoresWhereInput | VendedoresWhereInput[]
    OR?: VendedoresWhereInput[]
    NOT?: VendedoresWhereInput | VendedoresWhereInput[]
    nome?: StringFilter<"Vendedores"> | string
    vendas?: VendasListRelationFilter
  }, "id">

  export type VendedoresOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: VendedoresCountOrderByAggregateInput
    _avg?: VendedoresAvgOrderByAggregateInput
    _max?: VendedoresMaxOrderByAggregateInput
    _min?: VendedoresMinOrderByAggregateInput
    _sum?: VendedoresSumOrderByAggregateInput
  }

  export type VendedoresScalarWhereWithAggregatesInput = {
    AND?: VendedoresScalarWhereWithAggregatesInput | VendedoresScalarWhereWithAggregatesInput[]
    OR?: VendedoresScalarWhereWithAggregatesInput[]
    NOT?: VendedoresScalarWhereWithAggregatesInput | VendedoresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vendedores"> | number
    nome?: StringWithAggregatesFilter<"Vendedores"> | string
  }

  export type ProdutosWhereInput = {
    AND?: ProdutosWhereInput | ProdutosWhereInput[]
    OR?: ProdutosWhereInput[]
    NOT?: ProdutosWhereInput | ProdutosWhereInput[]
    id?: IntFilter<"Produtos"> | number
    nome?: StringFilter<"Produtos"> | string
    preco?: FloatFilter<"Produtos"> | number
    categoria?: StringFilter<"Produtos"> | string
    fabricadoEmMari?: BoolFilter<"Produtos"> | boolean
    estoque?: IntFilter<"Produtos"> | number
    itensVenda?: ItensVendaListRelationFilter
  }

  export type ProdutosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    categoria?: SortOrder
    fabricadoEmMari?: SortOrder
    estoque?: SortOrder
    itensVenda?: ItensVendaOrderByRelationAggregateInput
    _relevance?: ProdutosOrderByRelevanceInput
  }

  export type ProdutosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProdutosWhereInput | ProdutosWhereInput[]
    OR?: ProdutosWhereInput[]
    NOT?: ProdutosWhereInput | ProdutosWhereInput[]
    nome?: StringFilter<"Produtos"> | string
    preco?: FloatFilter<"Produtos"> | number
    categoria?: StringFilter<"Produtos"> | string
    fabricadoEmMari?: BoolFilter<"Produtos"> | boolean
    estoque?: IntFilter<"Produtos"> | number
    itensVenda?: ItensVendaListRelationFilter
  }, "id">

  export type ProdutosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    categoria?: SortOrder
    fabricadoEmMari?: SortOrder
    estoque?: SortOrder
    _count?: ProdutosCountOrderByAggregateInput
    _avg?: ProdutosAvgOrderByAggregateInput
    _max?: ProdutosMaxOrderByAggregateInput
    _min?: ProdutosMinOrderByAggregateInput
    _sum?: ProdutosSumOrderByAggregateInput
  }

  export type ProdutosScalarWhereWithAggregatesInput = {
    AND?: ProdutosScalarWhereWithAggregatesInput | ProdutosScalarWhereWithAggregatesInput[]
    OR?: ProdutosScalarWhereWithAggregatesInput[]
    NOT?: ProdutosScalarWhereWithAggregatesInput | ProdutosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Produtos"> | number
    nome?: StringWithAggregatesFilter<"Produtos"> | string
    preco?: FloatWithAggregatesFilter<"Produtos"> | number
    categoria?: StringWithAggregatesFilter<"Produtos"> | string
    fabricadoEmMari?: BoolWithAggregatesFilter<"Produtos"> | boolean
    estoque?: IntWithAggregatesFilter<"Produtos"> | number
  }

  export type VendasWhereInput = {
    AND?: VendasWhereInput | VendasWhereInput[]
    OR?: VendasWhereInput[]
    NOT?: VendasWhereInput | VendasWhereInput[]
    id?: IntFilter<"Vendas"> | number
    clienteId?: IntFilter<"Vendas"> | number
    vendedorId?: IntFilter<"Vendas"> | number
    dataHora?: DateTimeFilter<"Vendas"> | Date | string
    formaPagamento?: StringFilter<"Vendas"> | string
    statusPagamento?: StringFilter<"Vendas"> | string
    valorTotal?: FloatFilter<"Vendas"> | number
    cliente?: XOR<ClientesScalarRelationFilter, ClientesWhereInput>
    vendedor?: XOR<VendedoresScalarRelationFilter, VendedoresWhereInput>
    itens?: ItensVendaListRelationFilter
  }

  export type VendasOrderByWithRelationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    vendedorId?: SortOrder
    dataHora?: SortOrder
    formaPagamento?: SortOrder
    statusPagamento?: SortOrder
    valorTotal?: SortOrder
    cliente?: ClientesOrderByWithRelationInput
    vendedor?: VendedoresOrderByWithRelationInput
    itens?: ItensVendaOrderByRelationAggregateInput
    _relevance?: VendasOrderByRelevanceInput
  }

  export type VendasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VendasWhereInput | VendasWhereInput[]
    OR?: VendasWhereInput[]
    NOT?: VendasWhereInput | VendasWhereInput[]
    clienteId?: IntFilter<"Vendas"> | number
    vendedorId?: IntFilter<"Vendas"> | number
    dataHora?: DateTimeFilter<"Vendas"> | Date | string
    formaPagamento?: StringFilter<"Vendas"> | string
    statusPagamento?: StringFilter<"Vendas"> | string
    valorTotal?: FloatFilter<"Vendas"> | number
    cliente?: XOR<ClientesScalarRelationFilter, ClientesWhereInput>
    vendedor?: XOR<VendedoresScalarRelationFilter, VendedoresWhereInput>
    itens?: ItensVendaListRelationFilter
  }, "id">

  export type VendasOrderByWithAggregationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    vendedorId?: SortOrder
    dataHora?: SortOrder
    formaPagamento?: SortOrder
    statusPagamento?: SortOrder
    valorTotal?: SortOrder
    _count?: VendasCountOrderByAggregateInput
    _avg?: VendasAvgOrderByAggregateInput
    _max?: VendasMaxOrderByAggregateInput
    _min?: VendasMinOrderByAggregateInput
    _sum?: VendasSumOrderByAggregateInput
  }

  export type VendasScalarWhereWithAggregatesInput = {
    AND?: VendasScalarWhereWithAggregatesInput | VendasScalarWhereWithAggregatesInput[]
    OR?: VendasScalarWhereWithAggregatesInput[]
    NOT?: VendasScalarWhereWithAggregatesInput | VendasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vendas"> | number
    clienteId?: IntWithAggregatesFilter<"Vendas"> | number
    vendedorId?: IntWithAggregatesFilter<"Vendas"> | number
    dataHora?: DateTimeWithAggregatesFilter<"Vendas"> | Date | string
    formaPagamento?: StringWithAggregatesFilter<"Vendas"> | string
    statusPagamento?: StringWithAggregatesFilter<"Vendas"> | string
    valorTotal?: FloatWithAggregatesFilter<"Vendas"> | number
  }

  export type ItensVendaWhereInput = {
    AND?: ItensVendaWhereInput | ItensVendaWhereInput[]
    OR?: ItensVendaWhereInput[]
    NOT?: ItensVendaWhereInput | ItensVendaWhereInput[]
    id?: IntFilter<"ItensVenda"> | number
    vendaId?: IntFilter<"ItensVenda"> | number
    produtoId?: IntFilter<"ItensVenda"> | number
    quantidade?: IntFilter<"ItensVenda"> | number
    precoUnitario?: FloatFilter<"ItensVenda"> | number
    venda?: XOR<VendasScalarRelationFilter, VendasWhereInput>
    produto?: XOR<ProdutosScalarRelationFilter, ProdutosWhereInput>
  }

  export type ItensVendaOrderByWithRelationInput = {
    id?: SortOrder
    vendaId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    venda?: VendasOrderByWithRelationInput
    produto?: ProdutosOrderByWithRelationInput
  }

  export type ItensVendaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItensVendaWhereInput | ItensVendaWhereInput[]
    OR?: ItensVendaWhereInput[]
    NOT?: ItensVendaWhereInput | ItensVendaWhereInput[]
    vendaId?: IntFilter<"ItensVenda"> | number
    produtoId?: IntFilter<"ItensVenda"> | number
    quantidade?: IntFilter<"ItensVenda"> | number
    precoUnitario?: FloatFilter<"ItensVenda"> | number
    venda?: XOR<VendasScalarRelationFilter, VendasWhereInput>
    produto?: XOR<ProdutosScalarRelationFilter, ProdutosWhereInput>
  }, "id">

  export type ItensVendaOrderByWithAggregationInput = {
    id?: SortOrder
    vendaId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    _count?: ItensVendaCountOrderByAggregateInput
    _avg?: ItensVendaAvgOrderByAggregateInput
    _max?: ItensVendaMaxOrderByAggregateInput
    _min?: ItensVendaMinOrderByAggregateInput
    _sum?: ItensVendaSumOrderByAggregateInput
  }

  export type ItensVendaScalarWhereWithAggregatesInput = {
    AND?: ItensVendaScalarWhereWithAggregatesInput | ItensVendaScalarWhereWithAggregatesInput[]
    OR?: ItensVendaScalarWhereWithAggregatesInput[]
    NOT?: ItensVendaScalarWhereWithAggregatesInput | ItensVendaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItensVenda"> | number
    vendaId?: IntWithAggregatesFilter<"ItensVenda"> | number
    produtoId?: IntWithAggregatesFilter<"ItensVenda"> | number
    quantidade?: IntWithAggregatesFilter<"ItensVenda"> | number
    precoUnitario?: FloatWithAggregatesFilter<"ItensVenda"> | number
  }

  export type ClientesCreateInput = {
    nome: string
    telefone: string
    email?: string | null
    dataCadastro?: Date | string
    isFlamengo?: boolean
    assisteOP?: boolean
    cidadeNascimento?: string | null
    agendamentos?: AgendamentosCreateNestedManyWithoutClienteInput
    vendas?: VendasCreateNestedManyWithoutClienteInput
  }

  export type ClientesUncheckedCreateInput = {
    id?: number
    nome: string
    telefone: string
    email?: string | null
    dataCadastro?: Date | string
    isFlamengo?: boolean
    assisteOP?: boolean
    cidadeNascimento?: string | null
    agendamentos?: AgendamentosUncheckedCreateNestedManyWithoutClienteInput
    vendas?: VendasUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClientesUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    isFlamengo?: BoolFieldUpdateOperationsInput | boolean
    assisteOP?: BoolFieldUpdateOperationsInput | boolean
    cidadeNascimento?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: AgendamentosUpdateManyWithoutClienteNestedInput
    vendas?: VendasUpdateManyWithoutClienteNestedInput
  }

  export type ClientesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    isFlamengo?: BoolFieldUpdateOperationsInput | boolean
    assisteOP?: BoolFieldUpdateOperationsInput | boolean
    cidadeNascimento?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: AgendamentosUncheckedUpdateManyWithoutClienteNestedInput
    vendas?: VendasUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClientesCreateManyInput = {
    id?: number
    nome: string
    telefone: string
    email?: string | null
    dataCadastro?: Date | string
    isFlamengo?: boolean
    assisteOP?: boolean
    cidadeNascimento?: string | null
  }

  export type ClientesUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    isFlamengo?: BoolFieldUpdateOperationsInput | boolean
    assisteOP?: BoolFieldUpdateOperationsInput | boolean
    cidadeNascimento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    isFlamengo?: BoolFieldUpdateOperationsInput | boolean
    assisteOP?: BoolFieldUpdateOperationsInput | boolean
    cidadeNascimento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfissionaisCreateInput = {
    nome: string
    especialidade: string
    agendamentos?: AgendamentosCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionaisUncheckedCreateInput = {
    id?: number
    nome: string
    especialidade: string
    agendamentos?: AgendamentosUncheckedCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionaisUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    agendamentos?: AgendamentosUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionaisUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    agendamentos?: AgendamentosUncheckedUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionaisCreateManyInput = {
    id?: number
    nome: string
    especialidade: string
  }

  export type ProfissionaisUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
  }

  export type ProfissionaisUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
  }

  export type ServicosCreateInput = {
    descricao: string
    preco: number
    agendamentos?: AgendamentosCreateNestedManyWithoutServicosInput
  }

  export type ServicosUncheckedCreateInput = {
    id?: number
    descricao: string
    preco: number
    agendamentos?: AgendamentosUncheckedCreateNestedManyWithoutServicosInput
  }

  export type ServicosUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    agendamentos?: AgendamentosUpdateManyWithoutServicosNestedInput
  }

  export type ServicosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    agendamentos?: AgendamentosUncheckedUpdateManyWithoutServicosNestedInput
  }

  export type ServicosCreateManyInput = {
    id?: number
    descricao: string
    preco: number
  }

  export type ServicosUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
  }

  export type ServicosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
  }

  export type AgendamentosCreateInput = {
    dataHora: Date | string
    cliente: ClientesCreateNestedOneWithoutAgendamentosInput
    profissional: ProfissionaisCreateNestedOneWithoutAgendamentosInput
    servicos?: ServicosCreateNestedManyWithoutAgendamentosInput
  }

  export type AgendamentosUncheckedCreateInput = {
    id?: number
    dataHora: Date | string
    clienteId: number
    profissionalId: number
    servicos?: ServicosUncheckedCreateNestedManyWithoutAgendamentosInput
  }

  export type AgendamentosUpdateInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClientesUpdateOneRequiredWithoutAgendamentosNestedInput
    profissional?: ProfissionaisUpdateOneRequiredWithoutAgendamentosNestedInput
    servicos?: ServicosUpdateManyWithoutAgendamentosNestedInput
  }

  export type AgendamentosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    profissionalId?: IntFieldUpdateOperationsInput | number
    servicos?: ServicosUncheckedUpdateManyWithoutAgendamentosNestedInput
  }

  export type AgendamentosCreateManyInput = {
    id?: number
    dataHora: Date | string
    clienteId: number
    profissionalId: number
  }

  export type AgendamentosUpdateManyMutationInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    profissionalId?: IntFieldUpdateOperationsInput | number
  }

  export type VendedoresCreateInput = {
    nome: string
    vendas?: VendasCreateNestedManyWithoutVendedorInput
  }

  export type VendedoresUncheckedCreateInput = {
    id?: number
    nome: string
    vendas?: VendasUncheckedCreateNestedManyWithoutVendedorInput
  }

  export type VendedoresUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    vendas?: VendasUpdateManyWithoutVendedorNestedInput
  }

  export type VendedoresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    vendas?: VendasUncheckedUpdateManyWithoutVendedorNestedInput
  }

  export type VendedoresCreateManyInput = {
    id?: number
    nome: string
  }

  export type VendedoresUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type VendedoresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutosCreateInput = {
    nome: string
    preco: number
    categoria: string
    fabricadoEmMari?: boolean
    estoque?: number
    itensVenda?: ItensVendaCreateNestedManyWithoutProdutoInput
  }

  export type ProdutosUncheckedCreateInput = {
    id?: number
    nome: string
    preco: number
    categoria: string
    fabricadoEmMari?: boolean
    estoque?: number
    itensVenda?: ItensVendaUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    fabricadoEmMari?: BoolFieldUpdateOperationsInput | boolean
    estoque?: IntFieldUpdateOperationsInput | number
    itensVenda?: ItensVendaUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    fabricadoEmMari?: BoolFieldUpdateOperationsInput | boolean
    estoque?: IntFieldUpdateOperationsInput | number
    itensVenda?: ItensVendaUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutosCreateManyInput = {
    id?: number
    nome: string
    preco: number
    categoria: string
    fabricadoEmMari?: boolean
    estoque?: number
  }

  export type ProdutosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    fabricadoEmMari?: BoolFieldUpdateOperationsInput | boolean
    estoque?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    fabricadoEmMari?: BoolFieldUpdateOperationsInput | boolean
    estoque?: IntFieldUpdateOperationsInput | number
  }

  export type VendasCreateInput = {
    dataHora?: Date | string
    formaPagamento: string
    statusPagamento?: string
    valorTotal: number
    cliente: ClientesCreateNestedOneWithoutVendasInput
    vendedor: VendedoresCreateNestedOneWithoutVendasInput
    itens?: ItensVendaCreateNestedManyWithoutVendaInput
  }

  export type VendasUncheckedCreateInput = {
    id?: number
    clienteId: number
    vendedorId: number
    dataHora?: Date | string
    formaPagamento: string
    statusPagamento?: string
    valorTotal: number
    itens?: ItensVendaUncheckedCreateNestedManyWithoutVendaInput
  }

  export type VendasUpdateInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    formaPagamento?: StringFieldUpdateOperationsInput | string
    statusPagamento?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    cliente?: ClientesUpdateOneRequiredWithoutVendasNestedInput
    vendedor?: VendedoresUpdateOneRequiredWithoutVendasNestedInput
    itens?: ItensVendaUpdateManyWithoutVendaNestedInput
  }

  export type VendasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    vendedorId?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    formaPagamento?: StringFieldUpdateOperationsInput | string
    statusPagamento?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    itens?: ItensVendaUncheckedUpdateManyWithoutVendaNestedInput
  }

  export type VendasCreateManyInput = {
    id?: number
    clienteId: number
    vendedorId: number
    dataHora?: Date | string
    formaPagamento: string
    statusPagamento?: string
    valorTotal: number
  }

  export type VendasUpdateManyMutationInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    formaPagamento?: StringFieldUpdateOperationsInput | string
    statusPagamento?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
  }

  export type VendasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    vendedorId?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    formaPagamento?: StringFieldUpdateOperationsInput | string
    statusPagamento?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
  }

  export type ItensVendaCreateInput = {
    quantidade: number
    precoUnitario: number
    venda: VendasCreateNestedOneWithoutItensInput
    produto: ProdutosCreateNestedOneWithoutItensVendaInput
  }

  export type ItensVendaUncheckedCreateInput = {
    id?: number
    vendaId: number
    produtoId: number
    quantidade: number
    precoUnitario: number
  }

  export type ItensVendaUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    venda?: VendasUpdateOneRequiredWithoutItensNestedInput
    produto?: ProdutosUpdateOneRequiredWithoutItensVendaNestedInput
  }

  export type ItensVendaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendaId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
  }

  export type ItensVendaCreateManyInput = {
    id?: number
    vendaId: number
    produtoId: number
    quantidade: number
    precoUnitario: number
  }

  export type ItensVendaUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
  }

  export type ItensVendaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendaId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AgendamentosListRelationFilter = {
    every?: AgendamentosWhereInput
    some?: AgendamentosWhereInput
    none?: AgendamentosWhereInput
  }

  export type VendasListRelationFilter = {
    every?: VendasWhereInput
    some?: VendasWhereInput
    none?: VendasWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AgendamentosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VendasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientesOrderByRelevanceInput = {
    fields: ClientesOrderByRelevanceFieldEnum | ClientesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClientesCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    dataCadastro?: SortOrder
    isFlamengo?: SortOrder
    assisteOP?: SortOrder
    cidadeNascimento?: SortOrder
  }

  export type ClientesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClientesMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    dataCadastro?: SortOrder
    isFlamengo?: SortOrder
    assisteOP?: SortOrder
    cidadeNascimento?: SortOrder
  }

  export type ClientesMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    dataCadastro?: SortOrder
    isFlamengo?: SortOrder
    assisteOP?: SortOrder
    cidadeNascimento?: SortOrder
  }

  export type ClientesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProfissionaisOrderByRelevanceInput = {
    fields: ProfissionaisOrderByRelevanceFieldEnum | ProfissionaisOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProfissionaisCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    especialidade?: SortOrder
  }

  export type ProfissionaisAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProfissionaisMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    especialidade?: SortOrder
  }

  export type ProfissionaisMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    especialidade?: SortOrder
  }

  export type ProfissionaisSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ServicosOrderByRelevanceInput = {
    fields: ServicosOrderByRelevanceFieldEnum | ServicosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ServicosCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
  }

  export type ServicosAvgOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
  }

  export type ServicosMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
  }

  export type ServicosMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
    preco?: SortOrder
  }

  export type ServicosSumOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ClientesScalarRelationFilter = {
    is?: ClientesWhereInput
    isNot?: ClientesWhereInput
  }

  export type ProfissionaisScalarRelationFilter = {
    is?: ProfissionaisWhereInput
    isNot?: ProfissionaisWhereInput
  }

  export type ServicosListRelationFilter = {
    every?: ServicosWhereInput
    some?: ServicosWhereInput
    none?: ServicosWhereInput
  }

  export type ServicosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgendamentosCountOrderByAggregateInput = {
    id?: SortOrder
    dataHora?: SortOrder
    clienteId?: SortOrder
    profissionalId?: SortOrder
  }

  export type AgendamentosAvgOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    profissionalId?: SortOrder
  }

  export type AgendamentosMaxOrderByAggregateInput = {
    id?: SortOrder
    dataHora?: SortOrder
    clienteId?: SortOrder
    profissionalId?: SortOrder
  }

  export type AgendamentosMinOrderByAggregateInput = {
    id?: SortOrder
    dataHora?: SortOrder
    clienteId?: SortOrder
    profissionalId?: SortOrder
  }

  export type AgendamentosSumOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    profissionalId?: SortOrder
  }

  export type VendedoresOrderByRelevanceInput = {
    fields: VendedoresOrderByRelevanceFieldEnum | VendedoresOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VendedoresCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type VendedoresAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VendedoresMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type VendedoresMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type VendedoresSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ItensVendaListRelationFilter = {
    every?: ItensVendaWhereInput
    some?: ItensVendaWhereInput
    none?: ItensVendaWhereInput
  }

  export type ItensVendaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdutosOrderByRelevanceInput = {
    fields: ProdutosOrderByRelevanceFieldEnum | ProdutosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProdutosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    categoria?: SortOrder
    fabricadoEmMari?: SortOrder
    estoque?: SortOrder
  }

  export type ProdutosAvgOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    estoque?: SortOrder
  }

  export type ProdutosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    categoria?: SortOrder
    fabricadoEmMari?: SortOrder
    estoque?: SortOrder
  }

  export type ProdutosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    preco?: SortOrder
    categoria?: SortOrder
    fabricadoEmMari?: SortOrder
    estoque?: SortOrder
  }

  export type ProdutosSumOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    estoque?: SortOrder
  }

  export type VendedoresScalarRelationFilter = {
    is?: VendedoresWhereInput
    isNot?: VendedoresWhereInput
  }

  export type VendasOrderByRelevanceInput = {
    fields: VendasOrderByRelevanceFieldEnum | VendasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VendasCountOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    vendedorId?: SortOrder
    dataHora?: SortOrder
    formaPagamento?: SortOrder
    statusPagamento?: SortOrder
    valorTotal?: SortOrder
  }

  export type VendasAvgOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    vendedorId?: SortOrder
    valorTotal?: SortOrder
  }

  export type VendasMaxOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    vendedorId?: SortOrder
    dataHora?: SortOrder
    formaPagamento?: SortOrder
    statusPagamento?: SortOrder
    valorTotal?: SortOrder
  }

  export type VendasMinOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    vendedorId?: SortOrder
    dataHora?: SortOrder
    formaPagamento?: SortOrder
    statusPagamento?: SortOrder
    valorTotal?: SortOrder
  }

  export type VendasSumOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    vendedorId?: SortOrder
    valorTotal?: SortOrder
  }

  export type VendasScalarRelationFilter = {
    is?: VendasWhereInput
    isNot?: VendasWhereInput
  }

  export type ProdutosScalarRelationFilter = {
    is?: ProdutosWhereInput
    isNot?: ProdutosWhereInput
  }

  export type ItensVendaCountOrderByAggregateInput = {
    id?: SortOrder
    vendaId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
  }

  export type ItensVendaAvgOrderByAggregateInput = {
    id?: SortOrder
    vendaId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
  }

  export type ItensVendaMaxOrderByAggregateInput = {
    id?: SortOrder
    vendaId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
  }

  export type ItensVendaMinOrderByAggregateInput = {
    id?: SortOrder
    vendaId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
  }

  export type ItensVendaSumOrderByAggregateInput = {
    id?: SortOrder
    vendaId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
  }

  export type AgendamentosCreateNestedManyWithoutClienteInput = {
    create?: XOR<AgendamentosCreateWithoutClienteInput, AgendamentosUncheckedCreateWithoutClienteInput> | AgendamentosCreateWithoutClienteInput[] | AgendamentosUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AgendamentosCreateOrConnectWithoutClienteInput | AgendamentosCreateOrConnectWithoutClienteInput[]
    createMany?: AgendamentosCreateManyClienteInputEnvelope
    connect?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
  }

  export type VendasCreateNestedManyWithoutClienteInput = {
    create?: XOR<VendasCreateWithoutClienteInput, VendasUncheckedCreateWithoutClienteInput> | VendasCreateWithoutClienteInput[] | VendasUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VendasCreateOrConnectWithoutClienteInput | VendasCreateOrConnectWithoutClienteInput[]
    createMany?: VendasCreateManyClienteInputEnvelope
    connect?: VendasWhereUniqueInput | VendasWhereUniqueInput[]
  }

  export type AgendamentosUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<AgendamentosCreateWithoutClienteInput, AgendamentosUncheckedCreateWithoutClienteInput> | AgendamentosCreateWithoutClienteInput[] | AgendamentosUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AgendamentosCreateOrConnectWithoutClienteInput | AgendamentosCreateOrConnectWithoutClienteInput[]
    createMany?: AgendamentosCreateManyClienteInputEnvelope
    connect?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
  }

  export type VendasUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<VendasCreateWithoutClienteInput, VendasUncheckedCreateWithoutClienteInput> | VendasCreateWithoutClienteInput[] | VendasUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VendasCreateOrConnectWithoutClienteInput | VendasCreateOrConnectWithoutClienteInput[]
    createMany?: VendasCreateManyClienteInputEnvelope
    connect?: VendasWhereUniqueInput | VendasWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AgendamentosUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AgendamentosCreateWithoutClienteInput, AgendamentosUncheckedCreateWithoutClienteInput> | AgendamentosCreateWithoutClienteInput[] | AgendamentosUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AgendamentosCreateOrConnectWithoutClienteInput | AgendamentosCreateOrConnectWithoutClienteInput[]
    upsert?: AgendamentosUpsertWithWhereUniqueWithoutClienteInput | AgendamentosUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AgendamentosCreateManyClienteInputEnvelope
    set?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    disconnect?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    delete?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    connect?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    update?: AgendamentosUpdateWithWhereUniqueWithoutClienteInput | AgendamentosUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AgendamentosUpdateManyWithWhereWithoutClienteInput | AgendamentosUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AgendamentosScalarWhereInput | AgendamentosScalarWhereInput[]
  }

  export type VendasUpdateManyWithoutClienteNestedInput = {
    create?: XOR<VendasCreateWithoutClienteInput, VendasUncheckedCreateWithoutClienteInput> | VendasCreateWithoutClienteInput[] | VendasUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VendasCreateOrConnectWithoutClienteInput | VendasCreateOrConnectWithoutClienteInput[]
    upsert?: VendasUpsertWithWhereUniqueWithoutClienteInput | VendasUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: VendasCreateManyClienteInputEnvelope
    set?: VendasWhereUniqueInput | VendasWhereUniqueInput[]
    disconnect?: VendasWhereUniqueInput | VendasWhereUniqueInput[]
    delete?: VendasWhereUniqueInput | VendasWhereUniqueInput[]
    connect?: VendasWhereUniqueInput | VendasWhereUniqueInput[]
    update?: VendasUpdateWithWhereUniqueWithoutClienteInput | VendasUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: VendasUpdateManyWithWhereWithoutClienteInput | VendasUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: VendasScalarWhereInput | VendasScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AgendamentosUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AgendamentosCreateWithoutClienteInput, AgendamentosUncheckedCreateWithoutClienteInput> | AgendamentosCreateWithoutClienteInput[] | AgendamentosUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AgendamentosCreateOrConnectWithoutClienteInput | AgendamentosCreateOrConnectWithoutClienteInput[]
    upsert?: AgendamentosUpsertWithWhereUniqueWithoutClienteInput | AgendamentosUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AgendamentosCreateManyClienteInputEnvelope
    set?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    disconnect?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    delete?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    connect?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    update?: AgendamentosUpdateWithWhereUniqueWithoutClienteInput | AgendamentosUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AgendamentosUpdateManyWithWhereWithoutClienteInput | AgendamentosUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AgendamentosScalarWhereInput | AgendamentosScalarWhereInput[]
  }

  export type VendasUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<VendasCreateWithoutClienteInput, VendasUncheckedCreateWithoutClienteInput> | VendasCreateWithoutClienteInput[] | VendasUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VendasCreateOrConnectWithoutClienteInput | VendasCreateOrConnectWithoutClienteInput[]
    upsert?: VendasUpsertWithWhereUniqueWithoutClienteInput | VendasUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: VendasCreateManyClienteInputEnvelope
    set?: VendasWhereUniqueInput | VendasWhereUniqueInput[]
    disconnect?: VendasWhereUniqueInput | VendasWhereUniqueInput[]
    delete?: VendasWhereUniqueInput | VendasWhereUniqueInput[]
    connect?: VendasWhereUniqueInput | VendasWhereUniqueInput[]
    update?: VendasUpdateWithWhereUniqueWithoutClienteInput | VendasUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: VendasUpdateManyWithWhereWithoutClienteInput | VendasUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: VendasScalarWhereInput | VendasScalarWhereInput[]
  }

  export type AgendamentosCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<AgendamentosCreateWithoutProfissionalInput, AgendamentosUncheckedCreateWithoutProfissionalInput> | AgendamentosCreateWithoutProfissionalInput[] | AgendamentosUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: AgendamentosCreateOrConnectWithoutProfissionalInput | AgendamentosCreateOrConnectWithoutProfissionalInput[]
    createMany?: AgendamentosCreateManyProfissionalInputEnvelope
    connect?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
  }

  export type AgendamentosUncheckedCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<AgendamentosCreateWithoutProfissionalInput, AgendamentosUncheckedCreateWithoutProfissionalInput> | AgendamentosCreateWithoutProfissionalInput[] | AgendamentosUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: AgendamentosCreateOrConnectWithoutProfissionalInput | AgendamentosCreateOrConnectWithoutProfissionalInput[]
    createMany?: AgendamentosCreateManyProfissionalInputEnvelope
    connect?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
  }

  export type AgendamentosUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<AgendamentosCreateWithoutProfissionalInput, AgendamentosUncheckedCreateWithoutProfissionalInput> | AgendamentosCreateWithoutProfissionalInput[] | AgendamentosUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: AgendamentosCreateOrConnectWithoutProfissionalInput | AgendamentosCreateOrConnectWithoutProfissionalInput[]
    upsert?: AgendamentosUpsertWithWhereUniqueWithoutProfissionalInput | AgendamentosUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: AgendamentosCreateManyProfissionalInputEnvelope
    set?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    disconnect?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    delete?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    connect?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    update?: AgendamentosUpdateWithWhereUniqueWithoutProfissionalInput | AgendamentosUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: AgendamentosUpdateManyWithWhereWithoutProfissionalInput | AgendamentosUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: AgendamentosScalarWhereInput | AgendamentosScalarWhereInput[]
  }

  export type AgendamentosUncheckedUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<AgendamentosCreateWithoutProfissionalInput, AgendamentosUncheckedCreateWithoutProfissionalInput> | AgendamentosCreateWithoutProfissionalInput[] | AgendamentosUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: AgendamentosCreateOrConnectWithoutProfissionalInput | AgendamentosCreateOrConnectWithoutProfissionalInput[]
    upsert?: AgendamentosUpsertWithWhereUniqueWithoutProfissionalInput | AgendamentosUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: AgendamentosCreateManyProfissionalInputEnvelope
    set?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    disconnect?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    delete?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    connect?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    update?: AgendamentosUpdateWithWhereUniqueWithoutProfissionalInput | AgendamentosUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: AgendamentosUpdateManyWithWhereWithoutProfissionalInput | AgendamentosUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: AgendamentosScalarWhereInput | AgendamentosScalarWhereInput[]
  }

  export type AgendamentosCreateNestedManyWithoutServicosInput = {
    create?: XOR<AgendamentosCreateWithoutServicosInput, AgendamentosUncheckedCreateWithoutServicosInput> | AgendamentosCreateWithoutServicosInput[] | AgendamentosUncheckedCreateWithoutServicosInput[]
    connectOrCreate?: AgendamentosCreateOrConnectWithoutServicosInput | AgendamentosCreateOrConnectWithoutServicosInput[]
    connect?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
  }

  export type AgendamentosUncheckedCreateNestedManyWithoutServicosInput = {
    create?: XOR<AgendamentosCreateWithoutServicosInput, AgendamentosUncheckedCreateWithoutServicosInput> | AgendamentosCreateWithoutServicosInput[] | AgendamentosUncheckedCreateWithoutServicosInput[]
    connectOrCreate?: AgendamentosCreateOrConnectWithoutServicosInput | AgendamentosCreateOrConnectWithoutServicosInput[]
    connect?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AgendamentosUpdateManyWithoutServicosNestedInput = {
    create?: XOR<AgendamentosCreateWithoutServicosInput, AgendamentosUncheckedCreateWithoutServicosInput> | AgendamentosCreateWithoutServicosInput[] | AgendamentosUncheckedCreateWithoutServicosInput[]
    connectOrCreate?: AgendamentosCreateOrConnectWithoutServicosInput | AgendamentosCreateOrConnectWithoutServicosInput[]
    upsert?: AgendamentosUpsertWithWhereUniqueWithoutServicosInput | AgendamentosUpsertWithWhereUniqueWithoutServicosInput[]
    set?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    disconnect?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    delete?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    connect?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    update?: AgendamentosUpdateWithWhereUniqueWithoutServicosInput | AgendamentosUpdateWithWhereUniqueWithoutServicosInput[]
    updateMany?: AgendamentosUpdateManyWithWhereWithoutServicosInput | AgendamentosUpdateManyWithWhereWithoutServicosInput[]
    deleteMany?: AgendamentosScalarWhereInput | AgendamentosScalarWhereInput[]
  }

  export type AgendamentosUncheckedUpdateManyWithoutServicosNestedInput = {
    create?: XOR<AgendamentosCreateWithoutServicosInput, AgendamentosUncheckedCreateWithoutServicosInput> | AgendamentosCreateWithoutServicosInput[] | AgendamentosUncheckedCreateWithoutServicosInput[]
    connectOrCreate?: AgendamentosCreateOrConnectWithoutServicosInput | AgendamentosCreateOrConnectWithoutServicosInput[]
    upsert?: AgendamentosUpsertWithWhereUniqueWithoutServicosInput | AgendamentosUpsertWithWhereUniqueWithoutServicosInput[]
    set?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    disconnect?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    delete?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    connect?: AgendamentosWhereUniqueInput | AgendamentosWhereUniqueInput[]
    update?: AgendamentosUpdateWithWhereUniqueWithoutServicosInput | AgendamentosUpdateWithWhereUniqueWithoutServicosInput[]
    updateMany?: AgendamentosUpdateManyWithWhereWithoutServicosInput | AgendamentosUpdateManyWithWhereWithoutServicosInput[]
    deleteMany?: AgendamentosScalarWhereInput | AgendamentosScalarWhereInput[]
  }

  export type ClientesCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<ClientesCreateWithoutAgendamentosInput, ClientesUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: ClientesCreateOrConnectWithoutAgendamentosInput
    connect?: ClientesWhereUniqueInput
  }

  export type ProfissionaisCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<ProfissionaisCreateWithoutAgendamentosInput, ProfissionaisUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: ProfissionaisCreateOrConnectWithoutAgendamentosInput
    connect?: ProfissionaisWhereUniqueInput
  }

  export type ServicosCreateNestedManyWithoutAgendamentosInput = {
    create?: XOR<ServicosCreateWithoutAgendamentosInput, ServicosUncheckedCreateWithoutAgendamentosInput> | ServicosCreateWithoutAgendamentosInput[] | ServicosUncheckedCreateWithoutAgendamentosInput[]
    connectOrCreate?: ServicosCreateOrConnectWithoutAgendamentosInput | ServicosCreateOrConnectWithoutAgendamentosInput[]
    connect?: ServicosWhereUniqueInput | ServicosWhereUniqueInput[]
  }

  export type ServicosUncheckedCreateNestedManyWithoutAgendamentosInput = {
    create?: XOR<ServicosCreateWithoutAgendamentosInput, ServicosUncheckedCreateWithoutAgendamentosInput> | ServicosCreateWithoutAgendamentosInput[] | ServicosUncheckedCreateWithoutAgendamentosInput[]
    connectOrCreate?: ServicosCreateOrConnectWithoutAgendamentosInput | ServicosCreateOrConnectWithoutAgendamentosInput[]
    connect?: ServicosWhereUniqueInput | ServicosWhereUniqueInput[]
  }

  export type ClientesUpdateOneRequiredWithoutAgendamentosNestedInput = {
    create?: XOR<ClientesCreateWithoutAgendamentosInput, ClientesUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: ClientesCreateOrConnectWithoutAgendamentosInput
    upsert?: ClientesUpsertWithoutAgendamentosInput
    connect?: ClientesWhereUniqueInput
    update?: XOR<XOR<ClientesUpdateToOneWithWhereWithoutAgendamentosInput, ClientesUpdateWithoutAgendamentosInput>, ClientesUncheckedUpdateWithoutAgendamentosInput>
  }

  export type ProfissionaisUpdateOneRequiredWithoutAgendamentosNestedInput = {
    create?: XOR<ProfissionaisCreateWithoutAgendamentosInput, ProfissionaisUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: ProfissionaisCreateOrConnectWithoutAgendamentosInput
    upsert?: ProfissionaisUpsertWithoutAgendamentosInput
    connect?: ProfissionaisWhereUniqueInput
    update?: XOR<XOR<ProfissionaisUpdateToOneWithWhereWithoutAgendamentosInput, ProfissionaisUpdateWithoutAgendamentosInput>, ProfissionaisUncheckedUpdateWithoutAgendamentosInput>
  }

  export type ServicosUpdateManyWithoutAgendamentosNestedInput = {
    create?: XOR<ServicosCreateWithoutAgendamentosInput, ServicosUncheckedCreateWithoutAgendamentosInput> | ServicosCreateWithoutAgendamentosInput[] | ServicosUncheckedCreateWithoutAgendamentosInput[]
    connectOrCreate?: ServicosCreateOrConnectWithoutAgendamentosInput | ServicosCreateOrConnectWithoutAgendamentosInput[]
    upsert?: ServicosUpsertWithWhereUniqueWithoutAgendamentosInput | ServicosUpsertWithWhereUniqueWithoutAgendamentosInput[]
    set?: ServicosWhereUniqueInput | ServicosWhereUniqueInput[]
    disconnect?: ServicosWhereUniqueInput | ServicosWhereUniqueInput[]
    delete?: ServicosWhereUniqueInput | ServicosWhereUniqueInput[]
    connect?: ServicosWhereUniqueInput | ServicosWhereUniqueInput[]
    update?: ServicosUpdateWithWhereUniqueWithoutAgendamentosInput | ServicosUpdateWithWhereUniqueWithoutAgendamentosInput[]
    updateMany?: ServicosUpdateManyWithWhereWithoutAgendamentosInput | ServicosUpdateManyWithWhereWithoutAgendamentosInput[]
    deleteMany?: ServicosScalarWhereInput | ServicosScalarWhereInput[]
  }

  export type ServicosUncheckedUpdateManyWithoutAgendamentosNestedInput = {
    create?: XOR<ServicosCreateWithoutAgendamentosInput, ServicosUncheckedCreateWithoutAgendamentosInput> | ServicosCreateWithoutAgendamentosInput[] | ServicosUncheckedCreateWithoutAgendamentosInput[]
    connectOrCreate?: ServicosCreateOrConnectWithoutAgendamentosInput | ServicosCreateOrConnectWithoutAgendamentosInput[]
    upsert?: ServicosUpsertWithWhereUniqueWithoutAgendamentosInput | ServicosUpsertWithWhereUniqueWithoutAgendamentosInput[]
    set?: ServicosWhereUniqueInput | ServicosWhereUniqueInput[]
    disconnect?: ServicosWhereUniqueInput | ServicosWhereUniqueInput[]
    delete?: ServicosWhereUniqueInput | ServicosWhereUniqueInput[]
    connect?: ServicosWhereUniqueInput | ServicosWhereUniqueInput[]
    update?: ServicosUpdateWithWhereUniqueWithoutAgendamentosInput | ServicosUpdateWithWhereUniqueWithoutAgendamentosInput[]
    updateMany?: ServicosUpdateManyWithWhereWithoutAgendamentosInput | ServicosUpdateManyWithWhereWithoutAgendamentosInput[]
    deleteMany?: ServicosScalarWhereInput | ServicosScalarWhereInput[]
  }

  export type VendasCreateNestedManyWithoutVendedorInput = {
    create?: XOR<VendasCreateWithoutVendedorInput, VendasUncheckedCreateWithoutVendedorInput> | VendasCreateWithoutVendedorInput[] | VendasUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: VendasCreateOrConnectWithoutVendedorInput | VendasCreateOrConnectWithoutVendedorInput[]
    createMany?: VendasCreateManyVendedorInputEnvelope
    connect?: VendasWhereUniqueInput | VendasWhereUniqueInput[]
  }

  export type VendasUncheckedCreateNestedManyWithoutVendedorInput = {
    create?: XOR<VendasCreateWithoutVendedorInput, VendasUncheckedCreateWithoutVendedorInput> | VendasCreateWithoutVendedorInput[] | VendasUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: VendasCreateOrConnectWithoutVendedorInput | VendasCreateOrConnectWithoutVendedorInput[]
    createMany?: VendasCreateManyVendedorInputEnvelope
    connect?: VendasWhereUniqueInput | VendasWhereUniqueInput[]
  }

  export type VendasUpdateManyWithoutVendedorNestedInput = {
    create?: XOR<VendasCreateWithoutVendedorInput, VendasUncheckedCreateWithoutVendedorInput> | VendasCreateWithoutVendedorInput[] | VendasUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: VendasCreateOrConnectWithoutVendedorInput | VendasCreateOrConnectWithoutVendedorInput[]
    upsert?: VendasUpsertWithWhereUniqueWithoutVendedorInput | VendasUpsertWithWhereUniqueWithoutVendedorInput[]
    createMany?: VendasCreateManyVendedorInputEnvelope
    set?: VendasWhereUniqueInput | VendasWhereUniqueInput[]
    disconnect?: VendasWhereUniqueInput | VendasWhereUniqueInput[]
    delete?: VendasWhereUniqueInput | VendasWhereUniqueInput[]
    connect?: VendasWhereUniqueInput | VendasWhereUniqueInput[]
    update?: VendasUpdateWithWhereUniqueWithoutVendedorInput | VendasUpdateWithWhereUniqueWithoutVendedorInput[]
    updateMany?: VendasUpdateManyWithWhereWithoutVendedorInput | VendasUpdateManyWithWhereWithoutVendedorInput[]
    deleteMany?: VendasScalarWhereInput | VendasScalarWhereInput[]
  }

  export type VendasUncheckedUpdateManyWithoutVendedorNestedInput = {
    create?: XOR<VendasCreateWithoutVendedorInput, VendasUncheckedCreateWithoutVendedorInput> | VendasCreateWithoutVendedorInput[] | VendasUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: VendasCreateOrConnectWithoutVendedorInput | VendasCreateOrConnectWithoutVendedorInput[]
    upsert?: VendasUpsertWithWhereUniqueWithoutVendedorInput | VendasUpsertWithWhereUniqueWithoutVendedorInput[]
    createMany?: VendasCreateManyVendedorInputEnvelope
    set?: VendasWhereUniqueInput | VendasWhereUniqueInput[]
    disconnect?: VendasWhereUniqueInput | VendasWhereUniqueInput[]
    delete?: VendasWhereUniqueInput | VendasWhereUniqueInput[]
    connect?: VendasWhereUniqueInput | VendasWhereUniqueInput[]
    update?: VendasUpdateWithWhereUniqueWithoutVendedorInput | VendasUpdateWithWhereUniqueWithoutVendedorInput[]
    updateMany?: VendasUpdateManyWithWhereWithoutVendedorInput | VendasUpdateManyWithWhereWithoutVendedorInput[]
    deleteMany?: VendasScalarWhereInput | VendasScalarWhereInput[]
  }

  export type ItensVendaCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ItensVendaCreateWithoutProdutoInput, ItensVendaUncheckedCreateWithoutProdutoInput> | ItensVendaCreateWithoutProdutoInput[] | ItensVendaUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItensVendaCreateOrConnectWithoutProdutoInput | ItensVendaCreateOrConnectWithoutProdutoInput[]
    createMany?: ItensVendaCreateManyProdutoInputEnvelope
    connect?: ItensVendaWhereUniqueInput | ItensVendaWhereUniqueInput[]
  }

  export type ItensVendaUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ItensVendaCreateWithoutProdutoInput, ItensVendaUncheckedCreateWithoutProdutoInput> | ItensVendaCreateWithoutProdutoInput[] | ItensVendaUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItensVendaCreateOrConnectWithoutProdutoInput | ItensVendaCreateOrConnectWithoutProdutoInput[]
    createMany?: ItensVendaCreateManyProdutoInputEnvelope
    connect?: ItensVendaWhereUniqueInput | ItensVendaWhereUniqueInput[]
  }

  export type ItensVendaUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ItensVendaCreateWithoutProdutoInput, ItensVendaUncheckedCreateWithoutProdutoInput> | ItensVendaCreateWithoutProdutoInput[] | ItensVendaUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItensVendaCreateOrConnectWithoutProdutoInput | ItensVendaCreateOrConnectWithoutProdutoInput[]
    upsert?: ItensVendaUpsertWithWhereUniqueWithoutProdutoInput | ItensVendaUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ItensVendaCreateManyProdutoInputEnvelope
    set?: ItensVendaWhereUniqueInput | ItensVendaWhereUniqueInput[]
    disconnect?: ItensVendaWhereUniqueInput | ItensVendaWhereUniqueInput[]
    delete?: ItensVendaWhereUniqueInput | ItensVendaWhereUniqueInput[]
    connect?: ItensVendaWhereUniqueInput | ItensVendaWhereUniqueInput[]
    update?: ItensVendaUpdateWithWhereUniqueWithoutProdutoInput | ItensVendaUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ItensVendaUpdateManyWithWhereWithoutProdutoInput | ItensVendaUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ItensVendaScalarWhereInput | ItensVendaScalarWhereInput[]
  }

  export type ItensVendaUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ItensVendaCreateWithoutProdutoInput, ItensVendaUncheckedCreateWithoutProdutoInput> | ItensVendaCreateWithoutProdutoInput[] | ItensVendaUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ItensVendaCreateOrConnectWithoutProdutoInput | ItensVendaCreateOrConnectWithoutProdutoInput[]
    upsert?: ItensVendaUpsertWithWhereUniqueWithoutProdutoInput | ItensVendaUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ItensVendaCreateManyProdutoInputEnvelope
    set?: ItensVendaWhereUniqueInput | ItensVendaWhereUniqueInput[]
    disconnect?: ItensVendaWhereUniqueInput | ItensVendaWhereUniqueInput[]
    delete?: ItensVendaWhereUniqueInput | ItensVendaWhereUniqueInput[]
    connect?: ItensVendaWhereUniqueInput | ItensVendaWhereUniqueInput[]
    update?: ItensVendaUpdateWithWhereUniqueWithoutProdutoInput | ItensVendaUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ItensVendaUpdateManyWithWhereWithoutProdutoInput | ItensVendaUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ItensVendaScalarWhereInput | ItensVendaScalarWhereInput[]
  }

  export type ClientesCreateNestedOneWithoutVendasInput = {
    create?: XOR<ClientesCreateWithoutVendasInput, ClientesUncheckedCreateWithoutVendasInput>
    connectOrCreate?: ClientesCreateOrConnectWithoutVendasInput
    connect?: ClientesWhereUniqueInput
  }

  export type VendedoresCreateNestedOneWithoutVendasInput = {
    create?: XOR<VendedoresCreateWithoutVendasInput, VendedoresUncheckedCreateWithoutVendasInput>
    connectOrCreate?: VendedoresCreateOrConnectWithoutVendasInput
    connect?: VendedoresWhereUniqueInput
  }

  export type ItensVendaCreateNestedManyWithoutVendaInput = {
    create?: XOR<ItensVendaCreateWithoutVendaInput, ItensVendaUncheckedCreateWithoutVendaInput> | ItensVendaCreateWithoutVendaInput[] | ItensVendaUncheckedCreateWithoutVendaInput[]
    connectOrCreate?: ItensVendaCreateOrConnectWithoutVendaInput | ItensVendaCreateOrConnectWithoutVendaInput[]
    createMany?: ItensVendaCreateManyVendaInputEnvelope
    connect?: ItensVendaWhereUniqueInput | ItensVendaWhereUniqueInput[]
  }

  export type ItensVendaUncheckedCreateNestedManyWithoutVendaInput = {
    create?: XOR<ItensVendaCreateWithoutVendaInput, ItensVendaUncheckedCreateWithoutVendaInput> | ItensVendaCreateWithoutVendaInput[] | ItensVendaUncheckedCreateWithoutVendaInput[]
    connectOrCreate?: ItensVendaCreateOrConnectWithoutVendaInput | ItensVendaCreateOrConnectWithoutVendaInput[]
    createMany?: ItensVendaCreateManyVendaInputEnvelope
    connect?: ItensVendaWhereUniqueInput | ItensVendaWhereUniqueInput[]
  }

  export type ClientesUpdateOneRequiredWithoutVendasNestedInput = {
    create?: XOR<ClientesCreateWithoutVendasInput, ClientesUncheckedCreateWithoutVendasInput>
    connectOrCreate?: ClientesCreateOrConnectWithoutVendasInput
    upsert?: ClientesUpsertWithoutVendasInput
    connect?: ClientesWhereUniqueInput
    update?: XOR<XOR<ClientesUpdateToOneWithWhereWithoutVendasInput, ClientesUpdateWithoutVendasInput>, ClientesUncheckedUpdateWithoutVendasInput>
  }

  export type VendedoresUpdateOneRequiredWithoutVendasNestedInput = {
    create?: XOR<VendedoresCreateWithoutVendasInput, VendedoresUncheckedCreateWithoutVendasInput>
    connectOrCreate?: VendedoresCreateOrConnectWithoutVendasInput
    upsert?: VendedoresUpsertWithoutVendasInput
    connect?: VendedoresWhereUniqueInput
    update?: XOR<XOR<VendedoresUpdateToOneWithWhereWithoutVendasInput, VendedoresUpdateWithoutVendasInput>, VendedoresUncheckedUpdateWithoutVendasInput>
  }

  export type ItensVendaUpdateManyWithoutVendaNestedInput = {
    create?: XOR<ItensVendaCreateWithoutVendaInput, ItensVendaUncheckedCreateWithoutVendaInput> | ItensVendaCreateWithoutVendaInput[] | ItensVendaUncheckedCreateWithoutVendaInput[]
    connectOrCreate?: ItensVendaCreateOrConnectWithoutVendaInput | ItensVendaCreateOrConnectWithoutVendaInput[]
    upsert?: ItensVendaUpsertWithWhereUniqueWithoutVendaInput | ItensVendaUpsertWithWhereUniqueWithoutVendaInput[]
    createMany?: ItensVendaCreateManyVendaInputEnvelope
    set?: ItensVendaWhereUniqueInput | ItensVendaWhereUniqueInput[]
    disconnect?: ItensVendaWhereUniqueInput | ItensVendaWhereUniqueInput[]
    delete?: ItensVendaWhereUniqueInput | ItensVendaWhereUniqueInput[]
    connect?: ItensVendaWhereUniqueInput | ItensVendaWhereUniqueInput[]
    update?: ItensVendaUpdateWithWhereUniqueWithoutVendaInput | ItensVendaUpdateWithWhereUniqueWithoutVendaInput[]
    updateMany?: ItensVendaUpdateManyWithWhereWithoutVendaInput | ItensVendaUpdateManyWithWhereWithoutVendaInput[]
    deleteMany?: ItensVendaScalarWhereInput | ItensVendaScalarWhereInput[]
  }

  export type ItensVendaUncheckedUpdateManyWithoutVendaNestedInput = {
    create?: XOR<ItensVendaCreateWithoutVendaInput, ItensVendaUncheckedCreateWithoutVendaInput> | ItensVendaCreateWithoutVendaInput[] | ItensVendaUncheckedCreateWithoutVendaInput[]
    connectOrCreate?: ItensVendaCreateOrConnectWithoutVendaInput | ItensVendaCreateOrConnectWithoutVendaInput[]
    upsert?: ItensVendaUpsertWithWhereUniqueWithoutVendaInput | ItensVendaUpsertWithWhereUniqueWithoutVendaInput[]
    createMany?: ItensVendaCreateManyVendaInputEnvelope
    set?: ItensVendaWhereUniqueInput | ItensVendaWhereUniqueInput[]
    disconnect?: ItensVendaWhereUniqueInput | ItensVendaWhereUniqueInput[]
    delete?: ItensVendaWhereUniqueInput | ItensVendaWhereUniqueInput[]
    connect?: ItensVendaWhereUniqueInput | ItensVendaWhereUniqueInput[]
    update?: ItensVendaUpdateWithWhereUniqueWithoutVendaInput | ItensVendaUpdateWithWhereUniqueWithoutVendaInput[]
    updateMany?: ItensVendaUpdateManyWithWhereWithoutVendaInput | ItensVendaUpdateManyWithWhereWithoutVendaInput[]
    deleteMany?: ItensVendaScalarWhereInput | ItensVendaScalarWhereInput[]
  }

  export type VendasCreateNestedOneWithoutItensInput = {
    create?: XOR<VendasCreateWithoutItensInput, VendasUncheckedCreateWithoutItensInput>
    connectOrCreate?: VendasCreateOrConnectWithoutItensInput
    connect?: VendasWhereUniqueInput
  }

  export type ProdutosCreateNestedOneWithoutItensVendaInput = {
    create?: XOR<ProdutosCreateWithoutItensVendaInput, ProdutosUncheckedCreateWithoutItensVendaInput>
    connectOrCreate?: ProdutosCreateOrConnectWithoutItensVendaInput
    connect?: ProdutosWhereUniqueInput
  }

  export type VendasUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<VendasCreateWithoutItensInput, VendasUncheckedCreateWithoutItensInput>
    connectOrCreate?: VendasCreateOrConnectWithoutItensInput
    upsert?: VendasUpsertWithoutItensInput
    connect?: VendasWhereUniqueInput
    update?: XOR<XOR<VendasUpdateToOneWithWhereWithoutItensInput, VendasUpdateWithoutItensInput>, VendasUncheckedUpdateWithoutItensInput>
  }

  export type ProdutosUpdateOneRequiredWithoutItensVendaNestedInput = {
    create?: XOR<ProdutosCreateWithoutItensVendaInput, ProdutosUncheckedCreateWithoutItensVendaInput>
    connectOrCreate?: ProdutosCreateOrConnectWithoutItensVendaInput
    upsert?: ProdutosUpsertWithoutItensVendaInput
    connect?: ProdutosWhereUniqueInput
    update?: XOR<XOR<ProdutosUpdateToOneWithWhereWithoutItensVendaInput, ProdutosUpdateWithoutItensVendaInput>, ProdutosUncheckedUpdateWithoutItensVendaInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AgendamentosCreateWithoutClienteInput = {
    dataHora: Date | string
    profissional: ProfissionaisCreateNestedOneWithoutAgendamentosInput
    servicos?: ServicosCreateNestedManyWithoutAgendamentosInput
  }

  export type AgendamentosUncheckedCreateWithoutClienteInput = {
    id?: number
    dataHora: Date | string
    profissionalId: number
    servicos?: ServicosUncheckedCreateNestedManyWithoutAgendamentosInput
  }

  export type AgendamentosCreateOrConnectWithoutClienteInput = {
    where: AgendamentosWhereUniqueInput
    create: XOR<AgendamentosCreateWithoutClienteInput, AgendamentosUncheckedCreateWithoutClienteInput>
  }

  export type AgendamentosCreateManyClienteInputEnvelope = {
    data: AgendamentosCreateManyClienteInput | AgendamentosCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type VendasCreateWithoutClienteInput = {
    dataHora?: Date | string
    formaPagamento: string
    statusPagamento?: string
    valorTotal: number
    vendedor: VendedoresCreateNestedOneWithoutVendasInput
    itens?: ItensVendaCreateNestedManyWithoutVendaInput
  }

  export type VendasUncheckedCreateWithoutClienteInput = {
    id?: number
    vendedorId: number
    dataHora?: Date | string
    formaPagamento: string
    statusPagamento?: string
    valorTotal: number
    itens?: ItensVendaUncheckedCreateNestedManyWithoutVendaInput
  }

  export type VendasCreateOrConnectWithoutClienteInput = {
    where: VendasWhereUniqueInput
    create: XOR<VendasCreateWithoutClienteInput, VendasUncheckedCreateWithoutClienteInput>
  }

  export type VendasCreateManyClienteInputEnvelope = {
    data: VendasCreateManyClienteInput | VendasCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type AgendamentosUpsertWithWhereUniqueWithoutClienteInput = {
    where: AgendamentosWhereUniqueInput
    update: XOR<AgendamentosUpdateWithoutClienteInput, AgendamentosUncheckedUpdateWithoutClienteInput>
    create: XOR<AgendamentosCreateWithoutClienteInput, AgendamentosUncheckedCreateWithoutClienteInput>
  }

  export type AgendamentosUpdateWithWhereUniqueWithoutClienteInput = {
    where: AgendamentosWhereUniqueInput
    data: XOR<AgendamentosUpdateWithoutClienteInput, AgendamentosUncheckedUpdateWithoutClienteInput>
  }

  export type AgendamentosUpdateManyWithWhereWithoutClienteInput = {
    where: AgendamentosScalarWhereInput
    data: XOR<AgendamentosUpdateManyMutationInput, AgendamentosUncheckedUpdateManyWithoutClienteInput>
  }

  export type AgendamentosScalarWhereInput = {
    AND?: AgendamentosScalarWhereInput | AgendamentosScalarWhereInput[]
    OR?: AgendamentosScalarWhereInput[]
    NOT?: AgendamentosScalarWhereInput | AgendamentosScalarWhereInput[]
    id?: IntFilter<"Agendamentos"> | number
    dataHora?: DateTimeFilter<"Agendamentos"> | Date | string
    clienteId?: IntFilter<"Agendamentos"> | number
    profissionalId?: IntFilter<"Agendamentos"> | number
  }

  export type VendasUpsertWithWhereUniqueWithoutClienteInput = {
    where: VendasWhereUniqueInput
    update: XOR<VendasUpdateWithoutClienteInput, VendasUncheckedUpdateWithoutClienteInput>
    create: XOR<VendasCreateWithoutClienteInput, VendasUncheckedCreateWithoutClienteInput>
  }

  export type VendasUpdateWithWhereUniqueWithoutClienteInput = {
    where: VendasWhereUniqueInput
    data: XOR<VendasUpdateWithoutClienteInput, VendasUncheckedUpdateWithoutClienteInput>
  }

  export type VendasUpdateManyWithWhereWithoutClienteInput = {
    where: VendasScalarWhereInput
    data: XOR<VendasUpdateManyMutationInput, VendasUncheckedUpdateManyWithoutClienteInput>
  }

  export type VendasScalarWhereInput = {
    AND?: VendasScalarWhereInput | VendasScalarWhereInput[]
    OR?: VendasScalarWhereInput[]
    NOT?: VendasScalarWhereInput | VendasScalarWhereInput[]
    id?: IntFilter<"Vendas"> | number
    clienteId?: IntFilter<"Vendas"> | number
    vendedorId?: IntFilter<"Vendas"> | number
    dataHora?: DateTimeFilter<"Vendas"> | Date | string
    formaPagamento?: StringFilter<"Vendas"> | string
    statusPagamento?: StringFilter<"Vendas"> | string
    valorTotal?: FloatFilter<"Vendas"> | number
  }

  export type AgendamentosCreateWithoutProfissionalInput = {
    dataHora: Date | string
    cliente: ClientesCreateNestedOneWithoutAgendamentosInput
    servicos?: ServicosCreateNestedManyWithoutAgendamentosInput
  }

  export type AgendamentosUncheckedCreateWithoutProfissionalInput = {
    id?: number
    dataHora: Date | string
    clienteId: number
    servicos?: ServicosUncheckedCreateNestedManyWithoutAgendamentosInput
  }

  export type AgendamentosCreateOrConnectWithoutProfissionalInput = {
    where: AgendamentosWhereUniqueInput
    create: XOR<AgendamentosCreateWithoutProfissionalInput, AgendamentosUncheckedCreateWithoutProfissionalInput>
  }

  export type AgendamentosCreateManyProfissionalInputEnvelope = {
    data: AgendamentosCreateManyProfissionalInput | AgendamentosCreateManyProfissionalInput[]
    skipDuplicates?: boolean
  }

  export type AgendamentosUpsertWithWhereUniqueWithoutProfissionalInput = {
    where: AgendamentosWhereUniqueInput
    update: XOR<AgendamentosUpdateWithoutProfissionalInput, AgendamentosUncheckedUpdateWithoutProfissionalInput>
    create: XOR<AgendamentosCreateWithoutProfissionalInput, AgendamentosUncheckedCreateWithoutProfissionalInput>
  }

  export type AgendamentosUpdateWithWhereUniqueWithoutProfissionalInput = {
    where: AgendamentosWhereUniqueInput
    data: XOR<AgendamentosUpdateWithoutProfissionalInput, AgendamentosUncheckedUpdateWithoutProfissionalInput>
  }

  export type AgendamentosUpdateManyWithWhereWithoutProfissionalInput = {
    where: AgendamentosScalarWhereInput
    data: XOR<AgendamentosUpdateManyMutationInput, AgendamentosUncheckedUpdateManyWithoutProfissionalInput>
  }

  export type AgendamentosCreateWithoutServicosInput = {
    dataHora: Date | string
    cliente: ClientesCreateNestedOneWithoutAgendamentosInput
    profissional: ProfissionaisCreateNestedOneWithoutAgendamentosInput
  }

  export type AgendamentosUncheckedCreateWithoutServicosInput = {
    id?: number
    dataHora: Date | string
    clienteId: number
    profissionalId: number
  }

  export type AgendamentosCreateOrConnectWithoutServicosInput = {
    where: AgendamentosWhereUniqueInput
    create: XOR<AgendamentosCreateWithoutServicosInput, AgendamentosUncheckedCreateWithoutServicosInput>
  }

  export type AgendamentosUpsertWithWhereUniqueWithoutServicosInput = {
    where: AgendamentosWhereUniqueInput
    update: XOR<AgendamentosUpdateWithoutServicosInput, AgendamentosUncheckedUpdateWithoutServicosInput>
    create: XOR<AgendamentosCreateWithoutServicosInput, AgendamentosUncheckedCreateWithoutServicosInput>
  }

  export type AgendamentosUpdateWithWhereUniqueWithoutServicosInput = {
    where: AgendamentosWhereUniqueInput
    data: XOR<AgendamentosUpdateWithoutServicosInput, AgendamentosUncheckedUpdateWithoutServicosInput>
  }

  export type AgendamentosUpdateManyWithWhereWithoutServicosInput = {
    where: AgendamentosScalarWhereInput
    data: XOR<AgendamentosUpdateManyMutationInput, AgendamentosUncheckedUpdateManyWithoutServicosInput>
  }

  export type ClientesCreateWithoutAgendamentosInput = {
    nome: string
    telefone: string
    email?: string | null
    dataCadastro?: Date | string
    isFlamengo?: boolean
    assisteOP?: boolean
    cidadeNascimento?: string | null
    vendas?: VendasCreateNestedManyWithoutClienteInput
  }

  export type ClientesUncheckedCreateWithoutAgendamentosInput = {
    id?: number
    nome: string
    telefone: string
    email?: string | null
    dataCadastro?: Date | string
    isFlamengo?: boolean
    assisteOP?: boolean
    cidadeNascimento?: string | null
    vendas?: VendasUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClientesCreateOrConnectWithoutAgendamentosInput = {
    where: ClientesWhereUniqueInput
    create: XOR<ClientesCreateWithoutAgendamentosInput, ClientesUncheckedCreateWithoutAgendamentosInput>
  }

  export type ProfissionaisCreateWithoutAgendamentosInput = {
    nome: string
    especialidade: string
  }

  export type ProfissionaisUncheckedCreateWithoutAgendamentosInput = {
    id?: number
    nome: string
    especialidade: string
  }

  export type ProfissionaisCreateOrConnectWithoutAgendamentosInput = {
    where: ProfissionaisWhereUniqueInput
    create: XOR<ProfissionaisCreateWithoutAgendamentosInput, ProfissionaisUncheckedCreateWithoutAgendamentosInput>
  }

  export type ServicosCreateWithoutAgendamentosInput = {
    descricao: string
    preco: number
  }

  export type ServicosUncheckedCreateWithoutAgendamentosInput = {
    id?: number
    descricao: string
    preco: number
  }

  export type ServicosCreateOrConnectWithoutAgendamentosInput = {
    where: ServicosWhereUniqueInput
    create: XOR<ServicosCreateWithoutAgendamentosInput, ServicosUncheckedCreateWithoutAgendamentosInput>
  }

  export type ClientesUpsertWithoutAgendamentosInput = {
    update: XOR<ClientesUpdateWithoutAgendamentosInput, ClientesUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<ClientesCreateWithoutAgendamentosInput, ClientesUncheckedCreateWithoutAgendamentosInput>
    where?: ClientesWhereInput
  }

  export type ClientesUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: ClientesWhereInput
    data: XOR<ClientesUpdateWithoutAgendamentosInput, ClientesUncheckedUpdateWithoutAgendamentosInput>
  }

  export type ClientesUpdateWithoutAgendamentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    isFlamengo?: BoolFieldUpdateOperationsInput | boolean
    assisteOP?: BoolFieldUpdateOperationsInput | boolean
    cidadeNascimento?: NullableStringFieldUpdateOperationsInput | string | null
    vendas?: VendasUpdateManyWithoutClienteNestedInput
  }

  export type ClientesUncheckedUpdateWithoutAgendamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    isFlamengo?: BoolFieldUpdateOperationsInput | boolean
    assisteOP?: BoolFieldUpdateOperationsInput | boolean
    cidadeNascimento?: NullableStringFieldUpdateOperationsInput | string | null
    vendas?: VendasUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ProfissionaisUpsertWithoutAgendamentosInput = {
    update: XOR<ProfissionaisUpdateWithoutAgendamentosInput, ProfissionaisUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<ProfissionaisCreateWithoutAgendamentosInput, ProfissionaisUncheckedCreateWithoutAgendamentosInput>
    where?: ProfissionaisWhereInput
  }

  export type ProfissionaisUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: ProfissionaisWhereInput
    data: XOR<ProfissionaisUpdateWithoutAgendamentosInput, ProfissionaisUncheckedUpdateWithoutAgendamentosInput>
  }

  export type ProfissionaisUpdateWithoutAgendamentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
  }

  export type ProfissionaisUncheckedUpdateWithoutAgendamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
  }

  export type ServicosUpsertWithWhereUniqueWithoutAgendamentosInput = {
    where: ServicosWhereUniqueInput
    update: XOR<ServicosUpdateWithoutAgendamentosInput, ServicosUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<ServicosCreateWithoutAgendamentosInput, ServicosUncheckedCreateWithoutAgendamentosInput>
  }

  export type ServicosUpdateWithWhereUniqueWithoutAgendamentosInput = {
    where: ServicosWhereUniqueInput
    data: XOR<ServicosUpdateWithoutAgendamentosInput, ServicosUncheckedUpdateWithoutAgendamentosInput>
  }

  export type ServicosUpdateManyWithWhereWithoutAgendamentosInput = {
    where: ServicosScalarWhereInput
    data: XOR<ServicosUpdateManyMutationInput, ServicosUncheckedUpdateManyWithoutAgendamentosInput>
  }

  export type ServicosScalarWhereInput = {
    AND?: ServicosScalarWhereInput | ServicosScalarWhereInput[]
    OR?: ServicosScalarWhereInput[]
    NOT?: ServicosScalarWhereInput | ServicosScalarWhereInput[]
    id?: IntFilter<"Servicos"> | number
    descricao?: StringFilter<"Servicos"> | string
    preco?: FloatFilter<"Servicos"> | number
  }

  export type VendasCreateWithoutVendedorInput = {
    dataHora?: Date | string
    formaPagamento: string
    statusPagamento?: string
    valorTotal: number
    cliente: ClientesCreateNestedOneWithoutVendasInput
    itens?: ItensVendaCreateNestedManyWithoutVendaInput
  }

  export type VendasUncheckedCreateWithoutVendedorInput = {
    id?: number
    clienteId: number
    dataHora?: Date | string
    formaPagamento: string
    statusPagamento?: string
    valorTotal: number
    itens?: ItensVendaUncheckedCreateNestedManyWithoutVendaInput
  }

  export type VendasCreateOrConnectWithoutVendedorInput = {
    where: VendasWhereUniqueInput
    create: XOR<VendasCreateWithoutVendedorInput, VendasUncheckedCreateWithoutVendedorInput>
  }

  export type VendasCreateManyVendedorInputEnvelope = {
    data: VendasCreateManyVendedorInput | VendasCreateManyVendedorInput[]
    skipDuplicates?: boolean
  }

  export type VendasUpsertWithWhereUniqueWithoutVendedorInput = {
    where: VendasWhereUniqueInput
    update: XOR<VendasUpdateWithoutVendedorInput, VendasUncheckedUpdateWithoutVendedorInput>
    create: XOR<VendasCreateWithoutVendedorInput, VendasUncheckedCreateWithoutVendedorInput>
  }

  export type VendasUpdateWithWhereUniqueWithoutVendedorInput = {
    where: VendasWhereUniqueInput
    data: XOR<VendasUpdateWithoutVendedorInput, VendasUncheckedUpdateWithoutVendedorInput>
  }

  export type VendasUpdateManyWithWhereWithoutVendedorInput = {
    where: VendasScalarWhereInput
    data: XOR<VendasUpdateManyMutationInput, VendasUncheckedUpdateManyWithoutVendedorInput>
  }

  export type ItensVendaCreateWithoutProdutoInput = {
    quantidade: number
    precoUnitario: number
    venda: VendasCreateNestedOneWithoutItensInput
  }

  export type ItensVendaUncheckedCreateWithoutProdutoInput = {
    id?: number
    vendaId: number
    quantidade: number
    precoUnitario: number
  }

  export type ItensVendaCreateOrConnectWithoutProdutoInput = {
    where: ItensVendaWhereUniqueInput
    create: XOR<ItensVendaCreateWithoutProdutoInput, ItensVendaUncheckedCreateWithoutProdutoInput>
  }

  export type ItensVendaCreateManyProdutoInputEnvelope = {
    data: ItensVendaCreateManyProdutoInput | ItensVendaCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type ItensVendaUpsertWithWhereUniqueWithoutProdutoInput = {
    where: ItensVendaWhereUniqueInput
    update: XOR<ItensVendaUpdateWithoutProdutoInput, ItensVendaUncheckedUpdateWithoutProdutoInput>
    create: XOR<ItensVendaCreateWithoutProdutoInput, ItensVendaUncheckedCreateWithoutProdutoInput>
  }

  export type ItensVendaUpdateWithWhereUniqueWithoutProdutoInput = {
    where: ItensVendaWhereUniqueInput
    data: XOR<ItensVendaUpdateWithoutProdutoInput, ItensVendaUncheckedUpdateWithoutProdutoInput>
  }

  export type ItensVendaUpdateManyWithWhereWithoutProdutoInput = {
    where: ItensVendaScalarWhereInput
    data: XOR<ItensVendaUpdateManyMutationInput, ItensVendaUncheckedUpdateManyWithoutProdutoInput>
  }

  export type ItensVendaScalarWhereInput = {
    AND?: ItensVendaScalarWhereInput | ItensVendaScalarWhereInput[]
    OR?: ItensVendaScalarWhereInput[]
    NOT?: ItensVendaScalarWhereInput | ItensVendaScalarWhereInput[]
    id?: IntFilter<"ItensVenda"> | number
    vendaId?: IntFilter<"ItensVenda"> | number
    produtoId?: IntFilter<"ItensVenda"> | number
    quantidade?: IntFilter<"ItensVenda"> | number
    precoUnitario?: FloatFilter<"ItensVenda"> | number
  }

  export type ClientesCreateWithoutVendasInput = {
    nome: string
    telefone: string
    email?: string | null
    dataCadastro?: Date | string
    isFlamengo?: boolean
    assisteOP?: boolean
    cidadeNascimento?: string | null
    agendamentos?: AgendamentosCreateNestedManyWithoutClienteInput
  }

  export type ClientesUncheckedCreateWithoutVendasInput = {
    id?: number
    nome: string
    telefone: string
    email?: string | null
    dataCadastro?: Date | string
    isFlamengo?: boolean
    assisteOP?: boolean
    cidadeNascimento?: string | null
    agendamentos?: AgendamentosUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClientesCreateOrConnectWithoutVendasInput = {
    where: ClientesWhereUniqueInput
    create: XOR<ClientesCreateWithoutVendasInput, ClientesUncheckedCreateWithoutVendasInput>
  }

  export type VendedoresCreateWithoutVendasInput = {
    nome: string
  }

  export type VendedoresUncheckedCreateWithoutVendasInput = {
    id?: number
    nome: string
  }

  export type VendedoresCreateOrConnectWithoutVendasInput = {
    where: VendedoresWhereUniqueInput
    create: XOR<VendedoresCreateWithoutVendasInput, VendedoresUncheckedCreateWithoutVendasInput>
  }

  export type ItensVendaCreateWithoutVendaInput = {
    quantidade: number
    precoUnitario: number
    produto: ProdutosCreateNestedOneWithoutItensVendaInput
  }

  export type ItensVendaUncheckedCreateWithoutVendaInput = {
    id?: number
    produtoId: number
    quantidade: number
    precoUnitario: number
  }

  export type ItensVendaCreateOrConnectWithoutVendaInput = {
    where: ItensVendaWhereUniqueInput
    create: XOR<ItensVendaCreateWithoutVendaInput, ItensVendaUncheckedCreateWithoutVendaInput>
  }

  export type ItensVendaCreateManyVendaInputEnvelope = {
    data: ItensVendaCreateManyVendaInput | ItensVendaCreateManyVendaInput[]
    skipDuplicates?: boolean
  }

  export type ClientesUpsertWithoutVendasInput = {
    update: XOR<ClientesUpdateWithoutVendasInput, ClientesUncheckedUpdateWithoutVendasInput>
    create: XOR<ClientesCreateWithoutVendasInput, ClientesUncheckedCreateWithoutVendasInput>
    where?: ClientesWhereInput
  }

  export type ClientesUpdateToOneWithWhereWithoutVendasInput = {
    where?: ClientesWhereInput
    data: XOR<ClientesUpdateWithoutVendasInput, ClientesUncheckedUpdateWithoutVendasInput>
  }

  export type ClientesUpdateWithoutVendasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    isFlamengo?: BoolFieldUpdateOperationsInput | boolean
    assisteOP?: BoolFieldUpdateOperationsInput | boolean
    cidadeNascimento?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: AgendamentosUpdateManyWithoutClienteNestedInput
  }

  export type ClientesUncheckedUpdateWithoutVendasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    isFlamengo?: BoolFieldUpdateOperationsInput | boolean
    assisteOP?: BoolFieldUpdateOperationsInput | boolean
    cidadeNascimento?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: AgendamentosUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type VendedoresUpsertWithoutVendasInput = {
    update: XOR<VendedoresUpdateWithoutVendasInput, VendedoresUncheckedUpdateWithoutVendasInput>
    create: XOR<VendedoresCreateWithoutVendasInput, VendedoresUncheckedCreateWithoutVendasInput>
    where?: VendedoresWhereInput
  }

  export type VendedoresUpdateToOneWithWhereWithoutVendasInput = {
    where?: VendedoresWhereInput
    data: XOR<VendedoresUpdateWithoutVendasInput, VendedoresUncheckedUpdateWithoutVendasInput>
  }

  export type VendedoresUpdateWithoutVendasInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type VendedoresUncheckedUpdateWithoutVendasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ItensVendaUpsertWithWhereUniqueWithoutVendaInput = {
    where: ItensVendaWhereUniqueInput
    update: XOR<ItensVendaUpdateWithoutVendaInput, ItensVendaUncheckedUpdateWithoutVendaInput>
    create: XOR<ItensVendaCreateWithoutVendaInput, ItensVendaUncheckedCreateWithoutVendaInput>
  }

  export type ItensVendaUpdateWithWhereUniqueWithoutVendaInput = {
    where: ItensVendaWhereUniqueInput
    data: XOR<ItensVendaUpdateWithoutVendaInput, ItensVendaUncheckedUpdateWithoutVendaInput>
  }

  export type ItensVendaUpdateManyWithWhereWithoutVendaInput = {
    where: ItensVendaScalarWhereInput
    data: XOR<ItensVendaUpdateManyMutationInput, ItensVendaUncheckedUpdateManyWithoutVendaInput>
  }

  export type VendasCreateWithoutItensInput = {
    dataHora?: Date | string
    formaPagamento: string
    statusPagamento?: string
    valorTotal: number
    cliente: ClientesCreateNestedOneWithoutVendasInput
    vendedor: VendedoresCreateNestedOneWithoutVendasInput
  }

  export type VendasUncheckedCreateWithoutItensInput = {
    id?: number
    clienteId: number
    vendedorId: number
    dataHora?: Date | string
    formaPagamento: string
    statusPagamento?: string
    valorTotal: number
  }

  export type VendasCreateOrConnectWithoutItensInput = {
    where: VendasWhereUniqueInput
    create: XOR<VendasCreateWithoutItensInput, VendasUncheckedCreateWithoutItensInput>
  }

  export type ProdutosCreateWithoutItensVendaInput = {
    nome: string
    preco: number
    categoria: string
    fabricadoEmMari?: boolean
    estoque?: number
  }

  export type ProdutosUncheckedCreateWithoutItensVendaInput = {
    id?: number
    nome: string
    preco: number
    categoria: string
    fabricadoEmMari?: boolean
    estoque?: number
  }

  export type ProdutosCreateOrConnectWithoutItensVendaInput = {
    where: ProdutosWhereUniqueInput
    create: XOR<ProdutosCreateWithoutItensVendaInput, ProdutosUncheckedCreateWithoutItensVendaInput>
  }

  export type VendasUpsertWithoutItensInput = {
    update: XOR<VendasUpdateWithoutItensInput, VendasUncheckedUpdateWithoutItensInput>
    create: XOR<VendasCreateWithoutItensInput, VendasUncheckedCreateWithoutItensInput>
    where?: VendasWhereInput
  }

  export type VendasUpdateToOneWithWhereWithoutItensInput = {
    where?: VendasWhereInput
    data: XOR<VendasUpdateWithoutItensInput, VendasUncheckedUpdateWithoutItensInput>
  }

  export type VendasUpdateWithoutItensInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    formaPagamento?: StringFieldUpdateOperationsInput | string
    statusPagamento?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    cliente?: ClientesUpdateOneRequiredWithoutVendasNestedInput
    vendedor?: VendedoresUpdateOneRequiredWithoutVendasNestedInput
  }

  export type VendasUncheckedUpdateWithoutItensInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    vendedorId?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    formaPagamento?: StringFieldUpdateOperationsInput | string
    statusPagamento?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
  }

  export type ProdutosUpsertWithoutItensVendaInput = {
    update: XOR<ProdutosUpdateWithoutItensVendaInput, ProdutosUncheckedUpdateWithoutItensVendaInput>
    create: XOR<ProdutosCreateWithoutItensVendaInput, ProdutosUncheckedCreateWithoutItensVendaInput>
    where?: ProdutosWhereInput
  }

  export type ProdutosUpdateToOneWithWhereWithoutItensVendaInput = {
    where?: ProdutosWhereInput
    data: XOR<ProdutosUpdateWithoutItensVendaInput, ProdutosUncheckedUpdateWithoutItensVendaInput>
  }

  export type ProdutosUpdateWithoutItensVendaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    fabricadoEmMari?: BoolFieldUpdateOperationsInput | boolean
    estoque?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutosUncheckedUpdateWithoutItensVendaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    fabricadoEmMari?: BoolFieldUpdateOperationsInput | boolean
    estoque?: IntFieldUpdateOperationsInput | number
  }

  export type AgendamentosCreateManyClienteInput = {
    id?: number
    dataHora: Date | string
    profissionalId: number
  }

  export type VendasCreateManyClienteInput = {
    id?: number
    vendedorId: number
    dataHora?: Date | string
    formaPagamento: string
    statusPagamento?: string
    valorTotal: number
  }

  export type AgendamentosUpdateWithoutClienteInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    profissional?: ProfissionaisUpdateOneRequiredWithoutAgendamentosNestedInput
    servicos?: ServicosUpdateManyWithoutAgendamentosNestedInput
  }

  export type AgendamentosUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    profissionalId?: IntFieldUpdateOperationsInput | number
    servicos?: ServicosUncheckedUpdateManyWithoutAgendamentosNestedInput
  }

  export type AgendamentosUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    profissionalId?: IntFieldUpdateOperationsInput | number
  }

  export type VendasUpdateWithoutClienteInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    formaPagamento?: StringFieldUpdateOperationsInput | string
    statusPagamento?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    vendedor?: VendedoresUpdateOneRequiredWithoutVendasNestedInput
    itens?: ItensVendaUpdateManyWithoutVendaNestedInput
  }

  export type VendasUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendedorId?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    formaPagamento?: StringFieldUpdateOperationsInput | string
    statusPagamento?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    itens?: ItensVendaUncheckedUpdateManyWithoutVendaNestedInput
  }

  export type VendasUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendedorId?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    formaPagamento?: StringFieldUpdateOperationsInput | string
    statusPagamento?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
  }

  export type AgendamentosCreateManyProfissionalInput = {
    id?: number
    dataHora: Date | string
    clienteId: number
  }

  export type AgendamentosUpdateWithoutProfissionalInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClientesUpdateOneRequiredWithoutAgendamentosNestedInput
    servicos?: ServicosUpdateManyWithoutAgendamentosNestedInput
  }

  export type AgendamentosUncheckedUpdateWithoutProfissionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    servicos?: ServicosUncheckedUpdateManyWithoutAgendamentosNestedInput
  }

  export type AgendamentosUncheckedUpdateManyWithoutProfissionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
  }

  export type AgendamentosUpdateWithoutServicosInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClientesUpdateOneRequiredWithoutAgendamentosNestedInput
    profissional?: ProfissionaisUpdateOneRequiredWithoutAgendamentosNestedInput
  }

  export type AgendamentosUncheckedUpdateWithoutServicosInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    profissionalId?: IntFieldUpdateOperationsInput | number
  }

  export type AgendamentosUncheckedUpdateManyWithoutServicosInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    clienteId?: IntFieldUpdateOperationsInput | number
    profissionalId?: IntFieldUpdateOperationsInput | number
  }

  export type ServicosUpdateWithoutAgendamentosInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
  }

  export type ServicosUncheckedUpdateWithoutAgendamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
  }

  export type ServicosUncheckedUpdateManyWithoutAgendamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
  }

  export type VendasCreateManyVendedorInput = {
    id?: number
    clienteId: number
    dataHora?: Date | string
    formaPagamento: string
    statusPagamento?: string
    valorTotal: number
  }

  export type VendasUpdateWithoutVendedorInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    formaPagamento?: StringFieldUpdateOperationsInput | string
    statusPagamento?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    cliente?: ClientesUpdateOneRequiredWithoutVendasNestedInput
    itens?: ItensVendaUpdateManyWithoutVendaNestedInput
  }

  export type VendasUncheckedUpdateWithoutVendedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    formaPagamento?: StringFieldUpdateOperationsInput | string
    statusPagamento?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
    itens?: ItensVendaUncheckedUpdateManyWithoutVendaNestedInput
  }

  export type VendasUncheckedUpdateManyWithoutVendedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    formaPagamento?: StringFieldUpdateOperationsInput | string
    statusPagamento?: StringFieldUpdateOperationsInput | string
    valorTotal?: FloatFieldUpdateOperationsInput | number
  }

  export type ItensVendaCreateManyProdutoInput = {
    id?: number
    vendaId: number
    quantidade: number
    precoUnitario: number
  }

  export type ItensVendaUpdateWithoutProdutoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    venda?: VendasUpdateOneRequiredWithoutItensNestedInput
  }

  export type ItensVendaUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendaId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
  }

  export type ItensVendaUncheckedUpdateManyWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    vendaId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
  }

  export type ItensVendaCreateManyVendaInput = {
    id?: number
    produtoId: number
    quantidade: number
    precoUnitario: number
  }

  export type ItensVendaUpdateWithoutVendaInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
    produto?: ProdutosUpdateOneRequiredWithoutItensVendaNestedInput
  }

  export type ItensVendaUncheckedUpdateWithoutVendaInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
  }

  export type ItensVendaUncheckedUpdateManyWithoutVendaInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}