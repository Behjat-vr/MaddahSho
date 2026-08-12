
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
 * Model OTP
 * 
 */
export type OTP = $Result.DefaultSelection<Prisma.$OTPPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Lesson
 * 
 */
export type Lesson = $Result.DefaultSelection<Prisma.$LessonPayload>
/**
 * Model Enrollment
 * 
 */
export type Enrollment = $Result.DefaultSelection<Prisma.$EnrollmentPayload>
/**
 * Model ExerciseSubmission
 * 
 */
export type ExerciseSubmission = $Result.DefaultSelection<Prisma.$ExerciseSubmissionPayload>
/**
 * Model ExerciseAnalysis
 * 
 */
export type ExerciseAnalysis = $Result.DefaultSelection<Prisma.$ExerciseAnalysisPayload>
/**
 * Model SupportConversation
 * 
 */
export type SupportConversation = $Result.DefaultSelection<Prisma.$SupportConversationPayload>
/**
 * Model SupportMessage
 * 
 */
export type SupportMessage = $Result.DefaultSelection<Prisma.$SupportMessagePayload>
/**
 * Model KnowledgeDocument
 * 
 */
export type KnowledgeDocument = $Result.DefaultSelection<Prisma.$KnowledgeDocumentPayload>
/**
 * Model CourseAIConfig
 * 
 */
export type CourseAIConfig = $Result.DefaultSelection<Prisma.$CourseAIConfigPayload>
/**
 * Model SystemSetting
 * 
 */
