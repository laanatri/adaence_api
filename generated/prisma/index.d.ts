
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
 * Model activities
 * 
 */
export type activities = $Result.DefaultSelection<Prisma.$activitiesPayload>
/**
 * Model elders
 * 
 */
export type elders = $Result.DefaultSelection<Prisma.$eldersPayload>
/**
 * Model elders_activities
 * 
 */
export type elders_activities = $Result.DefaultSelection<Prisma.$elders_activitiesPayload>
/**
 * Model volonteers
 * 
 */
export type volonteers = $Result.DefaultSelection<Prisma.$volonteersPayload>
/**
 * Model volonteers_activities
 * 
 */
export type volonteers_activities = $Result.DefaultSelection<Prisma.$volonteers_activitiesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Activities
 * const activities = await prisma.activities.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Activities
   * const activities = await prisma.activities.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.activities`: Exposes CRUD operations for the **activities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activities.findMany()
    * ```
    */
  get activities(): Prisma.activitiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.elders`: Exposes CRUD operations for the **elders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Elders
    * const elders = await prisma.elders.findMany()
    * ```
    */
  get elders(): Prisma.eldersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.elders_activities`: Exposes CRUD operations for the **elders_activities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Elders_activities
    * const elders_activities = await prisma.elders_activities.findMany()
    * ```
    */
  get elders_activities(): Prisma.elders_activitiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.volonteers`: Exposes CRUD operations for the **volonteers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Volonteers
    * const volonteers = await prisma.volonteers.findMany()
    * ```
    */
  get volonteers(): Prisma.volonteersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.volonteers_activities`: Exposes CRUD operations for the **volonteers_activities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Volonteers_activities
    * const volonteers_activities = await prisma.volonteers_activities.findMany()
    * ```
    */
  get volonteers_activities(): Prisma.volonteers_activitiesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    activities: 'activities',
    elders: 'elders',
    elders_activities: 'elders_activities',
    volonteers: 'volonteers',
    volonteers_activities: 'volonteers_activities'
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
      modelProps: "activities" | "elders" | "elders_activities" | "volonteers" | "volonteers_activities"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      activities: {
        payload: Prisma.$activitiesPayload<ExtArgs>
        fields: Prisma.activitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.activitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.activitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>
          }
          findFirst: {
            args: Prisma.activitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.activitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>
          }
          findMany: {
            args: Prisma.activitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>[]
          }
          create: {
            args: Prisma.activitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>
          }
          createMany: {
            args: Prisma.activitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.activitiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>[]
          }
          delete: {
            args: Prisma.activitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>
          }
          update: {
            args: Prisma.activitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>
          }
          deleteMany: {
            args: Prisma.activitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.activitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.activitiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>[]
          }
          upsert: {
            args: Prisma.activitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>
          }
          aggregate: {
            args: Prisma.ActivitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivities>
          }
          groupBy: {
            args: Prisma.activitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.activitiesCountArgs<ExtArgs>
            result: $Utils.Optional<ActivitiesCountAggregateOutputType> | number
          }
        }
      }
      elders: {
        payload: Prisma.$eldersPayload<ExtArgs>
        fields: Prisma.eldersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eldersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eldersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eldersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eldersPayload>
          }
          findFirst: {
            args: Prisma.eldersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eldersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eldersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eldersPayload>
          }
          findMany: {
            args: Prisma.eldersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eldersPayload>[]
          }
          create: {
            args: Prisma.eldersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eldersPayload>
          }
          createMany: {
            args: Prisma.eldersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eldersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eldersPayload>[]
          }
          delete: {
            args: Prisma.eldersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eldersPayload>
          }
          update: {
            args: Prisma.eldersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eldersPayload>
          }
          deleteMany: {
            args: Prisma.eldersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eldersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.eldersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eldersPayload>[]
          }
          upsert: {
            args: Prisma.eldersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eldersPayload>
          }
          aggregate: {
            args: Prisma.EldersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateElders>
          }
          groupBy: {
            args: Prisma.eldersGroupByArgs<ExtArgs>
            result: $Utils.Optional<EldersGroupByOutputType>[]
          }
          count: {
            args: Prisma.eldersCountArgs<ExtArgs>
            result: $Utils.Optional<EldersCountAggregateOutputType> | number
          }
        }
      }
      elders_activities: {
        payload: Prisma.$elders_activitiesPayload<ExtArgs>
        fields: Prisma.elders_activitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.elders_activitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$elders_activitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.elders_activitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$elders_activitiesPayload>
          }
          findFirst: {
            args: Prisma.elders_activitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$elders_activitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.elders_activitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$elders_activitiesPayload>
          }
          findMany: {
            args: Prisma.elders_activitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$elders_activitiesPayload>[]
          }
          create: {
            args: Prisma.elders_activitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$elders_activitiesPayload>
          }
          createMany: {
            args: Prisma.elders_activitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.elders_activitiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$elders_activitiesPayload>[]
          }
          delete: {
            args: Prisma.elders_activitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$elders_activitiesPayload>
          }
          update: {
            args: Prisma.elders_activitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$elders_activitiesPayload>
          }
          deleteMany: {
            args: Prisma.elders_activitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.elders_activitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.elders_activitiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$elders_activitiesPayload>[]
          }
          upsert: {
            args: Prisma.elders_activitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$elders_activitiesPayload>
          }
          aggregate: {
            args: Prisma.Elders_activitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateElders_activities>
          }
          groupBy: {
            args: Prisma.elders_activitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Elders_activitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.elders_activitiesCountArgs<ExtArgs>
            result: $Utils.Optional<Elders_activitiesCountAggregateOutputType> | number
          }
        }
      }
      volonteers: {
        payload: Prisma.$volonteersPayload<ExtArgs>
        fields: Prisma.volonteersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.volonteersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volonteersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.volonteersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volonteersPayload>
          }
          findFirst: {
            args: Prisma.volonteersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volonteersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.volonteersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volonteersPayload>
          }
          findMany: {
            args: Prisma.volonteersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volonteersPayload>[]
          }
          create: {
            args: Prisma.volonteersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volonteersPayload>
          }
          createMany: {
            args: Prisma.volonteersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.volonteersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volonteersPayload>[]
          }
          delete: {
            args: Prisma.volonteersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volonteersPayload>
          }
          update: {
            args: Prisma.volonteersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volonteersPayload>
          }
          deleteMany: {
            args: Prisma.volonteersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.volonteersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.volonteersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volonteersPayload>[]
          }
          upsert: {
            args: Prisma.volonteersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volonteersPayload>
          }
          aggregate: {
            args: Prisma.VolonteersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVolonteers>
          }
          groupBy: {
            args: Prisma.volonteersGroupByArgs<ExtArgs>
            result: $Utils.Optional<VolonteersGroupByOutputType>[]
          }
          count: {
            args: Prisma.volonteersCountArgs<ExtArgs>
            result: $Utils.Optional<VolonteersCountAggregateOutputType> | number
          }
        }
      }
      volonteers_activities: {
        payload: Prisma.$volonteers_activitiesPayload<ExtArgs>
        fields: Prisma.volonteers_activitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.volonteers_activitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volonteers_activitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.volonteers_activitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volonteers_activitiesPayload>
          }
          findFirst: {
            args: Prisma.volonteers_activitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volonteers_activitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.volonteers_activitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volonteers_activitiesPayload>
          }
          findMany: {
            args: Prisma.volonteers_activitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volonteers_activitiesPayload>[]
          }
          create: {
            args: Prisma.volonteers_activitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volonteers_activitiesPayload>
          }
          createMany: {
            args: Prisma.volonteers_activitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.volonteers_activitiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volonteers_activitiesPayload>[]
          }
          delete: {
            args: Prisma.volonteers_activitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volonteers_activitiesPayload>
          }
          update: {
            args: Prisma.volonteers_activitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volonteers_activitiesPayload>
          }
          deleteMany: {
            args: Prisma.volonteers_activitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.volonteers_activitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.volonteers_activitiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volonteers_activitiesPayload>[]
          }
          upsert: {
            args: Prisma.volonteers_activitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$volonteers_activitiesPayload>
          }
          aggregate: {
            args: Prisma.Volonteers_activitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVolonteers_activities>
          }
          groupBy: {
            args: Prisma.volonteers_activitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Volonteers_activitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.volonteers_activitiesCountArgs<ExtArgs>
            result: $Utils.Optional<Volonteers_activitiesCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    activities?: activitiesOmit
    elders?: eldersOmit
    elders_activities?: elders_activitiesOmit
    volonteers?: volonteersOmit
    volonteers_activities?: volonteers_activitiesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ActivitiesCountOutputType
   */

  export type ActivitiesCountOutputType = {
    elders_activities: number
    volonteers_activities: number
  }

  export type ActivitiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elders_activities?: boolean | ActivitiesCountOutputTypeCountElders_activitiesArgs
    volonteers_activities?: boolean | ActivitiesCountOutputTypeCountVolonteers_activitiesArgs
  }

  // Custom InputTypes
  /**
   * ActivitiesCountOutputType without action
   */
  export type ActivitiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivitiesCountOutputType
     */
    select?: ActivitiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActivitiesCountOutputType without action
   */
  export type ActivitiesCountOutputTypeCountElders_activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: elders_activitiesWhereInput
  }

  /**
   * ActivitiesCountOutputType without action
   */
  export type ActivitiesCountOutputTypeCountVolonteers_activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: volonteers_activitiesWhereInput
  }


  /**
   * Count Type EldersCountOutputType
   */

  export type EldersCountOutputType = {
    elders_activities: number
  }

  export type EldersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elders_activities?: boolean | EldersCountOutputTypeCountElders_activitiesArgs
  }

  // Custom InputTypes
  /**
   * EldersCountOutputType without action
   */
  export type EldersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EldersCountOutputType
     */
    select?: EldersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EldersCountOutputType without action
   */
  export type EldersCountOutputTypeCountElders_activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: elders_activitiesWhereInput
  }


  /**
   * Count Type VolonteersCountOutputType
   */

  export type VolonteersCountOutputType = {
    volonteers_activities: number
  }

  export type VolonteersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volonteers_activities?: boolean | VolonteersCountOutputTypeCountVolonteers_activitiesArgs
  }

  // Custom InputTypes
  /**
   * VolonteersCountOutputType without action
   */
  export type VolonteersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolonteersCountOutputType
     */
    select?: VolonteersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VolonteersCountOutputType without action
   */
  export type VolonteersCountOutputTypeCountVolonteers_activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: volonteers_activitiesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model activities
   */

  export type AggregateActivities = {
    _count: ActivitiesCountAggregateOutputType | null
    _avg: ActivitiesAvgAggregateOutputType | null
    _sum: ActivitiesSumAggregateOutputType | null
    _min: ActivitiesMinAggregateOutputType | null
    _max: ActivitiesMaxAggregateOutputType | null
  }

  export type ActivitiesAvgAggregateOutputType = {
    id: number | null
  }

  export type ActivitiesSumAggregateOutputType = {
    id: number | null
  }

  export type ActivitiesMinAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type ActivitiesMaxAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type ActivitiesCountAggregateOutputType = {
    id: number
    title: number
    _all: number
  }


  export type ActivitiesAvgAggregateInputType = {
    id?: true
  }

  export type ActivitiesSumAggregateInputType = {
    id?: true
  }

  export type ActivitiesMinAggregateInputType = {
    id?: true
    title?: true
  }

  export type ActivitiesMaxAggregateInputType = {
    id?: true
    title?: true
  }

  export type ActivitiesCountAggregateInputType = {
    id?: true
    title?: true
    _all?: true
  }

  export type ActivitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activities to aggregate.
     */
    where?: activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activities to fetch.
     */
    orderBy?: activitiesOrderByWithRelationInput | activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned activities
    **/
    _count?: true | ActivitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivitiesMaxAggregateInputType
  }

  export type GetActivitiesAggregateType<T extends ActivitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateActivities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivities[P]>
      : GetScalarType<T[P], AggregateActivities[P]>
  }




  export type activitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activitiesWhereInput
    orderBy?: activitiesOrderByWithAggregationInput | activitiesOrderByWithAggregationInput[]
    by: ActivitiesScalarFieldEnum[] | ActivitiesScalarFieldEnum
    having?: activitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivitiesCountAggregateInputType | true
    _avg?: ActivitiesAvgAggregateInputType
    _sum?: ActivitiesSumAggregateInputType
    _min?: ActivitiesMinAggregateInputType
    _max?: ActivitiesMaxAggregateInputType
  }

  export type ActivitiesGroupByOutputType = {
    id: number
    title: string | null
    _count: ActivitiesCountAggregateOutputType | null
    _avg: ActivitiesAvgAggregateOutputType | null
    _sum: ActivitiesSumAggregateOutputType | null
    _min: ActivitiesMinAggregateOutputType | null
    _max: ActivitiesMaxAggregateOutputType | null
  }

  type GetActivitiesGroupByPayload<T extends activitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivitiesGroupByOutputType[P]>
            : GetScalarType<T[P], ActivitiesGroupByOutputType[P]>
        }
      >
    >


  export type activitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    elders_activities?: boolean | activities$elders_activitiesArgs<ExtArgs>
    volonteers_activities?: boolean | activities$volonteers_activitiesArgs<ExtArgs>
    _count?: boolean | ActivitiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activities"]>

  export type activitiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
  }, ExtArgs["result"]["activities"]>

  export type activitiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
  }, ExtArgs["result"]["activities"]>

  export type activitiesSelectScalar = {
    id?: boolean
    title?: boolean
  }

  export type activitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title", ExtArgs["result"]["activities"]>
  export type activitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elders_activities?: boolean | activities$elders_activitiesArgs<ExtArgs>
    volonteers_activities?: boolean | activities$volonteers_activitiesArgs<ExtArgs>
    _count?: boolean | ActivitiesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type activitiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type activitiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $activitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "activities"
    objects: {
      elders_activities: Prisma.$elders_activitiesPayload<ExtArgs>[]
      volonteers_activities: Prisma.$volonteers_activitiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
    }, ExtArgs["result"]["activities"]>
    composites: {}
  }

  type activitiesGetPayload<S extends boolean | null | undefined | activitiesDefaultArgs> = $Result.GetResult<Prisma.$activitiesPayload, S>

  type activitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<activitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivitiesCountAggregateInputType | true
    }

  export interface activitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['activities'], meta: { name: 'activities' } }
    /**
     * Find zero or one Activities that matches the filter.
     * @param {activitiesFindUniqueArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends activitiesFindUniqueArgs>(args: SelectSubset<T, activitiesFindUniqueArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {activitiesFindUniqueOrThrowArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends activitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, activitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitiesFindFirstArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends activitiesFindFirstArgs>(args?: SelectSubset<T, activitiesFindFirstArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitiesFindFirstOrThrowArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends activitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, activitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activities.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activitiesWithIdOnly = await prisma.activities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends activitiesFindManyArgs>(args?: SelectSubset<T, activitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activities.
     * @param {activitiesCreateArgs} args - Arguments to create a Activities.
     * @example
     * // Create one Activities
     * const Activities = await prisma.activities.create({
     *   data: {
     *     // ... data to create a Activities
     *   }
     * })
     * 
     */
    create<T extends activitiesCreateArgs>(args: SelectSubset<T, activitiesCreateArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {activitiesCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activities = await prisma.activities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends activitiesCreateManyArgs>(args?: SelectSubset<T, activitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {activitiesCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activities = await prisma.activities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activitiesWithIdOnly = await prisma.activities.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends activitiesCreateManyAndReturnArgs>(args?: SelectSubset<T, activitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activities.
     * @param {activitiesDeleteArgs} args - Arguments to delete one Activities.
     * @example
     * // Delete one Activities
     * const Activities = await prisma.activities.delete({
     *   where: {
     *     // ... filter to delete one Activities
     *   }
     * })
     * 
     */
    delete<T extends activitiesDeleteArgs>(args: SelectSubset<T, activitiesDeleteArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activities.
     * @param {activitiesUpdateArgs} args - Arguments to update one Activities.
     * @example
     * // Update one Activities
     * const activities = await prisma.activities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends activitiesUpdateArgs>(args: SelectSubset<T, activitiesUpdateArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {activitiesDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends activitiesDeleteManyArgs>(args?: SelectSubset<T, activitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activities = await prisma.activities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends activitiesUpdateManyArgs>(args: SelectSubset<T, activitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {activitiesUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activities = await prisma.activities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `id`
     * const activitiesWithIdOnly = await prisma.activities.updateManyAndReturn({
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
    updateManyAndReturn<T extends activitiesUpdateManyAndReturnArgs>(args: SelectSubset<T, activitiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activities.
     * @param {activitiesUpsertArgs} args - Arguments to update or create a Activities.
     * @example
     * // Update or create a Activities
     * const activities = await prisma.activities.upsert({
     *   create: {
     *     // ... data to create a Activities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activities we want to update
     *   }
     * })
     */
    upsert<T extends activitiesUpsertArgs>(args: SelectSubset<T, activitiesUpsertArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitiesCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activities.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends activitiesCountArgs>(
      args?: Subset<T, activitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivitiesAggregateArgs>(args: Subset<T, ActivitiesAggregateArgs>): Prisma.PrismaPromise<GetActivitiesAggregateType<T>>

    /**
     * Group by Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitiesGroupByArgs} args - Group by arguments.
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
      T extends activitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: activitiesGroupByArgs['orderBy'] }
        : { orderBy?: activitiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, activitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the activities model
   */
  readonly fields: activitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for activities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__activitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    elders_activities<T extends activities$elders_activitiesArgs<ExtArgs> = {}>(args?: Subset<T, activities$elders_activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$elders_activitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    volonteers_activities<T extends activities$volonteers_activitiesArgs<ExtArgs> = {}>(args?: Subset<T, activities$volonteers_activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$volonteers_activitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the activities model
   */
  interface activitiesFieldRefs {
    readonly id: FieldRef<"activities", 'Int'>
    readonly title: FieldRef<"activities", 'String'>
  }
    

  // Custom InputTypes
  /**
   * activities findUnique
   */
  export type activitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * Filter, which activities to fetch.
     */
    where: activitiesWhereUniqueInput
  }

  /**
   * activities findUniqueOrThrow
   */
  export type activitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * Filter, which activities to fetch.
     */
    where: activitiesWhereUniqueInput
  }

  /**
   * activities findFirst
   */
  export type activitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * Filter, which activities to fetch.
     */
    where?: activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activities to fetch.
     */
    orderBy?: activitiesOrderByWithRelationInput | activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activities.
     */
    cursor?: activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activities.
     */
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }

  /**
   * activities findFirstOrThrow
   */
  export type activitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * Filter, which activities to fetch.
     */
    where?: activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activities to fetch.
     */
    orderBy?: activitiesOrderByWithRelationInput | activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activities.
     */
    cursor?: activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activities.
     */
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }

  /**
   * activities findMany
   */
  export type activitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * Filter, which activities to fetch.
     */
    where?: activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activities to fetch.
     */
    orderBy?: activitiesOrderByWithRelationInput | activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing activities.
     */
    cursor?: activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activities.
     */
    skip?: number
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }

  /**
   * activities create
   */
  export type activitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a activities.
     */
    data?: XOR<activitiesCreateInput, activitiesUncheckedCreateInput>
  }

  /**
   * activities createMany
   */
  export type activitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many activities.
     */
    data: activitiesCreateManyInput | activitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * activities createManyAndReturn
   */
  export type activitiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * The data used to create many activities.
     */
    data: activitiesCreateManyInput | activitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * activities update
   */
  export type activitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a activities.
     */
    data: XOR<activitiesUpdateInput, activitiesUncheckedUpdateInput>
    /**
     * Choose, which activities to update.
     */
    where: activitiesWhereUniqueInput
  }

  /**
   * activities updateMany
   */
  export type activitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update activities.
     */
    data: XOR<activitiesUpdateManyMutationInput, activitiesUncheckedUpdateManyInput>
    /**
     * Filter which activities to update
     */
    where?: activitiesWhereInput
    /**
     * Limit how many activities to update.
     */
    limit?: number
  }

  /**
   * activities updateManyAndReturn
   */
  export type activitiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * The data used to update activities.
     */
    data: XOR<activitiesUpdateManyMutationInput, activitiesUncheckedUpdateManyInput>
    /**
     * Filter which activities to update
     */
    where?: activitiesWhereInput
    /**
     * Limit how many activities to update.
     */
    limit?: number
  }

  /**
   * activities upsert
   */
  export type activitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the activities to update in case it exists.
     */
    where: activitiesWhereUniqueInput
    /**
     * In case the activities found by the `where` argument doesn't exist, create a new activities with this data.
     */
    create: XOR<activitiesCreateInput, activitiesUncheckedCreateInput>
    /**
     * In case the activities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<activitiesUpdateInput, activitiesUncheckedUpdateInput>
  }

  /**
   * activities delete
   */
  export type activitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * Filter which activities to delete.
     */
    where: activitiesWhereUniqueInput
  }

  /**
   * activities deleteMany
   */
  export type activitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activities to delete
     */
    where?: activitiesWhereInput
    /**
     * Limit how many activities to delete.
     */
    limit?: number
  }

  /**
   * activities.elders_activities
   */
  export type activities$elders_activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders_activities
     */
    select?: elders_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elders_activities
     */
    omit?: elders_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: elders_activitiesInclude<ExtArgs> | null
    where?: elders_activitiesWhereInput
    orderBy?: elders_activitiesOrderByWithRelationInput | elders_activitiesOrderByWithRelationInput[]
    cursor?: elders_activitiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Elders_activitiesScalarFieldEnum | Elders_activitiesScalarFieldEnum[]
  }

  /**
   * activities.volonteers_activities
   */
  export type activities$volonteers_activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers_activities
     */
    select?: volonteers_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers_activities
     */
    omit?: volonteers_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteers_activitiesInclude<ExtArgs> | null
    where?: volonteers_activitiesWhereInput
    orderBy?: volonteers_activitiesOrderByWithRelationInput | volonteers_activitiesOrderByWithRelationInput[]
    cursor?: volonteers_activitiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Volonteers_activitiesScalarFieldEnum | Volonteers_activitiesScalarFieldEnum[]
  }

  /**
   * activities without action
   */
  export type activitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
  }


  /**
   * Model elders
   */

  export type AggregateElders = {
    _count: EldersCountAggregateOutputType | null
    _avg: EldersAvgAggregateOutputType | null
    _sum: EldersSumAggregateOutputType | null
    _min: EldersMinAggregateOutputType | null
    _max: EldersMaxAggregateOutputType | null
  }

  export type EldersAvgAggregateOutputType = {
    id: number | null
    zipcode: number | null
  }

  export type EldersSumAggregateOutputType = {
    id: number | null
    zipcode: number | null
  }

  export type EldersMinAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    phone_number: string | null
    birthdate: Date | null
    job: string | null
    city: string | null
    zipcode: number | null
    description: string | null
    url_image: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EldersMaxAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    phone_number: string | null
    birthdate: Date | null
    job: string | null
    city: string | null
    zipcode: number | null
    description: string | null
    url_image: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EldersCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    phone_number: number
    birthdate: number
    job: number
    city: number
    zipcode: number
    description: number
    url_image: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type EldersAvgAggregateInputType = {
    id?: true
    zipcode?: true
  }

  export type EldersSumAggregateInputType = {
    id?: true
    zipcode?: true
  }

  export type EldersMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    phone_number?: true
    birthdate?: true
    job?: true
    city?: true
    zipcode?: true
    description?: true
    url_image?: true
    created_at?: true
    updated_at?: true
  }

  export type EldersMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    phone_number?: true
    birthdate?: true
    job?: true
    city?: true
    zipcode?: true
    description?: true
    url_image?: true
    created_at?: true
    updated_at?: true
  }

  export type EldersCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    phone_number?: true
    birthdate?: true
    job?: true
    city?: true
    zipcode?: true
    description?: true
    url_image?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type EldersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which elders to aggregate.
     */
    where?: eldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of elders to fetch.
     */
    orderBy?: eldersOrderByWithRelationInput | eldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` elders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` elders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned elders
    **/
    _count?: true | EldersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EldersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EldersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EldersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EldersMaxAggregateInputType
  }

  export type GetEldersAggregateType<T extends EldersAggregateArgs> = {
        [P in keyof T & keyof AggregateElders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElders[P]>
      : GetScalarType<T[P], AggregateElders[P]>
  }




  export type eldersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eldersWhereInput
    orderBy?: eldersOrderByWithAggregationInput | eldersOrderByWithAggregationInput[]
    by: EldersScalarFieldEnum[] | EldersScalarFieldEnum
    having?: eldersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EldersCountAggregateInputType | true
    _avg?: EldersAvgAggregateInputType
    _sum?: EldersSumAggregateInputType
    _min?: EldersMinAggregateInputType
    _max?: EldersMaxAggregateInputType
  }

  export type EldersGroupByOutputType = {
    id: number
    firstname: string
    lastname: string
    email: string
    phone_number: string
    birthdate: Date | null
    job: string | null
    city: string
    zipcode: number
    description: string
    url_image: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: EldersCountAggregateOutputType | null
    _avg: EldersAvgAggregateOutputType | null
    _sum: EldersSumAggregateOutputType | null
    _min: EldersMinAggregateOutputType | null
    _max: EldersMaxAggregateOutputType | null
  }

  type GetEldersGroupByPayload<T extends eldersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EldersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EldersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EldersGroupByOutputType[P]>
            : GetScalarType<T[P], EldersGroupByOutputType[P]>
        }
      >
    >


  export type eldersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    phone_number?: boolean
    birthdate?: boolean
    job?: boolean
    city?: boolean
    zipcode?: boolean
    description?: boolean
    url_image?: boolean
    created_at?: boolean
    updated_at?: boolean
    elders_activities?: boolean | elders$elders_activitiesArgs<ExtArgs>
    _count?: boolean | EldersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["elders"]>

  export type eldersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    phone_number?: boolean
    birthdate?: boolean
    job?: boolean
    city?: boolean
    zipcode?: boolean
    description?: boolean
    url_image?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["elders"]>

  export type eldersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    phone_number?: boolean
    birthdate?: boolean
    job?: boolean
    city?: boolean
    zipcode?: boolean
    description?: boolean
    url_image?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["elders"]>

  export type eldersSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    phone_number?: boolean
    birthdate?: boolean
    job?: boolean
    city?: boolean
    zipcode?: boolean
    description?: boolean
    url_image?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type eldersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "email" | "phone_number" | "birthdate" | "job" | "city" | "zipcode" | "description" | "url_image" | "created_at" | "updated_at", ExtArgs["result"]["elders"]>
  export type eldersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elders_activities?: boolean | elders$elders_activitiesArgs<ExtArgs>
    _count?: boolean | EldersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type eldersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type eldersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $eldersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "elders"
    objects: {
      elders_activities: Prisma.$elders_activitiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstname: string
      lastname: string
      email: string
      phone_number: string
      birthdate: Date | null
      job: string | null
      city: string
      zipcode: number
      description: string
      url_image: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["elders"]>
    composites: {}
  }

  type eldersGetPayload<S extends boolean | null | undefined | eldersDefaultArgs> = $Result.GetResult<Prisma.$eldersPayload, S>

  type eldersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eldersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EldersCountAggregateInputType | true
    }

  export interface eldersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['elders'], meta: { name: 'elders' } }
    /**
     * Find zero or one Elders that matches the filter.
     * @param {eldersFindUniqueArgs} args - Arguments to find a Elders
     * @example
     * // Get one Elders
     * const elders = await prisma.elders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eldersFindUniqueArgs>(args: SelectSubset<T, eldersFindUniqueArgs<ExtArgs>>): Prisma__eldersClient<$Result.GetResult<Prisma.$eldersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Elders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eldersFindUniqueOrThrowArgs} args - Arguments to find a Elders
     * @example
     * // Get one Elders
     * const elders = await prisma.elders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eldersFindUniqueOrThrowArgs>(args: SelectSubset<T, eldersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eldersClient<$Result.GetResult<Prisma.$eldersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Elders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eldersFindFirstArgs} args - Arguments to find a Elders
     * @example
     * // Get one Elders
     * const elders = await prisma.elders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eldersFindFirstArgs>(args?: SelectSubset<T, eldersFindFirstArgs<ExtArgs>>): Prisma__eldersClient<$Result.GetResult<Prisma.$eldersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Elders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eldersFindFirstOrThrowArgs} args - Arguments to find a Elders
     * @example
     * // Get one Elders
     * const elders = await prisma.elders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eldersFindFirstOrThrowArgs>(args?: SelectSubset<T, eldersFindFirstOrThrowArgs<ExtArgs>>): Prisma__eldersClient<$Result.GetResult<Prisma.$eldersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Elders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eldersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Elders
     * const elders = await prisma.elders.findMany()
     * 
     * // Get first 10 Elders
     * const elders = await prisma.elders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eldersWithIdOnly = await prisma.elders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eldersFindManyArgs>(args?: SelectSubset<T, eldersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eldersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Elders.
     * @param {eldersCreateArgs} args - Arguments to create a Elders.
     * @example
     * // Create one Elders
     * const Elders = await prisma.elders.create({
     *   data: {
     *     // ... data to create a Elders
     *   }
     * })
     * 
     */
    create<T extends eldersCreateArgs>(args: SelectSubset<T, eldersCreateArgs<ExtArgs>>): Prisma__eldersClient<$Result.GetResult<Prisma.$eldersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Elders.
     * @param {eldersCreateManyArgs} args - Arguments to create many Elders.
     * @example
     * // Create many Elders
     * const elders = await prisma.elders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eldersCreateManyArgs>(args?: SelectSubset<T, eldersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Elders and returns the data saved in the database.
     * @param {eldersCreateManyAndReturnArgs} args - Arguments to create many Elders.
     * @example
     * // Create many Elders
     * const elders = await prisma.elders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Elders and only return the `id`
     * const eldersWithIdOnly = await prisma.elders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eldersCreateManyAndReturnArgs>(args?: SelectSubset<T, eldersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eldersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Elders.
     * @param {eldersDeleteArgs} args - Arguments to delete one Elders.
     * @example
     * // Delete one Elders
     * const Elders = await prisma.elders.delete({
     *   where: {
     *     // ... filter to delete one Elders
     *   }
     * })
     * 
     */
    delete<T extends eldersDeleteArgs>(args: SelectSubset<T, eldersDeleteArgs<ExtArgs>>): Prisma__eldersClient<$Result.GetResult<Prisma.$eldersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Elders.
     * @param {eldersUpdateArgs} args - Arguments to update one Elders.
     * @example
     * // Update one Elders
     * const elders = await prisma.elders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eldersUpdateArgs>(args: SelectSubset<T, eldersUpdateArgs<ExtArgs>>): Prisma__eldersClient<$Result.GetResult<Prisma.$eldersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Elders.
     * @param {eldersDeleteManyArgs} args - Arguments to filter Elders to delete.
     * @example
     * // Delete a few Elders
     * const { count } = await prisma.elders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eldersDeleteManyArgs>(args?: SelectSubset<T, eldersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Elders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eldersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Elders
     * const elders = await prisma.elders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eldersUpdateManyArgs>(args: SelectSubset<T, eldersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Elders and returns the data updated in the database.
     * @param {eldersUpdateManyAndReturnArgs} args - Arguments to update many Elders.
     * @example
     * // Update many Elders
     * const elders = await prisma.elders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Elders and only return the `id`
     * const eldersWithIdOnly = await prisma.elders.updateManyAndReturn({
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
    updateManyAndReturn<T extends eldersUpdateManyAndReturnArgs>(args: SelectSubset<T, eldersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eldersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Elders.
     * @param {eldersUpsertArgs} args - Arguments to update or create a Elders.
     * @example
     * // Update or create a Elders
     * const elders = await prisma.elders.upsert({
     *   create: {
     *     // ... data to create a Elders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Elders we want to update
     *   }
     * })
     */
    upsert<T extends eldersUpsertArgs>(args: SelectSubset<T, eldersUpsertArgs<ExtArgs>>): Prisma__eldersClient<$Result.GetResult<Prisma.$eldersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Elders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eldersCountArgs} args - Arguments to filter Elders to count.
     * @example
     * // Count the number of Elders
     * const count = await prisma.elders.count({
     *   where: {
     *     // ... the filter for the Elders we want to count
     *   }
     * })
    **/
    count<T extends eldersCountArgs>(
      args?: Subset<T, eldersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EldersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Elders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EldersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EldersAggregateArgs>(args: Subset<T, EldersAggregateArgs>): Prisma.PrismaPromise<GetEldersAggregateType<T>>

    /**
     * Group by Elders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eldersGroupByArgs} args - Group by arguments.
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
      T extends eldersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eldersGroupByArgs['orderBy'] }
        : { orderBy?: eldersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, eldersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEldersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the elders model
   */
  readonly fields: eldersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for elders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eldersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    elders_activities<T extends elders$elders_activitiesArgs<ExtArgs> = {}>(args?: Subset<T, elders$elders_activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$elders_activitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the elders model
   */
  interface eldersFieldRefs {
    readonly id: FieldRef<"elders", 'Int'>
    readonly firstname: FieldRef<"elders", 'String'>
    readonly lastname: FieldRef<"elders", 'String'>
    readonly email: FieldRef<"elders", 'String'>
    readonly phone_number: FieldRef<"elders", 'String'>
    readonly birthdate: FieldRef<"elders", 'DateTime'>
    readonly job: FieldRef<"elders", 'String'>
    readonly city: FieldRef<"elders", 'String'>
    readonly zipcode: FieldRef<"elders", 'Int'>
    readonly description: FieldRef<"elders", 'String'>
    readonly url_image: FieldRef<"elders", 'String'>
    readonly created_at: FieldRef<"elders", 'DateTime'>
    readonly updated_at: FieldRef<"elders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * elders findUnique
   */
  export type eldersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders
     */
    select?: eldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elders
     */
    omit?: eldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eldersInclude<ExtArgs> | null
    /**
     * Filter, which elders to fetch.
     */
    where: eldersWhereUniqueInput
  }

  /**
   * elders findUniqueOrThrow
   */
  export type eldersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders
     */
    select?: eldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elders
     */
    omit?: eldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eldersInclude<ExtArgs> | null
    /**
     * Filter, which elders to fetch.
     */
    where: eldersWhereUniqueInput
  }

  /**
   * elders findFirst
   */
  export type eldersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders
     */
    select?: eldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elders
     */
    omit?: eldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eldersInclude<ExtArgs> | null
    /**
     * Filter, which elders to fetch.
     */
    where?: eldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of elders to fetch.
     */
    orderBy?: eldersOrderByWithRelationInput | eldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for elders.
     */
    cursor?: eldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` elders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` elders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of elders.
     */
    distinct?: EldersScalarFieldEnum | EldersScalarFieldEnum[]
  }

  /**
   * elders findFirstOrThrow
   */
  export type eldersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders
     */
    select?: eldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elders
     */
    omit?: eldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eldersInclude<ExtArgs> | null
    /**
     * Filter, which elders to fetch.
     */
    where?: eldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of elders to fetch.
     */
    orderBy?: eldersOrderByWithRelationInput | eldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for elders.
     */
    cursor?: eldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` elders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` elders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of elders.
     */
    distinct?: EldersScalarFieldEnum | EldersScalarFieldEnum[]
  }

  /**
   * elders findMany
   */
  export type eldersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders
     */
    select?: eldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elders
     */
    omit?: eldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eldersInclude<ExtArgs> | null
    /**
     * Filter, which elders to fetch.
     */
    where?: eldersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of elders to fetch.
     */
    orderBy?: eldersOrderByWithRelationInput | eldersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing elders.
     */
    cursor?: eldersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` elders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` elders.
     */
    skip?: number
    distinct?: EldersScalarFieldEnum | EldersScalarFieldEnum[]
  }

  /**
   * elders create
   */
  export type eldersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders
     */
    select?: eldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elders
     */
    omit?: eldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eldersInclude<ExtArgs> | null
    /**
     * The data needed to create a elders.
     */
    data: XOR<eldersCreateInput, eldersUncheckedCreateInput>
  }

  /**
   * elders createMany
   */
  export type eldersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many elders.
     */
    data: eldersCreateManyInput | eldersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * elders createManyAndReturn
   */
  export type eldersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders
     */
    select?: eldersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the elders
     */
    omit?: eldersOmit<ExtArgs> | null
    /**
     * The data used to create many elders.
     */
    data: eldersCreateManyInput | eldersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * elders update
   */
  export type eldersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders
     */
    select?: eldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elders
     */
    omit?: eldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eldersInclude<ExtArgs> | null
    /**
     * The data needed to update a elders.
     */
    data: XOR<eldersUpdateInput, eldersUncheckedUpdateInput>
    /**
     * Choose, which elders to update.
     */
    where: eldersWhereUniqueInput
  }

  /**
   * elders updateMany
   */
  export type eldersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update elders.
     */
    data: XOR<eldersUpdateManyMutationInput, eldersUncheckedUpdateManyInput>
    /**
     * Filter which elders to update
     */
    where?: eldersWhereInput
    /**
     * Limit how many elders to update.
     */
    limit?: number
  }

  /**
   * elders updateManyAndReturn
   */
  export type eldersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders
     */
    select?: eldersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the elders
     */
    omit?: eldersOmit<ExtArgs> | null
    /**
     * The data used to update elders.
     */
    data: XOR<eldersUpdateManyMutationInput, eldersUncheckedUpdateManyInput>
    /**
     * Filter which elders to update
     */
    where?: eldersWhereInput
    /**
     * Limit how many elders to update.
     */
    limit?: number
  }

  /**
   * elders upsert
   */
  export type eldersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders
     */
    select?: eldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elders
     */
    omit?: eldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eldersInclude<ExtArgs> | null
    /**
     * The filter to search for the elders to update in case it exists.
     */
    where: eldersWhereUniqueInput
    /**
     * In case the elders found by the `where` argument doesn't exist, create a new elders with this data.
     */
    create: XOR<eldersCreateInput, eldersUncheckedCreateInput>
    /**
     * In case the elders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eldersUpdateInput, eldersUncheckedUpdateInput>
  }

  /**
   * elders delete
   */
  export type eldersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders
     */
    select?: eldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elders
     */
    omit?: eldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eldersInclude<ExtArgs> | null
    /**
     * Filter which elders to delete.
     */
    where: eldersWhereUniqueInput
  }

  /**
   * elders deleteMany
   */
  export type eldersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which elders to delete
     */
    where?: eldersWhereInput
    /**
     * Limit how many elders to delete.
     */
    limit?: number
  }

  /**
   * elders.elders_activities
   */
  export type elders$elders_activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders_activities
     */
    select?: elders_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elders_activities
     */
    omit?: elders_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: elders_activitiesInclude<ExtArgs> | null
    where?: elders_activitiesWhereInput
    orderBy?: elders_activitiesOrderByWithRelationInput | elders_activitiesOrderByWithRelationInput[]
    cursor?: elders_activitiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Elders_activitiesScalarFieldEnum | Elders_activitiesScalarFieldEnum[]
  }

  /**
   * elders without action
   */
  export type eldersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders
     */
    select?: eldersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elders
     */
    omit?: eldersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eldersInclude<ExtArgs> | null
  }


  /**
   * Model elders_activities
   */

  export type AggregateElders_activities = {
    _count: Elders_activitiesCountAggregateOutputType | null
    _avg: Elders_activitiesAvgAggregateOutputType | null
    _sum: Elders_activitiesSumAggregateOutputType | null
    _min: Elders_activitiesMinAggregateOutputType | null
    _max: Elders_activitiesMaxAggregateOutputType | null
  }

  export type Elders_activitiesAvgAggregateOutputType = {
    id: number | null
    activity_id: number | null
    elder_id: number | null
  }

  export type Elders_activitiesSumAggregateOutputType = {
    id: number | null
    activity_id: number | null
    elder_id: number | null
  }

  export type Elders_activitiesMinAggregateOutputType = {
    id: number | null
    activity_id: number | null
    elder_id: number | null
    created_at: Date | null
  }

  export type Elders_activitiesMaxAggregateOutputType = {
    id: number | null
    activity_id: number | null
    elder_id: number | null
    created_at: Date | null
  }

  export type Elders_activitiesCountAggregateOutputType = {
    id: number
    activity_id: number
    elder_id: number
    created_at: number
    _all: number
  }


  export type Elders_activitiesAvgAggregateInputType = {
    id?: true
    activity_id?: true
    elder_id?: true
  }

  export type Elders_activitiesSumAggregateInputType = {
    id?: true
    activity_id?: true
    elder_id?: true
  }

  export type Elders_activitiesMinAggregateInputType = {
    id?: true
    activity_id?: true
    elder_id?: true
    created_at?: true
  }

  export type Elders_activitiesMaxAggregateInputType = {
    id?: true
    activity_id?: true
    elder_id?: true
    created_at?: true
  }

  export type Elders_activitiesCountAggregateInputType = {
    id?: true
    activity_id?: true
    elder_id?: true
    created_at?: true
    _all?: true
  }

  export type Elders_activitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which elders_activities to aggregate.
     */
    where?: elders_activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of elders_activities to fetch.
     */
    orderBy?: elders_activitiesOrderByWithRelationInput | elders_activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: elders_activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` elders_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` elders_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned elders_activities
    **/
    _count?: true | Elders_activitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Elders_activitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Elders_activitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Elders_activitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Elders_activitiesMaxAggregateInputType
  }

  export type GetElders_activitiesAggregateType<T extends Elders_activitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateElders_activities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElders_activities[P]>
      : GetScalarType<T[P], AggregateElders_activities[P]>
  }




  export type elders_activitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: elders_activitiesWhereInput
    orderBy?: elders_activitiesOrderByWithAggregationInput | elders_activitiesOrderByWithAggregationInput[]
    by: Elders_activitiesScalarFieldEnum[] | Elders_activitiesScalarFieldEnum
    having?: elders_activitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Elders_activitiesCountAggregateInputType | true
    _avg?: Elders_activitiesAvgAggregateInputType
    _sum?: Elders_activitiesSumAggregateInputType
    _min?: Elders_activitiesMinAggregateInputType
    _max?: Elders_activitiesMaxAggregateInputType
  }

  export type Elders_activitiesGroupByOutputType = {
    id: number
    activity_id: number
    elder_id: number
    created_at: Date | null
    _count: Elders_activitiesCountAggregateOutputType | null
    _avg: Elders_activitiesAvgAggregateOutputType | null
    _sum: Elders_activitiesSumAggregateOutputType | null
    _min: Elders_activitiesMinAggregateOutputType | null
    _max: Elders_activitiesMaxAggregateOutputType | null
  }

  type GetElders_activitiesGroupByPayload<T extends elders_activitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Elders_activitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Elders_activitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Elders_activitiesGroupByOutputType[P]>
            : GetScalarType<T[P], Elders_activitiesGroupByOutputType[P]>
        }
      >
    >


  export type elders_activitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activity_id?: boolean
    elder_id?: boolean
    created_at?: boolean
    activities?: boolean | activitiesDefaultArgs<ExtArgs>
    elders?: boolean | eldersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["elders_activities"]>

  export type elders_activitiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activity_id?: boolean
    elder_id?: boolean
    created_at?: boolean
    activities?: boolean | activitiesDefaultArgs<ExtArgs>
    elders?: boolean | eldersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["elders_activities"]>

  export type elders_activitiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activity_id?: boolean
    elder_id?: boolean
    created_at?: boolean
    activities?: boolean | activitiesDefaultArgs<ExtArgs>
    elders?: boolean | eldersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["elders_activities"]>

  export type elders_activitiesSelectScalar = {
    id?: boolean
    activity_id?: boolean
    elder_id?: boolean
    created_at?: boolean
  }

  export type elders_activitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "activity_id" | "elder_id" | "created_at", ExtArgs["result"]["elders_activities"]>
  export type elders_activitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | activitiesDefaultArgs<ExtArgs>
    elders?: boolean | eldersDefaultArgs<ExtArgs>
  }
  export type elders_activitiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | activitiesDefaultArgs<ExtArgs>
    elders?: boolean | eldersDefaultArgs<ExtArgs>
  }
  export type elders_activitiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | activitiesDefaultArgs<ExtArgs>
    elders?: boolean | eldersDefaultArgs<ExtArgs>
  }

  export type $elders_activitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "elders_activities"
    objects: {
      activities: Prisma.$activitiesPayload<ExtArgs>
      elders: Prisma.$eldersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      activity_id: number
      elder_id: number
      created_at: Date | null
    }, ExtArgs["result"]["elders_activities"]>
    composites: {}
  }

  type elders_activitiesGetPayload<S extends boolean | null | undefined | elders_activitiesDefaultArgs> = $Result.GetResult<Prisma.$elders_activitiesPayload, S>

  type elders_activitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<elders_activitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Elders_activitiesCountAggregateInputType | true
    }

  export interface elders_activitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['elders_activities'], meta: { name: 'elders_activities' } }
    /**
     * Find zero or one Elders_activities that matches the filter.
     * @param {elders_activitiesFindUniqueArgs} args - Arguments to find a Elders_activities
     * @example
     * // Get one Elders_activities
     * const elders_activities = await prisma.elders_activities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends elders_activitiesFindUniqueArgs>(args: SelectSubset<T, elders_activitiesFindUniqueArgs<ExtArgs>>): Prisma__elders_activitiesClient<$Result.GetResult<Prisma.$elders_activitiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Elders_activities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {elders_activitiesFindUniqueOrThrowArgs} args - Arguments to find a Elders_activities
     * @example
     * // Get one Elders_activities
     * const elders_activities = await prisma.elders_activities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends elders_activitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, elders_activitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__elders_activitiesClient<$Result.GetResult<Prisma.$elders_activitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Elders_activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {elders_activitiesFindFirstArgs} args - Arguments to find a Elders_activities
     * @example
     * // Get one Elders_activities
     * const elders_activities = await prisma.elders_activities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends elders_activitiesFindFirstArgs>(args?: SelectSubset<T, elders_activitiesFindFirstArgs<ExtArgs>>): Prisma__elders_activitiesClient<$Result.GetResult<Prisma.$elders_activitiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Elders_activities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {elders_activitiesFindFirstOrThrowArgs} args - Arguments to find a Elders_activities
     * @example
     * // Get one Elders_activities
     * const elders_activities = await prisma.elders_activities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends elders_activitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, elders_activitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__elders_activitiesClient<$Result.GetResult<Prisma.$elders_activitiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Elders_activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {elders_activitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Elders_activities
     * const elders_activities = await prisma.elders_activities.findMany()
     * 
     * // Get first 10 Elders_activities
     * const elders_activities = await prisma.elders_activities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const elders_activitiesWithIdOnly = await prisma.elders_activities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends elders_activitiesFindManyArgs>(args?: SelectSubset<T, elders_activitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$elders_activitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Elders_activities.
     * @param {elders_activitiesCreateArgs} args - Arguments to create a Elders_activities.
     * @example
     * // Create one Elders_activities
     * const Elders_activities = await prisma.elders_activities.create({
     *   data: {
     *     // ... data to create a Elders_activities
     *   }
     * })
     * 
     */
    create<T extends elders_activitiesCreateArgs>(args: SelectSubset<T, elders_activitiesCreateArgs<ExtArgs>>): Prisma__elders_activitiesClient<$Result.GetResult<Prisma.$elders_activitiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Elders_activities.
     * @param {elders_activitiesCreateManyArgs} args - Arguments to create many Elders_activities.
     * @example
     * // Create many Elders_activities
     * const elders_activities = await prisma.elders_activities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends elders_activitiesCreateManyArgs>(args?: SelectSubset<T, elders_activitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Elders_activities and returns the data saved in the database.
     * @param {elders_activitiesCreateManyAndReturnArgs} args - Arguments to create many Elders_activities.
     * @example
     * // Create many Elders_activities
     * const elders_activities = await prisma.elders_activities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Elders_activities and only return the `id`
     * const elders_activitiesWithIdOnly = await prisma.elders_activities.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends elders_activitiesCreateManyAndReturnArgs>(args?: SelectSubset<T, elders_activitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$elders_activitiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Elders_activities.
     * @param {elders_activitiesDeleteArgs} args - Arguments to delete one Elders_activities.
     * @example
     * // Delete one Elders_activities
     * const Elders_activities = await prisma.elders_activities.delete({
     *   where: {
     *     // ... filter to delete one Elders_activities
     *   }
     * })
     * 
     */
    delete<T extends elders_activitiesDeleteArgs>(args: SelectSubset<T, elders_activitiesDeleteArgs<ExtArgs>>): Prisma__elders_activitiesClient<$Result.GetResult<Prisma.$elders_activitiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Elders_activities.
     * @param {elders_activitiesUpdateArgs} args - Arguments to update one Elders_activities.
     * @example
     * // Update one Elders_activities
     * const elders_activities = await prisma.elders_activities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends elders_activitiesUpdateArgs>(args: SelectSubset<T, elders_activitiesUpdateArgs<ExtArgs>>): Prisma__elders_activitiesClient<$Result.GetResult<Prisma.$elders_activitiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Elders_activities.
     * @param {elders_activitiesDeleteManyArgs} args - Arguments to filter Elders_activities to delete.
     * @example
     * // Delete a few Elders_activities
     * const { count } = await prisma.elders_activities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends elders_activitiesDeleteManyArgs>(args?: SelectSubset<T, elders_activitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Elders_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {elders_activitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Elders_activities
     * const elders_activities = await prisma.elders_activities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends elders_activitiesUpdateManyArgs>(args: SelectSubset<T, elders_activitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Elders_activities and returns the data updated in the database.
     * @param {elders_activitiesUpdateManyAndReturnArgs} args - Arguments to update many Elders_activities.
     * @example
     * // Update many Elders_activities
     * const elders_activities = await prisma.elders_activities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Elders_activities and only return the `id`
     * const elders_activitiesWithIdOnly = await prisma.elders_activities.updateManyAndReturn({
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
    updateManyAndReturn<T extends elders_activitiesUpdateManyAndReturnArgs>(args: SelectSubset<T, elders_activitiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$elders_activitiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Elders_activities.
     * @param {elders_activitiesUpsertArgs} args - Arguments to update or create a Elders_activities.
     * @example
     * // Update or create a Elders_activities
     * const elders_activities = await prisma.elders_activities.upsert({
     *   create: {
     *     // ... data to create a Elders_activities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Elders_activities we want to update
     *   }
     * })
     */
    upsert<T extends elders_activitiesUpsertArgs>(args: SelectSubset<T, elders_activitiesUpsertArgs<ExtArgs>>): Prisma__elders_activitiesClient<$Result.GetResult<Prisma.$elders_activitiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Elders_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {elders_activitiesCountArgs} args - Arguments to filter Elders_activities to count.
     * @example
     * // Count the number of Elders_activities
     * const count = await prisma.elders_activities.count({
     *   where: {
     *     // ... the filter for the Elders_activities we want to count
     *   }
     * })
    **/
    count<T extends elders_activitiesCountArgs>(
      args?: Subset<T, elders_activitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Elders_activitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Elders_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Elders_activitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Elders_activitiesAggregateArgs>(args: Subset<T, Elders_activitiesAggregateArgs>): Prisma.PrismaPromise<GetElders_activitiesAggregateType<T>>

    /**
     * Group by Elders_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {elders_activitiesGroupByArgs} args - Group by arguments.
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
      T extends elders_activitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: elders_activitiesGroupByArgs['orderBy'] }
        : { orderBy?: elders_activitiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, elders_activitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetElders_activitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the elders_activities model
   */
  readonly fields: elders_activitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for elders_activities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__elders_activitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activities<T extends activitiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, activitiesDefaultArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    elders<T extends eldersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eldersDefaultArgs<ExtArgs>>): Prisma__eldersClient<$Result.GetResult<Prisma.$eldersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the elders_activities model
   */
  interface elders_activitiesFieldRefs {
    readonly id: FieldRef<"elders_activities", 'Int'>
    readonly activity_id: FieldRef<"elders_activities", 'Int'>
    readonly elder_id: FieldRef<"elders_activities", 'Int'>
    readonly created_at: FieldRef<"elders_activities", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * elders_activities findUnique
   */
  export type elders_activitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders_activities
     */
    select?: elders_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elders_activities
     */
    omit?: elders_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: elders_activitiesInclude<ExtArgs> | null
    /**
     * Filter, which elders_activities to fetch.
     */
    where: elders_activitiesWhereUniqueInput
  }

  /**
   * elders_activities findUniqueOrThrow
   */
  export type elders_activitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders_activities
     */
    select?: elders_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elders_activities
     */
    omit?: elders_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: elders_activitiesInclude<ExtArgs> | null
    /**
     * Filter, which elders_activities to fetch.
     */
    where: elders_activitiesWhereUniqueInput
  }

  /**
   * elders_activities findFirst
   */
  export type elders_activitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders_activities
     */
    select?: elders_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elders_activities
     */
    omit?: elders_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: elders_activitiesInclude<ExtArgs> | null
    /**
     * Filter, which elders_activities to fetch.
     */
    where?: elders_activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of elders_activities to fetch.
     */
    orderBy?: elders_activitiesOrderByWithRelationInput | elders_activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for elders_activities.
     */
    cursor?: elders_activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` elders_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` elders_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of elders_activities.
     */
    distinct?: Elders_activitiesScalarFieldEnum | Elders_activitiesScalarFieldEnum[]
  }

  /**
   * elders_activities findFirstOrThrow
   */
  export type elders_activitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders_activities
     */
    select?: elders_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elders_activities
     */
    omit?: elders_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: elders_activitiesInclude<ExtArgs> | null
    /**
     * Filter, which elders_activities to fetch.
     */
    where?: elders_activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of elders_activities to fetch.
     */
    orderBy?: elders_activitiesOrderByWithRelationInput | elders_activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for elders_activities.
     */
    cursor?: elders_activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` elders_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` elders_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of elders_activities.
     */
    distinct?: Elders_activitiesScalarFieldEnum | Elders_activitiesScalarFieldEnum[]
  }

  /**
   * elders_activities findMany
   */
  export type elders_activitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders_activities
     */
    select?: elders_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elders_activities
     */
    omit?: elders_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: elders_activitiesInclude<ExtArgs> | null
    /**
     * Filter, which elders_activities to fetch.
     */
    where?: elders_activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of elders_activities to fetch.
     */
    orderBy?: elders_activitiesOrderByWithRelationInput | elders_activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing elders_activities.
     */
    cursor?: elders_activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` elders_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` elders_activities.
     */
    skip?: number
    distinct?: Elders_activitiesScalarFieldEnum | Elders_activitiesScalarFieldEnum[]
  }

  /**
   * elders_activities create
   */
  export type elders_activitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders_activities
     */
    select?: elders_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elders_activities
     */
    omit?: elders_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: elders_activitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a elders_activities.
     */
    data: XOR<elders_activitiesCreateInput, elders_activitiesUncheckedCreateInput>
  }

  /**
   * elders_activities createMany
   */
  export type elders_activitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many elders_activities.
     */
    data: elders_activitiesCreateManyInput | elders_activitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * elders_activities createManyAndReturn
   */
  export type elders_activitiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders_activities
     */
    select?: elders_activitiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the elders_activities
     */
    omit?: elders_activitiesOmit<ExtArgs> | null
    /**
     * The data used to create many elders_activities.
     */
    data: elders_activitiesCreateManyInput | elders_activitiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: elders_activitiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * elders_activities update
   */
  export type elders_activitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders_activities
     */
    select?: elders_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elders_activities
     */
    omit?: elders_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: elders_activitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a elders_activities.
     */
    data: XOR<elders_activitiesUpdateInput, elders_activitiesUncheckedUpdateInput>
    /**
     * Choose, which elders_activities to update.
     */
    where: elders_activitiesWhereUniqueInput
  }

  /**
   * elders_activities updateMany
   */
  export type elders_activitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update elders_activities.
     */
    data: XOR<elders_activitiesUpdateManyMutationInput, elders_activitiesUncheckedUpdateManyInput>
    /**
     * Filter which elders_activities to update
     */
    where?: elders_activitiesWhereInput
    /**
     * Limit how many elders_activities to update.
     */
    limit?: number
  }

  /**
   * elders_activities updateManyAndReturn
   */
  export type elders_activitiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders_activities
     */
    select?: elders_activitiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the elders_activities
     */
    omit?: elders_activitiesOmit<ExtArgs> | null
    /**
     * The data used to update elders_activities.
     */
    data: XOR<elders_activitiesUpdateManyMutationInput, elders_activitiesUncheckedUpdateManyInput>
    /**
     * Filter which elders_activities to update
     */
    where?: elders_activitiesWhereInput
    /**
     * Limit how many elders_activities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: elders_activitiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * elders_activities upsert
   */
  export type elders_activitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders_activities
     */
    select?: elders_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elders_activities
     */
    omit?: elders_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: elders_activitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the elders_activities to update in case it exists.
     */
    where: elders_activitiesWhereUniqueInput
    /**
     * In case the elders_activities found by the `where` argument doesn't exist, create a new elders_activities with this data.
     */
    create: XOR<elders_activitiesCreateInput, elders_activitiesUncheckedCreateInput>
    /**
     * In case the elders_activities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<elders_activitiesUpdateInput, elders_activitiesUncheckedUpdateInput>
  }

  /**
   * elders_activities delete
   */
  export type elders_activitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders_activities
     */
    select?: elders_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elders_activities
     */
    omit?: elders_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: elders_activitiesInclude<ExtArgs> | null
    /**
     * Filter which elders_activities to delete.
     */
    where: elders_activitiesWhereUniqueInput
  }

  /**
   * elders_activities deleteMany
   */
  export type elders_activitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which elders_activities to delete
     */
    where?: elders_activitiesWhereInput
    /**
     * Limit how many elders_activities to delete.
     */
    limit?: number
  }

  /**
   * elders_activities without action
   */
  export type elders_activitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elders_activities
     */
    select?: elders_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elders_activities
     */
    omit?: elders_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: elders_activitiesInclude<ExtArgs> | null
  }


  /**
   * Model volonteers
   */

  export type AggregateVolonteers = {
    _count: VolonteersCountAggregateOutputType | null
    _avg: VolonteersAvgAggregateOutputType | null
    _sum: VolonteersSumAggregateOutputType | null
    _min: VolonteersMinAggregateOutputType | null
    _max: VolonteersMaxAggregateOutputType | null
  }

  export type VolonteersAvgAggregateOutputType = {
    id: number | null
  }

  export type VolonteersSumAggregateOutputType = {
    id: number | null
  }

  export type VolonteersMinAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    phone_number: string | null
    url_image: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VolonteersMaxAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    phone_number: string | null
    url_image: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VolonteersCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    phone_number: number
    url_image: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type VolonteersAvgAggregateInputType = {
    id?: true
  }

  export type VolonteersSumAggregateInputType = {
    id?: true
  }

  export type VolonteersMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    phone_number?: true
    url_image?: true
    created_at?: true
    updated_at?: true
  }

  export type VolonteersMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    phone_number?: true
    url_image?: true
    created_at?: true
    updated_at?: true
  }

  export type VolonteersCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    phone_number?: true
    url_image?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type VolonteersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which volonteers to aggregate.
     */
    where?: volonteersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of volonteers to fetch.
     */
    orderBy?: volonteersOrderByWithRelationInput | volonteersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: volonteersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` volonteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` volonteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned volonteers
    **/
    _count?: true | VolonteersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VolonteersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VolonteersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VolonteersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VolonteersMaxAggregateInputType
  }

  export type GetVolonteersAggregateType<T extends VolonteersAggregateArgs> = {
        [P in keyof T & keyof AggregateVolonteers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVolonteers[P]>
      : GetScalarType<T[P], AggregateVolonteers[P]>
  }




  export type volonteersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: volonteersWhereInput
    orderBy?: volonteersOrderByWithAggregationInput | volonteersOrderByWithAggregationInput[]
    by: VolonteersScalarFieldEnum[] | VolonteersScalarFieldEnum
    having?: volonteersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VolonteersCountAggregateInputType | true
    _avg?: VolonteersAvgAggregateInputType
    _sum?: VolonteersSumAggregateInputType
    _min?: VolonteersMinAggregateInputType
    _max?: VolonteersMaxAggregateInputType
  }

  export type VolonteersGroupByOutputType = {
    id: number
    firstname: string
    lastname: string
    email: string
    phone_number: string
    url_image: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: VolonteersCountAggregateOutputType | null
    _avg: VolonteersAvgAggregateOutputType | null
    _sum: VolonteersSumAggregateOutputType | null
    _min: VolonteersMinAggregateOutputType | null
    _max: VolonteersMaxAggregateOutputType | null
  }

  type GetVolonteersGroupByPayload<T extends volonteersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VolonteersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VolonteersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VolonteersGroupByOutputType[P]>
            : GetScalarType<T[P], VolonteersGroupByOutputType[P]>
        }
      >
    >


  export type volonteersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    phone_number?: boolean
    url_image?: boolean
    created_at?: boolean
    updated_at?: boolean
    volonteers_activities?: boolean | volonteers$volonteers_activitiesArgs<ExtArgs>
    _count?: boolean | VolonteersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volonteers"]>

  export type volonteersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    phone_number?: boolean
    url_image?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["volonteers"]>

  export type volonteersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    phone_number?: boolean
    url_image?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["volonteers"]>

  export type volonteersSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    phone_number?: boolean
    url_image?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type volonteersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "email" | "phone_number" | "url_image" | "created_at" | "updated_at", ExtArgs["result"]["volonteers"]>
  export type volonteersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volonteers_activities?: boolean | volonteers$volonteers_activitiesArgs<ExtArgs>
    _count?: boolean | VolonteersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type volonteersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type volonteersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $volonteersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "volonteers"
    objects: {
      volonteers_activities: Prisma.$volonteers_activitiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstname: string
      lastname: string
      email: string
      phone_number: string
      url_image: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["volonteers"]>
    composites: {}
  }

  type volonteersGetPayload<S extends boolean | null | undefined | volonteersDefaultArgs> = $Result.GetResult<Prisma.$volonteersPayload, S>

  type volonteersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<volonteersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VolonteersCountAggregateInputType | true
    }

  export interface volonteersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['volonteers'], meta: { name: 'volonteers' } }
    /**
     * Find zero or one Volonteers that matches the filter.
     * @param {volonteersFindUniqueArgs} args - Arguments to find a Volonteers
     * @example
     * // Get one Volonteers
     * const volonteers = await prisma.volonteers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends volonteersFindUniqueArgs>(args: SelectSubset<T, volonteersFindUniqueArgs<ExtArgs>>): Prisma__volonteersClient<$Result.GetResult<Prisma.$volonteersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Volonteers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {volonteersFindUniqueOrThrowArgs} args - Arguments to find a Volonteers
     * @example
     * // Get one Volonteers
     * const volonteers = await prisma.volonteers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends volonteersFindUniqueOrThrowArgs>(args: SelectSubset<T, volonteersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__volonteersClient<$Result.GetResult<Prisma.$volonteersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Volonteers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {volonteersFindFirstArgs} args - Arguments to find a Volonteers
     * @example
     * // Get one Volonteers
     * const volonteers = await prisma.volonteers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends volonteersFindFirstArgs>(args?: SelectSubset<T, volonteersFindFirstArgs<ExtArgs>>): Prisma__volonteersClient<$Result.GetResult<Prisma.$volonteersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Volonteers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {volonteersFindFirstOrThrowArgs} args - Arguments to find a Volonteers
     * @example
     * // Get one Volonteers
     * const volonteers = await prisma.volonteers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends volonteersFindFirstOrThrowArgs>(args?: SelectSubset<T, volonteersFindFirstOrThrowArgs<ExtArgs>>): Prisma__volonteersClient<$Result.GetResult<Prisma.$volonteersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Volonteers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {volonteersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Volonteers
     * const volonteers = await prisma.volonteers.findMany()
     * 
     * // Get first 10 Volonteers
     * const volonteers = await prisma.volonteers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const volonteersWithIdOnly = await prisma.volonteers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends volonteersFindManyArgs>(args?: SelectSubset<T, volonteersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$volonteersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Volonteers.
     * @param {volonteersCreateArgs} args - Arguments to create a Volonteers.
     * @example
     * // Create one Volonteers
     * const Volonteers = await prisma.volonteers.create({
     *   data: {
     *     // ... data to create a Volonteers
     *   }
     * })
     * 
     */
    create<T extends volonteersCreateArgs>(args: SelectSubset<T, volonteersCreateArgs<ExtArgs>>): Prisma__volonteersClient<$Result.GetResult<Prisma.$volonteersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Volonteers.
     * @param {volonteersCreateManyArgs} args - Arguments to create many Volonteers.
     * @example
     * // Create many Volonteers
     * const volonteers = await prisma.volonteers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends volonteersCreateManyArgs>(args?: SelectSubset<T, volonteersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Volonteers and returns the data saved in the database.
     * @param {volonteersCreateManyAndReturnArgs} args - Arguments to create many Volonteers.
     * @example
     * // Create many Volonteers
     * const volonteers = await prisma.volonteers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Volonteers and only return the `id`
     * const volonteersWithIdOnly = await prisma.volonteers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends volonteersCreateManyAndReturnArgs>(args?: SelectSubset<T, volonteersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$volonteersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Volonteers.
     * @param {volonteersDeleteArgs} args - Arguments to delete one Volonteers.
     * @example
     * // Delete one Volonteers
     * const Volonteers = await prisma.volonteers.delete({
     *   where: {
     *     // ... filter to delete one Volonteers
     *   }
     * })
     * 
     */
    delete<T extends volonteersDeleteArgs>(args: SelectSubset<T, volonteersDeleteArgs<ExtArgs>>): Prisma__volonteersClient<$Result.GetResult<Prisma.$volonteersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Volonteers.
     * @param {volonteersUpdateArgs} args - Arguments to update one Volonteers.
     * @example
     * // Update one Volonteers
     * const volonteers = await prisma.volonteers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends volonteersUpdateArgs>(args: SelectSubset<T, volonteersUpdateArgs<ExtArgs>>): Prisma__volonteersClient<$Result.GetResult<Prisma.$volonteersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Volonteers.
     * @param {volonteersDeleteManyArgs} args - Arguments to filter Volonteers to delete.
     * @example
     * // Delete a few Volonteers
     * const { count } = await prisma.volonteers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends volonteersDeleteManyArgs>(args?: SelectSubset<T, volonteersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volonteers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {volonteersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Volonteers
     * const volonteers = await prisma.volonteers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends volonteersUpdateManyArgs>(args: SelectSubset<T, volonteersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volonteers and returns the data updated in the database.
     * @param {volonteersUpdateManyAndReturnArgs} args - Arguments to update many Volonteers.
     * @example
     * // Update many Volonteers
     * const volonteers = await prisma.volonteers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Volonteers and only return the `id`
     * const volonteersWithIdOnly = await prisma.volonteers.updateManyAndReturn({
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
    updateManyAndReturn<T extends volonteersUpdateManyAndReturnArgs>(args: SelectSubset<T, volonteersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$volonteersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Volonteers.
     * @param {volonteersUpsertArgs} args - Arguments to update or create a Volonteers.
     * @example
     * // Update or create a Volonteers
     * const volonteers = await prisma.volonteers.upsert({
     *   create: {
     *     // ... data to create a Volonteers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Volonteers we want to update
     *   }
     * })
     */
    upsert<T extends volonteersUpsertArgs>(args: SelectSubset<T, volonteersUpsertArgs<ExtArgs>>): Prisma__volonteersClient<$Result.GetResult<Prisma.$volonteersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Volonteers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {volonteersCountArgs} args - Arguments to filter Volonteers to count.
     * @example
     * // Count the number of Volonteers
     * const count = await prisma.volonteers.count({
     *   where: {
     *     // ... the filter for the Volonteers we want to count
     *   }
     * })
    **/
    count<T extends volonteersCountArgs>(
      args?: Subset<T, volonteersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VolonteersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Volonteers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolonteersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VolonteersAggregateArgs>(args: Subset<T, VolonteersAggregateArgs>): Prisma.PrismaPromise<GetVolonteersAggregateType<T>>

    /**
     * Group by Volonteers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {volonteersGroupByArgs} args - Group by arguments.
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
      T extends volonteersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: volonteersGroupByArgs['orderBy'] }
        : { orderBy?: volonteersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, volonteersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVolonteersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the volonteers model
   */
  readonly fields: volonteersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for volonteers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__volonteersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    volonteers_activities<T extends volonteers$volonteers_activitiesArgs<ExtArgs> = {}>(args?: Subset<T, volonteers$volonteers_activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$volonteers_activitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the volonteers model
   */
  interface volonteersFieldRefs {
    readonly id: FieldRef<"volonteers", 'Int'>
    readonly firstname: FieldRef<"volonteers", 'String'>
    readonly lastname: FieldRef<"volonteers", 'String'>
    readonly email: FieldRef<"volonteers", 'String'>
    readonly phone_number: FieldRef<"volonteers", 'String'>
    readonly url_image: FieldRef<"volonteers", 'String'>
    readonly created_at: FieldRef<"volonteers", 'DateTime'>
    readonly updated_at: FieldRef<"volonteers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * volonteers findUnique
   */
  export type volonteersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers
     */
    select?: volonteersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers
     */
    omit?: volonteersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteersInclude<ExtArgs> | null
    /**
     * Filter, which volonteers to fetch.
     */
    where: volonteersWhereUniqueInput
  }

  /**
   * volonteers findUniqueOrThrow
   */
  export type volonteersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers
     */
    select?: volonteersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers
     */
    omit?: volonteersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteersInclude<ExtArgs> | null
    /**
     * Filter, which volonteers to fetch.
     */
    where: volonteersWhereUniqueInput
  }

  /**
   * volonteers findFirst
   */
  export type volonteersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers
     */
    select?: volonteersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers
     */
    omit?: volonteersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteersInclude<ExtArgs> | null
    /**
     * Filter, which volonteers to fetch.
     */
    where?: volonteersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of volonteers to fetch.
     */
    orderBy?: volonteersOrderByWithRelationInput | volonteersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for volonteers.
     */
    cursor?: volonteersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` volonteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` volonteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of volonteers.
     */
    distinct?: VolonteersScalarFieldEnum | VolonteersScalarFieldEnum[]
  }

  /**
   * volonteers findFirstOrThrow
   */
  export type volonteersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers
     */
    select?: volonteersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers
     */
    omit?: volonteersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteersInclude<ExtArgs> | null
    /**
     * Filter, which volonteers to fetch.
     */
    where?: volonteersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of volonteers to fetch.
     */
    orderBy?: volonteersOrderByWithRelationInput | volonteersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for volonteers.
     */
    cursor?: volonteersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` volonteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` volonteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of volonteers.
     */
    distinct?: VolonteersScalarFieldEnum | VolonteersScalarFieldEnum[]
  }

  /**
   * volonteers findMany
   */
  export type volonteersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers
     */
    select?: volonteersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers
     */
    omit?: volonteersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteersInclude<ExtArgs> | null
    /**
     * Filter, which volonteers to fetch.
     */
    where?: volonteersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of volonteers to fetch.
     */
    orderBy?: volonteersOrderByWithRelationInput | volonteersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing volonteers.
     */
    cursor?: volonteersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` volonteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` volonteers.
     */
    skip?: number
    distinct?: VolonteersScalarFieldEnum | VolonteersScalarFieldEnum[]
  }

  /**
   * volonteers create
   */
  export type volonteersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers
     */
    select?: volonteersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers
     */
    omit?: volonteersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteersInclude<ExtArgs> | null
    /**
     * The data needed to create a volonteers.
     */
    data: XOR<volonteersCreateInput, volonteersUncheckedCreateInput>
  }

  /**
   * volonteers createMany
   */
  export type volonteersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many volonteers.
     */
    data: volonteersCreateManyInput | volonteersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * volonteers createManyAndReturn
   */
  export type volonteersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers
     */
    select?: volonteersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers
     */
    omit?: volonteersOmit<ExtArgs> | null
    /**
     * The data used to create many volonteers.
     */
    data: volonteersCreateManyInput | volonteersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * volonteers update
   */
  export type volonteersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers
     */
    select?: volonteersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers
     */
    omit?: volonteersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteersInclude<ExtArgs> | null
    /**
     * The data needed to update a volonteers.
     */
    data: XOR<volonteersUpdateInput, volonteersUncheckedUpdateInput>
    /**
     * Choose, which volonteers to update.
     */
    where: volonteersWhereUniqueInput
  }

  /**
   * volonteers updateMany
   */
  export type volonteersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update volonteers.
     */
    data: XOR<volonteersUpdateManyMutationInput, volonteersUncheckedUpdateManyInput>
    /**
     * Filter which volonteers to update
     */
    where?: volonteersWhereInput
    /**
     * Limit how many volonteers to update.
     */
    limit?: number
  }

  /**
   * volonteers updateManyAndReturn
   */
  export type volonteersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers
     */
    select?: volonteersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers
     */
    omit?: volonteersOmit<ExtArgs> | null
    /**
     * The data used to update volonteers.
     */
    data: XOR<volonteersUpdateManyMutationInput, volonteersUncheckedUpdateManyInput>
    /**
     * Filter which volonteers to update
     */
    where?: volonteersWhereInput
    /**
     * Limit how many volonteers to update.
     */
    limit?: number
  }

  /**
   * volonteers upsert
   */
  export type volonteersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers
     */
    select?: volonteersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers
     */
    omit?: volonteersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteersInclude<ExtArgs> | null
    /**
     * The filter to search for the volonteers to update in case it exists.
     */
    where: volonteersWhereUniqueInput
    /**
     * In case the volonteers found by the `where` argument doesn't exist, create a new volonteers with this data.
     */
    create: XOR<volonteersCreateInput, volonteersUncheckedCreateInput>
    /**
     * In case the volonteers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<volonteersUpdateInput, volonteersUncheckedUpdateInput>
  }

  /**
   * volonteers delete
   */
  export type volonteersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers
     */
    select?: volonteersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers
     */
    omit?: volonteersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteersInclude<ExtArgs> | null
    /**
     * Filter which volonteers to delete.
     */
    where: volonteersWhereUniqueInput
  }

  /**
   * volonteers deleteMany
   */
  export type volonteersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which volonteers to delete
     */
    where?: volonteersWhereInput
    /**
     * Limit how many volonteers to delete.
     */
    limit?: number
  }

  /**
   * volonteers.volonteers_activities
   */
  export type volonteers$volonteers_activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers_activities
     */
    select?: volonteers_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers_activities
     */
    omit?: volonteers_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteers_activitiesInclude<ExtArgs> | null
    where?: volonteers_activitiesWhereInput
    orderBy?: volonteers_activitiesOrderByWithRelationInput | volonteers_activitiesOrderByWithRelationInput[]
    cursor?: volonteers_activitiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Volonteers_activitiesScalarFieldEnum | Volonteers_activitiesScalarFieldEnum[]
  }

  /**
   * volonteers without action
   */
  export type volonteersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers
     */
    select?: volonteersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers
     */
    omit?: volonteersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteersInclude<ExtArgs> | null
  }


  /**
   * Model volonteers_activities
   */

  export type AggregateVolonteers_activities = {
    _count: Volonteers_activitiesCountAggregateOutputType | null
    _avg: Volonteers_activitiesAvgAggregateOutputType | null
    _sum: Volonteers_activitiesSumAggregateOutputType | null
    _min: Volonteers_activitiesMinAggregateOutputType | null
    _max: Volonteers_activitiesMaxAggregateOutputType | null
  }

  export type Volonteers_activitiesAvgAggregateOutputType = {
    id: number | null
    activity_id: number | null
    volonteer_id: number | null
  }

  export type Volonteers_activitiesSumAggregateOutputType = {
    id: number | null
    activity_id: number | null
    volonteer_id: number | null
  }

  export type Volonteers_activitiesMinAggregateOutputType = {
    id: number | null
    activity_id: number | null
    volonteer_id: number | null
    created_at: Date | null
  }

  export type Volonteers_activitiesMaxAggregateOutputType = {
    id: number | null
    activity_id: number | null
    volonteer_id: number | null
    created_at: Date | null
  }

  export type Volonteers_activitiesCountAggregateOutputType = {
    id: number
    activity_id: number
    volonteer_id: number
    created_at: number
    _all: number
  }


  export type Volonteers_activitiesAvgAggregateInputType = {
    id?: true
    activity_id?: true
    volonteer_id?: true
  }

  export type Volonteers_activitiesSumAggregateInputType = {
    id?: true
    activity_id?: true
    volonteer_id?: true
  }

  export type Volonteers_activitiesMinAggregateInputType = {
    id?: true
    activity_id?: true
    volonteer_id?: true
    created_at?: true
  }

  export type Volonteers_activitiesMaxAggregateInputType = {
    id?: true
    activity_id?: true
    volonteer_id?: true
    created_at?: true
  }

  export type Volonteers_activitiesCountAggregateInputType = {
    id?: true
    activity_id?: true
    volonteer_id?: true
    created_at?: true
    _all?: true
  }

  export type Volonteers_activitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which volonteers_activities to aggregate.
     */
    where?: volonteers_activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of volonteers_activities to fetch.
     */
    orderBy?: volonteers_activitiesOrderByWithRelationInput | volonteers_activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: volonteers_activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` volonteers_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` volonteers_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned volonteers_activities
    **/
    _count?: true | Volonteers_activitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Volonteers_activitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Volonteers_activitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Volonteers_activitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Volonteers_activitiesMaxAggregateInputType
  }

  export type GetVolonteers_activitiesAggregateType<T extends Volonteers_activitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateVolonteers_activities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVolonteers_activities[P]>
      : GetScalarType<T[P], AggregateVolonteers_activities[P]>
  }




  export type volonteers_activitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: volonteers_activitiesWhereInput
    orderBy?: volonteers_activitiesOrderByWithAggregationInput | volonteers_activitiesOrderByWithAggregationInput[]
    by: Volonteers_activitiesScalarFieldEnum[] | Volonteers_activitiesScalarFieldEnum
    having?: volonteers_activitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Volonteers_activitiesCountAggregateInputType | true
    _avg?: Volonteers_activitiesAvgAggregateInputType
    _sum?: Volonteers_activitiesSumAggregateInputType
    _min?: Volonteers_activitiesMinAggregateInputType
    _max?: Volonteers_activitiesMaxAggregateInputType
  }

  export type Volonteers_activitiesGroupByOutputType = {
    id: number
    activity_id: number
    volonteer_id: number
    created_at: Date | null
    _count: Volonteers_activitiesCountAggregateOutputType | null
    _avg: Volonteers_activitiesAvgAggregateOutputType | null
    _sum: Volonteers_activitiesSumAggregateOutputType | null
    _min: Volonteers_activitiesMinAggregateOutputType | null
    _max: Volonteers_activitiesMaxAggregateOutputType | null
  }

  type GetVolonteers_activitiesGroupByPayload<T extends volonteers_activitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Volonteers_activitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Volonteers_activitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Volonteers_activitiesGroupByOutputType[P]>
            : GetScalarType<T[P], Volonteers_activitiesGroupByOutputType[P]>
        }
      >
    >


  export type volonteers_activitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activity_id?: boolean
    volonteer_id?: boolean
    created_at?: boolean
    activities?: boolean | activitiesDefaultArgs<ExtArgs>
    volonteers?: boolean | volonteersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volonteers_activities"]>

  export type volonteers_activitiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activity_id?: boolean
    volonteer_id?: boolean
    created_at?: boolean
    activities?: boolean | activitiesDefaultArgs<ExtArgs>
    volonteers?: boolean | volonteersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volonteers_activities"]>

  export type volonteers_activitiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activity_id?: boolean
    volonteer_id?: boolean
    created_at?: boolean
    activities?: boolean | activitiesDefaultArgs<ExtArgs>
    volonteers?: boolean | volonteersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volonteers_activities"]>

  export type volonteers_activitiesSelectScalar = {
    id?: boolean
    activity_id?: boolean
    volonteer_id?: boolean
    created_at?: boolean
  }

  export type volonteers_activitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "activity_id" | "volonteer_id" | "created_at", ExtArgs["result"]["volonteers_activities"]>
  export type volonteers_activitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | activitiesDefaultArgs<ExtArgs>
    volonteers?: boolean | volonteersDefaultArgs<ExtArgs>
  }
  export type volonteers_activitiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | activitiesDefaultArgs<ExtArgs>
    volonteers?: boolean | volonteersDefaultArgs<ExtArgs>
  }
  export type volonteers_activitiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | activitiesDefaultArgs<ExtArgs>
    volonteers?: boolean | volonteersDefaultArgs<ExtArgs>
  }

  export type $volonteers_activitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "volonteers_activities"
    objects: {
      activities: Prisma.$activitiesPayload<ExtArgs>
      volonteers: Prisma.$volonteersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      activity_id: number
      volonteer_id: number
      created_at: Date | null
    }, ExtArgs["result"]["volonteers_activities"]>
    composites: {}
  }

  type volonteers_activitiesGetPayload<S extends boolean | null | undefined | volonteers_activitiesDefaultArgs> = $Result.GetResult<Prisma.$volonteers_activitiesPayload, S>

  type volonteers_activitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<volonteers_activitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Volonteers_activitiesCountAggregateInputType | true
    }

  export interface volonteers_activitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['volonteers_activities'], meta: { name: 'volonteers_activities' } }
    /**
     * Find zero or one Volonteers_activities that matches the filter.
     * @param {volonteers_activitiesFindUniqueArgs} args - Arguments to find a Volonteers_activities
     * @example
     * // Get one Volonteers_activities
     * const volonteers_activities = await prisma.volonteers_activities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends volonteers_activitiesFindUniqueArgs>(args: SelectSubset<T, volonteers_activitiesFindUniqueArgs<ExtArgs>>): Prisma__volonteers_activitiesClient<$Result.GetResult<Prisma.$volonteers_activitiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Volonteers_activities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {volonteers_activitiesFindUniqueOrThrowArgs} args - Arguments to find a Volonteers_activities
     * @example
     * // Get one Volonteers_activities
     * const volonteers_activities = await prisma.volonteers_activities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends volonteers_activitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, volonteers_activitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__volonteers_activitiesClient<$Result.GetResult<Prisma.$volonteers_activitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Volonteers_activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {volonteers_activitiesFindFirstArgs} args - Arguments to find a Volonteers_activities
     * @example
     * // Get one Volonteers_activities
     * const volonteers_activities = await prisma.volonteers_activities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends volonteers_activitiesFindFirstArgs>(args?: SelectSubset<T, volonteers_activitiesFindFirstArgs<ExtArgs>>): Prisma__volonteers_activitiesClient<$Result.GetResult<Prisma.$volonteers_activitiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Volonteers_activities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {volonteers_activitiesFindFirstOrThrowArgs} args - Arguments to find a Volonteers_activities
     * @example
     * // Get one Volonteers_activities
     * const volonteers_activities = await prisma.volonteers_activities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends volonteers_activitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, volonteers_activitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__volonteers_activitiesClient<$Result.GetResult<Prisma.$volonteers_activitiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Volonteers_activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {volonteers_activitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Volonteers_activities
     * const volonteers_activities = await prisma.volonteers_activities.findMany()
     * 
     * // Get first 10 Volonteers_activities
     * const volonteers_activities = await prisma.volonteers_activities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const volonteers_activitiesWithIdOnly = await prisma.volonteers_activities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends volonteers_activitiesFindManyArgs>(args?: SelectSubset<T, volonteers_activitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$volonteers_activitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Volonteers_activities.
     * @param {volonteers_activitiesCreateArgs} args - Arguments to create a Volonteers_activities.
     * @example
     * // Create one Volonteers_activities
     * const Volonteers_activities = await prisma.volonteers_activities.create({
     *   data: {
     *     // ... data to create a Volonteers_activities
     *   }
     * })
     * 
     */
    create<T extends volonteers_activitiesCreateArgs>(args: SelectSubset<T, volonteers_activitiesCreateArgs<ExtArgs>>): Prisma__volonteers_activitiesClient<$Result.GetResult<Prisma.$volonteers_activitiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Volonteers_activities.
     * @param {volonteers_activitiesCreateManyArgs} args - Arguments to create many Volonteers_activities.
     * @example
     * // Create many Volonteers_activities
     * const volonteers_activities = await prisma.volonteers_activities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends volonteers_activitiesCreateManyArgs>(args?: SelectSubset<T, volonteers_activitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Volonteers_activities and returns the data saved in the database.
     * @param {volonteers_activitiesCreateManyAndReturnArgs} args - Arguments to create many Volonteers_activities.
     * @example
     * // Create many Volonteers_activities
     * const volonteers_activities = await prisma.volonteers_activities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Volonteers_activities and only return the `id`
     * const volonteers_activitiesWithIdOnly = await prisma.volonteers_activities.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends volonteers_activitiesCreateManyAndReturnArgs>(args?: SelectSubset<T, volonteers_activitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$volonteers_activitiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Volonteers_activities.
     * @param {volonteers_activitiesDeleteArgs} args - Arguments to delete one Volonteers_activities.
     * @example
     * // Delete one Volonteers_activities
     * const Volonteers_activities = await prisma.volonteers_activities.delete({
     *   where: {
     *     // ... filter to delete one Volonteers_activities
     *   }
     * })
     * 
     */
    delete<T extends volonteers_activitiesDeleteArgs>(args: SelectSubset<T, volonteers_activitiesDeleteArgs<ExtArgs>>): Prisma__volonteers_activitiesClient<$Result.GetResult<Prisma.$volonteers_activitiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Volonteers_activities.
     * @param {volonteers_activitiesUpdateArgs} args - Arguments to update one Volonteers_activities.
     * @example
     * // Update one Volonteers_activities
     * const volonteers_activities = await prisma.volonteers_activities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends volonteers_activitiesUpdateArgs>(args: SelectSubset<T, volonteers_activitiesUpdateArgs<ExtArgs>>): Prisma__volonteers_activitiesClient<$Result.GetResult<Prisma.$volonteers_activitiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Volonteers_activities.
     * @param {volonteers_activitiesDeleteManyArgs} args - Arguments to filter Volonteers_activities to delete.
     * @example
     * // Delete a few Volonteers_activities
     * const { count } = await prisma.volonteers_activities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends volonteers_activitiesDeleteManyArgs>(args?: SelectSubset<T, volonteers_activitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volonteers_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {volonteers_activitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Volonteers_activities
     * const volonteers_activities = await prisma.volonteers_activities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends volonteers_activitiesUpdateManyArgs>(args: SelectSubset<T, volonteers_activitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volonteers_activities and returns the data updated in the database.
     * @param {volonteers_activitiesUpdateManyAndReturnArgs} args - Arguments to update many Volonteers_activities.
     * @example
     * // Update many Volonteers_activities
     * const volonteers_activities = await prisma.volonteers_activities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Volonteers_activities and only return the `id`
     * const volonteers_activitiesWithIdOnly = await prisma.volonteers_activities.updateManyAndReturn({
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
    updateManyAndReturn<T extends volonteers_activitiesUpdateManyAndReturnArgs>(args: SelectSubset<T, volonteers_activitiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$volonteers_activitiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Volonteers_activities.
     * @param {volonteers_activitiesUpsertArgs} args - Arguments to update or create a Volonteers_activities.
     * @example
     * // Update or create a Volonteers_activities
     * const volonteers_activities = await prisma.volonteers_activities.upsert({
     *   create: {
     *     // ... data to create a Volonteers_activities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Volonteers_activities we want to update
     *   }
     * })
     */
    upsert<T extends volonteers_activitiesUpsertArgs>(args: SelectSubset<T, volonteers_activitiesUpsertArgs<ExtArgs>>): Prisma__volonteers_activitiesClient<$Result.GetResult<Prisma.$volonteers_activitiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Volonteers_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {volonteers_activitiesCountArgs} args - Arguments to filter Volonteers_activities to count.
     * @example
     * // Count the number of Volonteers_activities
     * const count = await prisma.volonteers_activities.count({
     *   where: {
     *     // ... the filter for the Volonteers_activities we want to count
     *   }
     * })
    **/
    count<T extends volonteers_activitiesCountArgs>(
      args?: Subset<T, volonteers_activitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Volonteers_activitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Volonteers_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Volonteers_activitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Volonteers_activitiesAggregateArgs>(args: Subset<T, Volonteers_activitiesAggregateArgs>): Prisma.PrismaPromise<GetVolonteers_activitiesAggregateType<T>>

    /**
     * Group by Volonteers_activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {volonteers_activitiesGroupByArgs} args - Group by arguments.
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
      T extends volonteers_activitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: volonteers_activitiesGroupByArgs['orderBy'] }
        : { orderBy?: volonteers_activitiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, volonteers_activitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVolonteers_activitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the volonteers_activities model
   */
  readonly fields: volonteers_activitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for volonteers_activities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__volonteers_activitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activities<T extends activitiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, activitiesDefaultArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    volonteers<T extends volonteersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, volonteersDefaultArgs<ExtArgs>>): Prisma__volonteersClient<$Result.GetResult<Prisma.$volonteersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the volonteers_activities model
   */
  interface volonteers_activitiesFieldRefs {
    readonly id: FieldRef<"volonteers_activities", 'Int'>
    readonly activity_id: FieldRef<"volonteers_activities", 'Int'>
    readonly volonteer_id: FieldRef<"volonteers_activities", 'Int'>
    readonly created_at: FieldRef<"volonteers_activities", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * volonteers_activities findUnique
   */
  export type volonteers_activitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers_activities
     */
    select?: volonteers_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers_activities
     */
    omit?: volonteers_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteers_activitiesInclude<ExtArgs> | null
    /**
     * Filter, which volonteers_activities to fetch.
     */
    where: volonteers_activitiesWhereUniqueInput
  }

  /**
   * volonteers_activities findUniqueOrThrow
   */
  export type volonteers_activitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers_activities
     */
    select?: volonteers_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers_activities
     */
    omit?: volonteers_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteers_activitiesInclude<ExtArgs> | null
    /**
     * Filter, which volonteers_activities to fetch.
     */
    where: volonteers_activitiesWhereUniqueInput
  }

  /**
   * volonteers_activities findFirst
   */
  export type volonteers_activitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers_activities
     */
    select?: volonteers_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers_activities
     */
    omit?: volonteers_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteers_activitiesInclude<ExtArgs> | null
    /**
     * Filter, which volonteers_activities to fetch.
     */
    where?: volonteers_activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of volonteers_activities to fetch.
     */
    orderBy?: volonteers_activitiesOrderByWithRelationInput | volonteers_activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for volonteers_activities.
     */
    cursor?: volonteers_activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` volonteers_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` volonteers_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of volonteers_activities.
     */
    distinct?: Volonteers_activitiesScalarFieldEnum | Volonteers_activitiesScalarFieldEnum[]
  }

  /**
   * volonteers_activities findFirstOrThrow
   */
  export type volonteers_activitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers_activities
     */
    select?: volonteers_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers_activities
     */
    omit?: volonteers_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteers_activitiesInclude<ExtArgs> | null
    /**
     * Filter, which volonteers_activities to fetch.
     */
    where?: volonteers_activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of volonteers_activities to fetch.
     */
    orderBy?: volonteers_activitiesOrderByWithRelationInput | volonteers_activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for volonteers_activities.
     */
    cursor?: volonteers_activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` volonteers_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` volonteers_activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of volonteers_activities.
     */
    distinct?: Volonteers_activitiesScalarFieldEnum | Volonteers_activitiesScalarFieldEnum[]
  }

  /**
   * volonteers_activities findMany
   */
  export type volonteers_activitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers_activities
     */
    select?: volonteers_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers_activities
     */
    omit?: volonteers_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteers_activitiesInclude<ExtArgs> | null
    /**
     * Filter, which volonteers_activities to fetch.
     */
    where?: volonteers_activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of volonteers_activities to fetch.
     */
    orderBy?: volonteers_activitiesOrderByWithRelationInput | volonteers_activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing volonteers_activities.
     */
    cursor?: volonteers_activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` volonteers_activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` volonteers_activities.
     */
    skip?: number
    distinct?: Volonteers_activitiesScalarFieldEnum | Volonteers_activitiesScalarFieldEnum[]
  }

  /**
   * volonteers_activities create
   */
  export type volonteers_activitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers_activities
     */
    select?: volonteers_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers_activities
     */
    omit?: volonteers_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteers_activitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a volonteers_activities.
     */
    data: XOR<volonteers_activitiesCreateInput, volonteers_activitiesUncheckedCreateInput>
  }

  /**
   * volonteers_activities createMany
   */
  export type volonteers_activitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many volonteers_activities.
     */
    data: volonteers_activitiesCreateManyInput | volonteers_activitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * volonteers_activities createManyAndReturn
   */
  export type volonteers_activitiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers_activities
     */
    select?: volonteers_activitiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers_activities
     */
    omit?: volonteers_activitiesOmit<ExtArgs> | null
    /**
     * The data used to create many volonteers_activities.
     */
    data: volonteers_activitiesCreateManyInput | volonteers_activitiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteers_activitiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * volonteers_activities update
   */
  export type volonteers_activitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers_activities
     */
    select?: volonteers_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers_activities
     */
    omit?: volonteers_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteers_activitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a volonteers_activities.
     */
    data: XOR<volonteers_activitiesUpdateInput, volonteers_activitiesUncheckedUpdateInput>
    /**
     * Choose, which volonteers_activities to update.
     */
    where: volonteers_activitiesWhereUniqueInput
  }

  /**
   * volonteers_activities updateMany
   */
  export type volonteers_activitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update volonteers_activities.
     */
    data: XOR<volonteers_activitiesUpdateManyMutationInput, volonteers_activitiesUncheckedUpdateManyInput>
    /**
     * Filter which volonteers_activities to update
     */
    where?: volonteers_activitiesWhereInput
    /**
     * Limit how many volonteers_activities to update.
     */
    limit?: number
  }

  /**
   * volonteers_activities updateManyAndReturn
   */
  export type volonteers_activitiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers_activities
     */
    select?: volonteers_activitiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers_activities
     */
    omit?: volonteers_activitiesOmit<ExtArgs> | null
    /**
     * The data used to update volonteers_activities.
     */
    data: XOR<volonteers_activitiesUpdateManyMutationInput, volonteers_activitiesUncheckedUpdateManyInput>
    /**
     * Filter which volonteers_activities to update
     */
    where?: volonteers_activitiesWhereInput
    /**
     * Limit how many volonteers_activities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteers_activitiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * volonteers_activities upsert
   */
  export type volonteers_activitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers_activities
     */
    select?: volonteers_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers_activities
     */
    omit?: volonteers_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteers_activitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the volonteers_activities to update in case it exists.
     */
    where: volonteers_activitiesWhereUniqueInput
    /**
     * In case the volonteers_activities found by the `where` argument doesn't exist, create a new volonteers_activities with this data.
     */
    create: XOR<volonteers_activitiesCreateInput, volonteers_activitiesUncheckedCreateInput>
    /**
     * In case the volonteers_activities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<volonteers_activitiesUpdateInput, volonteers_activitiesUncheckedUpdateInput>
  }

  /**
   * volonteers_activities delete
   */
  export type volonteers_activitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers_activities
     */
    select?: volonteers_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers_activities
     */
    omit?: volonteers_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteers_activitiesInclude<ExtArgs> | null
    /**
     * Filter which volonteers_activities to delete.
     */
    where: volonteers_activitiesWhereUniqueInput
  }

  /**
   * volonteers_activities deleteMany
   */
  export type volonteers_activitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which volonteers_activities to delete
     */
    where?: volonteers_activitiesWhereInput
    /**
     * Limit how many volonteers_activities to delete.
     */
    limit?: number
  }

  /**
   * volonteers_activities without action
   */
  export type volonteers_activitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the volonteers_activities
     */
    select?: volonteers_activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the volonteers_activities
     */
    omit?: volonteers_activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: volonteers_activitiesInclude<ExtArgs> | null
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


  export const ActivitiesScalarFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type ActivitiesScalarFieldEnum = (typeof ActivitiesScalarFieldEnum)[keyof typeof ActivitiesScalarFieldEnum]


  export const EldersScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    phone_number: 'phone_number',
    birthdate: 'birthdate',
    job: 'job',
    city: 'city',
    zipcode: 'zipcode',
    description: 'description',
    url_image: 'url_image',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type EldersScalarFieldEnum = (typeof EldersScalarFieldEnum)[keyof typeof EldersScalarFieldEnum]


  export const Elders_activitiesScalarFieldEnum: {
    id: 'id',
    activity_id: 'activity_id',
    elder_id: 'elder_id',
    created_at: 'created_at'
  };

  export type Elders_activitiesScalarFieldEnum = (typeof Elders_activitiesScalarFieldEnum)[keyof typeof Elders_activitiesScalarFieldEnum]


  export const VolonteersScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    phone_number: 'phone_number',
    url_image: 'url_image',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type VolonteersScalarFieldEnum = (typeof VolonteersScalarFieldEnum)[keyof typeof VolonteersScalarFieldEnum]


  export const Volonteers_activitiesScalarFieldEnum: {
    id: 'id',
    activity_id: 'activity_id',
    volonteer_id: 'volonteer_id',
    created_at: 'created_at'
  };

  export type Volonteers_activitiesScalarFieldEnum = (typeof Volonteers_activitiesScalarFieldEnum)[keyof typeof Volonteers_activitiesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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
   * Deep Input Types
   */


  export type activitiesWhereInput = {
    AND?: activitiesWhereInput | activitiesWhereInput[]
    OR?: activitiesWhereInput[]
    NOT?: activitiesWhereInput | activitiesWhereInput[]
    id?: IntFilter<"activities"> | number
    title?: StringNullableFilter<"activities"> | string | null
    elders_activities?: Elders_activitiesListRelationFilter
    volonteers_activities?: Volonteers_activitiesListRelationFilter
  }

  export type activitiesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    elders_activities?: elders_activitiesOrderByRelationAggregateInput
    volonteers_activities?: volonteers_activitiesOrderByRelationAggregateInput
  }

  export type activitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: activitiesWhereInput | activitiesWhereInput[]
    OR?: activitiesWhereInput[]
    NOT?: activitiesWhereInput | activitiesWhereInput[]
    title?: StringNullableFilter<"activities"> | string | null
    elders_activities?: Elders_activitiesListRelationFilter
    volonteers_activities?: Volonteers_activitiesListRelationFilter
  }, "id">

  export type activitiesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    _count?: activitiesCountOrderByAggregateInput
    _avg?: activitiesAvgOrderByAggregateInput
    _max?: activitiesMaxOrderByAggregateInput
    _min?: activitiesMinOrderByAggregateInput
    _sum?: activitiesSumOrderByAggregateInput
  }

  export type activitiesScalarWhereWithAggregatesInput = {
    AND?: activitiesScalarWhereWithAggregatesInput | activitiesScalarWhereWithAggregatesInput[]
    OR?: activitiesScalarWhereWithAggregatesInput[]
    NOT?: activitiesScalarWhereWithAggregatesInput | activitiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"activities"> | number
    title?: StringNullableWithAggregatesFilter<"activities"> | string | null
  }

  export type eldersWhereInput = {
    AND?: eldersWhereInput | eldersWhereInput[]
    OR?: eldersWhereInput[]
    NOT?: eldersWhereInput | eldersWhereInput[]
    id?: IntFilter<"elders"> | number
    firstname?: StringFilter<"elders"> | string
    lastname?: StringFilter<"elders"> | string
    email?: StringFilter<"elders"> | string
    phone_number?: StringFilter<"elders"> | string
    birthdate?: DateTimeNullableFilter<"elders"> | Date | string | null
    job?: StringNullableFilter<"elders"> | string | null
    city?: StringFilter<"elders"> | string
    zipcode?: IntFilter<"elders"> | number
    description?: StringFilter<"elders"> | string
    url_image?: StringNullableFilter<"elders"> | string | null
    created_at?: DateTimeNullableFilter<"elders"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"elders"> | Date | string | null
    elders_activities?: Elders_activitiesListRelationFilter
  }

  export type eldersOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    birthdate?: SortOrderInput | SortOrder
    job?: SortOrderInput | SortOrder
    city?: SortOrder
    zipcode?: SortOrder
    description?: SortOrder
    url_image?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    elders_activities?: elders_activitiesOrderByRelationAggregateInput
  }

  export type eldersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: eldersWhereInput | eldersWhereInput[]
    OR?: eldersWhereInput[]
    NOT?: eldersWhereInput | eldersWhereInput[]
    firstname?: StringFilter<"elders"> | string
    lastname?: StringFilter<"elders"> | string
    email?: StringFilter<"elders"> | string
    phone_number?: StringFilter<"elders"> | string
    birthdate?: DateTimeNullableFilter<"elders"> | Date | string | null
    job?: StringNullableFilter<"elders"> | string | null
    city?: StringFilter<"elders"> | string
    zipcode?: IntFilter<"elders"> | number
    description?: StringFilter<"elders"> | string
    url_image?: StringNullableFilter<"elders"> | string | null
    created_at?: DateTimeNullableFilter<"elders"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"elders"> | Date | string | null
    elders_activities?: Elders_activitiesListRelationFilter
  }, "id">

  export type eldersOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    birthdate?: SortOrderInput | SortOrder
    job?: SortOrderInput | SortOrder
    city?: SortOrder
    zipcode?: SortOrder
    description?: SortOrder
    url_image?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: eldersCountOrderByAggregateInput
    _avg?: eldersAvgOrderByAggregateInput
    _max?: eldersMaxOrderByAggregateInput
    _min?: eldersMinOrderByAggregateInput
    _sum?: eldersSumOrderByAggregateInput
  }

  export type eldersScalarWhereWithAggregatesInput = {
    AND?: eldersScalarWhereWithAggregatesInput | eldersScalarWhereWithAggregatesInput[]
    OR?: eldersScalarWhereWithAggregatesInput[]
    NOT?: eldersScalarWhereWithAggregatesInput | eldersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"elders"> | number
    firstname?: StringWithAggregatesFilter<"elders"> | string
    lastname?: StringWithAggregatesFilter<"elders"> | string
    email?: StringWithAggregatesFilter<"elders"> | string
    phone_number?: StringWithAggregatesFilter<"elders"> | string
    birthdate?: DateTimeNullableWithAggregatesFilter<"elders"> | Date | string | null
    job?: StringNullableWithAggregatesFilter<"elders"> | string | null
    city?: StringWithAggregatesFilter<"elders"> | string
    zipcode?: IntWithAggregatesFilter<"elders"> | number
    description?: StringWithAggregatesFilter<"elders"> | string
    url_image?: StringNullableWithAggregatesFilter<"elders"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"elders"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"elders"> | Date | string | null
  }

  export type elders_activitiesWhereInput = {
    AND?: elders_activitiesWhereInput | elders_activitiesWhereInput[]
    OR?: elders_activitiesWhereInput[]
    NOT?: elders_activitiesWhereInput | elders_activitiesWhereInput[]
    id?: IntFilter<"elders_activities"> | number
    activity_id?: IntFilter<"elders_activities"> | number
    elder_id?: IntFilter<"elders_activities"> | number
    created_at?: DateTimeNullableFilter<"elders_activities"> | Date | string | null
    activities?: XOR<ActivitiesScalarRelationFilter, activitiesWhereInput>
    elders?: XOR<EldersScalarRelationFilter, eldersWhereInput>
  }

  export type elders_activitiesOrderByWithRelationInput = {
    id?: SortOrder
    activity_id?: SortOrder
    elder_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    activities?: activitiesOrderByWithRelationInput
    elders?: eldersOrderByWithRelationInput
  }

  export type elders_activitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: elders_activitiesWhereInput | elders_activitiesWhereInput[]
    OR?: elders_activitiesWhereInput[]
    NOT?: elders_activitiesWhereInput | elders_activitiesWhereInput[]
    activity_id?: IntFilter<"elders_activities"> | number
    elder_id?: IntFilter<"elders_activities"> | number
    created_at?: DateTimeNullableFilter<"elders_activities"> | Date | string | null
    activities?: XOR<ActivitiesScalarRelationFilter, activitiesWhereInput>
    elders?: XOR<EldersScalarRelationFilter, eldersWhereInput>
  }, "id">

  export type elders_activitiesOrderByWithAggregationInput = {
    id?: SortOrder
    activity_id?: SortOrder
    elder_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: elders_activitiesCountOrderByAggregateInput
    _avg?: elders_activitiesAvgOrderByAggregateInput
    _max?: elders_activitiesMaxOrderByAggregateInput
    _min?: elders_activitiesMinOrderByAggregateInput
    _sum?: elders_activitiesSumOrderByAggregateInput
  }

  export type elders_activitiesScalarWhereWithAggregatesInput = {
    AND?: elders_activitiesScalarWhereWithAggregatesInput | elders_activitiesScalarWhereWithAggregatesInput[]
    OR?: elders_activitiesScalarWhereWithAggregatesInput[]
    NOT?: elders_activitiesScalarWhereWithAggregatesInput | elders_activitiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"elders_activities"> | number
    activity_id?: IntWithAggregatesFilter<"elders_activities"> | number
    elder_id?: IntWithAggregatesFilter<"elders_activities"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"elders_activities"> | Date | string | null
  }

  export type volonteersWhereInput = {
    AND?: volonteersWhereInput | volonteersWhereInput[]
    OR?: volonteersWhereInput[]
    NOT?: volonteersWhereInput | volonteersWhereInput[]
    id?: IntFilter<"volonteers"> | number
    firstname?: StringFilter<"volonteers"> | string
    lastname?: StringFilter<"volonteers"> | string
    email?: StringFilter<"volonteers"> | string
    phone_number?: StringFilter<"volonteers"> | string
    url_image?: StringNullableFilter<"volonteers"> | string | null
    created_at?: DateTimeNullableFilter<"volonteers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"volonteers"> | Date | string | null
    volonteers_activities?: Volonteers_activitiesListRelationFilter
  }

  export type volonteersOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    url_image?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    volonteers_activities?: volonteers_activitiesOrderByRelationAggregateInput
  }

  export type volonteersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: volonteersWhereInput | volonteersWhereInput[]
    OR?: volonteersWhereInput[]
    NOT?: volonteersWhereInput | volonteersWhereInput[]
    firstname?: StringFilter<"volonteers"> | string
    lastname?: StringFilter<"volonteers"> | string
    email?: StringFilter<"volonteers"> | string
    phone_number?: StringFilter<"volonteers"> | string
    url_image?: StringNullableFilter<"volonteers"> | string | null
    created_at?: DateTimeNullableFilter<"volonteers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"volonteers"> | Date | string | null
    volonteers_activities?: Volonteers_activitiesListRelationFilter
  }, "id">

  export type volonteersOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    url_image?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: volonteersCountOrderByAggregateInput
    _avg?: volonteersAvgOrderByAggregateInput
    _max?: volonteersMaxOrderByAggregateInput
    _min?: volonteersMinOrderByAggregateInput
    _sum?: volonteersSumOrderByAggregateInput
  }

  export type volonteersScalarWhereWithAggregatesInput = {
    AND?: volonteersScalarWhereWithAggregatesInput | volonteersScalarWhereWithAggregatesInput[]
    OR?: volonteersScalarWhereWithAggregatesInput[]
    NOT?: volonteersScalarWhereWithAggregatesInput | volonteersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"volonteers"> | number
    firstname?: StringWithAggregatesFilter<"volonteers"> | string
    lastname?: StringWithAggregatesFilter<"volonteers"> | string
    email?: StringWithAggregatesFilter<"volonteers"> | string
    phone_number?: StringWithAggregatesFilter<"volonteers"> | string
    url_image?: StringNullableWithAggregatesFilter<"volonteers"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"volonteers"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"volonteers"> | Date | string | null
  }

  export type volonteers_activitiesWhereInput = {
    AND?: volonteers_activitiesWhereInput | volonteers_activitiesWhereInput[]
    OR?: volonteers_activitiesWhereInput[]
    NOT?: volonteers_activitiesWhereInput | volonteers_activitiesWhereInput[]
    id?: IntFilter<"volonteers_activities"> | number
    activity_id?: IntFilter<"volonteers_activities"> | number
    volonteer_id?: IntFilter<"volonteers_activities"> | number
    created_at?: DateTimeNullableFilter<"volonteers_activities"> | Date | string | null
    activities?: XOR<ActivitiesScalarRelationFilter, activitiesWhereInput>
    volonteers?: XOR<VolonteersScalarRelationFilter, volonteersWhereInput>
  }

  export type volonteers_activitiesOrderByWithRelationInput = {
    id?: SortOrder
    activity_id?: SortOrder
    volonteer_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    activities?: activitiesOrderByWithRelationInput
    volonteers?: volonteersOrderByWithRelationInput
  }

  export type volonteers_activitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: volonteers_activitiesWhereInput | volonteers_activitiesWhereInput[]
    OR?: volonteers_activitiesWhereInput[]
    NOT?: volonteers_activitiesWhereInput | volonteers_activitiesWhereInput[]
    activity_id?: IntFilter<"volonteers_activities"> | number
    volonteer_id?: IntFilter<"volonteers_activities"> | number
    created_at?: DateTimeNullableFilter<"volonteers_activities"> | Date | string | null
    activities?: XOR<ActivitiesScalarRelationFilter, activitiesWhereInput>
    volonteers?: XOR<VolonteersScalarRelationFilter, volonteersWhereInput>
  }, "id">

  export type volonteers_activitiesOrderByWithAggregationInput = {
    id?: SortOrder
    activity_id?: SortOrder
    volonteer_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: volonteers_activitiesCountOrderByAggregateInput
    _avg?: volonteers_activitiesAvgOrderByAggregateInput
    _max?: volonteers_activitiesMaxOrderByAggregateInput
    _min?: volonteers_activitiesMinOrderByAggregateInput
    _sum?: volonteers_activitiesSumOrderByAggregateInput
  }

  export type volonteers_activitiesScalarWhereWithAggregatesInput = {
    AND?: volonteers_activitiesScalarWhereWithAggregatesInput | volonteers_activitiesScalarWhereWithAggregatesInput[]
    OR?: volonteers_activitiesScalarWhereWithAggregatesInput[]
    NOT?: volonteers_activitiesScalarWhereWithAggregatesInput | volonteers_activitiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"volonteers_activities"> | number
    activity_id?: IntWithAggregatesFilter<"volonteers_activities"> | number
    volonteer_id?: IntWithAggregatesFilter<"volonteers_activities"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"volonteers_activities"> | Date | string | null
  }

  export type activitiesCreateInput = {
    title?: string | null
    elders_activities?: elders_activitiesCreateNestedManyWithoutActivitiesInput
    volonteers_activities?: volonteers_activitiesCreateNestedManyWithoutActivitiesInput
  }

  export type activitiesUncheckedCreateInput = {
    id?: number
    title?: string | null
    elders_activities?: elders_activitiesUncheckedCreateNestedManyWithoutActivitiesInput
    volonteers_activities?: volonteers_activitiesUncheckedCreateNestedManyWithoutActivitiesInput
  }

  export type activitiesUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    elders_activities?: elders_activitiesUpdateManyWithoutActivitiesNestedInput
    volonteers_activities?: volonteers_activitiesUpdateManyWithoutActivitiesNestedInput
  }

  export type activitiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    elders_activities?: elders_activitiesUncheckedUpdateManyWithoutActivitiesNestedInput
    volonteers_activities?: volonteers_activitiesUncheckedUpdateManyWithoutActivitiesNestedInput
  }

  export type activitiesCreateManyInput = {
    id?: number
    title?: string | null
  }

  export type activitiesUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type activitiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eldersCreateInput = {
    firstname: string
    lastname: string
    email: string
    phone_number: string
    birthdate?: Date | string | null
    job?: string | null
    city: string
    zipcode: number
    description: string
    url_image?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    elders_activities?: elders_activitiesCreateNestedManyWithoutEldersInput
  }

  export type eldersUncheckedCreateInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    phone_number: string
    birthdate?: Date | string | null
    job?: string | null
    city: string
    zipcode: number
    description: string
    url_image?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    elders_activities?: elders_activitiesUncheckedCreateNestedManyWithoutEldersInput
  }

  export type eldersUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    url_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    elders_activities?: elders_activitiesUpdateManyWithoutEldersNestedInput
  }

  export type eldersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    url_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    elders_activities?: elders_activitiesUncheckedUpdateManyWithoutEldersNestedInput
  }

  export type eldersCreateManyInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    phone_number: string
    birthdate?: Date | string | null
    job?: string | null
    city: string
    zipcode: number
    description: string
    url_image?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type eldersUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    url_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eldersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    url_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type elders_activitiesCreateInput = {
    created_at?: Date | string | null
    activities: activitiesCreateNestedOneWithoutElders_activitiesInput
    elders: eldersCreateNestedOneWithoutElders_activitiesInput
  }

  export type elders_activitiesUncheckedCreateInput = {
    id?: number
    activity_id: number
    elder_id: number
    created_at?: Date | string | null
  }

  export type elders_activitiesUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activities?: activitiesUpdateOneRequiredWithoutElders_activitiesNestedInput
    elders?: eldersUpdateOneRequiredWithoutElders_activitiesNestedInput
  }

  export type elders_activitiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    activity_id?: IntFieldUpdateOperationsInput | number
    elder_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type elders_activitiesCreateManyInput = {
    id?: number
    activity_id: number
    elder_id: number
    created_at?: Date | string | null
  }

  export type elders_activitiesUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type elders_activitiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    activity_id?: IntFieldUpdateOperationsInput | number
    elder_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type volonteersCreateInput = {
    firstname: string
    lastname: string
    email: string
    phone_number: string
    url_image?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    volonteers_activities?: volonteers_activitiesCreateNestedManyWithoutVolonteersInput
  }

  export type volonteersUncheckedCreateInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    phone_number: string
    url_image?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    volonteers_activities?: volonteers_activitiesUncheckedCreateNestedManyWithoutVolonteersInput
  }

  export type volonteersUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    url_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    volonteers_activities?: volonteers_activitiesUpdateManyWithoutVolonteersNestedInput
  }

  export type volonteersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    url_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    volonteers_activities?: volonteers_activitiesUncheckedUpdateManyWithoutVolonteersNestedInput
  }

  export type volonteersCreateManyInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    phone_number: string
    url_image?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type volonteersUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    url_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type volonteersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    url_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type volonteers_activitiesCreateInput = {
    created_at?: Date | string | null
    activities: activitiesCreateNestedOneWithoutVolonteers_activitiesInput
    volonteers: volonteersCreateNestedOneWithoutVolonteers_activitiesInput
  }

  export type volonteers_activitiesUncheckedCreateInput = {
    id?: number
    activity_id: number
    volonteer_id: number
    created_at?: Date | string | null
  }

  export type volonteers_activitiesUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activities?: activitiesUpdateOneRequiredWithoutVolonteers_activitiesNestedInput
    volonteers?: volonteersUpdateOneRequiredWithoutVolonteers_activitiesNestedInput
  }

  export type volonteers_activitiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    activity_id?: IntFieldUpdateOperationsInput | number
    volonteer_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type volonteers_activitiesCreateManyInput = {
    id?: number
    activity_id: number
    volonteer_id: number
    created_at?: Date | string | null
  }

  export type volonteers_activitiesUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type volonteers_activitiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    activity_id?: IntFieldUpdateOperationsInput | number
    volonteer_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Elders_activitiesListRelationFilter = {
    every?: elders_activitiesWhereInput
    some?: elders_activitiesWhereInput
    none?: elders_activitiesWhereInput
  }

  export type Volonteers_activitiesListRelationFilter = {
    every?: volonteers_activitiesWhereInput
    some?: volonteers_activitiesWhereInput
    none?: volonteers_activitiesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type elders_activitiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type volonteers_activitiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type activitiesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type activitiesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type activitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type activitiesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type activitiesSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type eldersCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    birthdate?: SortOrder
    job?: SortOrder
    city?: SortOrder
    zipcode?: SortOrder
    description?: SortOrder
    url_image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type eldersAvgOrderByAggregateInput = {
    id?: SortOrder
    zipcode?: SortOrder
  }

  export type eldersMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    birthdate?: SortOrder
    job?: SortOrder
    city?: SortOrder
    zipcode?: SortOrder
    description?: SortOrder
    url_image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type eldersMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    birthdate?: SortOrder
    job?: SortOrder
    city?: SortOrder
    zipcode?: SortOrder
    description?: SortOrder
    url_image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type eldersSumOrderByAggregateInput = {
    id?: SortOrder
    zipcode?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ActivitiesScalarRelationFilter = {
    is?: activitiesWhereInput
    isNot?: activitiesWhereInput
  }

  export type EldersScalarRelationFilter = {
    is?: eldersWhereInput
    isNot?: eldersWhereInput
  }

  export type elders_activitiesCountOrderByAggregateInput = {
    id?: SortOrder
    activity_id?: SortOrder
    elder_id?: SortOrder
    created_at?: SortOrder
  }

  export type elders_activitiesAvgOrderByAggregateInput = {
    id?: SortOrder
    activity_id?: SortOrder
    elder_id?: SortOrder
  }

  export type elders_activitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    activity_id?: SortOrder
    elder_id?: SortOrder
    created_at?: SortOrder
  }

  export type elders_activitiesMinOrderByAggregateInput = {
    id?: SortOrder
    activity_id?: SortOrder
    elder_id?: SortOrder
    created_at?: SortOrder
  }

  export type elders_activitiesSumOrderByAggregateInput = {
    id?: SortOrder
    activity_id?: SortOrder
    elder_id?: SortOrder
  }

  export type volonteersCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    url_image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type volonteersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type volonteersMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    url_image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type volonteersMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    url_image?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type volonteersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VolonteersScalarRelationFilter = {
    is?: volonteersWhereInput
    isNot?: volonteersWhereInput
  }

  export type volonteers_activitiesCountOrderByAggregateInput = {
    id?: SortOrder
    activity_id?: SortOrder
    volonteer_id?: SortOrder
    created_at?: SortOrder
  }

  export type volonteers_activitiesAvgOrderByAggregateInput = {
    id?: SortOrder
    activity_id?: SortOrder
    volonteer_id?: SortOrder
  }

  export type volonteers_activitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    activity_id?: SortOrder
    volonteer_id?: SortOrder
    created_at?: SortOrder
  }

  export type volonteers_activitiesMinOrderByAggregateInput = {
    id?: SortOrder
    activity_id?: SortOrder
    volonteer_id?: SortOrder
    created_at?: SortOrder
  }

  export type volonteers_activitiesSumOrderByAggregateInput = {
    id?: SortOrder
    activity_id?: SortOrder
    volonteer_id?: SortOrder
  }

  export type elders_activitiesCreateNestedManyWithoutActivitiesInput = {
    create?: XOR<elders_activitiesCreateWithoutActivitiesInput, elders_activitiesUncheckedCreateWithoutActivitiesInput> | elders_activitiesCreateWithoutActivitiesInput[] | elders_activitiesUncheckedCreateWithoutActivitiesInput[]
    connectOrCreate?: elders_activitiesCreateOrConnectWithoutActivitiesInput | elders_activitiesCreateOrConnectWithoutActivitiesInput[]
    createMany?: elders_activitiesCreateManyActivitiesInputEnvelope
    connect?: elders_activitiesWhereUniqueInput | elders_activitiesWhereUniqueInput[]
  }

  export type volonteers_activitiesCreateNestedManyWithoutActivitiesInput = {
    create?: XOR<volonteers_activitiesCreateWithoutActivitiesInput, volonteers_activitiesUncheckedCreateWithoutActivitiesInput> | volonteers_activitiesCreateWithoutActivitiesInput[] | volonteers_activitiesUncheckedCreateWithoutActivitiesInput[]
    connectOrCreate?: volonteers_activitiesCreateOrConnectWithoutActivitiesInput | volonteers_activitiesCreateOrConnectWithoutActivitiesInput[]
    createMany?: volonteers_activitiesCreateManyActivitiesInputEnvelope
    connect?: volonteers_activitiesWhereUniqueInput | volonteers_activitiesWhereUniqueInput[]
  }

  export type elders_activitiesUncheckedCreateNestedManyWithoutActivitiesInput = {
    create?: XOR<elders_activitiesCreateWithoutActivitiesInput, elders_activitiesUncheckedCreateWithoutActivitiesInput> | elders_activitiesCreateWithoutActivitiesInput[] | elders_activitiesUncheckedCreateWithoutActivitiesInput[]
    connectOrCreate?: elders_activitiesCreateOrConnectWithoutActivitiesInput | elders_activitiesCreateOrConnectWithoutActivitiesInput[]
    createMany?: elders_activitiesCreateManyActivitiesInputEnvelope
    connect?: elders_activitiesWhereUniqueInput | elders_activitiesWhereUniqueInput[]
  }

  export type volonteers_activitiesUncheckedCreateNestedManyWithoutActivitiesInput = {
    create?: XOR<volonteers_activitiesCreateWithoutActivitiesInput, volonteers_activitiesUncheckedCreateWithoutActivitiesInput> | volonteers_activitiesCreateWithoutActivitiesInput[] | volonteers_activitiesUncheckedCreateWithoutActivitiesInput[]
    connectOrCreate?: volonteers_activitiesCreateOrConnectWithoutActivitiesInput | volonteers_activitiesCreateOrConnectWithoutActivitiesInput[]
    createMany?: volonteers_activitiesCreateManyActivitiesInputEnvelope
    connect?: volonteers_activitiesWhereUniqueInput | volonteers_activitiesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type elders_activitiesUpdateManyWithoutActivitiesNestedInput = {
    create?: XOR<elders_activitiesCreateWithoutActivitiesInput, elders_activitiesUncheckedCreateWithoutActivitiesInput> | elders_activitiesCreateWithoutActivitiesInput[] | elders_activitiesUncheckedCreateWithoutActivitiesInput[]
    connectOrCreate?: elders_activitiesCreateOrConnectWithoutActivitiesInput | elders_activitiesCreateOrConnectWithoutActivitiesInput[]
    upsert?: elders_activitiesUpsertWithWhereUniqueWithoutActivitiesInput | elders_activitiesUpsertWithWhereUniqueWithoutActivitiesInput[]
    createMany?: elders_activitiesCreateManyActivitiesInputEnvelope
    set?: elders_activitiesWhereUniqueInput | elders_activitiesWhereUniqueInput[]
    disconnect?: elders_activitiesWhereUniqueInput | elders_activitiesWhereUniqueInput[]
    delete?: elders_activitiesWhereUniqueInput | elders_activitiesWhereUniqueInput[]
    connect?: elders_activitiesWhereUniqueInput | elders_activitiesWhereUniqueInput[]
    update?: elders_activitiesUpdateWithWhereUniqueWithoutActivitiesInput | elders_activitiesUpdateWithWhereUniqueWithoutActivitiesInput[]
    updateMany?: elders_activitiesUpdateManyWithWhereWithoutActivitiesInput | elders_activitiesUpdateManyWithWhereWithoutActivitiesInput[]
    deleteMany?: elders_activitiesScalarWhereInput | elders_activitiesScalarWhereInput[]
  }

  export type volonteers_activitiesUpdateManyWithoutActivitiesNestedInput = {
    create?: XOR<volonteers_activitiesCreateWithoutActivitiesInput, volonteers_activitiesUncheckedCreateWithoutActivitiesInput> | volonteers_activitiesCreateWithoutActivitiesInput[] | volonteers_activitiesUncheckedCreateWithoutActivitiesInput[]
    connectOrCreate?: volonteers_activitiesCreateOrConnectWithoutActivitiesInput | volonteers_activitiesCreateOrConnectWithoutActivitiesInput[]
    upsert?: volonteers_activitiesUpsertWithWhereUniqueWithoutActivitiesInput | volonteers_activitiesUpsertWithWhereUniqueWithoutActivitiesInput[]
    createMany?: volonteers_activitiesCreateManyActivitiesInputEnvelope
    set?: volonteers_activitiesWhereUniqueInput | volonteers_activitiesWhereUniqueInput[]
    disconnect?: volonteers_activitiesWhereUniqueInput | volonteers_activitiesWhereUniqueInput[]
    delete?: volonteers_activitiesWhereUniqueInput | volonteers_activitiesWhereUniqueInput[]
    connect?: volonteers_activitiesWhereUniqueInput | volonteers_activitiesWhereUniqueInput[]
    update?: volonteers_activitiesUpdateWithWhereUniqueWithoutActivitiesInput | volonteers_activitiesUpdateWithWhereUniqueWithoutActivitiesInput[]
    updateMany?: volonteers_activitiesUpdateManyWithWhereWithoutActivitiesInput | volonteers_activitiesUpdateManyWithWhereWithoutActivitiesInput[]
    deleteMany?: volonteers_activitiesScalarWhereInput | volonteers_activitiesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type elders_activitiesUncheckedUpdateManyWithoutActivitiesNestedInput = {
    create?: XOR<elders_activitiesCreateWithoutActivitiesInput, elders_activitiesUncheckedCreateWithoutActivitiesInput> | elders_activitiesCreateWithoutActivitiesInput[] | elders_activitiesUncheckedCreateWithoutActivitiesInput[]
    connectOrCreate?: elders_activitiesCreateOrConnectWithoutActivitiesInput | elders_activitiesCreateOrConnectWithoutActivitiesInput[]
    upsert?: elders_activitiesUpsertWithWhereUniqueWithoutActivitiesInput | elders_activitiesUpsertWithWhereUniqueWithoutActivitiesInput[]
    createMany?: elders_activitiesCreateManyActivitiesInputEnvelope
    set?: elders_activitiesWhereUniqueInput | elders_activitiesWhereUniqueInput[]
    disconnect?: elders_activitiesWhereUniqueInput | elders_activitiesWhereUniqueInput[]
    delete?: elders_activitiesWhereUniqueInput | elders_activitiesWhereUniqueInput[]
    connect?: elders_activitiesWhereUniqueInput | elders_activitiesWhereUniqueInput[]
    update?: elders_activitiesUpdateWithWhereUniqueWithoutActivitiesInput | elders_activitiesUpdateWithWhereUniqueWithoutActivitiesInput[]
    updateMany?: elders_activitiesUpdateManyWithWhereWithoutActivitiesInput | elders_activitiesUpdateManyWithWhereWithoutActivitiesInput[]
    deleteMany?: elders_activitiesScalarWhereInput | elders_activitiesScalarWhereInput[]
  }

  export type volonteers_activitiesUncheckedUpdateManyWithoutActivitiesNestedInput = {
    create?: XOR<volonteers_activitiesCreateWithoutActivitiesInput, volonteers_activitiesUncheckedCreateWithoutActivitiesInput> | volonteers_activitiesCreateWithoutActivitiesInput[] | volonteers_activitiesUncheckedCreateWithoutActivitiesInput[]
    connectOrCreate?: volonteers_activitiesCreateOrConnectWithoutActivitiesInput | volonteers_activitiesCreateOrConnectWithoutActivitiesInput[]
    upsert?: volonteers_activitiesUpsertWithWhereUniqueWithoutActivitiesInput | volonteers_activitiesUpsertWithWhereUniqueWithoutActivitiesInput[]
    createMany?: volonteers_activitiesCreateManyActivitiesInputEnvelope
    set?: volonteers_activitiesWhereUniqueInput | volonteers_activitiesWhereUniqueInput[]
    disconnect?: volonteers_activitiesWhereUniqueInput | volonteers_activitiesWhereUniqueInput[]
    delete?: volonteers_activitiesWhereUniqueInput | volonteers_activitiesWhereUniqueInput[]
    connect?: volonteers_activitiesWhereUniqueInput | volonteers_activitiesWhereUniqueInput[]
    update?: volonteers_activitiesUpdateWithWhereUniqueWithoutActivitiesInput | volonteers_activitiesUpdateWithWhereUniqueWithoutActivitiesInput[]
    updateMany?: volonteers_activitiesUpdateManyWithWhereWithoutActivitiesInput | volonteers_activitiesUpdateManyWithWhereWithoutActivitiesInput[]
    deleteMany?: volonteers_activitiesScalarWhereInput | volonteers_activitiesScalarWhereInput[]
  }

  export type elders_activitiesCreateNestedManyWithoutEldersInput = {
    create?: XOR<elders_activitiesCreateWithoutEldersInput, elders_activitiesUncheckedCreateWithoutEldersInput> | elders_activitiesCreateWithoutEldersInput[] | elders_activitiesUncheckedCreateWithoutEldersInput[]
    connectOrCreate?: elders_activitiesCreateOrConnectWithoutEldersInput | elders_activitiesCreateOrConnectWithoutEldersInput[]
    createMany?: elders_activitiesCreateManyEldersInputEnvelope
    connect?: elders_activitiesWhereUniqueInput | elders_activitiesWhereUniqueInput[]
  }

  export type elders_activitiesUncheckedCreateNestedManyWithoutEldersInput = {
    create?: XOR<elders_activitiesCreateWithoutEldersInput, elders_activitiesUncheckedCreateWithoutEldersInput> | elders_activitiesCreateWithoutEldersInput[] | elders_activitiesUncheckedCreateWithoutEldersInput[]
    connectOrCreate?: elders_activitiesCreateOrConnectWithoutEldersInput | elders_activitiesCreateOrConnectWithoutEldersInput[]
    createMany?: elders_activitiesCreateManyEldersInputEnvelope
    connect?: elders_activitiesWhereUniqueInput | elders_activitiesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type elders_activitiesUpdateManyWithoutEldersNestedInput = {
    create?: XOR<elders_activitiesCreateWithoutEldersInput, elders_activitiesUncheckedCreateWithoutEldersInput> | elders_activitiesCreateWithoutEldersInput[] | elders_activitiesUncheckedCreateWithoutEldersInput[]
    connectOrCreate?: elders_activitiesCreateOrConnectWithoutEldersInput | elders_activitiesCreateOrConnectWithoutEldersInput[]
    upsert?: elders_activitiesUpsertWithWhereUniqueWithoutEldersInput | elders_activitiesUpsertWithWhereUniqueWithoutEldersInput[]
    createMany?: elders_activitiesCreateManyEldersInputEnvelope
    set?: elders_activitiesWhereUniqueInput | elders_activitiesWhereUniqueInput[]
    disconnect?: elders_activitiesWhereUniqueInput | elders_activitiesWhereUniqueInput[]
    delete?: elders_activitiesWhereUniqueInput | elders_activitiesWhereUniqueInput[]
    connect?: elders_activitiesWhereUniqueInput | elders_activitiesWhereUniqueInput[]
    update?: elders_activitiesUpdateWithWhereUniqueWithoutEldersInput | elders_activitiesUpdateWithWhereUniqueWithoutEldersInput[]
    updateMany?: elders_activitiesUpdateManyWithWhereWithoutEldersInput | elders_activitiesUpdateManyWithWhereWithoutEldersInput[]
    deleteMany?: elders_activitiesScalarWhereInput | elders_activitiesScalarWhereInput[]
  }

  export type elders_activitiesUncheckedUpdateManyWithoutEldersNestedInput = {
    create?: XOR<elders_activitiesCreateWithoutEldersInput, elders_activitiesUncheckedCreateWithoutEldersInput> | elders_activitiesCreateWithoutEldersInput[] | elders_activitiesUncheckedCreateWithoutEldersInput[]
    connectOrCreate?: elders_activitiesCreateOrConnectWithoutEldersInput | elders_activitiesCreateOrConnectWithoutEldersInput[]
    upsert?: elders_activitiesUpsertWithWhereUniqueWithoutEldersInput | elders_activitiesUpsertWithWhereUniqueWithoutEldersInput[]
    createMany?: elders_activitiesCreateManyEldersInputEnvelope
    set?: elders_activitiesWhereUniqueInput | elders_activitiesWhereUniqueInput[]
    disconnect?: elders_activitiesWhereUniqueInput | elders_activitiesWhereUniqueInput[]
    delete?: elders_activitiesWhereUniqueInput | elders_activitiesWhereUniqueInput[]
    connect?: elders_activitiesWhereUniqueInput | elders_activitiesWhereUniqueInput[]
    update?: elders_activitiesUpdateWithWhereUniqueWithoutEldersInput | elders_activitiesUpdateWithWhereUniqueWithoutEldersInput[]
    updateMany?: elders_activitiesUpdateManyWithWhereWithoutEldersInput | elders_activitiesUpdateManyWithWhereWithoutEldersInput[]
    deleteMany?: elders_activitiesScalarWhereInput | elders_activitiesScalarWhereInput[]
  }

  export type activitiesCreateNestedOneWithoutElders_activitiesInput = {
    create?: XOR<activitiesCreateWithoutElders_activitiesInput, activitiesUncheckedCreateWithoutElders_activitiesInput>
    connectOrCreate?: activitiesCreateOrConnectWithoutElders_activitiesInput
    connect?: activitiesWhereUniqueInput
  }

  export type eldersCreateNestedOneWithoutElders_activitiesInput = {
    create?: XOR<eldersCreateWithoutElders_activitiesInput, eldersUncheckedCreateWithoutElders_activitiesInput>
    connectOrCreate?: eldersCreateOrConnectWithoutElders_activitiesInput
    connect?: eldersWhereUniqueInput
  }

  export type activitiesUpdateOneRequiredWithoutElders_activitiesNestedInput = {
    create?: XOR<activitiesCreateWithoutElders_activitiesInput, activitiesUncheckedCreateWithoutElders_activitiesInput>
    connectOrCreate?: activitiesCreateOrConnectWithoutElders_activitiesInput
    upsert?: activitiesUpsertWithoutElders_activitiesInput
    connect?: activitiesWhereUniqueInput
    update?: XOR<XOR<activitiesUpdateToOneWithWhereWithoutElders_activitiesInput, activitiesUpdateWithoutElders_activitiesInput>, activitiesUncheckedUpdateWithoutElders_activitiesInput>
  }

  export type eldersUpdateOneRequiredWithoutElders_activitiesNestedInput = {
    create?: XOR<eldersCreateWithoutElders_activitiesInput, eldersUncheckedCreateWithoutElders_activitiesInput>
    connectOrCreate?: eldersCreateOrConnectWithoutElders_activitiesInput
    upsert?: eldersUpsertWithoutElders_activitiesInput
    connect?: eldersWhereUniqueInput
    update?: XOR<XOR<eldersUpdateToOneWithWhereWithoutElders_activitiesInput, eldersUpdateWithoutElders_activitiesInput>, eldersUncheckedUpdateWithoutElders_activitiesInput>
  }

  export type volonteers_activitiesCreateNestedManyWithoutVolonteersInput = {
    create?: XOR<volonteers_activitiesCreateWithoutVolonteersInput, volonteers_activitiesUncheckedCreateWithoutVolonteersInput> | volonteers_activitiesCreateWithoutVolonteersInput[] | volonteers_activitiesUncheckedCreateWithoutVolonteersInput[]
    connectOrCreate?: volonteers_activitiesCreateOrConnectWithoutVolonteersInput | volonteers_activitiesCreateOrConnectWithoutVolonteersInput[]
    createMany?: volonteers_activitiesCreateManyVolonteersInputEnvelope
    connect?: volonteers_activitiesWhereUniqueInput | volonteers_activitiesWhereUniqueInput[]
  }

  export type volonteers_activitiesUncheckedCreateNestedManyWithoutVolonteersInput = {
    create?: XOR<volonteers_activitiesCreateWithoutVolonteersInput, volonteers_activitiesUncheckedCreateWithoutVolonteersInput> | volonteers_activitiesCreateWithoutVolonteersInput[] | volonteers_activitiesUncheckedCreateWithoutVolonteersInput[]
    connectOrCreate?: volonteers_activitiesCreateOrConnectWithoutVolonteersInput | volonteers_activitiesCreateOrConnectWithoutVolonteersInput[]
    createMany?: volonteers_activitiesCreateManyVolonteersInputEnvelope
    connect?: volonteers_activitiesWhereUniqueInput | volonteers_activitiesWhereUniqueInput[]
  }

  export type volonteers_activitiesUpdateManyWithoutVolonteersNestedInput = {
    create?: XOR<volonteers_activitiesCreateWithoutVolonteersInput, volonteers_activitiesUncheckedCreateWithoutVolonteersInput> | volonteers_activitiesCreateWithoutVolonteersInput[] | volonteers_activitiesUncheckedCreateWithoutVolonteersInput[]
    connectOrCreate?: volonteers_activitiesCreateOrConnectWithoutVolonteersInput | volonteers_activitiesCreateOrConnectWithoutVolonteersInput[]
    upsert?: volonteers_activitiesUpsertWithWhereUniqueWithoutVolonteersInput | volonteers_activitiesUpsertWithWhereUniqueWithoutVolonteersInput[]
    createMany?: volonteers_activitiesCreateManyVolonteersInputEnvelope
    set?: volonteers_activitiesWhereUniqueInput | volonteers_activitiesWhereUniqueInput[]
    disconnect?: volonteers_activitiesWhereUniqueInput | volonteers_activitiesWhereUniqueInput[]
    delete?: volonteers_activitiesWhereUniqueInput | volonteers_activitiesWhereUniqueInput[]
    connect?: volonteers_activitiesWhereUniqueInput | volonteers_activitiesWhereUniqueInput[]
    update?: volonteers_activitiesUpdateWithWhereUniqueWithoutVolonteersInput | volonteers_activitiesUpdateWithWhereUniqueWithoutVolonteersInput[]
    updateMany?: volonteers_activitiesUpdateManyWithWhereWithoutVolonteersInput | volonteers_activitiesUpdateManyWithWhereWithoutVolonteersInput[]
    deleteMany?: volonteers_activitiesScalarWhereInput | volonteers_activitiesScalarWhereInput[]
  }

  export type volonteers_activitiesUncheckedUpdateManyWithoutVolonteersNestedInput = {
    create?: XOR<volonteers_activitiesCreateWithoutVolonteersInput, volonteers_activitiesUncheckedCreateWithoutVolonteersInput> | volonteers_activitiesCreateWithoutVolonteersInput[] | volonteers_activitiesUncheckedCreateWithoutVolonteersInput[]
    connectOrCreate?: volonteers_activitiesCreateOrConnectWithoutVolonteersInput | volonteers_activitiesCreateOrConnectWithoutVolonteersInput[]
    upsert?: volonteers_activitiesUpsertWithWhereUniqueWithoutVolonteersInput | volonteers_activitiesUpsertWithWhereUniqueWithoutVolonteersInput[]
    createMany?: volonteers_activitiesCreateManyVolonteersInputEnvelope
    set?: volonteers_activitiesWhereUniqueInput | volonteers_activitiesWhereUniqueInput[]
    disconnect?: volonteers_activitiesWhereUniqueInput | volonteers_activitiesWhereUniqueInput[]
    delete?: volonteers_activitiesWhereUniqueInput | volonteers_activitiesWhereUniqueInput[]
    connect?: volonteers_activitiesWhereUniqueInput | volonteers_activitiesWhereUniqueInput[]
    update?: volonteers_activitiesUpdateWithWhereUniqueWithoutVolonteersInput | volonteers_activitiesUpdateWithWhereUniqueWithoutVolonteersInput[]
    updateMany?: volonteers_activitiesUpdateManyWithWhereWithoutVolonteersInput | volonteers_activitiesUpdateManyWithWhereWithoutVolonteersInput[]
    deleteMany?: volonteers_activitiesScalarWhereInput | volonteers_activitiesScalarWhereInput[]
  }

  export type activitiesCreateNestedOneWithoutVolonteers_activitiesInput = {
    create?: XOR<activitiesCreateWithoutVolonteers_activitiesInput, activitiesUncheckedCreateWithoutVolonteers_activitiesInput>
    connectOrCreate?: activitiesCreateOrConnectWithoutVolonteers_activitiesInput
    connect?: activitiesWhereUniqueInput
  }

  export type volonteersCreateNestedOneWithoutVolonteers_activitiesInput = {
    create?: XOR<volonteersCreateWithoutVolonteers_activitiesInput, volonteersUncheckedCreateWithoutVolonteers_activitiesInput>
    connectOrCreate?: volonteersCreateOrConnectWithoutVolonteers_activitiesInput
    connect?: volonteersWhereUniqueInput
  }

  export type activitiesUpdateOneRequiredWithoutVolonteers_activitiesNestedInput = {
    create?: XOR<activitiesCreateWithoutVolonteers_activitiesInput, activitiesUncheckedCreateWithoutVolonteers_activitiesInput>
    connectOrCreate?: activitiesCreateOrConnectWithoutVolonteers_activitiesInput
    upsert?: activitiesUpsertWithoutVolonteers_activitiesInput
    connect?: activitiesWhereUniqueInput
    update?: XOR<XOR<activitiesUpdateToOneWithWhereWithoutVolonteers_activitiesInput, activitiesUpdateWithoutVolonteers_activitiesInput>, activitiesUncheckedUpdateWithoutVolonteers_activitiesInput>
  }

  export type volonteersUpdateOneRequiredWithoutVolonteers_activitiesNestedInput = {
    create?: XOR<volonteersCreateWithoutVolonteers_activitiesInput, volonteersUncheckedCreateWithoutVolonteers_activitiesInput>
    connectOrCreate?: volonteersCreateOrConnectWithoutVolonteers_activitiesInput
    upsert?: volonteersUpsertWithoutVolonteers_activitiesInput
    connect?: volonteersWhereUniqueInput
    update?: XOR<XOR<volonteersUpdateToOneWithWhereWithoutVolonteers_activitiesInput, volonteersUpdateWithoutVolonteers_activitiesInput>, volonteersUncheckedUpdateWithoutVolonteers_activitiesInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type elders_activitiesCreateWithoutActivitiesInput = {
    created_at?: Date | string | null
    elders: eldersCreateNestedOneWithoutElders_activitiesInput
  }

  export type elders_activitiesUncheckedCreateWithoutActivitiesInput = {
    id?: number
    elder_id: number
    created_at?: Date | string | null
  }

  export type elders_activitiesCreateOrConnectWithoutActivitiesInput = {
    where: elders_activitiesWhereUniqueInput
    create: XOR<elders_activitiesCreateWithoutActivitiesInput, elders_activitiesUncheckedCreateWithoutActivitiesInput>
  }

  export type elders_activitiesCreateManyActivitiesInputEnvelope = {
    data: elders_activitiesCreateManyActivitiesInput | elders_activitiesCreateManyActivitiesInput[]
    skipDuplicates?: boolean
  }

  export type volonteers_activitiesCreateWithoutActivitiesInput = {
    created_at?: Date | string | null
    volonteers: volonteersCreateNestedOneWithoutVolonteers_activitiesInput
  }

  export type volonteers_activitiesUncheckedCreateWithoutActivitiesInput = {
    id?: number
    volonteer_id: number
    created_at?: Date | string | null
  }

  export type volonteers_activitiesCreateOrConnectWithoutActivitiesInput = {
    where: volonteers_activitiesWhereUniqueInput
    create: XOR<volonteers_activitiesCreateWithoutActivitiesInput, volonteers_activitiesUncheckedCreateWithoutActivitiesInput>
  }

  export type volonteers_activitiesCreateManyActivitiesInputEnvelope = {
    data: volonteers_activitiesCreateManyActivitiesInput | volonteers_activitiesCreateManyActivitiesInput[]
    skipDuplicates?: boolean
  }

  export type elders_activitiesUpsertWithWhereUniqueWithoutActivitiesInput = {
    where: elders_activitiesWhereUniqueInput
    update: XOR<elders_activitiesUpdateWithoutActivitiesInput, elders_activitiesUncheckedUpdateWithoutActivitiesInput>
    create: XOR<elders_activitiesCreateWithoutActivitiesInput, elders_activitiesUncheckedCreateWithoutActivitiesInput>
  }

  export type elders_activitiesUpdateWithWhereUniqueWithoutActivitiesInput = {
    where: elders_activitiesWhereUniqueInput
    data: XOR<elders_activitiesUpdateWithoutActivitiesInput, elders_activitiesUncheckedUpdateWithoutActivitiesInput>
  }

  export type elders_activitiesUpdateManyWithWhereWithoutActivitiesInput = {
    where: elders_activitiesScalarWhereInput
    data: XOR<elders_activitiesUpdateManyMutationInput, elders_activitiesUncheckedUpdateManyWithoutActivitiesInput>
  }

  export type elders_activitiesScalarWhereInput = {
    AND?: elders_activitiesScalarWhereInput | elders_activitiesScalarWhereInput[]
    OR?: elders_activitiesScalarWhereInput[]
    NOT?: elders_activitiesScalarWhereInput | elders_activitiesScalarWhereInput[]
    id?: IntFilter<"elders_activities"> | number
    activity_id?: IntFilter<"elders_activities"> | number
    elder_id?: IntFilter<"elders_activities"> | number
    created_at?: DateTimeNullableFilter<"elders_activities"> | Date | string | null
  }

  export type volonteers_activitiesUpsertWithWhereUniqueWithoutActivitiesInput = {
    where: volonteers_activitiesWhereUniqueInput
    update: XOR<volonteers_activitiesUpdateWithoutActivitiesInput, volonteers_activitiesUncheckedUpdateWithoutActivitiesInput>
    create: XOR<volonteers_activitiesCreateWithoutActivitiesInput, volonteers_activitiesUncheckedCreateWithoutActivitiesInput>
  }

  export type volonteers_activitiesUpdateWithWhereUniqueWithoutActivitiesInput = {
    where: volonteers_activitiesWhereUniqueInput
    data: XOR<volonteers_activitiesUpdateWithoutActivitiesInput, volonteers_activitiesUncheckedUpdateWithoutActivitiesInput>
  }

  export type volonteers_activitiesUpdateManyWithWhereWithoutActivitiesInput = {
    where: volonteers_activitiesScalarWhereInput
    data: XOR<volonteers_activitiesUpdateManyMutationInput, volonteers_activitiesUncheckedUpdateManyWithoutActivitiesInput>
  }

  export type volonteers_activitiesScalarWhereInput = {
    AND?: volonteers_activitiesScalarWhereInput | volonteers_activitiesScalarWhereInput[]
    OR?: volonteers_activitiesScalarWhereInput[]
    NOT?: volonteers_activitiesScalarWhereInput | volonteers_activitiesScalarWhereInput[]
    id?: IntFilter<"volonteers_activities"> | number
    activity_id?: IntFilter<"volonteers_activities"> | number
    volonteer_id?: IntFilter<"volonteers_activities"> | number
    created_at?: DateTimeNullableFilter<"volonteers_activities"> | Date | string | null
  }

  export type elders_activitiesCreateWithoutEldersInput = {
    created_at?: Date | string | null
    activities: activitiesCreateNestedOneWithoutElders_activitiesInput
  }

  export type elders_activitiesUncheckedCreateWithoutEldersInput = {
    id?: number
    activity_id: number
    created_at?: Date | string | null
  }

  export type elders_activitiesCreateOrConnectWithoutEldersInput = {
    where: elders_activitiesWhereUniqueInput
    create: XOR<elders_activitiesCreateWithoutEldersInput, elders_activitiesUncheckedCreateWithoutEldersInput>
  }

  export type elders_activitiesCreateManyEldersInputEnvelope = {
    data: elders_activitiesCreateManyEldersInput | elders_activitiesCreateManyEldersInput[]
    skipDuplicates?: boolean
  }

  export type elders_activitiesUpsertWithWhereUniqueWithoutEldersInput = {
    where: elders_activitiesWhereUniqueInput
    update: XOR<elders_activitiesUpdateWithoutEldersInput, elders_activitiesUncheckedUpdateWithoutEldersInput>
    create: XOR<elders_activitiesCreateWithoutEldersInput, elders_activitiesUncheckedCreateWithoutEldersInput>
  }

  export type elders_activitiesUpdateWithWhereUniqueWithoutEldersInput = {
    where: elders_activitiesWhereUniqueInput
    data: XOR<elders_activitiesUpdateWithoutEldersInput, elders_activitiesUncheckedUpdateWithoutEldersInput>
  }

  export type elders_activitiesUpdateManyWithWhereWithoutEldersInput = {
    where: elders_activitiesScalarWhereInput
    data: XOR<elders_activitiesUpdateManyMutationInput, elders_activitiesUncheckedUpdateManyWithoutEldersInput>
  }

  export type activitiesCreateWithoutElders_activitiesInput = {
    title?: string | null
    volonteers_activities?: volonteers_activitiesCreateNestedManyWithoutActivitiesInput
  }

  export type activitiesUncheckedCreateWithoutElders_activitiesInput = {
    id?: number
    title?: string | null
    volonteers_activities?: volonteers_activitiesUncheckedCreateNestedManyWithoutActivitiesInput
  }

  export type activitiesCreateOrConnectWithoutElders_activitiesInput = {
    where: activitiesWhereUniqueInput
    create: XOR<activitiesCreateWithoutElders_activitiesInput, activitiesUncheckedCreateWithoutElders_activitiesInput>
  }

  export type eldersCreateWithoutElders_activitiesInput = {
    firstname: string
    lastname: string
    email: string
    phone_number: string
    birthdate?: Date | string | null
    job?: string | null
    city: string
    zipcode: number
    description: string
    url_image?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type eldersUncheckedCreateWithoutElders_activitiesInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    phone_number: string
    birthdate?: Date | string | null
    job?: string | null
    city: string
    zipcode: number
    description: string
    url_image?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type eldersCreateOrConnectWithoutElders_activitiesInput = {
    where: eldersWhereUniqueInput
    create: XOR<eldersCreateWithoutElders_activitiesInput, eldersUncheckedCreateWithoutElders_activitiesInput>
  }

  export type activitiesUpsertWithoutElders_activitiesInput = {
    update: XOR<activitiesUpdateWithoutElders_activitiesInput, activitiesUncheckedUpdateWithoutElders_activitiesInput>
    create: XOR<activitiesCreateWithoutElders_activitiesInput, activitiesUncheckedCreateWithoutElders_activitiesInput>
    where?: activitiesWhereInput
  }

  export type activitiesUpdateToOneWithWhereWithoutElders_activitiesInput = {
    where?: activitiesWhereInput
    data: XOR<activitiesUpdateWithoutElders_activitiesInput, activitiesUncheckedUpdateWithoutElders_activitiesInput>
  }

  export type activitiesUpdateWithoutElders_activitiesInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    volonteers_activities?: volonteers_activitiesUpdateManyWithoutActivitiesNestedInput
  }

  export type activitiesUncheckedUpdateWithoutElders_activitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    volonteers_activities?: volonteers_activitiesUncheckedUpdateManyWithoutActivitiesNestedInput
  }

  export type eldersUpsertWithoutElders_activitiesInput = {
    update: XOR<eldersUpdateWithoutElders_activitiesInput, eldersUncheckedUpdateWithoutElders_activitiesInput>
    create: XOR<eldersCreateWithoutElders_activitiesInput, eldersUncheckedCreateWithoutElders_activitiesInput>
    where?: eldersWhereInput
  }

  export type eldersUpdateToOneWithWhereWithoutElders_activitiesInput = {
    where?: eldersWhereInput
    data: XOR<eldersUpdateWithoutElders_activitiesInput, eldersUncheckedUpdateWithoutElders_activitiesInput>
  }

  export type eldersUpdateWithoutElders_activitiesInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    url_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eldersUncheckedUpdateWithoutElders_activitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    zipcode?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    url_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type volonteers_activitiesCreateWithoutVolonteersInput = {
    created_at?: Date | string | null
    activities: activitiesCreateNestedOneWithoutVolonteers_activitiesInput
  }

  export type volonteers_activitiesUncheckedCreateWithoutVolonteersInput = {
    id?: number
    activity_id: number
    created_at?: Date | string | null
  }

  export type volonteers_activitiesCreateOrConnectWithoutVolonteersInput = {
    where: volonteers_activitiesWhereUniqueInput
    create: XOR<volonteers_activitiesCreateWithoutVolonteersInput, volonteers_activitiesUncheckedCreateWithoutVolonteersInput>
  }

  export type volonteers_activitiesCreateManyVolonteersInputEnvelope = {
    data: volonteers_activitiesCreateManyVolonteersInput | volonteers_activitiesCreateManyVolonteersInput[]
    skipDuplicates?: boolean
  }

  export type volonteers_activitiesUpsertWithWhereUniqueWithoutVolonteersInput = {
    where: volonteers_activitiesWhereUniqueInput
    update: XOR<volonteers_activitiesUpdateWithoutVolonteersInput, volonteers_activitiesUncheckedUpdateWithoutVolonteersInput>
    create: XOR<volonteers_activitiesCreateWithoutVolonteersInput, volonteers_activitiesUncheckedCreateWithoutVolonteersInput>
  }

  export type volonteers_activitiesUpdateWithWhereUniqueWithoutVolonteersInput = {
    where: volonteers_activitiesWhereUniqueInput
    data: XOR<volonteers_activitiesUpdateWithoutVolonteersInput, volonteers_activitiesUncheckedUpdateWithoutVolonteersInput>
  }

  export type volonteers_activitiesUpdateManyWithWhereWithoutVolonteersInput = {
    where: volonteers_activitiesScalarWhereInput
    data: XOR<volonteers_activitiesUpdateManyMutationInput, volonteers_activitiesUncheckedUpdateManyWithoutVolonteersInput>
  }

  export type activitiesCreateWithoutVolonteers_activitiesInput = {
    title?: string | null
    elders_activities?: elders_activitiesCreateNestedManyWithoutActivitiesInput
  }

  export type activitiesUncheckedCreateWithoutVolonteers_activitiesInput = {
    id?: number
    title?: string | null
    elders_activities?: elders_activitiesUncheckedCreateNestedManyWithoutActivitiesInput
  }

  export type activitiesCreateOrConnectWithoutVolonteers_activitiesInput = {
    where: activitiesWhereUniqueInput
    create: XOR<activitiesCreateWithoutVolonteers_activitiesInput, activitiesUncheckedCreateWithoutVolonteers_activitiesInput>
  }

  export type volonteersCreateWithoutVolonteers_activitiesInput = {
    firstname: string
    lastname: string
    email: string
    phone_number: string
    url_image?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type volonteersUncheckedCreateWithoutVolonteers_activitiesInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    phone_number: string
    url_image?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type volonteersCreateOrConnectWithoutVolonteers_activitiesInput = {
    where: volonteersWhereUniqueInput
    create: XOR<volonteersCreateWithoutVolonteers_activitiesInput, volonteersUncheckedCreateWithoutVolonteers_activitiesInput>
  }

  export type activitiesUpsertWithoutVolonteers_activitiesInput = {
    update: XOR<activitiesUpdateWithoutVolonteers_activitiesInput, activitiesUncheckedUpdateWithoutVolonteers_activitiesInput>
    create: XOR<activitiesCreateWithoutVolonteers_activitiesInput, activitiesUncheckedCreateWithoutVolonteers_activitiesInput>
    where?: activitiesWhereInput
  }

  export type activitiesUpdateToOneWithWhereWithoutVolonteers_activitiesInput = {
    where?: activitiesWhereInput
    data: XOR<activitiesUpdateWithoutVolonteers_activitiesInput, activitiesUncheckedUpdateWithoutVolonteers_activitiesInput>
  }

  export type activitiesUpdateWithoutVolonteers_activitiesInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    elders_activities?: elders_activitiesUpdateManyWithoutActivitiesNestedInput
  }

  export type activitiesUncheckedUpdateWithoutVolonteers_activitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    elders_activities?: elders_activitiesUncheckedUpdateManyWithoutActivitiesNestedInput
  }

  export type volonteersUpsertWithoutVolonteers_activitiesInput = {
    update: XOR<volonteersUpdateWithoutVolonteers_activitiesInput, volonteersUncheckedUpdateWithoutVolonteers_activitiesInput>
    create: XOR<volonteersCreateWithoutVolonteers_activitiesInput, volonteersUncheckedCreateWithoutVolonteers_activitiesInput>
    where?: volonteersWhereInput
  }

  export type volonteersUpdateToOneWithWhereWithoutVolonteers_activitiesInput = {
    where?: volonteersWhereInput
    data: XOR<volonteersUpdateWithoutVolonteers_activitiesInput, volonteersUncheckedUpdateWithoutVolonteers_activitiesInput>
  }

  export type volonteersUpdateWithoutVolonteers_activitiesInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    url_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type volonteersUncheckedUpdateWithoutVolonteers_activitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    url_image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type elders_activitiesCreateManyActivitiesInput = {
    id?: number
    elder_id: number
    created_at?: Date | string | null
  }

  export type volonteers_activitiesCreateManyActivitiesInput = {
    id?: number
    volonteer_id: number
    created_at?: Date | string | null
  }

  export type elders_activitiesUpdateWithoutActivitiesInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    elders?: eldersUpdateOneRequiredWithoutElders_activitiesNestedInput
  }

  export type elders_activitiesUncheckedUpdateWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    elder_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type elders_activitiesUncheckedUpdateManyWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    elder_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type volonteers_activitiesUpdateWithoutActivitiesInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    volonteers?: volonteersUpdateOneRequiredWithoutVolonteers_activitiesNestedInput
  }

  export type volonteers_activitiesUncheckedUpdateWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    volonteer_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type volonteers_activitiesUncheckedUpdateManyWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    volonteer_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type elders_activitiesCreateManyEldersInput = {
    id?: number
    activity_id: number
    created_at?: Date | string | null
  }

  export type elders_activitiesUpdateWithoutEldersInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activities?: activitiesUpdateOneRequiredWithoutElders_activitiesNestedInput
  }

  export type elders_activitiesUncheckedUpdateWithoutEldersInput = {
    id?: IntFieldUpdateOperationsInput | number
    activity_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type elders_activitiesUncheckedUpdateManyWithoutEldersInput = {
    id?: IntFieldUpdateOperationsInput | number
    activity_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type volonteers_activitiesCreateManyVolonteersInput = {
    id?: number
    activity_id: number
    created_at?: Date | string | null
  }

  export type volonteers_activitiesUpdateWithoutVolonteersInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activities?: activitiesUpdateOneRequiredWithoutVolonteers_activitiesNestedInput
  }

  export type volonteers_activitiesUncheckedUpdateWithoutVolonteersInput = {
    id?: IntFieldUpdateOperationsInput | number
    activity_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type volonteers_activitiesUncheckedUpdateManyWithoutVolonteersInput = {
    id?: IntFieldUpdateOperationsInput | number
    activity_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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