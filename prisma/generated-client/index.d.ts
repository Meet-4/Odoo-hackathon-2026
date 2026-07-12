
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Asset
 * 
 */
export type Asset = $Result.DefaultSelection<Prisma.$AssetPayload>
/**
 * Model MaintenanceTicket
 * 
 */
export type MaintenanceTicket = $Result.DefaultSelection<Prisma.$MaintenanceTicketPayload>
/**
 * Model TransferRequest
 * 
 */
export type TransferRequest = $Result.DefaultSelection<Prisma.$TransferRequestPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asset`: Exposes CRUD operations for the **Asset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.asset.findMany()
    * ```
    */
  get asset(): Prisma.AssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenanceTicket`: Exposes CRUD operations for the **MaintenanceTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaintenanceTickets
    * const maintenanceTickets = await prisma.maintenanceTicket.findMany()
    * ```
    */
  get maintenanceTicket(): Prisma.MaintenanceTicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transferRequest`: Exposes CRUD operations for the **TransferRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransferRequests
    * const transferRequests = await prisma.transferRequest.findMany()
    * ```
    */
  get transferRequest(): Prisma.TransferRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    User: 'User',
    Department: 'Department',
    Asset: 'Asset',
    MaintenanceTicket: 'MaintenanceTicket',
    TransferRequest: 'TransferRequest',
    Booking: 'Booking',
    Notification: 'Notification',
    ActivityLog: 'ActivityLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "department" | "asset" | "maintenanceTicket" | "transferRequest" | "booking" | "notification" | "activityLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Asset: {
        payload: Prisma.$AssetPayload<ExtArgs>
        fields: Prisma.AssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findFirst: {
            args: Prisma.AssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          findMany: {
            args: Prisma.AssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          create: {
            args: Prisma.AssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          createMany: {
            args: Prisma.AssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          delete: {
            args: Prisma.AssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          update: {
            args: Prisma.AssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          deleteMany: {
            args: Prisma.AssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>[]
          }
          upsert: {
            args: Prisma.AssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssetPayload>
          }
          aggregate: {
            args: Prisma.AssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsset>
          }
          groupBy: {
            args: Prisma.AssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssetCountArgs<ExtArgs>
            result: $Utils.Optional<AssetCountAggregateOutputType> | number
          }
        }
      }
      MaintenanceTicket: {
        payload: Prisma.$MaintenanceTicketPayload<ExtArgs>
        fields: Prisma.MaintenanceTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceTicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceTicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTicketPayload>
          }
          findFirst: {
            args: Prisma.MaintenanceTicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceTicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTicketPayload>
          }
          findMany: {
            args: Prisma.MaintenanceTicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTicketPayload>[]
          }
          create: {
            args: Prisma.MaintenanceTicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTicketPayload>
          }
          createMany: {
            args: Prisma.MaintenanceTicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenanceTicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTicketPayload>[]
          }
          delete: {
            args: Prisma.MaintenanceTicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTicketPayload>
          }
          update: {
            args: Prisma.MaintenanceTicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTicketPayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceTicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceTicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaintenanceTicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTicketPayload>[]
          }
          upsert: {
            args: Prisma.MaintenanceTicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceTicketPayload>
          }
          aggregate: {
            args: Prisma.MaintenanceTicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenanceTicket>
          }
          groupBy: {
            args: Prisma.MaintenanceTicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceTicketCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceTicketCountAggregateOutputType> | number
          }
        }
      }
      TransferRequest: {
        payload: Prisma.$TransferRequestPayload<ExtArgs>
        fields: Prisma.TransferRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransferRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransferRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferRequestPayload>
          }
          findFirst: {
            args: Prisma.TransferRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransferRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferRequestPayload>
          }
          findMany: {
            args: Prisma.TransferRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferRequestPayload>[]
          }
          create: {
            args: Prisma.TransferRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferRequestPayload>
          }
          createMany: {
            args: Prisma.TransferRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransferRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferRequestPayload>[]
          }
          delete: {
            args: Prisma.TransferRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferRequestPayload>
          }
          update: {
            args: Prisma.TransferRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferRequestPayload>
          }
          deleteMany: {
            args: Prisma.TransferRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransferRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransferRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferRequestPayload>[]
          }
          upsert: {
            args: Prisma.TransferRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferRequestPayload>
          }
          aggregate: {
            args: Prisma.TransferRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransferRequest>
          }
          groupBy: {
            args: Prisma.TransferRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransferRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransferRequestCountArgs<ExtArgs>
            result: $Utils.Optional<TransferRequestCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    department?: DepartmentOmit
    asset?: AssetOmit
    maintenanceTicket?: MaintenanceTicketOmit
    transferRequest?: TransferRequestOmit
    booking?: BookingOmit
    notification?: NotificationOmit
    activityLog?: ActivityLogOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    departments: number
    tickets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departments?: boolean | UserCountOutputTypeCountDepartmentsArgs
    tickets?: boolean | UserCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceTicketWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    assets: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assets?: boolean | DepartmentCountOutputTypeCountAssetsArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
  }


  /**
   * Count Type AssetCountOutputType
   */

  export type AssetCountOutputType = {
    tickets: number
  }

  export type AssetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | AssetCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssetCountOutputType
     */
    select?: AssetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssetCountOutputType without action
   */
  export type AssetCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceTicketWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    dept: string | null
    role: string | null
    jobTitle: string | null
    avatar: string | null
    status: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    dept: string | null
    role: string | null
    jobTitle: string | null
    avatar: string | null
    status: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    dept: number
    role: number
    jobTitle: number
    avatar: number
    status: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    dept?: true
    role?: true
    jobTitle?: true
    avatar?: true
    status?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    dept?: true
    role?: true
    jobTitle?: true
    avatar?: true
    status?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    dept?: true
    role?: true
    jobTitle?: true
    avatar?: true
    status?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string | null
    dept: string | null
    role: string
    jobTitle: string | null
    avatar: string | null
    status: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    dept?: boolean
    role?: boolean
    jobTitle?: boolean
    avatar?: boolean
    status?: boolean
    departments?: boolean | User$departmentsArgs<ExtArgs>
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    dept?: boolean
    role?: boolean
    jobTitle?: boolean
    avatar?: boolean
    status?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    dept?: boolean
    role?: boolean
    jobTitle?: boolean
    avatar?: boolean
    status?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    dept?: boolean
    role?: boolean
    jobTitle?: boolean
    avatar?: boolean
    status?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "dept" | "role" | "jobTitle" | "avatar" | "status", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departments?: boolean | User$departmentsArgs<ExtArgs>
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      departments: Prisma.$DepartmentPayload<ExtArgs>[]
      tickets: Prisma.$MaintenanceTicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string | null
      dept: string | null
      role: string
      jobTitle: string | null
      avatar: string | null
      status: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departments<T extends User$departmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$departmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends User$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, User$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly dept: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly jobTitle: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.departments
   */
  export type User$departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    cursor?: DepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * User.tickets
   */
  export type User$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTicket
     */
    omit?: MaintenanceTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketInclude<ExtArgs> | null
    where?: MaintenanceTicketWhereInput
    orderBy?: MaintenanceTicketOrderByWithRelationInput | MaintenanceTicketOrderByWithRelationInput[]
    cursor?: MaintenanceTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceTicketScalarFieldEnum | MaintenanceTicketScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    head: string | null
    headAvatar: string | null
    parentDept: string | null
    status: string | null
    headOfDeptId: string | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    head: string | null
    headAvatar: string | null
    parentDept: string | null
    status: string | null
    headOfDeptId: string | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    head: number
    headAvatar: number
    parentDept: number
    status: number
    headOfDeptId: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
    head?: true
    headAvatar?: true
    parentDept?: true
    status?: true
    headOfDeptId?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
    head?: true
    headAvatar?: true
    parentDept?: true
    status?: true
    headOfDeptId?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    head?: true
    headAvatar?: true
    parentDept?: true
    status?: true
    headOfDeptId?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    name: string
    head: string | null
    headAvatar: string | null
    parentDept: string | null
    status: string
    headOfDeptId: string | null
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    head?: boolean
    headAvatar?: boolean
    parentDept?: boolean
    status?: boolean
    headOfDeptId?: boolean
    headOfDept?: boolean | Department$headOfDeptArgs<ExtArgs>
    assets?: boolean | Department$assetsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    head?: boolean
    headAvatar?: boolean
    parentDept?: boolean
    status?: boolean
    headOfDeptId?: boolean
    headOfDept?: boolean | Department$headOfDeptArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    head?: boolean
    headAvatar?: boolean
    parentDept?: boolean
    status?: boolean
    headOfDeptId?: boolean
    headOfDept?: boolean | Department$headOfDeptArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
    head?: boolean
    headAvatar?: boolean
    parentDept?: boolean
    status?: boolean
    headOfDeptId?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "head" | "headAvatar" | "parentDept" | "status" | "headOfDeptId", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    headOfDept?: boolean | Department$headOfDeptArgs<ExtArgs>
    assets?: boolean | Department$assetsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    headOfDept?: boolean | Department$headOfDeptArgs<ExtArgs>
  }
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    headOfDept?: boolean | Department$headOfDeptArgs<ExtArgs>
  }

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      headOfDept: Prisma.$UserPayload<ExtArgs> | null
      assets: Prisma.$AssetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      head: string | null
      headAvatar: string | null
      parentDept: string | null
      status: string
      headOfDeptId: string | null
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
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
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    headOfDept<T extends Department$headOfDeptArgs<ExtArgs> = {}>(args?: Subset<T, Department$headOfDeptArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assets<T extends Department$assetsArgs<ExtArgs> = {}>(args?: Subset<T, Department$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
    readonly head: FieldRef<"Department", 'String'>
    readonly headAvatar: FieldRef<"Department", 'String'>
    readonly parentDept: FieldRef<"Department", 'String'>
    readonly status: FieldRef<"Department", 'String'>
    readonly headOfDeptId: FieldRef<"Department", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.headOfDept
   */
  export type Department$headOfDeptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Department.assets
   */
  export type Department$assetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    cursor?: AssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Asset
   */

  export type AggregateAsset = {
    _count: AssetCountAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  export type AssetMinAggregateOutputType = {
    tag: string | null
    name: string | null
    category: string | null
    status: string | null
    location: string | null
    serial: string | null
    image: string | null
    assignee: string | null
    allocatedTo: string | null
    allocatedToDept: string | null
    dueDate: string | null
    expectedLocation: string | null
    allocationHistory: string | null
    maintenanceHistory: string | null
    lastVerified: string | null
    verificationStatus: string | null
    departmentId: string | null
  }

  export type AssetMaxAggregateOutputType = {
    tag: string | null
    name: string | null
    category: string | null
    status: string | null
    location: string | null
    serial: string | null
    image: string | null
    assignee: string | null
    allocatedTo: string | null
    allocatedToDept: string | null
    dueDate: string | null
    expectedLocation: string | null
    allocationHistory: string | null
    maintenanceHistory: string | null
    lastVerified: string | null
    verificationStatus: string | null
    departmentId: string | null
  }

  export type AssetCountAggregateOutputType = {
    tag: number
    name: number
    category: number
    status: number
    location: number
    serial: number
    image: number
    assignee: number
    allocatedTo: number
    allocatedToDept: number
    dueDate: number
    expectedLocation: number
    allocationHistory: number
    maintenanceHistory: number
    lastVerified: number
    verificationStatus: number
    departmentId: number
    _all: number
  }


  export type AssetMinAggregateInputType = {
    tag?: true
    name?: true
    category?: true
    status?: true
    location?: true
    serial?: true
    image?: true
    assignee?: true
    allocatedTo?: true
    allocatedToDept?: true
    dueDate?: true
    expectedLocation?: true
    allocationHistory?: true
    maintenanceHistory?: true
    lastVerified?: true
    verificationStatus?: true
    departmentId?: true
  }

  export type AssetMaxAggregateInputType = {
    tag?: true
    name?: true
    category?: true
    status?: true
    location?: true
    serial?: true
    image?: true
    assignee?: true
    allocatedTo?: true
    allocatedToDept?: true
    dueDate?: true
    expectedLocation?: true
    allocationHistory?: true
    maintenanceHistory?: true
    lastVerified?: true
    verificationStatus?: true
    departmentId?: true
  }

  export type AssetCountAggregateInputType = {
    tag?: true
    name?: true
    category?: true
    status?: true
    location?: true
    serial?: true
    image?: true
    assignee?: true
    allocatedTo?: true
    allocatedToDept?: true
    dueDate?: true
    expectedLocation?: true
    allocationHistory?: true
    maintenanceHistory?: true
    lastVerified?: true
    verificationStatus?: true
    departmentId?: true
    _all?: true
  }

  export type AssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asset to aggregate.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assets
    **/
    _count?: true | AssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetMaxAggregateInputType
  }

  export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
        [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsset[P]>
      : GetScalarType<T[P], AggregateAsset[P]>
  }




  export type AssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssetWhereInput
    orderBy?: AssetOrderByWithAggregationInput | AssetOrderByWithAggregationInput[]
    by: AssetScalarFieldEnum[] | AssetScalarFieldEnum
    having?: AssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetCountAggregateInputType | true
    _min?: AssetMinAggregateInputType
    _max?: AssetMaxAggregateInputType
  }

  export type AssetGroupByOutputType = {
    tag: string
    name: string
    category: string | null
    status: string
    location: string | null
    serial: string | null
    image: string | null
    assignee: string | null
    allocatedTo: string | null
    allocatedToDept: string | null
    dueDate: string | null
    expectedLocation: string | null
    allocationHistory: string
    maintenanceHistory: string
    lastVerified: string | null
    verificationStatus: string | null
    departmentId: string | null
    _count: AssetCountAggregateOutputType | null
    _min: AssetMinAggregateOutputType | null
    _max: AssetMaxAggregateOutputType | null
  }

  type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetGroupByOutputType[P]>
            : GetScalarType<T[P], AssetGroupByOutputType[P]>
        }
      >
    >


  export type AssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag?: boolean
    name?: boolean
    category?: boolean
    status?: boolean
    location?: boolean
    serial?: boolean
    image?: boolean
    assignee?: boolean
    allocatedTo?: boolean
    allocatedToDept?: boolean
    dueDate?: boolean
    expectedLocation?: boolean
    allocationHistory?: boolean
    maintenanceHistory?: boolean
    lastVerified?: boolean
    verificationStatus?: boolean
    departmentId?: boolean
    department?: boolean | Asset$departmentArgs<ExtArgs>
    tickets?: boolean | Asset$ticketsArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag?: boolean
    name?: boolean
    category?: boolean
    status?: boolean
    location?: boolean
    serial?: boolean
    image?: boolean
    assignee?: boolean
    allocatedTo?: boolean
    allocatedToDept?: boolean
    dueDate?: boolean
    expectedLocation?: boolean
    allocationHistory?: boolean
    maintenanceHistory?: boolean
    lastVerified?: boolean
    verificationStatus?: boolean
    departmentId?: boolean
    department?: boolean | Asset$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag?: boolean
    name?: boolean
    category?: boolean
    status?: boolean
    location?: boolean
    serial?: boolean
    image?: boolean
    assignee?: boolean
    allocatedTo?: boolean
    allocatedToDept?: boolean
    dueDate?: boolean
    expectedLocation?: boolean
    allocationHistory?: boolean
    maintenanceHistory?: boolean
    lastVerified?: boolean
    verificationStatus?: boolean
    departmentId?: boolean
    department?: boolean | Asset$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["asset"]>

  export type AssetSelectScalar = {
    tag?: boolean
    name?: boolean
    category?: boolean
    status?: boolean
    location?: boolean
    serial?: boolean
    image?: boolean
    assignee?: boolean
    allocatedTo?: boolean
    allocatedToDept?: boolean
    dueDate?: boolean
    expectedLocation?: boolean
    allocationHistory?: boolean
    maintenanceHistory?: boolean
    lastVerified?: boolean
    verificationStatus?: boolean
    departmentId?: boolean
  }

  export type AssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tag" | "name" | "category" | "status" | "location" | "serial" | "image" | "assignee" | "allocatedTo" | "allocatedToDept" | "dueDate" | "expectedLocation" | "allocationHistory" | "maintenanceHistory" | "lastVerified" | "verificationStatus" | "departmentId", ExtArgs["result"]["asset"]>
  export type AssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | Asset$departmentArgs<ExtArgs>
    tickets?: boolean | Asset$ticketsArgs<ExtArgs>
    _count?: boolean | AssetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | Asset$departmentArgs<ExtArgs>
  }
  export type AssetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | Asset$departmentArgs<ExtArgs>
  }

  export type $AssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asset"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs> | null
      tickets: Prisma.$MaintenanceTicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tag: string
      name: string
      category: string | null
      status: string
      location: string | null
      serial: string | null
      image: string | null
      assignee: string | null
      allocatedTo: string | null
      allocatedToDept: string | null
      dueDate: string | null
      expectedLocation: string | null
      allocationHistory: string
      maintenanceHistory: string
      lastVerified: string | null
      verificationStatus: string | null
      departmentId: string | null
    }, ExtArgs["result"]["asset"]>
    composites: {}
  }

  type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = $Result.GetResult<Prisma.$AssetPayload, S>

  type AssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetCountAggregateInputType | true
    }

  export interface AssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asset'], meta: { name: 'Asset' } }
    /**
     * Find zero or one Asset that matches the filter.
     * @param {AssetFindUniqueArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssetFindUniqueArgs>(args: SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssetFindUniqueOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(args: SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssetFindFirstArgs>(args?: SelectSubset<T, AssetFindFirstArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindFirstOrThrowArgs} args - Arguments to find a Asset
     * @example
     * // Get one Asset
     * const asset = await prisma.asset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(args?: SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.asset.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.asset.findMany({ take: 10 })
     * 
     * // Only select the `tag`
     * const assetWithTagOnly = await prisma.asset.findMany({ select: { tag: true } })
     * 
     */
    findMany<T extends AssetFindManyArgs>(args?: SelectSubset<T, AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asset.
     * @param {AssetCreateArgs} args - Arguments to create a Asset.
     * @example
     * // Create one Asset
     * const Asset = await prisma.asset.create({
     *   data: {
     *     // ... data to create a Asset
     *   }
     * })
     * 
     */
    create<T extends AssetCreateArgs>(args: SelectSubset<T, AssetCreateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assets.
     * @param {AssetCreateManyArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssetCreateManyArgs>(args?: SelectSubset<T, AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assets and returns the data saved in the database.
     * @param {AssetCreateManyAndReturnArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const asset = await prisma.asset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assets and only return the `tag`
     * const assetWithTagOnly = await prisma.asset.createManyAndReturn({
     *   select: { tag: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssetCreateManyAndReturnArgs>(args?: SelectSubset<T, AssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Asset.
     * @param {AssetDeleteArgs} args - Arguments to delete one Asset.
     * @example
     * // Delete one Asset
     * const Asset = await prisma.asset.delete({
     *   where: {
     *     // ... filter to delete one Asset
     *   }
     * })
     * 
     */
    delete<T extends AssetDeleteArgs>(args: SelectSubset<T, AssetDeleteArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asset.
     * @param {AssetUpdateArgs} args - Arguments to update one Asset.
     * @example
     * // Update one Asset
     * const asset = await prisma.asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssetUpdateArgs>(args: SelectSubset<T, AssetUpdateArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assets.
     * @param {AssetDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssetDeleteManyArgs>(args?: SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssetUpdateManyArgs>(args: SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets and returns the data updated in the database.
     * @param {AssetUpdateManyAndReturnArgs} args - Arguments to update many Assets.
     * @example
     * // Update many Assets
     * const asset = await prisma.asset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assets and only return the `tag`
     * const assetWithTagOnly = await prisma.asset.updateManyAndReturn({
     *   select: { tag: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssetUpdateManyAndReturnArgs>(args: SelectSubset<T, AssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Asset.
     * @param {AssetUpsertArgs} args - Arguments to update or create a Asset.
     * @example
     * // Update or create a Asset
     * const asset = await prisma.asset.upsert({
     *   create: {
     *     // ... data to create a Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asset we want to update
     *   }
     * })
     */
    upsert<T extends AssetUpsertArgs>(args: SelectSubset<T, AssetUpsertArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.asset.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends AssetCountArgs>(
      args?: Subset<T, AssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssetAggregateArgs>(args: Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>

    /**
     * Group by Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetGroupByArgs} args - Group by arguments.
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
      T extends AssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssetGroupByArgs['orderBy'] }
        : { orderBy?: AssetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asset model
   */
  readonly fields: AssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends Asset$departmentArgs<ExtArgs> = {}>(args?: Subset<T, Asset$departmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tickets<T extends Asset$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Asset$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Asset model
   */
  interface AssetFieldRefs {
    readonly tag: FieldRef<"Asset", 'String'>
    readonly name: FieldRef<"Asset", 'String'>
    readonly category: FieldRef<"Asset", 'String'>
    readonly status: FieldRef<"Asset", 'String'>
    readonly location: FieldRef<"Asset", 'String'>
    readonly serial: FieldRef<"Asset", 'String'>
    readonly image: FieldRef<"Asset", 'String'>
    readonly assignee: FieldRef<"Asset", 'String'>
    readonly allocatedTo: FieldRef<"Asset", 'String'>
    readonly allocatedToDept: FieldRef<"Asset", 'String'>
    readonly dueDate: FieldRef<"Asset", 'String'>
    readonly expectedLocation: FieldRef<"Asset", 'String'>
    readonly allocationHistory: FieldRef<"Asset", 'String'>
    readonly maintenanceHistory: FieldRef<"Asset", 'String'>
    readonly lastVerified: FieldRef<"Asset", 'String'>
    readonly verificationStatus: FieldRef<"Asset", 'String'>
    readonly departmentId: FieldRef<"Asset", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Asset findUnique
   */
  export type AssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findUniqueOrThrow
   */
  export type AssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset findFirst
   */
  export type AssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findFirstOrThrow
   */
  export type AssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Asset to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset findMany
   */
  export type AssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter, which Assets to fetch.
     */
    where?: AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assets to fetch.
     */
    orderBy?: AssetOrderByWithRelationInput | AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assets.
     */
    cursor?: AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assets.
     */
    distinct?: AssetScalarFieldEnum | AssetScalarFieldEnum[]
  }

  /**
   * Asset create
   */
  export type AssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to create a Asset.
     */
    data: XOR<AssetCreateInput, AssetUncheckedCreateInput>
  }

  /**
   * Asset createMany
   */
  export type AssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
  }

  /**
   * Asset createManyAndReturn
   */
  export type AssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data used to create many Assets.
     */
    data: AssetCreateManyInput | AssetCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asset update
   */
  export type AssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The data needed to update a Asset.
     */
    data: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
    /**
     * Choose, which Asset to update.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset updateMany
   */
  export type AssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
  }

  /**
   * Asset updateManyAndReturn
   */
  export type AssetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * The data used to update Assets.
     */
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyInput>
    /**
     * Filter which Assets to update
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Asset upsert
   */
  export type AssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * The filter to search for the Asset to update in case it exists.
     */
    where: AssetWhereUniqueInput
    /**
     * In case the Asset found by the `where` argument doesn't exist, create a new Asset with this data.
     */
    create: XOR<AssetCreateInput, AssetUncheckedCreateInput>
    /**
     * In case the Asset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssetUpdateInput, AssetUncheckedUpdateInput>
  }

  /**
   * Asset delete
   */
  export type AssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    /**
     * Filter which Asset to delete.
     */
    where: AssetWhereUniqueInput
  }

  /**
   * Asset deleteMany
   */
  export type AssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assets to delete
     */
    where?: AssetWhereInput
    /**
     * Limit how many Assets to delete.
     */
    limit?: number
  }

  /**
   * Asset.department
   */
  export type Asset$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * Asset.tickets
   */
  export type Asset$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTicket
     */
    omit?: MaintenanceTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketInclude<ExtArgs> | null
    where?: MaintenanceTicketWhereInput
    orderBy?: MaintenanceTicketOrderByWithRelationInput | MaintenanceTicketOrderByWithRelationInput[]
    cursor?: MaintenanceTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceTicketScalarFieldEnum | MaintenanceTicketScalarFieldEnum[]
  }

  /**
   * Asset without action
   */
  export type AssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
  }


  /**
   * Model MaintenanceTicket
   */

  export type AggregateMaintenanceTicket = {
    _count: MaintenanceTicketCountAggregateOutputType | null
    _min: MaintenanceTicketMinAggregateOutputType | null
    _max: MaintenanceTicketMaxAggregateOutputType | null
  }

  export type MaintenanceTicketMinAggregateOutputType = {
    id: string | null
    assetTag: string | null
    title: string | null
    description: string | null
    priority: string | null
    column: string | null
    assignee: string | null
    assigneeAvatar: string | null
    reportedTime: string | null
    raisedBy: string | null
    raisedByDept: string | null
    rejectedReason: string | null
    isRejected: boolean | null
    technicianId: string | null
    createdAt: Date | null
  }

  export type MaintenanceTicketMaxAggregateOutputType = {
    id: string | null
    assetTag: string | null
    title: string | null
    description: string | null
    priority: string | null
    column: string | null
    assignee: string | null
    assigneeAvatar: string | null
    reportedTime: string | null
    raisedBy: string | null
    raisedByDept: string | null
    rejectedReason: string | null
    isRejected: boolean | null
    technicianId: string | null
    createdAt: Date | null
  }

  export type MaintenanceTicketCountAggregateOutputType = {
    id: number
    assetTag: number
    title: number
    description: number
    priority: number
    column: number
    assignee: number
    assigneeAvatar: number
    reportedTime: number
    raisedBy: number
    raisedByDept: number
    rejectedReason: number
    isRejected: number
    technicianId: number
    createdAt: number
    _all: number
  }


  export type MaintenanceTicketMinAggregateInputType = {
    id?: true
    assetTag?: true
    title?: true
    description?: true
    priority?: true
    column?: true
    assignee?: true
    assigneeAvatar?: true
    reportedTime?: true
    raisedBy?: true
    raisedByDept?: true
    rejectedReason?: true
    isRejected?: true
    technicianId?: true
    createdAt?: true
  }

  export type MaintenanceTicketMaxAggregateInputType = {
    id?: true
    assetTag?: true
    title?: true
    description?: true
    priority?: true
    column?: true
    assignee?: true
    assigneeAvatar?: true
    reportedTime?: true
    raisedBy?: true
    raisedByDept?: true
    rejectedReason?: true
    isRejected?: true
    technicianId?: true
    createdAt?: true
  }

  export type MaintenanceTicketCountAggregateInputType = {
    id?: true
    assetTag?: true
    title?: true
    description?: true
    priority?: true
    column?: true
    assignee?: true
    assigneeAvatar?: true
    reportedTime?: true
    raisedBy?: true
    raisedByDept?: true
    rejectedReason?: true
    isRejected?: true
    technicianId?: true
    createdAt?: true
    _all?: true
  }

  export type MaintenanceTicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceTicket to aggregate.
     */
    where?: MaintenanceTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceTickets to fetch.
     */
    orderBy?: MaintenanceTicketOrderByWithRelationInput | MaintenanceTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaintenanceTickets
    **/
    _count?: true | MaintenanceTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceTicketMaxAggregateInputType
  }

  export type GetMaintenanceTicketAggregateType<T extends MaintenanceTicketAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenanceTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenanceTicket[P]>
      : GetScalarType<T[P], AggregateMaintenanceTicket[P]>
  }




  export type MaintenanceTicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceTicketWhereInput
    orderBy?: MaintenanceTicketOrderByWithAggregationInput | MaintenanceTicketOrderByWithAggregationInput[]
    by: MaintenanceTicketScalarFieldEnum[] | MaintenanceTicketScalarFieldEnum
    having?: MaintenanceTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceTicketCountAggregateInputType | true
    _min?: MaintenanceTicketMinAggregateInputType
    _max?: MaintenanceTicketMaxAggregateInputType
  }

  export type MaintenanceTicketGroupByOutputType = {
    id: string
    assetTag: string
    title: string | null
    description: string
    priority: string
    column: string
    assignee: string | null
    assigneeAvatar: string | null
    reportedTime: string | null
    raisedBy: string | null
    raisedByDept: string | null
    rejectedReason: string | null
    isRejected: boolean
    technicianId: string | null
    createdAt: Date
    _count: MaintenanceTicketCountAggregateOutputType | null
    _min: MaintenanceTicketMinAggregateOutputType | null
    _max: MaintenanceTicketMaxAggregateOutputType | null
  }

  type GetMaintenanceTicketGroupByPayload<T extends MaintenanceTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceTicketGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceTicketGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceTicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetTag?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    column?: boolean
    assignee?: boolean
    assigneeAvatar?: boolean
    reportedTime?: boolean
    raisedBy?: boolean
    raisedByDept?: boolean
    rejectedReason?: boolean
    isRejected?: boolean
    technicianId?: boolean
    createdAt?: boolean
    asset?: boolean | MaintenanceTicket$assetArgs<ExtArgs>
    technician?: boolean | MaintenanceTicket$technicianArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceTicket"]>

  export type MaintenanceTicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetTag?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    column?: boolean
    assignee?: boolean
    assigneeAvatar?: boolean
    reportedTime?: boolean
    raisedBy?: boolean
    raisedByDept?: boolean
    rejectedReason?: boolean
    isRejected?: boolean
    technicianId?: boolean
    createdAt?: boolean
    asset?: boolean | MaintenanceTicket$assetArgs<ExtArgs>
    technician?: boolean | MaintenanceTicket$technicianArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceTicket"]>

  export type MaintenanceTicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetTag?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    column?: boolean
    assignee?: boolean
    assigneeAvatar?: boolean
    reportedTime?: boolean
    raisedBy?: boolean
    raisedByDept?: boolean
    rejectedReason?: boolean
    isRejected?: boolean
    technicianId?: boolean
    createdAt?: boolean
    asset?: boolean | MaintenanceTicket$assetArgs<ExtArgs>
    technician?: boolean | MaintenanceTicket$technicianArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceTicket"]>

  export type MaintenanceTicketSelectScalar = {
    id?: boolean
    assetTag?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    column?: boolean
    assignee?: boolean
    assigneeAvatar?: boolean
    reportedTime?: boolean
    raisedBy?: boolean
    raisedByDept?: boolean
    rejectedReason?: boolean
    isRejected?: boolean
    technicianId?: boolean
    createdAt?: boolean
  }

  export type MaintenanceTicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assetTag" | "title" | "description" | "priority" | "column" | "assignee" | "assigneeAvatar" | "reportedTime" | "raisedBy" | "raisedByDept" | "rejectedReason" | "isRejected" | "technicianId" | "createdAt", ExtArgs["result"]["maintenanceTicket"]>
  export type MaintenanceTicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | MaintenanceTicket$assetArgs<ExtArgs>
    technician?: boolean | MaintenanceTicket$technicianArgs<ExtArgs>
  }
  export type MaintenanceTicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | MaintenanceTicket$assetArgs<ExtArgs>
    technician?: boolean | MaintenanceTicket$technicianArgs<ExtArgs>
  }
  export type MaintenanceTicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asset?: boolean | MaintenanceTicket$assetArgs<ExtArgs>
    technician?: boolean | MaintenanceTicket$technicianArgs<ExtArgs>
  }

  export type $MaintenanceTicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaintenanceTicket"
    objects: {
      asset: Prisma.$AssetPayload<ExtArgs> | null
      technician: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assetTag: string
      title: string | null
      description: string
      priority: string
      column: string
      assignee: string | null
      assigneeAvatar: string | null
      reportedTime: string | null
      raisedBy: string | null
      raisedByDept: string | null
      rejectedReason: string | null
      isRejected: boolean
      technicianId: string | null
      createdAt: Date
    }, ExtArgs["result"]["maintenanceTicket"]>
    composites: {}
  }

  type MaintenanceTicketGetPayload<S extends boolean | null | undefined | MaintenanceTicketDefaultArgs> = $Result.GetResult<Prisma.$MaintenanceTicketPayload, S>

  type MaintenanceTicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaintenanceTicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenanceTicketCountAggregateInputType | true
    }

  export interface MaintenanceTicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaintenanceTicket'], meta: { name: 'MaintenanceTicket' } }
    /**
     * Find zero or one MaintenanceTicket that matches the filter.
     * @param {MaintenanceTicketFindUniqueArgs} args - Arguments to find a MaintenanceTicket
     * @example
     * // Get one MaintenanceTicket
     * const maintenanceTicket = await prisma.maintenanceTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceTicketFindUniqueArgs>(args: SelectSubset<T, MaintenanceTicketFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceTicketClient<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaintenanceTicket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenanceTicketFindUniqueOrThrowArgs} args - Arguments to find a MaintenanceTicket
     * @example
     * // Get one MaintenanceTicket
     * const maintenanceTicket = await prisma.maintenanceTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceTicketFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceTicketClient<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTicketFindFirstArgs} args - Arguments to find a MaintenanceTicket
     * @example
     * // Get one MaintenanceTicket
     * const maintenanceTicket = await prisma.maintenanceTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceTicketFindFirstArgs>(args?: SelectSubset<T, MaintenanceTicketFindFirstArgs<ExtArgs>>): Prisma__MaintenanceTicketClient<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTicketFindFirstOrThrowArgs} args - Arguments to find a MaintenanceTicket
     * @example
     * // Get one MaintenanceTicket
     * const maintenanceTicket = await prisma.maintenanceTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceTicketFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceTicketClient<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaintenanceTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaintenanceTickets
     * const maintenanceTickets = await prisma.maintenanceTicket.findMany()
     * 
     * // Get first 10 MaintenanceTickets
     * const maintenanceTickets = await prisma.maintenanceTicket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceTicketWithIdOnly = await prisma.maintenanceTicket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceTicketFindManyArgs>(args?: SelectSubset<T, MaintenanceTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaintenanceTicket.
     * @param {MaintenanceTicketCreateArgs} args - Arguments to create a MaintenanceTicket.
     * @example
     * // Create one MaintenanceTicket
     * const MaintenanceTicket = await prisma.maintenanceTicket.create({
     *   data: {
     *     // ... data to create a MaintenanceTicket
     *   }
     * })
     * 
     */
    create<T extends MaintenanceTicketCreateArgs>(args: SelectSubset<T, MaintenanceTicketCreateArgs<ExtArgs>>): Prisma__MaintenanceTicketClient<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaintenanceTickets.
     * @param {MaintenanceTicketCreateManyArgs} args - Arguments to create many MaintenanceTickets.
     * @example
     * // Create many MaintenanceTickets
     * const maintenanceTicket = await prisma.maintenanceTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceTicketCreateManyArgs>(args?: SelectSubset<T, MaintenanceTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaintenanceTickets and returns the data saved in the database.
     * @param {MaintenanceTicketCreateManyAndReturnArgs} args - Arguments to create many MaintenanceTickets.
     * @example
     * // Create many MaintenanceTickets
     * const maintenanceTicket = await prisma.maintenanceTicket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaintenanceTickets and only return the `id`
     * const maintenanceTicketWithIdOnly = await prisma.maintenanceTicket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaintenanceTicketCreateManyAndReturnArgs>(args?: SelectSubset<T, MaintenanceTicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MaintenanceTicket.
     * @param {MaintenanceTicketDeleteArgs} args - Arguments to delete one MaintenanceTicket.
     * @example
     * // Delete one MaintenanceTicket
     * const MaintenanceTicket = await prisma.maintenanceTicket.delete({
     *   where: {
     *     // ... filter to delete one MaintenanceTicket
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceTicketDeleteArgs>(args: SelectSubset<T, MaintenanceTicketDeleteArgs<ExtArgs>>): Prisma__MaintenanceTicketClient<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaintenanceTicket.
     * @param {MaintenanceTicketUpdateArgs} args - Arguments to update one MaintenanceTicket.
     * @example
     * // Update one MaintenanceTicket
     * const maintenanceTicket = await prisma.maintenanceTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceTicketUpdateArgs>(args: SelectSubset<T, MaintenanceTicketUpdateArgs<ExtArgs>>): Prisma__MaintenanceTicketClient<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaintenanceTickets.
     * @param {MaintenanceTicketDeleteManyArgs} args - Arguments to filter MaintenanceTickets to delete.
     * @example
     * // Delete a few MaintenanceTickets
     * const { count } = await prisma.maintenanceTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceTicketDeleteManyArgs>(args?: SelectSubset<T, MaintenanceTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaintenanceTickets
     * const maintenanceTicket = await prisma.maintenanceTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceTicketUpdateManyArgs>(args: SelectSubset<T, MaintenanceTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceTickets and returns the data updated in the database.
     * @param {MaintenanceTicketUpdateManyAndReturnArgs} args - Arguments to update many MaintenanceTickets.
     * @example
     * // Update many MaintenanceTickets
     * const maintenanceTicket = await prisma.maintenanceTicket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MaintenanceTickets and only return the `id`
     * const maintenanceTicketWithIdOnly = await prisma.maintenanceTicket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MaintenanceTicketUpdateManyAndReturnArgs>(args: SelectSubset<T, MaintenanceTicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MaintenanceTicket.
     * @param {MaintenanceTicketUpsertArgs} args - Arguments to update or create a MaintenanceTicket.
     * @example
     * // Update or create a MaintenanceTicket
     * const maintenanceTicket = await prisma.maintenanceTicket.upsert({
     *   create: {
     *     // ... data to create a MaintenanceTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaintenanceTicket we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceTicketUpsertArgs>(args: SelectSubset<T, MaintenanceTicketUpsertArgs<ExtArgs>>): Prisma__MaintenanceTicketClient<$Result.GetResult<Prisma.$MaintenanceTicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaintenanceTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTicketCountArgs} args - Arguments to filter MaintenanceTickets to count.
     * @example
     * // Count the number of MaintenanceTickets
     * const count = await prisma.maintenanceTicket.count({
     *   where: {
     *     // ... the filter for the MaintenanceTickets we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceTicketCountArgs>(
      args?: Subset<T, MaintenanceTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaintenanceTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaintenanceTicketAggregateArgs>(args: Subset<T, MaintenanceTicketAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceTicketAggregateType<T>>

    /**
     * Group by MaintenanceTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceTicketGroupByArgs} args - Group by arguments.
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
      T extends MaintenanceTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceTicketGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceTicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaintenanceTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaintenanceTicket model
   */
  readonly fields: MaintenanceTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaintenanceTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceTicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asset<T extends MaintenanceTicket$assetArgs<ExtArgs> = {}>(args?: Subset<T, MaintenanceTicket$assetArgs<ExtArgs>>): Prisma__AssetClient<$Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    technician<T extends MaintenanceTicket$technicianArgs<ExtArgs> = {}>(args?: Subset<T, MaintenanceTicket$technicianArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MaintenanceTicket model
   */
  interface MaintenanceTicketFieldRefs {
    readonly id: FieldRef<"MaintenanceTicket", 'String'>
    readonly assetTag: FieldRef<"MaintenanceTicket", 'String'>
    readonly title: FieldRef<"MaintenanceTicket", 'String'>
    readonly description: FieldRef<"MaintenanceTicket", 'String'>
    readonly priority: FieldRef<"MaintenanceTicket", 'String'>
    readonly column: FieldRef<"MaintenanceTicket", 'String'>
    readonly assignee: FieldRef<"MaintenanceTicket", 'String'>
    readonly assigneeAvatar: FieldRef<"MaintenanceTicket", 'String'>
    readonly reportedTime: FieldRef<"MaintenanceTicket", 'String'>
    readonly raisedBy: FieldRef<"MaintenanceTicket", 'String'>
    readonly raisedByDept: FieldRef<"MaintenanceTicket", 'String'>
    readonly rejectedReason: FieldRef<"MaintenanceTicket", 'String'>
    readonly isRejected: FieldRef<"MaintenanceTicket", 'Boolean'>
    readonly technicianId: FieldRef<"MaintenanceTicket", 'String'>
    readonly createdAt: FieldRef<"MaintenanceTicket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaintenanceTicket findUnique
   */
  export type MaintenanceTicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTicket
     */
    omit?: MaintenanceTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceTicket to fetch.
     */
    where: MaintenanceTicketWhereUniqueInput
  }

  /**
   * MaintenanceTicket findUniqueOrThrow
   */
  export type MaintenanceTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTicket
     */
    omit?: MaintenanceTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceTicket to fetch.
     */
    where: MaintenanceTicketWhereUniqueInput
  }

  /**
   * MaintenanceTicket findFirst
   */
  export type MaintenanceTicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTicket
     */
    omit?: MaintenanceTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceTicket to fetch.
     */
    where?: MaintenanceTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceTickets to fetch.
     */
    orderBy?: MaintenanceTicketOrderByWithRelationInput | MaintenanceTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceTickets.
     */
    cursor?: MaintenanceTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceTickets.
     */
    distinct?: MaintenanceTicketScalarFieldEnum | MaintenanceTicketScalarFieldEnum[]
  }

  /**
   * MaintenanceTicket findFirstOrThrow
   */
  export type MaintenanceTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTicket
     */
    omit?: MaintenanceTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceTicket to fetch.
     */
    where?: MaintenanceTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceTickets to fetch.
     */
    orderBy?: MaintenanceTicketOrderByWithRelationInput | MaintenanceTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceTickets.
     */
    cursor?: MaintenanceTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceTickets.
     */
    distinct?: MaintenanceTicketScalarFieldEnum | MaintenanceTicketScalarFieldEnum[]
  }

  /**
   * MaintenanceTicket findMany
   */
  export type MaintenanceTicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTicket
     */
    omit?: MaintenanceTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceTickets to fetch.
     */
    where?: MaintenanceTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceTickets to fetch.
     */
    orderBy?: MaintenanceTicketOrderByWithRelationInput | MaintenanceTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaintenanceTickets.
     */
    cursor?: MaintenanceTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceTickets.
     */
    distinct?: MaintenanceTicketScalarFieldEnum | MaintenanceTicketScalarFieldEnum[]
  }

  /**
   * MaintenanceTicket create
   */
  export type MaintenanceTicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTicket
     */
    omit?: MaintenanceTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketInclude<ExtArgs> | null
    /**
     * The data needed to create a MaintenanceTicket.
     */
    data: XOR<MaintenanceTicketCreateInput, MaintenanceTicketUncheckedCreateInput>
  }

  /**
   * MaintenanceTicket createMany
   */
  export type MaintenanceTicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaintenanceTickets.
     */
    data: MaintenanceTicketCreateManyInput | MaintenanceTicketCreateManyInput[]
  }

  /**
   * MaintenanceTicket createManyAndReturn
   */
  export type MaintenanceTicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTicket
     */
    omit?: MaintenanceTicketOmit<ExtArgs> | null
    /**
     * The data used to create many MaintenanceTickets.
     */
    data: MaintenanceTicketCreateManyInput | MaintenanceTicketCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceTicket update
   */
  export type MaintenanceTicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTicket
     */
    omit?: MaintenanceTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketInclude<ExtArgs> | null
    /**
     * The data needed to update a MaintenanceTicket.
     */
    data: XOR<MaintenanceTicketUpdateInput, MaintenanceTicketUncheckedUpdateInput>
    /**
     * Choose, which MaintenanceTicket to update.
     */
    where: MaintenanceTicketWhereUniqueInput
  }

  /**
   * MaintenanceTicket updateMany
   */
  export type MaintenanceTicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaintenanceTickets.
     */
    data: XOR<MaintenanceTicketUpdateManyMutationInput, MaintenanceTicketUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceTickets to update
     */
    where?: MaintenanceTicketWhereInput
    /**
     * Limit how many MaintenanceTickets to update.
     */
    limit?: number
  }

  /**
   * MaintenanceTicket updateManyAndReturn
   */
  export type MaintenanceTicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTicket
     */
    omit?: MaintenanceTicketOmit<ExtArgs> | null
    /**
     * The data used to update MaintenanceTickets.
     */
    data: XOR<MaintenanceTicketUpdateManyMutationInput, MaintenanceTicketUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceTickets to update
     */
    where?: MaintenanceTicketWhereInput
    /**
     * Limit how many MaintenanceTickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceTicket upsert
   */
  export type MaintenanceTicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTicket
     */
    omit?: MaintenanceTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketInclude<ExtArgs> | null
    /**
     * The filter to search for the MaintenanceTicket to update in case it exists.
     */
    where: MaintenanceTicketWhereUniqueInput
    /**
     * In case the MaintenanceTicket found by the `where` argument doesn't exist, create a new MaintenanceTicket with this data.
     */
    create: XOR<MaintenanceTicketCreateInput, MaintenanceTicketUncheckedCreateInput>
    /**
     * In case the MaintenanceTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceTicketUpdateInput, MaintenanceTicketUncheckedUpdateInput>
  }

  /**
   * MaintenanceTicket delete
   */
  export type MaintenanceTicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTicket
     */
    omit?: MaintenanceTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketInclude<ExtArgs> | null
    /**
     * Filter which MaintenanceTicket to delete.
     */
    where: MaintenanceTicketWhereUniqueInput
  }

  /**
   * MaintenanceTicket deleteMany
   */
  export type MaintenanceTicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceTickets to delete
     */
    where?: MaintenanceTicketWhereInput
    /**
     * Limit how many MaintenanceTickets to delete.
     */
    limit?: number
  }

  /**
   * MaintenanceTicket.asset
   */
  export type MaintenanceTicket$assetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asset
     */
    select?: AssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asset
     */
    omit?: AssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssetInclude<ExtArgs> | null
    where?: AssetWhereInput
  }

  /**
   * MaintenanceTicket.technician
   */
  export type MaintenanceTicket$technicianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * MaintenanceTicket without action
   */
  export type MaintenanceTicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceTicket
     */
    select?: MaintenanceTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceTicket
     */
    omit?: MaintenanceTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceTicketInclude<ExtArgs> | null
  }


  /**
   * Model TransferRequest
   */

  export type AggregateTransferRequest = {
    _count: TransferRequestCountAggregateOutputType | null
    _min: TransferRequestMinAggregateOutputType | null
    _max: TransferRequestMaxAggregateOutputType | null
  }

  export type TransferRequestMinAggregateOutputType = {
    id: string | null
    assetTag: string | null
    assetName: string | null
    requestedBy: string | null
    requestedByDept: string | null
    currentHolder: string | null
    requestType: string | null
    targetHolder: string | null
    targetDept: string | null
    reason: string | null
    status: string | null
    rejectionReason: string | null
    requestedAt: string | null
    resolvedAt: string | null
    resolvedBy: string | null
  }

  export type TransferRequestMaxAggregateOutputType = {
    id: string | null
    assetTag: string | null
    assetName: string | null
    requestedBy: string | null
    requestedByDept: string | null
    currentHolder: string | null
    requestType: string | null
    targetHolder: string | null
    targetDept: string | null
    reason: string | null
    status: string | null
    rejectionReason: string | null
    requestedAt: string | null
    resolvedAt: string | null
    resolvedBy: string | null
  }

  export type TransferRequestCountAggregateOutputType = {
    id: number
    assetTag: number
    assetName: number
    requestedBy: number
    requestedByDept: number
    currentHolder: number
    requestType: number
    targetHolder: number
    targetDept: number
    reason: number
    status: number
    rejectionReason: number
    requestedAt: number
    resolvedAt: number
    resolvedBy: number
    _all: number
  }


  export type TransferRequestMinAggregateInputType = {
    id?: true
    assetTag?: true
    assetName?: true
    requestedBy?: true
    requestedByDept?: true
    currentHolder?: true
    requestType?: true
    targetHolder?: true
    targetDept?: true
    reason?: true
    status?: true
    rejectionReason?: true
    requestedAt?: true
    resolvedAt?: true
    resolvedBy?: true
  }

  export type TransferRequestMaxAggregateInputType = {
    id?: true
    assetTag?: true
    assetName?: true
    requestedBy?: true
    requestedByDept?: true
    currentHolder?: true
    requestType?: true
    targetHolder?: true
    targetDept?: true
    reason?: true
    status?: true
    rejectionReason?: true
    requestedAt?: true
    resolvedAt?: true
    resolvedBy?: true
  }

  export type TransferRequestCountAggregateInputType = {
    id?: true
    assetTag?: true
    assetName?: true
    requestedBy?: true
    requestedByDept?: true
    currentHolder?: true
    requestType?: true
    targetHolder?: true
    targetDept?: true
    reason?: true
    status?: true
    rejectionReason?: true
    requestedAt?: true
    resolvedAt?: true
    resolvedBy?: true
    _all?: true
  }

  export type TransferRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransferRequest to aggregate.
     */
    where?: TransferRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransferRequests to fetch.
     */
    orderBy?: TransferRequestOrderByWithRelationInput | TransferRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransferRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransferRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransferRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransferRequests
    **/
    _count?: true | TransferRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransferRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransferRequestMaxAggregateInputType
  }

  export type GetTransferRequestAggregateType<T extends TransferRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateTransferRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransferRequest[P]>
      : GetScalarType<T[P], AggregateTransferRequest[P]>
  }




  export type TransferRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferRequestWhereInput
    orderBy?: TransferRequestOrderByWithAggregationInput | TransferRequestOrderByWithAggregationInput[]
    by: TransferRequestScalarFieldEnum[] | TransferRequestScalarFieldEnum
    having?: TransferRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransferRequestCountAggregateInputType | true
    _min?: TransferRequestMinAggregateInputType
    _max?: TransferRequestMaxAggregateInputType
  }

  export type TransferRequestGroupByOutputType = {
    id: string
    assetTag: string
    assetName: string
    requestedBy: string
    requestedByDept: string | null
    currentHolder: string | null
    requestType: string
    targetHolder: string | null
    targetDept: string | null
    reason: string
    status: string
    rejectionReason: string | null
    requestedAt: string
    resolvedAt: string | null
    resolvedBy: string | null
    _count: TransferRequestCountAggregateOutputType | null
    _min: TransferRequestMinAggregateOutputType | null
    _max: TransferRequestMaxAggregateOutputType | null
  }

  type GetTransferRequestGroupByPayload<T extends TransferRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransferRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransferRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransferRequestGroupByOutputType[P]>
            : GetScalarType<T[P], TransferRequestGroupByOutputType[P]>
        }
      >
    >


  export type TransferRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetTag?: boolean
    assetName?: boolean
    requestedBy?: boolean
    requestedByDept?: boolean
    currentHolder?: boolean
    requestType?: boolean
    targetHolder?: boolean
    targetDept?: boolean
    reason?: boolean
    status?: boolean
    rejectionReason?: boolean
    requestedAt?: boolean
    resolvedAt?: boolean
    resolvedBy?: boolean
  }, ExtArgs["result"]["transferRequest"]>

  export type TransferRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetTag?: boolean
    assetName?: boolean
    requestedBy?: boolean
    requestedByDept?: boolean
    currentHolder?: boolean
    requestType?: boolean
    targetHolder?: boolean
    targetDept?: boolean
    reason?: boolean
    status?: boolean
    rejectionReason?: boolean
    requestedAt?: boolean
    resolvedAt?: boolean
    resolvedBy?: boolean
  }, ExtArgs["result"]["transferRequest"]>

  export type TransferRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assetTag?: boolean
    assetName?: boolean
    requestedBy?: boolean
    requestedByDept?: boolean
    currentHolder?: boolean
    requestType?: boolean
    targetHolder?: boolean
    targetDept?: boolean
    reason?: boolean
    status?: boolean
    rejectionReason?: boolean
    requestedAt?: boolean
    resolvedAt?: boolean
    resolvedBy?: boolean
  }, ExtArgs["result"]["transferRequest"]>

  export type TransferRequestSelectScalar = {
    id?: boolean
    assetTag?: boolean
    assetName?: boolean
    requestedBy?: boolean
    requestedByDept?: boolean
    currentHolder?: boolean
    requestType?: boolean
    targetHolder?: boolean
    targetDept?: boolean
    reason?: boolean
    status?: boolean
    rejectionReason?: boolean
    requestedAt?: boolean
    resolvedAt?: boolean
    resolvedBy?: boolean
  }

  export type TransferRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assetTag" | "assetName" | "requestedBy" | "requestedByDept" | "currentHolder" | "requestType" | "targetHolder" | "targetDept" | "reason" | "status" | "rejectionReason" | "requestedAt" | "resolvedAt" | "resolvedBy", ExtArgs["result"]["transferRequest"]>

  export type $TransferRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransferRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assetTag: string
      assetName: string
      requestedBy: string
      requestedByDept: string | null
      currentHolder: string | null
      requestType: string
      targetHolder: string | null
      targetDept: string | null
      reason: string
      status: string
      rejectionReason: string | null
      requestedAt: string
      resolvedAt: string | null
      resolvedBy: string | null
    }, ExtArgs["result"]["transferRequest"]>
    composites: {}
  }

  type TransferRequestGetPayload<S extends boolean | null | undefined | TransferRequestDefaultArgs> = $Result.GetResult<Prisma.$TransferRequestPayload, S>

  type TransferRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransferRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransferRequestCountAggregateInputType | true
    }

  export interface TransferRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransferRequest'], meta: { name: 'TransferRequest' } }
    /**
     * Find zero or one TransferRequest that matches the filter.
     * @param {TransferRequestFindUniqueArgs} args - Arguments to find a TransferRequest
     * @example
     * // Get one TransferRequest
     * const transferRequest = await prisma.transferRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransferRequestFindUniqueArgs>(args: SelectSubset<T, TransferRequestFindUniqueArgs<ExtArgs>>): Prisma__TransferRequestClient<$Result.GetResult<Prisma.$TransferRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransferRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransferRequestFindUniqueOrThrowArgs} args - Arguments to find a TransferRequest
     * @example
     * // Get one TransferRequest
     * const transferRequest = await prisma.transferRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransferRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, TransferRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransferRequestClient<$Result.GetResult<Prisma.$TransferRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransferRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferRequestFindFirstArgs} args - Arguments to find a TransferRequest
     * @example
     * // Get one TransferRequest
     * const transferRequest = await prisma.transferRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransferRequestFindFirstArgs>(args?: SelectSubset<T, TransferRequestFindFirstArgs<ExtArgs>>): Prisma__TransferRequestClient<$Result.GetResult<Prisma.$TransferRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransferRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferRequestFindFirstOrThrowArgs} args - Arguments to find a TransferRequest
     * @example
     * // Get one TransferRequest
     * const transferRequest = await prisma.transferRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransferRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, TransferRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransferRequestClient<$Result.GetResult<Prisma.$TransferRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransferRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransferRequests
     * const transferRequests = await prisma.transferRequest.findMany()
     * 
     * // Get first 10 TransferRequests
     * const transferRequests = await prisma.transferRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transferRequestWithIdOnly = await prisma.transferRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransferRequestFindManyArgs>(args?: SelectSubset<T, TransferRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransferRequest.
     * @param {TransferRequestCreateArgs} args - Arguments to create a TransferRequest.
     * @example
     * // Create one TransferRequest
     * const TransferRequest = await prisma.transferRequest.create({
     *   data: {
     *     // ... data to create a TransferRequest
     *   }
     * })
     * 
     */
    create<T extends TransferRequestCreateArgs>(args: SelectSubset<T, TransferRequestCreateArgs<ExtArgs>>): Prisma__TransferRequestClient<$Result.GetResult<Prisma.$TransferRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransferRequests.
     * @param {TransferRequestCreateManyArgs} args - Arguments to create many TransferRequests.
     * @example
     * // Create many TransferRequests
     * const transferRequest = await prisma.transferRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransferRequestCreateManyArgs>(args?: SelectSubset<T, TransferRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransferRequests and returns the data saved in the database.
     * @param {TransferRequestCreateManyAndReturnArgs} args - Arguments to create many TransferRequests.
     * @example
     * // Create many TransferRequests
     * const transferRequest = await prisma.transferRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransferRequests and only return the `id`
     * const transferRequestWithIdOnly = await prisma.transferRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransferRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, TransferRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransferRequest.
     * @param {TransferRequestDeleteArgs} args - Arguments to delete one TransferRequest.
     * @example
     * // Delete one TransferRequest
     * const TransferRequest = await prisma.transferRequest.delete({
     *   where: {
     *     // ... filter to delete one TransferRequest
     *   }
     * })
     * 
     */
    delete<T extends TransferRequestDeleteArgs>(args: SelectSubset<T, TransferRequestDeleteArgs<ExtArgs>>): Prisma__TransferRequestClient<$Result.GetResult<Prisma.$TransferRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransferRequest.
     * @param {TransferRequestUpdateArgs} args - Arguments to update one TransferRequest.
     * @example
     * // Update one TransferRequest
     * const transferRequest = await prisma.transferRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransferRequestUpdateArgs>(args: SelectSubset<T, TransferRequestUpdateArgs<ExtArgs>>): Prisma__TransferRequestClient<$Result.GetResult<Prisma.$TransferRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransferRequests.
     * @param {TransferRequestDeleteManyArgs} args - Arguments to filter TransferRequests to delete.
     * @example
     * // Delete a few TransferRequests
     * const { count } = await prisma.transferRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransferRequestDeleteManyArgs>(args?: SelectSubset<T, TransferRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransferRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransferRequests
     * const transferRequest = await prisma.transferRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransferRequestUpdateManyArgs>(args: SelectSubset<T, TransferRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransferRequests and returns the data updated in the database.
     * @param {TransferRequestUpdateManyAndReturnArgs} args - Arguments to update many TransferRequests.
     * @example
     * // Update many TransferRequests
     * const transferRequest = await prisma.transferRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransferRequests and only return the `id`
     * const transferRequestWithIdOnly = await prisma.transferRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransferRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, TransferRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransferRequest.
     * @param {TransferRequestUpsertArgs} args - Arguments to update or create a TransferRequest.
     * @example
     * // Update or create a TransferRequest
     * const transferRequest = await prisma.transferRequest.upsert({
     *   create: {
     *     // ... data to create a TransferRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransferRequest we want to update
     *   }
     * })
     */
    upsert<T extends TransferRequestUpsertArgs>(args: SelectSubset<T, TransferRequestUpsertArgs<ExtArgs>>): Prisma__TransferRequestClient<$Result.GetResult<Prisma.$TransferRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransferRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferRequestCountArgs} args - Arguments to filter TransferRequests to count.
     * @example
     * // Count the number of TransferRequests
     * const count = await prisma.transferRequest.count({
     *   where: {
     *     // ... the filter for the TransferRequests we want to count
     *   }
     * })
    **/
    count<T extends TransferRequestCountArgs>(
      args?: Subset<T, TransferRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransferRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransferRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransferRequestAggregateArgs>(args: Subset<T, TransferRequestAggregateArgs>): Prisma.PrismaPromise<GetTransferRequestAggregateType<T>>

    /**
     * Group by TransferRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferRequestGroupByArgs} args - Group by arguments.
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
      T extends TransferRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransferRequestGroupByArgs['orderBy'] }
        : { orderBy?: TransferRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransferRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransferRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransferRequest model
   */
  readonly fields: TransferRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransferRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransferRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the TransferRequest model
   */
  interface TransferRequestFieldRefs {
    readonly id: FieldRef<"TransferRequest", 'String'>
    readonly assetTag: FieldRef<"TransferRequest", 'String'>
    readonly assetName: FieldRef<"TransferRequest", 'String'>
    readonly requestedBy: FieldRef<"TransferRequest", 'String'>
    readonly requestedByDept: FieldRef<"TransferRequest", 'String'>
    readonly currentHolder: FieldRef<"TransferRequest", 'String'>
    readonly requestType: FieldRef<"TransferRequest", 'String'>
    readonly targetHolder: FieldRef<"TransferRequest", 'String'>
    readonly targetDept: FieldRef<"TransferRequest", 'String'>
    readonly reason: FieldRef<"TransferRequest", 'String'>
    readonly status: FieldRef<"TransferRequest", 'String'>
    readonly rejectionReason: FieldRef<"TransferRequest", 'String'>
    readonly requestedAt: FieldRef<"TransferRequest", 'String'>
    readonly resolvedAt: FieldRef<"TransferRequest", 'String'>
    readonly resolvedBy: FieldRef<"TransferRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TransferRequest findUnique
   */
  export type TransferRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferRequest
     */
    select?: TransferRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferRequest
     */
    omit?: TransferRequestOmit<ExtArgs> | null
    /**
     * Filter, which TransferRequest to fetch.
     */
    where: TransferRequestWhereUniqueInput
  }

  /**
   * TransferRequest findUniqueOrThrow
   */
  export type TransferRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferRequest
     */
    select?: TransferRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferRequest
     */
    omit?: TransferRequestOmit<ExtArgs> | null
    /**
     * Filter, which TransferRequest to fetch.
     */
    where: TransferRequestWhereUniqueInput
  }

  /**
   * TransferRequest findFirst
   */
  export type TransferRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferRequest
     */
    select?: TransferRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferRequest
     */
    omit?: TransferRequestOmit<ExtArgs> | null
    /**
     * Filter, which TransferRequest to fetch.
     */
    where?: TransferRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransferRequests to fetch.
     */
    orderBy?: TransferRequestOrderByWithRelationInput | TransferRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransferRequests.
     */
    cursor?: TransferRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransferRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransferRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransferRequests.
     */
    distinct?: TransferRequestScalarFieldEnum | TransferRequestScalarFieldEnum[]
  }

  /**
   * TransferRequest findFirstOrThrow
   */
  export type TransferRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferRequest
     */
    select?: TransferRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferRequest
     */
    omit?: TransferRequestOmit<ExtArgs> | null
    /**
     * Filter, which TransferRequest to fetch.
     */
    where?: TransferRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransferRequests to fetch.
     */
    orderBy?: TransferRequestOrderByWithRelationInput | TransferRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransferRequests.
     */
    cursor?: TransferRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransferRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransferRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransferRequests.
     */
    distinct?: TransferRequestScalarFieldEnum | TransferRequestScalarFieldEnum[]
  }

  /**
   * TransferRequest findMany
   */
  export type TransferRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferRequest
     */
    select?: TransferRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferRequest
     */
    omit?: TransferRequestOmit<ExtArgs> | null
    /**
     * Filter, which TransferRequests to fetch.
     */
    where?: TransferRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransferRequests to fetch.
     */
    orderBy?: TransferRequestOrderByWithRelationInput | TransferRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransferRequests.
     */
    cursor?: TransferRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransferRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransferRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransferRequests.
     */
    distinct?: TransferRequestScalarFieldEnum | TransferRequestScalarFieldEnum[]
  }

  /**
   * TransferRequest create
   */
  export type TransferRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferRequest
     */
    select?: TransferRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferRequest
     */
    omit?: TransferRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a TransferRequest.
     */
    data: XOR<TransferRequestCreateInput, TransferRequestUncheckedCreateInput>
  }

  /**
   * TransferRequest createMany
   */
  export type TransferRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransferRequests.
     */
    data: TransferRequestCreateManyInput | TransferRequestCreateManyInput[]
  }

  /**
   * TransferRequest createManyAndReturn
   */
  export type TransferRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferRequest
     */
    select?: TransferRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransferRequest
     */
    omit?: TransferRequestOmit<ExtArgs> | null
    /**
     * The data used to create many TransferRequests.
     */
    data: TransferRequestCreateManyInput | TransferRequestCreateManyInput[]
  }

  /**
   * TransferRequest update
   */
  export type TransferRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferRequest
     */
    select?: TransferRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferRequest
     */
    omit?: TransferRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a TransferRequest.
     */
    data: XOR<TransferRequestUpdateInput, TransferRequestUncheckedUpdateInput>
    /**
     * Choose, which TransferRequest to update.
     */
    where: TransferRequestWhereUniqueInput
  }

  /**
   * TransferRequest updateMany
   */
  export type TransferRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransferRequests.
     */
    data: XOR<TransferRequestUpdateManyMutationInput, TransferRequestUncheckedUpdateManyInput>
    /**
     * Filter which TransferRequests to update
     */
    where?: TransferRequestWhereInput
    /**
     * Limit how many TransferRequests to update.
     */
    limit?: number
  }

  /**
   * TransferRequest updateManyAndReturn
   */
  export type TransferRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferRequest
     */
    select?: TransferRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransferRequest
     */
    omit?: TransferRequestOmit<ExtArgs> | null
    /**
     * The data used to update TransferRequests.
     */
    data: XOR<TransferRequestUpdateManyMutationInput, TransferRequestUncheckedUpdateManyInput>
    /**
     * Filter which TransferRequests to update
     */
    where?: TransferRequestWhereInput
    /**
     * Limit how many TransferRequests to update.
     */
    limit?: number
  }

  /**
   * TransferRequest upsert
   */
  export type TransferRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferRequest
     */
    select?: TransferRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferRequest
     */
    omit?: TransferRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the TransferRequest to update in case it exists.
     */
    where: TransferRequestWhereUniqueInput
    /**
     * In case the TransferRequest found by the `where` argument doesn't exist, create a new TransferRequest with this data.
     */
    create: XOR<TransferRequestCreateInput, TransferRequestUncheckedCreateInput>
    /**
     * In case the TransferRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransferRequestUpdateInput, TransferRequestUncheckedUpdateInput>
  }

  /**
   * TransferRequest delete
   */
  export type TransferRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferRequest
     */
    select?: TransferRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferRequest
     */
    omit?: TransferRequestOmit<ExtArgs> | null
    /**
     * Filter which TransferRequest to delete.
     */
    where: TransferRequestWhereUniqueInput
  }

  /**
   * TransferRequest deleteMany
   */
  export type TransferRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransferRequests to delete
     */
    where?: TransferRequestWhereInput
    /**
     * Limit how many TransferRequests to delete.
     */
    limit?: number
  }

  /**
   * TransferRequest without action
   */
  export type TransferRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferRequest
     */
    select?: TransferRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferRequest
     */
    omit?: TransferRequestOmit<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    startHour: number | null
    endHour: number | null
  }

  export type BookingSumAggregateOutputType = {
    startHour: number | null
    endHour: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    resource: string | null
    title: string | null
    timeRange: string | null
    startHour: number | null
    endHour: number | null
    date: string | null
    bookedBy: string | null
    bookedByDept: string | null
    status: string | null
    isConflict: boolean | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    resource: string | null
    title: string | null
    timeRange: string | null
    startHour: number | null
    endHour: number | null
    date: string | null
    bookedBy: string | null
    bookedByDept: string | null
    status: string | null
    isConflict: boolean | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    resource: number
    title: number
    timeRange: number
    startHour: number
    endHour: number
    date: number
    bookedBy: number
    bookedByDept: number
    status: number
    isConflict: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    startHour?: true
    endHour?: true
  }

  export type BookingSumAggregateInputType = {
    startHour?: true
    endHour?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    resource?: true
    title?: true
    timeRange?: true
    startHour?: true
    endHour?: true
    date?: true
    bookedBy?: true
    bookedByDept?: true
    status?: true
    isConflict?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    resource?: true
    title?: true
    timeRange?: true
    startHour?: true
    endHour?: true
    date?: true
    bookedBy?: true
    bookedByDept?: true
    status?: true
    isConflict?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    resource?: true
    title?: true
    timeRange?: true
    startHour?: true
    endHour?: true
    date?: true
    bookedBy?: true
    bookedByDept?: true
    status?: true
    isConflict?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    resource: string
    title: string
    timeRange: string
    startHour: number
    endHour: number
    date: string
    bookedBy: string | null
    bookedByDept: string | null
    status: string | null
    isConflict: boolean
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resource?: boolean
    title?: boolean
    timeRange?: boolean
    startHour?: boolean
    endHour?: boolean
    date?: boolean
    bookedBy?: boolean
    bookedByDept?: boolean
    status?: boolean
    isConflict?: boolean
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resource?: boolean
    title?: boolean
    timeRange?: boolean
    startHour?: boolean
    endHour?: boolean
    date?: boolean
    bookedBy?: boolean
    bookedByDept?: boolean
    status?: boolean
    isConflict?: boolean
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resource?: boolean
    title?: boolean
    timeRange?: boolean
    startHour?: boolean
    endHour?: boolean
    date?: boolean
    bookedBy?: boolean
    bookedByDept?: boolean
    status?: boolean
    isConflict?: boolean
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    resource?: boolean
    title?: boolean
    timeRange?: boolean
    startHour?: boolean
    endHour?: boolean
    date?: boolean
    bookedBy?: boolean
    bookedByDept?: boolean
    status?: boolean
    isConflict?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resource" | "title" | "timeRange" | "startHour" | "endHour" | "date" | "bookedBy" | "bookedByDept" | "status" | "isConflict", ExtArgs["result"]["booking"]>

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resource: string
      title: string
      timeRange: string
      startHour: number
      endHour: number
      date: string
      bookedBy: string | null
      bookedByDept: string | null
      status: string | null
      isConflict: boolean
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly resource: FieldRef<"Booking", 'String'>
    readonly title: FieldRef<"Booking", 'String'>
    readonly timeRange: FieldRef<"Booking", 'String'>
    readonly startHour: FieldRef<"Booking", 'Int'>
    readonly endHour: FieldRef<"Booking", 'Int'>
    readonly date: FieldRef<"Booking", 'String'>
    readonly bookedBy: FieldRef<"Booking", 'String'>
    readonly bookedByDept: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'String'>
    readonly isConflict: FieldRef<"Booking", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    recipientName: string | null
    title: string | null
    message: string | null
    icon: string | null
    type: string | null
    timestamp: string | null
    isRead: boolean | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    recipientName: string | null
    title: string | null
    message: string | null
    icon: string | null
    type: string | null
    timestamp: string | null
    isRead: boolean | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    recipientName: number
    title: number
    message: number
    icon: number
    type: number
    timestamp: number
    isRead: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    recipientName?: true
    title?: true
    message?: true
    icon?: true
    type?: true
    timestamp?: true
    isRead?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    recipientName?: true
    title?: true
    message?: true
    icon?: true
    type?: true
    timestamp?: true
    isRead?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    recipientName?: true
    title?: true
    message?: true
    icon?: true
    type?: true
    timestamp?: true
    isRead?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    recipientName: string
    title: string
    message: string
    icon: string
    type: string
    timestamp: string
    isRead: boolean
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipientName?: boolean
    title?: boolean
    message?: boolean
    icon?: boolean
    type?: boolean
    timestamp?: boolean
    isRead?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipientName?: boolean
    title?: boolean
    message?: boolean
    icon?: boolean
    type?: boolean
    timestamp?: boolean
    isRead?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recipientName?: boolean
    title?: boolean
    message?: boolean
    icon?: boolean
    type?: boolean
    timestamp?: boolean
    isRead?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    recipientName?: boolean
    title?: boolean
    message?: boolean
    icon?: boolean
    type?: boolean
    timestamp?: boolean
    isRead?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recipientName" | "title" | "message" | "icon" | "type" | "timestamp" | "isRead", ExtArgs["result"]["notification"]>

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      recipientName: string
      title: string
      message: string
      icon: string
      type: string
      timestamp: string
      isRead: boolean
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly recipientName: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly icon: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly timestamp: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    icon: string | null
    type: string | null
    title: string | null
    description: string | null
    timestamp: string | null
    isAlert: boolean | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    icon: string | null
    type: string | null
    title: string | null
    description: string | null
    timestamp: string | null
    isAlert: boolean | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    icon: number
    type: number
    title: number
    description: number
    timestamp: number
    isAlert: number
    _all: number
  }


  export type ActivityLogMinAggregateInputType = {
    id?: true
    icon?: true
    type?: true
    title?: true
    description?: true
    timestamp?: true
    isAlert?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    icon?: true
    type?: true
    title?: true
    description?: true
    timestamp?: true
    isAlert?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    icon?: true
    type?: true
    title?: true
    description?: true
    timestamp?: true
    isAlert?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    icon: string
    type: string
    title: string
    description: string
    timestamp: string
    isAlert: boolean
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    icon?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    timestamp?: boolean
    isAlert?: boolean
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    icon?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    timestamp?: boolean
    isAlert?: boolean
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    icon?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    timestamp?: boolean
    isAlert?: boolean
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    icon?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    timestamp?: boolean
    isAlert?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "icon" | "type" | "title" | "description" | "timestamp" | "isAlert", ExtArgs["result"]["activityLog"]>

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      icon: string
      type: string
      title: string
      description: string
      timestamp: string
      isAlert: boolean
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
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
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly icon: FieldRef<"ActivityLog", 'String'>
    readonly type: FieldRef<"ActivityLog", 'String'>
    readonly title: FieldRef<"ActivityLog", 'String'>
    readonly description: FieldRef<"ActivityLog", 'String'>
    readonly timestamp: FieldRef<"ActivityLog", 'String'>
    readonly isAlert: FieldRef<"ActivityLog", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    dept: 'dept',
    role: 'role',
    jobTitle: 'jobTitle',
    avatar: 'avatar',
    status: 'status'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    head: 'head',
    headAvatar: 'headAvatar',
    parentDept: 'parentDept',
    status: 'status',
    headOfDeptId: 'headOfDeptId'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const AssetScalarFieldEnum: {
    tag: 'tag',
    name: 'name',
    category: 'category',
    status: 'status',
    location: 'location',
    serial: 'serial',
    image: 'image',
    assignee: 'assignee',
    allocatedTo: 'allocatedTo',
    allocatedToDept: 'allocatedToDept',
    dueDate: 'dueDate',
    expectedLocation: 'expectedLocation',
    allocationHistory: 'allocationHistory',
    maintenanceHistory: 'maintenanceHistory',
    lastVerified: 'lastVerified',
    verificationStatus: 'verificationStatus',
    departmentId: 'departmentId'
  };

  export type AssetScalarFieldEnum = (typeof AssetScalarFieldEnum)[keyof typeof AssetScalarFieldEnum]


  export const MaintenanceTicketScalarFieldEnum: {
    id: 'id',
    assetTag: 'assetTag',
    title: 'title',
    description: 'description',
    priority: 'priority',
    column: 'column',
    assignee: 'assignee',
    assigneeAvatar: 'assigneeAvatar',
    reportedTime: 'reportedTime',
    raisedBy: 'raisedBy',
    raisedByDept: 'raisedByDept',
    rejectedReason: 'rejectedReason',
    isRejected: 'isRejected',
    technicianId: 'technicianId',
    createdAt: 'createdAt'
  };

  export type MaintenanceTicketScalarFieldEnum = (typeof MaintenanceTicketScalarFieldEnum)[keyof typeof MaintenanceTicketScalarFieldEnum]


  export const TransferRequestScalarFieldEnum: {
    id: 'id',
    assetTag: 'assetTag',
    assetName: 'assetName',
    requestedBy: 'requestedBy',
    requestedByDept: 'requestedByDept',
    currentHolder: 'currentHolder',
    requestType: 'requestType',
    targetHolder: 'targetHolder',
    targetDept: 'targetDept',
    reason: 'reason',
    status: 'status',
    rejectionReason: 'rejectionReason',
    requestedAt: 'requestedAt',
    resolvedAt: 'resolvedAt',
    resolvedBy: 'resolvedBy'
  };

  export type TransferRequestScalarFieldEnum = (typeof TransferRequestScalarFieldEnum)[keyof typeof TransferRequestScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    resource: 'resource',
    title: 'title',
    timeRange: 'timeRange',
    startHour: 'startHour',
    endHour: 'endHour',
    date: 'date',
    bookedBy: 'bookedBy',
    bookedByDept: 'bookedByDept',
    status: 'status',
    isConflict: 'isConflict'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    recipientName: 'recipientName',
    title: 'title',
    message: 'message',
    icon: 'icon',
    type: 'type',
    timestamp: 'timestamp',
    isRead: 'isRead'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    icon: 'icon',
    type: 'type',
    title: 'title',
    description: 'description',
    timestamp: 'timestamp',
    isAlert: 'isAlert'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    dept?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    jobTitle?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    status?: StringFilter<"User"> | string
    departments?: DepartmentListRelationFilter
    tickets?: MaintenanceTicketListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    dept?: SortOrderInput | SortOrder
    role?: SortOrder
    jobTitle?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    status?: SortOrder
    departments?: DepartmentOrderByRelationAggregateInput
    tickets?: MaintenanceTicketOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    dept?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    jobTitle?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    status?: StringFilter<"User"> | string
    departments?: DepartmentListRelationFilter
    tickets?: MaintenanceTicketListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    dept?: SortOrderInput | SortOrder
    role?: SortOrder
    jobTitle?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    dept?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    jobTitle?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: StringWithAggregatesFilter<"User"> | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    head?: StringNullableFilter<"Department"> | string | null
    headAvatar?: StringNullableFilter<"Department"> | string | null
    parentDept?: StringNullableFilter<"Department"> | string | null
    status?: StringFilter<"Department"> | string
    headOfDeptId?: StringNullableFilter<"Department"> | string | null
    headOfDept?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    assets?: AssetListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    head?: SortOrderInput | SortOrder
    headAvatar?: SortOrderInput | SortOrder
    parentDept?: SortOrderInput | SortOrder
    status?: SortOrder
    headOfDeptId?: SortOrderInput | SortOrder
    headOfDept?: UserOrderByWithRelationInput
    assets?: AssetOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    name?: StringFilter<"Department"> | string
    head?: StringNullableFilter<"Department"> | string | null
    headAvatar?: StringNullableFilter<"Department"> | string | null
    parentDept?: StringNullableFilter<"Department"> | string | null
    status?: StringFilter<"Department"> | string
    headOfDeptId?: StringNullableFilter<"Department"> | string | null
    headOfDept?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    assets?: AssetListRelationFilter
  }, "id">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    head?: SortOrderInput | SortOrder
    headAvatar?: SortOrderInput | SortOrder
    parentDept?: SortOrderInput | SortOrder
    status?: SortOrder
    headOfDeptId?: SortOrderInput | SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
    head?: StringNullableWithAggregatesFilter<"Department"> | string | null
    headAvatar?: StringNullableWithAggregatesFilter<"Department"> | string | null
    parentDept?: StringNullableWithAggregatesFilter<"Department"> | string | null
    status?: StringWithAggregatesFilter<"Department"> | string
    headOfDeptId?: StringNullableWithAggregatesFilter<"Department"> | string | null
  }

  export type AssetWhereInput = {
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    tag?: StringFilter<"Asset"> | string
    name?: StringFilter<"Asset"> | string
    category?: StringNullableFilter<"Asset"> | string | null
    status?: StringFilter<"Asset"> | string
    location?: StringNullableFilter<"Asset"> | string | null
    serial?: StringNullableFilter<"Asset"> | string | null
    image?: StringNullableFilter<"Asset"> | string | null
    assignee?: StringNullableFilter<"Asset"> | string | null
    allocatedTo?: StringNullableFilter<"Asset"> | string | null
    allocatedToDept?: StringNullableFilter<"Asset"> | string | null
    dueDate?: StringNullableFilter<"Asset"> | string | null
    expectedLocation?: StringNullableFilter<"Asset"> | string | null
    allocationHistory?: StringFilter<"Asset"> | string
    maintenanceHistory?: StringFilter<"Asset"> | string
    lastVerified?: StringNullableFilter<"Asset"> | string | null
    verificationStatus?: StringNullableFilter<"Asset"> | string | null
    departmentId?: StringNullableFilter<"Asset"> | string | null
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    tickets?: MaintenanceTicketListRelationFilter
  }

  export type AssetOrderByWithRelationInput = {
    tag?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    status?: SortOrder
    location?: SortOrderInput | SortOrder
    serial?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    assignee?: SortOrderInput | SortOrder
    allocatedTo?: SortOrderInput | SortOrder
    allocatedToDept?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    expectedLocation?: SortOrderInput | SortOrder
    allocationHistory?: SortOrder
    maintenanceHistory?: SortOrder
    lastVerified?: SortOrderInput | SortOrder
    verificationStatus?: SortOrderInput | SortOrder
    departmentId?: SortOrderInput | SortOrder
    department?: DepartmentOrderByWithRelationInput
    tickets?: MaintenanceTicketOrderByRelationAggregateInput
  }

  export type AssetWhereUniqueInput = Prisma.AtLeast<{
    tag?: string
    AND?: AssetWhereInput | AssetWhereInput[]
    OR?: AssetWhereInput[]
    NOT?: AssetWhereInput | AssetWhereInput[]
    name?: StringFilter<"Asset"> | string
    category?: StringNullableFilter<"Asset"> | string | null
    status?: StringFilter<"Asset"> | string
    location?: StringNullableFilter<"Asset"> | string | null
    serial?: StringNullableFilter<"Asset"> | string | null
    image?: StringNullableFilter<"Asset"> | string | null
    assignee?: StringNullableFilter<"Asset"> | string | null
    allocatedTo?: StringNullableFilter<"Asset"> | string | null
    allocatedToDept?: StringNullableFilter<"Asset"> | string | null
    dueDate?: StringNullableFilter<"Asset"> | string | null
    expectedLocation?: StringNullableFilter<"Asset"> | string | null
    allocationHistory?: StringFilter<"Asset"> | string
    maintenanceHistory?: StringFilter<"Asset"> | string
    lastVerified?: StringNullableFilter<"Asset"> | string | null
    verificationStatus?: StringNullableFilter<"Asset"> | string | null
    departmentId?: StringNullableFilter<"Asset"> | string | null
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    tickets?: MaintenanceTicketListRelationFilter
  }, "tag">

  export type AssetOrderByWithAggregationInput = {
    tag?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    status?: SortOrder
    location?: SortOrderInput | SortOrder
    serial?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    assignee?: SortOrderInput | SortOrder
    allocatedTo?: SortOrderInput | SortOrder
    allocatedToDept?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    expectedLocation?: SortOrderInput | SortOrder
    allocationHistory?: SortOrder
    maintenanceHistory?: SortOrder
    lastVerified?: SortOrderInput | SortOrder
    verificationStatus?: SortOrderInput | SortOrder
    departmentId?: SortOrderInput | SortOrder
    _count?: AssetCountOrderByAggregateInput
    _max?: AssetMaxOrderByAggregateInput
    _min?: AssetMinOrderByAggregateInput
  }

  export type AssetScalarWhereWithAggregatesInput = {
    AND?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    OR?: AssetScalarWhereWithAggregatesInput[]
    NOT?: AssetScalarWhereWithAggregatesInput | AssetScalarWhereWithAggregatesInput[]
    tag?: StringWithAggregatesFilter<"Asset"> | string
    name?: StringWithAggregatesFilter<"Asset"> | string
    category?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    status?: StringWithAggregatesFilter<"Asset"> | string
    location?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    serial?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    image?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    assignee?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    allocatedTo?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    allocatedToDept?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    dueDate?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    expectedLocation?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    allocationHistory?: StringWithAggregatesFilter<"Asset"> | string
    maintenanceHistory?: StringWithAggregatesFilter<"Asset"> | string
    lastVerified?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    verificationStatus?: StringNullableWithAggregatesFilter<"Asset"> | string | null
    departmentId?: StringNullableWithAggregatesFilter<"Asset"> | string | null
  }

  export type MaintenanceTicketWhereInput = {
    AND?: MaintenanceTicketWhereInput | MaintenanceTicketWhereInput[]
    OR?: MaintenanceTicketWhereInput[]
    NOT?: MaintenanceTicketWhereInput | MaintenanceTicketWhereInput[]
    id?: StringFilter<"MaintenanceTicket"> | string
    assetTag?: StringFilter<"MaintenanceTicket"> | string
    title?: StringNullableFilter<"MaintenanceTicket"> | string | null
    description?: StringFilter<"MaintenanceTicket"> | string
    priority?: StringFilter<"MaintenanceTicket"> | string
    column?: StringFilter<"MaintenanceTicket"> | string
    assignee?: StringNullableFilter<"MaintenanceTicket"> | string | null
    assigneeAvatar?: StringNullableFilter<"MaintenanceTicket"> | string | null
    reportedTime?: StringNullableFilter<"MaintenanceTicket"> | string | null
    raisedBy?: StringNullableFilter<"MaintenanceTicket"> | string | null
    raisedByDept?: StringNullableFilter<"MaintenanceTicket"> | string | null
    rejectedReason?: StringNullableFilter<"MaintenanceTicket"> | string | null
    isRejected?: BoolFilter<"MaintenanceTicket"> | boolean
    technicianId?: StringNullableFilter<"MaintenanceTicket"> | string | null
    createdAt?: DateTimeFilter<"MaintenanceTicket"> | Date | string
    asset?: XOR<AssetNullableScalarRelationFilter, AssetWhereInput> | null
    technician?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type MaintenanceTicketOrderByWithRelationInput = {
    id?: SortOrder
    assetTag?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrder
    priority?: SortOrder
    column?: SortOrder
    assignee?: SortOrderInput | SortOrder
    assigneeAvatar?: SortOrderInput | SortOrder
    reportedTime?: SortOrderInput | SortOrder
    raisedBy?: SortOrderInput | SortOrder
    raisedByDept?: SortOrderInput | SortOrder
    rejectedReason?: SortOrderInput | SortOrder
    isRejected?: SortOrder
    technicianId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    asset?: AssetOrderByWithRelationInput
    technician?: UserOrderByWithRelationInput
  }

  export type MaintenanceTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaintenanceTicketWhereInput | MaintenanceTicketWhereInput[]
    OR?: MaintenanceTicketWhereInput[]
    NOT?: MaintenanceTicketWhereInput | MaintenanceTicketWhereInput[]
    assetTag?: StringFilter<"MaintenanceTicket"> | string
    title?: StringNullableFilter<"MaintenanceTicket"> | string | null
    description?: StringFilter<"MaintenanceTicket"> | string
    priority?: StringFilter<"MaintenanceTicket"> | string
    column?: StringFilter<"MaintenanceTicket"> | string
    assignee?: StringNullableFilter<"MaintenanceTicket"> | string | null
    assigneeAvatar?: StringNullableFilter<"MaintenanceTicket"> | string | null
    reportedTime?: StringNullableFilter<"MaintenanceTicket"> | string | null
    raisedBy?: StringNullableFilter<"MaintenanceTicket"> | string | null
    raisedByDept?: StringNullableFilter<"MaintenanceTicket"> | string | null
    rejectedReason?: StringNullableFilter<"MaintenanceTicket"> | string | null
    isRejected?: BoolFilter<"MaintenanceTicket"> | boolean
    technicianId?: StringNullableFilter<"MaintenanceTicket"> | string | null
    createdAt?: DateTimeFilter<"MaintenanceTicket"> | Date | string
    asset?: XOR<AssetNullableScalarRelationFilter, AssetWhereInput> | null
    technician?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type MaintenanceTicketOrderByWithAggregationInput = {
    id?: SortOrder
    assetTag?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrder
    priority?: SortOrder
    column?: SortOrder
    assignee?: SortOrderInput | SortOrder
    assigneeAvatar?: SortOrderInput | SortOrder
    reportedTime?: SortOrderInput | SortOrder
    raisedBy?: SortOrderInput | SortOrder
    raisedByDept?: SortOrderInput | SortOrder
    rejectedReason?: SortOrderInput | SortOrder
    isRejected?: SortOrder
    technicianId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MaintenanceTicketCountOrderByAggregateInput
    _max?: MaintenanceTicketMaxOrderByAggregateInput
    _min?: MaintenanceTicketMinOrderByAggregateInput
  }

  export type MaintenanceTicketScalarWhereWithAggregatesInput = {
    AND?: MaintenanceTicketScalarWhereWithAggregatesInput | MaintenanceTicketScalarWhereWithAggregatesInput[]
    OR?: MaintenanceTicketScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceTicketScalarWhereWithAggregatesInput | MaintenanceTicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MaintenanceTicket"> | string
    assetTag?: StringWithAggregatesFilter<"MaintenanceTicket"> | string
    title?: StringNullableWithAggregatesFilter<"MaintenanceTicket"> | string | null
    description?: StringWithAggregatesFilter<"MaintenanceTicket"> | string
    priority?: StringWithAggregatesFilter<"MaintenanceTicket"> | string
    column?: StringWithAggregatesFilter<"MaintenanceTicket"> | string
    assignee?: StringNullableWithAggregatesFilter<"MaintenanceTicket"> | string | null
    assigneeAvatar?: StringNullableWithAggregatesFilter<"MaintenanceTicket"> | string | null
    reportedTime?: StringNullableWithAggregatesFilter<"MaintenanceTicket"> | string | null
    raisedBy?: StringNullableWithAggregatesFilter<"MaintenanceTicket"> | string | null
    raisedByDept?: StringNullableWithAggregatesFilter<"MaintenanceTicket"> | string | null
    rejectedReason?: StringNullableWithAggregatesFilter<"MaintenanceTicket"> | string | null
    isRejected?: BoolWithAggregatesFilter<"MaintenanceTicket"> | boolean
    technicianId?: StringNullableWithAggregatesFilter<"MaintenanceTicket"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MaintenanceTicket"> | Date | string
  }

  export type TransferRequestWhereInput = {
    AND?: TransferRequestWhereInput | TransferRequestWhereInput[]
    OR?: TransferRequestWhereInput[]
    NOT?: TransferRequestWhereInput | TransferRequestWhereInput[]
    id?: StringFilter<"TransferRequest"> | string
    assetTag?: StringFilter<"TransferRequest"> | string
    assetName?: StringFilter<"TransferRequest"> | string
    requestedBy?: StringFilter<"TransferRequest"> | string
    requestedByDept?: StringNullableFilter<"TransferRequest"> | string | null
    currentHolder?: StringNullableFilter<"TransferRequest"> | string | null
    requestType?: StringFilter<"TransferRequest"> | string
    targetHolder?: StringNullableFilter<"TransferRequest"> | string | null
    targetDept?: StringNullableFilter<"TransferRequest"> | string | null
    reason?: StringFilter<"TransferRequest"> | string
    status?: StringFilter<"TransferRequest"> | string
    rejectionReason?: StringNullableFilter<"TransferRequest"> | string | null
    requestedAt?: StringFilter<"TransferRequest"> | string
    resolvedAt?: StringNullableFilter<"TransferRequest"> | string | null
    resolvedBy?: StringNullableFilter<"TransferRequest"> | string | null
  }

  export type TransferRequestOrderByWithRelationInput = {
    id?: SortOrder
    assetTag?: SortOrder
    assetName?: SortOrder
    requestedBy?: SortOrder
    requestedByDept?: SortOrderInput | SortOrder
    currentHolder?: SortOrderInput | SortOrder
    requestType?: SortOrder
    targetHolder?: SortOrderInput | SortOrder
    targetDept?: SortOrderInput | SortOrder
    reason?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    requestedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    resolvedBy?: SortOrderInput | SortOrder
  }

  export type TransferRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransferRequestWhereInput | TransferRequestWhereInput[]
    OR?: TransferRequestWhereInput[]
    NOT?: TransferRequestWhereInput | TransferRequestWhereInput[]
    assetTag?: StringFilter<"TransferRequest"> | string
    assetName?: StringFilter<"TransferRequest"> | string
    requestedBy?: StringFilter<"TransferRequest"> | string
    requestedByDept?: StringNullableFilter<"TransferRequest"> | string | null
    currentHolder?: StringNullableFilter<"TransferRequest"> | string | null
    requestType?: StringFilter<"TransferRequest"> | string
    targetHolder?: StringNullableFilter<"TransferRequest"> | string | null
    targetDept?: StringNullableFilter<"TransferRequest"> | string | null
    reason?: StringFilter<"TransferRequest"> | string
    status?: StringFilter<"TransferRequest"> | string
    rejectionReason?: StringNullableFilter<"TransferRequest"> | string | null
    requestedAt?: StringFilter<"TransferRequest"> | string
    resolvedAt?: StringNullableFilter<"TransferRequest"> | string | null
    resolvedBy?: StringNullableFilter<"TransferRequest"> | string | null
  }, "id">

  export type TransferRequestOrderByWithAggregationInput = {
    id?: SortOrder
    assetTag?: SortOrder
    assetName?: SortOrder
    requestedBy?: SortOrder
    requestedByDept?: SortOrderInput | SortOrder
    currentHolder?: SortOrderInput | SortOrder
    requestType?: SortOrder
    targetHolder?: SortOrderInput | SortOrder
    targetDept?: SortOrderInput | SortOrder
    reason?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    requestedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    resolvedBy?: SortOrderInput | SortOrder
    _count?: TransferRequestCountOrderByAggregateInput
    _max?: TransferRequestMaxOrderByAggregateInput
    _min?: TransferRequestMinOrderByAggregateInput
  }

  export type TransferRequestScalarWhereWithAggregatesInput = {
    AND?: TransferRequestScalarWhereWithAggregatesInput | TransferRequestScalarWhereWithAggregatesInput[]
    OR?: TransferRequestScalarWhereWithAggregatesInput[]
    NOT?: TransferRequestScalarWhereWithAggregatesInput | TransferRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TransferRequest"> | string
    assetTag?: StringWithAggregatesFilter<"TransferRequest"> | string
    assetName?: StringWithAggregatesFilter<"TransferRequest"> | string
    requestedBy?: StringWithAggregatesFilter<"TransferRequest"> | string
    requestedByDept?: StringNullableWithAggregatesFilter<"TransferRequest"> | string | null
    currentHolder?: StringNullableWithAggregatesFilter<"TransferRequest"> | string | null
    requestType?: StringWithAggregatesFilter<"TransferRequest"> | string
    targetHolder?: StringNullableWithAggregatesFilter<"TransferRequest"> | string | null
    targetDept?: StringNullableWithAggregatesFilter<"TransferRequest"> | string | null
    reason?: StringWithAggregatesFilter<"TransferRequest"> | string
    status?: StringWithAggregatesFilter<"TransferRequest"> | string
    rejectionReason?: StringNullableWithAggregatesFilter<"TransferRequest"> | string | null
    requestedAt?: StringWithAggregatesFilter<"TransferRequest"> | string
    resolvedAt?: StringNullableWithAggregatesFilter<"TransferRequest"> | string | null
    resolvedBy?: StringNullableWithAggregatesFilter<"TransferRequest"> | string | null
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    resource?: StringFilter<"Booking"> | string
    title?: StringFilter<"Booking"> | string
    timeRange?: StringFilter<"Booking"> | string
    startHour?: IntFilter<"Booking"> | number
    endHour?: IntFilter<"Booking"> | number
    date?: StringFilter<"Booking"> | string
    bookedBy?: StringNullableFilter<"Booking"> | string | null
    bookedByDept?: StringNullableFilter<"Booking"> | string | null
    status?: StringNullableFilter<"Booking"> | string | null
    isConflict?: BoolFilter<"Booking"> | boolean
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    resource?: SortOrder
    title?: SortOrder
    timeRange?: SortOrder
    startHour?: SortOrder
    endHour?: SortOrder
    date?: SortOrder
    bookedBy?: SortOrderInput | SortOrder
    bookedByDept?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    isConflict?: SortOrder
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    resource?: StringFilter<"Booking"> | string
    title?: StringFilter<"Booking"> | string
    timeRange?: StringFilter<"Booking"> | string
    startHour?: IntFilter<"Booking"> | number
    endHour?: IntFilter<"Booking"> | number
    date?: StringFilter<"Booking"> | string
    bookedBy?: StringNullableFilter<"Booking"> | string | null
    bookedByDept?: StringNullableFilter<"Booking"> | string | null
    status?: StringNullableFilter<"Booking"> | string | null
    isConflict?: BoolFilter<"Booking"> | boolean
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    resource?: SortOrder
    title?: SortOrder
    timeRange?: SortOrder
    startHour?: SortOrder
    endHour?: SortOrder
    date?: SortOrder
    bookedBy?: SortOrderInput | SortOrder
    bookedByDept?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    isConflict?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    resource?: StringWithAggregatesFilter<"Booking"> | string
    title?: StringWithAggregatesFilter<"Booking"> | string
    timeRange?: StringWithAggregatesFilter<"Booking"> | string
    startHour?: IntWithAggregatesFilter<"Booking"> | number
    endHour?: IntWithAggregatesFilter<"Booking"> | number
    date?: StringWithAggregatesFilter<"Booking"> | string
    bookedBy?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    bookedByDept?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    status?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    isConflict?: BoolWithAggregatesFilter<"Booking"> | boolean
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    recipientName?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    icon?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    timestamp?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    recipientName?: SortOrder
    title?: SortOrder
    message?: SortOrder
    icon?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
    isRead?: SortOrder
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    recipientName?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    icon?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    timestamp?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    recipientName?: SortOrder
    title?: SortOrder
    message?: SortOrder
    icon?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
    isRead?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    recipientName?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    icon?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    timestamp?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    icon?: StringFilter<"ActivityLog"> | string
    type?: StringFilter<"ActivityLog"> | string
    title?: StringFilter<"ActivityLog"> | string
    description?: StringFilter<"ActivityLog"> | string
    timestamp?: StringFilter<"ActivityLog"> | string
    isAlert?: BoolFilter<"ActivityLog"> | boolean
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    icon?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    timestamp?: SortOrder
    isAlert?: SortOrder
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    icon?: StringFilter<"ActivityLog"> | string
    type?: StringFilter<"ActivityLog"> | string
    title?: StringFilter<"ActivityLog"> | string
    description?: StringFilter<"ActivityLog"> | string
    timestamp?: StringFilter<"ActivityLog"> | string
    isAlert?: BoolFilter<"ActivityLog"> | boolean
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    icon?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    timestamp?: SortOrder
    isAlert?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityLog"> | string
    icon?: StringWithAggregatesFilter<"ActivityLog"> | string
    type?: StringWithAggregatesFilter<"ActivityLog"> | string
    title?: StringWithAggregatesFilter<"ActivityLog"> | string
    description?: StringWithAggregatesFilter<"ActivityLog"> | string
    timestamp?: StringWithAggregatesFilter<"ActivityLog"> | string
    isAlert?: BoolWithAggregatesFilter<"ActivityLog"> | boolean
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    dept?: string | null
    role?: string
    jobTitle?: string | null
    avatar?: string | null
    status?: string
    departments?: DepartmentCreateNestedManyWithoutHeadOfDeptInput
    tickets?: MaintenanceTicketCreateNestedManyWithoutTechnicianInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    dept?: string | null
    role?: string
    jobTitle?: string | null
    avatar?: string | null
    status?: string
    departments?: DepartmentUncheckedCreateNestedManyWithoutHeadOfDeptInput
    tickets?: MaintenanceTicketUncheckedCreateNestedManyWithoutTechnicianInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    dept?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    departments?: DepartmentUpdateManyWithoutHeadOfDeptNestedInput
    tickets?: MaintenanceTicketUpdateManyWithoutTechnicianNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    dept?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    departments?: DepartmentUncheckedUpdateManyWithoutHeadOfDeptNestedInput
    tickets?: MaintenanceTicketUncheckedUpdateManyWithoutTechnicianNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    dept?: string | null
    role?: string
    jobTitle?: string | null
    avatar?: string | null
    status?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    dept?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    dept?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentCreateInput = {
    id?: string
    name: string
    head?: string | null
    headAvatar?: string | null
    parentDept?: string | null
    status?: string
    headOfDept?: UserCreateNestedOneWithoutDepartmentsInput
    assets?: AssetCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: string
    name: string
    head?: string | null
    headAvatar?: string | null
    parentDept?: string | null
    status?: string
    headOfDeptId?: string | null
    assets?: AssetUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    head?: NullableStringFieldUpdateOperationsInput | string | null
    headAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    parentDept?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    headOfDept?: UserUpdateOneWithoutDepartmentsNestedInput
    assets?: AssetUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    head?: NullableStringFieldUpdateOperationsInput | string | null
    headAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    parentDept?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    headOfDeptId?: NullableStringFieldUpdateOperationsInput | string | null
    assets?: AssetUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: string
    name: string
    head?: string | null
    headAvatar?: string | null
    parentDept?: string | null
    status?: string
    headOfDeptId?: string | null
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    head?: NullableStringFieldUpdateOperationsInput | string | null
    headAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    parentDept?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    head?: NullableStringFieldUpdateOperationsInput | string | null
    headAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    parentDept?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    headOfDeptId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssetCreateInput = {
    tag: string
    name: string
    category?: string | null
    status?: string
    location?: string | null
    serial?: string | null
    image?: string | null
    assignee?: string | null
    allocatedTo?: string | null
    allocatedToDept?: string | null
    dueDate?: string | null
    expectedLocation?: string | null
    allocationHistory?: string
    maintenanceHistory?: string
    lastVerified?: string | null
    verificationStatus?: string | null
    department?: DepartmentCreateNestedOneWithoutAssetsInput
    tickets?: MaintenanceTicketCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateInput = {
    tag: string
    name: string
    category?: string | null
    status?: string
    location?: string | null
    serial?: string | null
    image?: string | null
    assignee?: string | null
    allocatedTo?: string | null
    allocatedToDept?: string | null
    dueDate?: string | null
    expectedLocation?: string | null
    allocationHistory?: string
    maintenanceHistory?: string
    lastVerified?: string | null
    verificationStatus?: string | null
    departmentId?: string | null
    tickets?: MaintenanceTicketUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetUpdateInput = {
    tag?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    serial?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedTo?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedToDept?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableStringFieldUpdateOperationsInput | string | null
    expectedLocation?: NullableStringFieldUpdateOperationsInput | string | null
    allocationHistory?: StringFieldUpdateOperationsInput | string
    maintenanceHistory?: StringFieldUpdateOperationsInput | string
    lastVerified?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    department?: DepartmentUpdateOneWithoutAssetsNestedInput
    tickets?: MaintenanceTicketUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateInput = {
    tag?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    serial?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedTo?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedToDept?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableStringFieldUpdateOperationsInput | string | null
    expectedLocation?: NullableStringFieldUpdateOperationsInput | string | null
    allocationHistory?: StringFieldUpdateOperationsInput | string
    maintenanceHistory?: StringFieldUpdateOperationsInput | string
    lastVerified?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: MaintenanceTicketUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetCreateManyInput = {
    tag: string
    name: string
    category?: string | null
    status?: string
    location?: string | null
    serial?: string | null
    image?: string | null
    assignee?: string | null
    allocatedTo?: string | null
    allocatedToDept?: string | null
    dueDate?: string | null
    expectedLocation?: string | null
    allocationHistory?: string
    maintenanceHistory?: string
    lastVerified?: string | null
    verificationStatus?: string | null
    departmentId?: string | null
  }

  export type AssetUpdateManyMutationInput = {
    tag?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    serial?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedTo?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedToDept?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableStringFieldUpdateOperationsInput | string | null
    expectedLocation?: NullableStringFieldUpdateOperationsInput | string | null
    allocationHistory?: StringFieldUpdateOperationsInput | string
    maintenanceHistory?: StringFieldUpdateOperationsInput | string
    lastVerified?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssetUncheckedUpdateManyInput = {
    tag?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    serial?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedTo?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedToDept?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableStringFieldUpdateOperationsInput | string | null
    expectedLocation?: NullableStringFieldUpdateOperationsInput | string | null
    allocationHistory?: StringFieldUpdateOperationsInput | string
    maintenanceHistory?: StringFieldUpdateOperationsInput | string
    lastVerified?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceTicketCreateInput = {
    id?: string
    title?: string | null
    description: string
    priority?: string
    column?: string
    assignee?: string | null
    assigneeAvatar?: string | null
    reportedTime?: string | null
    raisedBy?: string | null
    raisedByDept?: string | null
    rejectedReason?: string | null
    isRejected?: boolean
    createdAt?: Date | string
    asset?: AssetCreateNestedOneWithoutTicketsInput
    technician?: UserCreateNestedOneWithoutTicketsInput
  }

  export type MaintenanceTicketUncheckedCreateInput = {
    id?: string
    assetTag: string
    title?: string | null
    description: string
    priority?: string
    column?: string
    assignee?: string | null
    assigneeAvatar?: string | null
    reportedTime?: string | null
    raisedBy?: string | null
    raisedByDept?: string | null
    rejectedReason?: string | null
    isRejected?: boolean
    technicianId?: string | null
    createdAt?: Date | string
  }

  export type MaintenanceTicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    column?: StringFieldUpdateOperationsInput | string
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    reportedTime?: NullableStringFieldUpdateOperationsInput | string | null
    raisedBy?: NullableStringFieldUpdateOperationsInput | string | null
    raisedByDept?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRejected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneWithoutTicketsNestedInput
    technician?: UserUpdateOneWithoutTicketsNestedInput
  }

  export type MaintenanceTicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetTag?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    column?: StringFieldUpdateOperationsInput | string
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    reportedTime?: NullableStringFieldUpdateOperationsInput | string | null
    raisedBy?: NullableStringFieldUpdateOperationsInput | string | null
    raisedByDept?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRejected?: BoolFieldUpdateOperationsInput | boolean
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceTicketCreateManyInput = {
    id?: string
    assetTag: string
    title?: string | null
    description: string
    priority?: string
    column?: string
    assignee?: string | null
    assigneeAvatar?: string | null
    reportedTime?: string | null
    raisedBy?: string | null
    raisedByDept?: string | null
    rejectedReason?: string | null
    isRejected?: boolean
    technicianId?: string | null
    createdAt?: Date | string
  }

  export type MaintenanceTicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    column?: StringFieldUpdateOperationsInput | string
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    reportedTime?: NullableStringFieldUpdateOperationsInput | string | null
    raisedBy?: NullableStringFieldUpdateOperationsInput | string | null
    raisedByDept?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRejected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceTicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetTag?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    column?: StringFieldUpdateOperationsInput | string
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    reportedTime?: NullableStringFieldUpdateOperationsInput | string | null
    raisedBy?: NullableStringFieldUpdateOperationsInput | string | null
    raisedByDept?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRejected?: BoolFieldUpdateOperationsInput | boolean
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferRequestCreateInput = {
    id?: string
    assetTag: string
    assetName: string
    requestedBy: string
    requestedByDept?: string | null
    currentHolder?: string | null
    requestType: string
    targetHolder?: string | null
    targetDept?: string | null
    reason: string
    status?: string
    rejectionReason?: string | null
    requestedAt: string
    resolvedAt?: string | null
    resolvedBy?: string | null
  }

  export type TransferRequestUncheckedCreateInput = {
    id?: string
    assetTag: string
    assetName: string
    requestedBy: string
    requestedByDept?: string | null
    currentHolder?: string | null
    requestType: string
    targetHolder?: string | null
    targetDept?: string | null
    reason: string
    status?: string
    rejectionReason?: string | null
    requestedAt: string
    resolvedAt?: string | null
    resolvedBy?: string | null
  }

  export type TransferRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetTag?: StringFieldUpdateOperationsInput | string
    assetName?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    requestedByDept?: NullableStringFieldUpdateOperationsInput | string | null
    currentHolder?: NullableStringFieldUpdateOperationsInput | string | null
    requestType?: StringFieldUpdateOperationsInput | string
    targetHolder?: NullableStringFieldUpdateOperationsInput | string | null
    targetDept?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransferRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetTag?: StringFieldUpdateOperationsInput | string
    assetName?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    requestedByDept?: NullableStringFieldUpdateOperationsInput | string | null
    currentHolder?: NullableStringFieldUpdateOperationsInput | string | null
    requestType?: StringFieldUpdateOperationsInput | string
    targetHolder?: NullableStringFieldUpdateOperationsInput | string | null
    targetDept?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransferRequestCreateManyInput = {
    id?: string
    assetTag: string
    assetName: string
    requestedBy: string
    requestedByDept?: string | null
    currentHolder?: string | null
    requestType: string
    targetHolder?: string | null
    targetDept?: string | null
    reason: string
    status?: string
    rejectionReason?: string | null
    requestedAt: string
    resolvedAt?: string | null
    resolvedBy?: string | null
  }

  export type TransferRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetTag?: StringFieldUpdateOperationsInput | string
    assetName?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    requestedByDept?: NullableStringFieldUpdateOperationsInput | string | null
    currentHolder?: NullableStringFieldUpdateOperationsInput | string | null
    requestType?: StringFieldUpdateOperationsInput | string
    targetHolder?: NullableStringFieldUpdateOperationsInput | string | null
    targetDept?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransferRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetTag?: StringFieldUpdateOperationsInput | string
    assetName?: StringFieldUpdateOperationsInput | string
    requestedBy?: StringFieldUpdateOperationsInput | string
    requestedByDept?: NullableStringFieldUpdateOperationsInput | string | null
    currentHolder?: NullableStringFieldUpdateOperationsInput | string | null
    requestType?: StringFieldUpdateOperationsInput | string
    targetHolder?: NullableStringFieldUpdateOperationsInput | string | null
    targetDept?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    requestedAt?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingCreateInput = {
    id?: string
    resource: string
    title: string
    timeRange: string
    startHour: number
    endHour: number
    date: string
    bookedBy?: string | null
    bookedByDept?: string | null
    status?: string | null
    isConflict?: boolean
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    resource: string
    title: string
    timeRange: string
    startHour: number
    endHour: number
    date: string
    bookedBy?: string | null
    bookedByDept?: string | null
    status?: string | null
    isConflict?: boolean
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    timeRange?: StringFieldUpdateOperationsInput | string
    startHour?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    bookedBy?: NullableStringFieldUpdateOperationsInput | string | null
    bookedByDept?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isConflict?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    timeRange?: StringFieldUpdateOperationsInput | string
    startHour?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    bookedBy?: NullableStringFieldUpdateOperationsInput | string | null
    bookedByDept?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isConflict?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookingCreateManyInput = {
    id?: string
    resource: string
    title: string
    timeRange: string
    startHour: number
    endHour: number
    date: string
    bookedBy?: string | null
    bookedByDept?: string | null
    status?: string | null
    isConflict?: boolean
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    timeRange?: StringFieldUpdateOperationsInput | string
    startHour?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    bookedBy?: NullableStringFieldUpdateOperationsInput | string | null
    bookedByDept?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isConflict?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    timeRange?: StringFieldUpdateOperationsInput | string
    startHour?: IntFieldUpdateOperationsInput | number
    endHour?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    bookedBy?: NullableStringFieldUpdateOperationsInput | string | null
    bookedByDept?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    isConflict?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationCreateInput = {
    id?: string
    recipientName: string
    title: string
    message: string
    icon: string
    type: string
    timestamp: string
    isRead?: boolean
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    recipientName: string
    title: string
    message: string
    icon: string
    type: string
    timestamp: string
    isRead?: boolean
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationCreateManyInput = {
    id?: string
    recipientName: string
    title: string
    message: string
    icon: string
    type: string
    timestamp: string
    isRead?: boolean
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActivityLogCreateInput = {
    id?: string
    icon: string
    type: string
    title: string
    description: string
    timestamp: string
    isAlert?: boolean
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    icon: string
    type: string
    title: string
    description: string
    timestamp: string
    isAlert?: boolean
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    isAlert?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    isAlert?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    icon: string
    type: string
    title: string
    description: string
    timestamp: string
    isAlert?: boolean
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    isAlert?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    isAlert?: BoolFieldUpdateOperationsInput | boolean
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DepartmentListRelationFilter = {
    every?: DepartmentWhereInput
    some?: DepartmentWhereInput
    none?: DepartmentWhereInput
  }

  export type MaintenanceTicketListRelationFilter = {
    every?: MaintenanceTicketWhereInput
    some?: MaintenanceTicketWhereInput
    none?: MaintenanceTicketWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DepartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaintenanceTicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    dept?: SortOrder
    role?: SortOrder
    jobTitle?: SortOrder
    avatar?: SortOrder
    status?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    dept?: SortOrder
    role?: SortOrder
    jobTitle?: SortOrder
    avatar?: SortOrder
    status?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    dept?: SortOrder
    role?: SortOrder
    jobTitle?: SortOrder
    avatar?: SortOrder
    status?: SortOrder
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AssetListRelationFilter = {
    every?: AssetWhereInput
    some?: AssetWhereInput
    none?: AssetWhereInput
  }

  export type AssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    head?: SortOrder
    headAvatar?: SortOrder
    parentDept?: SortOrder
    status?: SortOrder
    headOfDeptId?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    head?: SortOrder
    headAvatar?: SortOrder
    parentDept?: SortOrder
    status?: SortOrder
    headOfDeptId?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    head?: SortOrder
    headAvatar?: SortOrder
    parentDept?: SortOrder
    status?: SortOrder
    headOfDeptId?: SortOrder
  }

  export type DepartmentNullableScalarRelationFilter = {
    is?: DepartmentWhereInput | null
    isNot?: DepartmentWhereInput | null
  }

  export type AssetCountOrderByAggregateInput = {
    tag?: SortOrder
    name?: SortOrder
    category?: SortOrder
    status?: SortOrder
    location?: SortOrder
    serial?: SortOrder
    image?: SortOrder
    assignee?: SortOrder
    allocatedTo?: SortOrder
    allocatedToDept?: SortOrder
    dueDate?: SortOrder
    expectedLocation?: SortOrder
    allocationHistory?: SortOrder
    maintenanceHistory?: SortOrder
    lastVerified?: SortOrder
    verificationStatus?: SortOrder
    departmentId?: SortOrder
  }

  export type AssetMaxOrderByAggregateInput = {
    tag?: SortOrder
    name?: SortOrder
    category?: SortOrder
    status?: SortOrder
    location?: SortOrder
    serial?: SortOrder
    image?: SortOrder
    assignee?: SortOrder
    allocatedTo?: SortOrder
    allocatedToDept?: SortOrder
    dueDate?: SortOrder
    expectedLocation?: SortOrder
    allocationHistory?: SortOrder
    maintenanceHistory?: SortOrder
    lastVerified?: SortOrder
    verificationStatus?: SortOrder
    departmentId?: SortOrder
  }

  export type AssetMinOrderByAggregateInput = {
    tag?: SortOrder
    name?: SortOrder
    category?: SortOrder
    status?: SortOrder
    location?: SortOrder
    serial?: SortOrder
    image?: SortOrder
    assignee?: SortOrder
    allocatedTo?: SortOrder
    allocatedToDept?: SortOrder
    dueDate?: SortOrder
    expectedLocation?: SortOrder
    allocationHistory?: SortOrder
    maintenanceHistory?: SortOrder
    lastVerified?: SortOrder
    verificationStatus?: SortOrder
    departmentId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type AssetNullableScalarRelationFilter = {
    is?: AssetWhereInput | null
    isNot?: AssetWhereInput | null
  }

  export type MaintenanceTicketCountOrderByAggregateInput = {
    id?: SortOrder
    assetTag?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    column?: SortOrder
    assignee?: SortOrder
    assigneeAvatar?: SortOrder
    reportedTime?: SortOrder
    raisedBy?: SortOrder
    raisedByDept?: SortOrder
    rejectedReason?: SortOrder
    isRejected?: SortOrder
    technicianId?: SortOrder
    createdAt?: SortOrder
  }

  export type MaintenanceTicketMaxOrderByAggregateInput = {
    id?: SortOrder
    assetTag?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    column?: SortOrder
    assignee?: SortOrder
    assigneeAvatar?: SortOrder
    reportedTime?: SortOrder
    raisedBy?: SortOrder
    raisedByDept?: SortOrder
    rejectedReason?: SortOrder
    isRejected?: SortOrder
    technicianId?: SortOrder
    createdAt?: SortOrder
  }

  export type MaintenanceTicketMinOrderByAggregateInput = {
    id?: SortOrder
    assetTag?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    column?: SortOrder
    assignee?: SortOrder
    assigneeAvatar?: SortOrder
    reportedTime?: SortOrder
    raisedBy?: SortOrder
    raisedByDept?: SortOrder
    rejectedReason?: SortOrder
    isRejected?: SortOrder
    technicianId?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TransferRequestCountOrderByAggregateInput = {
    id?: SortOrder
    assetTag?: SortOrder
    assetName?: SortOrder
    requestedBy?: SortOrder
    requestedByDept?: SortOrder
    currentHolder?: SortOrder
    requestType?: SortOrder
    targetHolder?: SortOrder
    targetDept?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    requestedAt?: SortOrder
    resolvedAt?: SortOrder
    resolvedBy?: SortOrder
  }

  export type TransferRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    assetTag?: SortOrder
    assetName?: SortOrder
    requestedBy?: SortOrder
    requestedByDept?: SortOrder
    currentHolder?: SortOrder
    requestType?: SortOrder
    targetHolder?: SortOrder
    targetDept?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    requestedAt?: SortOrder
    resolvedAt?: SortOrder
    resolvedBy?: SortOrder
  }

  export type TransferRequestMinOrderByAggregateInput = {
    id?: SortOrder
    assetTag?: SortOrder
    assetName?: SortOrder
    requestedBy?: SortOrder
    requestedByDept?: SortOrder
    currentHolder?: SortOrder
    requestType?: SortOrder
    targetHolder?: SortOrder
    targetDept?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    requestedAt?: SortOrder
    resolvedAt?: SortOrder
    resolvedBy?: SortOrder
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

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    resource?: SortOrder
    title?: SortOrder
    timeRange?: SortOrder
    startHour?: SortOrder
    endHour?: SortOrder
    date?: SortOrder
    bookedBy?: SortOrder
    bookedByDept?: SortOrder
    status?: SortOrder
    isConflict?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    startHour?: SortOrder
    endHour?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    resource?: SortOrder
    title?: SortOrder
    timeRange?: SortOrder
    startHour?: SortOrder
    endHour?: SortOrder
    date?: SortOrder
    bookedBy?: SortOrder
    bookedByDept?: SortOrder
    status?: SortOrder
    isConflict?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    resource?: SortOrder
    title?: SortOrder
    timeRange?: SortOrder
    startHour?: SortOrder
    endHour?: SortOrder
    date?: SortOrder
    bookedBy?: SortOrder
    bookedByDept?: SortOrder
    status?: SortOrder
    isConflict?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    startHour?: SortOrder
    endHour?: SortOrder
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

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    recipientName?: SortOrder
    title?: SortOrder
    message?: SortOrder
    icon?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
    isRead?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    recipientName?: SortOrder
    title?: SortOrder
    message?: SortOrder
    icon?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
    isRead?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    recipientName?: SortOrder
    title?: SortOrder
    message?: SortOrder
    icon?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
    isRead?: SortOrder
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    icon?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    timestamp?: SortOrder
    isAlert?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    icon?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    timestamp?: SortOrder
    isAlert?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    icon?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    timestamp?: SortOrder
    isAlert?: SortOrder
  }

  export type DepartmentCreateNestedManyWithoutHeadOfDeptInput = {
    create?: XOR<DepartmentCreateWithoutHeadOfDeptInput, DepartmentUncheckedCreateWithoutHeadOfDeptInput> | DepartmentCreateWithoutHeadOfDeptInput[] | DepartmentUncheckedCreateWithoutHeadOfDeptInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutHeadOfDeptInput | DepartmentCreateOrConnectWithoutHeadOfDeptInput[]
    createMany?: DepartmentCreateManyHeadOfDeptInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type MaintenanceTicketCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<MaintenanceTicketCreateWithoutTechnicianInput, MaintenanceTicketUncheckedCreateWithoutTechnicianInput> | MaintenanceTicketCreateWithoutTechnicianInput[] | MaintenanceTicketUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: MaintenanceTicketCreateOrConnectWithoutTechnicianInput | MaintenanceTicketCreateOrConnectWithoutTechnicianInput[]
    createMany?: MaintenanceTicketCreateManyTechnicianInputEnvelope
    connect?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
  }

  export type DepartmentUncheckedCreateNestedManyWithoutHeadOfDeptInput = {
    create?: XOR<DepartmentCreateWithoutHeadOfDeptInput, DepartmentUncheckedCreateWithoutHeadOfDeptInput> | DepartmentCreateWithoutHeadOfDeptInput[] | DepartmentUncheckedCreateWithoutHeadOfDeptInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutHeadOfDeptInput | DepartmentCreateOrConnectWithoutHeadOfDeptInput[]
    createMany?: DepartmentCreateManyHeadOfDeptInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type MaintenanceTicketUncheckedCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<MaintenanceTicketCreateWithoutTechnicianInput, MaintenanceTicketUncheckedCreateWithoutTechnicianInput> | MaintenanceTicketCreateWithoutTechnicianInput[] | MaintenanceTicketUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: MaintenanceTicketCreateOrConnectWithoutTechnicianInput | MaintenanceTicketCreateOrConnectWithoutTechnicianInput[]
    createMany?: MaintenanceTicketCreateManyTechnicianInputEnvelope
    connect?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DepartmentUpdateManyWithoutHeadOfDeptNestedInput = {
    create?: XOR<DepartmentCreateWithoutHeadOfDeptInput, DepartmentUncheckedCreateWithoutHeadOfDeptInput> | DepartmentCreateWithoutHeadOfDeptInput[] | DepartmentUncheckedCreateWithoutHeadOfDeptInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutHeadOfDeptInput | DepartmentCreateOrConnectWithoutHeadOfDeptInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutHeadOfDeptInput | DepartmentUpsertWithWhereUniqueWithoutHeadOfDeptInput[]
    createMany?: DepartmentCreateManyHeadOfDeptInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutHeadOfDeptInput | DepartmentUpdateWithWhereUniqueWithoutHeadOfDeptInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutHeadOfDeptInput | DepartmentUpdateManyWithWhereWithoutHeadOfDeptInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type MaintenanceTicketUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<MaintenanceTicketCreateWithoutTechnicianInput, MaintenanceTicketUncheckedCreateWithoutTechnicianInput> | MaintenanceTicketCreateWithoutTechnicianInput[] | MaintenanceTicketUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: MaintenanceTicketCreateOrConnectWithoutTechnicianInput | MaintenanceTicketCreateOrConnectWithoutTechnicianInput[]
    upsert?: MaintenanceTicketUpsertWithWhereUniqueWithoutTechnicianInput | MaintenanceTicketUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: MaintenanceTicketCreateManyTechnicianInputEnvelope
    set?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    disconnect?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    delete?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    connect?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    update?: MaintenanceTicketUpdateWithWhereUniqueWithoutTechnicianInput | MaintenanceTicketUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: MaintenanceTicketUpdateManyWithWhereWithoutTechnicianInput | MaintenanceTicketUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: MaintenanceTicketScalarWhereInput | MaintenanceTicketScalarWhereInput[]
  }

  export type DepartmentUncheckedUpdateManyWithoutHeadOfDeptNestedInput = {
    create?: XOR<DepartmentCreateWithoutHeadOfDeptInput, DepartmentUncheckedCreateWithoutHeadOfDeptInput> | DepartmentCreateWithoutHeadOfDeptInput[] | DepartmentUncheckedCreateWithoutHeadOfDeptInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutHeadOfDeptInput | DepartmentCreateOrConnectWithoutHeadOfDeptInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutHeadOfDeptInput | DepartmentUpsertWithWhereUniqueWithoutHeadOfDeptInput[]
    createMany?: DepartmentCreateManyHeadOfDeptInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutHeadOfDeptInput | DepartmentUpdateWithWhereUniqueWithoutHeadOfDeptInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutHeadOfDeptInput | DepartmentUpdateManyWithWhereWithoutHeadOfDeptInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type MaintenanceTicketUncheckedUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<MaintenanceTicketCreateWithoutTechnicianInput, MaintenanceTicketUncheckedCreateWithoutTechnicianInput> | MaintenanceTicketCreateWithoutTechnicianInput[] | MaintenanceTicketUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: MaintenanceTicketCreateOrConnectWithoutTechnicianInput | MaintenanceTicketCreateOrConnectWithoutTechnicianInput[]
    upsert?: MaintenanceTicketUpsertWithWhereUniqueWithoutTechnicianInput | MaintenanceTicketUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: MaintenanceTicketCreateManyTechnicianInputEnvelope
    set?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    disconnect?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    delete?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    connect?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    update?: MaintenanceTicketUpdateWithWhereUniqueWithoutTechnicianInput | MaintenanceTicketUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: MaintenanceTicketUpdateManyWithWhereWithoutTechnicianInput | MaintenanceTicketUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: MaintenanceTicketScalarWhereInput | MaintenanceTicketScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDepartmentsInput = {
    create?: XOR<UserCreateWithoutDepartmentsInput, UserUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentsInput
    connect?: UserWhereUniqueInput
  }

  export type AssetCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<AssetCreateWithoutDepartmentInput, AssetUncheckedCreateWithoutDepartmentInput> | AssetCreateWithoutDepartmentInput[] | AssetUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutDepartmentInput | AssetCreateOrConnectWithoutDepartmentInput[]
    createMany?: AssetCreateManyDepartmentInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type AssetUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<AssetCreateWithoutDepartmentInput, AssetUncheckedCreateWithoutDepartmentInput> | AssetCreateWithoutDepartmentInput[] | AssetUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutDepartmentInput | AssetCreateOrConnectWithoutDepartmentInput[]
    createMany?: AssetCreateManyDepartmentInputEnvelope
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutDepartmentsNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentsInput, UserUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentsInput
    upsert?: UserUpsertWithoutDepartmentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDepartmentsInput, UserUpdateWithoutDepartmentsInput>, UserUncheckedUpdateWithoutDepartmentsInput>
  }

  export type AssetUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<AssetCreateWithoutDepartmentInput, AssetUncheckedCreateWithoutDepartmentInput> | AssetCreateWithoutDepartmentInput[] | AssetUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutDepartmentInput | AssetCreateOrConnectWithoutDepartmentInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutDepartmentInput | AssetUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: AssetCreateManyDepartmentInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutDepartmentInput | AssetUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutDepartmentInput | AssetUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type AssetUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<AssetCreateWithoutDepartmentInput, AssetUncheckedCreateWithoutDepartmentInput> | AssetCreateWithoutDepartmentInput[] | AssetUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: AssetCreateOrConnectWithoutDepartmentInput | AssetCreateOrConnectWithoutDepartmentInput[]
    upsert?: AssetUpsertWithWhereUniqueWithoutDepartmentInput | AssetUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: AssetCreateManyDepartmentInputEnvelope
    set?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    disconnect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    delete?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    connect?: AssetWhereUniqueInput | AssetWhereUniqueInput[]
    update?: AssetUpdateWithWhereUniqueWithoutDepartmentInput | AssetUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: AssetUpdateManyWithWhereWithoutDepartmentInput | AssetUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: AssetScalarWhereInput | AssetScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutAssetsInput = {
    create?: XOR<DepartmentCreateWithoutAssetsInput, DepartmentUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutAssetsInput
    connect?: DepartmentWhereUniqueInput
  }

  export type MaintenanceTicketCreateNestedManyWithoutAssetInput = {
    create?: XOR<MaintenanceTicketCreateWithoutAssetInput, MaintenanceTicketUncheckedCreateWithoutAssetInput> | MaintenanceTicketCreateWithoutAssetInput[] | MaintenanceTicketUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: MaintenanceTicketCreateOrConnectWithoutAssetInput | MaintenanceTicketCreateOrConnectWithoutAssetInput[]
    createMany?: MaintenanceTicketCreateManyAssetInputEnvelope
    connect?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
  }

  export type MaintenanceTicketUncheckedCreateNestedManyWithoutAssetInput = {
    create?: XOR<MaintenanceTicketCreateWithoutAssetInput, MaintenanceTicketUncheckedCreateWithoutAssetInput> | MaintenanceTicketCreateWithoutAssetInput[] | MaintenanceTicketUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: MaintenanceTicketCreateOrConnectWithoutAssetInput | MaintenanceTicketCreateOrConnectWithoutAssetInput[]
    createMany?: MaintenanceTicketCreateManyAssetInputEnvelope
    connect?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
  }

  export type DepartmentUpdateOneWithoutAssetsNestedInput = {
    create?: XOR<DepartmentCreateWithoutAssetsInput, DepartmentUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutAssetsInput
    upsert?: DepartmentUpsertWithoutAssetsInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutAssetsInput, DepartmentUpdateWithoutAssetsInput>, DepartmentUncheckedUpdateWithoutAssetsInput>
  }

  export type MaintenanceTicketUpdateManyWithoutAssetNestedInput = {
    create?: XOR<MaintenanceTicketCreateWithoutAssetInput, MaintenanceTicketUncheckedCreateWithoutAssetInput> | MaintenanceTicketCreateWithoutAssetInput[] | MaintenanceTicketUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: MaintenanceTicketCreateOrConnectWithoutAssetInput | MaintenanceTicketCreateOrConnectWithoutAssetInput[]
    upsert?: MaintenanceTicketUpsertWithWhereUniqueWithoutAssetInput | MaintenanceTicketUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: MaintenanceTicketCreateManyAssetInputEnvelope
    set?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    disconnect?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    delete?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    connect?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    update?: MaintenanceTicketUpdateWithWhereUniqueWithoutAssetInput | MaintenanceTicketUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: MaintenanceTicketUpdateManyWithWhereWithoutAssetInput | MaintenanceTicketUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: MaintenanceTicketScalarWhereInput | MaintenanceTicketScalarWhereInput[]
  }

  export type MaintenanceTicketUncheckedUpdateManyWithoutAssetNestedInput = {
    create?: XOR<MaintenanceTicketCreateWithoutAssetInput, MaintenanceTicketUncheckedCreateWithoutAssetInput> | MaintenanceTicketCreateWithoutAssetInput[] | MaintenanceTicketUncheckedCreateWithoutAssetInput[]
    connectOrCreate?: MaintenanceTicketCreateOrConnectWithoutAssetInput | MaintenanceTicketCreateOrConnectWithoutAssetInput[]
    upsert?: MaintenanceTicketUpsertWithWhereUniqueWithoutAssetInput | MaintenanceTicketUpsertWithWhereUniqueWithoutAssetInput[]
    createMany?: MaintenanceTicketCreateManyAssetInputEnvelope
    set?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    disconnect?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    delete?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    connect?: MaintenanceTicketWhereUniqueInput | MaintenanceTicketWhereUniqueInput[]
    update?: MaintenanceTicketUpdateWithWhereUniqueWithoutAssetInput | MaintenanceTicketUpdateWithWhereUniqueWithoutAssetInput[]
    updateMany?: MaintenanceTicketUpdateManyWithWhereWithoutAssetInput | MaintenanceTicketUpdateManyWithWhereWithoutAssetInput[]
    deleteMany?: MaintenanceTicketScalarWhereInput | MaintenanceTicketScalarWhereInput[]
  }

  export type AssetCreateNestedOneWithoutTicketsInput = {
    create?: XOR<AssetCreateWithoutTicketsInput, AssetUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutTicketsInput
    connect?: AssetWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTicketsInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AssetUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<AssetCreateWithoutTicketsInput, AssetUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: AssetCreateOrConnectWithoutTicketsInput
    upsert?: AssetUpsertWithoutTicketsInput
    disconnect?: AssetWhereInput | boolean
    delete?: AssetWhereInput | boolean
    connect?: AssetWhereUniqueInput
    update?: XOR<XOR<AssetUpdateToOneWithWhereWithoutTicketsInput, AssetUpdateWithoutTicketsInput>, AssetUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    upsert?: UserUpsertWithoutTicketsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketsInput, UserUpdateWithoutTicketsInput>, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DepartmentCreateWithoutHeadOfDeptInput = {
    id?: string
    name: string
    head?: string | null
    headAvatar?: string | null
    parentDept?: string | null
    status?: string
    assets?: AssetCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutHeadOfDeptInput = {
    id?: string
    name: string
    head?: string | null
    headAvatar?: string | null
    parentDept?: string | null
    status?: string
    assets?: AssetUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutHeadOfDeptInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutHeadOfDeptInput, DepartmentUncheckedCreateWithoutHeadOfDeptInput>
  }

  export type DepartmentCreateManyHeadOfDeptInputEnvelope = {
    data: DepartmentCreateManyHeadOfDeptInput | DepartmentCreateManyHeadOfDeptInput[]
  }

  export type MaintenanceTicketCreateWithoutTechnicianInput = {
    id?: string
    title?: string | null
    description: string
    priority?: string
    column?: string
    assignee?: string | null
    assigneeAvatar?: string | null
    reportedTime?: string | null
    raisedBy?: string | null
    raisedByDept?: string | null
    rejectedReason?: string | null
    isRejected?: boolean
    createdAt?: Date | string
    asset?: AssetCreateNestedOneWithoutTicketsInput
  }

  export type MaintenanceTicketUncheckedCreateWithoutTechnicianInput = {
    id?: string
    assetTag: string
    title?: string | null
    description: string
    priority?: string
    column?: string
    assignee?: string | null
    assigneeAvatar?: string | null
    reportedTime?: string | null
    raisedBy?: string | null
    raisedByDept?: string | null
    rejectedReason?: string | null
    isRejected?: boolean
    createdAt?: Date | string
  }

  export type MaintenanceTicketCreateOrConnectWithoutTechnicianInput = {
    where: MaintenanceTicketWhereUniqueInput
    create: XOR<MaintenanceTicketCreateWithoutTechnicianInput, MaintenanceTicketUncheckedCreateWithoutTechnicianInput>
  }

  export type MaintenanceTicketCreateManyTechnicianInputEnvelope = {
    data: MaintenanceTicketCreateManyTechnicianInput | MaintenanceTicketCreateManyTechnicianInput[]
  }

  export type DepartmentUpsertWithWhereUniqueWithoutHeadOfDeptInput = {
    where: DepartmentWhereUniqueInput
    update: XOR<DepartmentUpdateWithoutHeadOfDeptInput, DepartmentUncheckedUpdateWithoutHeadOfDeptInput>
    create: XOR<DepartmentCreateWithoutHeadOfDeptInput, DepartmentUncheckedCreateWithoutHeadOfDeptInput>
  }

  export type DepartmentUpdateWithWhereUniqueWithoutHeadOfDeptInput = {
    where: DepartmentWhereUniqueInput
    data: XOR<DepartmentUpdateWithoutHeadOfDeptInput, DepartmentUncheckedUpdateWithoutHeadOfDeptInput>
  }

  export type DepartmentUpdateManyWithWhereWithoutHeadOfDeptInput = {
    where: DepartmentScalarWhereInput
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyWithoutHeadOfDeptInput>
  }

  export type DepartmentScalarWhereInput = {
    AND?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    OR?: DepartmentScalarWhereInput[]
    NOT?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    head?: StringNullableFilter<"Department"> | string | null
    headAvatar?: StringNullableFilter<"Department"> | string | null
    parentDept?: StringNullableFilter<"Department"> | string | null
    status?: StringFilter<"Department"> | string
    headOfDeptId?: StringNullableFilter<"Department"> | string | null
  }

  export type MaintenanceTicketUpsertWithWhereUniqueWithoutTechnicianInput = {
    where: MaintenanceTicketWhereUniqueInput
    update: XOR<MaintenanceTicketUpdateWithoutTechnicianInput, MaintenanceTicketUncheckedUpdateWithoutTechnicianInput>
    create: XOR<MaintenanceTicketCreateWithoutTechnicianInput, MaintenanceTicketUncheckedCreateWithoutTechnicianInput>
  }

  export type MaintenanceTicketUpdateWithWhereUniqueWithoutTechnicianInput = {
    where: MaintenanceTicketWhereUniqueInput
    data: XOR<MaintenanceTicketUpdateWithoutTechnicianInput, MaintenanceTicketUncheckedUpdateWithoutTechnicianInput>
  }

  export type MaintenanceTicketUpdateManyWithWhereWithoutTechnicianInput = {
    where: MaintenanceTicketScalarWhereInput
    data: XOR<MaintenanceTicketUpdateManyMutationInput, MaintenanceTicketUncheckedUpdateManyWithoutTechnicianInput>
  }

  export type MaintenanceTicketScalarWhereInput = {
    AND?: MaintenanceTicketScalarWhereInput | MaintenanceTicketScalarWhereInput[]
    OR?: MaintenanceTicketScalarWhereInput[]
    NOT?: MaintenanceTicketScalarWhereInput | MaintenanceTicketScalarWhereInput[]
    id?: StringFilter<"MaintenanceTicket"> | string
    assetTag?: StringFilter<"MaintenanceTicket"> | string
    title?: StringNullableFilter<"MaintenanceTicket"> | string | null
    description?: StringFilter<"MaintenanceTicket"> | string
    priority?: StringFilter<"MaintenanceTicket"> | string
    column?: StringFilter<"MaintenanceTicket"> | string
    assignee?: StringNullableFilter<"MaintenanceTicket"> | string | null
    assigneeAvatar?: StringNullableFilter<"MaintenanceTicket"> | string | null
    reportedTime?: StringNullableFilter<"MaintenanceTicket"> | string | null
    raisedBy?: StringNullableFilter<"MaintenanceTicket"> | string | null
    raisedByDept?: StringNullableFilter<"MaintenanceTicket"> | string | null
    rejectedReason?: StringNullableFilter<"MaintenanceTicket"> | string | null
    isRejected?: BoolFilter<"MaintenanceTicket"> | boolean
    technicianId?: StringNullableFilter<"MaintenanceTicket"> | string | null
    createdAt?: DateTimeFilter<"MaintenanceTicket"> | Date | string
  }

  export type UserCreateWithoutDepartmentsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    dept?: string | null
    role?: string
    jobTitle?: string | null
    avatar?: string | null
    status?: string
    tickets?: MaintenanceTicketCreateNestedManyWithoutTechnicianInput
  }

  export type UserUncheckedCreateWithoutDepartmentsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    dept?: string | null
    role?: string
    jobTitle?: string | null
    avatar?: string | null
    status?: string
    tickets?: MaintenanceTicketUncheckedCreateNestedManyWithoutTechnicianInput
  }

  export type UserCreateOrConnectWithoutDepartmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepartmentsInput, UserUncheckedCreateWithoutDepartmentsInput>
  }

  export type AssetCreateWithoutDepartmentInput = {
    tag: string
    name: string
    category?: string | null
    status?: string
    location?: string | null
    serial?: string | null
    image?: string | null
    assignee?: string | null
    allocatedTo?: string | null
    allocatedToDept?: string | null
    dueDate?: string | null
    expectedLocation?: string | null
    allocationHistory?: string
    maintenanceHistory?: string
    lastVerified?: string | null
    verificationStatus?: string | null
    tickets?: MaintenanceTicketCreateNestedManyWithoutAssetInput
  }

  export type AssetUncheckedCreateWithoutDepartmentInput = {
    tag: string
    name: string
    category?: string | null
    status?: string
    location?: string | null
    serial?: string | null
    image?: string | null
    assignee?: string | null
    allocatedTo?: string | null
    allocatedToDept?: string | null
    dueDate?: string | null
    expectedLocation?: string | null
    allocationHistory?: string
    maintenanceHistory?: string
    lastVerified?: string | null
    verificationStatus?: string | null
    tickets?: MaintenanceTicketUncheckedCreateNestedManyWithoutAssetInput
  }

  export type AssetCreateOrConnectWithoutDepartmentInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutDepartmentInput, AssetUncheckedCreateWithoutDepartmentInput>
  }

  export type AssetCreateManyDepartmentInputEnvelope = {
    data: AssetCreateManyDepartmentInput | AssetCreateManyDepartmentInput[]
  }

  export type UserUpsertWithoutDepartmentsInput = {
    update: XOR<UserUpdateWithoutDepartmentsInput, UserUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<UserCreateWithoutDepartmentsInput, UserUncheckedCreateWithoutDepartmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDepartmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDepartmentsInput, UserUncheckedUpdateWithoutDepartmentsInput>
  }

  export type UserUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    dept?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    tickets?: MaintenanceTicketUpdateManyWithoutTechnicianNestedInput
  }

  export type UserUncheckedUpdateWithoutDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    dept?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    tickets?: MaintenanceTicketUncheckedUpdateManyWithoutTechnicianNestedInput
  }

  export type AssetUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: AssetWhereUniqueInput
    update: XOR<AssetUpdateWithoutDepartmentInput, AssetUncheckedUpdateWithoutDepartmentInput>
    create: XOR<AssetCreateWithoutDepartmentInput, AssetUncheckedCreateWithoutDepartmentInput>
  }

  export type AssetUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: AssetWhereUniqueInput
    data: XOR<AssetUpdateWithoutDepartmentInput, AssetUncheckedUpdateWithoutDepartmentInput>
  }

  export type AssetUpdateManyWithWhereWithoutDepartmentInput = {
    where: AssetScalarWhereInput
    data: XOR<AssetUpdateManyMutationInput, AssetUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type AssetScalarWhereInput = {
    AND?: AssetScalarWhereInput | AssetScalarWhereInput[]
    OR?: AssetScalarWhereInput[]
    NOT?: AssetScalarWhereInput | AssetScalarWhereInput[]
    tag?: StringFilter<"Asset"> | string
    name?: StringFilter<"Asset"> | string
    category?: StringNullableFilter<"Asset"> | string | null
    status?: StringFilter<"Asset"> | string
    location?: StringNullableFilter<"Asset"> | string | null
    serial?: StringNullableFilter<"Asset"> | string | null
    image?: StringNullableFilter<"Asset"> | string | null
    assignee?: StringNullableFilter<"Asset"> | string | null
    allocatedTo?: StringNullableFilter<"Asset"> | string | null
    allocatedToDept?: StringNullableFilter<"Asset"> | string | null
    dueDate?: StringNullableFilter<"Asset"> | string | null
    expectedLocation?: StringNullableFilter<"Asset"> | string | null
    allocationHistory?: StringFilter<"Asset"> | string
    maintenanceHistory?: StringFilter<"Asset"> | string
    lastVerified?: StringNullableFilter<"Asset"> | string | null
    verificationStatus?: StringNullableFilter<"Asset"> | string | null
    departmentId?: StringNullableFilter<"Asset"> | string | null
  }

  export type DepartmentCreateWithoutAssetsInput = {
    id?: string
    name: string
    head?: string | null
    headAvatar?: string | null
    parentDept?: string | null
    status?: string
    headOfDept?: UserCreateNestedOneWithoutDepartmentsInput
  }

  export type DepartmentUncheckedCreateWithoutAssetsInput = {
    id?: string
    name: string
    head?: string | null
    headAvatar?: string | null
    parentDept?: string | null
    status?: string
    headOfDeptId?: string | null
  }

  export type DepartmentCreateOrConnectWithoutAssetsInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutAssetsInput, DepartmentUncheckedCreateWithoutAssetsInput>
  }

  export type MaintenanceTicketCreateWithoutAssetInput = {
    id?: string
    title?: string | null
    description: string
    priority?: string
    column?: string
    assignee?: string | null
    assigneeAvatar?: string | null
    reportedTime?: string | null
    raisedBy?: string | null
    raisedByDept?: string | null
    rejectedReason?: string | null
    isRejected?: boolean
    createdAt?: Date | string
    technician?: UserCreateNestedOneWithoutTicketsInput
  }

  export type MaintenanceTicketUncheckedCreateWithoutAssetInput = {
    id?: string
    title?: string | null
    description: string
    priority?: string
    column?: string
    assignee?: string | null
    assigneeAvatar?: string | null
    reportedTime?: string | null
    raisedBy?: string | null
    raisedByDept?: string | null
    rejectedReason?: string | null
    isRejected?: boolean
    technicianId?: string | null
    createdAt?: Date | string
  }

  export type MaintenanceTicketCreateOrConnectWithoutAssetInput = {
    where: MaintenanceTicketWhereUniqueInput
    create: XOR<MaintenanceTicketCreateWithoutAssetInput, MaintenanceTicketUncheckedCreateWithoutAssetInput>
  }

  export type MaintenanceTicketCreateManyAssetInputEnvelope = {
    data: MaintenanceTicketCreateManyAssetInput | MaintenanceTicketCreateManyAssetInput[]
  }

  export type DepartmentUpsertWithoutAssetsInput = {
    update: XOR<DepartmentUpdateWithoutAssetsInput, DepartmentUncheckedUpdateWithoutAssetsInput>
    create: XOR<DepartmentCreateWithoutAssetsInput, DepartmentUncheckedCreateWithoutAssetsInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutAssetsInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutAssetsInput, DepartmentUncheckedUpdateWithoutAssetsInput>
  }

  export type DepartmentUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    head?: NullableStringFieldUpdateOperationsInput | string | null
    headAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    parentDept?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    headOfDept?: UserUpdateOneWithoutDepartmentsNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    head?: NullableStringFieldUpdateOperationsInput | string | null
    headAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    parentDept?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    headOfDeptId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceTicketUpsertWithWhereUniqueWithoutAssetInput = {
    where: MaintenanceTicketWhereUniqueInput
    update: XOR<MaintenanceTicketUpdateWithoutAssetInput, MaintenanceTicketUncheckedUpdateWithoutAssetInput>
    create: XOR<MaintenanceTicketCreateWithoutAssetInput, MaintenanceTicketUncheckedCreateWithoutAssetInput>
  }

  export type MaintenanceTicketUpdateWithWhereUniqueWithoutAssetInput = {
    where: MaintenanceTicketWhereUniqueInput
    data: XOR<MaintenanceTicketUpdateWithoutAssetInput, MaintenanceTicketUncheckedUpdateWithoutAssetInput>
  }

  export type MaintenanceTicketUpdateManyWithWhereWithoutAssetInput = {
    where: MaintenanceTicketScalarWhereInput
    data: XOR<MaintenanceTicketUpdateManyMutationInput, MaintenanceTicketUncheckedUpdateManyWithoutAssetInput>
  }

  export type AssetCreateWithoutTicketsInput = {
    tag: string
    name: string
    category?: string | null
    status?: string
    location?: string | null
    serial?: string | null
    image?: string | null
    assignee?: string | null
    allocatedTo?: string | null
    allocatedToDept?: string | null
    dueDate?: string | null
    expectedLocation?: string | null
    allocationHistory?: string
    maintenanceHistory?: string
    lastVerified?: string | null
    verificationStatus?: string | null
    department?: DepartmentCreateNestedOneWithoutAssetsInput
  }

  export type AssetUncheckedCreateWithoutTicketsInput = {
    tag: string
    name: string
    category?: string | null
    status?: string
    location?: string | null
    serial?: string | null
    image?: string | null
    assignee?: string | null
    allocatedTo?: string | null
    allocatedToDept?: string | null
    dueDate?: string | null
    expectedLocation?: string | null
    allocationHistory?: string
    maintenanceHistory?: string
    lastVerified?: string | null
    verificationStatus?: string | null
    departmentId?: string | null
  }

  export type AssetCreateOrConnectWithoutTicketsInput = {
    where: AssetWhereUniqueInput
    create: XOR<AssetCreateWithoutTicketsInput, AssetUncheckedCreateWithoutTicketsInput>
  }

  export type UserCreateWithoutTicketsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    dept?: string | null
    role?: string
    jobTitle?: string | null
    avatar?: string | null
    status?: string
    departments?: DepartmentCreateNestedManyWithoutHeadOfDeptInput
  }

  export type UserUncheckedCreateWithoutTicketsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    dept?: string | null
    role?: string
    jobTitle?: string | null
    avatar?: string | null
    status?: string
    departments?: DepartmentUncheckedCreateNestedManyWithoutHeadOfDeptInput
  }

  export type UserCreateOrConnectWithoutTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
  }

  export type AssetUpsertWithoutTicketsInput = {
    update: XOR<AssetUpdateWithoutTicketsInput, AssetUncheckedUpdateWithoutTicketsInput>
    create: XOR<AssetCreateWithoutTicketsInput, AssetUncheckedCreateWithoutTicketsInput>
    where?: AssetWhereInput
  }

  export type AssetUpdateToOneWithWhereWithoutTicketsInput = {
    where?: AssetWhereInput
    data: XOR<AssetUpdateWithoutTicketsInput, AssetUncheckedUpdateWithoutTicketsInput>
  }

  export type AssetUpdateWithoutTicketsInput = {
    tag?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    serial?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedTo?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedToDept?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableStringFieldUpdateOperationsInput | string | null
    expectedLocation?: NullableStringFieldUpdateOperationsInput | string | null
    allocationHistory?: StringFieldUpdateOperationsInput | string
    maintenanceHistory?: StringFieldUpdateOperationsInput | string
    lastVerified?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    department?: DepartmentUpdateOneWithoutAssetsNestedInput
  }

  export type AssetUncheckedUpdateWithoutTicketsInput = {
    tag?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    serial?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedTo?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedToDept?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableStringFieldUpdateOperationsInput | string | null
    expectedLocation?: NullableStringFieldUpdateOperationsInput | string | null
    allocationHistory?: StringFieldUpdateOperationsInput | string
    maintenanceHistory?: StringFieldUpdateOperationsInput | string
    lastVerified?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutTicketsInput = {
    update: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    dept?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    departments?: DepartmentUpdateManyWithoutHeadOfDeptNestedInput
  }

  export type UserUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    dept?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    departments?: DepartmentUncheckedUpdateManyWithoutHeadOfDeptNestedInput
  }

  export type DepartmentCreateManyHeadOfDeptInput = {
    id?: string
    name: string
    head?: string | null
    headAvatar?: string | null
    parentDept?: string | null
    status?: string
  }

  export type MaintenanceTicketCreateManyTechnicianInput = {
    id?: string
    assetTag: string
    title?: string | null
    description: string
    priority?: string
    column?: string
    assignee?: string | null
    assigneeAvatar?: string | null
    reportedTime?: string | null
    raisedBy?: string | null
    raisedByDept?: string | null
    rejectedReason?: string | null
    isRejected?: boolean
    createdAt?: Date | string
  }

  export type DepartmentUpdateWithoutHeadOfDeptInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    head?: NullableStringFieldUpdateOperationsInput | string | null
    headAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    parentDept?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assets?: AssetUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutHeadOfDeptInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    head?: NullableStringFieldUpdateOperationsInput | string | null
    headAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    parentDept?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assets?: AssetUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateManyWithoutHeadOfDeptInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    head?: NullableStringFieldUpdateOperationsInput | string | null
    headAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    parentDept?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type MaintenanceTicketUpdateWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    column?: StringFieldUpdateOperationsInput | string
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    reportedTime?: NullableStringFieldUpdateOperationsInput | string | null
    raisedBy?: NullableStringFieldUpdateOperationsInput | string | null
    raisedByDept?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRejected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asset?: AssetUpdateOneWithoutTicketsNestedInput
  }

  export type MaintenanceTicketUncheckedUpdateWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetTag?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    column?: StringFieldUpdateOperationsInput | string
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    reportedTime?: NullableStringFieldUpdateOperationsInput | string | null
    raisedBy?: NullableStringFieldUpdateOperationsInput | string | null
    raisedByDept?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRejected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceTicketUncheckedUpdateManyWithoutTechnicianInput = {
    id?: StringFieldUpdateOperationsInput | string
    assetTag?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    column?: StringFieldUpdateOperationsInput | string
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    reportedTime?: NullableStringFieldUpdateOperationsInput | string | null
    raisedBy?: NullableStringFieldUpdateOperationsInput | string | null
    raisedByDept?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRejected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssetCreateManyDepartmentInput = {
    tag: string
    name: string
    category?: string | null
    status?: string
    location?: string | null
    serial?: string | null
    image?: string | null
    assignee?: string | null
    allocatedTo?: string | null
    allocatedToDept?: string | null
    dueDate?: string | null
    expectedLocation?: string | null
    allocationHistory?: string
    maintenanceHistory?: string
    lastVerified?: string | null
    verificationStatus?: string | null
  }

  export type AssetUpdateWithoutDepartmentInput = {
    tag?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    serial?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedTo?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedToDept?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableStringFieldUpdateOperationsInput | string | null
    expectedLocation?: NullableStringFieldUpdateOperationsInput | string | null
    allocationHistory?: StringFieldUpdateOperationsInput | string
    maintenanceHistory?: StringFieldUpdateOperationsInput | string
    lastVerified?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: MaintenanceTicketUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateWithoutDepartmentInput = {
    tag?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    serial?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedTo?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedToDept?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableStringFieldUpdateOperationsInput | string | null
    expectedLocation?: NullableStringFieldUpdateOperationsInput | string | null
    allocationHistory?: StringFieldUpdateOperationsInput | string
    maintenanceHistory?: StringFieldUpdateOperationsInput | string
    lastVerified?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: MaintenanceTicketUncheckedUpdateManyWithoutAssetNestedInput
  }

  export type AssetUncheckedUpdateManyWithoutDepartmentInput = {
    tag?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    serial?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedTo?: NullableStringFieldUpdateOperationsInput | string | null
    allocatedToDept?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableStringFieldUpdateOperationsInput | string | null
    expectedLocation?: NullableStringFieldUpdateOperationsInput | string | null
    allocationHistory?: StringFieldUpdateOperationsInput | string
    maintenanceHistory?: StringFieldUpdateOperationsInput | string
    lastVerified?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceTicketCreateManyAssetInput = {
    id?: string
    title?: string | null
    description: string
    priority?: string
    column?: string
    assignee?: string | null
    assigneeAvatar?: string | null
    reportedTime?: string | null
    raisedBy?: string | null
    raisedByDept?: string | null
    rejectedReason?: string | null
    isRejected?: boolean
    technicianId?: string | null
    createdAt?: Date | string
  }

  export type MaintenanceTicketUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    column?: StringFieldUpdateOperationsInput | string
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    reportedTime?: NullableStringFieldUpdateOperationsInput | string | null
    raisedBy?: NullableStringFieldUpdateOperationsInput | string | null
    raisedByDept?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRejected?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technician?: UserUpdateOneWithoutTicketsNestedInput
  }

  export type MaintenanceTicketUncheckedUpdateWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    column?: StringFieldUpdateOperationsInput | string
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    reportedTime?: NullableStringFieldUpdateOperationsInput | string | null
    raisedBy?: NullableStringFieldUpdateOperationsInput | string | null
    raisedByDept?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRejected?: BoolFieldUpdateOperationsInput | boolean
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceTicketUncheckedUpdateManyWithoutAssetInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    column?: StringFieldUpdateOperationsInput | string
    assignee?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    reportedTime?: NullableStringFieldUpdateOperationsInput | string | null
    raisedBy?: NullableStringFieldUpdateOperationsInput | string | null
    raisedByDept?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    isRejected?: BoolFieldUpdateOperationsInput | boolean
    technicianId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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