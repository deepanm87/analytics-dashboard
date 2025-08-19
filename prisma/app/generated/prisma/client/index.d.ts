
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
 * Model Analytics
 * 
 */
export type Analytics = $Result.DefaultSelection<Prisma.$AnalyticsPayload>
/**
 * Model VisitorJourney
 * 
 */
export type VisitorJourney = $Result.DefaultSelection<Prisma.$VisitorJourneyPayload>
/**
 * Model VisitorFilter
 * 
 */
export type VisitorFilter = $Result.DefaultSelection<Prisma.$VisitorFilterPayload>
/**
 * Model AnalyticsInfo
 * 
 */
export type AnalyticsInfo = $Result.DefaultSelection<Prisma.$AnalyticsInfoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Analytics
 * const analytics = await prisma.analytics.findMany()
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
   * // Fetch zero or more Analytics
   * const analytics = await prisma.analytics.findMany()
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
   * `prisma.analytics`: Exposes CRUD operations for the **Analytics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Analytics
    * const analytics = await prisma.analytics.findMany()
    * ```
    */
  get analytics(): Prisma.AnalyticsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visitorJourney`: Exposes CRUD operations for the **VisitorJourney** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisitorJourneys
    * const visitorJourneys = await prisma.visitorJourney.findMany()
    * ```
    */
  get visitorJourney(): Prisma.VisitorJourneyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visitorFilter`: Exposes CRUD operations for the **VisitorFilter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisitorFilters
    * const visitorFilters = await prisma.visitorFilter.findMany()
    * ```
    */
  get visitorFilter(): Prisma.VisitorFilterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analyticsInfo`: Exposes CRUD operations for the **AnalyticsInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalyticsInfos
    * const analyticsInfos = await prisma.analyticsInfo.findMany()
    * ```
    */
  get analyticsInfo(): Prisma.AnalyticsInfoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Analytics: 'Analytics',
    VisitorJourney: 'VisitorJourney',
    VisitorFilter: 'VisitorFilter',
    AnalyticsInfo: 'AnalyticsInfo'
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
      modelProps: "analytics" | "visitorJourney" | "visitorFilter" | "analyticsInfo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Analytics: {
        payload: Prisma.$AnalyticsPayload<ExtArgs>
        fields: Prisma.AnalyticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          findFirst: {
            args: Prisma.AnalyticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          findMany: {
            args: Prisma.AnalyticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>[]
          }
          create: {
            args: Prisma.AnalyticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          createMany: {
            args: Prisma.AnalyticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalyticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>[]
          }
          delete: {
            args: Prisma.AnalyticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          update: {
            args: Prisma.AnalyticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          deleteMany: {
            args: Prisma.AnalyticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalyticsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>[]
          }
          upsert: {
            args: Prisma.AnalyticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          aggregate: {
            args: Prisma.AnalyticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalytics>
          }
          groupBy: {
            args: Prisma.AnalyticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalyticsCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsCountAggregateOutputType> | number
          }
        }
      }
      VisitorJourney: {
        payload: Prisma.$VisitorJourneyPayload<ExtArgs>
        fields: Prisma.VisitorJourneyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitorJourneyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorJourneyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitorJourneyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorJourneyPayload>
          }
          findFirst: {
            args: Prisma.VisitorJourneyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorJourneyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitorJourneyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorJourneyPayload>
          }
          findMany: {
            args: Prisma.VisitorJourneyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorJourneyPayload>[]
          }
          create: {
            args: Prisma.VisitorJourneyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorJourneyPayload>
          }
          createMany: {
            args: Prisma.VisitorJourneyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisitorJourneyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorJourneyPayload>[]
          }
          delete: {
            args: Prisma.VisitorJourneyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorJourneyPayload>
          }
          update: {
            args: Prisma.VisitorJourneyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorJourneyPayload>
          }
          deleteMany: {
            args: Prisma.VisitorJourneyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitorJourneyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisitorJourneyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorJourneyPayload>[]
          }
          upsert: {
            args: Prisma.VisitorJourneyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorJourneyPayload>
          }
          aggregate: {
            args: Prisma.VisitorJourneyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisitorJourney>
          }
          groupBy: {
            args: Prisma.VisitorJourneyGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitorJourneyGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitorJourneyCountArgs<ExtArgs>
            result: $Utils.Optional<VisitorJourneyCountAggregateOutputType> | number
          }
        }
      }
      VisitorFilter: {
        payload: Prisma.$VisitorFilterPayload<ExtArgs>
        fields: Prisma.VisitorFilterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitorFilterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorFilterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitorFilterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorFilterPayload>
          }
          findFirst: {
            args: Prisma.VisitorFilterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorFilterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitorFilterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorFilterPayload>
          }
          findMany: {
            args: Prisma.VisitorFilterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorFilterPayload>[]
          }
          create: {
            args: Prisma.VisitorFilterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorFilterPayload>
          }
          createMany: {
            args: Prisma.VisitorFilterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisitorFilterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorFilterPayload>[]
          }
          delete: {
            args: Prisma.VisitorFilterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorFilterPayload>
          }
          update: {
            args: Prisma.VisitorFilterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorFilterPayload>
          }
          deleteMany: {
            args: Prisma.VisitorFilterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitorFilterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisitorFilterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorFilterPayload>[]
          }
          upsert: {
            args: Prisma.VisitorFilterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorFilterPayload>
          }
          aggregate: {
            args: Prisma.VisitorFilterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisitorFilter>
          }
          groupBy: {
            args: Prisma.VisitorFilterGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitorFilterGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitorFilterCountArgs<ExtArgs>
            result: $Utils.Optional<VisitorFilterCountAggregateOutputType> | number
          }
        }
      }
      AnalyticsInfo: {
        payload: Prisma.$AnalyticsInfoPayload<ExtArgs>
        fields: Prisma.AnalyticsInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyticsInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyticsInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsInfoPayload>
          }
          findFirst: {
            args: Prisma.AnalyticsInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyticsInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsInfoPayload>
          }
          findMany: {
            args: Prisma.AnalyticsInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsInfoPayload>[]
          }
          create: {
            args: Prisma.AnalyticsInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsInfoPayload>
          }
          createMany: {
            args: Prisma.AnalyticsInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalyticsInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsInfoPayload>[]
          }
          delete: {
            args: Prisma.AnalyticsInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsInfoPayload>
          }
          update: {
            args: Prisma.AnalyticsInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsInfoPayload>
          }
          deleteMany: {
            args: Prisma.AnalyticsInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyticsInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalyticsInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsInfoPayload>[]
          }
          upsert: {
            args: Prisma.AnalyticsInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsInfoPayload>
          }
          aggregate: {
            args: Prisma.AnalyticsInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalyticsInfo>
          }
          groupBy: {
            args: Prisma.AnalyticsInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalyticsInfoCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsInfoCountAggregateOutputType> | number
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
    analytics?: AnalyticsOmit
    visitorJourney?: VisitorJourneyOmit
    visitorFilter?: VisitorFilterOmit
    analyticsInfo?: AnalyticsInfoOmit
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
   * Models
   */

  /**
   * Model Analytics
   */

  export type AggregateAnalytics = {
    _count: AnalyticsCountAggregateOutputType | null
    _avg: AnalyticsAvgAggregateOutputType | null
    _sum: AnalyticsSumAggregateOutputType | null
    _min: AnalyticsMinAggregateOutputType | null
    _max: AnalyticsMaxAggregateOutputType | null
  }

  export type AnalyticsAvgAggregateOutputType = {
    id: number | null
    visitors: number | null
    revenue: number | null
    bounceRate: number | null
    sessionTime: number | null
  }

  export type AnalyticsSumAggregateOutputType = {
    id: number | null
    visitors: number | null
    revenue: number | null
    bounceRate: number | null
    sessionTime: number | null
  }

  export type AnalyticsMinAggregateOutputType = {
    id: number | null
    date: Date | null
    visitors: number | null
    revenue: number | null
    bounceRate: number | null
    sessionTime: number | null
  }

  export type AnalyticsMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    visitors: number | null
    revenue: number | null
    bounceRate: number | null
    sessionTime: number | null
  }

  export type AnalyticsCountAggregateOutputType = {
    id: number
    date: number
    visitors: number
    revenue: number
    bounceRate: number
    sessionTime: number
    _all: number
  }


  export type AnalyticsAvgAggregateInputType = {
    id?: true
    visitors?: true
    revenue?: true
    bounceRate?: true
    sessionTime?: true
  }

  export type AnalyticsSumAggregateInputType = {
    id?: true
    visitors?: true
    revenue?: true
    bounceRate?: true
    sessionTime?: true
  }

  export type AnalyticsMinAggregateInputType = {
    id?: true
    date?: true
    visitors?: true
    revenue?: true
    bounceRate?: true
    sessionTime?: true
  }

  export type AnalyticsMaxAggregateInputType = {
    id?: true
    date?: true
    visitors?: true
    revenue?: true
    bounceRate?: true
    sessionTime?: true
  }

  export type AnalyticsCountAggregateInputType = {
    id?: true
    date?: true
    visitors?: true
    revenue?: true
    bounceRate?: true
    sessionTime?: true
    _all?: true
  }

  export type AnalyticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analytics to aggregate.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Analytics
    **/
    _count?: true | AnalyticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalyticsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalyticsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyticsMaxAggregateInputType
  }

  export type GetAnalyticsAggregateType<T extends AnalyticsAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalytics[P]>
      : GetScalarType<T[P], AggregateAnalytics[P]>
  }




  export type AnalyticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsWhereInput
    orderBy?: AnalyticsOrderByWithAggregationInput | AnalyticsOrderByWithAggregationInput[]
    by: AnalyticsScalarFieldEnum[] | AnalyticsScalarFieldEnum
    having?: AnalyticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyticsCountAggregateInputType | true
    _avg?: AnalyticsAvgAggregateInputType
    _sum?: AnalyticsSumAggregateInputType
    _min?: AnalyticsMinAggregateInputType
    _max?: AnalyticsMaxAggregateInputType
  }

  export type AnalyticsGroupByOutputType = {
    id: number
    date: Date
    visitors: number
    revenue: number
    bounceRate: number
    sessionTime: number
    _count: AnalyticsCountAggregateOutputType | null
    _avg: AnalyticsAvgAggregateOutputType | null
    _sum: AnalyticsSumAggregateOutputType | null
    _min: AnalyticsMinAggregateOutputType | null
    _max: AnalyticsMaxAggregateOutputType | null
  }

  type GetAnalyticsGroupByPayload<T extends AnalyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyticsGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyticsGroupByOutputType[P]>
        }
      >
    >


  export type AnalyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    visitors?: boolean
    revenue?: boolean
    bounceRate?: boolean
    sessionTime?: boolean
  }, ExtArgs["result"]["analytics"]>

  export type AnalyticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    visitors?: boolean
    revenue?: boolean
    bounceRate?: boolean
    sessionTime?: boolean
  }, ExtArgs["result"]["analytics"]>

  export type AnalyticsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    visitors?: boolean
    revenue?: boolean
    bounceRate?: boolean
    sessionTime?: boolean
  }, ExtArgs["result"]["analytics"]>

  export type AnalyticsSelectScalar = {
    id?: boolean
    date?: boolean
    visitors?: boolean
    revenue?: boolean
    bounceRate?: boolean
    sessionTime?: boolean
  }

  export type AnalyticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "visitors" | "revenue" | "bounceRate" | "sessionTime", ExtArgs["result"]["analytics"]>

  export type $AnalyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Analytics"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      visitors: number
      revenue: number
      bounceRate: number
      sessionTime: number
    }, ExtArgs["result"]["analytics"]>
    composites: {}
  }

  type AnalyticsGetPayload<S extends boolean | null | undefined | AnalyticsDefaultArgs> = $Result.GetResult<Prisma.$AnalyticsPayload, S>

  type AnalyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalyticsCountAggregateInputType | true
    }

  export interface AnalyticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Analytics'], meta: { name: 'Analytics' } }
    /**
     * Find zero or one Analytics that matches the filter.
     * @param {AnalyticsFindUniqueArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyticsFindUniqueArgs>(args: SelectSubset<T, AnalyticsFindUniqueArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Analytics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalyticsFindUniqueOrThrowArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyticsFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindFirstArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyticsFindFirstArgs>(args?: SelectSubset<T, AnalyticsFindFirstArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindFirstOrThrowArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyticsFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analytics
     * const analytics = await prisma.analytics.findMany()
     * 
     * // Get first 10 Analytics
     * const analytics = await prisma.analytics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analyticsWithIdOnly = await prisma.analytics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalyticsFindManyArgs>(args?: SelectSubset<T, AnalyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Analytics.
     * @param {AnalyticsCreateArgs} args - Arguments to create a Analytics.
     * @example
     * // Create one Analytics
     * const Analytics = await prisma.analytics.create({
     *   data: {
     *     // ... data to create a Analytics
     *   }
     * })
     * 
     */
    create<T extends AnalyticsCreateArgs>(args: SelectSubset<T, AnalyticsCreateArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Analytics.
     * @param {AnalyticsCreateManyArgs} args - Arguments to create many Analytics.
     * @example
     * // Create many Analytics
     * const analytics = await prisma.analytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyticsCreateManyArgs>(args?: SelectSubset<T, AnalyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Analytics and returns the data saved in the database.
     * @param {AnalyticsCreateManyAndReturnArgs} args - Arguments to create many Analytics.
     * @example
     * // Create many Analytics
     * const analytics = await prisma.analytics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Analytics and only return the `id`
     * const analyticsWithIdOnly = await prisma.analytics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalyticsCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalyticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Analytics.
     * @param {AnalyticsDeleteArgs} args - Arguments to delete one Analytics.
     * @example
     * // Delete one Analytics
     * const Analytics = await prisma.analytics.delete({
     *   where: {
     *     // ... filter to delete one Analytics
     *   }
     * })
     * 
     */
    delete<T extends AnalyticsDeleteArgs>(args: SelectSubset<T, AnalyticsDeleteArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Analytics.
     * @param {AnalyticsUpdateArgs} args - Arguments to update one Analytics.
     * @example
     * // Update one Analytics
     * const analytics = await prisma.analytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyticsUpdateArgs>(args: SelectSubset<T, AnalyticsUpdateArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Analytics.
     * @param {AnalyticsDeleteManyArgs} args - Arguments to filter Analytics to delete.
     * @example
     * // Delete a few Analytics
     * const { count } = await prisma.analytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyticsDeleteManyArgs>(args?: SelectSubset<T, AnalyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analytics
     * const analytics = await prisma.analytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyticsUpdateManyArgs>(args: SelectSubset<T, AnalyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analytics and returns the data updated in the database.
     * @param {AnalyticsUpdateManyAndReturnArgs} args - Arguments to update many Analytics.
     * @example
     * // Update many Analytics
     * const analytics = await prisma.analytics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Analytics and only return the `id`
     * const analyticsWithIdOnly = await prisma.analytics.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnalyticsUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalyticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Analytics.
     * @param {AnalyticsUpsertArgs} args - Arguments to update or create a Analytics.
     * @example
     * // Update or create a Analytics
     * const analytics = await prisma.analytics.upsert({
     *   create: {
     *     // ... data to create a Analytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analytics we want to update
     *   }
     * })
     */
    upsert<T extends AnalyticsUpsertArgs>(args: SelectSubset<T, AnalyticsUpsertArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsCountArgs} args - Arguments to filter Analytics to count.
     * @example
     * // Count the number of Analytics
     * const count = await prisma.analytics.count({
     *   where: {
     *     // ... the filter for the Analytics we want to count
     *   }
     * })
    **/
    count<T extends AnalyticsCountArgs>(
      args?: Subset<T, AnalyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalyticsAggregateArgs>(args: Subset<T, AnalyticsAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsAggregateType<T>>

    /**
     * Group by Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsGroupByArgs} args - Group by arguments.
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
      T extends AnalyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyticsGroupByArgs['orderBy'] }
        : { orderBy?: AnalyticsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Analytics model
   */
  readonly fields: AnalyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Analytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Analytics model
   */
  interface AnalyticsFieldRefs {
    readonly id: FieldRef<"Analytics", 'Int'>
    readonly date: FieldRef<"Analytics", 'DateTime'>
    readonly visitors: FieldRef<"Analytics", 'Int'>
    readonly revenue: FieldRef<"Analytics", 'Float'>
    readonly bounceRate: FieldRef<"Analytics", 'Float'>
    readonly sessionTime: FieldRef<"Analytics", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Analytics findUnique
   */
  export type AnalyticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics findUniqueOrThrow
   */
  export type AnalyticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics findFirst
   */
  export type AnalyticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analytics.
     */
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics findFirstOrThrow
   */
  export type AnalyticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analytics.
     */
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics findMany
   */
  export type AnalyticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics create
   */
  export type AnalyticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * The data needed to create a Analytics.
     */
    data: XOR<AnalyticsCreateInput, AnalyticsUncheckedCreateInput>
  }

  /**
   * Analytics createMany
   */
  export type AnalyticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Analytics.
     */
    data: AnalyticsCreateManyInput | AnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Analytics createManyAndReturn
   */
  export type AnalyticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * The data used to create many Analytics.
     */
    data: AnalyticsCreateManyInput | AnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Analytics update
   */
  export type AnalyticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * The data needed to update a Analytics.
     */
    data: XOR<AnalyticsUpdateInput, AnalyticsUncheckedUpdateInput>
    /**
     * Choose, which Analytics to update.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics updateMany
   */
  export type AnalyticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Analytics.
     */
    data: XOR<AnalyticsUpdateManyMutationInput, AnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which Analytics to update
     */
    where?: AnalyticsWhereInput
    /**
     * Limit how many Analytics to update.
     */
    limit?: number
  }

  /**
   * Analytics updateManyAndReturn
   */
  export type AnalyticsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * The data used to update Analytics.
     */
    data: XOR<AnalyticsUpdateManyMutationInput, AnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which Analytics to update
     */
    where?: AnalyticsWhereInput
    /**
     * Limit how many Analytics to update.
     */
    limit?: number
  }

  /**
   * Analytics upsert
   */
  export type AnalyticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * The filter to search for the Analytics to update in case it exists.
     */
    where: AnalyticsWhereUniqueInput
    /**
     * In case the Analytics found by the `where` argument doesn't exist, create a new Analytics with this data.
     */
    create: XOR<AnalyticsCreateInput, AnalyticsUncheckedCreateInput>
    /**
     * In case the Analytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyticsUpdateInput, AnalyticsUncheckedUpdateInput>
  }

  /**
   * Analytics delete
   */
  export type AnalyticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Filter which Analytics to delete.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics deleteMany
   */
  export type AnalyticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analytics to delete
     */
    where?: AnalyticsWhereInput
    /**
     * Limit how many Analytics to delete.
     */
    limit?: number
  }

  /**
   * Analytics without action
   */
  export type AnalyticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
  }


  /**
   * Model VisitorJourney
   */

  export type AggregateVisitorJourney = {
    _count: VisitorJourneyCountAggregateOutputType | null
    _avg: VisitorJourneyAvgAggregateOutputType | null
    _sum: VisitorJourneySumAggregateOutputType | null
    _min: VisitorJourneyMinAggregateOutputType | null
    _max: VisitorJourneyMaxAggregateOutputType | null
  }

  export type VisitorJourneyAvgAggregateOutputType = {
    id: number | null
  }

  export type VisitorJourneySumAggregateOutputType = {
    id: number | null
  }

  export type VisitorJourneyMinAggregateOutputType = {
    id: number | null
    name: string | null
    country: string | null
    device: string | null
    os: string | null
    browser: string | null
    goal: string | null
    source: string | null
    timeToComplete: string | null
    completedAt: Date | null
    avatarSeed: string | null
  }

  export type VisitorJourneyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    country: string | null
    device: string | null
    os: string | null
    browser: string | null
    goal: string | null
    source: string | null
    timeToComplete: string | null
    completedAt: Date | null
    avatarSeed: string | null
  }

  export type VisitorJourneyCountAggregateOutputType = {
    id: number
    name: number
    country: number
    device: number
    os: number
    browser: number
    goal: number
    source: number
    timeToComplete: number
    completedAt: number
    avatarSeed: number
    _all: number
  }


  export type VisitorJourneyAvgAggregateInputType = {
    id?: true
  }

  export type VisitorJourneySumAggregateInputType = {
    id?: true
  }

  export type VisitorJourneyMinAggregateInputType = {
    id?: true
    name?: true
    country?: true
    device?: true
    os?: true
    browser?: true
    goal?: true
    source?: true
    timeToComplete?: true
    completedAt?: true
    avatarSeed?: true
  }

  export type VisitorJourneyMaxAggregateInputType = {
    id?: true
    name?: true
    country?: true
    device?: true
    os?: true
    browser?: true
    goal?: true
    source?: true
    timeToComplete?: true
    completedAt?: true
    avatarSeed?: true
  }

  export type VisitorJourneyCountAggregateInputType = {
    id?: true
    name?: true
    country?: true
    device?: true
    os?: true
    browser?: true
    goal?: true
    source?: true
    timeToComplete?: true
    completedAt?: true
    avatarSeed?: true
    _all?: true
  }

  export type VisitorJourneyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisitorJourney to aggregate.
     */
    where?: VisitorJourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorJourneys to fetch.
     */
    orderBy?: VisitorJourneyOrderByWithRelationInput | VisitorJourneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitorJourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorJourneys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorJourneys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisitorJourneys
    **/
    _count?: true | VisitorJourneyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisitorJourneyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisitorJourneySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitorJourneyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitorJourneyMaxAggregateInputType
  }

  export type GetVisitorJourneyAggregateType<T extends VisitorJourneyAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitorJourney]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitorJourney[P]>
      : GetScalarType<T[P], AggregateVisitorJourney[P]>
  }




  export type VisitorJourneyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorJourneyWhereInput
    orderBy?: VisitorJourneyOrderByWithAggregationInput | VisitorJourneyOrderByWithAggregationInput[]
    by: VisitorJourneyScalarFieldEnum[] | VisitorJourneyScalarFieldEnum
    having?: VisitorJourneyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitorJourneyCountAggregateInputType | true
    _avg?: VisitorJourneyAvgAggregateInputType
    _sum?: VisitorJourneySumAggregateInputType
    _min?: VisitorJourneyMinAggregateInputType
    _max?: VisitorJourneyMaxAggregateInputType
  }

  export type VisitorJourneyGroupByOutputType = {
    id: number
    name: string
    country: string
    device: string
    os: string
    browser: string
    goal: string
    source: string
    timeToComplete: string
    completedAt: Date
    avatarSeed: string
    _count: VisitorJourneyCountAggregateOutputType | null
    _avg: VisitorJourneyAvgAggregateOutputType | null
    _sum: VisitorJourneySumAggregateOutputType | null
    _min: VisitorJourneyMinAggregateOutputType | null
    _max: VisitorJourneyMaxAggregateOutputType | null
  }

  type GetVisitorJourneyGroupByPayload<T extends VisitorJourneyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitorJourneyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitorJourneyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitorJourneyGroupByOutputType[P]>
            : GetScalarType<T[P], VisitorJourneyGroupByOutputType[P]>
        }
      >
    >


  export type VisitorJourneySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    device?: boolean
    os?: boolean
    browser?: boolean
    goal?: boolean
    source?: boolean
    timeToComplete?: boolean
    completedAt?: boolean
    avatarSeed?: boolean
  }, ExtArgs["result"]["visitorJourney"]>

  export type VisitorJourneySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    device?: boolean
    os?: boolean
    browser?: boolean
    goal?: boolean
    source?: boolean
    timeToComplete?: boolean
    completedAt?: boolean
    avatarSeed?: boolean
  }, ExtArgs["result"]["visitorJourney"]>

  export type VisitorJourneySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    device?: boolean
    os?: boolean
    browser?: boolean
    goal?: boolean
    source?: boolean
    timeToComplete?: boolean
    completedAt?: boolean
    avatarSeed?: boolean
  }, ExtArgs["result"]["visitorJourney"]>

  export type VisitorJourneySelectScalar = {
    id?: boolean
    name?: boolean
    country?: boolean
    device?: boolean
    os?: boolean
    browser?: boolean
    goal?: boolean
    source?: boolean
    timeToComplete?: boolean
    completedAt?: boolean
    avatarSeed?: boolean
  }

  export type VisitorJourneyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "country" | "device" | "os" | "browser" | "goal" | "source" | "timeToComplete" | "completedAt" | "avatarSeed", ExtArgs["result"]["visitorJourney"]>

  export type $VisitorJourneyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VisitorJourney"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      country: string
      device: string
      os: string
      browser: string
      goal: string
      source: string
      timeToComplete: string
      completedAt: Date
      avatarSeed: string
    }, ExtArgs["result"]["visitorJourney"]>
    composites: {}
  }

  type VisitorJourneyGetPayload<S extends boolean | null | undefined | VisitorJourneyDefaultArgs> = $Result.GetResult<Prisma.$VisitorJourneyPayload, S>

  type VisitorJourneyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitorJourneyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitorJourneyCountAggregateInputType | true
    }

  export interface VisitorJourneyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VisitorJourney'], meta: { name: 'VisitorJourney' } }
    /**
     * Find zero or one VisitorJourney that matches the filter.
     * @param {VisitorJourneyFindUniqueArgs} args - Arguments to find a VisitorJourney
     * @example
     * // Get one VisitorJourney
     * const visitorJourney = await prisma.visitorJourney.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitorJourneyFindUniqueArgs>(args: SelectSubset<T, VisitorJourneyFindUniqueArgs<ExtArgs>>): Prisma__VisitorJourneyClient<$Result.GetResult<Prisma.$VisitorJourneyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VisitorJourney that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitorJourneyFindUniqueOrThrowArgs} args - Arguments to find a VisitorJourney
     * @example
     * // Get one VisitorJourney
     * const visitorJourney = await prisma.visitorJourney.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitorJourneyFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitorJourneyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitorJourneyClient<$Result.GetResult<Prisma.$VisitorJourneyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisitorJourney that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorJourneyFindFirstArgs} args - Arguments to find a VisitorJourney
     * @example
     * // Get one VisitorJourney
     * const visitorJourney = await prisma.visitorJourney.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitorJourneyFindFirstArgs>(args?: SelectSubset<T, VisitorJourneyFindFirstArgs<ExtArgs>>): Prisma__VisitorJourneyClient<$Result.GetResult<Prisma.$VisitorJourneyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisitorJourney that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorJourneyFindFirstOrThrowArgs} args - Arguments to find a VisitorJourney
     * @example
     * // Get one VisitorJourney
     * const visitorJourney = await prisma.visitorJourney.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitorJourneyFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitorJourneyFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitorJourneyClient<$Result.GetResult<Prisma.$VisitorJourneyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VisitorJourneys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorJourneyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisitorJourneys
     * const visitorJourneys = await prisma.visitorJourney.findMany()
     * 
     * // Get first 10 VisitorJourneys
     * const visitorJourneys = await prisma.visitorJourney.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitorJourneyWithIdOnly = await prisma.visitorJourney.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisitorJourneyFindManyArgs>(args?: SelectSubset<T, VisitorJourneyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorJourneyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VisitorJourney.
     * @param {VisitorJourneyCreateArgs} args - Arguments to create a VisitorJourney.
     * @example
     * // Create one VisitorJourney
     * const VisitorJourney = await prisma.visitorJourney.create({
     *   data: {
     *     // ... data to create a VisitorJourney
     *   }
     * })
     * 
     */
    create<T extends VisitorJourneyCreateArgs>(args: SelectSubset<T, VisitorJourneyCreateArgs<ExtArgs>>): Prisma__VisitorJourneyClient<$Result.GetResult<Prisma.$VisitorJourneyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VisitorJourneys.
     * @param {VisitorJourneyCreateManyArgs} args - Arguments to create many VisitorJourneys.
     * @example
     * // Create many VisitorJourneys
     * const visitorJourney = await prisma.visitorJourney.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitorJourneyCreateManyArgs>(args?: SelectSubset<T, VisitorJourneyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VisitorJourneys and returns the data saved in the database.
     * @param {VisitorJourneyCreateManyAndReturnArgs} args - Arguments to create many VisitorJourneys.
     * @example
     * // Create many VisitorJourneys
     * const visitorJourney = await prisma.visitorJourney.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VisitorJourneys and only return the `id`
     * const visitorJourneyWithIdOnly = await prisma.visitorJourney.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisitorJourneyCreateManyAndReturnArgs>(args?: SelectSubset<T, VisitorJourneyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorJourneyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VisitorJourney.
     * @param {VisitorJourneyDeleteArgs} args - Arguments to delete one VisitorJourney.
     * @example
     * // Delete one VisitorJourney
     * const VisitorJourney = await prisma.visitorJourney.delete({
     *   where: {
     *     // ... filter to delete one VisitorJourney
     *   }
     * })
     * 
     */
    delete<T extends VisitorJourneyDeleteArgs>(args: SelectSubset<T, VisitorJourneyDeleteArgs<ExtArgs>>): Prisma__VisitorJourneyClient<$Result.GetResult<Prisma.$VisitorJourneyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VisitorJourney.
     * @param {VisitorJourneyUpdateArgs} args - Arguments to update one VisitorJourney.
     * @example
     * // Update one VisitorJourney
     * const visitorJourney = await prisma.visitorJourney.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitorJourneyUpdateArgs>(args: SelectSubset<T, VisitorJourneyUpdateArgs<ExtArgs>>): Prisma__VisitorJourneyClient<$Result.GetResult<Prisma.$VisitorJourneyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VisitorJourneys.
     * @param {VisitorJourneyDeleteManyArgs} args - Arguments to filter VisitorJourneys to delete.
     * @example
     * // Delete a few VisitorJourneys
     * const { count } = await prisma.visitorJourney.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitorJourneyDeleteManyArgs>(args?: SelectSubset<T, VisitorJourneyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisitorJourneys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorJourneyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisitorJourneys
     * const visitorJourney = await prisma.visitorJourney.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitorJourneyUpdateManyArgs>(args: SelectSubset<T, VisitorJourneyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisitorJourneys and returns the data updated in the database.
     * @param {VisitorJourneyUpdateManyAndReturnArgs} args - Arguments to update many VisitorJourneys.
     * @example
     * // Update many VisitorJourneys
     * const visitorJourney = await prisma.visitorJourney.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VisitorJourneys and only return the `id`
     * const visitorJourneyWithIdOnly = await prisma.visitorJourney.updateManyAndReturn({
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
    updateManyAndReturn<T extends VisitorJourneyUpdateManyAndReturnArgs>(args: SelectSubset<T, VisitorJourneyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorJourneyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VisitorJourney.
     * @param {VisitorJourneyUpsertArgs} args - Arguments to update or create a VisitorJourney.
     * @example
     * // Update or create a VisitorJourney
     * const visitorJourney = await prisma.visitorJourney.upsert({
     *   create: {
     *     // ... data to create a VisitorJourney
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisitorJourney we want to update
     *   }
     * })
     */
    upsert<T extends VisitorJourneyUpsertArgs>(args: SelectSubset<T, VisitorJourneyUpsertArgs<ExtArgs>>): Prisma__VisitorJourneyClient<$Result.GetResult<Prisma.$VisitorJourneyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VisitorJourneys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorJourneyCountArgs} args - Arguments to filter VisitorJourneys to count.
     * @example
     * // Count the number of VisitorJourneys
     * const count = await prisma.visitorJourney.count({
     *   where: {
     *     // ... the filter for the VisitorJourneys we want to count
     *   }
     * })
    **/
    count<T extends VisitorJourneyCountArgs>(
      args?: Subset<T, VisitorJourneyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitorJourneyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisitorJourney.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorJourneyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisitorJourneyAggregateArgs>(args: Subset<T, VisitorJourneyAggregateArgs>): Prisma.PrismaPromise<GetVisitorJourneyAggregateType<T>>

    /**
     * Group by VisitorJourney.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorJourneyGroupByArgs} args - Group by arguments.
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
      T extends VisitorJourneyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitorJourneyGroupByArgs['orderBy'] }
        : { orderBy?: VisitorJourneyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisitorJourneyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitorJourneyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VisitorJourney model
   */
  readonly fields: VisitorJourneyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VisitorJourney.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitorJourneyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VisitorJourney model
   */
  interface VisitorJourneyFieldRefs {
    readonly id: FieldRef<"VisitorJourney", 'Int'>
    readonly name: FieldRef<"VisitorJourney", 'String'>
    readonly country: FieldRef<"VisitorJourney", 'String'>
    readonly device: FieldRef<"VisitorJourney", 'String'>
    readonly os: FieldRef<"VisitorJourney", 'String'>
    readonly browser: FieldRef<"VisitorJourney", 'String'>
    readonly goal: FieldRef<"VisitorJourney", 'String'>
    readonly source: FieldRef<"VisitorJourney", 'String'>
    readonly timeToComplete: FieldRef<"VisitorJourney", 'String'>
    readonly completedAt: FieldRef<"VisitorJourney", 'DateTime'>
    readonly avatarSeed: FieldRef<"VisitorJourney", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VisitorJourney findUnique
   */
  export type VisitorJourneyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorJourney
     */
    select?: VisitorJourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorJourney
     */
    omit?: VisitorJourneyOmit<ExtArgs> | null
    /**
     * Filter, which VisitorJourney to fetch.
     */
    where: VisitorJourneyWhereUniqueInput
  }

  /**
   * VisitorJourney findUniqueOrThrow
   */
  export type VisitorJourneyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorJourney
     */
    select?: VisitorJourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorJourney
     */
    omit?: VisitorJourneyOmit<ExtArgs> | null
    /**
     * Filter, which VisitorJourney to fetch.
     */
    where: VisitorJourneyWhereUniqueInput
  }

  /**
   * VisitorJourney findFirst
   */
  export type VisitorJourneyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorJourney
     */
    select?: VisitorJourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorJourney
     */
    omit?: VisitorJourneyOmit<ExtArgs> | null
    /**
     * Filter, which VisitorJourney to fetch.
     */
    where?: VisitorJourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorJourneys to fetch.
     */
    orderBy?: VisitorJourneyOrderByWithRelationInput | VisitorJourneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitorJourneys.
     */
    cursor?: VisitorJourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorJourneys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorJourneys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitorJourneys.
     */
    distinct?: VisitorJourneyScalarFieldEnum | VisitorJourneyScalarFieldEnum[]
  }

  /**
   * VisitorJourney findFirstOrThrow
   */
  export type VisitorJourneyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorJourney
     */
    select?: VisitorJourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorJourney
     */
    omit?: VisitorJourneyOmit<ExtArgs> | null
    /**
     * Filter, which VisitorJourney to fetch.
     */
    where?: VisitorJourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorJourneys to fetch.
     */
    orderBy?: VisitorJourneyOrderByWithRelationInput | VisitorJourneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitorJourneys.
     */
    cursor?: VisitorJourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorJourneys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorJourneys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitorJourneys.
     */
    distinct?: VisitorJourneyScalarFieldEnum | VisitorJourneyScalarFieldEnum[]
  }

  /**
   * VisitorJourney findMany
   */
  export type VisitorJourneyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorJourney
     */
    select?: VisitorJourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorJourney
     */
    omit?: VisitorJourneyOmit<ExtArgs> | null
    /**
     * Filter, which VisitorJourneys to fetch.
     */
    where?: VisitorJourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorJourneys to fetch.
     */
    orderBy?: VisitorJourneyOrderByWithRelationInput | VisitorJourneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisitorJourneys.
     */
    cursor?: VisitorJourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorJourneys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorJourneys.
     */
    skip?: number
    distinct?: VisitorJourneyScalarFieldEnum | VisitorJourneyScalarFieldEnum[]
  }

  /**
   * VisitorJourney create
   */
  export type VisitorJourneyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorJourney
     */
    select?: VisitorJourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorJourney
     */
    omit?: VisitorJourneyOmit<ExtArgs> | null
    /**
     * The data needed to create a VisitorJourney.
     */
    data: XOR<VisitorJourneyCreateInput, VisitorJourneyUncheckedCreateInput>
  }

  /**
   * VisitorJourney createMany
   */
  export type VisitorJourneyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VisitorJourneys.
     */
    data: VisitorJourneyCreateManyInput | VisitorJourneyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisitorJourney createManyAndReturn
   */
  export type VisitorJourneyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorJourney
     */
    select?: VisitorJourneySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorJourney
     */
    omit?: VisitorJourneyOmit<ExtArgs> | null
    /**
     * The data used to create many VisitorJourneys.
     */
    data: VisitorJourneyCreateManyInput | VisitorJourneyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisitorJourney update
   */
  export type VisitorJourneyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorJourney
     */
    select?: VisitorJourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorJourney
     */
    omit?: VisitorJourneyOmit<ExtArgs> | null
    /**
     * The data needed to update a VisitorJourney.
     */
    data: XOR<VisitorJourneyUpdateInput, VisitorJourneyUncheckedUpdateInput>
    /**
     * Choose, which VisitorJourney to update.
     */
    where: VisitorJourneyWhereUniqueInput
  }

  /**
   * VisitorJourney updateMany
   */
  export type VisitorJourneyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VisitorJourneys.
     */
    data: XOR<VisitorJourneyUpdateManyMutationInput, VisitorJourneyUncheckedUpdateManyInput>
    /**
     * Filter which VisitorJourneys to update
     */
    where?: VisitorJourneyWhereInput
    /**
     * Limit how many VisitorJourneys to update.
     */
    limit?: number
  }

  /**
   * VisitorJourney updateManyAndReturn
   */
  export type VisitorJourneyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorJourney
     */
    select?: VisitorJourneySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorJourney
     */
    omit?: VisitorJourneyOmit<ExtArgs> | null
    /**
     * The data used to update VisitorJourneys.
     */
    data: XOR<VisitorJourneyUpdateManyMutationInput, VisitorJourneyUncheckedUpdateManyInput>
    /**
     * Filter which VisitorJourneys to update
     */
    where?: VisitorJourneyWhereInput
    /**
     * Limit how many VisitorJourneys to update.
     */
    limit?: number
  }

  /**
   * VisitorJourney upsert
   */
  export type VisitorJourneyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorJourney
     */
    select?: VisitorJourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorJourney
     */
    omit?: VisitorJourneyOmit<ExtArgs> | null
    /**
     * The filter to search for the VisitorJourney to update in case it exists.
     */
    where: VisitorJourneyWhereUniqueInput
    /**
     * In case the VisitorJourney found by the `where` argument doesn't exist, create a new VisitorJourney with this data.
     */
    create: XOR<VisitorJourneyCreateInput, VisitorJourneyUncheckedCreateInput>
    /**
     * In case the VisitorJourney was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitorJourneyUpdateInput, VisitorJourneyUncheckedUpdateInput>
  }

  /**
   * VisitorJourney delete
   */
  export type VisitorJourneyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorJourney
     */
    select?: VisitorJourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorJourney
     */
    omit?: VisitorJourneyOmit<ExtArgs> | null
    /**
     * Filter which VisitorJourney to delete.
     */
    where: VisitorJourneyWhereUniqueInput
  }

  /**
   * VisitorJourney deleteMany
   */
  export type VisitorJourneyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisitorJourneys to delete
     */
    where?: VisitorJourneyWhereInput
    /**
     * Limit how many VisitorJourneys to delete.
     */
    limit?: number
  }

  /**
   * VisitorJourney without action
   */
  export type VisitorJourneyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorJourney
     */
    select?: VisitorJourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorJourney
     */
    omit?: VisitorJourneyOmit<ExtArgs> | null
  }


  /**
   * Model VisitorFilter
   */

  export type AggregateVisitorFilter = {
    _count: VisitorFilterCountAggregateOutputType | null
    _avg: VisitorFilterAvgAggregateOutputType | null
    _sum: VisitorFilterSumAggregateOutputType | null
    _min: VisitorFilterMinAggregateOutputType | null
    _max: VisitorFilterMaxAggregateOutputType | null
  }

  export type VisitorFilterAvgAggregateOutputType = {
    id: number | null
  }

  export type VisitorFilterSumAggregateOutputType = {
    id: number | null
  }

  export type VisitorFilterMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    isDefault: boolean | null
  }

  export type VisitorFilterMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    isDefault: boolean | null
  }

  export type VisitorFilterCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    filters: number
    isDefault: number
    _all: number
  }


  export type VisitorFilterAvgAggregateInputType = {
    id?: true
  }

  export type VisitorFilterSumAggregateInputType = {
    id?: true
  }

  export type VisitorFilterMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    isDefault?: true
  }

  export type VisitorFilterMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    isDefault?: true
  }

  export type VisitorFilterCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    filters?: true
    isDefault?: true
    _all?: true
  }

  export type VisitorFilterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisitorFilter to aggregate.
     */
    where?: VisitorFilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorFilters to fetch.
     */
    orderBy?: VisitorFilterOrderByWithRelationInput | VisitorFilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitorFilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorFilters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorFilters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisitorFilters
    **/
    _count?: true | VisitorFilterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisitorFilterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisitorFilterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitorFilterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitorFilterMaxAggregateInputType
  }

  export type GetVisitorFilterAggregateType<T extends VisitorFilterAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitorFilter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitorFilter[P]>
      : GetScalarType<T[P], AggregateVisitorFilter[P]>
  }




  export type VisitorFilterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorFilterWhereInput
    orderBy?: VisitorFilterOrderByWithAggregationInput | VisitorFilterOrderByWithAggregationInput[]
    by: VisitorFilterScalarFieldEnum[] | VisitorFilterScalarFieldEnum
    having?: VisitorFilterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitorFilterCountAggregateInputType | true
    _avg?: VisitorFilterAvgAggregateInputType
    _sum?: VisitorFilterSumAggregateInputType
    _min?: VisitorFilterMinAggregateInputType
    _max?: VisitorFilterMaxAggregateInputType
  }

  export type VisitorFilterGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    name: string
    filters: JsonValue
    isDefault: boolean
    _count: VisitorFilterCountAggregateOutputType | null
    _avg: VisitorFilterAvgAggregateOutputType | null
    _sum: VisitorFilterSumAggregateOutputType | null
    _min: VisitorFilterMinAggregateOutputType | null
    _max: VisitorFilterMaxAggregateOutputType | null
  }

  type GetVisitorFilterGroupByPayload<T extends VisitorFilterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitorFilterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitorFilterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitorFilterGroupByOutputType[P]>
            : GetScalarType<T[P], VisitorFilterGroupByOutputType[P]>
        }
      >
    >


  export type VisitorFilterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    filters?: boolean
    isDefault?: boolean
  }, ExtArgs["result"]["visitorFilter"]>

  export type VisitorFilterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    filters?: boolean
    isDefault?: boolean
  }, ExtArgs["result"]["visitorFilter"]>

  export type VisitorFilterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    filters?: boolean
    isDefault?: boolean
  }, ExtArgs["result"]["visitorFilter"]>

  export type VisitorFilterSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    filters?: boolean
    isDefault?: boolean
  }

  export type VisitorFilterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "filters" | "isDefault", ExtArgs["result"]["visitorFilter"]>

  export type $VisitorFilterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VisitorFilter"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      name: string
      filters: Prisma.JsonValue
      isDefault: boolean
    }, ExtArgs["result"]["visitorFilter"]>
    composites: {}
  }

  type VisitorFilterGetPayload<S extends boolean | null | undefined | VisitorFilterDefaultArgs> = $Result.GetResult<Prisma.$VisitorFilterPayload, S>

  type VisitorFilterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitorFilterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitorFilterCountAggregateInputType | true
    }

  export interface VisitorFilterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VisitorFilter'], meta: { name: 'VisitorFilter' } }
    /**
     * Find zero or one VisitorFilter that matches the filter.
     * @param {VisitorFilterFindUniqueArgs} args - Arguments to find a VisitorFilter
     * @example
     * // Get one VisitorFilter
     * const visitorFilter = await prisma.visitorFilter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitorFilterFindUniqueArgs>(args: SelectSubset<T, VisitorFilterFindUniqueArgs<ExtArgs>>): Prisma__VisitorFilterClient<$Result.GetResult<Prisma.$VisitorFilterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VisitorFilter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitorFilterFindUniqueOrThrowArgs} args - Arguments to find a VisitorFilter
     * @example
     * // Get one VisitorFilter
     * const visitorFilter = await prisma.visitorFilter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitorFilterFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitorFilterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitorFilterClient<$Result.GetResult<Prisma.$VisitorFilterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisitorFilter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFilterFindFirstArgs} args - Arguments to find a VisitorFilter
     * @example
     * // Get one VisitorFilter
     * const visitorFilter = await prisma.visitorFilter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitorFilterFindFirstArgs>(args?: SelectSubset<T, VisitorFilterFindFirstArgs<ExtArgs>>): Prisma__VisitorFilterClient<$Result.GetResult<Prisma.$VisitorFilterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisitorFilter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFilterFindFirstOrThrowArgs} args - Arguments to find a VisitorFilter
     * @example
     * // Get one VisitorFilter
     * const visitorFilter = await prisma.visitorFilter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitorFilterFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitorFilterFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitorFilterClient<$Result.GetResult<Prisma.$VisitorFilterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VisitorFilters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFilterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisitorFilters
     * const visitorFilters = await prisma.visitorFilter.findMany()
     * 
     * // Get first 10 VisitorFilters
     * const visitorFilters = await prisma.visitorFilter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitorFilterWithIdOnly = await prisma.visitorFilter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisitorFilterFindManyArgs>(args?: SelectSubset<T, VisitorFilterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorFilterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VisitorFilter.
     * @param {VisitorFilterCreateArgs} args - Arguments to create a VisitorFilter.
     * @example
     * // Create one VisitorFilter
     * const VisitorFilter = await prisma.visitorFilter.create({
     *   data: {
     *     // ... data to create a VisitorFilter
     *   }
     * })
     * 
     */
    create<T extends VisitorFilterCreateArgs>(args: SelectSubset<T, VisitorFilterCreateArgs<ExtArgs>>): Prisma__VisitorFilterClient<$Result.GetResult<Prisma.$VisitorFilterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VisitorFilters.
     * @param {VisitorFilterCreateManyArgs} args - Arguments to create many VisitorFilters.
     * @example
     * // Create many VisitorFilters
     * const visitorFilter = await prisma.visitorFilter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitorFilterCreateManyArgs>(args?: SelectSubset<T, VisitorFilterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VisitorFilters and returns the data saved in the database.
     * @param {VisitorFilterCreateManyAndReturnArgs} args - Arguments to create many VisitorFilters.
     * @example
     * // Create many VisitorFilters
     * const visitorFilter = await prisma.visitorFilter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VisitorFilters and only return the `id`
     * const visitorFilterWithIdOnly = await prisma.visitorFilter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisitorFilterCreateManyAndReturnArgs>(args?: SelectSubset<T, VisitorFilterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorFilterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VisitorFilter.
     * @param {VisitorFilterDeleteArgs} args - Arguments to delete one VisitorFilter.
     * @example
     * // Delete one VisitorFilter
     * const VisitorFilter = await prisma.visitorFilter.delete({
     *   where: {
     *     // ... filter to delete one VisitorFilter
     *   }
     * })
     * 
     */
    delete<T extends VisitorFilterDeleteArgs>(args: SelectSubset<T, VisitorFilterDeleteArgs<ExtArgs>>): Prisma__VisitorFilterClient<$Result.GetResult<Prisma.$VisitorFilterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VisitorFilter.
     * @param {VisitorFilterUpdateArgs} args - Arguments to update one VisitorFilter.
     * @example
     * // Update one VisitorFilter
     * const visitorFilter = await prisma.visitorFilter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitorFilterUpdateArgs>(args: SelectSubset<T, VisitorFilterUpdateArgs<ExtArgs>>): Prisma__VisitorFilterClient<$Result.GetResult<Prisma.$VisitorFilterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VisitorFilters.
     * @param {VisitorFilterDeleteManyArgs} args - Arguments to filter VisitorFilters to delete.
     * @example
     * // Delete a few VisitorFilters
     * const { count } = await prisma.visitorFilter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitorFilterDeleteManyArgs>(args?: SelectSubset<T, VisitorFilterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisitorFilters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFilterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisitorFilters
     * const visitorFilter = await prisma.visitorFilter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitorFilterUpdateManyArgs>(args: SelectSubset<T, VisitorFilterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisitorFilters and returns the data updated in the database.
     * @param {VisitorFilterUpdateManyAndReturnArgs} args - Arguments to update many VisitorFilters.
     * @example
     * // Update many VisitorFilters
     * const visitorFilter = await prisma.visitorFilter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VisitorFilters and only return the `id`
     * const visitorFilterWithIdOnly = await prisma.visitorFilter.updateManyAndReturn({
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
    updateManyAndReturn<T extends VisitorFilterUpdateManyAndReturnArgs>(args: SelectSubset<T, VisitorFilterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorFilterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VisitorFilter.
     * @param {VisitorFilterUpsertArgs} args - Arguments to update or create a VisitorFilter.
     * @example
     * // Update or create a VisitorFilter
     * const visitorFilter = await prisma.visitorFilter.upsert({
     *   create: {
     *     // ... data to create a VisitorFilter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisitorFilter we want to update
     *   }
     * })
     */
    upsert<T extends VisitorFilterUpsertArgs>(args: SelectSubset<T, VisitorFilterUpsertArgs<ExtArgs>>): Prisma__VisitorFilterClient<$Result.GetResult<Prisma.$VisitorFilterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VisitorFilters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFilterCountArgs} args - Arguments to filter VisitorFilters to count.
     * @example
     * // Count the number of VisitorFilters
     * const count = await prisma.visitorFilter.count({
     *   where: {
     *     // ... the filter for the VisitorFilters we want to count
     *   }
     * })
    **/
    count<T extends VisitorFilterCountArgs>(
      args?: Subset<T, VisitorFilterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitorFilterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisitorFilter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFilterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisitorFilterAggregateArgs>(args: Subset<T, VisitorFilterAggregateArgs>): Prisma.PrismaPromise<GetVisitorFilterAggregateType<T>>

    /**
     * Group by VisitorFilter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFilterGroupByArgs} args - Group by arguments.
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
      T extends VisitorFilterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitorFilterGroupByArgs['orderBy'] }
        : { orderBy?: VisitorFilterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisitorFilterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitorFilterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VisitorFilter model
   */
  readonly fields: VisitorFilterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VisitorFilter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitorFilterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VisitorFilter model
   */
  interface VisitorFilterFieldRefs {
    readonly id: FieldRef<"VisitorFilter", 'Int'>
    readonly createdAt: FieldRef<"VisitorFilter", 'DateTime'>
    readonly updatedAt: FieldRef<"VisitorFilter", 'DateTime'>
    readonly name: FieldRef<"VisitorFilter", 'String'>
    readonly filters: FieldRef<"VisitorFilter", 'Json'>
    readonly isDefault: FieldRef<"VisitorFilter", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * VisitorFilter findUnique
   */
  export type VisitorFilterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorFilter
     */
    select?: VisitorFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorFilter
     */
    omit?: VisitorFilterOmit<ExtArgs> | null
    /**
     * Filter, which VisitorFilter to fetch.
     */
    where: VisitorFilterWhereUniqueInput
  }

  /**
   * VisitorFilter findUniqueOrThrow
   */
  export type VisitorFilterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorFilter
     */
    select?: VisitorFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorFilter
     */
    omit?: VisitorFilterOmit<ExtArgs> | null
    /**
     * Filter, which VisitorFilter to fetch.
     */
    where: VisitorFilterWhereUniqueInput
  }

  /**
   * VisitorFilter findFirst
   */
  export type VisitorFilterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorFilter
     */
    select?: VisitorFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorFilter
     */
    omit?: VisitorFilterOmit<ExtArgs> | null
    /**
     * Filter, which VisitorFilter to fetch.
     */
    where?: VisitorFilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorFilters to fetch.
     */
    orderBy?: VisitorFilterOrderByWithRelationInput | VisitorFilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitorFilters.
     */
    cursor?: VisitorFilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorFilters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorFilters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitorFilters.
     */
    distinct?: VisitorFilterScalarFieldEnum | VisitorFilterScalarFieldEnum[]
  }

  /**
   * VisitorFilter findFirstOrThrow
   */
  export type VisitorFilterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorFilter
     */
    select?: VisitorFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorFilter
     */
    omit?: VisitorFilterOmit<ExtArgs> | null
    /**
     * Filter, which VisitorFilter to fetch.
     */
    where?: VisitorFilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorFilters to fetch.
     */
    orderBy?: VisitorFilterOrderByWithRelationInput | VisitorFilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisitorFilters.
     */
    cursor?: VisitorFilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorFilters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorFilters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisitorFilters.
     */
    distinct?: VisitorFilterScalarFieldEnum | VisitorFilterScalarFieldEnum[]
  }

  /**
   * VisitorFilter findMany
   */
  export type VisitorFilterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorFilter
     */
    select?: VisitorFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorFilter
     */
    omit?: VisitorFilterOmit<ExtArgs> | null
    /**
     * Filter, which VisitorFilters to fetch.
     */
    where?: VisitorFilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisitorFilters to fetch.
     */
    orderBy?: VisitorFilterOrderByWithRelationInput | VisitorFilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisitorFilters.
     */
    cursor?: VisitorFilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisitorFilters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisitorFilters.
     */
    skip?: number
    distinct?: VisitorFilterScalarFieldEnum | VisitorFilterScalarFieldEnum[]
  }

  /**
   * VisitorFilter create
   */
  export type VisitorFilterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorFilter
     */
    select?: VisitorFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorFilter
     */
    omit?: VisitorFilterOmit<ExtArgs> | null
    /**
     * The data needed to create a VisitorFilter.
     */
    data: XOR<VisitorFilterCreateInput, VisitorFilterUncheckedCreateInput>
  }

  /**
   * VisitorFilter createMany
   */
  export type VisitorFilterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VisitorFilters.
     */
    data: VisitorFilterCreateManyInput | VisitorFilterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisitorFilter createManyAndReturn
   */
  export type VisitorFilterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorFilter
     */
    select?: VisitorFilterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorFilter
     */
    omit?: VisitorFilterOmit<ExtArgs> | null
    /**
     * The data used to create many VisitorFilters.
     */
    data: VisitorFilterCreateManyInput | VisitorFilterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisitorFilter update
   */
  export type VisitorFilterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorFilter
     */
    select?: VisitorFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorFilter
     */
    omit?: VisitorFilterOmit<ExtArgs> | null
    /**
     * The data needed to update a VisitorFilter.
     */
    data: XOR<VisitorFilterUpdateInput, VisitorFilterUncheckedUpdateInput>
    /**
     * Choose, which VisitorFilter to update.
     */
    where: VisitorFilterWhereUniqueInput
  }

  /**
   * VisitorFilter updateMany
   */
  export type VisitorFilterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VisitorFilters.
     */
    data: XOR<VisitorFilterUpdateManyMutationInput, VisitorFilterUncheckedUpdateManyInput>
    /**
     * Filter which VisitorFilters to update
     */
    where?: VisitorFilterWhereInput
    /**
     * Limit how many VisitorFilters to update.
     */
    limit?: number
  }

  /**
   * VisitorFilter updateManyAndReturn
   */
  export type VisitorFilterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorFilter
     */
    select?: VisitorFilterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorFilter
     */
    omit?: VisitorFilterOmit<ExtArgs> | null
    /**
     * The data used to update VisitorFilters.
     */
    data: XOR<VisitorFilterUpdateManyMutationInput, VisitorFilterUncheckedUpdateManyInput>
    /**
     * Filter which VisitorFilters to update
     */
    where?: VisitorFilterWhereInput
    /**
     * Limit how many VisitorFilters to update.
     */
    limit?: number
  }

  /**
   * VisitorFilter upsert
   */
  export type VisitorFilterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorFilter
     */
    select?: VisitorFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorFilter
     */
    omit?: VisitorFilterOmit<ExtArgs> | null
    /**
     * The filter to search for the VisitorFilter to update in case it exists.
     */
    where: VisitorFilterWhereUniqueInput
    /**
     * In case the VisitorFilter found by the `where` argument doesn't exist, create a new VisitorFilter with this data.
     */
    create: XOR<VisitorFilterCreateInput, VisitorFilterUncheckedCreateInput>
    /**
     * In case the VisitorFilter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitorFilterUpdateInput, VisitorFilterUncheckedUpdateInput>
  }

  /**
   * VisitorFilter delete
   */
  export type VisitorFilterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorFilter
     */
    select?: VisitorFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorFilter
     */
    omit?: VisitorFilterOmit<ExtArgs> | null
    /**
     * Filter which VisitorFilter to delete.
     */
    where: VisitorFilterWhereUniqueInput
  }

  /**
   * VisitorFilter deleteMany
   */
  export type VisitorFilterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisitorFilters to delete
     */
    where?: VisitorFilterWhereInput
    /**
     * Limit how many VisitorFilters to delete.
     */
    limit?: number
  }

  /**
   * VisitorFilter without action
   */
  export type VisitorFilterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorFilter
     */
    select?: VisitorFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisitorFilter
     */
    omit?: VisitorFilterOmit<ExtArgs> | null
  }


  /**
   * Model AnalyticsInfo
   */

  export type AggregateAnalyticsInfo = {
    _count: AnalyticsInfoCountAggregateOutputType | null
    _avg: AnalyticsInfoAvgAggregateOutputType | null
    _sum: AnalyticsInfoSumAggregateOutputType | null
    _min: AnalyticsInfoMinAggregateOutputType | null
    _max: AnalyticsInfoMaxAggregateOutputType | null
  }

  export type AnalyticsInfoAvgAggregateOutputType = {
    id: number | null
  }

  export type AnalyticsInfoSumAggregateOutputType = {
    id: number | null
  }

  export type AnalyticsInfoMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    domain: string | null
    name: string | null
    isActive: boolean | null
  }

  export type AnalyticsInfoMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    domain: string | null
    name: string | null
    isActive: boolean | null
  }

  export type AnalyticsInfoCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    domain: number
    name: number
    isActive: number
    _all: number
  }


  export type AnalyticsInfoAvgAggregateInputType = {
    id?: true
  }

  export type AnalyticsInfoSumAggregateInputType = {
    id?: true
  }

  export type AnalyticsInfoMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    domain?: true
    name?: true
    isActive?: true
  }

  export type AnalyticsInfoMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    domain?: true
    name?: true
    isActive?: true
  }

  export type AnalyticsInfoCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    domain?: true
    name?: true
    isActive?: true
    _all?: true
  }

  export type AnalyticsInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsInfo to aggregate.
     */
    where?: AnalyticsInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsInfos to fetch.
     */
    orderBy?: AnalyticsInfoOrderByWithRelationInput | AnalyticsInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyticsInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalyticsInfos
    **/
    _count?: true | AnalyticsInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalyticsInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalyticsInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyticsInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyticsInfoMaxAggregateInputType
  }

  export type GetAnalyticsInfoAggregateType<T extends AnalyticsInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalyticsInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalyticsInfo[P]>
      : GetScalarType<T[P], AggregateAnalyticsInfo[P]>
  }




  export type AnalyticsInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsInfoWhereInput
    orderBy?: AnalyticsInfoOrderByWithAggregationInput | AnalyticsInfoOrderByWithAggregationInput[]
    by: AnalyticsInfoScalarFieldEnum[] | AnalyticsInfoScalarFieldEnum
    having?: AnalyticsInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyticsInfoCountAggregateInputType | true
    _avg?: AnalyticsInfoAvgAggregateInputType
    _sum?: AnalyticsInfoSumAggregateInputType
    _min?: AnalyticsInfoMinAggregateInputType
    _max?: AnalyticsInfoMaxAggregateInputType
  }

  export type AnalyticsInfoGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    domain: string
    name: string
    isActive: boolean
    _count: AnalyticsInfoCountAggregateOutputType | null
    _avg: AnalyticsInfoAvgAggregateOutputType | null
    _sum: AnalyticsInfoSumAggregateOutputType | null
    _min: AnalyticsInfoMinAggregateOutputType | null
    _max: AnalyticsInfoMaxAggregateOutputType | null
  }

  type GetAnalyticsInfoGroupByPayload<T extends AnalyticsInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyticsInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyticsInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyticsInfoGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyticsInfoGroupByOutputType[P]>
        }
      >
    >


  export type AnalyticsInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    domain?: boolean
    name?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["analyticsInfo"]>

  export type AnalyticsInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    domain?: boolean
    name?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["analyticsInfo"]>

  export type AnalyticsInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    domain?: boolean
    name?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["analyticsInfo"]>

  export type AnalyticsInfoSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    domain?: boolean
    name?: boolean
    isActive?: boolean
  }

  export type AnalyticsInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "domain" | "name" | "isActive", ExtArgs["result"]["analyticsInfo"]>

  export type $AnalyticsInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalyticsInfo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      domain: string
      name: string
      isActive: boolean
    }, ExtArgs["result"]["analyticsInfo"]>
    composites: {}
  }

  type AnalyticsInfoGetPayload<S extends boolean | null | undefined | AnalyticsInfoDefaultArgs> = $Result.GetResult<Prisma.$AnalyticsInfoPayload, S>

  type AnalyticsInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalyticsInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalyticsInfoCountAggregateInputType | true
    }

  export interface AnalyticsInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalyticsInfo'], meta: { name: 'AnalyticsInfo' } }
    /**
     * Find zero or one AnalyticsInfo that matches the filter.
     * @param {AnalyticsInfoFindUniqueArgs} args - Arguments to find a AnalyticsInfo
     * @example
     * // Get one AnalyticsInfo
     * const analyticsInfo = await prisma.analyticsInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyticsInfoFindUniqueArgs>(args: SelectSubset<T, AnalyticsInfoFindUniqueArgs<ExtArgs>>): Prisma__AnalyticsInfoClient<$Result.GetResult<Prisma.$AnalyticsInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnalyticsInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalyticsInfoFindUniqueOrThrowArgs} args - Arguments to find a AnalyticsInfo
     * @example
     * // Get one AnalyticsInfo
     * const analyticsInfo = await prisma.analyticsInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyticsInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyticsInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyticsInfoClient<$Result.GetResult<Prisma.$AnalyticsInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalyticsInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsInfoFindFirstArgs} args - Arguments to find a AnalyticsInfo
     * @example
     * // Get one AnalyticsInfo
     * const analyticsInfo = await prisma.analyticsInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyticsInfoFindFirstArgs>(args?: SelectSubset<T, AnalyticsInfoFindFirstArgs<ExtArgs>>): Prisma__AnalyticsInfoClient<$Result.GetResult<Prisma.$AnalyticsInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalyticsInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsInfoFindFirstOrThrowArgs} args - Arguments to find a AnalyticsInfo
     * @example
     * // Get one AnalyticsInfo
     * const analyticsInfo = await prisma.analyticsInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyticsInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyticsInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyticsInfoClient<$Result.GetResult<Prisma.$AnalyticsInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnalyticsInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalyticsInfos
     * const analyticsInfos = await prisma.analyticsInfo.findMany()
     * 
     * // Get first 10 AnalyticsInfos
     * const analyticsInfos = await prisma.analyticsInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analyticsInfoWithIdOnly = await prisma.analyticsInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalyticsInfoFindManyArgs>(args?: SelectSubset<T, AnalyticsInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnalyticsInfo.
     * @param {AnalyticsInfoCreateArgs} args - Arguments to create a AnalyticsInfo.
     * @example
     * // Create one AnalyticsInfo
     * const AnalyticsInfo = await prisma.analyticsInfo.create({
     *   data: {
     *     // ... data to create a AnalyticsInfo
     *   }
     * })
     * 
     */
    create<T extends AnalyticsInfoCreateArgs>(args: SelectSubset<T, AnalyticsInfoCreateArgs<ExtArgs>>): Prisma__AnalyticsInfoClient<$Result.GetResult<Prisma.$AnalyticsInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnalyticsInfos.
     * @param {AnalyticsInfoCreateManyArgs} args - Arguments to create many AnalyticsInfos.
     * @example
     * // Create many AnalyticsInfos
     * const analyticsInfo = await prisma.analyticsInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyticsInfoCreateManyArgs>(args?: SelectSubset<T, AnalyticsInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalyticsInfos and returns the data saved in the database.
     * @param {AnalyticsInfoCreateManyAndReturnArgs} args - Arguments to create many AnalyticsInfos.
     * @example
     * // Create many AnalyticsInfos
     * const analyticsInfo = await prisma.analyticsInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalyticsInfos and only return the `id`
     * const analyticsInfoWithIdOnly = await prisma.analyticsInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalyticsInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalyticsInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnalyticsInfo.
     * @param {AnalyticsInfoDeleteArgs} args - Arguments to delete one AnalyticsInfo.
     * @example
     * // Delete one AnalyticsInfo
     * const AnalyticsInfo = await prisma.analyticsInfo.delete({
     *   where: {
     *     // ... filter to delete one AnalyticsInfo
     *   }
     * })
     * 
     */
    delete<T extends AnalyticsInfoDeleteArgs>(args: SelectSubset<T, AnalyticsInfoDeleteArgs<ExtArgs>>): Prisma__AnalyticsInfoClient<$Result.GetResult<Prisma.$AnalyticsInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnalyticsInfo.
     * @param {AnalyticsInfoUpdateArgs} args - Arguments to update one AnalyticsInfo.
     * @example
     * // Update one AnalyticsInfo
     * const analyticsInfo = await prisma.analyticsInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyticsInfoUpdateArgs>(args: SelectSubset<T, AnalyticsInfoUpdateArgs<ExtArgs>>): Prisma__AnalyticsInfoClient<$Result.GetResult<Prisma.$AnalyticsInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnalyticsInfos.
     * @param {AnalyticsInfoDeleteManyArgs} args - Arguments to filter AnalyticsInfos to delete.
     * @example
     * // Delete a few AnalyticsInfos
     * const { count } = await prisma.analyticsInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyticsInfoDeleteManyArgs>(args?: SelectSubset<T, AnalyticsInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalyticsInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalyticsInfos
     * const analyticsInfo = await prisma.analyticsInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyticsInfoUpdateManyArgs>(args: SelectSubset<T, AnalyticsInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalyticsInfos and returns the data updated in the database.
     * @param {AnalyticsInfoUpdateManyAndReturnArgs} args - Arguments to update many AnalyticsInfos.
     * @example
     * // Update many AnalyticsInfos
     * const analyticsInfo = await prisma.analyticsInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnalyticsInfos and only return the `id`
     * const analyticsInfoWithIdOnly = await prisma.analyticsInfo.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnalyticsInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalyticsInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnalyticsInfo.
     * @param {AnalyticsInfoUpsertArgs} args - Arguments to update or create a AnalyticsInfo.
     * @example
     * // Update or create a AnalyticsInfo
     * const analyticsInfo = await prisma.analyticsInfo.upsert({
     *   create: {
     *     // ... data to create a AnalyticsInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalyticsInfo we want to update
     *   }
     * })
     */
    upsert<T extends AnalyticsInfoUpsertArgs>(args: SelectSubset<T, AnalyticsInfoUpsertArgs<ExtArgs>>): Prisma__AnalyticsInfoClient<$Result.GetResult<Prisma.$AnalyticsInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnalyticsInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsInfoCountArgs} args - Arguments to filter AnalyticsInfos to count.
     * @example
     * // Count the number of AnalyticsInfos
     * const count = await prisma.analyticsInfo.count({
     *   where: {
     *     // ... the filter for the AnalyticsInfos we want to count
     *   }
     * })
    **/
    count<T extends AnalyticsInfoCountArgs>(
      args?: Subset<T, AnalyticsInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyticsInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalyticsInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalyticsInfoAggregateArgs>(args: Subset<T, AnalyticsInfoAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsInfoAggregateType<T>>

    /**
     * Group by AnalyticsInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsInfoGroupByArgs} args - Group by arguments.
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
      T extends AnalyticsInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyticsInfoGroupByArgs['orderBy'] }
        : { orderBy?: AnalyticsInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalyticsInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalyticsInfo model
   */
  readonly fields: AnalyticsInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalyticsInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyticsInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AnalyticsInfo model
   */
  interface AnalyticsInfoFieldRefs {
    readonly id: FieldRef<"AnalyticsInfo", 'Int'>
    readonly createdAt: FieldRef<"AnalyticsInfo", 'DateTime'>
    readonly updatedAt: FieldRef<"AnalyticsInfo", 'DateTime'>
    readonly domain: FieldRef<"AnalyticsInfo", 'String'>
    readonly name: FieldRef<"AnalyticsInfo", 'String'>
    readonly isActive: FieldRef<"AnalyticsInfo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * AnalyticsInfo findUnique
   */
  export type AnalyticsInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsInfo
     */
    select?: AnalyticsInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsInfo
     */
    omit?: AnalyticsInfoOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsInfo to fetch.
     */
    where: AnalyticsInfoWhereUniqueInput
  }

  /**
   * AnalyticsInfo findUniqueOrThrow
   */
  export type AnalyticsInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsInfo
     */
    select?: AnalyticsInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsInfo
     */
    omit?: AnalyticsInfoOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsInfo to fetch.
     */
    where: AnalyticsInfoWhereUniqueInput
  }

  /**
   * AnalyticsInfo findFirst
   */
  export type AnalyticsInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsInfo
     */
    select?: AnalyticsInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsInfo
     */
    omit?: AnalyticsInfoOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsInfo to fetch.
     */
    where?: AnalyticsInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsInfos to fetch.
     */
    orderBy?: AnalyticsInfoOrderByWithRelationInput | AnalyticsInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsInfos.
     */
    cursor?: AnalyticsInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsInfos.
     */
    distinct?: AnalyticsInfoScalarFieldEnum | AnalyticsInfoScalarFieldEnum[]
  }

  /**
   * AnalyticsInfo findFirstOrThrow
   */
  export type AnalyticsInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsInfo
     */
    select?: AnalyticsInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsInfo
     */
    omit?: AnalyticsInfoOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsInfo to fetch.
     */
    where?: AnalyticsInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsInfos to fetch.
     */
    orderBy?: AnalyticsInfoOrderByWithRelationInput | AnalyticsInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsInfos.
     */
    cursor?: AnalyticsInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsInfos.
     */
    distinct?: AnalyticsInfoScalarFieldEnum | AnalyticsInfoScalarFieldEnum[]
  }

  /**
   * AnalyticsInfo findMany
   */
  export type AnalyticsInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsInfo
     */
    select?: AnalyticsInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsInfo
     */
    omit?: AnalyticsInfoOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsInfos to fetch.
     */
    where?: AnalyticsInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsInfos to fetch.
     */
    orderBy?: AnalyticsInfoOrderByWithRelationInput | AnalyticsInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalyticsInfos.
     */
    cursor?: AnalyticsInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsInfos.
     */
    skip?: number
    distinct?: AnalyticsInfoScalarFieldEnum | AnalyticsInfoScalarFieldEnum[]
  }

  /**
   * AnalyticsInfo create
   */
  export type AnalyticsInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsInfo
     */
    select?: AnalyticsInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsInfo
     */
    omit?: AnalyticsInfoOmit<ExtArgs> | null
    /**
     * The data needed to create a AnalyticsInfo.
     */
    data: XOR<AnalyticsInfoCreateInput, AnalyticsInfoUncheckedCreateInput>
  }

  /**
   * AnalyticsInfo createMany
   */
  export type AnalyticsInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalyticsInfos.
     */
    data: AnalyticsInfoCreateManyInput | AnalyticsInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalyticsInfo createManyAndReturn
   */
  export type AnalyticsInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsInfo
     */
    select?: AnalyticsInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsInfo
     */
    omit?: AnalyticsInfoOmit<ExtArgs> | null
    /**
     * The data used to create many AnalyticsInfos.
     */
    data: AnalyticsInfoCreateManyInput | AnalyticsInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalyticsInfo update
   */
  export type AnalyticsInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsInfo
     */
    select?: AnalyticsInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsInfo
     */
    omit?: AnalyticsInfoOmit<ExtArgs> | null
    /**
     * The data needed to update a AnalyticsInfo.
     */
    data: XOR<AnalyticsInfoUpdateInput, AnalyticsInfoUncheckedUpdateInput>
    /**
     * Choose, which AnalyticsInfo to update.
     */
    where: AnalyticsInfoWhereUniqueInput
  }

  /**
   * AnalyticsInfo updateMany
   */
  export type AnalyticsInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalyticsInfos.
     */
    data: XOR<AnalyticsInfoUpdateManyMutationInput, AnalyticsInfoUncheckedUpdateManyInput>
    /**
     * Filter which AnalyticsInfos to update
     */
    where?: AnalyticsInfoWhereInput
    /**
     * Limit how many AnalyticsInfos to update.
     */
    limit?: number
  }

  /**
   * AnalyticsInfo updateManyAndReturn
   */
  export type AnalyticsInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsInfo
     */
    select?: AnalyticsInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsInfo
     */
    omit?: AnalyticsInfoOmit<ExtArgs> | null
    /**
     * The data used to update AnalyticsInfos.
     */
    data: XOR<AnalyticsInfoUpdateManyMutationInput, AnalyticsInfoUncheckedUpdateManyInput>
    /**
     * Filter which AnalyticsInfos to update
     */
    where?: AnalyticsInfoWhereInput
    /**
     * Limit how many AnalyticsInfos to update.
     */
    limit?: number
  }

  /**
   * AnalyticsInfo upsert
   */
  export type AnalyticsInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsInfo
     */
    select?: AnalyticsInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsInfo
     */
    omit?: AnalyticsInfoOmit<ExtArgs> | null
    /**
     * The filter to search for the AnalyticsInfo to update in case it exists.
     */
    where: AnalyticsInfoWhereUniqueInput
    /**
     * In case the AnalyticsInfo found by the `where` argument doesn't exist, create a new AnalyticsInfo with this data.
     */
    create: XOR<AnalyticsInfoCreateInput, AnalyticsInfoUncheckedCreateInput>
    /**
     * In case the AnalyticsInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyticsInfoUpdateInput, AnalyticsInfoUncheckedUpdateInput>
  }

  /**
   * AnalyticsInfo delete
   */
  export type AnalyticsInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsInfo
     */
    select?: AnalyticsInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsInfo
     */
    omit?: AnalyticsInfoOmit<ExtArgs> | null
    /**
     * Filter which AnalyticsInfo to delete.
     */
    where: AnalyticsInfoWhereUniqueInput
  }

  /**
   * AnalyticsInfo deleteMany
   */
  export type AnalyticsInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsInfos to delete
     */
    where?: AnalyticsInfoWhereInput
    /**
     * Limit how many AnalyticsInfos to delete.
     */
    limit?: number
  }

  /**
   * AnalyticsInfo without action
   */
  export type AnalyticsInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsInfo
     */
    select?: AnalyticsInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsInfo
     */
    omit?: AnalyticsInfoOmit<ExtArgs> | null
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


  export const AnalyticsScalarFieldEnum: {
    id: 'id',
    date: 'date',
    visitors: 'visitors',
    revenue: 'revenue',
    bounceRate: 'bounceRate',
    sessionTime: 'sessionTime'
  };

  export type AnalyticsScalarFieldEnum = (typeof AnalyticsScalarFieldEnum)[keyof typeof AnalyticsScalarFieldEnum]


  export const VisitorJourneyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    country: 'country',
    device: 'device',
    os: 'os',
    browser: 'browser',
    goal: 'goal',
    source: 'source',
    timeToComplete: 'timeToComplete',
    completedAt: 'completedAt',
    avatarSeed: 'avatarSeed'
  };

  export type VisitorJourneyScalarFieldEnum = (typeof VisitorJourneyScalarFieldEnum)[keyof typeof VisitorJourneyScalarFieldEnum]


  export const VisitorFilterScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    filters: 'filters',
    isDefault: 'isDefault'
  };

  export type VisitorFilterScalarFieldEnum = (typeof VisitorFilterScalarFieldEnum)[keyof typeof VisitorFilterScalarFieldEnum]


  export const AnalyticsInfoScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    domain: 'domain',
    name: 'name',
    isActive: 'isActive'
  };

  export type AnalyticsInfoScalarFieldEnum = (typeof AnalyticsInfoScalarFieldEnum)[keyof typeof AnalyticsInfoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type AnalyticsWhereInput = {
    AND?: AnalyticsWhereInput | AnalyticsWhereInput[]
    OR?: AnalyticsWhereInput[]
    NOT?: AnalyticsWhereInput | AnalyticsWhereInput[]
    id?: IntFilter<"Analytics"> | number
    date?: DateTimeFilter<"Analytics"> | Date | string
    visitors?: IntFilter<"Analytics"> | number
    revenue?: FloatFilter<"Analytics"> | number
    bounceRate?: FloatFilter<"Analytics"> | number
    sessionTime?: IntFilter<"Analytics"> | number
  }

  export type AnalyticsOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    visitors?: SortOrder
    revenue?: SortOrder
    bounceRate?: SortOrder
    sessionTime?: SortOrder
  }

  export type AnalyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnalyticsWhereInput | AnalyticsWhereInput[]
    OR?: AnalyticsWhereInput[]
    NOT?: AnalyticsWhereInput | AnalyticsWhereInput[]
    date?: DateTimeFilter<"Analytics"> | Date | string
    visitors?: IntFilter<"Analytics"> | number
    revenue?: FloatFilter<"Analytics"> | number
    bounceRate?: FloatFilter<"Analytics"> | number
    sessionTime?: IntFilter<"Analytics"> | number
  }, "id">

  export type AnalyticsOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    visitors?: SortOrder
    revenue?: SortOrder
    bounceRate?: SortOrder
    sessionTime?: SortOrder
    _count?: AnalyticsCountOrderByAggregateInput
    _avg?: AnalyticsAvgOrderByAggregateInput
    _max?: AnalyticsMaxOrderByAggregateInput
    _min?: AnalyticsMinOrderByAggregateInput
    _sum?: AnalyticsSumOrderByAggregateInput
  }

  export type AnalyticsScalarWhereWithAggregatesInput = {
    AND?: AnalyticsScalarWhereWithAggregatesInput | AnalyticsScalarWhereWithAggregatesInput[]
    OR?: AnalyticsScalarWhereWithAggregatesInput[]
    NOT?: AnalyticsScalarWhereWithAggregatesInput | AnalyticsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Analytics"> | number
    date?: DateTimeWithAggregatesFilter<"Analytics"> | Date | string
    visitors?: IntWithAggregatesFilter<"Analytics"> | number
    revenue?: FloatWithAggregatesFilter<"Analytics"> | number
    bounceRate?: FloatWithAggregatesFilter<"Analytics"> | number
    sessionTime?: IntWithAggregatesFilter<"Analytics"> | number
  }

  export type VisitorJourneyWhereInput = {
    AND?: VisitorJourneyWhereInput | VisitorJourneyWhereInput[]
    OR?: VisitorJourneyWhereInput[]
    NOT?: VisitorJourneyWhereInput | VisitorJourneyWhereInput[]
    id?: IntFilter<"VisitorJourney"> | number
    name?: StringFilter<"VisitorJourney"> | string
    country?: StringFilter<"VisitorJourney"> | string
    device?: StringFilter<"VisitorJourney"> | string
    os?: StringFilter<"VisitorJourney"> | string
    browser?: StringFilter<"VisitorJourney"> | string
    goal?: StringFilter<"VisitorJourney"> | string
    source?: StringFilter<"VisitorJourney"> | string
    timeToComplete?: StringFilter<"VisitorJourney"> | string
    completedAt?: DateTimeFilter<"VisitorJourney"> | Date | string
    avatarSeed?: StringFilter<"VisitorJourney"> | string
  }

  export type VisitorJourneyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    device?: SortOrder
    os?: SortOrder
    browser?: SortOrder
    goal?: SortOrder
    source?: SortOrder
    timeToComplete?: SortOrder
    completedAt?: SortOrder
    avatarSeed?: SortOrder
  }

  export type VisitorJourneyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VisitorJourneyWhereInput | VisitorJourneyWhereInput[]
    OR?: VisitorJourneyWhereInput[]
    NOT?: VisitorJourneyWhereInput | VisitorJourneyWhereInput[]
    name?: StringFilter<"VisitorJourney"> | string
    country?: StringFilter<"VisitorJourney"> | string
    device?: StringFilter<"VisitorJourney"> | string
    os?: StringFilter<"VisitorJourney"> | string
    browser?: StringFilter<"VisitorJourney"> | string
    goal?: StringFilter<"VisitorJourney"> | string
    source?: StringFilter<"VisitorJourney"> | string
    timeToComplete?: StringFilter<"VisitorJourney"> | string
    completedAt?: DateTimeFilter<"VisitorJourney"> | Date | string
    avatarSeed?: StringFilter<"VisitorJourney"> | string
  }, "id">

  export type VisitorJourneyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    device?: SortOrder
    os?: SortOrder
    browser?: SortOrder
    goal?: SortOrder
    source?: SortOrder
    timeToComplete?: SortOrder
    completedAt?: SortOrder
    avatarSeed?: SortOrder
    _count?: VisitorJourneyCountOrderByAggregateInput
    _avg?: VisitorJourneyAvgOrderByAggregateInput
    _max?: VisitorJourneyMaxOrderByAggregateInput
    _min?: VisitorJourneyMinOrderByAggregateInput
    _sum?: VisitorJourneySumOrderByAggregateInput
  }

  export type VisitorJourneyScalarWhereWithAggregatesInput = {
    AND?: VisitorJourneyScalarWhereWithAggregatesInput | VisitorJourneyScalarWhereWithAggregatesInput[]
    OR?: VisitorJourneyScalarWhereWithAggregatesInput[]
    NOT?: VisitorJourneyScalarWhereWithAggregatesInput | VisitorJourneyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VisitorJourney"> | number
    name?: StringWithAggregatesFilter<"VisitorJourney"> | string
    country?: StringWithAggregatesFilter<"VisitorJourney"> | string
    device?: StringWithAggregatesFilter<"VisitorJourney"> | string
    os?: StringWithAggregatesFilter<"VisitorJourney"> | string
    browser?: StringWithAggregatesFilter<"VisitorJourney"> | string
    goal?: StringWithAggregatesFilter<"VisitorJourney"> | string
    source?: StringWithAggregatesFilter<"VisitorJourney"> | string
    timeToComplete?: StringWithAggregatesFilter<"VisitorJourney"> | string
    completedAt?: DateTimeWithAggregatesFilter<"VisitorJourney"> | Date | string
    avatarSeed?: StringWithAggregatesFilter<"VisitorJourney"> | string
  }

  export type VisitorFilterWhereInput = {
    AND?: VisitorFilterWhereInput | VisitorFilterWhereInput[]
    OR?: VisitorFilterWhereInput[]
    NOT?: VisitorFilterWhereInput | VisitorFilterWhereInput[]
    id?: IntFilter<"VisitorFilter"> | number
    createdAt?: DateTimeFilter<"VisitorFilter"> | Date | string
    updatedAt?: DateTimeFilter<"VisitorFilter"> | Date | string
    name?: StringFilter<"VisitorFilter"> | string
    filters?: JsonFilter<"VisitorFilter">
    isDefault?: BoolFilter<"VisitorFilter"> | boolean
  }

  export type VisitorFilterOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    filters?: SortOrder
    isDefault?: SortOrder
  }

  export type VisitorFilterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VisitorFilterWhereInput | VisitorFilterWhereInput[]
    OR?: VisitorFilterWhereInput[]
    NOT?: VisitorFilterWhereInput | VisitorFilterWhereInput[]
    createdAt?: DateTimeFilter<"VisitorFilter"> | Date | string
    updatedAt?: DateTimeFilter<"VisitorFilter"> | Date | string
    name?: StringFilter<"VisitorFilter"> | string
    filters?: JsonFilter<"VisitorFilter">
    isDefault?: BoolFilter<"VisitorFilter"> | boolean
  }, "id">

  export type VisitorFilterOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    filters?: SortOrder
    isDefault?: SortOrder
    _count?: VisitorFilterCountOrderByAggregateInput
    _avg?: VisitorFilterAvgOrderByAggregateInput
    _max?: VisitorFilterMaxOrderByAggregateInput
    _min?: VisitorFilterMinOrderByAggregateInput
    _sum?: VisitorFilterSumOrderByAggregateInput
  }

  export type VisitorFilterScalarWhereWithAggregatesInput = {
    AND?: VisitorFilterScalarWhereWithAggregatesInput | VisitorFilterScalarWhereWithAggregatesInput[]
    OR?: VisitorFilterScalarWhereWithAggregatesInput[]
    NOT?: VisitorFilterScalarWhereWithAggregatesInput | VisitorFilterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VisitorFilter"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VisitorFilter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VisitorFilter"> | Date | string
    name?: StringWithAggregatesFilter<"VisitorFilter"> | string
    filters?: JsonWithAggregatesFilter<"VisitorFilter">
    isDefault?: BoolWithAggregatesFilter<"VisitorFilter"> | boolean
  }

  export type AnalyticsInfoWhereInput = {
    AND?: AnalyticsInfoWhereInput | AnalyticsInfoWhereInput[]
    OR?: AnalyticsInfoWhereInput[]
    NOT?: AnalyticsInfoWhereInput | AnalyticsInfoWhereInput[]
    id?: IntFilter<"AnalyticsInfo"> | number
    createdAt?: DateTimeFilter<"AnalyticsInfo"> | Date | string
    updatedAt?: DateTimeFilter<"AnalyticsInfo"> | Date | string
    domain?: StringFilter<"AnalyticsInfo"> | string
    name?: StringFilter<"AnalyticsInfo"> | string
    isActive?: BoolFilter<"AnalyticsInfo"> | boolean
  }

  export type AnalyticsInfoOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domain?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
  }

  export type AnalyticsInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    domain?: string
    AND?: AnalyticsInfoWhereInput | AnalyticsInfoWhereInput[]
    OR?: AnalyticsInfoWhereInput[]
    NOT?: AnalyticsInfoWhereInput | AnalyticsInfoWhereInput[]
    createdAt?: DateTimeFilter<"AnalyticsInfo"> | Date | string
    updatedAt?: DateTimeFilter<"AnalyticsInfo"> | Date | string
    name?: StringFilter<"AnalyticsInfo"> | string
    isActive?: BoolFilter<"AnalyticsInfo"> | boolean
  }, "id" | "domain">

  export type AnalyticsInfoOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domain?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    _count?: AnalyticsInfoCountOrderByAggregateInput
    _avg?: AnalyticsInfoAvgOrderByAggregateInput
    _max?: AnalyticsInfoMaxOrderByAggregateInput
    _min?: AnalyticsInfoMinOrderByAggregateInput
    _sum?: AnalyticsInfoSumOrderByAggregateInput
  }

  export type AnalyticsInfoScalarWhereWithAggregatesInput = {
    AND?: AnalyticsInfoScalarWhereWithAggregatesInput | AnalyticsInfoScalarWhereWithAggregatesInput[]
    OR?: AnalyticsInfoScalarWhereWithAggregatesInput[]
    NOT?: AnalyticsInfoScalarWhereWithAggregatesInput | AnalyticsInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AnalyticsInfo"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AnalyticsInfo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AnalyticsInfo"> | Date | string
    domain?: StringWithAggregatesFilter<"AnalyticsInfo"> | string
    name?: StringWithAggregatesFilter<"AnalyticsInfo"> | string
    isActive?: BoolWithAggregatesFilter<"AnalyticsInfo"> | boolean
  }

  export type AnalyticsCreateInput = {
    date: Date | string
    visitors: number
    revenue: number
    bounceRate: number
    sessionTime: number
  }

  export type AnalyticsUncheckedCreateInput = {
    id?: number
    date: Date | string
    visitors: number
    revenue: number
    bounceRate: number
    sessionTime: number
  }

  export type AnalyticsUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    visitors?: IntFieldUpdateOperationsInput | number
    revenue?: FloatFieldUpdateOperationsInput | number
    bounceRate?: FloatFieldUpdateOperationsInput | number
    sessionTime?: IntFieldUpdateOperationsInput | number
  }

  export type AnalyticsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    visitors?: IntFieldUpdateOperationsInput | number
    revenue?: FloatFieldUpdateOperationsInput | number
    bounceRate?: FloatFieldUpdateOperationsInput | number
    sessionTime?: IntFieldUpdateOperationsInput | number
  }

  export type AnalyticsCreateManyInput = {
    id?: number
    date: Date | string
    visitors: number
    revenue: number
    bounceRate: number
    sessionTime: number
  }

  export type AnalyticsUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    visitors?: IntFieldUpdateOperationsInput | number
    revenue?: FloatFieldUpdateOperationsInput | number
    bounceRate?: FloatFieldUpdateOperationsInput | number
    sessionTime?: IntFieldUpdateOperationsInput | number
  }

  export type AnalyticsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    visitors?: IntFieldUpdateOperationsInput | number
    revenue?: FloatFieldUpdateOperationsInput | number
    bounceRate?: FloatFieldUpdateOperationsInput | number
    sessionTime?: IntFieldUpdateOperationsInput | number
  }

  export type VisitorJourneyCreateInput = {
    name: string
    country: string
    device: string
    os: string
    browser: string
    goal: string
    source: string
    timeToComplete: string
    completedAt: Date | string
    avatarSeed: string
  }

  export type VisitorJourneyUncheckedCreateInput = {
    id?: number
    name: string
    country: string
    device: string
    os: string
    browser: string
    goal: string
    source: string
    timeToComplete: string
    completedAt: Date | string
    avatarSeed: string
  }

  export type VisitorJourneyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    browser?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    timeToComplete?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatarSeed?: StringFieldUpdateOperationsInput | string
  }

  export type VisitorJourneyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    browser?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    timeToComplete?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatarSeed?: StringFieldUpdateOperationsInput | string
  }

  export type VisitorJourneyCreateManyInput = {
    id?: number
    name: string
    country: string
    device: string
    os: string
    browser: string
    goal: string
    source: string
    timeToComplete: string
    completedAt: Date | string
    avatarSeed: string
  }

  export type VisitorJourneyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    browser?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    timeToComplete?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatarSeed?: StringFieldUpdateOperationsInput | string
  }

  export type VisitorJourneyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    os?: StringFieldUpdateOperationsInput | string
    browser?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    timeToComplete?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatarSeed?: StringFieldUpdateOperationsInput | string
  }

  export type VisitorFilterCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    filters: JsonNullValueInput | InputJsonValue
    isDefault?: boolean
  }

  export type VisitorFilterUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    filters: JsonNullValueInput | InputJsonValue
    isDefault?: boolean
  }

  export type VisitorFilterUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    filters?: JsonNullValueInput | InputJsonValue
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VisitorFilterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    filters?: JsonNullValueInput | InputJsonValue
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VisitorFilterCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    filters: JsonNullValueInput | InputJsonValue
    isDefault?: boolean
  }

  export type VisitorFilterUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    filters?: JsonNullValueInput | InputJsonValue
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VisitorFilterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    filters?: JsonNullValueInput | InputJsonValue
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnalyticsInfoCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    domain: string
    name: string
    isActive?: boolean
  }

  export type AnalyticsInfoUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    domain: string
    name: string
    isActive?: boolean
  }

  export type AnalyticsInfoUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnalyticsInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnalyticsInfoCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    domain: string
    name: string
    isActive?: boolean
  }

  export type AnalyticsInfoUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnalyticsInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AnalyticsCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    visitors?: SortOrder
    revenue?: SortOrder
    bounceRate?: SortOrder
    sessionTime?: SortOrder
  }

  export type AnalyticsAvgOrderByAggregateInput = {
    id?: SortOrder
    visitors?: SortOrder
    revenue?: SortOrder
    bounceRate?: SortOrder
    sessionTime?: SortOrder
  }

  export type AnalyticsMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    visitors?: SortOrder
    revenue?: SortOrder
    bounceRate?: SortOrder
    sessionTime?: SortOrder
  }

  export type AnalyticsMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    visitors?: SortOrder
    revenue?: SortOrder
    bounceRate?: SortOrder
    sessionTime?: SortOrder
  }

  export type AnalyticsSumOrderByAggregateInput = {
    id?: SortOrder
    visitors?: SortOrder
    revenue?: SortOrder
    bounceRate?: SortOrder
    sessionTime?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type VisitorJourneyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    device?: SortOrder
    os?: SortOrder
    browser?: SortOrder
    goal?: SortOrder
    source?: SortOrder
    timeToComplete?: SortOrder
    completedAt?: SortOrder
    avatarSeed?: SortOrder
  }

  export type VisitorJourneyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VisitorJourneyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    device?: SortOrder
    os?: SortOrder
    browser?: SortOrder
    goal?: SortOrder
    source?: SortOrder
    timeToComplete?: SortOrder
    completedAt?: SortOrder
    avatarSeed?: SortOrder
  }

  export type VisitorJourneyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    device?: SortOrder
    os?: SortOrder
    browser?: SortOrder
    goal?: SortOrder
    source?: SortOrder
    timeToComplete?: SortOrder
    completedAt?: SortOrder
    avatarSeed?: SortOrder
  }

  export type VisitorJourneySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type VisitorFilterCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    filters?: SortOrder
    isDefault?: SortOrder
  }

  export type VisitorFilterAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VisitorFilterMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
  }

  export type VisitorFilterMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
  }

  export type VisitorFilterSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AnalyticsInfoCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domain?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
  }

  export type AnalyticsInfoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AnalyticsInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domain?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
  }

  export type AnalyticsInfoMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domain?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
  }

  export type AnalyticsInfoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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