export type SystemSetting = $Result.DefaultSelection<Prisma.$SystemSettingPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

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

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * `prisma.oTP`: Exposes CRUD operations for the **OTP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OTPS
    * const oTPS = await prisma.oTP.findMany()
    * ```
    */
  get oTP(): Prisma.OTPDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lesson.findMany()
    * ```
    */
  get lesson(): Prisma.LessonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exerciseSubmission`: Exposes CRUD operations for the **ExerciseSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExerciseSubmissions
    * const exerciseSubmissions = await prisma.exerciseSubmission.findMany()
    * ```
    */
  get exerciseSubmission(): Prisma.ExerciseSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exerciseAnalysis`: Exposes CRUD operations for the **ExerciseAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExerciseAnalyses
    * const exerciseAnalyses = await prisma.exerciseAnalysis.findMany()
    * ```
    */
  get exerciseAnalysis(): Prisma.ExerciseAnalysisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supportConversation`: Exposes CRUD operations for the **SupportConversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupportConversations
    * const supportConversations = await prisma.supportConversation.findMany()
    * ```
    */
  get supportConversation(): Prisma.SupportConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supportMessage`: Exposes CRUD operations for the **SupportMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupportMessages
    * const supportMessages = await prisma.supportMessage.findMany()
    * ```
    */
  get supportMessage(): Prisma.SupportMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.knowledgeDocument`: Exposes CRUD operations for the **KnowledgeDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KnowledgeDocuments
    * const knowledgeDocuments = await prisma.knowledgeDocument.findMany()
    * ```
    */
  get knowledgeDocument(): Prisma.KnowledgeDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseAIConfig`: Exposes CRUD operations for the **CourseAIConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseAIConfigs
    * const courseAIConfigs = await prisma.courseAIConfig.findMany()
    * ```
    */
  get courseAIConfig(): Prisma.CourseAIConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemSetting`: Exposes CRUD operations for the **SystemSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemSettings
    * const systemSettings = await prisma.systemSetting.findMany()
    * ```
    */
  get systemSetting(): Prisma.SystemSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    OTP: 'OTP',
    Course: 'Course',
    Lesson: 'Lesson',
    Enrollment: 'Enrollment',
    ExerciseSubmission: 'ExerciseSubmission',
    ExerciseAnalysis: 'ExerciseAnalysis',
    SupportConversation: 'SupportConversation',
    SupportMessage: 'SupportMessage',
    KnowledgeDocument: 'KnowledgeDocument',
    CourseAIConfig: 'CourseAIConfig',
    SystemSetting: 'SystemSetting',
    Notification: 'Notification'
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
      modelProps: "user" | "oTP" | "course" | "lesson" | "enrollment" | "exerciseSubmission" | "exerciseAnalysis" | "supportConversation" | "supportMessage" | "knowledgeDocument" | "courseAIConfig" | "systemSetting" | "notification"
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
      OTP: {
        payload: Prisma.$OTPPayload<ExtArgs>
        fields: Prisma.OTPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OTPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OTPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          findFirst: {
            args: Prisma.OTPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OTPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          findMany: {
            args: Prisma.OTPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>[]
          }
          create: {
            args: Prisma.OTPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          createMany: {
            args: Prisma.OTPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OTPCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>[]
          }
          delete: {
            args: Prisma.OTPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          update: {
            args: Prisma.OTPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          deleteMany: {
            args: Prisma.OTPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OTPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OTPUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>[]
          }
          upsert: {
            args: Prisma.OTPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OTPPayload>
          }
          aggregate: {
            args: Prisma.OTPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOTP>
          }
          groupBy: {
            args: Prisma.OTPGroupByArgs<ExtArgs>
            result: $Utils.Optional<OTPGroupByOutputType>[]
          }
          count: {
            args: Prisma.OTPCountArgs<ExtArgs>
            result: $Utils.Optional<OTPCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Lesson: {
        payload: Prisma.$LessonPayload<ExtArgs>
        fields: Prisma.LessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findFirst: {
            args: Prisma.LessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findMany: {
            args: Prisma.LessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          create: {
            args: Prisma.LessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          createMany: {
            args: Prisma.LessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          delete: {
            args: Prisma.LessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          update: {
            args: Prisma.LessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          deleteMany: {
            args: Prisma.LessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          upsert: {
            args: Prisma.LessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          aggregate: {
            args: Prisma.LessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLesson>
          }
          groupBy: {
            args: Prisma.LessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonCountArgs<ExtArgs>
            result: $Utils.Optional<LessonCountAggregateOutputType> | number
          }
        }
      }
      Enrollment: {
        payload: Prisma.$EnrollmentPayload<ExtArgs>
        fields: Prisma.EnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findMany: {
            args: Prisma.EnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          create: {
            args: Prisma.EnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          createMany: {
            args: Prisma.EnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          delete: {
            args: Prisma.EnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          update: {
            args: Prisma.EnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrollmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          upsert: {
            args: Prisma.EnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.EnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
      ExerciseSubmission: {
        payload: Prisma.$ExerciseSubmissionPayload<ExtArgs>
        fields: Prisma.ExerciseSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseSubmissionPayload>
          }
          findFirst: {
            args: Prisma.ExerciseSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseSubmissionPayload>
          }
          findMany: {
            args: Prisma.ExerciseSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseSubmissionPayload>[]
          }
          create: {
            args: Prisma.ExerciseSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseSubmissionPayload>
          }
          createMany: {
            args: Prisma.ExerciseSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseSubmissionPayload>[]
          }
          delete: {
            args: Prisma.ExerciseSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseSubmissionPayload>
          }
          update: {
            args: Prisma.ExerciseSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.ExerciseSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.ExerciseSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseSubmissionPayload>
          }
          aggregate: {
            args: Prisma.ExerciseSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExerciseSubmission>
          }
          groupBy: {
            args: Prisma.ExerciseSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseSubmissionCountAggregateOutputType> | number
          }
        }
      }
      ExerciseAnalysis: {
        payload: Prisma.$ExerciseAnalysisPayload<ExtArgs>
        fields: Prisma.ExerciseAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAnalysisPayload>
          }
          findFirst: {
            args: Prisma.ExerciseAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAnalysisPayload>
          }
          findMany: {
            args: Prisma.ExerciseAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAnalysisPayload>[]
          }
          create: {
            args: Prisma.ExerciseAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAnalysisPayload>
          }
          createMany: {
            args: Prisma.ExerciseAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseAnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAnalysisPayload>[]
          }
          delete: {
            args: Prisma.ExerciseAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAnalysisPayload>
          }
          update: {
            args: Prisma.ExerciseAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.ExerciseAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExerciseAnalysisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAnalysisPayload>[]
          }
          upsert: {
            args: Prisma.ExerciseAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExerciseAnalysisPayload>
          }
          aggregate: {
            args: Prisma.ExerciseAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExerciseAnalysis>
          }
          groupBy: {
            args: Prisma.ExerciseAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseAnalysisCountAggregateOutputType> | number
          }
        }
      }
      SupportConversation: {
        payload: Prisma.$SupportConversationPayload<ExtArgs>
        fields: Prisma.SupportConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupportConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupportConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportConversationPayload>
          }
          findFirst: {
            args: Prisma.SupportConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupportConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportConversationPayload>
          }
          findMany: {
            args: Prisma.SupportConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportConversationPayload>[]
          }
          create: {
            args: Prisma.SupportConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportConversationPayload>
          }
          createMany: {
            args: Prisma.SupportConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupportConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportConversationPayload>[]
          }
          delete: {
            args: Prisma.SupportConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportConversationPayload>
          }
          update: {
            args: Prisma.SupportConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportConversationPayload>
          }
          deleteMany: {
            args: Prisma.SupportConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupportConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupportConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportConversationPayload>[]
          }
          upsert: {
            args: Prisma.SupportConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportConversationPayload>
          }
          aggregate: {
            args: Prisma.SupportConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupportConversation>
          }
          groupBy: {
            args: Prisma.SupportConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupportConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupportConversationCountArgs<ExtArgs>
            result: $Utils.Optional<SupportConversationCountAggregateOutputType> | number
          }
        }
      }
      SupportMessage: {
        payload: Prisma.$SupportMessagePayload<ExtArgs>
        fields: Prisma.SupportMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupportMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupportMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagePayload>
          }
          findFirst: {
            args: Prisma.SupportMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupportMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagePayload>
          }
          findMany: {
            args: Prisma.SupportMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagePayload>[]
          }
          create: {
            args: Prisma.SupportMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagePayload>
          }
          createMany: {
            args: Prisma.SupportMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupportMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagePayload>[]
          }
          delete: {
            args: Prisma.SupportMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagePayload>
          }
          update: {
            args: Prisma.SupportMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagePayload>
          }
          deleteMany: {
            args: Prisma.SupportMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupportMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupportMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagePayload>[]
          }
          upsert: {
            args: Prisma.SupportMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportMessagePayload>
          }
          aggregate: {
            args: Prisma.SupportMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupportMessage>
          }
          groupBy: {
            args: Prisma.SupportMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupportMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupportMessageCountArgs<ExtArgs>
            result: $Utils.Optional<SupportMessageCountAggregateOutputType> | number
          }
        }
      }
      KnowledgeDocument: {
        payload: Prisma.$KnowledgeDocumentPayload<ExtArgs>
        fields: Prisma.KnowledgeDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KnowledgeDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KnowledgeDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>
          }
          findFirst: {
            args: Prisma.KnowledgeDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KnowledgeDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>
          }
          findMany: {
            args: Prisma.KnowledgeDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>[]
          }
          create: {
            args: Prisma.KnowledgeDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>
          }
          createMany: {
            args: Prisma.KnowledgeDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KnowledgeDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>[]
          }
          delete: {
            args: Prisma.KnowledgeDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>
          }
          update: {
            args: Prisma.KnowledgeDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>
          }
          deleteMany: {
            args: Prisma.KnowledgeDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KnowledgeDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KnowledgeDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>[]
          }
          upsert: {
            args: Prisma.KnowledgeDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeDocumentPayload>
          }
          aggregate: {
            args: Prisma.KnowledgeDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKnowledgeDocument>
          }
          groupBy: {
            args: Prisma.KnowledgeDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.KnowledgeDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeDocumentCountAggregateOutputType> | number
          }
        }
      }
      CourseAIConfig: {
        payload: Prisma.$CourseAIConfigPayload<ExtArgs>
        fields: Prisma.CourseAIConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseAIConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseAIConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseAIConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseAIConfigPayload>
          }
          findFirst: {
            args: Prisma.CourseAIConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseAIConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseAIConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseAIConfigPayload>
          }
          findMany: {
            args: Prisma.CourseAIConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseAIConfigPayload>[]
          }
          create: {
            args: Prisma.CourseAIConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseAIConfigPayload>
          }
          createMany: {
            args: Prisma.CourseAIConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseAIConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseAIConfigPayload>[]
          }
          delete: {
            args: Prisma.CourseAIConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseAIConfigPayload>
          }
          update: {
            args: Prisma.CourseAIConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseAIConfigPayload>
          }
          deleteMany: {
            args: Prisma.CourseAIConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseAIConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseAIConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseAIConfigPayload>[]
          }
          upsert: {
            args: Prisma.CourseAIConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseAIConfigPayload>
          }
          aggregate: {
            args: Prisma.CourseAIConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseAIConfig>
          }
          groupBy: {
            args: Prisma.CourseAIConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseAIConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseAIConfigCountArgs<ExtArgs>
            result: $Utils.Optional<CourseAIConfigCountAggregateOutputType> | number
          }
        }
      }
      SystemSetting: {
        payload: Prisma.$SystemSettingPayload<ExtArgs>
        fields: Prisma.SystemSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          findFirst: {
            args: Prisma.SystemSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          findMany: {
            args: Prisma.SystemSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>[]
          }
          create: {
            args: Prisma.SystemSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          createMany: {
            args: Prisma.SystemSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>[]
          }
          delete: {
            args: Prisma.SystemSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          update: {
            args: Prisma.SystemSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          deleteMany: {
            args: Prisma.SystemSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>[]
          }
          upsert: {
            args: Prisma.SystemSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingPayload>
          }
          aggregate: {
            args: Prisma.SystemSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemSetting>
          }
          groupBy: {
            args: Prisma.SystemSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemSettingCountArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingCountAggregateOutputType> | number
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
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
    oTP?: OTPOmit
    course?: CourseOmit
    lesson?: LessonOmit
    enrollment?: EnrollmentOmit
    exerciseSubmission?: ExerciseSubmissionOmit
    exerciseAnalysis?: ExerciseAnalysisOmit
    supportConversation?: SupportConversationOmit
    supportMessage?: SupportMessageOmit
    knowledgeDocument?: KnowledgeDocumentOmit
    courseAIConfig?: CourseAIConfigOmit
    systemSetting?: SystemSettingOmit
    notification?: NotificationOmit
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
    otps: number
    enrollments: number
    exercises: number
    supportConvos: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    otps?: boolean | UserCountOutputTypeCountOtpsArgs
    enrollments?: boolean | UserCountOutputTypeCountEnrollmentsArgs
    exercises?: boolean | UserCountOutputTypeCountExercisesArgs
    supportConvos?: boolean | UserCountOutputTypeCountSupportConvosArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
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
  export type UserCountOutputTypeCountOtpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTPWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseSubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSupportConvosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportConversationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    lessons: number
    enrollments: number
    exercises: number
    supportConvos: number
    knowledgeDocs: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | CourseCountOutputTypeCountLessonsArgs
    enrollments?: boolean | CourseCountOutputTypeCountEnrollmentsArgs
    exercises?: boolean | CourseCountOutputTypeCountExercisesArgs
    supportConvos?: boolean | CourseCountOutputTypeCountSupportConvosArgs
    knowledgeDocs?: boolean | CourseCountOutputTypeCountKnowledgeDocsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseSubmissionWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountSupportConvosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportConversationWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountKnowledgeDocsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KnowledgeDocumentWhereInput
  }


  /**
   * Count Type SupportConversationCountOutputType
   */

  export type SupportConversationCountOutputType = {
    messages: number
  }

  export type SupportConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | SupportConversationCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * SupportConversationCountOutputType without action
   */
  export type SupportConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportConversationCountOutputType
     */
    select?: SupportConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupportConversationCountOutputType without action
   */
  export type SupportConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportMessageWhereInput
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
    firstName: string | null
    lastName: string | null
    phone: string | null
    registrationCode: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    registrationCode: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    phone: number
    registrationCode: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    registrationCode?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    registrationCode?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phone?: true
    registrationCode?: true
    role?: true
    createdAt?: true
    updatedAt?: true
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
    firstName: string
    lastName: string
    phone: string
    registrationCode: string
    role: string
    createdAt: Date
    updatedAt: Date
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
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    registrationCode?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    otps?: boolean | User$otpsArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    exercises?: boolean | User$exercisesArgs<ExtArgs>
    supportConvos?: boolean | User$supportConvosArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    registrationCode?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    registrationCode?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    registrationCode?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "phone" | "registrationCode" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    otps?: boolean | User$otpsArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    exercises?: boolean | User$exercisesArgs<ExtArgs>
    supportConvos?: boolean | User$supportConvosArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      otps: Prisma.$OTPPayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      exercises: Prisma.$ExerciseSubmissionPayload<ExtArgs>[]
      supportConvos: Prisma.$SupportConversationPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      phone: string
      registrationCode: string
      role: string
      createdAt: Date
      updatedAt: Date
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
    otps<T extends User$otpsArgs<ExtArgs> = {}>(args?: Subset<T, User$otpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollments<T extends User$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exercises<T extends User$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, User$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    supportConvos<T extends User$supportConvosArgs<ExtArgs> = {}>(args?: Subset<T, User$supportConvosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly registrationCode: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.otps
   */
  export type User$otpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    where?: OTPWhereInput
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    cursor?: OTPWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OTPScalarFieldEnum | OTPScalarFieldEnum[]
  }

  /**
   * User.enrollments
   */
  export type User$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * User.exercises
   */
  export type User$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseSubmission
     */
    select?: ExerciseSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseSubmission
     */
    omit?: ExerciseSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseSubmissionInclude<ExtArgs> | null
    where?: ExerciseSubmissionWhereInput
    orderBy?: ExerciseSubmissionOrderByWithRelationInput | ExerciseSubmissionOrderByWithRelationInput[]
    cursor?: ExerciseSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseSubmissionScalarFieldEnum | ExerciseSubmissionScalarFieldEnum[]
  }

  /**
   * User.supportConvos
   */
  export type User$supportConvosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportConversation
     */
    select?: SupportConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportConversation
     */
    omit?: SupportConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportConversationInclude<ExtArgs> | null
    where?: SupportConversationWhereInput
    orderBy?: SupportConversationOrderByWithRelationInput | SupportConversationOrderByWithRelationInput[]
    cursor?: SupportConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupportConversationScalarFieldEnum | SupportConversationScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
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
   * Model OTP
   */

  export type AggregateOTP = {
    _count: OTPCountAggregateOutputType | null
    _min: OTPMinAggregateOutputType | null
    _max: OTPMaxAggregateOutputType | null
  }

  export type OTPMinAggregateOutputType = {
    id: string | null
    phone: string | null
    code: string | null
    expiresAt: Date | null
    used: boolean | null
    createdAt: Date | null
    userId: string | null
  }

  export type OTPMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    code: string | null
    expiresAt: Date | null
    used: boolean | null
    createdAt: Date | null
    userId: string | null
  }

  export type OTPCountAggregateOutputType = {
    id: number
    phone: number
    code: number
    expiresAt: number
    used: number
    createdAt: number
    userId: number
    _all: number
  }


  export type OTPMinAggregateInputType = {
    id?: true
    phone?: true
    code?: true
    expiresAt?: true
    used?: true
    createdAt?: true
    userId?: true
  }

  export type OTPMaxAggregateInputType = {
    id?: true
    phone?: true
    code?: true
    expiresAt?: true
    used?: true
    createdAt?: true
    userId?: true
  }

  export type OTPCountAggregateInputType = {
    id?: true
    phone?: true
    code?: true
    expiresAt?: true
    used?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type OTPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTP to aggregate.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OTPS
    **/
    _count?: true | OTPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OTPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OTPMaxAggregateInputType
  }

  export type GetOTPAggregateType<T extends OTPAggregateArgs> = {
        [P in keyof T & keyof AggregateOTP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOTP[P]>
      : GetScalarType<T[P], AggregateOTP[P]>
  }




  export type OTPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OTPWhereInput
    orderBy?: OTPOrderByWithAggregationInput | OTPOrderByWithAggregationInput[]
    by: OTPScalarFieldEnum[] | OTPScalarFieldEnum
    having?: OTPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OTPCountAggregateInputType | true
    _min?: OTPMinAggregateInputType
    _max?: OTPMaxAggregateInputType
  }

  export type OTPGroupByOutputType = {
    id: string
    phone: string
    code: string
    expiresAt: Date
    used: boolean
    createdAt: Date
    userId: string | null
    _count: OTPCountAggregateOutputType | null
    _min: OTPMinAggregateOutputType | null
    _max: OTPMaxAggregateOutputType | null
  }

  type GetOTPGroupByPayload<T extends OTPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OTPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OTPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OTPGroupByOutputType[P]>
            : GetScalarType<T[P], OTPGroupByOutputType[P]>
        }
      >
    >


  export type OTPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    code?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | OTP$userArgs<ExtArgs>
  }, ExtArgs["result"]["oTP"]>

  export type OTPSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    code?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | OTP$userArgs<ExtArgs>
  }, ExtArgs["result"]["oTP"]>

  export type OTPSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    code?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | OTP$userArgs<ExtArgs>
  }, ExtArgs["result"]["oTP"]>

  export type OTPSelectScalar = {
    id?: boolean
    phone?: boolean
    code?: boolean
    expiresAt?: boolean
    used?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type OTPOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "code" | "expiresAt" | "used" | "createdAt" | "userId", ExtArgs["result"]["oTP"]>
  export type OTPInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | OTP$userArgs<ExtArgs>
  }
  export type OTPIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | OTP$userArgs<ExtArgs>
  }
  export type OTPIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | OTP$userArgs<ExtArgs>
  }

  export type $OTPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OTP"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone: string
      code: string
      expiresAt: Date
      used: boolean
      createdAt: Date
      userId: string | null
    }, ExtArgs["result"]["oTP"]>
    composites: {}
  }

  type OTPGetPayload<S extends boolean | null | undefined | OTPDefaultArgs> = $Result.GetResult<Prisma.$OTPPayload, S>

  type OTPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OTPFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OTPCountAggregateInputType | true
    }

  export interface OTPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OTP'], meta: { name: 'OTP' } }
    /**
     * Find zero or one OTP that matches the filter.
     * @param {OTPFindUniqueArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OTPFindUniqueArgs>(args: SelectSubset<T, OTPFindUniqueArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OTP that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OTPFindUniqueOrThrowArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OTPFindUniqueOrThrowArgs>(args: SelectSubset<T, OTPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OTP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPFindFirstArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OTPFindFirstArgs>(args?: SelectSubset<T, OTPFindFirstArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OTP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPFindFirstOrThrowArgs} args - Arguments to find a OTP
     * @example
     * // Get one OTP
     * const oTP = await prisma.oTP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OTPFindFirstOrThrowArgs>(args?: SelectSubset<T, OTPFindFirstOrThrowArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OTPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OTPS
     * const oTPS = await prisma.oTP.findMany()
     * 
     * // Get first 10 OTPS
     * const oTPS = await prisma.oTP.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oTPWithIdOnly = await prisma.oTP.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OTPFindManyArgs>(args?: SelectSubset<T, OTPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OTP.
     * @param {OTPCreateArgs} args - Arguments to create a OTP.
     * @example
     * // Create one OTP
     * const OTP = await prisma.oTP.create({
     *   data: {
     *     // ... data to create a OTP
     *   }
     * })
     * 
     */
    create<T extends OTPCreateArgs>(args: SelectSubset<T, OTPCreateArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OTPS.
     * @param {OTPCreateManyArgs} args - Arguments to create many OTPS.
     * @example
     * // Create many OTPS
     * const oTP = await prisma.oTP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OTPCreateManyArgs>(args?: SelectSubset<T, OTPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OTPS and returns the data saved in the database.
     * @param {OTPCreateManyAndReturnArgs} args - Arguments to create many OTPS.
     * @example
     * // Create many OTPS
     * const oTP = await prisma.oTP.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OTPS and only return the `id`
     * const oTPWithIdOnly = await prisma.oTP.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OTPCreateManyAndReturnArgs>(args?: SelectSubset<T, OTPCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OTP.
     * @param {OTPDeleteArgs} args - Arguments to delete one OTP.
     * @example
     * // Delete one OTP
     * const OTP = await prisma.oTP.delete({
     *   where: {
     *     // ... filter to delete one OTP
     *   }
     * })
     * 
     */
    delete<T extends OTPDeleteArgs>(args: SelectSubset<T, OTPDeleteArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OTP.
     * @param {OTPUpdateArgs} args - Arguments to update one OTP.
     * @example
     * // Update one OTP
     * const oTP = await prisma.oTP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OTPUpdateArgs>(args: SelectSubset<T, OTPUpdateArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OTPS.
     * @param {OTPDeleteManyArgs} args - Arguments to filter OTPS to delete.
     * @example
     * // Delete a few OTPS
     * const { count } = await prisma.oTP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OTPDeleteManyArgs>(args?: SelectSubset<T, OTPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OTPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OTPS
     * const oTP = await prisma.oTP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OTPUpdateManyArgs>(args: SelectSubset<T, OTPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OTPS and returns the data updated in the database.
     * @param {OTPUpdateManyAndReturnArgs} args - Arguments to update many OTPS.
     * @example
     * // Update many OTPS
     * const oTP = await prisma.oTP.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OTPS and only return the `id`
     * const oTPWithIdOnly = await prisma.oTP.updateManyAndReturn({
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
    updateManyAndReturn<T extends OTPUpdateManyAndReturnArgs>(args: SelectSubset<T, OTPUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OTP.
     * @param {OTPUpsertArgs} args - Arguments to update or create a OTP.
     * @example
     * // Update or create a OTP
     * const oTP = await prisma.oTP.upsert({
     *   create: {
     *     // ... data to create a OTP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OTP we want to update
     *   }
     * })
     */
    upsert<T extends OTPUpsertArgs>(args: SelectSubset<T, OTPUpsertArgs<ExtArgs>>): Prisma__OTPClient<$Result.GetResult<Prisma.$OTPPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OTPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPCountArgs} args - Arguments to filter OTPS to count.
     * @example
     * // Count the number of OTPS
     * const count = await prisma.oTP.count({
     *   where: {
     *     // ... the filter for the OTPS we want to count
     *   }
     * })
    **/
    count<T extends OTPCountArgs>(
      args?: Subset<T, OTPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OTPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OTP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OTPAggregateArgs>(args: Subset<T, OTPAggregateArgs>): Prisma.PrismaPromise<GetOTPAggregateType<T>>

    /**
     * Group by OTP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OTPGroupByArgs} args - Group by arguments.
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
      T extends OTPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OTPGroupByArgs['orderBy'] }
        : { orderBy?: OTPGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OTPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOTPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OTP model
   */
  readonly fields: OTPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OTP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OTPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends OTP$userArgs<ExtArgs> = {}>(args?: Subset<T, OTP$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OTP model
   */
  interface OTPFieldRefs {
    readonly id: FieldRef<"OTP", 'String'>
    readonly phone: FieldRef<"OTP", 'String'>
    readonly code: FieldRef<"OTP", 'String'>
    readonly expiresAt: FieldRef<"OTP", 'DateTime'>
    readonly used: FieldRef<"OTP", 'Boolean'>
    readonly createdAt: FieldRef<"OTP", 'DateTime'>
    readonly userId: FieldRef<"OTP", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OTP findUnique
   */
  export type OTPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP findUniqueOrThrow
   */
  export type OTPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP findFirst
   */
  export type OTPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTPS.
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTPS.
     */
    distinct?: OTPScalarFieldEnum | OTPScalarFieldEnum[]
  }

  /**
   * OTP findFirstOrThrow
   */
  export type OTPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTP to fetch.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OTPS.
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTPS.
     */
    distinct?: OTPScalarFieldEnum | OTPScalarFieldEnum[]
  }

  /**
   * OTP findMany
   */
  export type OTPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter, which OTPS to fetch.
     */
    where?: OTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OTPS to fetch.
     */
    orderBy?: OTPOrderByWithRelationInput | OTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OTPS.
     */
    cursor?: OTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OTPS.
     */
    distinct?: OTPScalarFieldEnum | OTPScalarFieldEnum[]
  }

  /**
   * OTP create
   */
  export type OTPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * The data needed to create a OTP.
     */
    data: XOR<OTPCreateInput, OTPUncheckedCreateInput>
  }

  /**
   * OTP createMany
   */
  export type OTPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OTPS.
     */
    data: OTPCreateManyInput | OTPCreateManyInput[]
  }

  /**
   * OTP createManyAndReturn
   */
  export type OTPCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * The data used to create many OTPS.
     */
    data: OTPCreateManyInput | OTPCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OTP update
   */
  export type OTPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * The data needed to update a OTP.
     */
    data: XOR<OTPUpdateInput, OTPUncheckedUpdateInput>
    /**
     * Choose, which OTP to update.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP updateMany
   */
  export type OTPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OTPS.
     */
    data: XOR<OTPUpdateManyMutationInput, OTPUncheckedUpdateManyInput>
    /**
     * Filter which OTPS to update
     */
    where?: OTPWhereInput
    /**
     * Limit how many OTPS to update.
     */
    limit?: number
  }

  /**
   * OTP updateManyAndReturn
   */
  export type OTPUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * The data used to update OTPS.
     */
    data: XOR<OTPUpdateManyMutationInput, OTPUncheckedUpdateManyInput>
    /**
     * Filter which OTPS to update
     */
    where?: OTPWhereInput
    /**
     * Limit how many OTPS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OTP upsert
   */
  export type OTPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * The filter to search for the OTP to update in case it exists.
     */
    where: OTPWhereUniqueInput
    /**
     * In case the OTP found by the `where` argument doesn't exist, create a new OTP with this data.
     */
    create: XOR<OTPCreateInput, OTPUncheckedCreateInput>
    /**
     * In case the OTP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OTPUpdateInput, OTPUncheckedUpdateInput>
  }

  /**
   * OTP delete
   */
  export type OTPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
    /**
     * Filter which OTP to delete.
     */
    where: OTPWhereUniqueInput
  }

  /**
   * OTP deleteMany
   */
  export type OTPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OTPS to delete
     */
    where?: OTPWhereInput
    /**
     * Limit how many OTPS to delete.
     */
    limit?: number
  }

  /**
   * OTP.user
   */
  export type OTP$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * OTP without action
   */
  export type OTPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OTP
     */
    select?: OTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OTP
     */
    omit?: OTPOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OTPInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    price: number | null
    sessionsCount: number | null
  }

  export type CourseSumAggregateOutputType = {
    price: number | null
    sessionsCount: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    longDescription: string | null
    instructor: string | null
    level: string | null
    price: number | null
    status: string | null
    sessionsCount: number | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    longDescription: string | null
    instructor: string | null
    level: string | null
    price: number | null
    status: string | null
    sessionsCount: number | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    title: number
    description: number
    longDescription: number
    instructor: number
    level: number
    price: number
    status: number
    sessionsCount: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    price?: true
    sessionsCount?: true
  }

  export type CourseSumAggregateInputType = {
    price?: true
    sessionsCount?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    longDescription?: true
    instructor?: true
    level?: true
    price?: true
    status?: true
    sessionsCount?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    longDescription?: true
    instructor?: true
    level?: true
    price?: true
    status?: true
    sessionsCount?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    longDescription?: true
    instructor?: true
    level?: true
    price?: true
    status?: true
    sessionsCount?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    title: string
    description: string
    longDescription: string
    instructor: string
    level: string
    price: number
    status: string
    sessionsCount: number
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    longDescription?: boolean
    instructor?: boolean
    level?: boolean
    price?: boolean
    status?: boolean
    sessionsCount?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lessons?: boolean | Course$lessonsArgs<ExtArgs>
    enrollments?: boolean | Course$enrollmentsArgs<ExtArgs>
    exercises?: boolean | Course$exercisesArgs<ExtArgs>
    supportConvos?: boolean | Course$supportConvosArgs<ExtArgs>
    knowledgeDocs?: boolean | Course$knowledgeDocsArgs<ExtArgs>
    aiConfig?: boolean | Course$aiConfigArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    longDescription?: boolean
    instructor?: boolean
    level?: boolean
    price?: boolean
    status?: boolean
    sessionsCount?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    longDescription?: boolean
    instructor?: boolean
    level?: boolean
    price?: boolean
    status?: boolean
    sessionsCount?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    longDescription?: boolean
    instructor?: boolean
    level?: boolean
    price?: boolean
    status?: boolean
    sessionsCount?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "longDescription" | "instructor" | "level" | "price" | "status" | "sessionsCount" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | Course$lessonsArgs<ExtArgs>
    enrollments?: boolean | Course$enrollmentsArgs<ExtArgs>
    exercises?: boolean | Course$exercisesArgs<ExtArgs>
    supportConvos?: boolean | Course$supportConvosArgs<ExtArgs>
    knowledgeDocs?: boolean | Course$knowledgeDocsArgs<ExtArgs>
    aiConfig?: boolean | Course$aiConfigArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      lessons: Prisma.$LessonPayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      exercises: Prisma.$ExerciseSubmissionPayload<ExtArgs>[]
      supportConvos: Prisma.$SupportConversationPayload<ExtArgs>[]
      knowledgeDocs: Prisma.$KnowledgeDocumentPayload<ExtArgs>[]
      aiConfig: Prisma.$CourseAIConfigPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      longDescription: string
      instructor: string
      level: string
      price: number
      status: string
      sessionsCount: number
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lessons<T extends Course$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, Course$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollments<T extends Course$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Course$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exercises<T extends Course$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, Course$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    supportConvos<T extends Course$supportConvosArgs<ExtArgs> = {}>(args?: Subset<T, Course$supportConvosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    knowledgeDocs<T extends Course$knowledgeDocsArgs<ExtArgs> = {}>(args?: Subset<T, Course$knowledgeDocsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiConfig<T extends Course$aiConfigArgs<ExtArgs> = {}>(args?: Subset<T, Course$aiConfigArgs<ExtArgs>>): Prisma__CourseAIConfigClient<$Result.GetResult<Prisma.$CourseAIConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly title: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly longDescription: FieldRef<"Course", 'String'>
    readonly instructor: FieldRef<"Course", 'String'>
    readonly level: FieldRef<"Course", 'String'>
    readonly price: FieldRef<"Course", 'Int'>
    readonly status: FieldRef<"Course", 'String'>
    readonly sessionsCount: FieldRef<"Course", 'Int'>
    readonly imageUrl: FieldRef<"Course", 'String'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.lessons
   */
  export type Course$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Course.enrollments
   */
  export type Course$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Course.exercises
   */
  export type Course$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseSubmission
     */
    select?: ExerciseSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseSubmission
     */
    omit?: ExerciseSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseSubmissionInclude<ExtArgs> | null
    where?: ExerciseSubmissionWhereInput
    orderBy?: ExerciseSubmissionOrderByWithRelationInput | ExerciseSubmissionOrderByWithRelationInput[]
    cursor?: ExerciseSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseSubmissionScalarFieldEnum | ExerciseSubmissionScalarFieldEnum[]
  }

  /**
   * Course.supportConvos
   */
  export type Course$supportConvosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportConversation
     */
    select?: SupportConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportConversation
     */
    omit?: SupportConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportConversationInclude<ExtArgs> | null
    where?: SupportConversationWhereInput
    orderBy?: SupportConversationOrderByWithRelationInput | SupportConversationOrderByWithRelationInput[]
    cursor?: SupportConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupportConversationScalarFieldEnum | SupportConversationScalarFieldEnum[]
  }

  /**
   * Course.knowledgeDocs
   */
  export type Course$knowledgeDocsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeDocumentInclude<ExtArgs> | null
    where?: KnowledgeDocumentWhereInput
    orderBy?: KnowledgeDocumentOrderByWithRelationInput | KnowledgeDocumentOrderByWithRelationInput[]
    cursor?: KnowledgeDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KnowledgeDocumentScalarFieldEnum | KnowledgeDocumentScalarFieldEnum[]
  }

  /**
   * Course.aiConfig
   */
  export type Course$aiConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseAIConfig
     */
    select?: CourseAIConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseAIConfig
     */
    omit?: CourseAIConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseAIConfigInclude<ExtArgs> | null
    where?: CourseAIConfigWhereInput
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Lesson
   */

  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  export type LessonAvgAggregateOutputType = {
    order: number | null
  }

  export type LessonSumAggregateOutputType = {
    order: number | null
  }

  export type LessonMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    title: string | null
    description: string | null
    order: number | null
    duration: string | null
  }

  export type LessonMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    title: string | null
    description: string | null
    order: number | null
    duration: string | null
  }

  export type LessonCountAggregateOutputType = {
    id: number
    courseId: number
    title: number
    description: number
    order: number
    duration: number
    _all: number
  }


  export type LessonAvgAggregateInputType = {
    order?: true
  }

  export type LessonSumAggregateInputType = {
    order?: true
  }

  export type LessonMinAggregateInputType = {
    id?: true
    courseId?: true
    title?: true
    description?: true
    order?: true
    duration?: true
  }

  export type LessonMaxAggregateInputType = {
    id?: true
    courseId?: true
    title?: true
    description?: true
    order?: true
    duration?: true
  }

  export type LessonCountAggregateInputType = {
    id?: true
    courseId?: true
    title?: true
    description?: true
    order?: true
    duration?: true
    _all?: true
  }

  export type LessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lesson to aggregate.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lessons
    **/
    _count?: true | LessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonMaxAggregateInputType
  }

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
        [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>
  }




  export type LessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithAggregationInput | LessonOrderByWithAggregationInput[]
    by: LessonScalarFieldEnum[] | LessonScalarFieldEnum
    having?: LessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonCountAggregateInputType | true
    _avg?: LessonAvgAggregateInputType
    _sum?: LessonSumAggregateInputType
    _min?: LessonMinAggregateInputType
    _max?: LessonMaxAggregateInputType
  }

  export type LessonGroupByOutputType = {
    id: string
    courseId: string
    title: string
    description: string
    order: number
    duration: string
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonGroupByOutputType[P]>
            : GetScalarType<T[P], LessonGroupByOutputType[P]>
        }
      >
    >


  export type LessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    duration?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    duration?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    duration?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectScalar = {
    id?: boolean
    courseId?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    duration?: boolean
  }

  export type LessonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "title" | "description" | "order" | "duration", ExtArgs["result"]["lesson"]>
  export type LessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type LessonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type LessonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $LessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lesson"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      title: string
      description: string
      order: number
      duration: string
    }, ExtArgs["result"]["lesson"]>
    composites: {}
  }

  type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = $Result.GetResult<Prisma.$LessonPayload, S>

  type LessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonCountAggregateInputType | true
    }

  export interface LessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lesson'], meta: { name: 'Lesson' } }
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {LessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonFindUniqueArgs>(args: SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonFindFirstArgs>(args?: SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonWithIdOnly = await prisma.lesson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonFindManyArgs>(args?: SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lesson.
     * @param {LessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     * 
     */
    create<T extends LessonCreateArgs>(args: SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lessons.
     * @param {LessonCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonCreateManyArgs>(args?: SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lessons and returns the data saved in the database.
     * @param {LessonCreateManyAndReturnArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lesson.
     * @param {LessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     * 
     */
    delete<T extends LessonDeleteArgs>(args: SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lesson.
     * @param {LessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonUpdateArgs>(args: SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lessons.
     * @param {LessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonDeleteManyArgs>(args?: SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonUpdateManyArgs>(args: SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons and returns the data updated in the database.
     * @param {LessonUpdateManyAndReturnArgs} args - Arguments to update many Lessons.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.updateManyAndReturn({
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
    updateManyAndReturn<T extends LessonUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lesson.
     * @param {LessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
     */
    upsert<T extends LessonUpsertArgs>(args: SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends LessonCountArgs>(
      args?: Subset<T, LessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonAggregateArgs>(args: Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonGroupByArgs} args - Group by arguments.
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
      T extends LessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonGroupByArgs['orderBy'] }
        : { orderBy?: LessonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lesson model
   */
  readonly fields: LessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Lesson model
   */
  interface LessonFieldRefs {
    readonly id: FieldRef<"Lesson", 'String'>
    readonly courseId: FieldRef<"Lesson", 'String'>
    readonly title: FieldRef<"Lesson", 'String'>
    readonly description: FieldRef<"Lesson", 'String'>
    readonly order: FieldRef<"Lesson", 'Int'>
    readonly duration: FieldRef<"Lesson", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lesson findUnique
   */
  export type LessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findUniqueOrThrow
   */
  export type LessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findFirst
   */
  export type LessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findFirstOrThrow
   */
  export type LessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findMany
   */
  export type LessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson create
   */
  export type LessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to create a Lesson.
     */
    data: XOR<LessonCreateInput, LessonUncheckedCreateInput>
  }

  /**
   * Lesson createMany
   */
  export type LessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
  }

  /**
   * Lesson createManyAndReturn
   */
  export type LessonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson update
   */
  export type LessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to update a Lesson.
     */
    data: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
    /**
     * Choose, which Lesson to update.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson updateMany
   */
  export type LessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
  }

  /**
   * Lesson updateManyAndReturn
   */
  export type LessonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson upsert
   */
  export type LessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The filter to search for the Lesson to update in case it exists.
     */
    where: LessonWhereUniqueInput
    /**
     * In case the Lesson found by the `where` argument doesn't exist, create a new Lesson with this data.
     */
    create: XOR<LessonCreateInput, LessonUncheckedCreateInput>
    /**
     * In case the Lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
  }

  /**
   * Lesson delete
   */
  export type LessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter which Lesson to delete.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson deleteMany
   */
  export type LessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lessons to delete
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to delete.
     */
    limit?: number
  }

  /**
   * Lesson without action
   */
  export type LessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
  }


  /**
   * Model Enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentAvgAggregateOutputType = {
    progress: number | null
  }

  export type EnrollmentSumAggregateOutputType = {
    progress: number | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    progress: number | null
    enrolledAt: Date | null
    paymentAuthority: string | null
    paymentRefId: string | null
    paymentStatus: string | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    progress: number | null
    enrolledAt: Date | null
    paymentAuthority: string | null
    paymentRefId: string | null
    paymentStatus: string | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    progress: number
    enrolledAt: number
    paymentAuthority: number
    paymentRefId: number
    paymentStatus: number
    _all: number
  }


  export type EnrollmentAvgAggregateInputType = {
    progress?: true
  }

  export type EnrollmentSumAggregateInputType = {
    progress?: true
  }

  export type EnrollmentMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    progress?: true
    enrolledAt?: true
    paymentAuthority?: true
    paymentRefId?: true
    paymentStatus?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    progress?: true
    enrolledAt?: true
    paymentAuthority?: true
    paymentRefId?: true
    paymentStatus?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    progress?: true
    enrolledAt?: true
    paymentAuthority?: true
    paymentRefId?: true
    paymentStatus?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollment to aggregate.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithAggregationInput | EnrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _avg?: EnrollmentAvgAggregateInputType
    _sum?: EnrollmentSumAggregateInputType
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    id: string
    userId: string
    courseId: string
    progress: number
    enrolledAt: Date
    paymentAuthority: string | null
    paymentRefId: string | null
    paymentStatus: string
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    progress?: boolean
    enrolledAt?: boolean
    paymentAuthority?: boolean
    paymentRefId?: boolean
    paymentStatus?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    progress?: boolean
    enrolledAt?: boolean
    paymentAuthority?: boolean
    paymentRefId?: boolean
    paymentStatus?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    progress?: boolean
    enrolledAt?: boolean
    paymentAuthority?: boolean
    paymentRefId?: boolean
    paymentStatus?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    progress?: boolean
    enrolledAt?: boolean
    paymentAuthority?: boolean
    paymentRefId?: boolean
    paymentStatus?: boolean
  }

  export type EnrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "progress" | "enrolledAt" | "paymentAuthority" | "paymentRefId" | "paymentStatus", ExtArgs["result"]["enrollment"]>
  export type EnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $EnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enrollment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      courseId: string
      progress: number
      enrolledAt: Date
      paymentAuthority: string | null
      paymentRefId: string | null
      paymentStatus: string
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentPayload, S>

  type EnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface EnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'], meta: { name: 'Enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollmentFindUniqueArgs>(args: SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollmentFindFirstArgs>(args?: SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrollmentFindManyArgs>(args?: SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends EnrollmentCreateArgs>(args: SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollmentCreateManyArgs>(args?: SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {EnrollmentCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends EnrollmentDeleteArgs>(args: SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollmentUpdateArgs>(args: SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollmentDeleteManyArgs>(args?: SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollmentUpdateManyArgs>(args: SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments and returns the data updated in the database.
     * @param {EnrollmentUpdateManyAndReturnArgs} args - Arguments to update many Enrollments.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnrollmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends EnrollmentUpsertArgs>(args: SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
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
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enrollment model
   */
  readonly fields: EnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Enrollment model
   */
  interface EnrollmentFieldRefs {
    readonly id: FieldRef<"Enrollment", 'String'>
    readonly userId: FieldRef<"Enrollment", 'String'>
    readonly courseId: FieldRef<"Enrollment", 'String'>
    readonly progress: FieldRef<"Enrollment", 'Int'>
    readonly enrolledAt: FieldRef<"Enrollment", 'DateTime'>
    readonly paymentAuthority: FieldRef<"Enrollment", 'String'>
    readonly paymentRefId: FieldRef<"Enrollment", 'String'>
    readonly paymentStatus: FieldRef<"Enrollment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Enrollment findUnique
   */
  export type EnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findFirst
   */
  export type EnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollment.
     */
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }

  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
  }

  /**
   * Enrollment createManyAndReturn
   */
  export type EnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollment.
     */
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
  }

  /**
   * Enrollment updateManyAndReturn
   */
  export type EnrollmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     */
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     */
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }

  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter which Enrollment to delete.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to delete.
     */
    limit?: number
  }

  /**
   * Enrollment without action
   */
  export type EnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
  }


  /**
   * Model ExerciseSubmission
   */

  export type AggregateExerciseSubmission = {
    _count: ExerciseSubmissionCountAggregateOutputType | null
    _avg: ExerciseSubmissionAvgAggregateOutputType | null
    _sum: ExerciseSubmissionSumAggregateOutputType | null
    _min: ExerciseSubmissionMinAggregateOutputType | null
    _max: ExerciseSubmissionMaxAggregateOutputType | null
  }

  export type ExerciseSubmissionAvgAggregateOutputType = {
    duration: number | null
    score: number | null
  }

  export type ExerciseSubmissionSumAggregateOutputType = {
    duration: number | null
    score: number | null
  }

  export type ExerciseSubmissionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    title: string | null
    audioUrl: string | null
    duration: number | null
    score: number | null
    status: string | null
    createdAt: Date | null
  }

  export type ExerciseSubmissionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    title: string | null
    audioUrl: string | null
    duration: number | null
    score: number | null
    status: string | null
    createdAt: Date | null
  }

  export type ExerciseSubmissionCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    title: number
    audioUrl: number
    duration: number
    score: number
    status: number
    createdAt: number
    _all: number
  }


  export type ExerciseSubmissionAvgAggregateInputType = {
    duration?: true
    score?: true
  }

  export type ExerciseSubmissionSumAggregateInputType = {
    duration?: true
    score?: true
  }

  export type ExerciseSubmissionMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    title?: true
    audioUrl?: true
    duration?: true
    score?: true
    status?: true
    createdAt?: true
  }

  export type ExerciseSubmissionMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    title?: true
    audioUrl?: true
    duration?: true
    score?: true
    status?: true
    createdAt?: true
  }

  export type ExerciseSubmissionCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    title?: true
    audioUrl?: true
    duration?: true
    score?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ExerciseSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseSubmission to aggregate.
     */
    where?: ExerciseSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseSubmissions to fetch.
     */
    orderBy?: ExerciseSubmissionOrderByWithRelationInput | ExerciseSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExerciseSubmissions
    **/
    _count?: true | ExerciseSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseSubmissionMaxAggregateInputType
  }

  export type GetExerciseSubmissionAggregateType<T extends ExerciseSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateExerciseSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExerciseSubmission[P]>
      : GetScalarType<T[P], AggregateExerciseSubmission[P]>
  }




  export type ExerciseSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseSubmissionWhereInput
    orderBy?: ExerciseSubmissionOrderByWithAggregationInput | ExerciseSubmissionOrderByWithAggregationInput[]
    by: ExerciseSubmissionScalarFieldEnum[] | ExerciseSubmissionScalarFieldEnum
    having?: ExerciseSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseSubmissionCountAggregateInputType | true
    _avg?: ExerciseSubmissionAvgAggregateInputType
    _sum?: ExerciseSubmissionSumAggregateInputType
    _min?: ExerciseSubmissionMinAggregateInputType
    _max?: ExerciseSubmissionMaxAggregateInputType
  }

  export type ExerciseSubmissionGroupByOutputType = {
    id: string
    userId: string
    courseId: string
    title: string
    audioUrl: string | null
    duration: number
    score: number | null
    status: string
    createdAt: Date
    _count: ExerciseSubmissionCountAggregateOutputType | null
    _avg: ExerciseSubmissionAvgAggregateOutputType | null
    _sum: ExerciseSubmissionSumAggregateOutputType | null
    _min: ExerciseSubmissionMinAggregateOutputType | null
    _max: ExerciseSubmissionMaxAggregateOutputType | null
  }

  type GetExerciseSubmissionGroupByPayload<T extends ExerciseSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    title?: boolean
    audioUrl?: boolean
    duration?: boolean
    score?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    analysis?: boolean | ExerciseSubmission$analysisArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseSubmission"]>

  export type ExerciseSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    title?: boolean
    audioUrl?: boolean
    duration?: boolean
    score?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseSubmission"]>

  export type ExerciseSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    title?: boolean
    audioUrl?: boolean
    duration?: boolean
    score?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseSubmission"]>

  export type ExerciseSubmissionSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    title?: boolean
    audioUrl?: boolean
    duration?: boolean
    score?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ExerciseSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "title" | "audioUrl" | "duration" | "score" | "status" | "createdAt", ExtArgs["result"]["exerciseSubmission"]>
  export type ExerciseSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    analysis?: boolean | ExerciseSubmission$analysisArgs<ExtArgs>
  }
  export type ExerciseSubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type ExerciseSubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $ExerciseSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExerciseSubmission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
      analysis: Prisma.$ExerciseAnalysisPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      courseId: string
      title: string
      audioUrl: string | null
      duration: number
      score: number | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["exerciseSubmission"]>
    composites: {}
  }

  type ExerciseSubmissionGetPayload<S extends boolean | null | undefined | ExerciseSubmissionDefaultArgs> = $Result.GetResult<Prisma.$ExerciseSubmissionPayload, S>

  type ExerciseSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseSubmissionCountAggregateInputType | true
    }

  export interface ExerciseSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExerciseSubmission'], meta: { name: 'ExerciseSubmission' } }
    /**
     * Find zero or one ExerciseSubmission that matches the filter.
     * @param {ExerciseSubmissionFindUniqueArgs} args - Arguments to find a ExerciseSubmission
     * @example
     * // Get one ExerciseSubmission
     * const exerciseSubmission = await prisma.exerciseSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseSubmissionFindUniqueArgs>(args: SelectSubset<T, ExerciseSubmissionFindUniqueArgs<ExtArgs>>): Prisma__ExerciseSubmissionClient<$Result.GetResult<Prisma.$ExerciseSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExerciseSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseSubmissionFindUniqueOrThrowArgs} args - Arguments to find a ExerciseSubmission
     * @example
     * // Get one ExerciseSubmission
     * const exerciseSubmission = await prisma.exerciseSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseSubmissionClient<$Result.GetResult<Prisma.$ExerciseSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseSubmissionFindFirstArgs} args - Arguments to find a ExerciseSubmission
     * @example
     * // Get one ExerciseSubmission
     * const exerciseSubmission = await prisma.exerciseSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseSubmissionFindFirstArgs>(args?: SelectSubset<T, ExerciseSubmissionFindFirstArgs<ExtArgs>>): Prisma__ExerciseSubmissionClient<$Result.GetResult<Prisma.$ExerciseSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseSubmissionFindFirstOrThrowArgs} args - Arguments to find a ExerciseSubmission
     * @example
     * // Get one ExerciseSubmission
     * const exerciseSubmission = await prisma.exerciseSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseSubmissionClient<$Result.GetResult<Prisma.$ExerciseSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExerciseSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExerciseSubmissions
     * const exerciseSubmissions = await prisma.exerciseSubmission.findMany()
     * 
     * // Get first 10 ExerciseSubmissions
     * const exerciseSubmissions = await prisma.exerciseSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseSubmissionWithIdOnly = await prisma.exerciseSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseSubmissionFindManyArgs>(args?: SelectSubset<T, ExerciseSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExerciseSubmission.
     * @param {ExerciseSubmissionCreateArgs} args - Arguments to create a ExerciseSubmission.
     * @example
     * // Create one ExerciseSubmission
     * const ExerciseSubmission = await prisma.exerciseSubmission.create({
     *   data: {
     *     // ... data to create a ExerciseSubmission
     *   }
     * })
     * 
     */
    create<T extends ExerciseSubmissionCreateArgs>(args: SelectSubset<T, ExerciseSubmissionCreateArgs<ExtArgs>>): Prisma__ExerciseSubmissionClient<$Result.GetResult<Prisma.$ExerciseSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExerciseSubmissions.
     * @param {ExerciseSubmissionCreateManyArgs} args - Arguments to create many ExerciseSubmissions.
     * @example
     * // Create many ExerciseSubmissions
     * const exerciseSubmission = await prisma.exerciseSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseSubmissionCreateManyArgs>(args?: SelectSubset<T, ExerciseSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExerciseSubmissions and returns the data saved in the database.
     * @param {ExerciseSubmissionCreateManyAndReturnArgs} args - Arguments to create many ExerciseSubmissions.
     * @example
     * // Create many ExerciseSubmissions
     * const exerciseSubmission = await prisma.exerciseSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExerciseSubmissions and only return the `id`
     * const exerciseSubmissionWithIdOnly = await prisma.exerciseSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExerciseSubmission.
     * @param {ExerciseSubmissionDeleteArgs} args - Arguments to delete one ExerciseSubmission.
     * @example
     * // Delete one ExerciseSubmission
     * const ExerciseSubmission = await prisma.exerciseSubmission.delete({
     *   where: {
     *     // ... filter to delete one ExerciseSubmission
     *   }
     * })
     * 
     */
    delete<T extends ExerciseSubmissionDeleteArgs>(args: SelectSubset<T, ExerciseSubmissionDeleteArgs<ExtArgs>>): Prisma__ExerciseSubmissionClient<$Result.GetResult<Prisma.$ExerciseSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExerciseSubmission.
     * @param {ExerciseSubmissionUpdateArgs} args - Arguments to update one ExerciseSubmission.
     * @example
     * // Update one ExerciseSubmission
     * const exerciseSubmission = await prisma.exerciseSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseSubmissionUpdateArgs>(args: SelectSubset<T, ExerciseSubmissionUpdateArgs<ExtArgs>>): Prisma__ExerciseSubmissionClient<$Result.GetResult<Prisma.$ExerciseSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExerciseSubmissions.
     * @param {ExerciseSubmissionDeleteManyArgs} args - Arguments to filter ExerciseSubmissions to delete.
     * @example
     * // Delete a few ExerciseSubmissions
     * const { count } = await prisma.exerciseSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseSubmissionDeleteManyArgs>(args?: SelectSubset<T, ExerciseSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExerciseSubmissions
     * const exerciseSubmission = await prisma.exerciseSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseSubmissionUpdateManyArgs>(args: SelectSubset<T, ExerciseSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseSubmissions and returns the data updated in the database.
     * @param {ExerciseSubmissionUpdateManyAndReturnArgs} args - Arguments to update many ExerciseSubmissions.
     * @example
     * // Update many ExerciseSubmissions
     * const exerciseSubmission = await prisma.exerciseSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExerciseSubmissions and only return the `id`
     * const exerciseSubmissionWithIdOnly = await prisma.exerciseSubmission.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExerciseSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExerciseSubmission.
     * @param {ExerciseSubmissionUpsertArgs} args - Arguments to update or create a ExerciseSubmission.
     * @example
     * // Update or create a ExerciseSubmission
     * const exerciseSubmission = await prisma.exerciseSubmission.upsert({
     *   create: {
     *     // ... data to create a ExerciseSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExerciseSubmission we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseSubmissionUpsertArgs>(args: SelectSubset<T, ExerciseSubmissionUpsertArgs<ExtArgs>>): Prisma__ExerciseSubmissionClient<$Result.GetResult<Prisma.$ExerciseSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExerciseSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseSubmissionCountArgs} args - Arguments to filter ExerciseSubmissions to count.
     * @example
     * // Count the number of ExerciseSubmissions
     * const count = await prisma.exerciseSubmission.count({
     *   where: {
     *     // ... the filter for the ExerciseSubmissions we want to count
     *   }
     * })
    **/
    count<T extends ExerciseSubmissionCountArgs>(
      args?: Subset<T, ExerciseSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExerciseSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseSubmissionAggregateArgs>(args: Subset<T, ExerciseSubmissionAggregateArgs>): Prisma.PrismaPromise<GetExerciseSubmissionAggregateType<T>>

    /**
     * Group by ExerciseSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseSubmissionGroupByArgs} args - Group by arguments.
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
      T extends ExerciseSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseSubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExerciseSubmission model
   */
  readonly fields: ExerciseSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExerciseSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    analysis<T extends ExerciseSubmission$analysisArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseSubmission$analysisArgs<ExtArgs>>): Prisma__ExerciseAnalysisClient<$Result.GetResult<Prisma.$ExerciseAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExerciseSubmission model
   */
  interface ExerciseSubmissionFieldRefs {
    readonly id: FieldRef<"ExerciseSubmission", 'String'>
    readonly userId: FieldRef<"ExerciseSubmission", 'String'>
    readonly courseId: FieldRef<"ExerciseSubmission", 'String'>
    readonly title: FieldRef<"ExerciseSubmission", 'String'>
    readonly audioUrl: FieldRef<"ExerciseSubmission", 'String'>
    readonly duration: FieldRef<"ExerciseSubmission", 'Int'>
    readonly score: FieldRef<"ExerciseSubmission", 'Int'>
    readonly status: FieldRef<"ExerciseSubmission", 'String'>
    readonly createdAt: FieldRef<"ExerciseSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExerciseSubmission findUnique
   */
  export type ExerciseSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseSubmission
     */
    select?: ExerciseSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseSubmission
     */
    omit?: ExerciseSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseSubmission to fetch.
     */
    where: ExerciseSubmissionWhereUniqueInput
  }

  /**
   * ExerciseSubmission findUniqueOrThrow
   */
  export type ExerciseSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseSubmission
     */
    select?: ExerciseSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseSubmission
     */
    omit?: ExerciseSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseSubmission to fetch.
     */
    where: ExerciseSubmissionWhereUniqueInput
  }

  /**
   * ExerciseSubmission findFirst
   */
  export type ExerciseSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseSubmission
     */
    select?: ExerciseSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseSubmission
     */
    omit?: ExerciseSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseSubmission to fetch.
     */
    where?: ExerciseSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseSubmissions to fetch.
     */
    orderBy?: ExerciseSubmissionOrderByWithRelationInput | ExerciseSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseSubmissions.
     */
    cursor?: ExerciseSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseSubmissions.
     */
    distinct?: ExerciseSubmissionScalarFieldEnum | ExerciseSubmissionScalarFieldEnum[]
  }

  /**
   * ExerciseSubmission findFirstOrThrow
   */
  export type ExerciseSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseSubmission
     */
    select?: ExerciseSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseSubmission
     */
    omit?: ExerciseSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseSubmission to fetch.
     */
    where?: ExerciseSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseSubmissions to fetch.
     */
    orderBy?: ExerciseSubmissionOrderByWithRelationInput | ExerciseSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseSubmissions.
     */
    cursor?: ExerciseSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseSubmissions.
     */
    distinct?: ExerciseSubmissionScalarFieldEnum | ExerciseSubmissionScalarFieldEnum[]
  }

  /**
   * ExerciseSubmission findMany
   */
  export type ExerciseSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseSubmission
     */
    select?: ExerciseSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseSubmission
     */
    omit?: ExerciseSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseSubmissions to fetch.
     */
    where?: ExerciseSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseSubmissions to fetch.
     */
    orderBy?: ExerciseSubmissionOrderByWithRelationInput | ExerciseSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExerciseSubmissions.
     */
    cursor?: ExerciseSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseSubmissions.
     */
    distinct?: ExerciseSubmissionScalarFieldEnum | ExerciseSubmissionScalarFieldEnum[]
  }

  /**
   * ExerciseSubmission create
   */
  export type ExerciseSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseSubmission
     */
    select?: ExerciseSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseSubmission
     */
    omit?: ExerciseSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a ExerciseSubmission.
     */
    data: XOR<ExerciseSubmissionCreateInput, ExerciseSubmissionUncheckedCreateInput>
  }

  /**
   * ExerciseSubmission createMany
   */
  export type ExerciseSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExerciseSubmissions.
     */
    data: ExerciseSubmissionCreateManyInput | ExerciseSubmissionCreateManyInput[]
  }

  /**
   * ExerciseSubmission createManyAndReturn
   */
  export type ExerciseSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseSubmission
     */
    select?: ExerciseSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseSubmission
     */
    omit?: ExerciseSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many ExerciseSubmissions.
     */
    data: ExerciseSubmissionCreateManyInput | ExerciseSubmissionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseSubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExerciseSubmission update
   */
  export type ExerciseSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseSubmission
     */
    select?: ExerciseSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseSubmission
     */
    omit?: ExerciseSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a ExerciseSubmission.
     */
    data: XOR<ExerciseSubmissionUpdateInput, ExerciseSubmissionUncheckedUpdateInput>
    /**
     * Choose, which ExerciseSubmission to update.
     */
    where: ExerciseSubmissionWhereUniqueInput
  }

  /**
   * ExerciseSubmission updateMany
   */
  export type ExerciseSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExerciseSubmissions.
     */
    data: XOR<ExerciseSubmissionUpdateManyMutationInput, ExerciseSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseSubmissions to update
     */
    where?: ExerciseSubmissionWhereInput
    /**
     * Limit how many ExerciseSubmissions to update.
     */
    limit?: number
  }

  /**
   * ExerciseSubmission updateManyAndReturn
   */
  export type ExerciseSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseSubmission
     */
    select?: ExerciseSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseSubmission
     */
    omit?: ExerciseSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update ExerciseSubmissions.
     */
    data: XOR<ExerciseSubmissionUpdateManyMutationInput, ExerciseSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseSubmissions to update
     */
    where?: ExerciseSubmissionWhereInput
    /**
     * Limit how many ExerciseSubmissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExerciseSubmission upsert
   */
  export type ExerciseSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseSubmission
     */
    select?: ExerciseSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseSubmission
     */
    omit?: ExerciseSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the ExerciseSubmission to update in case it exists.
     */
    where: ExerciseSubmissionWhereUniqueInput
    /**
     * In case the ExerciseSubmission found by the `where` argument doesn't exist, create a new ExerciseSubmission with this data.
     */
    create: XOR<ExerciseSubmissionCreateInput, ExerciseSubmissionUncheckedCreateInput>
    /**
     * In case the ExerciseSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseSubmissionUpdateInput, ExerciseSubmissionUncheckedUpdateInput>
  }

  /**
   * ExerciseSubmission delete
   */
  export type ExerciseSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseSubmission
     */
    select?: ExerciseSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseSubmission
     */
    omit?: ExerciseSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseSubmissionInclude<ExtArgs> | null
    /**
     * Filter which ExerciseSubmission to delete.
     */
    where: ExerciseSubmissionWhereUniqueInput
  }

  /**
   * ExerciseSubmission deleteMany
   */
  export type ExerciseSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseSubmissions to delete
     */
    where?: ExerciseSubmissionWhereInput
    /**
     * Limit how many ExerciseSubmissions to delete.
     */
    limit?: number
  }

  /**
   * ExerciseSubmission.analysis
   */
  export type ExerciseSubmission$analysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnalysis
     */
    select?: ExerciseAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnalysis
     */
    omit?: ExerciseAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnalysisInclude<ExtArgs> | null
    where?: ExerciseAnalysisWhereInput
  }

  /**
   * ExerciseSubmission without action
   */
  export type ExerciseSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseSubmission
     */
    select?: ExerciseSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseSubmission
     */
    omit?: ExerciseSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseSubmissionInclude<ExtArgs> | null
  }


  /**
   * Model ExerciseAnalysis
   */

  export type AggregateExerciseAnalysis = {
    _count: ExerciseAnalysisCountAggregateOutputType | null
    _avg: ExerciseAnalysisAvgAggregateOutputType | null
    _sum: ExerciseAnalysisSumAggregateOutputType | null
    _min: ExerciseAnalysisMinAggregateOutputType | null
    _max: ExerciseAnalysisMaxAggregateOutputType | null
  }

  export type ExerciseAnalysisAvgAggregateOutputType = {
    overallScore: number | null
  }

  export type ExerciseAnalysisSumAggregateOutputType = {
    overallScore: number | null
  }

  export type ExerciseAnalysisMinAggregateOutputType = {
    id: string | null
    exerciseId: string | null
    overallScore: number | null
    strengthsJson: string | null
    improvementsJson: string | null
    detailsJson: string | null
    aiRecommendation: string | null
    nextExercise: string | null
    createdAt: Date | null
  }

  export type ExerciseAnalysisMaxAggregateOutputType = {
    id: string | null
    exerciseId: string | null
    overallScore: number | null
    strengthsJson: string | null
    improvementsJson: string | null
    detailsJson: string | null
    aiRecommendation: string | null
    nextExercise: string | null
    createdAt: Date | null
  }

  export type ExerciseAnalysisCountAggregateOutputType = {
    id: number
    exerciseId: number
    overallScore: number
    strengthsJson: number
    improvementsJson: number
    detailsJson: number
    aiRecommendation: number
    nextExercise: number
    createdAt: number
    _all: number
  }


  export type ExerciseAnalysisAvgAggregateInputType = {
    overallScore?: true
  }

  export type ExerciseAnalysisSumAggregateInputType = {
    overallScore?: true
  }

  export type ExerciseAnalysisMinAggregateInputType = {
    id?: true
    exerciseId?: true
    overallScore?: true
    strengthsJson?: true
    improvementsJson?: true
    detailsJson?: true
    aiRecommendation?: true
    nextExercise?: true
    createdAt?: true
  }

  export type ExerciseAnalysisMaxAggregateInputType = {
    id?: true
    exerciseId?: true
    overallScore?: true
    strengthsJson?: true
    improvementsJson?: true
    detailsJson?: true
    aiRecommendation?: true
    nextExercise?: true
    createdAt?: true
  }

  export type ExerciseAnalysisCountAggregateInputType = {
    id?: true
    exerciseId?: true
    overallScore?: true
    strengthsJson?: true
    improvementsJson?: true
    detailsJson?: true
    aiRecommendation?: true
    nextExercise?: true
    createdAt?: true
    _all?: true
  }

  export type ExerciseAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseAnalysis to aggregate.
     */
    where?: ExerciseAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseAnalyses to fetch.
     */
    orderBy?: ExerciseAnalysisOrderByWithRelationInput | ExerciseAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExerciseAnalyses
    **/
    _count?: true | ExerciseAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseAnalysisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseAnalysisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseAnalysisMaxAggregateInputType
  }

  export type GetExerciseAnalysisAggregateType<T extends ExerciseAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateExerciseAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExerciseAnalysis[P]>
      : GetScalarType<T[P], AggregateExerciseAnalysis[P]>
  }




  export type ExerciseAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseAnalysisWhereInput
    orderBy?: ExerciseAnalysisOrderByWithAggregationInput | ExerciseAnalysisOrderByWithAggregationInput[]
    by: ExerciseAnalysisScalarFieldEnum[] | ExerciseAnalysisScalarFieldEnum
    having?: ExerciseAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseAnalysisCountAggregateInputType | true
    _avg?: ExerciseAnalysisAvgAggregateInputType
    _sum?: ExerciseAnalysisSumAggregateInputType
    _min?: ExerciseAnalysisMinAggregateInputType
    _max?: ExerciseAnalysisMaxAggregateInputType
  }

  export type ExerciseAnalysisGroupByOutputType = {
    id: string
    exerciseId: string
    overallScore: number
    strengthsJson: string
    improvementsJson: string
    detailsJson: string
    aiRecommendation: string
    nextExercise: string
    createdAt: Date
    _count: ExerciseAnalysisCountAggregateOutputType | null
    _avg: ExerciseAnalysisAvgAggregateOutputType | null
    _sum: ExerciseAnalysisSumAggregateOutputType | null
    _min: ExerciseAnalysisMinAggregateOutputType | null
    _max: ExerciseAnalysisMaxAggregateOutputType | null
  }

  type GetExerciseAnalysisGroupByPayload<T extends ExerciseAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseId?: boolean
    overallScore?: boolean
    strengthsJson?: boolean
    improvementsJson?: boolean
    detailsJson?: boolean
    aiRecommendation?: boolean
    nextExercise?: boolean
    createdAt?: boolean
    exercise?: boolean | ExerciseSubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseAnalysis"]>

  export type ExerciseAnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseId?: boolean
    overallScore?: boolean
    strengthsJson?: boolean
    improvementsJson?: boolean
    detailsJson?: boolean
    aiRecommendation?: boolean
    nextExercise?: boolean
    createdAt?: boolean
    exercise?: boolean | ExerciseSubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseAnalysis"]>

  export type ExerciseAnalysisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exerciseId?: boolean
    overallScore?: boolean
    strengthsJson?: boolean
    improvementsJson?: boolean
    detailsJson?: boolean
    aiRecommendation?: boolean
    nextExercise?: boolean
    createdAt?: boolean
    exercise?: boolean | ExerciseSubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exerciseAnalysis"]>

  export type ExerciseAnalysisSelectScalar = {
    id?: boolean
    exerciseId?: boolean
    overallScore?: boolean
    strengthsJson?: boolean
    improvementsJson?: boolean
    detailsJson?: boolean
    aiRecommendation?: boolean
    nextExercise?: boolean
    createdAt?: boolean
  }

  export type ExerciseAnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "exerciseId" | "overallScore" | "strengthsJson" | "improvementsJson" | "detailsJson" | "aiRecommendation" | "nextExercise" | "createdAt", ExtArgs["result"]["exerciseAnalysis"]>
  export type ExerciseAnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseSubmissionDefaultArgs<ExtArgs>
  }
  export type ExerciseAnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseSubmissionDefaultArgs<ExtArgs>
  }
  export type ExerciseAnalysisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercise?: boolean | ExerciseSubmissionDefaultArgs<ExtArgs>
  }

  export type $ExerciseAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExerciseAnalysis"
    objects: {
      exercise: Prisma.$ExerciseSubmissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      exerciseId: string
      overallScore: number
      strengthsJson: string
      improvementsJson: string
      detailsJson: string
      aiRecommendation: string
      nextExercise: string
      createdAt: Date
    }, ExtArgs["result"]["exerciseAnalysis"]>
    composites: {}
  }

  type ExerciseAnalysisGetPayload<S extends boolean | null | undefined | ExerciseAnalysisDefaultArgs> = $Result.GetResult<Prisma.$ExerciseAnalysisPayload, S>

  type ExerciseAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseAnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseAnalysisCountAggregateInputType | true
    }

  export interface ExerciseAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExerciseAnalysis'], meta: { name: 'ExerciseAnalysis' } }
    /**
     * Find zero or one ExerciseAnalysis that matches the filter.
     * @param {ExerciseAnalysisFindUniqueArgs} args - Arguments to find a ExerciseAnalysis
     * @example
     * // Get one ExerciseAnalysis
     * const exerciseAnalysis = await prisma.exerciseAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseAnalysisFindUniqueArgs>(args: SelectSubset<T, ExerciseAnalysisFindUniqueArgs<ExtArgs>>): Prisma__ExerciseAnalysisClient<$Result.GetResult<Prisma.$ExerciseAnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExerciseAnalysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseAnalysisFindUniqueOrThrowArgs} args - Arguments to find a ExerciseAnalysis
     * @example
     * // Get one ExerciseAnalysis
     * const exerciseAnalysis = await prisma.exerciseAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseAnalysisClient<$Result.GetResult<Prisma.$ExerciseAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAnalysisFindFirstArgs} args - Arguments to find a ExerciseAnalysis
     * @example
     * // Get one ExerciseAnalysis
     * const exerciseAnalysis = await prisma.exerciseAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseAnalysisFindFirstArgs>(args?: SelectSubset<T, ExerciseAnalysisFindFirstArgs<ExtArgs>>): Prisma__ExerciseAnalysisClient<$Result.GetResult<Prisma.$ExerciseAnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExerciseAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAnalysisFindFirstOrThrowArgs} args - Arguments to find a ExerciseAnalysis
     * @example
     * // Get one ExerciseAnalysis
     * const exerciseAnalysis = await prisma.exerciseAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseAnalysisClient<$Result.GetResult<Prisma.$ExerciseAnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExerciseAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExerciseAnalyses
     * const exerciseAnalyses = await prisma.exerciseAnalysis.findMany()
     * 
     * // Get first 10 ExerciseAnalyses
     * const exerciseAnalyses = await prisma.exerciseAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseAnalysisWithIdOnly = await prisma.exerciseAnalysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseAnalysisFindManyArgs>(args?: SelectSubset<T, ExerciseAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExerciseAnalysis.
     * @param {ExerciseAnalysisCreateArgs} args - Arguments to create a ExerciseAnalysis.
     * @example
     * // Create one ExerciseAnalysis
     * const ExerciseAnalysis = await prisma.exerciseAnalysis.create({
     *   data: {
     *     // ... data to create a ExerciseAnalysis
     *   }
     * })
     * 
     */
    create<T extends ExerciseAnalysisCreateArgs>(args: SelectSubset<T, ExerciseAnalysisCreateArgs<ExtArgs>>): Prisma__ExerciseAnalysisClient<$Result.GetResult<Prisma.$ExerciseAnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExerciseAnalyses.
     * @param {ExerciseAnalysisCreateManyArgs} args - Arguments to create many ExerciseAnalyses.
     * @example
     * // Create many ExerciseAnalyses
     * const exerciseAnalysis = await prisma.exerciseAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseAnalysisCreateManyArgs>(args?: SelectSubset<T, ExerciseAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExerciseAnalyses and returns the data saved in the database.
     * @param {ExerciseAnalysisCreateManyAndReturnArgs} args - Arguments to create many ExerciseAnalyses.
     * @example
     * // Create many ExerciseAnalyses
     * const exerciseAnalysis = await prisma.exerciseAnalysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExerciseAnalyses and only return the `id`
     * const exerciseAnalysisWithIdOnly = await prisma.exerciseAnalysis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseAnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseAnalysisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExerciseAnalysis.
     * @param {ExerciseAnalysisDeleteArgs} args - Arguments to delete one ExerciseAnalysis.
     * @example
     * // Delete one ExerciseAnalysis
     * const ExerciseAnalysis = await prisma.exerciseAnalysis.delete({
     *   where: {
     *     // ... filter to delete one ExerciseAnalysis
     *   }
     * })
     * 
     */
    delete<T extends ExerciseAnalysisDeleteArgs>(args: SelectSubset<T, ExerciseAnalysisDeleteArgs<ExtArgs>>): Prisma__ExerciseAnalysisClient<$Result.GetResult<Prisma.$ExerciseAnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExerciseAnalysis.
     * @param {ExerciseAnalysisUpdateArgs} args - Arguments to update one ExerciseAnalysis.
     * @example
     * // Update one ExerciseAnalysis
     * const exerciseAnalysis = await prisma.exerciseAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseAnalysisUpdateArgs>(args: SelectSubset<T, ExerciseAnalysisUpdateArgs<ExtArgs>>): Prisma__ExerciseAnalysisClient<$Result.GetResult<Prisma.$ExerciseAnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExerciseAnalyses.
     * @param {ExerciseAnalysisDeleteManyArgs} args - Arguments to filter ExerciseAnalyses to delete.
     * @example
     * // Delete a few ExerciseAnalyses
     * const { count } = await prisma.exerciseAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseAnalysisDeleteManyArgs>(args?: SelectSubset<T, ExerciseAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExerciseAnalyses
     * const exerciseAnalysis = await prisma.exerciseAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseAnalysisUpdateManyArgs>(args: SelectSubset<T, ExerciseAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseAnalyses and returns the data updated in the database.
     * @param {ExerciseAnalysisUpdateManyAndReturnArgs} args - Arguments to update many ExerciseAnalyses.
     * @example
     * // Update many ExerciseAnalyses
     * const exerciseAnalysis = await prisma.exerciseAnalysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExerciseAnalyses and only return the `id`
     * const exerciseAnalysisWithIdOnly = await prisma.exerciseAnalysis.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExerciseAnalysisUpdateManyAndReturnArgs>(args: SelectSubset<T, ExerciseAnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExerciseAnalysisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExerciseAnalysis.
     * @param {ExerciseAnalysisUpsertArgs} args - Arguments to update or create a ExerciseAnalysis.
     * @example
     * // Update or create a ExerciseAnalysis
     * const exerciseAnalysis = await prisma.exerciseAnalysis.upsert({
     *   create: {
     *     // ... data to create a ExerciseAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExerciseAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseAnalysisUpsertArgs>(args: SelectSubset<T, ExerciseAnalysisUpsertArgs<ExtArgs>>): Prisma__ExerciseAnalysisClient<$Result.GetResult<Prisma.$ExerciseAnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExerciseAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAnalysisCountArgs} args - Arguments to filter ExerciseAnalyses to count.
     * @example
     * // Count the number of ExerciseAnalyses
     * const count = await prisma.exerciseAnalysis.count({
     *   where: {
     *     // ... the filter for the ExerciseAnalyses we want to count
     *   }
     * })
    **/
    count<T extends ExerciseAnalysisCountArgs>(
      args?: Subset<T, ExerciseAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExerciseAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseAnalysisAggregateArgs>(args: Subset<T, ExerciseAnalysisAggregateArgs>): Prisma.PrismaPromise<GetExerciseAnalysisAggregateType<T>>

    /**
     * Group by ExerciseAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAnalysisGroupByArgs} args - Group by arguments.
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
      T extends ExerciseAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseAnalysisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExerciseAnalysis model
   */
  readonly fields: ExerciseAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExerciseAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercise<T extends ExerciseSubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseSubmissionDefaultArgs<ExtArgs>>): Prisma__ExerciseSubmissionClient<$Result.GetResult<Prisma.$ExerciseSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExerciseAnalysis model
   */
  interface ExerciseAnalysisFieldRefs {
    readonly id: FieldRef<"ExerciseAnalysis", 'String'>
    readonly exerciseId: FieldRef<"ExerciseAnalysis", 'String'>
    readonly overallScore: FieldRef<"ExerciseAnalysis", 'Int'>
    readonly strengthsJson: FieldRef<"ExerciseAnalysis", 'String'>
    readonly improvementsJson: FieldRef<"ExerciseAnalysis", 'String'>
    readonly detailsJson: FieldRef<"ExerciseAnalysis", 'String'>
    readonly aiRecommendation: FieldRef<"ExerciseAnalysis", 'String'>
    readonly nextExercise: FieldRef<"ExerciseAnalysis", 'String'>
    readonly createdAt: FieldRef<"ExerciseAnalysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExerciseAnalysis findUnique
   */
  export type ExerciseAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnalysis
     */
    select?: ExerciseAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnalysis
     */
    omit?: ExerciseAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseAnalysis to fetch.
     */
    where: ExerciseAnalysisWhereUniqueInput
  }

  /**
   * ExerciseAnalysis findUniqueOrThrow
   */
  export type ExerciseAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnalysis
     */
    select?: ExerciseAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnalysis
     */
    omit?: ExerciseAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseAnalysis to fetch.
     */
    where: ExerciseAnalysisWhereUniqueInput
  }

  /**
   * ExerciseAnalysis findFirst
   */
  export type ExerciseAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnalysis
     */
    select?: ExerciseAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnalysis
     */
    omit?: ExerciseAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseAnalysis to fetch.
     */
    where?: ExerciseAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseAnalyses to fetch.
     */
    orderBy?: ExerciseAnalysisOrderByWithRelationInput | ExerciseAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseAnalyses.
     */
    cursor?: ExerciseAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseAnalyses.
     */
    distinct?: ExerciseAnalysisScalarFieldEnum | ExerciseAnalysisScalarFieldEnum[]
  }

  /**
   * ExerciseAnalysis findFirstOrThrow
   */
  export type ExerciseAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnalysis
     */
    select?: ExerciseAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnalysis
     */
    omit?: ExerciseAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseAnalysis to fetch.
     */
    where?: ExerciseAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseAnalyses to fetch.
     */
    orderBy?: ExerciseAnalysisOrderByWithRelationInput | ExerciseAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseAnalyses.
     */
    cursor?: ExerciseAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseAnalyses.
     */
    distinct?: ExerciseAnalysisScalarFieldEnum | ExerciseAnalysisScalarFieldEnum[]
  }

  /**
   * ExerciseAnalysis findMany
   */
  export type ExerciseAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnalysis
     */
    select?: ExerciseAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnalysis
     */
    omit?: ExerciseAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ExerciseAnalyses to fetch.
     */
    where?: ExerciseAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseAnalyses to fetch.
     */
    orderBy?: ExerciseAnalysisOrderByWithRelationInput | ExerciseAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExerciseAnalyses.
     */
    cursor?: ExerciseAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseAnalyses.
     */
    distinct?: ExerciseAnalysisScalarFieldEnum | ExerciseAnalysisScalarFieldEnum[]
  }

  /**
   * ExerciseAnalysis create
   */
  export type ExerciseAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnalysis
     */
    select?: ExerciseAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnalysis
     */
    omit?: ExerciseAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a ExerciseAnalysis.
     */
    data: XOR<ExerciseAnalysisCreateInput, ExerciseAnalysisUncheckedCreateInput>
  }

  /**
   * ExerciseAnalysis createMany
   */
  export type ExerciseAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExerciseAnalyses.
     */
    data: ExerciseAnalysisCreateManyInput | ExerciseAnalysisCreateManyInput[]
  }

  /**
   * ExerciseAnalysis createManyAndReturn
   */
  export type ExerciseAnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnalysis
     */
    select?: ExerciseAnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnalysis
     */
    omit?: ExerciseAnalysisOmit<ExtArgs> | null
    /**
     * The data used to create many ExerciseAnalyses.
     */
    data: ExerciseAnalysisCreateManyInput | ExerciseAnalysisCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExerciseAnalysis update
   */
  export type ExerciseAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnalysis
     */
    select?: ExerciseAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnalysis
     */
    omit?: ExerciseAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a ExerciseAnalysis.
     */
    data: XOR<ExerciseAnalysisUpdateInput, ExerciseAnalysisUncheckedUpdateInput>
    /**
     * Choose, which ExerciseAnalysis to update.
     */
    where: ExerciseAnalysisWhereUniqueInput
  }

  /**
   * ExerciseAnalysis updateMany
   */
  export type ExerciseAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExerciseAnalyses.
     */
    data: XOR<ExerciseAnalysisUpdateManyMutationInput, ExerciseAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseAnalyses to update
     */
    where?: ExerciseAnalysisWhereInput
    /**
     * Limit how many ExerciseAnalyses to update.
     */
    limit?: number
  }

  /**
   * ExerciseAnalysis updateManyAndReturn
   */
  export type ExerciseAnalysisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnalysis
     */
    select?: ExerciseAnalysisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnalysis
     */
    omit?: ExerciseAnalysisOmit<ExtArgs> | null
    /**
     * The data used to update ExerciseAnalyses.
     */
    data: XOR<ExerciseAnalysisUpdateManyMutationInput, ExerciseAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseAnalyses to update
     */
    where?: ExerciseAnalysisWhereInput
    /**
     * Limit how many ExerciseAnalyses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnalysisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExerciseAnalysis upsert
   */
  export type ExerciseAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnalysis
     */
    select?: ExerciseAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnalysis
     */
    omit?: ExerciseAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the ExerciseAnalysis to update in case it exists.
     */
    where: ExerciseAnalysisWhereUniqueInput
    /**
     * In case the ExerciseAnalysis found by the `where` argument doesn't exist, create a new ExerciseAnalysis with this data.
     */
    create: XOR<ExerciseAnalysisCreateInput, ExerciseAnalysisUncheckedCreateInput>
    /**
     * In case the ExerciseAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseAnalysisUpdateInput, ExerciseAnalysisUncheckedUpdateInput>
  }

  /**
   * ExerciseAnalysis delete
   */
  export type ExerciseAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnalysis
     */
    select?: ExerciseAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnalysis
     */
    omit?: ExerciseAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnalysisInclude<ExtArgs> | null
    /**
     * Filter which ExerciseAnalysis to delete.
     */
    where: ExerciseAnalysisWhereUniqueInput
  }

  /**
   * ExerciseAnalysis deleteMany
   */
  export type ExerciseAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExerciseAnalyses to delete
     */
    where?: ExerciseAnalysisWhereInput
    /**
     * Limit how many ExerciseAnalyses to delete.
     */
    limit?: number
  }

  /**
   * ExerciseAnalysis without action
   */
  export type ExerciseAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseAnalysis
     */
    select?: ExerciseAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExerciseAnalysis
     */
    omit?: ExerciseAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseAnalysisInclude<ExtArgs> | null
  }


  /**
   * Model SupportConversation
   */

  export type AggregateSupportConversation = {
    _count: SupportConversationCountAggregateOutputType | null
    _avg: SupportConversationAvgAggregateOutputType | null
    _sum: SupportConversationSumAggregateOutputType | null
    _min: SupportConversationMinAggregateOutputType | null
    _max: SupportConversationMaxAggregateOutputType | null
  }

  export type SupportConversationAvgAggregateOutputType = {
    messagesUsed: number | null
  }

  export type SupportConversationSumAggregateOutputType = {
    messagesUsed: number | null
  }

  export type SupportConversationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    messagesUsed: number | null
    createdAt: Date | null
  }

  export type SupportConversationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    messagesUsed: number | null
    createdAt: Date | null
  }

  export type SupportConversationCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    messagesUsed: number
    createdAt: number
    _all: number
  }


  export type SupportConversationAvgAggregateInputType = {
    messagesUsed?: true
  }

  export type SupportConversationSumAggregateInputType = {
    messagesUsed?: true
  }

  export type SupportConversationMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    messagesUsed?: true
    createdAt?: true
  }

  export type SupportConversationMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    messagesUsed?: true
    createdAt?: true
  }

  export type SupportConversationCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    messagesUsed?: true
    createdAt?: true
    _all?: true
  }

  export type SupportConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportConversation to aggregate.
     */
    where?: SupportConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportConversations to fetch.
     */
    orderBy?: SupportConversationOrderByWithRelationInput | SupportConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupportConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupportConversations
    **/
    _count?: true | SupportConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupportConversationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupportConversationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupportConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupportConversationMaxAggregateInputType
  }

  export type GetSupportConversationAggregateType<T extends SupportConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateSupportConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupportConversation[P]>
      : GetScalarType<T[P], AggregateSupportConversation[P]>
  }




  export type SupportConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportConversationWhereInput
    orderBy?: SupportConversationOrderByWithAggregationInput | SupportConversationOrderByWithAggregationInput[]
    by: SupportConversationScalarFieldEnum[] | SupportConversationScalarFieldEnum
    having?: SupportConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupportConversationCountAggregateInputType | true
    _avg?: SupportConversationAvgAggregateInputType
    _sum?: SupportConversationSumAggregateInputType
    _min?: SupportConversationMinAggregateInputType
    _max?: SupportConversationMaxAggregateInputType
  }

  export type SupportConversationGroupByOutputType = {
    id: string
    userId: string
    courseId: string
    messagesUsed: number
    createdAt: Date
    _count: SupportConversationCountAggregateOutputType | null
    _avg: SupportConversationAvgAggregateOutputType | null
    _sum: SupportConversationSumAggregateOutputType | null
    _min: SupportConversationMinAggregateOutputType | null
    _max: SupportConversationMaxAggregateOutputType | null
  }

  type GetSupportConversationGroupByPayload<T extends SupportConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupportConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupportConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupportConversationGroupByOutputType[P]>
            : GetScalarType<T[P], SupportConversationGroupByOutputType[P]>
        }
      >
    >


  export type SupportConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    messagesUsed?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    messages?: boolean | SupportConversation$messagesArgs<ExtArgs>
    _count?: boolean | SupportConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supportConversation"]>

  export type SupportConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    messagesUsed?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supportConversation"]>

  export type SupportConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    messagesUsed?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supportConversation"]>

  export type SupportConversationSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    messagesUsed?: boolean
    createdAt?: boolean
  }

  export type SupportConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "messagesUsed" | "createdAt", ExtArgs["result"]["supportConversation"]>
  export type SupportConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    messages?: boolean | SupportConversation$messagesArgs<ExtArgs>
    _count?: boolean | SupportConversationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupportConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type SupportConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $SupportConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupportConversation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
      messages: Prisma.$SupportMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      courseId: string
      messagesUsed: number
      createdAt: Date
    }, ExtArgs["result"]["supportConversation"]>
    composites: {}
  }

  type SupportConversationGetPayload<S extends boolean | null | undefined | SupportConversationDefaultArgs> = $Result.GetResult<Prisma.$SupportConversationPayload, S>

  type SupportConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupportConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupportConversationCountAggregateInputType | true
    }

  export interface SupportConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupportConversation'], meta: { name: 'SupportConversation' } }
    /**
     * Find zero or one SupportConversation that matches the filter.
     * @param {SupportConversationFindUniqueArgs} args - Arguments to find a SupportConversation
     * @example
     * // Get one SupportConversation
     * const supportConversation = await prisma.supportConversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupportConversationFindUniqueArgs>(args: SelectSubset<T, SupportConversationFindUniqueArgs<ExtArgs>>): Prisma__SupportConversationClient<$Result.GetResult<Prisma.$SupportConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SupportConversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupportConversationFindUniqueOrThrowArgs} args - Arguments to find a SupportConversation
     * @example
     * // Get one SupportConversation
     * const supportConversation = await prisma.supportConversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupportConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, SupportConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupportConversationClient<$Result.GetResult<Prisma.$SupportConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupportConversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportConversationFindFirstArgs} args - Arguments to find a SupportConversation
     * @example
     * // Get one SupportConversation
     * const supportConversation = await prisma.supportConversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupportConversationFindFirstArgs>(args?: SelectSubset<T, SupportConversationFindFirstArgs<ExtArgs>>): Prisma__SupportConversationClient<$Result.GetResult<Prisma.$SupportConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupportConversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportConversationFindFirstOrThrowArgs} args - Arguments to find a SupportConversation
     * @example
     * // Get one SupportConversation
     * const supportConversation = await prisma.supportConversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupportConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, SupportConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupportConversationClient<$Result.GetResult<Prisma.$SupportConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SupportConversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupportConversations
     * const supportConversations = await prisma.supportConversation.findMany()
     * 
     * // Get first 10 SupportConversations
     * const supportConversations = await prisma.supportConversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supportConversationWithIdOnly = await prisma.supportConversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupportConversationFindManyArgs>(args?: SelectSubset<T, SupportConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SupportConversation.
     * @param {SupportConversationCreateArgs} args - Arguments to create a SupportConversation.
     * @example
     * // Create one SupportConversation
     * const SupportConversation = await prisma.supportConversation.create({
     *   data: {
     *     // ... data to create a SupportConversation
     *   }
     * })
     * 
     */
    create<T extends SupportConversationCreateArgs>(args: SelectSubset<T, SupportConversationCreateArgs<ExtArgs>>): Prisma__SupportConversationClient<$Result.GetResult<Prisma.$SupportConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SupportConversations.
     * @param {SupportConversationCreateManyArgs} args - Arguments to create many SupportConversations.
     * @example
     * // Create many SupportConversations
     * const supportConversation = await prisma.supportConversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupportConversationCreateManyArgs>(args?: SelectSubset<T, SupportConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupportConversations and returns the data saved in the database.
     * @param {SupportConversationCreateManyAndReturnArgs} args - Arguments to create many SupportConversations.
     * @example
     * // Create many SupportConversations
     * const supportConversation = await prisma.supportConversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupportConversations and only return the `id`
     * const supportConversationWithIdOnly = await prisma.supportConversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupportConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, SupportConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SupportConversation.
     * @param {SupportConversationDeleteArgs} args - Arguments to delete one SupportConversation.
     * @example
     * // Delete one SupportConversation
     * const SupportConversation = await prisma.supportConversation.delete({
     *   where: {
     *     // ... filter to delete one SupportConversation
     *   }
     * })
     * 
     */
    delete<T extends SupportConversationDeleteArgs>(args: SelectSubset<T, SupportConversationDeleteArgs<ExtArgs>>): Prisma__SupportConversationClient<$Result.GetResult<Prisma.$SupportConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SupportConversation.
     * @param {SupportConversationUpdateArgs} args - Arguments to update one SupportConversation.
     * @example
     * // Update one SupportConversation
     * const supportConversation = await prisma.supportConversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupportConversationUpdateArgs>(args: SelectSubset<T, SupportConversationUpdateArgs<ExtArgs>>): Prisma__SupportConversationClient<$Result.GetResult<Prisma.$SupportConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SupportConversations.
     * @param {SupportConversationDeleteManyArgs} args - Arguments to filter SupportConversations to delete.
     * @example
     * // Delete a few SupportConversations
     * const { count } = await prisma.supportConversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupportConversationDeleteManyArgs>(args?: SelectSubset<T, SupportConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportConversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupportConversations
     * const supportConversation = await prisma.supportConversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupportConversationUpdateManyArgs>(args: SelectSubset<T, SupportConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportConversations and returns the data updated in the database.
     * @param {SupportConversationUpdateManyAndReturnArgs} args - Arguments to update many SupportConversations.
     * @example
     * // Update many SupportConversations
     * const supportConversation = await prisma.supportConversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SupportConversations and only return the `id`
     * const supportConversationWithIdOnly = await prisma.supportConversation.updateManyAndReturn({
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
    updateManyAndReturn<T extends SupportConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, SupportConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SupportConversation.
     * @param {SupportConversationUpsertArgs} args - Arguments to update or create a SupportConversation.
     * @example
     * // Update or create a SupportConversation
     * const supportConversation = await prisma.supportConversation.upsert({
     *   create: {
     *     // ... data to create a SupportConversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupportConversation we want to update
     *   }
     * })
     */
    upsert<T extends SupportConversationUpsertArgs>(args: SelectSubset<T, SupportConversationUpsertArgs<ExtArgs>>): Prisma__SupportConversationClient<$Result.GetResult<Prisma.$SupportConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SupportConversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportConversationCountArgs} args - Arguments to filter SupportConversations to count.
     * @example
     * // Count the number of SupportConversations
     * const count = await prisma.supportConversation.count({
     *   where: {
     *     // ... the filter for the SupportConversations we want to count
     *   }
     * })
    **/
    count<T extends SupportConversationCountArgs>(
      args?: Subset<T, SupportConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupportConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupportConversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupportConversationAggregateArgs>(args: Subset<T, SupportConversationAggregateArgs>): Prisma.PrismaPromise<GetSupportConversationAggregateType<T>>

    /**
     * Group by SupportConversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportConversationGroupByArgs} args - Group by arguments.
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
      T extends SupportConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupportConversationGroupByArgs['orderBy'] }
        : { orderBy?: SupportConversationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupportConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupportConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupportConversation model
   */
  readonly fields: SupportConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupportConversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupportConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends SupportConversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, SupportConversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SupportConversation model
   */
  interface SupportConversationFieldRefs {
    readonly id: FieldRef<"SupportConversation", 'String'>
    readonly userId: FieldRef<"SupportConversation", 'String'>
    readonly courseId: FieldRef<"SupportConversation", 'String'>
    readonly messagesUsed: FieldRef<"SupportConversation", 'Int'>
    readonly createdAt: FieldRef<"SupportConversation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupportConversation findUnique
   */
  export type SupportConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportConversation
     */
    select?: SupportConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportConversation
     */
    omit?: SupportConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportConversationInclude<ExtArgs> | null
    /**
     * Filter, which SupportConversation to fetch.
     */
    where: SupportConversationWhereUniqueInput
  }

  /**
   * SupportConversation findUniqueOrThrow
   */
  export type SupportConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportConversation
     */
    select?: SupportConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportConversation
     */
    omit?: SupportConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportConversationInclude<ExtArgs> | null
    /**
     * Filter, which SupportConversation to fetch.
     */
    where: SupportConversationWhereUniqueInput
  }

  /**
   * SupportConversation findFirst
   */
  export type SupportConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportConversation
     */
    select?: SupportConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportConversation
     */
    omit?: SupportConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportConversationInclude<ExtArgs> | null
    /**
     * Filter, which SupportConversation to fetch.
     */
    where?: SupportConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportConversations to fetch.
     */
    orderBy?: SupportConversationOrderByWithRelationInput | SupportConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportConversations.
     */
    cursor?: SupportConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportConversations.
     */
    distinct?: SupportConversationScalarFieldEnum | SupportConversationScalarFieldEnum[]
  }

  /**
   * SupportConversation findFirstOrThrow
   */
  export type SupportConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportConversation
     */
    select?: SupportConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportConversation
     */
    omit?: SupportConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportConversationInclude<ExtArgs> | null
    /**
     * Filter, which SupportConversation to fetch.
     */
    where?: SupportConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportConversations to fetch.
     */
    orderBy?: SupportConversationOrderByWithRelationInput | SupportConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportConversations.
     */
    cursor?: SupportConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportConversations.
     */
    distinct?: SupportConversationScalarFieldEnum | SupportConversationScalarFieldEnum[]
  }

  /**
   * SupportConversation findMany
   */
  export type SupportConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportConversation
     */
    select?: SupportConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportConversation
     */
    omit?: SupportConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportConversationInclude<ExtArgs> | null
    /**
     * Filter, which SupportConversations to fetch.
     */
    where?: SupportConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportConversations to fetch.
     */
    orderBy?: SupportConversationOrderByWithRelationInput | SupportConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupportConversations.
     */
    cursor?: SupportConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportConversations.
     */
    distinct?: SupportConversationScalarFieldEnum | SupportConversationScalarFieldEnum[]
  }

  /**
   * SupportConversation create
   */
  export type SupportConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportConversation
     */
    select?: SupportConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportConversation
     */
    omit?: SupportConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a SupportConversation.
     */
    data: XOR<SupportConversationCreateInput, SupportConversationUncheckedCreateInput>
  }

  /**
   * SupportConversation createMany
   */
  export type SupportConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupportConversations.
     */
    data: SupportConversationCreateManyInput | SupportConversationCreateManyInput[]
  }

  /**
   * SupportConversation createManyAndReturn
   */
  export type SupportConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportConversation
     */
    select?: SupportConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupportConversation
     */
    omit?: SupportConversationOmit<ExtArgs> | null
    /**
     * The data used to create many SupportConversations.
     */
    data: SupportConversationCreateManyInput | SupportConversationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupportConversation update
   */
  export type SupportConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportConversation
     */
    select?: SupportConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportConversation
     */
    omit?: SupportConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a SupportConversation.
     */
    data: XOR<SupportConversationUpdateInput, SupportConversationUncheckedUpdateInput>
    /**
     * Choose, which SupportConversation to update.
     */
    where: SupportConversationWhereUniqueInput
  }

  /**
   * SupportConversation updateMany
   */
  export type SupportConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupportConversations.
     */
    data: XOR<SupportConversationUpdateManyMutationInput, SupportConversationUncheckedUpdateManyInput>
    /**
     * Filter which SupportConversations to update
     */
    where?: SupportConversationWhereInput
    /**
     * Limit how many SupportConversations to update.
     */
    limit?: number
  }

  /**
   * SupportConversation updateManyAndReturn
   */
  export type SupportConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportConversation
     */
    select?: SupportConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupportConversation
     */
    omit?: SupportConversationOmit<ExtArgs> | null
    /**
     * The data used to update SupportConversations.
     */
    data: XOR<SupportConversationUpdateManyMutationInput, SupportConversationUncheckedUpdateManyInput>
    /**
     * Filter which SupportConversations to update
     */
    where?: SupportConversationWhereInput
    /**
     * Limit how many SupportConversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportConversationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupportConversation upsert
   */
  export type SupportConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportConversation
     */
    select?: SupportConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportConversation
     */
    omit?: SupportConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the SupportConversation to update in case it exists.
     */
    where: SupportConversationWhereUniqueInput
    /**
     * In case the SupportConversation found by the `where` argument doesn't exist, create a new SupportConversation with this data.
     */
    create: XOR<SupportConversationCreateInput, SupportConversationUncheckedCreateInput>
    /**
     * In case the SupportConversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupportConversationUpdateInput, SupportConversationUncheckedUpdateInput>
  }

  /**
   * SupportConversation delete
   */
  export type SupportConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportConversation
     */
    select?: SupportConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportConversation
     */
    omit?: SupportConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportConversationInclude<ExtArgs> | null
    /**
     * Filter which SupportConversation to delete.
     */
    where: SupportConversationWhereUniqueInput
  }

  /**
   * SupportConversation deleteMany
   */
  export type SupportConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportConversations to delete
     */
    where?: SupportConversationWhereInput
    /**
     * Limit how many SupportConversations to delete.
     */
    limit?: number
  }

  /**
   * SupportConversation.messages
   */
  export type SupportConversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageInclude<ExtArgs> | null
    where?: SupportMessageWhereInput
    orderBy?: SupportMessageOrderByWithRelationInput | SupportMessageOrderByWithRelationInput[]
    cursor?: SupportMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupportMessageScalarFieldEnum | SupportMessageScalarFieldEnum[]
  }

  /**
   * SupportConversation without action
   */
  export type SupportConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportConversation
     */
    select?: SupportConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportConversation
     */
    omit?: SupportConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportConversationInclude<ExtArgs> | null
  }


  /**
   * Model SupportMessage
   */

  export type AggregateSupportMessage = {
    _count: SupportMessageCountAggregateOutputType | null
    _min: SupportMessageMinAggregateOutputType | null
    _max: SupportMessageMaxAggregateOutputType | null
  }

  export type SupportMessageMinAggregateOutputType = {
    id: string | null
    conversationId: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
  }

  export type SupportMessageMaxAggregateOutputType = {
    id: string | null
    conversationId: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
  }

  export type SupportMessageCountAggregateOutputType = {
    id: number
    conversationId: number
    role: number
    content: number
    createdAt: number
    _all: number
  }


  export type SupportMessageMinAggregateInputType = {
    id?: true
    conversationId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type SupportMessageMaxAggregateInputType = {
    id?: true
    conversationId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type SupportMessageCountAggregateInputType = {
    id?: true
    conversationId?: true
    role?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type SupportMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportMessage to aggregate.
     */
    where?: SupportMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportMessages to fetch.
     */
    orderBy?: SupportMessageOrderByWithRelationInput | SupportMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupportMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupportMessages
    **/
    _count?: true | SupportMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupportMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupportMessageMaxAggregateInputType
  }

  export type GetSupportMessageAggregateType<T extends SupportMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateSupportMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupportMessage[P]>
      : GetScalarType<T[P], AggregateSupportMessage[P]>
  }




  export type SupportMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportMessageWhereInput
    orderBy?: SupportMessageOrderByWithAggregationInput | SupportMessageOrderByWithAggregationInput[]
    by: SupportMessageScalarFieldEnum[] | SupportMessageScalarFieldEnum
    having?: SupportMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupportMessageCountAggregateInputType | true
    _min?: SupportMessageMinAggregateInputType
    _max?: SupportMessageMaxAggregateInputType
  }

  export type SupportMessageGroupByOutputType = {
    id: string
    conversationId: string
    role: string
    content: string
    createdAt: Date
    _count: SupportMessageCountAggregateOutputType | null
    _min: SupportMessageMinAggregateOutputType | null
    _max: SupportMessageMaxAggregateOutputType | null
  }

  type GetSupportMessageGroupByPayload<T extends SupportMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupportMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupportMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupportMessageGroupByOutputType[P]>
            : GetScalarType<T[P], SupportMessageGroupByOutputType[P]>
        }
      >
    >


  export type SupportMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    conversation?: boolean | SupportConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supportMessage"]>

  export type SupportMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    conversation?: boolean | SupportConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supportMessage"]>

  export type SupportMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    conversation?: boolean | SupportConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supportMessage"]>

  export type SupportMessageSelectScalar = {
    id?: boolean
    conversationId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type SupportMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversationId" | "role" | "content" | "createdAt", ExtArgs["result"]["supportMessage"]>
  export type SupportMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | SupportConversationDefaultArgs<ExtArgs>
  }
  export type SupportMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | SupportConversationDefaultArgs<ExtArgs>
  }
  export type SupportMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | SupportConversationDefaultArgs<ExtArgs>
  }

  export type $SupportMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupportMessage"
    objects: {
      conversation: Prisma.$SupportConversationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      conversationId: string
      role: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["supportMessage"]>
    composites: {}
  }

  type SupportMessageGetPayload<S extends boolean | null | undefined | SupportMessageDefaultArgs> = $Result.GetResult<Prisma.$SupportMessagePayload, S>

  type SupportMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupportMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupportMessageCountAggregateInputType | true
    }

  export interface SupportMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupportMessage'], meta: { name: 'SupportMessage' } }
    /**
     * Find zero or one SupportMessage that matches the filter.
     * @param {SupportMessageFindUniqueArgs} args - Arguments to find a SupportMessage
     * @example
     * // Get one SupportMessage
     * const supportMessage = await prisma.supportMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupportMessageFindUniqueArgs>(args: SelectSubset<T, SupportMessageFindUniqueArgs<ExtArgs>>): Prisma__SupportMessageClient<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SupportMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupportMessageFindUniqueOrThrowArgs} args - Arguments to find a SupportMessage
     * @example
     * // Get one SupportMessage
     * const supportMessage = await prisma.supportMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupportMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, SupportMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupportMessageClient<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupportMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportMessageFindFirstArgs} args - Arguments to find a SupportMessage
     * @example
     * // Get one SupportMessage
     * const supportMessage = await prisma.supportMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupportMessageFindFirstArgs>(args?: SelectSubset<T, SupportMessageFindFirstArgs<ExtArgs>>): Prisma__SupportMessageClient<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupportMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportMessageFindFirstOrThrowArgs} args - Arguments to find a SupportMessage
     * @example
     * // Get one SupportMessage
     * const supportMessage = await prisma.supportMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupportMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, SupportMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupportMessageClient<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SupportMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupportMessages
     * const supportMessages = await prisma.supportMessage.findMany()
     * 
     * // Get first 10 SupportMessages
     * const supportMessages = await prisma.supportMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supportMessageWithIdOnly = await prisma.supportMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupportMessageFindManyArgs>(args?: SelectSubset<T, SupportMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SupportMessage.
     * @param {SupportMessageCreateArgs} args - Arguments to create a SupportMessage.
     * @example
     * // Create one SupportMessage
     * const SupportMessage = await prisma.supportMessage.create({
     *   data: {
     *     // ... data to create a SupportMessage
     *   }
     * })
     * 
     */
    create<T extends SupportMessageCreateArgs>(args: SelectSubset<T, SupportMessageCreateArgs<ExtArgs>>): Prisma__SupportMessageClient<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SupportMessages.
     * @param {SupportMessageCreateManyArgs} args - Arguments to create many SupportMessages.
     * @example
     * // Create many SupportMessages
     * const supportMessage = await prisma.supportMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupportMessageCreateManyArgs>(args?: SelectSubset<T, SupportMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupportMessages and returns the data saved in the database.
     * @param {SupportMessageCreateManyAndReturnArgs} args - Arguments to create many SupportMessages.
     * @example
     * // Create many SupportMessages
     * const supportMessage = await prisma.supportMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupportMessages and only return the `id`
     * const supportMessageWithIdOnly = await prisma.supportMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupportMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, SupportMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SupportMessage.
     * @param {SupportMessageDeleteArgs} args - Arguments to delete one SupportMessage.
     * @example
     * // Delete one SupportMessage
     * const SupportMessage = await prisma.supportMessage.delete({
     *   where: {
     *     // ... filter to delete one SupportMessage
     *   }
     * })
     * 
     */
    delete<T extends SupportMessageDeleteArgs>(args: SelectSubset<T, SupportMessageDeleteArgs<ExtArgs>>): Prisma__SupportMessageClient<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SupportMessage.
     * @param {SupportMessageUpdateArgs} args - Arguments to update one SupportMessage.
     * @example
     * // Update one SupportMessage
     * const supportMessage = await prisma.supportMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupportMessageUpdateArgs>(args: SelectSubset<T, SupportMessageUpdateArgs<ExtArgs>>): Prisma__SupportMessageClient<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SupportMessages.
     * @param {SupportMessageDeleteManyArgs} args - Arguments to filter SupportMessages to delete.
     * @example
     * // Delete a few SupportMessages
     * const { count } = await prisma.supportMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupportMessageDeleteManyArgs>(args?: SelectSubset<T, SupportMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupportMessages
     * const supportMessage = await prisma.supportMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupportMessageUpdateManyArgs>(args: SelectSubset<T, SupportMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportMessages and returns the data updated in the database.
     * @param {SupportMessageUpdateManyAndReturnArgs} args - Arguments to update many SupportMessages.
     * @example
     * // Update many SupportMessages
     * const supportMessage = await prisma.supportMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SupportMessages and only return the `id`
     * const supportMessageWithIdOnly = await prisma.supportMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends SupportMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, SupportMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SupportMessage.
     * @param {SupportMessageUpsertArgs} args - Arguments to update or create a SupportMessage.
     * @example
     * // Update or create a SupportMessage
     * const supportMessage = await prisma.supportMessage.upsert({
     *   create: {
     *     // ... data to create a SupportMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupportMessage we want to update
     *   }
     * })
     */
    upsert<T extends SupportMessageUpsertArgs>(args: SelectSubset<T, SupportMessageUpsertArgs<ExtArgs>>): Prisma__SupportMessageClient<$Result.GetResult<Prisma.$SupportMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SupportMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportMessageCountArgs} args - Arguments to filter SupportMessages to count.
     * @example
     * // Count the number of SupportMessages
     * const count = await prisma.supportMessage.count({
     *   where: {
     *     // ... the filter for the SupportMessages we want to count
     *   }
     * })
    **/
    count<T extends SupportMessageCountArgs>(
      args?: Subset<T, SupportMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupportMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupportMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupportMessageAggregateArgs>(args: Subset<T, SupportMessageAggregateArgs>): Prisma.PrismaPromise<GetSupportMessageAggregateType<T>>

    /**
     * Group by SupportMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportMessageGroupByArgs} args - Group by arguments.
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
      T extends SupportMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupportMessageGroupByArgs['orderBy'] }
        : { orderBy?: SupportMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupportMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupportMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupportMessage model
   */
  readonly fields: SupportMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupportMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupportMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends SupportConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupportConversationDefaultArgs<ExtArgs>>): Prisma__SupportConversationClient<$Result.GetResult<Prisma.$SupportConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SupportMessage model
   */
  interface SupportMessageFieldRefs {
    readonly id: FieldRef<"SupportMessage", 'String'>
    readonly conversationId: FieldRef<"SupportMessage", 'String'>
    readonly role: FieldRef<"SupportMessage", 'String'>
    readonly content: FieldRef<"SupportMessage", 'String'>
    readonly createdAt: FieldRef<"SupportMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupportMessage findUnique
   */
  export type SupportMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageInclude<ExtArgs> | null
    /**
     * Filter, which SupportMessage to fetch.
     */
    where: SupportMessageWhereUniqueInput
  }

  /**
   * SupportMessage findUniqueOrThrow
   */
  export type SupportMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageInclude<ExtArgs> | null
    /**
     * Filter, which SupportMessage to fetch.
     */
    where: SupportMessageWhereUniqueInput
  }

  /**
   * SupportMessage findFirst
   */
  export type SupportMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageInclude<ExtArgs> | null
    /**
     * Filter, which SupportMessage to fetch.
     */
    where?: SupportMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportMessages to fetch.
     */
    orderBy?: SupportMessageOrderByWithRelationInput | SupportMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportMessages.
     */
    cursor?: SupportMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportMessages.
     */
    distinct?: SupportMessageScalarFieldEnum | SupportMessageScalarFieldEnum[]
  }

  /**
   * SupportMessage findFirstOrThrow
   */
  export type SupportMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageInclude<ExtArgs> | null
    /**
     * Filter, which SupportMessage to fetch.
     */
    where?: SupportMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportMessages to fetch.
     */
    orderBy?: SupportMessageOrderByWithRelationInput | SupportMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportMessages.
     */
    cursor?: SupportMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportMessages.
     */
    distinct?: SupportMessageScalarFieldEnum | SupportMessageScalarFieldEnum[]
  }

  /**
   * SupportMessage findMany
   */
  export type SupportMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageInclude<ExtArgs> | null
    /**
     * Filter, which SupportMessages to fetch.
     */
    where?: SupportMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportMessages to fetch.
     */
    orderBy?: SupportMessageOrderByWithRelationInput | SupportMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupportMessages.
     */
    cursor?: SupportMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportMessages.
     */
    distinct?: SupportMessageScalarFieldEnum | SupportMessageScalarFieldEnum[]
  }

  /**
   * SupportMessage create
   */
  export type SupportMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a SupportMessage.
     */
    data: XOR<SupportMessageCreateInput, SupportMessageUncheckedCreateInput>
  }

  /**
   * SupportMessage createMany
   */
  export type SupportMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupportMessages.
     */
    data: SupportMessageCreateManyInput | SupportMessageCreateManyInput[]
  }

  /**
   * SupportMessage createManyAndReturn
   */
  export type SupportMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * The data used to create many SupportMessages.
     */
    data: SupportMessageCreateManyInput | SupportMessageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupportMessage update
   */
  export type SupportMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a SupportMessage.
     */
    data: XOR<SupportMessageUpdateInput, SupportMessageUncheckedUpdateInput>
    /**
     * Choose, which SupportMessage to update.
     */
    where: SupportMessageWhereUniqueInput
  }

  /**
   * SupportMessage updateMany
   */
  export type SupportMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupportMessages.
     */
    data: XOR<SupportMessageUpdateManyMutationInput, SupportMessageUncheckedUpdateManyInput>
    /**
     * Filter which SupportMessages to update
     */
    where?: SupportMessageWhereInput
    /**
     * Limit how many SupportMessages to update.
     */
    limit?: number
  }

  /**
   * SupportMessage updateManyAndReturn
   */
  export type SupportMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * The data used to update SupportMessages.
     */
    data: XOR<SupportMessageUpdateManyMutationInput, SupportMessageUncheckedUpdateManyInput>
    /**
     * Filter which SupportMessages to update
     */
    where?: SupportMessageWhereInput
    /**
     * Limit how many SupportMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupportMessage upsert
   */
  export type SupportMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the SupportMessage to update in case it exists.
     */
    where: SupportMessageWhereUniqueInput
    /**
     * In case the SupportMessage found by the `where` argument doesn't exist, create a new SupportMessage with this data.
     */
    create: XOR<SupportMessageCreateInput, SupportMessageUncheckedCreateInput>
    /**
     * In case the SupportMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupportMessageUpdateInput, SupportMessageUncheckedUpdateInput>
  }

  /**
   * SupportMessage delete
   */
  export type SupportMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageInclude<ExtArgs> | null
    /**
     * Filter which SupportMessage to delete.
     */
    where: SupportMessageWhereUniqueInput
  }

  /**
   * SupportMessage deleteMany
   */
  export type SupportMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportMessages to delete
     */
    where?: SupportMessageWhereInput
    /**
     * Limit how many SupportMessages to delete.
     */
    limit?: number
  }

  /**
   * SupportMessage without action
   */
  export type SupportMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportMessage
     */
    select?: SupportMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupportMessage
     */
    omit?: SupportMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportMessageInclude<ExtArgs> | null
  }


  /**
   * Model KnowledgeDocument
   */

  export type AggregateKnowledgeDocument = {
    _count: KnowledgeDocumentCountAggregateOutputType | null
    _min: KnowledgeDocumentMinAggregateOutputType | null
    _max: KnowledgeDocumentMaxAggregateOutputType | null
  }

  export type KnowledgeDocumentMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    type: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
  }

  export type KnowledgeDocumentMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    type: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
  }

  export type KnowledgeDocumentCountAggregateOutputType = {
    id: number
    courseId: number
    type: number
    title: number
    content: number
    createdAt: number
    _all: number
  }


  export type KnowledgeDocumentMinAggregateInputType = {
    id?: true
    courseId?: true
    type?: true
    title?: true
    content?: true
    createdAt?: true
  }

  export type KnowledgeDocumentMaxAggregateInputType = {
    id?: true
    courseId?: true
    type?: true
    title?: true
    content?: true
    createdAt?: true
  }

  export type KnowledgeDocumentCountAggregateInputType = {
    id?: true
    courseId?: true
    type?: true
    title?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type KnowledgeDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KnowledgeDocument to aggregate.
     */
    where?: KnowledgeDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeDocuments to fetch.
     */
    orderBy?: KnowledgeDocumentOrderByWithRelationInput | KnowledgeDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KnowledgeDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KnowledgeDocuments
    **/
    _count?: true | KnowledgeDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KnowledgeDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KnowledgeDocumentMaxAggregateInputType
  }

  export type GetKnowledgeDocumentAggregateType<T extends KnowledgeDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateKnowledgeDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKnowledgeDocument[P]>
      : GetScalarType<T[P], AggregateKnowledgeDocument[P]>
  }




  export type KnowledgeDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KnowledgeDocumentWhereInput
    orderBy?: KnowledgeDocumentOrderByWithAggregationInput | KnowledgeDocumentOrderByWithAggregationInput[]
    by: KnowledgeDocumentScalarFieldEnum[] | KnowledgeDocumentScalarFieldEnum
    having?: KnowledgeDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KnowledgeDocumentCountAggregateInputType | true
    _min?: KnowledgeDocumentMinAggregateInputType
    _max?: KnowledgeDocumentMaxAggregateInputType
  }

  export type KnowledgeDocumentGroupByOutputType = {
    id: string
    courseId: string
    type: string
    title: string
    content: string
    createdAt: Date
    _count: KnowledgeDocumentCountAggregateOutputType | null
    _min: KnowledgeDocumentMinAggregateOutputType | null
    _max: KnowledgeDocumentMaxAggregateOutputType | null
  }

  type GetKnowledgeDocumentGroupByPayload<T extends KnowledgeDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KnowledgeDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KnowledgeDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KnowledgeDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], KnowledgeDocumentGroupByOutputType[P]>
        }
      >
    >


  export type KnowledgeDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    type?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["knowledgeDocument"]>

  export type KnowledgeDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    type?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["knowledgeDocument"]>

  export type KnowledgeDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    type?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["knowledgeDocument"]>

  export type KnowledgeDocumentSelectScalar = {
    id?: boolean
    courseId?: boolean
    type?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type KnowledgeDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "type" | "title" | "content" | "createdAt", ExtArgs["result"]["knowledgeDocument"]>
  export type KnowledgeDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type KnowledgeDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type KnowledgeDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $KnowledgeDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KnowledgeDocument"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      type: string
      title: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["knowledgeDocument"]>
    composites: {}
  }

  type KnowledgeDocumentGetPayload<S extends boolean | null | undefined | KnowledgeDocumentDefaultArgs> = $Result.GetResult<Prisma.$KnowledgeDocumentPayload, S>

  type KnowledgeDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KnowledgeDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KnowledgeDocumentCountAggregateInputType | true
    }

  export interface KnowledgeDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KnowledgeDocument'], meta: { name: 'KnowledgeDocument' } }
    /**
     * Find zero or one KnowledgeDocument that matches the filter.
     * @param {KnowledgeDocumentFindUniqueArgs} args - Arguments to find a KnowledgeDocument
     * @example
     * // Get one KnowledgeDocument
     * const knowledgeDocument = await prisma.knowledgeDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KnowledgeDocumentFindUniqueArgs>(args: SelectSubset<T, KnowledgeDocumentFindUniqueArgs<ExtArgs>>): Prisma__KnowledgeDocumentClient<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KnowledgeDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KnowledgeDocumentFindUniqueOrThrowArgs} args - Arguments to find a KnowledgeDocument
     * @example
     * // Get one KnowledgeDocument
     * const knowledgeDocument = await prisma.knowledgeDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KnowledgeDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, KnowledgeDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KnowledgeDocumentClient<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KnowledgeDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeDocumentFindFirstArgs} args - Arguments to find a KnowledgeDocument
     * @example
     * // Get one KnowledgeDocument
     * const knowledgeDocument = await prisma.knowledgeDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KnowledgeDocumentFindFirstArgs>(args?: SelectSubset<T, KnowledgeDocumentFindFirstArgs<ExtArgs>>): Prisma__KnowledgeDocumentClient<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KnowledgeDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeDocumentFindFirstOrThrowArgs} args - Arguments to find a KnowledgeDocument
     * @example
     * // Get one KnowledgeDocument
     * const knowledgeDocument = await prisma.knowledgeDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KnowledgeDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, KnowledgeDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__KnowledgeDocumentClient<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KnowledgeDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KnowledgeDocuments
     * const knowledgeDocuments = await prisma.knowledgeDocument.findMany()
     * 
     * // Get first 10 KnowledgeDocuments
     * const knowledgeDocuments = await prisma.knowledgeDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const knowledgeDocumentWithIdOnly = await prisma.knowledgeDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KnowledgeDocumentFindManyArgs>(args?: SelectSubset<T, KnowledgeDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KnowledgeDocument.
     * @param {KnowledgeDocumentCreateArgs} args - Arguments to create a KnowledgeDocument.
     * @example
     * // Create one KnowledgeDocument
     * const KnowledgeDocument = await prisma.knowledgeDocument.create({
     *   data: {
     *     // ... data to create a KnowledgeDocument
     *   }
     * })
     * 
     */
    create<T extends KnowledgeDocumentCreateArgs>(args: SelectSubset<T, KnowledgeDocumentCreateArgs<ExtArgs>>): Prisma__KnowledgeDocumentClient<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KnowledgeDocuments.
     * @param {KnowledgeDocumentCreateManyArgs} args - Arguments to create many KnowledgeDocuments.
     * @example
     * // Create many KnowledgeDocuments
     * const knowledgeDocument = await prisma.knowledgeDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KnowledgeDocumentCreateManyArgs>(args?: SelectSubset<T, KnowledgeDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KnowledgeDocuments and returns the data saved in the database.
     * @param {KnowledgeDocumentCreateManyAndReturnArgs} args - Arguments to create many KnowledgeDocuments.
     * @example
     * // Create many KnowledgeDocuments
     * const knowledgeDocument = await prisma.knowledgeDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KnowledgeDocuments and only return the `id`
     * const knowledgeDocumentWithIdOnly = await prisma.knowledgeDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KnowledgeDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, KnowledgeDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KnowledgeDocument.
     * @param {KnowledgeDocumentDeleteArgs} args - Arguments to delete one KnowledgeDocument.
     * @example
     * // Delete one KnowledgeDocument
     * const KnowledgeDocument = await prisma.knowledgeDocument.delete({
     *   where: {
     *     // ... filter to delete one KnowledgeDocument
     *   }
     * })
     * 
     */
    delete<T extends KnowledgeDocumentDeleteArgs>(args: SelectSubset<T, KnowledgeDocumentDeleteArgs<ExtArgs>>): Prisma__KnowledgeDocumentClient<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KnowledgeDocument.
     * @param {KnowledgeDocumentUpdateArgs} args - Arguments to update one KnowledgeDocument.
     * @example
     * // Update one KnowledgeDocument
     * const knowledgeDocument = await prisma.knowledgeDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KnowledgeDocumentUpdateArgs>(args: SelectSubset<T, KnowledgeDocumentUpdateArgs<ExtArgs>>): Prisma__KnowledgeDocumentClient<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KnowledgeDocuments.
     * @param {KnowledgeDocumentDeleteManyArgs} args - Arguments to filter KnowledgeDocuments to delete.
     * @example
     * // Delete a few KnowledgeDocuments
     * const { count } = await prisma.knowledgeDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KnowledgeDocumentDeleteManyArgs>(args?: SelectSubset<T, KnowledgeDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KnowledgeDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KnowledgeDocuments
     * const knowledgeDocument = await prisma.knowledgeDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KnowledgeDocumentUpdateManyArgs>(args: SelectSubset<T, KnowledgeDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KnowledgeDocuments and returns the data updated in the database.
     * @param {KnowledgeDocumentUpdateManyAndReturnArgs} args - Arguments to update many KnowledgeDocuments.
     * @example
     * // Update many KnowledgeDocuments
     * const knowledgeDocument = await prisma.knowledgeDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KnowledgeDocuments and only return the `id`
     * const knowledgeDocumentWithIdOnly = await prisma.knowledgeDocument.updateManyAndReturn({
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
    updateManyAndReturn<T extends KnowledgeDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, KnowledgeDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KnowledgeDocument.
     * @param {KnowledgeDocumentUpsertArgs} args - Arguments to update or create a KnowledgeDocument.
     * @example
     * // Update or create a KnowledgeDocument
     * const knowledgeDocument = await prisma.knowledgeDocument.upsert({
     *   create: {
     *     // ... data to create a KnowledgeDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KnowledgeDocument we want to update
     *   }
     * })
     */
    upsert<T extends KnowledgeDocumentUpsertArgs>(args: SelectSubset<T, KnowledgeDocumentUpsertArgs<ExtArgs>>): Prisma__KnowledgeDocumentClient<$Result.GetResult<Prisma.$KnowledgeDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KnowledgeDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeDocumentCountArgs} args - Arguments to filter KnowledgeDocuments to count.
     * @example
     * // Count the number of KnowledgeDocuments
     * const count = await prisma.knowledgeDocument.count({
     *   where: {
     *     // ... the filter for the KnowledgeDocuments we want to count
     *   }
     * })
    **/
    count<T extends KnowledgeDocumentCountArgs>(
      args?: Subset<T, KnowledgeDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KnowledgeDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KnowledgeDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KnowledgeDocumentAggregateArgs>(args: Subset<T, KnowledgeDocumentAggregateArgs>): Prisma.PrismaPromise<GetKnowledgeDocumentAggregateType<T>>

    /**
     * Group by KnowledgeDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeDocumentGroupByArgs} args - Group by arguments.
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
      T extends KnowledgeDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KnowledgeDocumentGroupByArgs['orderBy'] }
        : { orderBy?: KnowledgeDocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KnowledgeDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKnowledgeDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KnowledgeDocument model
   */
  readonly fields: KnowledgeDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KnowledgeDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KnowledgeDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the KnowledgeDocument model
   */
  interface KnowledgeDocumentFieldRefs {
    readonly id: FieldRef<"KnowledgeDocument", 'String'>
    readonly courseId: FieldRef<"KnowledgeDocument", 'String'>
    readonly type: FieldRef<"KnowledgeDocument", 'String'>
    readonly title: FieldRef<"KnowledgeDocument", 'String'>
    readonly content: FieldRef<"KnowledgeDocument", 'String'>
    readonly createdAt: FieldRef<"KnowledgeDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KnowledgeDocument findUnique
   */
  export type KnowledgeDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeDocument to fetch.
     */
    where: KnowledgeDocumentWhereUniqueInput
  }

  /**
   * KnowledgeDocument findUniqueOrThrow
   */
  export type KnowledgeDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeDocument to fetch.
     */
    where: KnowledgeDocumentWhereUniqueInput
  }

  /**
   * KnowledgeDocument findFirst
   */
  export type KnowledgeDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeDocument to fetch.
     */
    where?: KnowledgeDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeDocuments to fetch.
     */
    orderBy?: KnowledgeDocumentOrderByWithRelationInput | KnowledgeDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KnowledgeDocuments.
     */
    cursor?: KnowledgeDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeDocuments.
     */
    distinct?: KnowledgeDocumentScalarFieldEnum | KnowledgeDocumentScalarFieldEnum[]
  }

  /**
   * KnowledgeDocument findFirstOrThrow
   */
  export type KnowledgeDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeDocument to fetch.
     */
    where?: KnowledgeDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeDocuments to fetch.
     */
    orderBy?: KnowledgeDocumentOrderByWithRelationInput | KnowledgeDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KnowledgeDocuments.
     */
    cursor?: KnowledgeDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeDocuments.
     */
    distinct?: KnowledgeDocumentScalarFieldEnum | KnowledgeDocumentScalarFieldEnum[]
  }

  /**
   * KnowledgeDocument findMany
   */
  export type KnowledgeDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeDocumentInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeDocuments to fetch.
     */
    where?: KnowledgeDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeDocuments to fetch.
     */
    orderBy?: KnowledgeDocumentOrderByWithRelationInput | KnowledgeDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KnowledgeDocuments.
     */
    cursor?: KnowledgeDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeDocuments.
     */
    distinct?: KnowledgeDocumentScalarFieldEnum | KnowledgeDocumentScalarFieldEnum[]
  }

  /**
   * KnowledgeDocument create
   */
  export type KnowledgeDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a KnowledgeDocument.
     */
    data: XOR<KnowledgeDocumentCreateInput, KnowledgeDocumentUncheckedCreateInput>
  }

  /**
   * KnowledgeDocument createMany
   */
  export type KnowledgeDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KnowledgeDocuments.
     */
    data: KnowledgeDocumentCreateManyInput | KnowledgeDocumentCreateManyInput[]
  }

  /**
   * KnowledgeDocument createManyAndReturn
   */
  export type KnowledgeDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many KnowledgeDocuments.
     */
    data: KnowledgeDocumentCreateManyInput | KnowledgeDocumentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KnowledgeDocument update
   */
  export type KnowledgeDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a KnowledgeDocument.
     */
    data: XOR<KnowledgeDocumentUpdateInput, KnowledgeDocumentUncheckedUpdateInput>
    /**
     * Choose, which KnowledgeDocument to update.
     */
    where: KnowledgeDocumentWhereUniqueInput
  }

  /**
   * KnowledgeDocument updateMany
   */
  export type KnowledgeDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KnowledgeDocuments.
     */
    data: XOR<KnowledgeDocumentUpdateManyMutationInput, KnowledgeDocumentUncheckedUpdateManyInput>
    /**
     * Filter which KnowledgeDocuments to update
     */
    where?: KnowledgeDocumentWhereInput
    /**
     * Limit how many KnowledgeDocuments to update.
     */
    limit?: number
  }

  /**
   * KnowledgeDocument updateManyAndReturn
   */
  export type KnowledgeDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * The data used to update KnowledgeDocuments.
     */
    data: XOR<KnowledgeDocumentUpdateManyMutationInput, KnowledgeDocumentUncheckedUpdateManyInput>
    /**
     * Filter which KnowledgeDocuments to update
     */
    where?: KnowledgeDocumentWhereInput
    /**
     * Limit how many KnowledgeDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KnowledgeDocument upsert
   */
  export type KnowledgeDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the KnowledgeDocument to update in case it exists.
     */
    where: KnowledgeDocumentWhereUniqueInput
    /**
     * In case the KnowledgeDocument found by the `where` argument doesn't exist, create a new KnowledgeDocument with this data.
     */
    create: XOR<KnowledgeDocumentCreateInput, KnowledgeDocumentUncheckedCreateInput>
    /**
     * In case the KnowledgeDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KnowledgeDocumentUpdateInput, KnowledgeDocumentUncheckedUpdateInput>
  }

  /**
   * KnowledgeDocument delete
   */
  export type KnowledgeDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeDocumentInclude<ExtArgs> | null
    /**
     * Filter which KnowledgeDocument to delete.
     */
    where: KnowledgeDocumentWhereUniqueInput
  }

  /**
   * KnowledgeDocument deleteMany
   */
  export type KnowledgeDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KnowledgeDocuments to delete
     */
    where?: KnowledgeDocumentWhereInput
    /**
     * Limit how many KnowledgeDocuments to delete.
     */
    limit?: number
  }

  /**
   * KnowledgeDocument without action
   */
  export type KnowledgeDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeDocument
     */
    select?: KnowledgeDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeDocument
     */
    omit?: KnowledgeDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeDocumentInclude<ExtArgs> | null
  }


  /**
   * Model CourseAIConfig
   */

  export type AggregateCourseAIConfig = {
    _count: CourseAIConfigCountAggregateOutputType | null
    _avg: CourseAIConfigAvgAggregateOutputType | null
    _sum: CourseAIConfigSumAggregateOutputType | null
    _min: CourseAIConfigMinAggregateOutputType | null
    _max: CourseAIConfigMaxAggregateOutputType | null
  }

  export type CourseAIConfigAvgAggregateOutputType = {
    temperature: number | null
    maxTokens: number | null
  }

  export type CourseAIConfigSumAggregateOutputType = {
    temperature: number | null
    maxTokens: number | null
  }

  export type CourseAIConfigMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    systemPrompt: string | null
    model: string | null
    temperature: number | null
    maxTokens: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseAIConfigMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    systemPrompt: string | null
    model: string | null
    temperature: number | null
    maxTokens: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseAIConfigCountAggregateOutputType = {
    id: number
    courseId: number
    systemPrompt: number
    model: number
    temperature: number
    maxTokens: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAIConfigAvgAggregateInputType = {
    temperature?: true
    maxTokens?: true
  }

  export type CourseAIConfigSumAggregateInputType = {
    temperature?: true
    maxTokens?: true
  }

  export type CourseAIConfigMinAggregateInputType = {
    id?: true
    courseId?: true
    systemPrompt?: true
    model?: true
    temperature?: true
    maxTokens?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseAIConfigMaxAggregateInputType = {
    id?: true
    courseId?: true
    systemPrompt?: true
    model?: true
    temperature?: true
    maxTokens?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseAIConfigCountAggregateInputType = {
    id?: true
    courseId?: true
    systemPrompt?: true
    model?: true
    temperature?: true
    maxTokens?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAIConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseAIConfig to aggregate.
     */
    where?: CourseAIConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseAIConfigs to fetch.
     */
    orderBy?: CourseAIConfigOrderByWithRelationInput | CourseAIConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseAIConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseAIConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseAIConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseAIConfigs
    **/
    _count?: true | CourseAIConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAIConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseAIConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseAIConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseAIConfigMaxAggregateInputType
  }

  export type GetCourseAIConfigAggregateType<T extends CourseAIConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseAIConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseAIConfig[P]>
      : GetScalarType<T[P], AggregateCourseAIConfig[P]>
  }




  export type CourseAIConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseAIConfigWhereInput
    orderBy?: CourseAIConfigOrderByWithAggregationInput | CourseAIConfigOrderByWithAggregationInput[]
    by: CourseAIConfigScalarFieldEnum[] | CourseAIConfigScalarFieldEnum
    having?: CourseAIConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseAIConfigCountAggregateInputType | true
    _avg?: CourseAIConfigAvgAggregateInputType
    _sum?: CourseAIConfigSumAggregateInputType
    _min?: CourseAIConfigMinAggregateInputType
    _max?: CourseAIConfigMaxAggregateInputType
  }

  export type CourseAIConfigGroupByOutputType = {
    id: string
    courseId: string
    systemPrompt: string
    model: string
    temperature: number
    maxTokens: number
    createdAt: Date
    updatedAt: Date
    _count: CourseAIConfigCountAggregateOutputType | null
    _avg: CourseAIConfigAvgAggregateOutputType | null
    _sum: CourseAIConfigSumAggregateOutputType | null
    _min: CourseAIConfigMinAggregateOutputType | null
    _max: CourseAIConfigMaxAggregateOutputType | null
  }

  type GetCourseAIConfigGroupByPayload<T extends CourseAIConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseAIConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseAIConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseAIConfigGroupByOutputType[P]>
            : GetScalarType<T[P], CourseAIConfigGroupByOutputType[P]>
        }
      >
    >


  export type CourseAIConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    systemPrompt?: boolean
    model?: boolean
    temperature?: boolean
    maxTokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseAIConfig"]>

  export type CourseAIConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    systemPrompt?: boolean
    model?: boolean
    temperature?: boolean
    maxTokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseAIConfig"]>

  export type CourseAIConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    systemPrompt?: boolean
    model?: boolean
    temperature?: boolean
    maxTokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseAIConfig"]>

  export type CourseAIConfigSelectScalar = {
    id?: boolean
    courseId?: boolean
    systemPrompt?: boolean
    model?: boolean
    temperature?: boolean
    maxTokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseAIConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "systemPrompt" | "model" | "temperature" | "maxTokens" | "createdAt" | "updatedAt", ExtArgs["result"]["courseAIConfig"]>
  export type CourseAIConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseAIConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseAIConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CourseAIConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseAIConfig"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      systemPrompt: string
      model: string
      temperature: number
      maxTokens: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["courseAIConfig"]>
    composites: {}
  }

  type CourseAIConfigGetPayload<S extends boolean | null | undefined | CourseAIConfigDefaultArgs> = $Result.GetResult<Prisma.$CourseAIConfigPayload, S>

  type CourseAIConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseAIConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseAIConfigCountAggregateInputType | true
    }

  export interface CourseAIConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseAIConfig'], meta: { name: 'CourseAIConfig' } }
    /**
     * Find zero or one CourseAIConfig that matches the filter.
     * @param {CourseAIConfigFindUniqueArgs} args - Arguments to find a CourseAIConfig
     * @example
     * // Get one CourseAIConfig
     * const courseAIConfig = await prisma.courseAIConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseAIConfigFindUniqueArgs>(args: SelectSubset<T, CourseAIConfigFindUniqueArgs<ExtArgs>>): Prisma__CourseAIConfigClient<$Result.GetResult<Prisma.$CourseAIConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseAIConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseAIConfigFindUniqueOrThrowArgs} args - Arguments to find a CourseAIConfig
     * @example
     * // Get one CourseAIConfig
     * const courseAIConfig = await prisma.courseAIConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseAIConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseAIConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseAIConfigClient<$Result.GetResult<Prisma.$CourseAIConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseAIConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAIConfigFindFirstArgs} args - Arguments to find a CourseAIConfig
     * @example
     * // Get one CourseAIConfig
     * const courseAIConfig = await prisma.courseAIConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseAIConfigFindFirstArgs>(args?: SelectSubset<T, CourseAIConfigFindFirstArgs<ExtArgs>>): Prisma__CourseAIConfigClient<$Result.GetResult<Prisma.$CourseAIConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseAIConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAIConfigFindFirstOrThrowArgs} args - Arguments to find a CourseAIConfig
     * @example
     * // Get one CourseAIConfig
     * const courseAIConfig = await prisma.courseAIConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseAIConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseAIConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseAIConfigClient<$Result.GetResult<Prisma.$CourseAIConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseAIConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAIConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseAIConfigs
     * const courseAIConfigs = await prisma.courseAIConfig.findMany()
     * 
     * // Get first 10 CourseAIConfigs
     * const courseAIConfigs = await prisma.courseAIConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseAIConfigWithIdOnly = await prisma.courseAIConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseAIConfigFindManyArgs>(args?: SelectSubset<T, CourseAIConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseAIConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseAIConfig.
     * @param {CourseAIConfigCreateArgs} args - Arguments to create a CourseAIConfig.
     * @example
     * // Create one CourseAIConfig
     * const CourseAIConfig = await prisma.courseAIConfig.create({
     *   data: {
     *     // ... data to create a CourseAIConfig
     *   }
     * })
     * 
     */
    create<T extends CourseAIConfigCreateArgs>(args: SelectSubset<T, CourseAIConfigCreateArgs<ExtArgs>>): Prisma__CourseAIConfigClient<$Result.GetResult<Prisma.$CourseAIConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseAIConfigs.
     * @param {CourseAIConfigCreateManyArgs} args - Arguments to create many CourseAIConfigs.
     * @example
     * // Create many CourseAIConfigs
     * const courseAIConfig = await prisma.courseAIConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseAIConfigCreateManyArgs>(args?: SelectSubset<T, CourseAIConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseAIConfigs and returns the data saved in the database.
     * @param {CourseAIConfigCreateManyAndReturnArgs} args - Arguments to create many CourseAIConfigs.
     * @example
     * // Create many CourseAIConfigs
     * const courseAIConfig = await prisma.courseAIConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseAIConfigs and only return the `id`
     * const courseAIConfigWithIdOnly = await prisma.courseAIConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseAIConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseAIConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseAIConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseAIConfig.
     * @param {CourseAIConfigDeleteArgs} args - Arguments to delete one CourseAIConfig.
     * @example
     * // Delete one CourseAIConfig
     * const CourseAIConfig = await prisma.courseAIConfig.delete({
     *   where: {
     *     // ... filter to delete one CourseAIConfig
     *   }
     * })
     * 
     */
    delete<T extends CourseAIConfigDeleteArgs>(args: SelectSubset<T, CourseAIConfigDeleteArgs<ExtArgs>>): Prisma__CourseAIConfigClient<$Result.GetResult<Prisma.$CourseAIConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseAIConfig.
     * @param {CourseAIConfigUpdateArgs} args - Arguments to update one CourseAIConfig.
     * @example
     * // Update one CourseAIConfig
     * const courseAIConfig = await prisma.courseAIConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseAIConfigUpdateArgs>(args: SelectSubset<T, CourseAIConfigUpdateArgs<ExtArgs>>): Prisma__CourseAIConfigClient<$Result.GetResult<Prisma.$CourseAIConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseAIConfigs.
     * @param {CourseAIConfigDeleteManyArgs} args - Arguments to filter CourseAIConfigs to delete.
     * @example
     * // Delete a few CourseAIConfigs
     * const { count } = await prisma.courseAIConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseAIConfigDeleteManyArgs>(args?: SelectSubset<T, CourseAIConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseAIConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAIConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseAIConfigs
     * const courseAIConfig = await prisma.courseAIConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseAIConfigUpdateManyArgs>(args: SelectSubset<T, CourseAIConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseAIConfigs and returns the data updated in the database.
     * @param {CourseAIConfigUpdateManyAndReturnArgs} args - Arguments to update many CourseAIConfigs.
     * @example
     * // Update many CourseAIConfigs
     * const courseAIConfig = await prisma.courseAIConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseAIConfigs and only return the `id`
     * const courseAIConfigWithIdOnly = await prisma.courseAIConfig.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseAIConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseAIConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseAIConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseAIConfig.
     * @param {CourseAIConfigUpsertArgs} args - Arguments to update or create a CourseAIConfig.
     * @example
     * // Update or create a CourseAIConfig
     * const courseAIConfig = await prisma.courseAIConfig.upsert({
     *   create: {
     *     // ... data to create a CourseAIConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseAIConfig we want to update
     *   }
     * })
     */
    upsert<T extends CourseAIConfigUpsertArgs>(args: SelectSubset<T, CourseAIConfigUpsertArgs<ExtArgs>>): Prisma__CourseAIConfigClient<$Result.GetResult<Prisma.$CourseAIConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseAIConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAIConfigCountArgs} args - Arguments to filter CourseAIConfigs to count.
     * @example
     * // Count the number of CourseAIConfigs
     * const count = await prisma.courseAIConfig.count({
     *   where: {
     *     // ... the filter for the CourseAIConfigs we want to count
     *   }
     * })
    **/
    count<T extends CourseAIConfigCountArgs>(
      args?: Subset<T, CourseAIConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseAIConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseAIConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAIConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAIConfigAggregateArgs>(args: Subset<T, CourseAIConfigAggregateArgs>): Prisma.PrismaPromise<GetCourseAIConfigAggregateType<T>>

    /**
     * Group by CourseAIConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAIConfigGroupByArgs} args - Group by arguments.
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
      T extends CourseAIConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseAIConfigGroupByArgs['orderBy'] }
        : { orderBy?: CourseAIConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseAIConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseAIConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseAIConfig model
   */
  readonly fields: CourseAIConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseAIConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseAIConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CourseAIConfig model
   */
  interface CourseAIConfigFieldRefs {
    readonly id: FieldRef<"CourseAIConfig", 'String'>
    readonly courseId: FieldRef<"CourseAIConfig", 'String'>
    readonly systemPrompt: FieldRef<"CourseAIConfig", 'String'>
    readonly model: FieldRef<"CourseAIConfig", 'String'>
    readonly temperature: FieldRef<"CourseAIConfig", 'Float'>
    readonly maxTokens: FieldRef<"CourseAIConfig", 'Int'>
    readonly createdAt: FieldRef<"CourseAIConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"CourseAIConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CourseAIConfig findUnique
   */
  export type CourseAIConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseAIConfig
     */
    select?: CourseAIConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseAIConfig
     */
    omit?: CourseAIConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseAIConfigInclude<ExtArgs> | null
    /**
     * Filter, which CourseAIConfig to fetch.
     */
    where: CourseAIConfigWhereUniqueInput
  }

  /**
   * CourseAIConfig findUniqueOrThrow
   */
  export type CourseAIConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseAIConfig
     */
    select?: CourseAIConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseAIConfig
     */
    omit?: CourseAIConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseAIConfigInclude<ExtArgs> | null
    /**
     * Filter, which CourseAIConfig to fetch.
     */
    where: CourseAIConfigWhereUniqueInput
  }

  /**
   * CourseAIConfig findFirst
   */
  export type CourseAIConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseAIConfig
     */
    select?: CourseAIConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseAIConfig
     */
    omit?: CourseAIConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseAIConfigInclude<ExtArgs> | null
    /**
     * Filter, which CourseAIConfig to fetch.
     */
    where?: CourseAIConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseAIConfigs to fetch.
     */
    orderBy?: CourseAIConfigOrderByWithRelationInput | CourseAIConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseAIConfigs.
     */
    cursor?: CourseAIConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseAIConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseAIConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseAIConfigs.
     */
    distinct?: CourseAIConfigScalarFieldEnum | CourseAIConfigScalarFieldEnum[]
  }

  /**
   * CourseAIConfig findFirstOrThrow
   */
  export type CourseAIConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseAIConfig
     */
    select?: CourseAIConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseAIConfig
     */
    omit?: CourseAIConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseAIConfigInclude<ExtArgs> | null
    /**
     * Filter, which CourseAIConfig to fetch.
     */
    where?: CourseAIConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseAIConfigs to fetch.
     */
    orderBy?: CourseAIConfigOrderByWithRelationInput | CourseAIConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseAIConfigs.
     */
    cursor?: CourseAIConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseAIConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseAIConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseAIConfigs.
     */
    distinct?: CourseAIConfigScalarFieldEnum | CourseAIConfigScalarFieldEnum[]
  }

  /**
   * CourseAIConfig findMany
   */
  export type CourseAIConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseAIConfig
     */
    select?: CourseAIConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseAIConfig
     */
    omit?: CourseAIConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseAIConfigInclude<ExtArgs> | null
    /**
     * Filter, which CourseAIConfigs to fetch.
     */
    where?: CourseAIConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseAIConfigs to fetch.
     */
    orderBy?: CourseAIConfigOrderByWithRelationInput | CourseAIConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseAIConfigs.
     */
    cursor?: CourseAIConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseAIConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseAIConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseAIConfigs.
     */
    distinct?: CourseAIConfigScalarFieldEnum | CourseAIConfigScalarFieldEnum[]
  }

  /**
   * CourseAIConfig create
   */
  export type CourseAIConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseAIConfig
     */
    select?: CourseAIConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseAIConfig
     */
    omit?: CourseAIConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseAIConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseAIConfig.
     */
    data: XOR<CourseAIConfigCreateInput, CourseAIConfigUncheckedCreateInput>
  }

  /**
   * CourseAIConfig createMany
   */
  export type CourseAIConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseAIConfigs.
     */
    data: CourseAIConfigCreateManyInput | CourseAIConfigCreateManyInput[]
  }

  /**
   * CourseAIConfig createManyAndReturn
   */
  export type CourseAIConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseAIConfig
     */
    select?: CourseAIConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseAIConfig
     */
    omit?: CourseAIConfigOmit<ExtArgs> | null
    /**
     * The data used to create many CourseAIConfigs.
     */
    data: CourseAIConfigCreateManyInput | CourseAIConfigCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseAIConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseAIConfig update
   */
  export type CourseAIConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseAIConfig
     */
    select?: CourseAIConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseAIConfig
     */
    omit?: CourseAIConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseAIConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseAIConfig.
     */
    data: XOR<CourseAIConfigUpdateInput, CourseAIConfigUncheckedUpdateInput>
    /**
     * Choose, which CourseAIConfig to update.
     */
    where: CourseAIConfigWhereUniqueInput
  }

  /**
   * CourseAIConfig updateMany
   */
  export type CourseAIConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseAIConfigs.
     */
    data: XOR<CourseAIConfigUpdateManyMutationInput, CourseAIConfigUncheckedUpdateManyInput>
    /**
     * Filter which CourseAIConfigs to update
     */
    where?: CourseAIConfigWhereInput
    /**
     * Limit how many CourseAIConfigs to update.
     */
    limit?: number
  }

  /**
   * CourseAIConfig updateManyAndReturn
   */
  export type CourseAIConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseAIConfig
     */
    select?: CourseAIConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseAIConfig
     */
    omit?: CourseAIConfigOmit<ExtArgs> | null
    /**
     * The data used to update CourseAIConfigs.
     */
    data: XOR<CourseAIConfigUpdateManyMutationInput, CourseAIConfigUncheckedUpdateManyInput>
    /**
     * Filter which CourseAIConfigs to update
     */
    where?: CourseAIConfigWhereInput
    /**
     * Limit how many CourseAIConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseAIConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseAIConfig upsert
   */
  export type CourseAIConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseAIConfig
     */
    select?: CourseAIConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseAIConfig
     */
    omit?: CourseAIConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseAIConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseAIConfig to update in case it exists.
     */
    where: CourseAIConfigWhereUniqueInput
    /**
     * In case the CourseAIConfig found by the `where` argument doesn't exist, create a new CourseAIConfig with this data.
     */
    create: XOR<CourseAIConfigCreateInput, CourseAIConfigUncheckedCreateInput>
    /**
     * In case the CourseAIConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseAIConfigUpdateInput, CourseAIConfigUncheckedUpdateInput>
  }

  /**
   * CourseAIConfig delete
   */
  export type CourseAIConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseAIConfig
     */
    select?: CourseAIConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseAIConfig
     */
    omit?: CourseAIConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseAIConfigInclude<ExtArgs> | null
    /**
     * Filter which CourseAIConfig to delete.
     */
    where: CourseAIConfigWhereUniqueInput
  }

  /**
   * CourseAIConfig deleteMany
   */
  export type CourseAIConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseAIConfigs to delete
     */
    where?: CourseAIConfigWhereInput
    /**
     * Limit how many CourseAIConfigs to delete.
     */
    limit?: number
  }

  /**
   * CourseAIConfig without action
   */
  export type CourseAIConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseAIConfig
     */
    select?: CourseAIConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseAIConfig
     */
    omit?: CourseAIConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseAIConfigInclude<ExtArgs> | null
  }


  /**
   * Model SystemSetting
   */

  export type AggregateSystemSetting = {
    _count: SystemSettingCountAggregateOutputType | null
    _min: SystemSettingMinAggregateOutputType | null
    _max: SystemSettingMaxAggregateOutputType | null
  }

  export type SystemSettingMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
  }

  export type SystemSettingMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
  }

  export type SystemSettingCountAggregateOutputType = {
    id: number
    key: number
    value: number
    description: number
    _all: number
  }


  export type SystemSettingMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
  }

  export type SystemSettingMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
  }

  export type SystemSettingCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    _all?: true
  }

  export type SystemSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSetting to aggregate.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemSettings
    **/
    _count?: true | SystemSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemSettingMaxAggregateInputType
  }

  export type GetSystemSettingAggregateType<T extends SystemSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemSetting[P]>
      : GetScalarType<T[P], AggregateSystemSetting[P]>
  }




  export type SystemSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemSettingWhereInput
    orderBy?: SystemSettingOrderByWithAggregationInput | SystemSettingOrderByWithAggregationInput[]
    by: SystemSettingScalarFieldEnum[] | SystemSettingScalarFieldEnum
    having?: SystemSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemSettingCountAggregateInputType | true
    _min?: SystemSettingMinAggregateInputType
    _max?: SystemSettingMaxAggregateInputType
  }

  export type SystemSettingGroupByOutputType = {
    id: string
    key: string
    value: string
    description: string
    _count: SystemSettingCountAggregateOutputType | null
    _min: SystemSettingMinAggregateOutputType | null
    _max: SystemSettingMaxAggregateOutputType | null
  }

  type GetSystemSettingGroupByPayload<T extends SystemSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemSettingGroupByOutputType[P]>
            : GetScalarType<T[P], SystemSettingGroupByOutputType[P]>
        }
      >
    >


  export type SystemSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
  }, ExtArgs["result"]["systemSetting"]>

  export type SystemSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
  }, ExtArgs["result"]["systemSetting"]>

  export type SystemSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
  }, ExtArgs["result"]["systemSetting"]>

  export type SystemSettingSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
  }

  export type SystemSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "description", ExtArgs["result"]["systemSetting"]>

  export type $SystemSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      description: string
    }, ExtArgs["result"]["systemSetting"]>
    composites: {}
  }

  type SystemSettingGetPayload<S extends boolean | null | undefined | SystemSettingDefaultArgs> = $Result.GetResult<Prisma.$SystemSettingPayload, S>

  type SystemSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemSettingCountAggregateInputType | true
    }

  export interface SystemSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemSetting'], meta: { name: 'SystemSetting' } }
    /**
     * Find zero or one SystemSetting that matches the filter.
     * @param {SystemSettingFindUniqueArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemSettingFindUniqueArgs>(args: SelectSubset<T, SystemSettingFindUniqueArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemSettingFindUniqueOrThrowArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindFirstArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemSettingFindFirstArgs>(args?: SelectSubset<T, SystemSettingFindFirstArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindFirstOrThrowArgs} args - Arguments to find a SystemSetting
     * @example
     * // Get one SystemSetting
     * const systemSetting = await prisma.systemSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemSettings
     * const systemSettings = await prisma.systemSetting.findMany()
     * 
     * // Get first 10 SystemSettings
     * const systemSettings = await prisma.systemSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemSettingWithIdOnly = await prisma.systemSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemSettingFindManyArgs>(args?: SelectSubset<T, SystemSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemSetting.
     * @param {SystemSettingCreateArgs} args - Arguments to create a SystemSetting.
     * @example
     * // Create one SystemSetting
     * const SystemSetting = await prisma.systemSetting.create({
     *   data: {
     *     // ... data to create a SystemSetting
     *   }
     * })
     * 
     */
    create<T extends SystemSettingCreateArgs>(args: SelectSubset<T, SystemSettingCreateArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemSettings.
     * @param {SystemSettingCreateManyArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSetting = await prisma.systemSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemSettingCreateManyArgs>(args?: SelectSubset<T, SystemSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemSettings and returns the data saved in the database.
     * @param {SystemSettingCreateManyAndReturnArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSetting = await prisma.systemSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemSettings and only return the `id`
     * const systemSettingWithIdOnly = await prisma.systemSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemSetting.
     * @param {SystemSettingDeleteArgs} args - Arguments to delete one SystemSetting.
     * @example
     * // Delete one SystemSetting
     * const SystemSetting = await prisma.systemSetting.delete({
     *   where: {
     *     // ... filter to delete one SystemSetting
     *   }
     * })
     * 
     */
    delete<T extends SystemSettingDeleteArgs>(args: SelectSubset<T, SystemSettingDeleteArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemSetting.
     * @param {SystemSettingUpdateArgs} args - Arguments to update one SystemSetting.
     * @example
     * // Update one SystemSetting
     * const systemSetting = await prisma.systemSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemSettingUpdateArgs>(args: SelectSubset<T, SystemSettingUpdateArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemSettings.
     * @param {SystemSettingDeleteManyArgs} args - Arguments to filter SystemSettings to delete.
     * @example
     * // Delete a few SystemSettings
     * const { count } = await prisma.systemSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemSettingDeleteManyArgs>(args?: SelectSubset<T, SystemSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemSettings
     * const systemSetting = await prisma.systemSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemSettingUpdateManyArgs>(args: SelectSubset<T, SystemSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings and returns the data updated in the database.
     * @param {SystemSettingUpdateManyAndReturnArgs} args - Arguments to update many SystemSettings.
     * @example
     * // Update many SystemSettings
     * const systemSetting = await prisma.systemSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemSettings and only return the `id`
     * const systemSettingWithIdOnly = await prisma.systemSetting.updateManyAndReturn({
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
    updateManyAndReturn<T extends SystemSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemSetting.
     * @param {SystemSettingUpsertArgs} args - Arguments to update or create a SystemSetting.
     * @example
     * // Update or create a SystemSetting
     * const systemSetting = await prisma.systemSetting.upsert({
     *   create: {
     *     // ... data to create a SystemSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemSetting we want to update
     *   }
     * })
     */
    upsert<T extends SystemSettingUpsertArgs>(args: SelectSubset<T, SystemSettingUpsertArgs<ExtArgs>>): Prisma__SystemSettingClient<$Result.GetResult<Prisma.$SystemSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingCountArgs} args - Arguments to filter SystemSettings to count.
     * @example
     * // Count the number of SystemSettings
     * const count = await prisma.systemSetting.count({
     *   where: {
     *     // ... the filter for the SystemSettings we want to count
     *   }
     * })
    **/
    count<T extends SystemSettingCountArgs>(
      args?: Subset<T, SystemSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemSettingAggregateArgs>(args: Subset<T, SystemSettingAggregateArgs>): Prisma.PrismaPromise<GetSystemSettingAggregateType<T>>

    /**
     * Group by SystemSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingGroupByArgs} args - Group by arguments.
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
      T extends SystemSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemSettingGroupByArgs['orderBy'] }
        : { orderBy?: SystemSettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemSetting model
   */
  readonly fields: SystemSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SystemSetting model
   */
  interface SystemSettingFieldRefs {
    readonly id: FieldRef<"SystemSetting", 'String'>
    readonly key: FieldRef<"SystemSetting", 'String'>
    readonly value: FieldRef<"SystemSetting", 'String'>
    readonly description: FieldRef<"SystemSetting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SystemSetting findUnique
   */
  export type SystemSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting findUniqueOrThrow
   */
  export type SystemSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting findFirst
   */
  export type SystemSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }

  /**
   * SystemSetting findFirstOrThrow
   */
  export type SystemSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSetting to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }

  /**
   * SystemSetting findMany
   */
  export type SystemSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingOrderByWithRelationInput | SystemSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemSettings.
     */
    cursor?: SystemSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingScalarFieldEnum | SystemSettingScalarFieldEnum[]
  }

  /**
   * SystemSetting create
   */
  export type SystemSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemSetting.
     */
    data: XOR<SystemSettingCreateInput, SystemSettingUncheckedCreateInput>
  }

  /**
   * SystemSetting createMany
   */
  export type SystemSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingCreateManyInput | SystemSettingCreateManyInput[]
  }

  /**
   * SystemSetting createManyAndReturn
   */
  export type SystemSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingCreateManyInput | SystemSettingCreateManyInput[]
  }

  /**
   * SystemSetting update
   */
  export type SystemSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemSetting.
     */
    data: XOR<SystemSettingUpdateInput, SystemSettingUncheckedUpdateInput>
    /**
     * Choose, which SystemSetting to update.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting updateMany
   */
  export type SystemSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingUpdateManyMutationInput, SystemSettingUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSetting updateManyAndReturn
   */
  export type SystemSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingUpdateManyMutationInput, SystemSettingUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSetting upsert
   */
  export type SystemSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemSetting to update in case it exists.
     */
    where: SystemSettingWhereUniqueInput
    /**
     * In case the SystemSetting found by the `where` argument doesn't exist, create a new SystemSetting with this data.
     */
    create: XOR<SystemSettingCreateInput, SystemSettingUncheckedCreateInput>
    /**
     * In case the SystemSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemSettingUpdateInput, SystemSettingUncheckedUpdateInput>
  }

  /**
   * SystemSetting delete
   */
  export type SystemSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
    /**
     * Filter which SystemSetting to delete.
     */
    where: SystemSettingWhereUniqueInput
  }

  /**
   * SystemSetting deleteMany
   */
  export type SystemSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to delete
     */
    where?: SystemSettingWhereInput
    /**
     * Limit how many SystemSettings to delete.
     */
    limit?: number
  }

  /**
   * SystemSetting without action
   */
  export type SystemSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSetting
     */
    select?: SystemSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSetting
     */
    omit?: SystemSettingOmit<ExtArgs> | null
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
    userId: string | null
    title: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    message: number
    read: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    read?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    read?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    read?: true
    createdAt?: true
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
    userId: string
    title: string
    message: string
    read: boolean
    createdAt: Date
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
    userId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "message" | "read" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      message: string
      read: boolean
      createdAt: Date
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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly userId: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
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
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    registrationCode: 'registrationCode',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OTPScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    code: 'code',
    expiresAt: 'expiresAt',
    used: 'used',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type OTPScalarFieldEnum = (typeof OTPScalarFieldEnum)[keyof typeof OTPScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    longDescription: 'longDescription',
    instructor: 'instructor',
    level: 'level',
    price: 'price',
    status: 'status',
    sessionsCount: 'sessionsCount',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const LessonScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    title: 'title',
    description: 'description',
    order: 'order',
    duration: 'duration'
  };

  export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    progress: 'progress',
    enrolledAt: 'enrolledAt',
    paymentAuthority: 'paymentAuthority',
    paymentRefId: 'paymentRefId',
    paymentStatus: 'paymentStatus'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const ExerciseSubmissionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    title: 'title',
    audioUrl: 'audioUrl',
    duration: 'duration',
    score: 'score',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ExerciseSubmissionScalarFieldEnum = (typeof ExerciseSubmissionScalarFieldEnum)[keyof typeof ExerciseSubmissionScalarFieldEnum]


  export const ExerciseAnalysisScalarFieldEnum: {
    id: 'id',
    exerciseId: 'exerciseId',
    overallScore: 'overallScore',
    strengthsJson: 'strengthsJson',
    improvementsJson: 'improvementsJson',
    detailsJson: 'detailsJson',
    aiRecommendation: 'aiRecommendation',
    nextExercise: 'nextExercise',
    createdAt: 'createdAt'
  };

  export type ExerciseAnalysisScalarFieldEnum = (typeof ExerciseAnalysisScalarFieldEnum)[keyof typeof ExerciseAnalysisScalarFieldEnum]


  export const SupportConversationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    messagesUsed: 'messagesUsed',
    createdAt: 'createdAt'
  };

  export type SupportConversationScalarFieldEnum = (typeof SupportConversationScalarFieldEnum)[keyof typeof SupportConversationScalarFieldEnum]


  export const SupportMessageScalarFieldEnum: {
    id: 'id',
    conversationId: 'conversationId',
    role: 'role',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type SupportMessageScalarFieldEnum = (typeof SupportMessageScalarFieldEnum)[keyof typeof SupportMessageScalarFieldEnum]


  export const KnowledgeDocumentScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    type: 'type',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type KnowledgeDocumentScalarFieldEnum = (typeof KnowledgeDocumentScalarFieldEnum)[keyof typeof KnowledgeDocumentScalarFieldEnum]


  export const CourseAIConfigScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    systemPrompt: 'systemPrompt',
    model: 'model',
    temperature: 'temperature',
    maxTokens: 'maxTokens',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseAIConfigScalarFieldEnum = (typeof CourseAIConfigScalarFieldEnum)[keyof typeof CourseAIConfigScalarFieldEnum]


  export const SystemSettingScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    description: 'description'
  };

  export type SystemSettingScalarFieldEnum = (typeof SystemSettingScalarFieldEnum)[keyof typeof SystemSettingScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    read: 'read',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    registrationCode?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    otps?: OTPListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    exercises?: ExerciseSubmissionListRelationFilter
    supportConvos?: SupportConversationListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    registrationCode?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    otps?: OTPOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    exercises?: ExerciseSubmissionOrderByRelationAggregateInput
    supportConvos?: SupportConversationOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    registrationCode?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    otps?: OTPListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    exercises?: ExerciseSubmissionListRelationFilter
    supportConvos?: SupportConversationListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "phone" | "registrationCode">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    registrationCode?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    registrationCode?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OTPWhereInput = {
    AND?: OTPWhereInput | OTPWhereInput[]
    OR?: OTPWhereInput[]
    NOT?: OTPWhereInput | OTPWhereInput[]
    id?: StringFilter<"OTP"> | string
    phone?: StringFilter<"OTP"> | string
    code?: StringFilter<"OTP"> | string
    expiresAt?: DateTimeFilter<"OTP"> | Date | string
    used?: BoolFilter<"OTP"> | boolean
    createdAt?: DateTimeFilter<"OTP"> | Date | string
    userId?: StringNullableFilter<"OTP"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type OTPOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OTPWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OTPWhereInput | OTPWhereInput[]
    OR?: OTPWhereInput[]
    NOT?: OTPWhereInput | OTPWhereInput[]
    phone?: StringFilter<"OTP"> | string
    code?: StringFilter<"OTP"> | string
    expiresAt?: DateTimeFilter<"OTP"> | Date | string
    used?: BoolFilter<"OTP"> | boolean
    createdAt?: DateTimeFilter<"OTP"> | Date | string
    userId?: StringNullableFilter<"OTP"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type OTPOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: OTPCountOrderByAggregateInput
    _max?: OTPMaxOrderByAggregateInput
    _min?: OTPMinOrderByAggregateInput
  }

  export type OTPScalarWhereWithAggregatesInput = {
    AND?: OTPScalarWhereWithAggregatesInput | OTPScalarWhereWithAggregatesInput[]
    OR?: OTPScalarWhereWithAggregatesInput[]
    NOT?: OTPScalarWhereWithAggregatesInput | OTPScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OTP"> | string
    phone?: StringWithAggregatesFilter<"OTP"> | string
    code?: StringWithAggregatesFilter<"OTP"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"OTP"> | Date | string
    used?: BoolWithAggregatesFilter<"OTP"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"OTP"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"OTP"> | string | null
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    longDescription?: StringFilter<"Course"> | string
    instructor?: StringFilter<"Course"> | string
    level?: StringFilter<"Course"> | string
    price?: IntFilter<"Course"> | number
    status?: StringFilter<"Course"> | string
    sessionsCount?: IntFilter<"Course"> | number
    imageUrl?: StringNullableFilter<"Course"> | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    lessons?: LessonListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    exercises?: ExerciseSubmissionListRelationFilter
    supportConvos?: SupportConversationListRelationFilter
    knowledgeDocs?: KnowledgeDocumentListRelationFilter
    aiConfig?: XOR<CourseAIConfigNullableScalarRelationFilter, CourseAIConfigWhereInput> | null
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    instructor?: SortOrder
    level?: SortOrder
    price?: SortOrder
    status?: SortOrder
    sessionsCount?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lessons?: LessonOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    exercises?: ExerciseSubmissionOrderByRelationAggregateInput
    supportConvos?: SupportConversationOrderByRelationAggregateInput
    knowledgeDocs?: KnowledgeDocumentOrderByRelationAggregateInput
    aiConfig?: CourseAIConfigOrderByWithRelationInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    longDescription?: StringFilter<"Course"> | string
    instructor?: StringFilter<"Course"> | string
    level?: StringFilter<"Course"> | string
    price?: IntFilter<"Course"> | number
    status?: StringFilter<"Course"> | string
    sessionsCount?: IntFilter<"Course"> | number
    imageUrl?: StringNullableFilter<"Course"> | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    lessons?: LessonListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    exercises?: ExerciseSubmissionListRelationFilter
    supportConvos?: SupportConversationListRelationFilter
    knowledgeDocs?: KnowledgeDocumentListRelationFilter
    aiConfig?: XOR<CourseAIConfigNullableScalarRelationFilter, CourseAIConfigWhereInput> | null
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    instructor?: SortOrder
    level?: SortOrder
    price?: SortOrder
    status?: SortOrder
    sessionsCount?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    title?: StringWithAggregatesFilter<"Course"> | string
    description?: StringWithAggregatesFilter<"Course"> | string
    longDescription?: StringWithAggregatesFilter<"Course"> | string
    instructor?: StringWithAggregatesFilter<"Course"> | string
    level?: StringWithAggregatesFilter<"Course"> | string
    price?: IntWithAggregatesFilter<"Course"> | number
    status?: StringWithAggregatesFilter<"Course"> | string
    sessionsCount?: IntWithAggregatesFilter<"Course"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"Course"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type LessonWhereInput = {
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    id?: StringFilter<"Lesson"> | string
    courseId?: StringFilter<"Lesson"> | string
    title?: StringFilter<"Lesson"> | string
    description?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    duration?: StringFilter<"Lesson"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type LessonOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    duration?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    courseId?: StringFilter<"Lesson"> | string
    title?: StringFilter<"Lesson"> | string
    description?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    duration?: StringFilter<"Lesson"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type LessonOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    duration?: SortOrder
    _count?: LessonCountOrderByAggregateInput
    _avg?: LessonAvgOrderByAggregateInput
    _max?: LessonMaxOrderByAggregateInput
    _min?: LessonMinOrderByAggregateInput
    _sum?: LessonSumOrderByAggregateInput
  }

  export type LessonScalarWhereWithAggregatesInput = {
    AND?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    OR?: LessonScalarWhereWithAggregatesInput[]
    NOT?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lesson"> | string
    courseId?: StringWithAggregatesFilter<"Lesson"> | string
    title?: StringWithAggregatesFilter<"Lesson"> | string
    description?: StringWithAggregatesFilter<"Lesson"> | string
    order?: IntWithAggregatesFilter<"Lesson"> | number
    duration?: StringWithAggregatesFilter<"Lesson"> | string
  }

  export type EnrollmentWhereInput = {
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    id?: StringFilter<"Enrollment"> | string
    userId?: StringFilter<"Enrollment"> | string
    courseId?: StringFilter<"Enrollment"> | string
    progress?: IntFilter<"Enrollment"> | number
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    paymentAuthority?: StringNullableFilter<"Enrollment"> | string | null
    paymentRefId?: StringNullableFilter<"Enrollment"> | string | null
    paymentStatus?: StringFilter<"Enrollment"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type EnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    progress?: SortOrder
    enrolledAt?: SortOrder
    paymentAuthority?: SortOrderInput | SortOrder
    paymentRefId?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_courseId?: EnrollmentUserIdCourseIdCompoundUniqueInput
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    userId?: StringFilter<"Enrollment"> | string
    courseId?: StringFilter<"Enrollment"> | string
    progress?: IntFilter<"Enrollment"> | number
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    paymentAuthority?: StringNullableFilter<"Enrollment"> | string | null
    paymentRefId?: StringNullableFilter<"Enrollment"> | string | null
    paymentStatus?: StringFilter<"Enrollment"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "userId_courseId">

  export type EnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    progress?: SortOrder
    enrolledAt?: SortOrder
    paymentAuthority?: SortOrderInput | SortOrder
    paymentRefId?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _avg?: EnrollmentAvgOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
    _sum?: EnrollmentSumOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    OR?: EnrollmentScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Enrollment"> | string
    userId?: StringWithAggregatesFilter<"Enrollment"> | string
    courseId?: StringWithAggregatesFilter<"Enrollment"> | string
    progress?: IntWithAggregatesFilter<"Enrollment"> | number
    enrolledAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
    paymentAuthority?: StringNullableWithAggregatesFilter<"Enrollment"> | string | null
    paymentRefId?: StringNullableWithAggregatesFilter<"Enrollment"> | string | null
    paymentStatus?: StringWithAggregatesFilter<"Enrollment"> | string
  }

  export type ExerciseSubmissionWhereInput = {
    AND?: ExerciseSubmissionWhereInput | ExerciseSubmissionWhereInput[]
    OR?: ExerciseSubmissionWhereInput[]
    NOT?: ExerciseSubmissionWhereInput | ExerciseSubmissionWhereInput[]
    id?: StringFilter<"ExerciseSubmission"> | string
    userId?: StringFilter<"ExerciseSubmission"> | string
    courseId?: StringFilter<"ExerciseSubmission"> | string
    title?: StringFilter<"ExerciseSubmission"> | string
    audioUrl?: StringNullableFilter<"ExerciseSubmission"> | string | null
    duration?: IntFilter<"ExerciseSubmission"> | number
    score?: IntNullableFilter<"ExerciseSubmission"> | number | null
    status?: StringFilter<"ExerciseSubmission"> | string
    createdAt?: DateTimeFilter<"ExerciseSubmission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    analysis?: XOR<ExerciseAnalysisNullableScalarRelationFilter, ExerciseAnalysisWhereInput> | null
  }

  export type ExerciseSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    audioUrl?: SortOrderInput | SortOrder
    duration?: SortOrder
    score?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
    analysis?: ExerciseAnalysisOrderByWithRelationInput
  }

  export type ExerciseSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExerciseSubmissionWhereInput | ExerciseSubmissionWhereInput[]
    OR?: ExerciseSubmissionWhereInput[]
    NOT?: ExerciseSubmissionWhereInput | ExerciseSubmissionWhereInput[]
    userId?: StringFilter<"ExerciseSubmission"> | string
    courseId?: StringFilter<"ExerciseSubmission"> | string
    title?: StringFilter<"ExerciseSubmission"> | string
    audioUrl?: StringNullableFilter<"ExerciseSubmission"> | string | null
    duration?: IntFilter<"ExerciseSubmission"> | number
    score?: IntNullableFilter<"ExerciseSubmission"> | number | null
    status?: StringFilter<"ExerciseSubmission"> | string
    createdAt?: DateTimeFilter<"ExerciseSubmission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    analysis?: XOR<ExerciseAnalysisNullableScalarRelationFilter, ExerciseAnalysisWhereInput> | null
  }, "id">

  export type ExerciseSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    audioUrl?: SortOrderInput | SortOrder
    duration?: SortOrder
    score?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ExerciseSubmissionCountOrderByAggregateInput
    _avg?: ExerciseSubmissionAvgOrderByAggregateInput
    _max?: ExerciseSubmissionMaxOrderByAggregateInput
    _min?: ExerciseSubmissionMinOrderByAggregateInput
    _sum?: ExerciseSubmissionSumOrderByAggregateInput
  }

  export type ExerciseSubmissionScalarWhereWithAggregatesInput = {
    AND?: ExerciseSubmissionScalarWhereWithAggregatesInput | ExerciseSubmissionScalarWhereWithAggregatesInput[]
    OR?: ExerciseSubmissionScalarWhereWithAggregatesInput[]
    NOT?: ExerciseSubmissionScalarWhereWithAggregatesInput | ExerciseSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExerciseSubmission"> | string
    userId?: StringWithAggregatesFilter<"ExerciseSubmission"> | string
    courseId?: StringWithAggregatesFilter<"ExerciseSubmission"> | string
    title?: StringWithAggregatesFilter<"ExerciseSubmission"> | string
    audioUrl?: StringNullableWithAggregatesFilter<"ExerciseSubmission"> | string | null
    duration?: IntWithAggregatesFilter<"ExerciseSubmission"> | number
    score?: IntNullableWithAggregatesFilter<"ExerciseSubmission"> | number | null
    status?: StringWithAggregatesFilter<"ExerciseSubmission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ExerciseSubmission"> | Date | string
  }

  export type ExerciseAnalysisWhereInput = {
    AND?: ExerciseAnalysisWhereInput | ExerciseAnalysisWhereInput[]
    OR?: ExerciseAnalysisWhereInput[]
    NOT?: ExerciseAnalysisWhereInput | ExerciseAnalysisWhereInput[]
    id?: StringFilter<"ExerciseAnalysis"> | string
    exerciseId?: StringFilter<"ExerciseAnalysis"> | string
    overallScore?: IntFilter<"ExerciseAnalysis"> | number
    strengthsJson?: StringFilter<"ExerciseAnalysis"> | string
    improvementsJson?: StringFilter<"ExerciseAnalysis"> | string
    detailsJson?: StringFilter<"ExerciseAnalysis"> | string
    aiRecommendation?: StringFilter<"ExerciseAnalysis"> | string
    nextExercise?: StringFilter<"ExerciseAnalysis"> | string
    createdAt?: DateTimeFilter<"ExerciseAnalysis"> | Date | string
    exercise?: XOR<ExerciseSubmissionScalarRelationFilter, ExerciseSubmissionWhereInput>
  }

  export type ExerciseAnalysisOrderByWithRelationInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    overallScore?: SortOrder
    strengthsJson?: SortOrder
    improvementsJson?: SortOrder
    detailsJson?: SortOrder
    aiRecommendation?: SortOrder
    nextExercise?: SortOrder
    createdAt?: SortOrder
    exercise?: ExerciseSubmissionOrderByWithRelationInput
  }

  export type ExerciseAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    exerciseId?: string
    AND?: ExerciseAnalysisWhereInput | ExerciseAnalysisWhereInput[]
    OR?: ExerciseAnalysisWhereInput[]
    NOT?: ExerciseAnalysisWhereInput | ExerciseAnalysisWhereInput[]
    overallScore?: IntFilter<"ExerciseAnalysis"> | number
    strengthsJson?: StringFilter<"ExerciseAnalysis"> | string
    improvementsJson?: StringFilter<"ExerciseAnalysis"> | string
    detailsJson?: StringFilter<"ExerciseAnalysis"> | string
    aiRecommendation?: StringFilter<"ExerciseAnalysis"> | string
    nextExercise?: StringFilter<"ExerciseAnalysis"> | string
    createdAt?: DateTimeFilter<"ExerciseAnalysis"> | Date | string
    exercise?: XOR<ExerciseSubmissionScalarRelationFilter, ExerciseSubmissionWhereInput>
  }, "id" | "exerciseId">

  export type ExerciseAnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    overallScore?: SortOrder
    strengthsJson?: SortOrder
    improvementsJson?: SortOrder
    detailsJson?: SortOrder
    aiRecommendation?: SortOrder
    nextExercise?: SortOrder
    createdAt?: SortOrder
    _count?: ExerciseAnalysisCountOrderByAggregateInput
    _avg?: ExerciseAnalysisAvgOrderByAggregateInput
    _max?: ExerciseAnalysisMaxOrderByAggregateInput
    _min?: ExerciseAnalysisMinOrderByAggregateInput
    _sum?: ExerciseAnalysisSumOrderByAggregateInput
  }

  export type ExerciseAnalysisScalarWhereWithAggregatesInput = {
    AND?: ExerciseAnalysisScalarWhereWithAggregatesInput | ExerciseAnalysisScalarWhereWithAggregatesInput[]
    OR?: ExerciseAnalysisScalarWhereWithAggregatesInput[]
    NOT?: ExerciseAnalysisScalarWhereWithAggregatesInput | ExerciseAnalysisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExerciseAnalysis"> | string
    exerciseId?: StringWithAggregatesFilter<"ExerciseAnalysis"> | string
    overallScore?: IntWithAggregatesFilter<"ExerciseAnalysis"> | number
    strengthsJson?: StringWithAggregatesFilter<"ExerciseAnalysis"> | string
    improvementsJson?: StringWithAggregatesFilter<"ExerciseAnalysis"> | string
    detailsJson?: StringWithAggregatesFilter<"ExerciseAnalysis"> | string
    aiRecommendation?: StringWithAggregatesFilter<"ExerciseAnalysis"> | string
    nextExercise?: StringWithAggregatesFilter<"ExerciseAnalysis"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ExerciseAnalysis"> | Date | string
  }

  export type SupportConversationWhereInput = {
    AND?: SupportConversationWhereInput | SupportConversationWhereInput[]
    OR?: SupportConversationWhereInput[]
    NOT?: SupportConversationWhereInput | SupportConversationWhereInput[]
    id?: StringFilter<"SupportConversation"> | string
    userId?: StringFilter<"SupportConversation"> | string
    courseId?: StringFilter<"SupportConversation"> | string
    messagesUsed?: IntFilter<"SupportConversation"> | number
    createdAt?: DateTimeFilter<"SupportConversation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    messages?: SupportMessageListRelationFilter
  }

  export type SupportConversationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    messagesUsed?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
    messages?: SupportMessageOrderByRelationAggregateInput
  }

  export type SupportConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_courseId?: SupportConversationUserIdCourseIdCompoundUniqueInput
    AND?: SupportConversationWhereInput | SupportConversationWhereInput[]
    OR?: SupportConversationWhereInput[]
    NOT?: SupportConversationWhereInput | SupportConversationWhereInput[]
    userId?: StringFilter<"SupportConversation"> | string
    courseId?: StringFilter<"SupportConversation"> | string
    messagesUsed?: IntFilter<"SupportConversation"> | number
    createdAt?: DateTimeFilter<"SupportConversation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    messages?: SupportMessageListRelationFilter
  }, "id" | "userId_courseId">

  export type SupportConversationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    messagesUsed?: SortOrder
    createdAt?: SortOrder
    _count?: SupportConversationCountOrderByAggregateInput
    _avg?: SupportConversationAvgOrderByAggregateInput
    _max?: SupportConversationMaxOrderByAggregateInput
    _min?: SupportConversationMinOrderByAggregateInput
    _sum?: SupportConversationSumOrderByAggregateInput
  }

  export type SupportConversationScalarWhereWithAggregatesInput = {
    AND?: SupportConversationScalarWhereWithAggregatesInput | SupportConversationScalarWhereWithAggregatesInput[]
    OR?: SupportConversationScalarWhereWithAggregatesInput[]
    NOT?: SupportConversationScalarWhereWithAggregatesInput | SupportConversationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupportConversation"> | string
    userId?: StringWithAggregatesFilter<"SupportConversation"> | string
    courseId?: StringWithAggregatesFilter<"SupportConversation"> | string
    messagesUsed?: IntWithAggregatesFilter<"SupportConversation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SupportConversation"> | Date | string
  }

  export type SupportMessageWhereInput = {
    AND?: SupportMessageWhereInput | SupportMessageWhereInput[]
    OR?: SupportMessageWhereInput[]
    NOT?: SupportMessageWhereInput | SupportMessageWhereInput[]
    id?: StringFilter<"SupportMessage"> | string
    conversationId?: StringFilter<"SupportMessage"> | string
    role?: StringFilter<"SupportMessage"> | string
    content?: StringFilter<"SupportMessage"> | string
    createdAt?: DateTimeFilter<"SupportMessage"> | Date | string
    conversation?: XOR<SupportConversationScalarRelationFilter, SupportConversationWhereInput>
  }

  export type SupportMessageOrderByWithRelationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    conversation?: SupportConversationOrderByWithRelationInput
  }

  export type SupportMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupportMessageWhereInput | SupportMessageWhereInput[]
    OR?: SupportMessageWhereInput[]
    NOT?: SupportMessageWhereInput | SupportMessageWhereInput[]
    conversationId?: StringFilter<"SupportMessage"> | string
    role?: StringFilter<"SupportMessage"> | string
    content?: StringFilter<"SupportMessage"> | string
    createdAt?: DateTimeFilter<"SupportMessage"> | Date | string
    conversation?: XOR<SupportConversationScalarRelationFilter, SupportConversationWhereInput>
  }, "id">

  export type SupportMessageOrderByWithAggregationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: SupportMessageCountOrderByAggregateInput
    _max?: SupportMessageMaxOrderByAggregateInput
    _min?: SupportMessageMinOrderByAggregateInput
  }

  export type SupportMessageScalarWhereWithAggregatesInput = {
    AND?: SupportMessageScalarWhereWithAggregatesInput | SupportMessageScalarWhereWithAggregatesInput[]
    OR?: SupportMessageScalarWhereWithAggregatesInput[]
    NOT?: SupportMessageScalarWhereWithAggregatesInput | SupportMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupportMessage"> | string
    conversationId?: StringWithAggregatesFilter<"SupportMessage"> | string
    role?: StringWithAggregatesFilter<"SupportMessage"> | string
    content?: StringWithAggregatesFilter<"SupportMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SupportMessage"> | Date | string
  }

  export type KnowledgeDocumentWhereInput = {
    AND?: KnowledgeDocumentWhereInput | KnowledgeDocumentWhereInput[]
    OR?: KnowledgeDocumentWhereInput[]
    NOT?: KnowledgeDocumentWhereInput | KnowledgeDocumentWhereInput[]
    id?: StringFilter<"KnowledgeDocument"> | string
    courseId?: StringFilter<"KnowledgeDocument"> | string
    type?: StringFilter<"KnowledgeDocument"> | string
    title?: StringFilter<"KnowledgeDocument"> | string
    content?: StringFilter<"KnowledgeDocument"> | string
    createdAt?: DateTimeFilter<"KnowledgeDocument"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type KnowledgeDocumentOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type KnowledgeDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KnowledgeDocumentWhereInput | KnowledgeDocumentWhereInput[]
    OR?: KnowledgeDocumentWhereInput[]
    NOT?: KnowledgeDocumentWhereInput | KnowledgeDocumentWhereInput[]
    courseId?: StringFilter<"KnowledgeDocument"> | string
    type?: StringFilter<"KnowledgeDocument"> | string
    title?: StringFilter<"KnowledgeDocument"> | string
    content?: StringFilter<"KnowledgeDocument"> | string
    createdAt?: DateTimeFilter<"KnowledgeDocument"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type KnowledgeDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: KnowledgeDocumentCountOrderByAggregateInput
    _max?: KnowledgeDocumentMaxOrderByAggregateInput
    _min?: KnowledgeDocumentMinOrderByAggregateInput
  }

  export type KnowledgeDocumentScalarWhereWithAggregatesInput = {
    AND?: KnowledgeDocumentScalarWhereWithAggregatesInput | KnowledgeDocumentScalarWhereWithAggregatesInput[]
    OR?: KnowledgeDocumentScalarWhereWithAggregatesInput[]
    NOT?: KnowledgeDocumentScalarWhereWithAggregatesInput | KnowledgeDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KnowledgeDocument"> | string
    courseId?: StringWithAggregatesFilter<"KnowledgeDocument"> | string
    type?: StringWithAggregatesFilter<"KnowledgeDocument"> | string
    title?: StringWithAggregatesFilter<"KnowledgeDocument"> | string
    content?: StringWithAggregatesFilter<"KnowledgeDocument"> | string
    createdAt?: DateTimeWithAggregatesFilter<"KnowledgeDocument"> | Date | string
  }

  export type CourseAIConfigWhereInput = {
    AND?: CourseAIConfigWhereInput | CourseAIConfigWhereInput[]
    OR?: CourseAIConfigWhereInput[]
    NOT?: CourseAIConfigWhereInput | CourseAIConfigWhereInput[]
    id?: StringFilter<"CourseAIConfig"> | string
    courseId?: StringFilter<"CourseAIConfig"> | string
    systemPrompt?: StringFilter<"CourseAIConfig"> | string
    model?: StringFilter<"CourseAIConfig"> | string
    temperature?: FloatFilter<"CourseAIConfig"> | number
    maxTokens?: IntFilter<"CourseAIConfig"> | number
    createdAt?: DateTimeFilter<"CourseAIConfig"> | Date | string
    updatedAt?: DateTimeFilter<"CourseAIConfig"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type CourseAIConfigOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    systemPrompt?: SortOrder
    model?: SortOrder
    temperature?: SortOrder
    maxTokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type CourseAIConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseId?: string
    AND?: CourseAIConfigWhereInput | CourseAIConfigWhereInput[]
    OR?: CourseAIConfigWhereInput[]
    NOT?: CourseAIConfigWhereInput | CourseAIConfigWhereInput[]
    systemPrompt?: StringFilter<"CourseAIConfig"> | string
    model?: StringFilter<"CourseAIConfig"> | string
    temperature?: FloatFilter<"CourseAIConfig"> | number
    maxTokens?: IntFilter<"CourseAIConfig"> | number
    createdAt?: DateTimeFilter<"CourseAIConfig"> | Date | string
    updatedAt?: DateTimeFilter<"CourseAIConfig"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "courseId">

  export type CourseAIConfigOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    systemPrompt?: SortOrder
    model?: SortOrder
    temperature?: SortOrder
    maxTokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseAIConfigCountOrderByAggregateInput
    _avg?: CourseAIConfigAvgOrderByAggregateInput
    _max?: CourseAIConfigMaxOrderByAggregateInput
    _min?: CourseAIConfigMinOrderByAggregateInput
    _sum?: CourseAIConfigSumOrderByAggregateInput
  }

  export type CourseAIConfigScalarWhereWithAggregatesInput = {
    AND?: CourseAIConfigScalarWhereWithAggregatesInput | CourseAIConfigScalarWhereWithAggregatesInput[]
    OR?: CourseAIConfigScalarWhereWithAggregatesInput[]
    NOT?: CourseAIConfigScalarWhereWithAggregatesInput | CourseAIConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseAIConfig"> | string
    courseId?: StringWithAggregatesFilter<"CourseAIConfig"> | string
    systemPrompt?: StringWithAggregatesFilter<"CourseAIConfig"> | string
    model?: StringWithAggregatesFilter<"CourseAIConfig"> | string
    temperature?: FloatWithAggregatesFilter<"CourseAIConfig"> | number
    maxTokens?: IntWithAggregatesFilter<"CourseAIConfig"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CourseAIConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CourseAIConfig"> | Date | string
  }

  export type SystemSettingWhereInput = {
    AND?: SystemSettingWhereInput | SystemSettingWhereInput[]
    OR?: SystemSettingWhereInput[]
    NOT?: SystemSettingWhereInput | SystemSettingWhereInput[]
    id?: StringFilter<"SystemSetting"> | string
    key?: StringFilter<"SystemSetting"> | string
    value?: StringFilter<"SystemSetting"> | string
    description?: StringFilter<"SystemSetting"> | string
  }

  export type SystemSettingOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
  }

  export type SystemSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: SystemSettingWhereInput | SystemSettingWhereInput[]
    OR?: SystemSettingWhereInput[]
    NOT?: SystemSettingWhereInput | SystemSettingWhereInput[]
    value?: StringFilter<"SystemSetting"> | string
    description?: StringFilter<"SystemSetting"> | string
  }, "id" | "key">

  export type SystemSettingOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    _count?: SystemSettingCountOrderByAggregateInput
    _max?: SystemSettingMaxOrderByAggregateInput
    _min?: SystemSettingMinOrderByAggregateInput
  }

  export type SystemSettingScalarWhereWithAggregatesInput = {
    AND?: SystemSettingScalarWhereWithAggregatesInput | SystemSettingScalarWhereWithAggregatesInput[]
    OR?: SystemSettingScalarWhereWithAggregatesInput[]
    NOT?: SystemSettingScalarWhereWithAggregatesInput | SystemSettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemSetting"> | string
    key?: StringWithAggregatesFilter<"SystemSetting"> | string
    value?: StringWithAggregatesFilter<"SystemSetting"> | string
    description?: StringWithAggregatesFilter<"SystemSetting"> | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    phone: string
    registrationCode: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: OTPCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    exercises?: ExerciseSubmissionCreateNestedManyWithoutUserInput
    supportConvos?: SupportConversationCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    phone: string
    registrationCode: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    exercises?: ExerciseSubmissionUncheckedCreateNestedManyWithoutUserInput
    supportConvos?: SupportConversationUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: OTPUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    exercises?: ExerciseSubmissionUpdateManyWithoutUserNestedInput
    supportConvos?: SupportConversationUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    exercises?: ExerciseSubmissionUncheckedUpdateManyWithoutUserNestedInput
    supportConvos?: SupportConversationUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    phone: string
    registrationCode: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPCreateInput = {
    id?: string
    phone: string
    code: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutOtpsInput
  }

  export type OTPUncheckedCreateInput = {
    id?: string
    phone: string
    code: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
    userId?: string | null
  }

  export type OTPUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutOtpsNestedInput
  }

  export type OTPUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OTPCreateManyInput = {
    id?: string
    phone: string
    code: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
    userId?: string | null
  }

  export type OTPUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseCreateInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    instructor: string
    level?: string
    price?: number
    status?: string
    sessionsCount?: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    exercises?: ExerciseSubmissionCreateNestedManyWithoutCourseInput
    supportConvos?: SupportConversationCreateNestedManyWithoutCourseInput
    knowledgeDocs?: KnowledgeDocumentCreateNestedManyWithoutCourseInput
    aiConfig?: CourseAIConfigCreateNestedOneWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    instructor: string
    level?: string
    price?: number
    status?: string
    sessionsCount?: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    exercises?: ExerciseSubmissionUncheckedCreateNestedManyWithoutCourseInput
    supportConvos?: SupportConversationUncheckedCreateNestedManyWithoutCourseInput
    knowledgeDocs?: KnowledgeDocumentUncheckedCreateNestedManyWithoutCourseInput
    aiConfig?: CourseAIConfigUncheckedCreateNestedOneWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sessionsCount?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    exercises?: ExerciseSubmissionUpdateManyWithoutCourseNestedInput
    supportConvos?: SupportConversationUpdateManyWithoutCourseNestedInput
    knowledgeDocs?: KnowledgeDocumentUpdateManyWithoutCourseNestedInput
    aiConfig?: CourseAIConfigUpdateOneWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sessionsCount?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    exercises?: ExerciseSubmissionUncheckedUpdateManyWithoutCourseNestedInput
    supportConvos?: SupportConversationUncheckedUpdateManyWithoutCourseNestedInput
    knowledgeDocs?: KnowledgeDocumentUncheckedUpdateManyWithoutCourseNestedInput
    aiConfig?: CourseAIConfigUncheckedUpdateOneWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    instructor: string
    level?: string
    price?: number
    status?: string
    sessionsCount?: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sessionsCount?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sessionsCount?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateInput = {
    id?: string
    title: string
    description: string
    order: number
    duration: string
    course: CourseCreateNestedOneWithoutLessonsInput
  }

  export type LessonUncheckedCreateInput = {
    id?: string
    courseId: string
    title: string
    description: string
    order: number
    duration: string
  }

  export type LessonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutLessonsNestedInput
  }

  export type LessonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
  }

  export type LessonCreateManyInput = {
    id?: string
    courseId: string
    title: string
    description: string
    order: number
    duration: string
  }

  export type LessonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
  }

  export type LessonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
  }

  export type EnrollmentCreateInput = {
    id?: string
    progress?: number
    enrolledAt?: Date | string
    paymentAuthority?: string | null
    paymentRefId?: string | null
    paymentStatus?: string
    user: UserCreateNestedOneWithoutEnrollmentsInput
    course: CourseCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateInput = {
    id?: string
    userId: string
    courseId: string
    progress?: number
    enrolledAt?: Date | string
    paymentAuthority?: string | null
    paymentRefId?: string | null
    paymentStatus?: string
  }

  export type EnrollmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentAuthority?: NullableStringFieldUpdateOperationsInput | string | null
    paymentRefId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentAuthority?: NullableStringFieldUpdateOperationsInput | string | null
    paymentRefId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
  }

  export type EnrollmentCreateManyInput = {
    id?: string
    userId: string
    courseId: string
    progress?: number
    enrolledAt?: Date | string
    paymentAuthority?: string | null
    paymentRefId?: string | null
    paymentStatus?: string
  }

  export type EnrollmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentAuthority?: NullableStringFieldUpdateOperationsInput | string | null
    paymentRefId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentAuthority?: NullableStringFieldUpdateOperationsInput | string | null
    paymentRefId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseSubmissionCreateInput = {
    id?: string
    title: string
    audioUrl?: string | null
    duration?: number
    score?: number | null
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutExercisesInput
    course: CourseCreateNestedOneWithoutExercisesInput
    analysis?: ExerciseAnalysisCreateNestedOneWithoutExerciseInput
  }

  export type ExerciseSubmissionUncheckedCreateInput = {
    id?: string
    userId: string
    courseId: string
    title: string
    audioUrl?: string | null
    duration?: number
    score?: number | null
    status?: string
    createdAt?: Date | string
    analysis?: ExerciseAnalysisUncheckedCreateNestedOneWithoutExerciseInput
  }

  export type ExerciseSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutExercisesNestedInput
    course?: CourseUpdateOneRequiredWithoutExercisesNestedInput
    analysis?: ExerciseAnalysisUpdateOneWithoutExerciseNestedInput
  }

  export type ExerciseSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analysis?: ExerciseAnalysisUncheckedUpdateOneWithoutExerciseNestedInput
  }

  export type ExerciseSubmissionCreateManyInput = {
    id?: string
    userId: string
    courseId: string
    title: string
    audioUrl?: string | null
    duration?: number
    score?: number | null
    status?: string
    createdAt?: Date | string
  }

  export type ExerciseSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseAnalysisCreateInput = {
    id?: string
    overallScore: number
    strengthsJson: string
    improvementsJson: string
    detailsJson: string
    aiRecommendation: string
    nextExercise: string
    createdAt?: Date | string
    exercise: ExerciseSubmissionCreateNestedOneWithoutAnalysisInput
  }

  export type ExerciseAnalysisUncheckedCreateInput = {
    id?: string
    exerciseId: string
    overallScore: number
    strengthsJson: string
    improvementsJson: string
    detailsJson: string
    aiRecommendation: string
    nextExercise: string
    createdAt?: Date | string
  }

  export type ExerciseAnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    overallScore?: IntFieldUpdateOperationsInput | number
    strengthsJson?: StringFieldUpdateOperationsInput | string
    improvementsJson?: StringFieldUpdateOperationsInput | string
    detailsJson?: StringFieldUpdateOperationsInput | string
    aiRecommendation?: StringFieldUpdateOperationsInput | string
    nextExercise?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercise?: ExerciseSubmissionUpdateOneRequiredWithoutAnalysisNestedInput
  }

  export type ExerciseAnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    overallScore?: IntFieldUpdateOperationsInput | number
    strengthsJson?: StringFieldUpdateOperationsInput | string
    improvementsJson?: StringFieldUpdateOperationsInput | string
    detailsJson?: StringFieldUpdateOperationsInput | string
    aiRecommendation?: StringFieldUpdateOperationsInput | string
    nextExercise?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseAnalysisCreateManyInput = {
    id?: string
    exerciseId: string
    overallScore: number
    strengthsJson: string
    improvementsJson: string
    detailsJson: string
    aiRecommendation: string
    nextExercise: string
    createdAt?: Date | string
  }

  export type ExerciseAnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    overallScore?: IntFieldUpdateOperationsInput | number
    strengthsJson?: StringFieldUpdateOperationsInput | string
    improvementsJson?: StringFieldUpdateOperationsInput | string
    detailsJson?: StringFieldUpdateOperationsInput | string
    aiRecommendation?: StringFieldUpdateOperationsInput | string
    nextExercise?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseAnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    exerciseId?: StringFieldUpdateOperationsInput | string
    overallScore?: IntFieldUpdateOperationsInput | number
    strengthsJson?: StringFieldUpdateOperationsInput | string
    improvementsJson?: StringFieldUpdateOperationsInput | string
    detailsJson?: StringFieldUpdateOperationsInput | string
    aiRecommendation?: StringFieldUpdateOperationsInput | string
    nextExercise?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportConversationCreateInput = {
    id?: string
    messagesUsed?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSupportConvosInput
    course: CourseCreateNestedOneWithoutSupportConvosInput
    messages?: SupportMessageCreateNestedManyWithoutConversationInput
  }

  export type SupportConversationUncheckedCreateInput = {
    id?: string
    userId: string
    courseId: string
    messagesUsed?: number
    createdAt?: Date | string
    messages?: SupportMessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type SupportConversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messagesUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSupportConvosNestedInput
    course?: CourseUpdateOneRequiredWithoutSupportConvosNestedInput
    messages?: SupportMessageUpdateManyWithoutConversationNestedInput
  }

  export type SupportConversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    messagesUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: SupportMessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type SupportConversationCreateManyInput = {
    id?: string
    userId: string
    courseId: string
    messagesUsed?: number
    createdAt?: Date | string
  }

  export type SupportConversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    messagesUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportConversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    messagesUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportMessageCreateInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    conversation: SupportConversationCreateNestedOneWithoutMessagesInput
  }

  export type SupportMessageUncheckedCreateInput = {
    id?: string
    conversationId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type SupportMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: SupportConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type SupportMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportMessageCreateManyInput = {
    id?: string
    conversationId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type SupportMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeDocumentCreateInput = {
    id?: string
    type: string
    title: string
    content: string
    createdAt?: Date | string
    course: CourseCreateNestedOneWithoutKnowledgeDocsInput
  }

  export type KnowledgeDocumentUncheckedCreateInput = {
    id?: string
    courseId: string
    type: string
    title: string
    content: string
    createdAt?: Date | string
  }

  export type KnowledgeDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutKnowledgeDocsNestedInput
  }

  export type KnowledgeDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeDocumentCreateManyInput = {
    id?: string
    courseId: string
    type: string
    title: string
    content: string
    createdAt?: Date | string
  }

  export type KnowledgeDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseAIConfigCreateInput = {
    id?: string
    systemPrompt: string
    model?: string
    temperature?: number
    maxTokens?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutAiConfigInput
  }

  export type CourseAIConfigUncheckedCreateInput = {
    id?: string
    courseId: string
    systemPrompt: string
    model?: string
    temperature?: number
    maxTokens?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseAIConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    maxTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutAiConfigNestedInput
  }

  export type CourseAIConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    maxTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseAIConfigCreateManyInput = {
    id?: string
    courseId: string
    systemPrompt: string
    model?: string
    temperature?: number
    maxTokens?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseAIConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    maxTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseAIConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    maxTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingCreateInput = {
    id?: string
    key: string
    value: string
    description?: string
  }

  export type SystemSettingUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    description?: string
  }

  export type SystemSettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SystemSettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SystemSettingCreateManyInput = {
    id?: string
    key: string
    value: string
    description?: string
  }

  export type SystemSettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SystemSettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type OTPListRelationFilter = {
    every?: OTPWhereInput
    some?: OTPWhereInput
    none?: OTPWhereInput
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type ExerciseSubmissionListRelationFilter = {
    every?: ExerciseSubmissionWhereInput
    some?: ExerciseSubmissionWhereInput
    none?: ExerciseSubmissionWhereInput
  }

  export type SupportConversationListRelationFilter = {
    every?: SupportConversationWhereInput
    some?: SupportConversationWhereInput
    none?: SupportConversationWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type OTPOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExerciseSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupportConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    registrationCode?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    registrationCode?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    registrationCode?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OTPCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type OTPMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type OTPMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type LessonListRelationFilter = {
    every?: LessonWhereInput
    some?: LessonWhereInput
    none?: LessonWhereInput
  }

  export type KnowledgeDocumentListRelationFilter = {
    every?: KnowledgeDocumentWhereInput
    some?: KnowledgeDocumentWhereInput
    none?: KnowledgeDocumentWhereInput
  }

  export type CourseAIConfigNullableScalarRelationFilter = {
    is?: CourseAIConfigWhereInput | null
    isNot?: CourseAIConfigWhereInput | null
  }

  export type LessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KnowledgeDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    instructor?: SortOrder
    level?: SortOrder
    price?: SortOrder
    status?: SortOrder
    sessionsCount?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    price?: SortOrder
    sessionsCount?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    instructor?: SortOrder
    level?: SortOrder
    price?: SortOrder
    status?: SortOrder
    sessionsCount?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    longDescription?: SortOrder
    instructor?: SortOrder
    level?: SortOrder
    price?: SortOrder
    status?: SortOrder
    sessionsCount?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    price?: SortOrder
    sessionsCount?: SortOrder
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

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type LessonCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    duration?: SortOrder
  }

  export type LessonAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type LessonMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    duration?: SortOrder
  }

  export type LessonMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    duration?: SortOrder
  }

  export type LessonSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EnrollmentUserIdCourseIdCompoundUniqueInput = {
    userId: string
    courseId: string
  }

  export type EnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    progress?: SortOrder
    enrolledAt?: SortOrder
    paymentAuthority?: SortOrder
    paymentRefId?: SortOrder
    paymentStatus?: SortOrder
  }

  export type EnrollmentAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    progress?: SortOrder
    enrolledAt?: SortOrder
    paymentAuthority?: SortOrder
    paymentRefId?: SortOrder
    paymentStatus?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    progress?: SortOrder
    enrolledAt?: SortOrder
    paymentAuthority?: SortOrder
    paymentRefId?: SortOrder
    paymentStatus?: SortOrder
  }

  export type EnrollmentSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ExerciseAnalysisNullableScalarRelationFilter = {
    is?: ExerciseAnalysisWhereInput | null
    isNot?: ExerciseAnalysisWhereInput | null
  }

  export type ExerciseSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    audioUrl?: SortOrder
    duration?: SortOrder
    score?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ExerciseSubmissionAvgOrderByAggregateInput = {
    duration?: SortOrder
    score?: SortOrder
  }

  export type ExerciseSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    audioUrl?: SortOrder
    duration?: SortOrder
    score?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ExerciseSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    title?: SortOrder
    audioUrl?: SortOrder
    duration?: SortOrder
    score?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ExerciseSubmissionSumOrderByAggregateInput = {
    duration?: SortOrder
    score?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ExerciseSubmissionScalarRelationFilter = {
    is?: ExerciseSubmissionWhereInput
    isNot?: ExerciseSubmissionWhereInput
  }

  export type ExerciseAnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    overallScore?: SortOrder
    strengthsJson?: SortOrder
    improvementsJson?: SortOrder
    detailsJson?: SortOrder
    aiRecommendation?: SortOrder
    nextExercise?: SortOrder
    createdAt?: SortOrder
  }

  export type ExerciseAnalysisAvgOrderByAggregateInput = {
    overallScore?: SortOrder
  }

  export type ExerciseAnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    overallScore?: SortOrder
    strengthsJson?: SortOrder
    improvementsJson?: SortOrder
    detailsJson?: SortOrder
    aiRecommendation?: SortOrder
    nextExercise?: SortOrder
    createdAt?: SortOrder
  }

  export type ExerciseAnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    exerciseId?: SortOrder
    overallScore?: SortOrder
    strengthsJson?: SortOrder
    improvementsJson?: SortOrder
    detailsJson?: SortOrder
    aiRecommendation?: SortOrder
    nextExercise?: SortOrder
    createdAt?: SortOrder
  }

  export type ExerciseAnalysisSumOrderByAggregateInput = {
    overallScore?: SortOrder
  }

  export type SupportMessageListRelationFilter = {
    every?: SupportMessageWhereInput
    some?: SupportMessageWhereInput
    none?: SupportMessageWhereInput
  }

  export type SupportMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupportConversationUserIdCourseIdCompoundUniqueInput = {
    userId: string
    courseId: string
  }

  export type SupportConversationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    messagesUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type SupportConversationAvgOrderByAggregateInput = {
    messagesUsed?: SortOrder
  }

  export type SupportConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    messagesUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type SupportConversationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    messagesUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type SupportConversationSumOrderByAggregateInput = {
    messagesUsed?: SortOrder
  }

  export type SupportConversationScalarRelationFilter = {
    is?: SupportConversationWhereInput
    isNot?: SupportConversationWhereInput
  }

  export type SupportMessageCountOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type SupportMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type SupportMessageMinOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type KnowledgeDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type KnowledgeDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type KnowledgeDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
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

  export type CourseAIConfigCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    systemPrompt?: SortOrder
    model?: SortOrder
    temperature?: SortOrder
    maxTokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAIConfigAvgOrderByAggregateInput = {
    temperature?: SortOrder
    maxTokens?: SortOrder
  }

  export type CourseAIConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    systemPrompt?: SortOrder
    model?: SortOrder
    temperature?: SortOrder
    maxTokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAIConfigMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    systemPrompt?: SortOrder
    model?: SortOrder
    temperature?: SortOrder
    maxTokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAIConfigSumOrderByAggregateInput = {
    temperature?: SortOrder
    maxTokens?: SortOrder
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

  export type SystemSettingCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
  }

  export type SystemSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
  }

  export type SystemSettingMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type OTPCreateNestedManyWithoutUserInput = {
    create?: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput> | OTPCreateWithoutUserInput[] | OTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OTPCreateOrConnectWithoutUserInput | OTPCreateOrConnectWithoutUserInput[]
    createMany?: OTPCreateManyUserInputEnvelope
    connect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type ExerciseSubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<ExerciseSubmissionCreateWithoutUserInput, ExerciseSubmissionUncheckedCreateWithoutUserInput> | ExerciseSubmissionCreateWithoutUserInput[] | ExerciseSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExerciseSubmissionCreateOrConnectWithoutUserInput | ExerciseSubmissionCreateOrConnectWithoutUserInput[]
    createMany?: ExerciseSubmissionCreateManyUserInputEnvelope
    connect?: ExerciseSubmissionWhereUniqueInput | ExerciseSubmissionWhereUniqueInput[]
  }

  export type SupportConversationCreateNestedManyWithoutUserInput = {
    create?: XOR<SupportConversationCreateWithoutUserInput, SupportConversationUncheckedCreateWithoutUserInput> | SupportConversationCreateWithoutUserInput[] | SupportConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SupportConversationCreateOrConnectWithoutUserInput | SupportConversationCreateOrConnectWithoutUserInput[]
    createMany?: SupportConversationCreateManyUserInputEnvelope
    connect?: SupportConversationWhereUniqueInput | SupportConversationWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type OTPUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput> | OTPCreateWithoutUserInput[] | OTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OTPCreateOrConnectWithoutUserInput | OTPCreateOrConnectWithoutUserInput[]
    createMany?: OTPCreateManyUserInputEnvelope
    connect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type ExerciseSubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExerciseSubmissionCreateWithoutUserInput, ExerciseSubmissionUncheckedCreateWithoutUserInput> | ExerciseSubmissionCreateWithoutUserInput[] | ExerciseSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExerciseSubmissionCreateOrConnectWithoutUserInput | ExerciseSubmissionCreateOrConnectWithoutUserInput[]
    createMany?: ExerciseSubmissionCreateManyUserInputEnvelope
    connect?: ExerciseSubmissionWhereUniqueInput | ExerciseSubmissionWhereUniqueInput[]
  }

  export type SupportConversationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SupportConversationCreateWithoutUserInput, SupportConversationUncheckedCreateWithoutUserInput> | SupportConversationCreateWithoutUserInput[] | SupportConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SupportConversationCreateOrConnectWithoutUserInput | SupportConversationCreateOrConnectWithoutUserInput[]
    createMany?: SupportConversationCreateManyUserInputEnvelope
    connect?: SupportConversationWhereUniqueInput | SupportConversationWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OTPUpdateManyWithoutUserNestedInput = {
    create?: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput> | OTPCreateWithoutUserInput[] | OTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OTPCreateOrConnectWithoutUserInput | OTPCreateOrConnectWithoutUserInput[]
    upsert?: OTPUpsertWithWhereUniqueWithoutUserInput | OTPUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OTPCreateManyUserInputEnvelope
    set?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    disconnect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    delete?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    connect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    update?: OTPUpdateWithWhereUniqueWithoutUserInput | OTPUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OTPUpdateManyWithWhereWithoutUserInput | OTPUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OTPScalarWhereInput | OTPScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutUserInput | EnrollmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutUserInput | EnrollmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutUserInput | EnrollmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type ExerciseSubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExerciseSubmissionCreateWithoutUserInput, ExerciseSubmissionUncheckedCreateWithoutUserInput> | ExerciseSubmissionCreateWithoutUserInput[] | ExerciseSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExerciseSubmissionCreateOrConnectWithoutUserInput | ExerciseSubmissionCreateOrConnectWithoutUserInput[]
    upsert?: ExerciseSubmissionUpsertWithWhereUniqueWithoutUserInput | ExerciseSubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExerciseSubmissionCreateManyUserInputEnvelope
    set?: ExerciseSubmissionWhereUniqueInput | ExerciseSubmissionWhereUniqueInput[]
    disconnect?: ExerciseSubmissionWhereUniqueInput | ExerciseSubmissionWhereUniqueInput[]
    delete?: ExerciseSubmissionWhereUniqueInput | ExerciseSubmissionWhereUniqueInput[]
    connect?: ExerciseSubmissionWhereUniqueInput | ExerciseSubmissionWhereUniqueInput[]
    update?: ExerciseSubmissionUpdateWithWhereUniqueWithoutUserInput | ExerciseSubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExerciseSubmissionUpdateManyWithWhereWithoutUserInput | ExerciseSubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExerciseSubmissionScalarWhereInput | ExerciseSubmissionScalarWhereInput[]
  }

  export type SupportConversationUpdateManyWithoutUserNestedInput = {
    create?: XOR<SupportConversationCreateWithoutUserInput, SupportConversationUncheckedCreateWithoutUserInput> | SupportConversationCreateWithoutUserInput[] | SupportConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SupportConversationCreateOrConnectWithoutUserInput | SupportConversationCreateOrConnectWithoutUserInput[]
    upsert?: SupportConversationUpsertWithWhereUniqueWithoutUserInput | SupportConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SupportConversationCreateManyUserInputEnvelope
    set?: SupportConversationWhereUniqueInput | SupportConversationWhereUniqueInput[]
    disconnect?: SupportConversationWhereUniqueInput | SupportConversationWhereUniqueInput[]
    delete?: SupportConversationWhereUniqueInput | SupportConversationWhereUniqueInput[]
    connect?: SupportConversationWhereUniqueInput | SupportConversationWhereUniqueInput[]
    update?: SupportConversationUpdateWithWhereUniqueWithoutUserInput | SupportConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SupportConversationUpdateManyWithWhereWithoutUserInput | SupportConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SupportConversationScalarWhereInput | SupportConversationScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type OTPUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput> | OTPCreateWithoutUserInput[] | OTPUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OTPCreateOrConnectWithoutUserInput | OTPCreateOrConnectWithoutUserInput[]
    upsert?: OTPUpsertWithWhereUniqueWithoutUserInput | OTPUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OTPCreateManyUserInputEnvelope
    set?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    disconnect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    delete?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    connect?: OTPWhereUniqueInput | OTPWhereUniqueInput[]
    update?: OTPUpdateWithWhereUniqueWithoutUserInput | OTPUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OTPUpdateManyWithWhereWithoutUserInput | OTPUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OTPScalarWhereInput | OTPScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutUserInput | EnrollmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutUserInput | EnrollmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutUserInput | EnrollmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type ExerciseSubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExerciseSubmissionCreateWithoutUserInput, ExerciseSubmissionUncheckedCreateWithoutUserInput> | ExerciseSubmissionCreateWithoutUserInput[] | ExerciseSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExerciseSubmissionCreateOrConnectWithoutUserInput | ExerciseSubmissionCreateOrConnectWithoutUserInput[]
    upsert?: ExerciseSubmissionUpsertWithWhereUniqueWithoutUserInput | ExerciseSubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExerciseSubmissionCreateManyUserInputEnvelope
    set?: ExerciseSubmissionWhereUniqueInput | ExerciseSubmissionWhereUniqueInput[]
    disconnect?: ExerciseSubmissionWhereUniqueInput | ExerciseSubmissionWhereUniqueInput[]
    delete?: ExerciseSubmissionWhereUniqueInput | ExerciseSubmissionWhereUniqueInput[]
    connect?: ExerciseSubmissionWhereUniqueInput | ExerciseSubmissionWhereUniqueInput[]
    update?: ExerciseSubmissionUpdateWithWhereUniqueWithoutUserInput | ExerciseSubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExerciseSubmissionUpdateManyWithWhereWithoutUserInput | ExerciseSubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExerciseSubmissionScalarWhereInput | ExerciseSubmissionScalarWhereInput[]
  }

  export type SupportConversationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SupportConversationCreateWithoutUserInput, SupportConversationUncheckedCreateWithoutUserInput> | SupportConversationCreateWithoutUserInput[] | SupportConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SupportConversationCreateOrConnectWithoutUserInput | SupportConversationCreateOrConnectWithoutUserInput[]
    upsert?: SupportConversationUpsertWithWhereUniqueWithoutUserInput | SupportConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SupportConversationCreateManyUserInputEnvelope
    set?: SupportConversationWhereUniqueInput | SupportConversationWhereUniqueInput[]
    disconnect?: SupportConversationWhereUniqueInput | SupportConversationWhereUniqueInput[]
    delete?: SupportConversationWhereUniqueInput | SupportConversationWhereUniqueInput[]
    connect?: SupportConversationWhereUniqueInput | SupportConversationWhereUniqueInput[]
    update?: SupportConversationUpdateWithWhereUniqueWithoutUserInput | SupportConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SupportConversationUpdateManyWithWhereWithoutUserInput | SupportConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SupportConversationScalarWhereInput | SupportConversationScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOtpsInput = {
    create?: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutOtpsNestedInput = {
    create?: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpsInput
    upsert?: UserUpsertWithoutOtpsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOtpsInput, UserUpdateWithoutOtpsInput>, UserUncheckedUpdateWithoutOtpsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LessonCreateNestedManyWithoutCourseInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type ExerciseSubmissionCreateNestedManyWithoutCourseInput = {
    create?: XOR<ExerciseSubmissionCreateWithoutCourseInput, ExerciseSubmissionUncheckedCreateWithoutCourseInput> | ExerciseSubmissionCreateWithoutCourseInput[] | ExerciseSubmissionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ExerciseSubmissionCreateOrConnectWithoutCourseInput | ExerciseSubmissionCreateOrConnectWithoutCourseInput[]
    createMany?: ExerciseSubmissionCreateManyCourseInputEnvelope
    connect?: ExerciseSubmissionWhereUniqueInput | ExerciseSubmissionWhereUniqueInput[]
  }

  export type SupportConversationCreateNestedManyWithoutCourseInput = {
    create?: XOR<SupportConversationCreateWithoutCourseInput, SupportConversationUncheckedCreateWithoutCourseInput> | SupportConversationCreateWithoutCourseInput[] | SupportConversationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SupportConversationCreateOrConnectWithoutCourseInput | SupportConversationCreateOrConnectWithoutCourseInput[]
    createMany?: SupportConversationCreateManyCourseInputEnvelope
    connect?: SupportConversationWhereUniqueInput | SupportConversationWhereUniqueInput[]
  }

  export type KnowledgeDocumentCreateNestedManyWithoutCourseInput = {
    create?: XOR<KnowledgeDocumentCreateWithoutCourseInput, KnowledgeDocumentUncheckedCreateWithoutCourseInput> | KnowledgeDocumentCreateWithoutCourseInput[] | KnowledgeDocumentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: KnowledgeDocumentCreateOrConnectWithoutCourseInput | KnowledgeDocumentCreateOrConnectWithoutCourseInput[]
    createMany?: KnowledgeDocumentCreateManyCourseInputEnvelope
    connect?: KnowledgeDocumentWhereUniqueInput | KnowledgeDocumentWhereUniqueInput[]
  }

  export type CourseAIConfigCreateNestedOneWithoutCourseInput = {
    create?: XOR<CourseAIConfigCreateWithoutCourseInput, CourseAIConfigUncheckedCreateWithoutCourseInput>
    connectOrCreate?: CourseAIConfigCreateOrConnectWithoutCourseInput
    connect?: CourseAIConfigWhereUniqueInput
  }

  export type LessonUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type ExerciseSubmissionUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<ExerciseSubmissionCreateWithoutCourseInput, ExerciseSubmissionUncheckedCreateWithoutCourseInput> | ExerciseSubmissionCreateWithoutCourseInput[] | ExerciseSubmissionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ExerciseSubmissionCreateOrConnectWithoutCourseInput | ExerciseSubmissionCreateOrConnectWithoutCourseInput[]
    createMany?: ExerciseSubmissionCreateManyCourseInputEnvelope
    connect?: ExerciseSubmissionWhereUniqueInput | ExerciseSubmissionWhereUniqueInput[]
  }

  export type SupportConversationUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<SupportConversationCreateWithoutCourseInput, SupportConversationUncheckedCreateWithoutCourseInput> | SupportConversationCreateWithoutCourseInput[] | SupportConversationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SupportConversationCreateOrConnectWithoutCourseInput | SupportConversationCreateOrConnectWithoutCourseInput[]
    createMany?: SupportConversationCreateManyCourseInputEnvelope
    connect?: SupportConversationWhereUniqueInput | SupportConversationWhereUniqueInput[]
  }

  export type KnowledgeDocumentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<KnowledgeDocumentCreateWithoutCourseInput, KnowledgeDocumentUncheckedCreateWithoutCourseInput> | KnowledgeDocumentCreateWithoutCourseInput[] | KnowledgeDocumentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: KnowledgeDocumentCreateOrConnectWithoutCourseInput | KnowledgeDocumentCreateOrConnectWithoutCourseInput[]
    createMany?: KnowledgeDocumentCreateManyCourseInputEnvelope
    connect?: KnowledgeDocumentWhereUniqueInput | KnowledgeDocumentWhereUniqueInput[]
  }

  export type CourseAIConfigUncheckedCreateNestedOneWithoutCourseInput = {
    create?: XOR<CourseAIConfigCreateWithoutCourseInput, CourseAIConfigUncheckedCreateWithoutCourseInput>
    connectOrCreate?: CourseAIConfigCreateOrConnectWithoutCourseInput
    connect?: CourseAIConfigWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LessonUpdateManyWithoutCourseNestedInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutCourseInput | LessonUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutCourseInput | LessonUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutCourseInput | LessonUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseInput | EnrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseInput | EnrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseInput | EnrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type ExerciseSubmissionUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ExerciseSubmissionCreateWithoutCourseInput, ExerciseSubmissionUncheckedCreateWithoutCourseInput> | ExerciseSubmissionCreateWithoutCourseInput[] | ExerciseSubmissionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ExerciseSubmissionCreateOrConnectWithoutCourseInput | ExerciseSubmissionCreateOrConnectWithoutCourseInput[]
    upsert?: ExerciseSubmissionUpsertWithWhereUniqueWithoutCourseInput | ExerciseSubmissionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ExerciseSubmissionCreateManyCourseInputEnvelope
    set?: ExerciseSubmissionWhereUniqueInput | ExerciseSubmissionWhereUniqueInput[]
    disconnect?: ExerciseSubmissionWhereUniqueInput | ExerciseSubmissionWhereUniqueInput[]
    delete?: ExerciseSubmissionWhereUniqueInput | ExerciseSubmissionWhereUniqueInput[]
    connect?: ExerciseSubmissionWhereUniqueInput | ExerciseSubmissionWhereUniqueInput[]
    update?: ExerciseSubmissionUpdateWithWhereUniqueWithoutCourseInput | ExerciseSubmissionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ExerciseSubmissionUpdateManyWithWhereWithoutCourseInput | ExerciseSubmissionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ExerciseSubmissionScalarWhereInput | ExerciseSubmissionScalarWhereInput[]
  }

  export type SupportConversationUpdateManyWithoutCourseNestedInput = {
    create?: XOR<SupportConversationCreateWithoutCourseInput, SupportConversationUncheckedCreateWithoutCourseInput> | SupportConversationCreateWithoutCourseInput[] | SupportConversationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SupportConversationCreateOrConnectWithoutCourseInput | SupportConversationCreateOrConnectWithoutCourseInput[]
    upsert?: SupportConversationUpsertWithWhereUniqueWithoutCourseInput | SupportConversationUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: SupportConversationCreateManyCourseInputEnvelope
    set?: SupportConversationWhereUniqueInput | SupportConversationWhereUniqueInput[]
    disconnect?: SupportConversationWhereUniqueInput | SupportConversationWhereUniqueInput[]
    delete?: SupportConversationWhereUniqueInput | SupportConversationWhereUniqueInput[]
    connect?: SupportConversationWhereUniqueInput | SupportConversationWhereUniqueInput[]
    update?: SupportConversationUpdateWithWhereUniqueWithoutCourseInput | SupportConversationUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: SupportConversationUpdateManyWithWhereWithoutCourseInput | SupportConversationUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: SupportConversationScalarWhereInput | SupportConversationScalarWhereInput[]
  }

  export type KnowledgeDocumentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<KnowledgeDocumentCreateWithoutCourseInput, KnowledgeDocumentUncheckedCreateWithoutCourseInput> | KnowledgeDocumentCreateWithoutCourseInput[] | KnowledgeDocumentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: KnowledgeDocumentCreateOrConnectWithoutCourseInput | KnowledgeDocumentCreateOrConnectWithoutCourseInput[]
    upsert?: KnowledgeDocumentUpsertWithWhereUniqueWithoutCourseInput | KnowledgeDocumentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: KnowledgeDocumentCreateManyCourseInputEnvelope
    set?: KnowledgeDocumentWhereUniqueInput | KnowledgeDocumentWhereUniqueInput[]
    disconnect?: KnowledgeDocumentWhereUniqueInput | KnowledgeDocumentWhereUniqueInput[]
    delete?: KnowledgeDocumentWhereUniqueInput | KnowledgeDocumentWhereUniqueInput[]
    connect?: KnowledgeDocumentWhereUniqueInput | KnowledgeDocumentWhereUniqueInput[]
    update?: KnowledgeDocumentUpdateWithWhereUniqueWithoutCourseInput | KnowledgeDocumentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: KnowledgeDocumentUpdateManyWithWhereWithoutCourseInput | KnowledgeDocumentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: KnowledgeDocumentScalarWhereInput | KnowledgeDocumentScalarWhereInput[]
  }

  export type CourseAIConfigUpdateOneWithoutCourseNestedInput = {
    create?: XOR<CourseAIConfigCreateWithoutCourseInput, CourseAIConfigUncheckedCreateWithoutCourseInput>
    connectOrCreate?: CourseAIConfigCreateOrConnectWithoutCourseInput
    upsert?: CourseAIConfigUpsertWithoutCourseInput
    disconnect?: CourseAIConfigWhereInput | boolean
    delete?: CourseAIConfigWhereInput | boolean
    connect?: CourseAIConfigWhereUniqueInput
    update?: XOR<XOR<CourseAIConfigUpdateToOneWithWhereWithoutCourseInput, CourseAIConfigUpdateWithoutCourseInput>, CourseAIConfigUncheckedUpdateWithoutCourseInput>
  }

  export type LessonUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput> | LessonCreateWithoutCourseInput[] | LessonUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutCourseInput | LessonCreateOrConnectWithoutCourseInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutCourseInput | LessonUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: LessonCreateManyCourseInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutCourseInput | LessonUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutCourseInput | LessonUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseInput | EnrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseInput | EnrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseInput | EnrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type ExerciseSubmissionUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ExerciseSubmissionCreateWithoutCourseInput, ExerciseSubmissionUncheckedCreateWithoutCourseInput> | ExerciseSubmissionCreateWithoutCourseInput[] | ExerciseSubmissionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ExerciseSubmissionCreateOrConnectWithoutCourseInput | ExerciseSubmissionCreateOrConnectWithoutCourseInput[]
    upsert?: ExerciseSubmissionUpsertWithWhereUniqueWithoutCourseInput | ExerciseSubmissionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ExerciseSubmissionCreateManyCourseInputEnvelope
    set?: ExerciseSubmissionWhereUniqueInput | ExerciseSubmissionWhereUniqueInput[]
    disconnect?: ExerciseSubmissionWhereUniqueInput | ExerciseSubmissionWhereUniqueInput[]
    delete?: ExerciseSubmissionWhereUniqueInput | ExerciseSubmissionWhereUniqueInput[]
    connect?: ExerciseSubmissionWhereUniqueInput | ExerciseSubmissionWhereUniqueInput[]
    update?: ExerciseSubmissionUpdateWithWhereUniqueWithoutCourseInput | ExerciseSubmissionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ExerciseSubmissionUpdateManyWithWhereWithoutCourseInput | ExerciseSubmissionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ExerciseSubmissionScalarWhereInput | ExerciseSubmissionScalarWhereInput[]
  }

  export type SupportConversationUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<SupportConversationCreateWithoutCourseInput, SupportConversationUncheckedCreateWithoutCourseInput> | SupportConversationCreateWithoutCourseInput[] | SupportConversationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SupportConversationCreateOrConnectWithoutCourseInput | SupportConversationCreateOrConnectWithoutCourseInput[]
    upsert?: SupportConversationUpsertWithWhereUniqueWithoutCourseInput | SupportConversationUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: SupportConversationCreateManyCourseInputEnvelope
    set?: SupportConversationWhereUniqueInput | SupportConversationWhereUniqueInput[]
    disconnect?: SupportConversationWhereUniqueInput | SupportConversationWhereUniqueInput[]
    delete?: SupportConversationWhereUniqueInput | SupportConversationWhereUniqueInput[]
    connect?: SupportConversationWhereUniqueInput | SupportConversationWhereUniqueInput[]
    update?: SupportConversationUpdateWithWhereUniqueWithoutCourseInput | SupportConversationUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: SupportConversationUpdateManyWithWhereWithoutCourseInput | SupportConversationUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: SupportConversationScalarWhereInput | SupportConversationScalarWhereInput[]
  }

  export type KnowledgeDocumentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<KnowledgeDocumentCreateWithoutCourseInput, KnowledgeDocumentUncheckedCreateWithoutCourseInput> | KnowledgeDocumentCreateWithoutCourseInput[] | KnowledgeDocumentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: KnowledgeDocumentCreateOrConnectWithoutCourseInput | KnowledgeDocumentCreateOrConnectWithoutCourseInput[]
    upsert?: KnowledgeDocumentUpsertWithWhereUniqueWithoutCourseInput | KnowledgeDocumentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: KnowledgeDocumentCreateManyCourseInputEnvelope
    set?: KnowledgeDocumentWhereUniqueInput | KnowledgeDocumentWhereUniqueInput[]
    disconnect?: KnowledgeDocumentWhereUniqueInput | KnowledgeDocumentWhereUniqueInput[]
    delete?: KnowledgeDocumentWhereUniqueInput | KnowledgeDocumentWhereUniqueInput[]
    connect?: KnowledgeDocumentWhereUniqueInput | KnowledgeDocumentWhereUniqueInput[]
    update?: KnowledgeDocumentUpdateWithWhereUniqueWithoutCourseInput | KnowledgeDocumentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: KnowledgeDocumentUpdateManyWithWhereWithoutCourseInput | KnowledgeDocumentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: KnowledgeDocumentScalarWhereInput | KnowledgeDocumentScalarWhereInput[]
  }

  export type CourseAIConfigUncheckedUpdateOneWithoutCourseNestedInput = {
    create?: XOR<CourseAIConfigCreateWithoutCourseInput, CourseAIConfigUncheckedCreateWithoutCourseInput>
    connectOrCreate?: CourseAIConfigCreateOrConnectWithoutCourseInput
    upsert?: CourseAIConfigUpsertWithoutCourseInput
    disconnect?: CourseAIConfigWhereInput | boolean
    delete?: CourseAIConfigWhereInput | boolean
    connect?: CourseAIConfigWhereUniqueInput
    update?: XOR<XOR<CourseAIConfigUpdateToOneWithWhereWithoutCourseInput, CourseAIConfigUpdateWithoutCourseInput>, CourseAIConfigUncheckedUpdateWithoutCourseInput>
  }

  export type CourseCreateNestedOneWithoutLessonsInput = {
    create?: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutLessonsInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutLessonsInput
    upsert?: CourseUpsertWithoutLessonsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutLessonsInput, CourseUpdateWithoutLessonsInput>, CourseUncheckedUpdateWithoutLessonsInput>
  }

  export type UserCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentsInput
    connect?: CourseWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    upsert?: UserUpsertWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnrollmentsInput, UserUpdateWithoutEnrollmentsInput>, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type CourseUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentsInput
    upsert?: CourseUpsertWithoutEnrollmentsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutEnrollmentsInput, CourseUpdateWithoutEnrollmentsInput>, CourseUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserCreateNestedOneWithoutExercisesInput = {
    create?: XOR<UserCreateWithoutExercisesInput, UserUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExercisesInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutExercisesInput = {
    create?: XOR<CourseCreateWithoutExercisesInput, CourseUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutExercisesInput
    connect?: CourseWhereUniqueInput
  }

  export type ExerciseAnalysisCreateNestedOneWithoutExerciseInput = {
    create?: XOR<ExerciseAnalysisCreateWithoutExerciseInput, ExerciseAnalysisUncheckedCreateWithoutExerciseInput>
    connectOrCreate?: ExerciseAnalysisCreateOrConnectWithoutExerciseInput
    connect?: ExerciseAnalysisWhereUniqueInput
  }

  export type ExerciseAnalysisUncheckedCreateNestedOneWithoutExerciseInput = {
    create?: XOR<ExerciseAnalysisCreateWithoutExerciseInput, ExerciseAnalysisUncheckedCreateWithoutExerciseInput>
    connectOrCreate?: ExerciseAnalysisCreateOrConnectWithoutExerciseInput
    connect?: ExerciseAnalysisWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<UserCreateWithoutExercisesInput, UserUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExercisesInput
    upsert?: UserUpsertWithoutExercisesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExercisesInput, UserUpdateWithoutExercisesInput>, UserUncheckedUpdateWithoutExercisesInput>
  }

  export type CourseUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<CourseCreateWithoutExercisesInput, CourseUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutExercisesInput
    upsert?: CourseUpsertWithoutExercisesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutExercisesInput, CourseUpdateWithoutExercisesInput>, CourseUncheckedUpdateWithoutExercisesInput>
  }

  export type ExerciseAnalysisUpdateOneWithoutExerciseNestedInput = {
    create?: XOR<ExerciseAnalysisCreateWithoutExerciseInput, ExerciseAnalysisUncheckedCreateWithoutExerciseInput>
    connectOrCreate?: ExerciseAnalysisCreateOrConnectWithoutExerciseInput
    upsert?: ExerciseAnalysisUpsertWithoutExerciseInput
    disconnect?: ExerciseAnalysisWhereInput | boolean
    delete?: ExerciseAnalysisWhereInput | boolean
    connect?: ExerciseAnalysisWhereUniqueInput
    update?: XOR<XOR<ExerciseAnalysisUpdateToOneWithWhereWithoutExerciseInput, ExerciseAnalysisUpdateWithoutExerciseInput>, ExerciseAnalysisUncheckedUpdateWithoutExerciseInput>
  }

  export type ExerciseAnalysisUncheckedUpdateOneWithoutExerciseNestedInput = {
    create?: XOR<ExerciseAnalysisCreateWithoutExerciseInput, ExerciseAnalysisUncheckedCreateWithoutExerciseInput>
    connectOrCreate?: ExerciseAnalysisCreateOrConnectWithoutExerciseInput
    upsert?: ExerciseAnalysisUpsertWithoutExerciseInput
    disconnect?: ExerciseAnalysisWhereInput | boolean
    delete?: ExerciseAnalysisWhereInput | boolean
    connect?: ExerciseAnalysisWhereUniqueInput
    update?: XOR<XOR<ExerciseAnalysisUpdateToOneWithWhereWithoutExerciseInput, ExerciseAnalysisUpdateWithoutExerciseInput>, ExerciseAnalysisUncheckedUpdateWithoutExerciseInput>
  }

  export type ExerciseSubmissionCreateNestedOneWithoutAnalysisInput = {
    create?: XOR<ExerciseSubmissionCreateWithoutAnalysisInput, ExerciseSubmissionUncheckedCreateWithoutAnalysisInput>
    connectOrCreate?: ExerciseSubmissionCreateOrConnectWithoutAnalysisInput
    connect?: ExerciseSubmissionWhereUniqueInput
  }

  export type ExerciseSubmissionUpdateOneRequiredWithoutAnalysisNestedInput = {
    create?: XOR<ExerciseSubmissionCreateWithoutAnalysisInput, ExerciseSubmissionUncheckedCreateWithoutAnalysisInput>
    connectOrCreate?: ExerciseSubmissionCreateOrConnectWithoutAnalysisInput
    upsert?: ExerciseSubmissionUpsertWithoutAnalysisInput
    connect?: ExerciseSubmissionWhereUniqueInput
    update?: XOR<XOR<ExerciseSubmissionUpdateToOneWithWhereWithoutAnalysisInput, ExerciseSubmissionUpdateWithoutAnalysisInput>, ExerciseSubmissionUncheckedUpdateWithoutAnalysisInput>
  }

  export type UserCreateNestedOneWithoutSupportConvosInput = {
    create?: XOR<UserCreateWithoutSupportConvosInput, UserUncheckedCreateWithoutSupportConvosInput>
    connectOrCreate?: UserCreateOrConnectWithoutSupportConvosInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutSupportConvosInput = {
    create?: XOR<CourseCreateWithoutSupportConvosInput, CourseUncheckedCreateWithoutSupportConvosInput>
    connectOrCreate?: CourseCreateOrConnectWithoutSupportConvosInput
    connect?: CourseWhereUniqueInput
  }

  export type SupportMessageCreateNestedManyWithoutConversationInput = {
    create?: XOR<SupportMessageCreateWithoutConversationInput, SupportMessageUncheckedCreateWithoutConversationInput> | SupportMessageCreateWithoutConversationInput[] | SupportMessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: SupportMessageCreateOrConnectWithoutConversationInput | SupportMessageCreateOrConnectWithoutConversationInput[]
    createMany?: SupportMessageCreateManyConversationInputEnvelope
    connect?: SupportMessageWhereUniqueInput | SupportMessageWhereUniqueInput[]
  }

  export type SupportMessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<SupportMessageCreateWithoutConversationInput, SupportMessageUncheckedCreateWithoutConversationInput> | SupportMessageCreateWithoutConversationInput[] | SupportMessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: SupportMessageCreateOrConnectWithoutConversationInput | SupportMessageCreateOrConnectWithoutConversationInput[]
    createMany?: SupportMessageCreateManyConversationInputEnvelope
    connect?: SupportMessageWhereUniqueInput | SupportMessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSupportConvosNestedInput = {
    create?: XOR<UserCreateWithoutSupportConvosInput, UserUncheckedCreateWithoutSupportConvosInput>
    connectOrCreate?: UserCreateOrConnectWithoutSupportConvosInput
    upsert?: UserUpsertWithoutSupportConvosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSupportConvosInput, UserUpdateWithoutSupportConvosInput>, UserUncheckedUpdateWithoutSupportConvosInput>
  }

  export type CourseUpdateOneRequiredWithoutSupportConvosNestedInput = {
    create?: XOR<CourseCreateWithoutSupportConvosInput, CourseUncheckedCreateWithoutSupportConvosInput>
    connectOrCreate?: CourseCreateOrConnectWithoutSupportConvosInput
    upsert?: CourseUpsertWithoutSupportConvosInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutSupportConvosInput, CourseUpdateWithoutSupportConvosInput>, CourseUncheckedUpdateWithoutSupportConvosInput>
  }

  export type SupportMessageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<SupportMessageCreateWithoutConversationInput, SupportMessageUncheckedCreateWithoutConversationInput> | SupportMessageCreateWithoutConversationInput[] | SupportMessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: SupportMessageCreateOrConnectWithoutConversationInput | SupportMessageCreateOrConnectWithoutConversationInput[]
    upsert?: SupportMessageUpsertWithWhereUniqueWithoutConversationInput | SupportMessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: SupportMessageCreateManyConversationInputEnvelope
    set?: SupportMessageWhereUniqueInput | SupportMessageWhereUniqueInput[]
    disconnect?: SupportMessageWhereUniqueInput | SupportMessageWhereUniqueInput[]
    delete?: SupportMessageWhereUniqueInput | SupportMessageWhereUniqueInput[]
    connect?: SupportMessageWhereUniqueInput | SupportMessageWhereUniqueInput[]
    update?: SupportMessageUpdateWithWhereUniqueWithoutConversationInput | SupportMessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: SupportMessageUpdateManyWithWhereWithoutConversationInput | SupportMessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: SupportMessageScalarWhereInput | SupportMessageScalarWhereInput[]
  }

  export type SupportMessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<SupportMessageCreateWithoutConversationInput, SupportMessageUncheckedCreateWithoutConversationInput> | SupportMessageCreateWithoutConversationInput[] | SupportMessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: SupportMessageCreateOrConnectWithoutConversationInput | SupportMessageCreateOrConnectWithoutConversationInput[]
    upsert?: SupportMessageUpsertWithWhereUniqueWithoutConversationInput | SupportMessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: SupportMessageCreateManyConversationInputEnvelope
    set?: SupportMessageWhereUniqueInput | SupportMessageWhereUniqueInput[]
    disconnect?: SupportMessageWhereUniqueInput | SupportMessageWhereUniqueInput[]
    delete?: SupportMessageWhereUniqueInput | SupportMessageWhereUniqueInput[]
    connect?: SupportMessageWhereUniqueInput | SupportMessageWhereUniqueInput[]
    update?: SupportMessageUpdateWithWhereUniqueWithoutConversationInput | SupportMessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: SupportMessageUpdateManyWithWhereWithoutConversationInput | SupportMessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: SupportMessageScalarWhereInput | SupportMessageScalarWhereInput[]
  }

  export type SupportConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<SupportConversationCreateWithoutMessagesInput, SupportConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: SupportConversationCreateOrConnectWithoutMessagesInput
    connect?: SupportConversationWhereUniqueInput
  }

  export type SupportConversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<SupportConversationCreateWithoutMessagesInput, SupportConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: SupportConversationCreateOrConnectWithoutMessagesInput
    upsert?: SupportConversationUpsertWithoutMessagesInput
    connect?: SupportConversationWhereUniqueInput
    update?: XOR<XOR<SupportConversationUpdateToOneWithWhereWithoutMessagesInput, SupportConversationUpdateWithoutMessagesInput>, SupportConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type CourseCreateNestedOneWithoutKnowledgeDocsInput = {
    create?: XOR<CourseCreateWithoutKnowledgeDocsInput, CourseUncheckedCreateWithoutKnowledgeDocsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutKnowledgeDocsInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutKnowledgeDocsNestedInput = {
    create?: XOR<CourseCreateWithoutKnowledgeDocsInput, CourseUncheckedCreateWithoutKnowledgeDocsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutKnowledgeDocsInput
    upsert?: CourseUpsertWithoutKnowledgeDocsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutKnowledgeDocsInput, CourseUpdateWithoutKnowledgeDocsInput>, CourseUncheckedUpdateWithoutKnowledgeDocsInput>
  }

  export type CourseCreateNestedOneWithoutAiConfigInput = {
    create?: XOR<CourseCreateWithoutAiConfigInput, CourseUncheckedCreateWithoutAiConfigInput>
    connectOrCreate?: CourseCreateOrConnectWithoutAiConfigInput
    connect?: CourseWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseUpdateOneRequiredWithoutAiConfigNestedInput = {
    create?: XOR<CourseCreateWithoutAiConfigInput, CourseUncheckedCreateWithoutAiConfigInput>
    connectOrCreate?: CourseCreateOrConnectWithoutAiConfigInput
    upsert?: CourseUpsertWithoutAiConfigInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutAiConfigInput, CourseUpdateWithoutAiConfigInput>, CourseUncheckedUpdateWithoutAiConfigInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type OTPCreateWithoutUserInput = {
    id?: string
    phone: string
    code: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type OTPUncheckedCreateWithoutUserInput = {
    id?: string
    phone: string
    code: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type OTPCreateOrConnectWithoutUserInput = {
    where: OTPWhereUniqueInput
    create: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput>
  }

  export type OTPCreateManyUserInputEnvelope = {
    data: OTPCreateManyUserInput | OTPCreateManyUserInput[]
  }

  export type EnrollmentCreateWithoutUserInput = {
    id?: string
    progress?: number
    enrolledAt?: Date | string
    paymentAuthority?: string | null
    paymentRefId?: string | null
    paymentStatus?: string
    course: CourseCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutUserInput = {
    id?: string
    courseId: string
    progress?: number
    enrolledAt?: Date | string
    paymentAuthority?: string | null
    paymentRefId?: string | null
    paymentStatus?: string
  }

  export type EnrollmentCreateOrConnectWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentCreateManyUserInputEnvelope = {
    data: EnrollmentCreateManyUserInput | EnrollmentCreateManyUserInput[]
  }

  export type ExerciseSubmissionCreateWithoutUserInput = {
    id?: string
    title: string
    audioUrl?: string | null
    duration?: number
    score?: number | null
    status?: string
    createdAt?: Date | string
    course: CourseCreateNestedOneWithoutExercisesInput
    analysis?: ExerciseAnalysisCreateNestedOneWithoutExerciseInput
  }

  export type ExerciseSubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    courseId: string
    title: string
    audioUrl?: string | null
    duration?: number
    score?: number | null
    status?: string
    createdAt?: Date | string
    analysis?: ExerciseAnalysisUncheckedCreateNestedOneWithoutExerciseInput
  }

  export type ExerciseSubmissionCreateOrConnectWithoutUserInput = {
    where: ExerciseSubmissionWhereUniqueInput
    create: XOR<ExerciseSubmissionCreateWithoutUserInput, ExerciseSubmissionUncheckedCreateWithoutUserInput>
  }

  export type ExerciseSubmissionCreateManyUserInputEnvelope = {
    data: ExerciseSubmissionCreateManyUserInput | ExerciseSubmissionCreateManyUserInput[]
  }

  export type SupportConversationCreateWithoutUserInput = {
    id?: string
    messagesUsed?: number
    createdAt?: Date | string
    course: CourseCreateNestedOneWithoutSupportConvosInput
    messages?: SupportMessageCreateNestedManyWithoutConversationInput
  }

  export type SupportConversationUncheckedCreateWithoutUserInput = {
    id?: string
    courseId: string
    messagesUsed?: number
    createdAt?: Date | string
    messages?: SupportMessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type SupportConversationCreateOrConnectWithoutUserInput = {
    where: SupportConversationWhereUniqueInput
    create: XOR<SupportConversationCreateWithoutUserInput, SupportConversationUncheckedCreateWithoutUserInput>
  }

  export type SupportConversationCreateManyUserInputEnvelope = {
    data: SupportConversationCreateManyUserInput | SupportConversationCreateManyUserInput[]
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
  }

  export type OTPUpsertWithWhereUniqueWithoutUserInput = {
    where: OTPWhereUniqueInput
    update: XOR<OTPUpdateWithoutUserInput, OTPUncheckedUpdateWithoutUserInput>
    create: XOR<OTPCreateWithoutUserInput, OTPUncheckedCreateWithoutUserInput>
  }

  export type OTPUpdateWithWhereUniqueWithoutUserInput = {
    where: OTPWhereUniqueInput
    data: XOR<OTPUpdateWithoutUserInput, OTPUncheckedUpdateWithoutUserInput>
  }

  export type OTPUpdateManyWithWhereWithoutUserInput = {
    where: OTPScalarWhereInput
    data: XOR<OTPUpdateManyMutationInput, OTPUncheckedUpdateManyWithoutUserInput>
  }

  export type OTPScalarWhereInput = {
    AND?: OTPScalarWhereInput | OTPScalarWhereInput[]
    OR?: OTPScalarWhereInput[]
    NOT?: OTPScalarWhereInput | OTPScalarWhereInput[]
    id?: StringFilter<"OTP"> | string
    phone?: StringFilter<"OTP"> | string
    code?: StringFilter<"OTP"> | string
    expiresAt?: DateTimeFilter<"OTP"> | Date | string
    used?: BoolFilter<"OTP"> | boolean
    createdAt?: DateTimeFilter<"OTP"> | Date | string
    userId?: StringNullableFilter<"OTP"> | string | null
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutUserInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutUserInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    OR?: EnrollmentScalarWhereInput[]
    NOT?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    id?: StringFilter<"Enrollment"> | string
    userId?: StringFilter<"Enrollment"> | string
    courseId?: StringFilter<"Enrollment"> | string
    progress?: IntFilter<"Enrollment"> | number
    enrolledAt?: DateTimeFilter<"Enrollment"> | Date | string
    paymentAuthority?: StringNullableFilter<"Enrollment"> | string | null
    paymentRefId?: StringNullableFilter<"Enrollment"> | string | null
    paymentStatus?: StringFilter<"Enrollment"> | string
  }

  export type ExerciseSubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: ExerciseSubmissionWhereUniqueInput
    update: XOR<ExerciseSubmissionUpdateWithoutUserInput, ExerciseSubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<ExerciseSubmissionCreateWithoutUserInput, ExerciseSubmissionUncheckedCreateWithoutUserInput>
  }

  export type ExerciseSubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: ExerciseSubmissionWhereUniqueInput
    data: XOR<ExerciseSubmissionUpdateWithoutUserInput, ExerciseSubmissionUncheckedUpdateWithoutUserInput>
  }

  export type ExerciseSubmissionUpdateManyWithWhereWithoutUserInput = {
    where: ExerciseSubmissionScalarWhereInput
    data: XOR<ExerciseSubmissionUpdateManyMutationInput, ExerciseSubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type ExerciseSubmissionScalarWhereInput = {
    AND?: ExerciseSubmissionScalarWhereInput | ExerciseSubmissionScalarWhereInput[]
    OR?: ExerciseSubmissionScalarWhereInput[]
    NOT?: ExerciseSubmissionScalarWhereInput | ExerciseSubmissionScalarWhereInput[]
    id?: StringFilter<"ExerciseSubmission"> | string
    userId?: StringFilter<"ExerciseSubmission"> | string
    courseId?: StringFilter<"ExerciseSubmission"> | string
    title?: StringFilter<"ExerciseSubmission"> | string
    audioUrl?: StringNullableFilter<"ExerciseSubmission"> | string | null
    duration?: IntFilter<"ExerciseSubmission"> | number
    score?: IntNullableFilter<"ExerciseSubmission"> | number | null
    status?: StringFilter<"ExerciseSubmission"> | string
    createdAt?: DateTimeFilter<"ExerciseSubmission"> | Date | string
  }

  export type SupportConversationUpsertWithWhereUniqueWithoutUserInput = {
    where: SupportConversationWhereUniqueInput
    update: XOR<SupportConversationUpdateWithoutUserInput, SupportConversationUncheckedUpdateWithoutUserInput>
    create: XOR<SupportConversationCreateWithoutUserInput, SupportConversationUncheckedCreateWithoutUserInput>
  }

  export type SupportConversationUpdateWithWhereUniqueWithoutUserInput = {
    where: SupportConversationWhereUniqueInput
    data: XOR<SupportConversationUpdateWithoutUserInput, SupportConversationUncheckedUpdateWithoutUserInput>
  }

  export type SupportConversationUpdateManyWithWhereWithoutUserInput = {
    where: SupportConversationScalarWhereInput
    data: XOR<SupportConversationUpdateManyMutationInput, SupportConversationUncheckedUpdateManyWithoutUserInput>
  }

  export type SupportConversationScalarWhereInput = {
    AND?: SupportConversationScalarWhereInput | SupportConversationScalarWhereInput[]
    OR?: SupportConversationScalarWhereInput[]
    NOT?: SupportConversationScalarWhereInput | SupportConversationScalarWhereInput[]
    id?: StringFilter<"SupportConversation"> | string
    userId?: StringFilter<"SupportConversation"> | string
    courseId?: StringFilter<"SupportConversation"> | string
    messagesUsed?: IntFilter<"SupportConversation"> | number
    createdAt?: DateTimeFilter<"SupportConversation"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type UserCreateWithoutOtpsInput = {
    id?: string
    firstName: string
    lastName: string
    phone: string
    registrationCode: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    exercises?: ExerciseSubmissionCreateNestedManyWithoutUserInput
    supportConvos?: SupportConversationCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOtpsInput = {
    id?: string
    firstName: string
    lastName: string
    phone: string
    registrationCode: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    exercises?: ExerciseSubmissionUncheckedCreateNestedManyWithoutUserInput
    supportConvos?: SupportConversationUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOtpsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
  }

  export type UserUpsertWithoutOtpsInput = {
    update: XOR<UserUpdateWithoutOtpsInput, UserUncheckedUpdateWithoutOtpsInput>
    create: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOtpsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOtpsInput, UserUncheckedUpdateWithoutOtpsInput>
  }

  export type UserUpdateWithoutOtpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    exercises?: ExerciseSubmissionUpdateManyWithoutUserNestedInput
    supportConvos?: SupportConversationUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOtpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    exercises?: ExerciseSubmissionUncheckedUpdateManyWithoutUserNestedInput
    supportConvos?: SupportConversationUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LessonCreateWithoutCourseInput = {
    id?: string
    title: string
    description: string
    order: number
    duration: string
  }

  export type LessonUncheckedCreateWithoutCourseInput = {
    id?: string
    title: string
    description: string
    order: number
    duration: string
  }

  export type LessonCreateOrConnectWithoutCourseInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput>
  }

  export type LessonCreateManyCourseInputEnvelope = {
    data: LessonCreateManyCourseInput | LessonCreateManyCourseInput[]
  }

  export type EnrollmentCreateWithoutCourseInput = {
    id?: string
    progress?: number
    enrolledAt?: Date | string
    paymentAuthority?: string | null
    paymentRefId?: string | null
    paymentStatus?: string
    user: UserCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutCourseInput = {
    id?: string
    userId: string
    progress?: number
    enrolledAt?: Date | string
    paymentAuthority?: string | null
    paymentRefId?: string | null
    paymentStatus?: string
  }

  export type EnrollmentCreateOrConnectWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentCreateManyCourseInputEnvelope = {
    data: EnrollmentCreateManyCourseInput | EnrollmentCreateManyCourseInput[]
  }

  export type ExerciseSubmissionCreateWithoutCourseInput = {
    id?: string
    title: string
    audioUrl?: string | null
    duration?: number
    score?: number | null
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutExercisesInput
    analysis?: ExerciseAnalysisCreateNestedOneWithoutExerciseInput
  }

  export type ExerciseSubmissionUncheckedCreateWithoutCourseInput = {
    id?: string
    userId: string
    title: string
    audioUrl?: string | null
    duration?: number
    score?: number | null
    status?: string
    createdAt?: Date | string
    analysis?: ExerciseAnalysisUncheckedCreateNestedOneWithoutExerciseInput
  }

  export type ExerciseSubmissionCreateOrConnectWithoutCourseInput = {
    where: ExerciseSubmissionWhereUniqueInput
    create: XOR<ExerciseSubmissionCreateWithoutCourseInput, ExerciseSubmissionUncheckedCreateWithoutCourseInput>
  }

  export type ExerciseSubmissionCreateManyCourseInputEnvelope = {
    data: ExerciseSubmissionCreateManyCourseInput | ExerciseSubmissionCreateManyCourseInput[]
  }

  export type SupportConversationCreateWithoutCourseInput = {
    id?: string
    messagesUsed?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSupportConvosInput
    messages?: SupportMessageCreateNestedManyWithoutConversationInput
  }

  export type SupportConversationUncheckedCreateWithoutCourseInput = {
    id?: string
    userId: string
    messagesUsed?: number
    createdAt?: Date | string
    messages?: SupportMessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type SupportConversationCreateOrConnectWithoutCourseInput = {
    where: SupportConversationWhereUniqueInput
    create: XOR<SupportConversationCreateWithoutCourseInput, SupportConversationUncheckedCreateWithoutCourseInput>
  }

  export type SupportConversationCreateManyCourseInputEnvelope = {
    data: SupportConversationCreateManyCourseInput | SupportConversationCreateManyCourseInput[]
  }

  export type KnowledgeDocumentCreateWithoutCourseInput = {
    id?: string
    type: string
    title: string
    content: string
    createdAt?: Date | string
  }

  export type KnowledgeDocumentUncheckedCreateWithoutCourseInput = {
    id?: string
    type: string
    title: string
    content: string
    createdAt?: Date | string
  }

  export type KnowledgeDocumentCreateOrConnectWithoutCourseInput = {
    where: KnowledgeDocumentWhereUniqueInput
    create: XOR<KnowledgeDocumentCreateWithoutCourseInput, KnowledgeDocumentUncheckedCreateWithoutCourseInput>
  }

  export type KnowledgeDocumentCreateManyCourseInputEnvelope = {
    data: KnowledgeDocumentCreateManyCourseInput | KnowledgeDocumentCreateManyCourseInput[]
  }

  export type CourseAIConfigCreateWithoutCourseInput = {
    id?: string
    systemPrompt: string
    model?: string
    temperature?: number
    maxTokens?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseAIConfigUncheckedCreateWithoutCourseInput = {
    id?: string
    systemPrompt: string
    model?: string
    temperature?: number
    maxTokens?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseAIConfigCreateOrConnectWithoutCourseInput = {
    where: CourseAIConfigWhereUniqueInput
    create: XOR<CourseAIConfigCreateWithoutCourseInput, CourseAIConfigUncheckedCreateWithoutCourseInput>
  }

  export type LessonUpsertWithWhereUniqueWithoutCourseInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutCourseInput, LessonUncheckedUpdateWithoutCourseInput>
    create: XOR<LessonCreateWithoutCourseInput, LessonUncheckedCreateWithoutCourseInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutCourseInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutCourseInput, LessonUncheckedUpdateWithoutCourseInput>
  }

  export type LessonUpdateManyWithWhereWithoutCourseInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutCourseInput>
  }

  export type LessonScalarWhereInput = {
    AND?: LessonScalarWhereInput | LessonScalarWhereInput[]
    OR?: LessonScalarWhereInput[]
    NOT?: LessonScalarWhereInput | LessonScalarWhereInput[]
    id?: StringFilter<"Lesson"> | string
    courseId?: StringFilter<"Lesson"> | string
    title?: StringFilter<"Lesson"> | string
    description?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    duration?: StringFilter<"Lesson"> | string
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutCourseInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutCourseInput>
  }

  export type ExerciseSubmissionUpsertWithWhereUniqueWithoutCourseInput = {
    where: ExerciseSubmissionWhereUniqueInput
    update: XOR<ExerciseSubmissionUpdateWithoutCourseInput, ExerciseSubmissionUncheckedUpdateWithoutCourseInput>
    create: XOR<ExerciseSubmissionCreateWithoutCourseInput, ExerciseSubmissionUncheckedCreateWithoutCourseInput>
  }

  export type ExerciseSubmissionUpdateWithWhereUniqueWithoutCourseInput = {
    where: ExerciseSubmissionWhereUniqueInput
    data: XOR<ExerciseSubmissionUpdateWithoutCourseInput, ExerciseSubmissionUncheckedUpdateWithoutCourseInput>
  }

  export type ExerciseSubmissionUpdateManyWithWhereWithoutCourseInput = {
    where: ExerciseSubmissionScalarWhereInput
    data: XOR<ExerciseSubmissionUpdateManyMutationInput, ExerciseSubmissionUncheckedUpdateManyWithoutCourseInput>
  }

  export type SupportConversationUpsertWithWhereUniqueWithoutCourseInput = {
    where: SupportConversationWhereUniqueInput
    update: XOR<SupportConversationUpdateWithoutCourseInput, SupportConversationUncheckedUpdateWithoutCourseInput>
    create: XOR<SupportConversationCreateWithoutCourseInput, SupportConversationUncheckedCreateWithoutCourseInput>
  }

  export type SupportConversationUpdateWithWhereUniqueWithoutCourseInput = {
    where: SupportConversationWhereUniqueInput
    data: XOR<SupportConversationUpdateWithoutCourseInput, SupportConversationUncheckedUpdateWithoutCourseInput>
  }

  export type SupportConversationUpdateManyWithWhereWithoutCourseInput = {
    where: SupportConversationScalarWhereInput
    data: XOR<SupportConversationUpdateManyMutationInput, SupportConversationUncheckedUpdateManyWithoutCourseInput>
  }

  export type KnowledgeDocumentUpsertWithWhereUniqueWithoutCourseInput = {
    where: KnowledgeDocumentWhereUniqueInput
    update: XOR<KnowledgeDocumentUpdateWithoutCourseInput, KnowledgeDocumentUncheckedUpdateWithoutCourseInput>
    create: XOR<KnowledgeDocumentCreateWithoutCourseInput, KnowledgeDocumentUncheckedCreateWithoutCourseInput>
  }

  export type KnowledgeDocumentUpdateWithWhereUniqueWithoutCourseInput = {
    where: KnowledgeDocumentWhereUniqueInput
    data: XOR<KnowledgeDocumentUpdateWithoutCourseInput, KnowledgeDocumentUncheckedUpdateWithoutCourseInput>
  }

  export type KnowledgeDocumentUpdateManyWithWhereWithoutCourseInput = {
    where: KnowledgeDocumentScalarWhereInput
    data: XOR<KnowledgeDocumentUpdateManyMutationInput, KnowledgeDocumentUncheckedUpdateManyWithoutCourseInput>
  }

  export type KnowledgeDocumentScalarWhereInput = {
    AND?: KnowledgeDocumentScalarWhereInput | KnowledgeDocumentScalarWhereInput[]
    OR?: KnowledgeDocumentScalarWhereInput[]
    NOT?: KnowledgeDocumentScalarWhereInput | KnowledgeDocumentScalarWhereInput[]
    id?: StringFilter<"KnowledgeDocument"> | string
    courseId?: StringFilter<"KnowledgeDocument"> | string
    type?: StringFilter<"KnowledgeDocument"> | string
    title?: StringFilter<"KnowledgeDocument"> | string
    content?: StringFilter<"KnowledgeDocument"> | string
    createdAt?: DateTimeFilter<"KnowledgeDocument"> | Date | string
  }

  export type CourseAIConfigUpsertWithoutCourseInput = {
    update: XOR<CourseAIConfigUpdateWithoutCourseInput, CourseAIConfigUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseAIConfigCreateWithoutCourseInput, CourseAIConfigUncheckedCreateWithoutCourseInput>
    where?: CourseAIConfigWhereInput
  }

  export type CourseAIConfigUpdateToOneWithWhereWithoutCourseInput = {
    where?: CourseAIConfigWhereInput
    data: XOR<CourseAIConfigUpdateWithoutCourseInput, CourseAIConfigUncheckedUpdateWithoutCourseInput>
  }

  export type CourseAIConfigUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    maxTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseAIConfigUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    maxTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateWithoutLessonsInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    instructor: string
    level?: string
    price?: number
    status?: string
    sessionsCount?: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    exercises?: ExerciseSubmissionCreateNestedManyWithoutCourseInput
    supportConvos?: SupportConversationCreateNestedManyWithoutCourseInput
    knowledgeDocs?: KnowledgeDocumentCreateNestedManyWithoutCourseInput
    aiConfig?: CourseAIConfigCreateNestedOneWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutLessonsInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    instructor: string
    level?: string
    price?: number
    status?: string
    sessionsCount?: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    exercises?: ExerciseSubmissionUncheckedCreateNestedManyWithoutCourseInput
    supportConvos?: SupportConversationUncheckedCreateNestedManyWithoutCourseInput
    knowledgeDocs?: KnowledgeDocumentUncheckedCreateNestedManyWithoutCourseInput
    aiConfig?: CourseAIConfigUncheckedCreateNestedOneWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutLessonsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
  }

  export type CourseUpsertWithoutLessonsInput = {
    update: XOR<CourseUpdateWithoutLessonsInput, CourseUncheckedUpdateWithoutLessonsInput>
    create: XOR<CourseCreateWithoutLessonsInput, CourseUncheckedCreateWithoutLessonsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutLessonsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutLessonsInput, CourseUncheckedUpdateWithoutLessonsInput>
  }

  export type CourseUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sessionsCount?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    exercises?: ExerciseSubmissionUpdateManyWithoutCourseNestedInput
    supportConvos?: SupportConversationUpdateManyWithoutCourseNestedInput
    knowledgeDocs?: KnowledgeDocumentUpdateManyWithoutCourseNestedInput
    aiConfig?: CourseAIConfigUpdateOneWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sessionsCount?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    exercises?: ExerciseSubmissionUncheckedUpdateManyWithoutCourseNestedInput
    supportConvos?: SupportConversationUncheckedUpdateManyWithoutCourseNestedInput
    knowledgeDocs?: KnowledgeDocumentUncheckedUpdateManyWithoutCourseNestedInput
    aiConfig?: CourseAIConfigUncheckedUpdateOneWithoutCourseNestedInput
  }

  export type UserCreateWithoutEnrollmentsInput = {
    id?: string
    firstName: string
    lastName: string
    phone: string
    registrationCode: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: OTPCreateNestedManyWithoutUserInput
    exercises?: ExerciseSubmissionCreateNestedManyWithoutUserInput
    supportConvos?: SupportConversationCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    firstName: string
    lastName: string
    phone: string
    registrationCode: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
    exercises?: ExerciseSubmissionUncheckedCreateNestedManyWithoutUserInput
    supportConvos?: SupportConversationUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEnrollmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
  }

  export type CourseCreateWithoutEnrollmentsInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    instructor: string
    level?: string
    price?: number
    status?: string
    sessionsCount?: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonCreateNestedManyWithoutCourseInput
    exercises?: ExerciseSubmissionCreateNestedManyWithoutCourseInput
    supportConvos?: SupportConversationCreateNestedManyWithoutCourseInput
    knowledgeDocs?: KnowledgeDocumentCreateNestedManyWithoutCourseInput
    aiConfig?: CourseAIConfigCreateNestedOneWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    instructor: string
    level?: string
    price?: number
    status?: string
    sessionsCount?: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseInput
    exercises?: ExerciseSubmissionUncheckedCreateNestedManyWithoutCourseInput
    supportConvos?: SupportConversationUncheckedCreateNestedManyWithoutCourseInput
    knowledgeDocs?: KnowledgeDocumentUncheckedCreateNestedManyWithoutCourseInput
    aiConfig?: CourseAIConfigUncheckedCreateNestedOneWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutEnrollmentsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
  }

  export type UserUpsertWithoutEnrollmentsInput = {
    update: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: OTPUpdateManyWithoutUserNestedInput
    exercises?: ExerciseSubmissionUpdateManyWithoutUserNestedInput
    supportConvos?: SupportConversationUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
    exercises?: ExerciseSubmissionUncheckedUpdateManyWithoutUserNestedInput
    supportConvos?: SupportConversationUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutEnrollmentsInput = {
    update: XOR<CourseUpdateWithoutEnrollmentsInput, CourseUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutEnrollmentsInput, CourseUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type CourseUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sessionsCount?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutCourseNestedInput
    exercises?: ExerciseSubmissionUpdateManyWithoutCourseNestedInput
    supportConvos?: SupportConversationUpdateManyWithoutCourseNestedInput
    knowledgeDocs?: KnowledgeDocumentUpdateManyWithoutCourseNestedInput
    aiConfig?: CourseAIConfigUpdateOneWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sessionsCount?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutCourseNestedInput
    exercises?: ExerciseSubmissionUncheckedUpdateManyWithoutCourseNestedInput
    supportConvos?: SupportConversationUncheckedUpdateManyWithoutCourseNestedInput
    knowledgeDocs?: KnowledgeDocumentUncheckedUpdateManyWithoutCourseNestedInput
    aiConfig?: CourseAIConfigUncheckedUpdateOneWithoutCourseNestedInput
  }

  export type UserCreateWithoutExercisesInput = {
    id?: string
    firstName: string
    lastName: string
    phone: string
    registrationCode: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: OTPCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    supportConvos?: SupportConversationCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExercisesInput = {
    id?: string
    firstName: string
    lastName: string
    phone: string
    registrationCode: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    supportConvos?: SupportConversationUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExercisesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExercisesInput, UserUncheckedCreateWithoutExercisesInput>
  }

  export type CourseCreateWithoutExercisesInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    instructor: string
    level?: string
    price?: number
    status?: string
    sessionsCount?: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    supportConvos?: SupportConversationCreateNestedManyWithoutCourseInput
    knowledgeDocs?: KnowledgeDocumentCreateNestedManyWithoutCourseInput
    aiConfig?: CourseAIConfigCreateNestedOneWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutExercisesInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    instructor: string
    level?: string
    price?: number
    status?: string
    sessionsCount?: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    supportConvos?: SupportConversationUncheckedCreateNestedManyWithoutCourseInput
    knowledgeDocs?: KnowledgeDocumentUncheckedCreateNestedManyWithoutCourseInput
    aiConfig?: CourseAIConfigUncheckedCreateNestedOneWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutExercisesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutExercisesInput, CourseUncheckedCreateWithoutExercisesInput>
  }

  export type ExerciseAnalysisCreateWithoutExerciseInput = {
    id?: string
    overallScore: number
    strengthsJson: string
    improvementsJson: string
    detailsJson: string
    aiRecommendation: string
    nextExercise: string
    createdAt?: Date | string
  }

  export type ExerciseAnalysisUncheckedCreateWithoutExerciseInput = {
    id?: string
    overallScore: number
    strengthsJson: string
    improvementsJson: string
    detailsJson: string
    aiRecommendation: string
    nextExercise: string
    createdAt?: Date | string
  }

  export type ExerciseAnalysisCreateOrConnectWithoutExerciseInput = {
    where: ExerciseAnalysisWhereUniqueInput
    create: XOR<ExerciseAnalysisCreateWithoutExerciseInput, ExerciseAnalysisUncheckedCreateWithoutExerciseInput>
  }

  export type UserUpsertWithoutExercisesInput = {
    update: XOR<UserUpdateWithoutExercisesInput, UserUncheckedUpdateWithoutExercisesInput>
    create: XOR<UserCreateWithoutExercisesInput, UserUncheckedCreateWithoutExercisesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExercisesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExercisesInput, UserUncheckedUpdateWithoutExercisesInput>
  }

  export type UserUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: OTPUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    supportConvos?: SupportConversationUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    supportConvos?: SupportConversationUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutExercisesInput = {
    update: XOR<CourseUpdateWithoutExercisesInput, CourseUncheckedUpdateWithoutExercisesInput>
    create: XOR<CourseCreateWithoutExercisesInput, CourseUncheckedCreateWithoutExercisesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutExercisesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutExercisesInput, CourseUncheckedUpdateWithoutExercisesInput>
  }

  export type CourseUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sessionsCount?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    supportConvos?: SupportConversationUpdateManyWithoutCourseNestedInput
    knowledgeDocs?: KnowledgeDocumentUpdateManyWithoutCourseNestedInput
    aiConfig?: CourseAIConfigUpdateOneWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sessionsCount?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    supportConvos?: SupportConversationUncheckedUpdateManyWithoutCourseNestedInput
    knowledgeDocs?: KnowledgeDocumentUncheckedUpdateManyWithoutCourseNestedInput
    aiConfig?: CourseAIConfigUncheckedUpdateOneWithoutCourseNestedInput
  }

  export type ExerciseAnalysisUpsertWithoutExerciseInput = {
    update: XOR<ExerciseAnalysisUpdateWithoutExerciseInput, ExerciseAnalysisUncheckedUpdateWithoutExerciseInput>
    create: XOR<ExerciseAnalysisCreateWithoutExerciseInput, ExerciseAnalysisUncheckedCreateWithoutExerciseInput>
    where?: ExerciseAnalysisWhereInput
  }

  export type ExerciseAnalysisUpdateToOneWithWhereWithoutExerciseInput = {
    where?: ExerciseAnalysisWhereInput
    data: XOR<ExerciseAnalysisUpdateWithoutExerciseInput, ExerciseAnalysisUncheckedUpdateWithoutExerciseInput>
  }

  export type ExerciseAnalysisUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    overallScore?: IntFieldUpdateOperationsInput | number
    strengthsJson?: StringFieldUpdateOperationsInput | string
    improvementsJson?: StringFieldUpdateOperationsInput | string
    detailsJson?: StringFieldUpdateOperationsInput | string
    aiRecommendation?: StringFieldUpdateOperationsInput | string
    nextExercise?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseAnalysisUncheckedUpdateWithoutExerciseInput = {
    id?: StringFieldUpdateOperationsInput | string
    overallScore?: IntFieldUpdateOperationsInput | number
    strengthsJson?: StringFieldUpdateOperationsInput | string
    improvementsJson?: StringFieldUpdateOperationsInput | string
    detailsJson?: StringFieldUpdateOperationsInput | string
    aiRecommendation?: StringFieldUpdateOperationsInput | string
    nextExercise?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseSubmissionCreateWithoutAnalysisInput = {
    id?: string
    title: string
    audioUrl?: string | null
    duration?: number
    score?: number | null
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutExercisesInput
    course: CourseCreateNestedOneWithoutExercisesInput
  }

  export type ExerciseSubmissionUncheckedCreateWithoutAnalysisInput = {
    id?: string
    userId: string
    courseId: string
    title: string
    audioUrl?: string | null
    duration?: number
    score?: number | null
    status?: string
    createdAt?: Date | string
  }

  export type ExerciseSubmissionCreateOrConnectWithoutAnalysisInput = {
    where: ExerciseSubmissionWhereUniqueInput
    create: XOR<ExerciseSubmissionCreateWithoutAnalysisInput, ExerciseSubmissionUncheckedCreateWithoutAnalysisInput>
  }

  export type ExerciseSubmissionUpsertWithoutAnalysisInput = {
    update: XOR<ExerciseSubmissionUpdateWithoutAnalysisInput, ExerciseSubmissionUncheckedUpdateWithoutAnalysisInput>
    create: XOR<ExerciseSubmissionCreateWithoutAnalysisInput, ExerciseSubmissionUncheckedCreateWithoutAnalysisInput>
    where?: ExerciseSubmissionWhereInput
  }

  export type ExerciseSubmissionUpdateToOneWithWhereWithoutAnalysisInput = {
    where?: ExerciseSubmissionWhereInput
    data: XOR<ExerciseSubmissionUpdateWithoutAnalysisInput, ExerciseSubmissionUncheckedUpdateWithoutAnalysisInput>
  }

  export type ExerciseSubmissionUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutExercisesNestedInput
    course?: CourseUpdateOneRequiredWithoutExercisesNestedInput
  }

  export type ExerciseSubmissionUncheckedUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSupportConvosInput = {
    id?: string
    firstName: string
    lastName: string
    phone: string
    registrationCode: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: OTPCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    exercises?: ExerciseSubmissionCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSupportConvosInput = {
    id?: string
    firstName: string
    lastName: string
    phone: string
    registrationCode: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    exercises?: ExerciseSubmissionUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSupportConvosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSupportConvosInput, UserUncheckedCreateWithoutSupportConvosInput>
  }

  export type CourseCreateWithoutSupportConvosInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    instructor: string
    level?: string
    price?: number
    status?: string
    sessionsCount?: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    exercises?: ExerciseSubmissionCreateNestedManyWithoutCourseInput
    knowledgeDocs?: KnowledgeDocumentCreateNestedManyWithoutCourseInput
    aiConfig?: CourseAIConfigCreateNestedOneWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutSupportConvosInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    instructor: string
    level?: string
    price?: number
    status?: string
    sessionsCount?: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    exercises?: ExerciseSubmissionUncheckedCreateNestedManyWithoutCourseInput
    knowledgeDocs?: KnowledgeDocumentUncheckedCreateNestedManyWithoutCourseInput
    aiConfig?: CourseAIConfigUncheckedCreateNestedOneWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutSupportConvosInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutSupportConvosInput, CourseUncheckedCreateWithoutSupportConvosInput>
  }

  export type SupportMessageCreateWithoutConversationInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type SupportMessageUncheckedCreateWithoutConversationInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type SupportMessageCreateOrConnectWithoutConversationInput = {
    where: SupportMessageWhereUniqueInput
    create: XOR<SupportMessageCreateWithoutConversationInput, SupportMessageUncheckedCreateWithoutConversationInput>
  }

  export type SupportMessageCreateManyConversationInputEnvelope = {
    data: SupportMessageCreateManyConversationInput | SupportMessageCreateManyConversationInput[]
  }

  export type UserUpsertWithoutSupportConvosInput = {
    update: XOR<UserUpdateWithoutSupportConvosInput, UserUncheckedUpdateWithoutSupportConvosInput>
    create: XOR<UserCreateWithoutSupportConvosInput, UserUncheckedCreateWithoutSupportConvosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSupportConvosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSupportConvosInput, UserUncheckedUpdateWithoutSupportConvosInput>
  }

  export type UserUpdateWithoutSupportConvosInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: OTPUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    exercises?: ExerciseSubmissionUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSupportConvosInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    exercises?: ExerciseSubmissionUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutSupportConvosInput = {
    update: XOR<CourseUpdateWithoutSupportConvosInput, CourseUncheckedUpdateWithoutSupportConvosInput>
    create: XOR<CourseCreateWithoutSupportConvosInput, CourseUncheckedCreateWithoutSupportConvosInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutSupportConvosInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutSupportConvosInput, CourseUncheckedUpdateWithoutSupportConvosInput>
  }

  export type CourseUpdateWithoutSupportConvosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sessionsCount?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    exercises?: ExerciseSubmissionUpdateManyWithoutCourseNestedInput
    knowledgeDocs?: KnowledgeDocumentUpdateManyWithoutCourseNestedInput
    aiConfig?: CourseAIConfigUpdateOneWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutSupportConvosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sessionsCount?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    exercises?: ExerciseSubmissionUncheckedUpdateManyWithoutCourseNestedInput
    knowledgeDocs?: KnowledgeDocumentUncheckedUpdateManyWithoutCourseNestedInput
    aiConfig?: CourseAIConfigUncheckedUpdateOneWithoutCourseNestedInput
  }

  export type SupportMessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: SupportMessageWhereUniqueInput
    update: XOR<SupportMessageUpdateWithoutConversationInput, SupportMessageUncheckedUpdateWithoutConversationInput>
    create: XOR<SupportMessageCreateWithoutConversationInput, SupportMessageUncheckedCreateWithoutConversationInput>
  }

  export type SupportMessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: SupportMessageWhereUniqueInput
    data: XOR<SupportMessageUpdateWithoutConversationInput, SupportMessageUncheckedUpdateWithoutConversationInput>
  }

  export type SupportMessageUpdateManyWithWhereWithoutConversationInput = {
    where: SupportMessageScalarWhereInput
    data: XOR<SupportMessageUpdateManyMutationInput, SupportMessageUncheckedUpdateManyWithoutConversationInput>
  }

  export type SupportMessageScalarWhereInput = {
    AND?: SupportMessageScalarWhereInput | SupportMessageScalarWhereInput[]
    OR?: SupportMessageScalarWhereInput[]
    NOT?: SupportMessageScalarWhereInput | SupportMessageScalarWhereInput[]
    id?: StringFilter<"SupportMessage"> | string
    conversationId?: StringFilter<"SupportMessage"> | string
    role?: StringFilter<"SupportMessage"> | string
    content?: StringFilter<"SupportMessage"> | string
    createdAt?: DateTimeFilter<"SupportMessage"> | Date | string
  }

  export type SupportConversationCreateWithoutMessagesInput = {
    id?: string
    messagesUsed?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSupportConvosInput
    course: CourseCreateNestedOneWithoutSupportConvosInput
  }

  export type SupportConversationUncheckedCreateWithoutMessagesInput = {
    id?: string
    userId: string
    courseId: string
    messagesUsed?: number
    createdAt?: Date | string
  }

  export type SupportConversationCreateOrConnectWithoutMessagesInput = {
    where: SupportConversationWhereUniqueInput
    create: XOR<SupportConversationCreateWithoutMessagesInput, SupportConversationUncheckedCreateWithoutMessagesInput>
  }

  export type SupportConversationUpsertWithoutMessagesInput = {
    update: XOR<SupportConversationUpdateWithoutMessagesInput, SupportConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<SupportConversationCreateWithoutMessagesInput, SupportConversationUncheckedCreateWithoutMessagesInput>
    where?: SupportConversationWhereInput
  }

  export type SupportConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: SupportConversationWhereInput
    data: XOR<SupportConversationUpdateWithoutMessagesInput, SupportConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type SupportConversationUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    messagesUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSupportConvosNestedInput
    course?: CourseUpdateOneRequiredWithoutSupportConvosNestedInput
  }

  export type SupportConversationUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    messagesUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateWithoutKnowledgeDocsInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    instructor: string
    level?: string
    price?: number
    status?: string
    sessionsCount?: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    exercises?: ExerciseSubmissionCreateNestedManyWithoutCourseInput
    supportConvos?: SupportConversationCreateNestedManyWithoutCourseInput
    aiConfig?: CourseAIConfigCreateNestedOneWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutKnowledgeDocsInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    instructor: string
    level?: string
    price?: number
    status?: string
    sessionsCount?: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    exercises?: ExerciseSubmissionUncheckedCreateNestedManyWithoutCourseInput
    supportConvos?: SupportConversationUncheckedCreateNestedManyWithoutCourseInput
    aiConfig?: CourseAIConfigUncheckedCreateNestedOneWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutKnowledgeDocsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutKnowledgeDocsInput, CourseUncheckedCreateWithoutKnowledgeDocsInput>
  }

  export type CourseUpsertWithoutKnowledgeDocsInput = {
    update: XOR<CourseUpdateWithoutKnowledgeDocsInput, CourseUncheckedUpdateWithoutKnowledgeDocsInput>
    create: XOR<CourseCreateWithoutKnowledgeDocsInput, CourseUncheckedCreateWithoutKnowledgeDocsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutKnowledgeDocsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutKnowledgeDocsInput, CourseUncheckedUpdateWithoutKnowledgeDocsInput>
  }

  export type CourseUpdateWithoutKnowledgeDocsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sessionsCount?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    exercises?: ExerciseSubmissionUpdateManyWithoutCourseNestedInput
    supportConvos?: SupportConversationUpdateManyWithoutCourseNestedInput
    aiConfig?: CourseAIConfigUpdateOneWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutKnowledgeDocsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sessionsCount?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    exercises?: ExerciseSubmissionUncheckedUpdateManyWithoutCourseNestedInput
    supportConvos?: SupportConversationUncheckedUpdateManyWithoutCourseNestedInput
    aiConfig?: CourseAIConfigUncheckedUpdateOneWithoutCourseNestedInput
  }

  export type CourseCreateWithoutAiConfigInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    instructor: string
    level?: string
    price?: number
    status?: string
    sessionsCount?: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    exercises?: ExerciseSubmissionCreateNestedManyWithoutCourseInput
    supportConvos?: SupportConversationCreateNestedManyWithoutCourseInput
    knowledgeDocs?: KnowledgeDocumentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutAiConfigInput = {
    id?: string
    title: string
    description: string
    longDescription: string
    instructor: string
    level?: string
    price?: number
    status?: string
    sessionsCount?: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    exercises?: ExerciseSubmissionUncheckedCreateNestedManyWithoutCourseInput
    supportConvos?: SupportConversationUncheckedCreateNestedManyWithoutCourseInput
    knowledgeDocs?: KnowledgeDocumentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutAiConfigInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutAiConfigInput, CourseUncheckedCreateWithoutAiConfigInput>
  }

  export type CourseUpsertWithoutAiConfigInput = {
    update: XOR<CourseUpdateWithoutAiConfigInput, CourseUncheckedUpdateWithoutAiConfigInput>
    create: XOR<CourseCreateWithoutAiConfigInput, CourseUncheckedCreateWithoutAiConfigInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutAiConfigInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutAiConfigInput, CourseUncheckedUpdateWithoutAiConfigInput>
  }

  export type CourseUpdateWithoutAiConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sessionsCount?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    exercises?: ExerciseSubmissionUpdateManyWithoutCourseNestedInput
    supportConvos?: SupportConversationUpdateManyWithoutCourseNestedInput
    knowledgeDocs?: KnowledgeDocumentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutAiConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    longDescription?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    sessionsCount?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    exercises?: ExerciseSubmissionUncheckedUpdateManyWithoutCourseNestedInput
    supportConvos?: SupportConversationUncheckedUpdateManyWithoutCourseNestedInput
    knowledgeDocs?: KnowledgeDocumentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    firstName: string
    lastName: string
    phone: string
    registrationCode: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: OTPCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    exercises?: ExerciseSubmissionCreateNestedManyWithoutUserInput
    supportConvos?: SupportConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    firstName: string
    lastName: string
    phone: string
    registrationCode: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: OTPUncheckedCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    exercises?: ExerciseSubmissionUncheckedCreateNestedManyWithoutUserInput
    supportConvos?: SupportConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: OTPUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    exercises?: ExerciseSubmissionUpdateManyWithoutUserNestedInput
    supportConvos?: SupportConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    registrationCode?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: OTPUncheckedUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    exercises?: ExerciseSubmissionUncheckedUpdateManyWithoutUserNestedInput
    supportConvos?: SupportConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OTPCreateManyUserInput = {
    id?: string
    phone: string
    code: string
    expiresAt: Date | string
    used?: boolean
    createdAt?: Date | string
  }

  export type EnrollmentCreateManyUserInput = {
    id?: string
    courseId: string
    progress?: number
    enrolledAt?: Date | string
    paymentAuthority?: string | null
    paymentRefId?: string | null
    paymentStatus?: string
  }

  export type ExerciseSubmissionCreateManyUserInput = {
    id?: string
    courseId: string
    title: string
    audioUrl?: string | null
    duration?: number
    score?: number | null
    status?: string
    createdAt?: Date | string
  }

  export type SupportConversationCreateManyUserInput = {
    id?: string
    courseId: string
    messagesUsed?: number
    createdAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type OTPUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OTPUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentAuthority?: NullableStringFieldUpdateOperationsInput | string | null
    paymentRefId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentAuthority?: NullableStringFieldUpdateOperationsInput | string | null
    paymentRefId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentAuthority?: NullableStringFieldUpdateOperationsInput | string | null
    paymentRefId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseSubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutExercisesNestedInput
    analysis?: ExerciseAnalysisUpdateOneWithoutExerciseNestedInput
  }

  export type ExerciseSubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analysis?: ExerciseAnalysisUncheckedUpdateOneWithoutExerciseNestedInput
  }

  export type ExerciseSubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportConversationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    messagesUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutSupportConvosNestedInput
    messages?: SupportMessageUpdateManyWithoutConversationNestedInput
  }

  export type SupportConversationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    messagesUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: SupportMessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type SupportConversationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    messagesUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateManyCourseInput = {
    id?: string
    title: string
    description: string
    order: number
    duration: string
  }

  export type EnrollmentCreateManyCourseInput = {
    id?: string
    userId: string
    progress?: number
    enrolledAt?: Date | string
    paymentAuthority?: string | null
    paymentRefId?: string | null
    paymentStatus?: string
  }

  export type ExerciseSubmissionCreateManyCourseInput = {
    id?: string
    userId: string
    title: string
    audioUrl?: string | null
    duration?: number
    score?: number | null
    status?: string
    createdAt?: Date | string
  }

  export type SupportConversationCreateManyCourseInput = {
    id?: string
    userId: string
    messagesUsed?: number
    createdAt?: Date | string
  }

  export type KnowledgeDocumentCreateManyCourseInput = {
    id?: string
    type: string
    title: string
    content: string
    createdAt?: Date | string
  }

  export type LessonUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
  }

  export type LessonUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
  }

  export type LessonUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
  }

  export type EnrollmentUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentAuthority?: NullableStringFieldUpdateOperationsInput | string | null
    paymentRefId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentAuthority?: NullableStringFieldUpdateOperationsInput | string | null
    paymentRefId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentAuthority?: NullableStringFieldUpdateOperationsInput | string | null
    paymentRefId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
  }

  export type ExerciseSubmissionUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutExercisesNestedInput
    analysis?: ExerciseAnalysisUpdateOneWithoutExerciseNestedInput
  }

  export type ExerciseSubmissionUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analysis?: ExerciseAnalysisUncheckedUpdateOneWithoutExerciseNestedInput
  }

  export type ExerciseSubmissionUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    audioUrl?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportConversationUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    messagesUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSupportConvosNestedInput
    messages?: SupportMessageUpdateManyWithoutConversationNestedInput
  }

  export type SupportConversationUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    messagesUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: SupportMessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type SupportConversationUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    messagesUsed?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeDocumentUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeDocumentUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeDocumentUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportMessageCreateManyConversationInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type SupportMessageUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportMessageUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportMessageUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
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