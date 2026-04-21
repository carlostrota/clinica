
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
 * Model Convenio
 * 
 */
export type Convenio = $Result.DefaultSelection<Prisma.$ConvenioPayload>
/**
 * Model Paciente
 * 
 */
export type Paciente = $Result.DefaultSelection<Prisma.$PacientePayload>
/**
 * Model Especialidade
 * 
 */
export type Especialidade = $Result.DefaultSelection<Prisma.$EspecialidadePayload>
/**
 * Model PacienteEspecialidade
 * 
 */
export type PacienteEspecialidade = $Result.DefaultSelection<Prisma.$PacienteEspecialidadePayload>
/**
 * Model Profissional
 * 
 */
export type Profissional = $Result.DefaultSelection<Prisma.$ProfissionalPayload>
/**
 * Model HorarioAtendimento
 * 
 */
export type HorarioAtendimento = $Result.DefaultSelection<Prisma.$HorarioAtendimentoPayload>
/**
 * Model Agendamento
 * 
 */
export type Agendamento = $Result.DefaultSelection<Prisma.$AgendamentoPayload>
/**
 * Model AgendamentoPaciente
 * 
 */
export type AgendamentoPaciente = $Result.DefaultSelection<Prisma.$AgendamentoPacientePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Papel: {
  ADMIN: 'ADMIN',
  RECEPCIONISTA: 'RECEPCIONISTA',
  TERAPEUTA: 'TERAPEUTA'
};

export type Papel = (typeof Papel)[keyof typeof Papel]


export const TipoEspecialidade: {
  CLINICA: 'CLINICA',
  TERAPEUTICA: 'TERAPEUTICA'
};

export type TipoEspecialidade = (typeof TipoEspecialidade)[keyof typeof TipoEspecialidade]


export const DiaSemana: {
  SEGUNDA: 'SEGUNDA',
  TERCA: 'TERCA',
  QUARTA: 'QUARTA',
  QUINTA: 'QUINTA',
  SEXTA: 'SEXTA',
  SABADO: 'SABADO'
};

export type DiaSemana = (typeof DiaSemana)[keyof typeof DiaSemana]


export const TipoAgendamento: {
  INDIVIDUAL: 'INDIVIDUAL',
  GRUPO: 'GRUPO'
};

export type TipoAgendamento = (typeof TipoAgendamento)[keyof typeof TipoAgendamento]


export const StatusAgendamento: {
  AGENDADO: 'AGENDADO',
  CONFIRMADO: 'CONFIRMADO',
  REALIZADO: 'REALIZADO',
  CANCELADO: 'CANCELADO',
  FALTOU: 'FALTOU'
};

export type StatusAgendamento = (typeof StatusAgendamento)[keyof typeof StatusAgendamento]


export const OrigemAgendamento: {
  MANUAL: 'MANUAL',
  AUTOMATICO: 'AUTOMATICO'
};

export type OrigemAgendamento = (typeof OrigemAgendamento)[keyof typeof OrigemAgendamento]

}

export type Papel = $Enums.Papel

export const Papel: typeof $Enums.Papel

export type TipoEspecialidade = $Enums.TipoEspecialidade

export const TipoEspecialidade: typeof $Enums.TipoEspecialidade

export type DiaSemana = $Enums.DiaSemana

export const DiaSemana: typeof $Enums.DiaSemana

export type TipoAgendamento = $Enums.TipoAgendamento

export const TipoAgendamento: typeof $Enums.TipoAgendamento

export type StatusAgendamento = $Enums.StatusAgendamento

export const StatusAgendamento: typeof $Enums.StatusAgendamento

export type OrigemAgendamento = $Enums.OrigemAgendamento

export const OrigemAgendamento: typeof $Enums.OrigemAgendamento

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.convenio`: Exposes CRUD operations for the **Convenio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Convenios
    * const convenios = await prisma.convenio.findMany()
    * ```
    */
  get convenio(): Prisma.ConvenioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paciente`: Exposes CRUD operations for the **Paciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.paciente.findMany()
    * ```
    */
  get paciente(): Prisma.PacienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.especialidade`: Exposes CRUD operations for the **Especialidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Especialidades
    * const especialidades = await prisma.especialidade.findMany()
    * ```
    */
  get especialidade(): Prisma.EspecialidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pacienteEspecialidade`: Exposes CRUD operations for the **PacienteEspecialidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PacienteEspecialidades
    * const pacienteEspecialidades = await prisma.pacienteEspecialidade.findMany()
    * ```
    */
  get pacienteEspecialidade(): Prisma.PacienteEspecialidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profissional`: Exposes CRUD operations for the **Profissional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profissionals
    * const profissionals = await prisma.profissional.findMany()
    * ```
    */
  get profissional(): Prisma.ProfissionalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.horarioAtendimento`: Exposes CRUD operations for the **HorarioAtendimento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HorarioAtendimentos
    * const horarioAtendimentos = await prisma.horarioAtendimento.findMany()
    * ```
    */
  get horarioAtendimento(): Prisma.HorarioAtendimentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agendamento`: Exposes CRUD operations for the **Agendamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agendamentos
    * const agendamentos = await prisma.agendamento.findMany()
    * ```
    */
  get agendamento(): Prisma.AgendamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agendamentoPaciente`: Exposes CRUD operations for the **AgendamentoPaciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgendamentoPacientes
    * const agendamentoPacientes = await prisma.agendamentoPaciente.findMany()
    * ```
    */
  get agendamentoPaciente(): Prisma.AgendamentoPacienteDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
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
    Convenio: 'Convenio',
    Paciente: 'Paciente',
    Especialidade: 'Especialidade',
    PacienteEspecialidade: 'PacienteEspecialidade',
    Profissional: 'Profissional',
    HorarioAtendimento: 'HorarioAtendimento',
    Agendamento: 'Agendamento',
    AgendamentoPaciente: 'AgendamentoPaciente'
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
      modelProps: "user" | "convenio" | "paciente" | "especialidade" | "pacienteEspecialidade" | "profissional" | "horarioAtendimento" | "agendamento" | "agendamentoPaciente"
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
      Convenio: {
        payload: Prisma.$ConvenioPayload<ExtArgs>
        fields: Prisma.ConvenioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConvenioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvenioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConvenioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvenioPayload>
          }
          findFirst: {
            args: Prisma.ConvenioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvenioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConvenioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvenioPayload>
          }
          findMany: {
            args: Prisma.ConvenioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvenioPayload>[]
          }
          create: {
            args: Prisma.ConvenioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvenioPayload>
          }
          createMany: {
            args: Prisma.ConvenioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConvenioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvenioPayload>[]
          }
          delete: {
            args: Prisma.ConvenioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvenioPayload>
          }
          update: {
            args: Prisma.ConvenioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvenioPayload>
          }
          deleteMany: {
            args: Prisma.ConvenioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConvenioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConvenioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvenioPayload>[]
          }
          upsert: {
            args: Prisma.ConvenioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConvenioPayload>
          }
          aggregate: {
            args: Prisma.ConvenioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConvenio>
          }
          groupBy: {
            args: Prisma.ConvenioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConvenioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConvenioCountArgs<ExtArgs>
            result: $Utils.Optional<ConvenioCountAggregateOutputType> | number
          }
        }
      }
      Paciente: {
        payload: Prisma.$PacientePayload<ExtArgs>
        fields: Prisma.PacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findFirst: {
            args: Prisma.PacienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findMany: {
            args: Prisma.PacienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          create: {
            args: Prisma.PacienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          createMany: {
            args: Prisma.PacienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          delete: {
            args: Prisma.PacienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          update: {
            args: Prisma.PacienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          deleteMany: {
            args: Prisma.PacienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PacienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          upsert: {
            args: Prisma.PacienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          aggregate: {
            args: Prisma.PacienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaciente>
          }
          groupBy: {
            args: Prisma.PacienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacienteCountArgs<ExtArgs>
            result: $Utils.Optional<PacienteCountAggregateOutputType> | number
          }
        }
      }
      Especialidade: {
        payload: Prisma.$EspecialidadePayload<ExtArgs>
        fields: Prisma.EspecialidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EspecialidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EspecialidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          findFirst: {
            args: Prisma.EspecialidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EspecialidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          findMany: {
            args: Prisma.EspecialidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>[]
          }
          create: {
            args: Prisma.EspecialidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          createMany: {
            args: Prisma.EspecialidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EspecialidadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>[]
          }
          delete: {
            args: Prisma.EspecialidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          update: {
            args: Prisma.EspecialidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          deleteMany: {
            args: Prisma.EspecialidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EspecialidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EspecialidadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>[]
          }
          upsert: {
            args: Prisma.EspecialidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspecialidadePayload>
          }
          aggregate: {
            args: Prisma.EspecialidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEspecialidade>
          }
          groupBy: {
            args: Prisma.EspecialidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EspecialidadeCountArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadeCountAggregateOutputType> | number
          }
        }
      }
      PacienteEspecialidade: {
        payload: Prisma.$PacienteEspecialidadePayload<ExtArgs>
        fields: Prisma.PacienteEspecialidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacienteEspecialidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacienteEspecialidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacienteEspecialidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacienteEspecialidadePayload>
          }
          findFirst: {
            args: Prisma.PacienteEspecialidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacienteEspecialidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacienteEspecialidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacienteEspecialidadePayload>
          }
          findMany: {
            args: Prisma.PacienteEspecialidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacienteEspecialidadePayload>[]
          }
          create: {
            args: Prisma.PacienteEspecialidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacienteEspecialidadePayload>
          }
          createMany: {
            args: Prisma.PacienteEspecialidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacienteEspecialidadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacienteEspecialidadePayload>[]
          }
          delete: {
            args: Prisma.PacienteEspecialidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacienteEspecialidadePayload>
          }
          update: {
            args: Prisma.PacienteEspecialidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacienteEspecialidadePayload>
          }
          deleteMany: {
            args: Prisma.PacienteEspecialidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacienteEspecialidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PacienteEspecialidadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacienteEspecialidadePayload>[]
          }
          upsert: {
            args: Prisma.PacienteEspecialidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacienteEspecialidadePayload>
          }
          aggregate: {
            args: Prisma.PacienteEspecialidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePacienteEspecialidade>
          }
          groupBy: {
            args: Prisma.PacienteEspecialidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacienteEspecialidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacienteEspecialidadeCountArgs<ExtArgs>
            result: $Utils.Optional<PacienteEspecialidadeCountAggregateOutputType> | number
          }
        }
      }
      Profissional: {
        payload: Prisma.$ProfissionalPayload<ExtArgs>
        fields: Prisma.ProfissionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfissionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfissionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          findFirst: {
            args: Prisma.ProfissionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfissionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          findMany: {
            args: Prisma.ProfissionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>[]
          }
          create: {
            args: Prisma.ProfissionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          createMany: {
            args: Prisma.ProfissionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfissionalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>[]
          }
          delete: {
            args: Prisma.ProfissionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          update: {
            args: Prisma.ProfissionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          deleteMany: {
            args: Prisma.ProfissionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfissionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfissionalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>[]
          }
          upsert: {
            args: Prisma.ProfissionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfissionalPayload>
          }
          aggregate: {
            args: Prisma.ProfissionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfissional>
          }
          groupBy: {
            args: Prisma.ProfissionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfissionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfissionalCountArgs<ExtArgs>
            result: $Utils.Optional<ProfissionalCountAggregateOutputType> | number
          }
        }
      }
      HorarioAtendimento: {
        payload: Prisma.$HorarioAtendimentoPayload<ExtArgs>
        fields: Prisma.HorarioAtendimentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HorarioAtendimentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioAtendimentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HorarioAtendimentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioAtendimentoPayload>
          }
          findFirst: {
            args: Prisma.HorarioAtendimentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioAtendimentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HorarioAtendimentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioAtendimentoPayload>
          }
          findMany: {
            args: Prisma.HorarioAtendimentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioAtendimentoPayload>[]
          }
          create: {
            args: Prisma.HorarioAtendimentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioAtendimentoPayload>
          }
          createMany: {
            args: Prisma.HorarioAtendimentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HorarioAtendimentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioAtendimentoPayload>[]
          }
          delete: {
            args: Prisma.HorarioAtendimentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioAtendimentoPayload>
          }
          update: {
            args: Prisma.HorarioAtendimentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioAtendimentoPayload>
          }
          deleteMany: {
            args: Prisma.HorarioAtendimentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HorarioAtendimentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HorarioAtendimentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioAtendimentoPayload>[]
          }
          upsert: {
            args: Prisma.HorarioAtendimentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorarioAtendimentoPayload>
          }
          aggregate: {
            args: Prisma.HorarioAtendimentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHorarioAtendimento>
          }
          groupBy: {
            args: Prisma.HorarioAtendimentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<HorarioAtendimentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.HorarioAtendimentoCountArgs<ExtArgs>
            result: $Utils.Optional<HorarioAtendimentoCountAggregateOutputType> | number
          }
        }
      }
      Agendamento: {
        payload: Prisma.$AgendamentoPayload<ExtArgs>
        fields: Prisma.AgendamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgendamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgendamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          findFirst: {
            args: Prisma.AgendamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgendamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          findMany: {
            args: Prisma.AgendamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>[]
          }
          create: {
            args: Prisma.AgendamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          createMany: {
            args: Prisma.AgendamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgendamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>[]
          }
          delete: {
            args: Prisma.AgendamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          update: {
            args: Prisma.AgendamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          deleteMany: {
            args: Prisma.AgendamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgendamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgendamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>[]
          }
          upsert: {
            args: Prisma.AgendamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          aggregate: {
            args: Prisma.AgendamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgendamento>
          }
          groupBy: {
            args: Prisma.AgendamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgendamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgendamentoCountArgs<ExtArgs>
            result: $Utils.Optional<AgendamentoCountAggregateOutputType> | number
          }
        }
      }
      AgendamentoPaciente: {
        payload: Prisma.$AgendamentoPacientePayload<ExtArgs>
        fields: Prisma.AgendamentoPacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgendamentoPacienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgendamentoPacienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPacientePayload>
          }
          findFirst: {
            args: Prisma.AgendamentoPacienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgendamentoPacienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPacientePayload>
          }
          findMany: {
            args: Prisma.AgendamentoPacienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPacientePayload>[]
          }
          create: {
            args: Prisma.AgendamentoPacienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPacientePayload>
          }
          createMany: {
            args: Prisma.AgendamentoPacienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgendamentoPacienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPacientePayload>[]
          }
          delete: {
            args: Prisma.AgendamentoPacienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPacientePayload>
          }
          update: {
            args: Prisma.AgendamentoPacienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPacientePayload>
          }
          deleteMany: {
            args: Prisma.AgendamentoPacienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgendamentoPacienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgendamentoPacienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPacientePayload>[]
          }
          upsert: {
            args: Prisma.AgendamentoPacienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPacientePayload>
          }
          aggregate: {
            args: Prisma.AgendamentoPacienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgendamentoPaciente>
          }
          groupBy: {
            args: Prisma.AgendamentoPacienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgendamentoPacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgendamentoPacienteCountArgs<ExtArgs>
            result: $Utils.Optional<AgendamentoPacienteCountAggregateOutputType> | number
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
    convenio?: ConvenioOmit
    paciente?: PacienteOmit
    especialidade?: EspecialidadeOmit
    pacienteEspecialidade?: PacienteEspecialidadeOmit
    profissional?: ProfissionalOmit
    horarioAtendimento?: HorarioAtendimentoOmit
    agendamento?: AgendamentoOmit
    agendamentoPaciente?: AgendamentoPacienteOmit
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
   * Count Type ConvenioCountOutputType
   */

  export type ConvenioCountOutputType = {
    pacientes: number
  }

  export type ConvenioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | ConvenioCountOutputTypeCountPacientesArgs
  }

  // Custom InputTypes
  /**
   * ConvenioCountOutputType without action
   */
  export type ConvenioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConvenioCountOutputType
     */
    select?: ConvenioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConvenioCountOutputType without action
   */
  export type ConvenioCountOutputTypeCountPacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
  }


  /**
   * Count Type PacienteCountOutputType
   */

  export type PacienteCountOutputType = {
    especialidades: number
    agendamentos: number
  }

  export type PacienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especialidades?: boolean | PacienteCountOutputTypeCountEspecialidadesArgs
    agendamentos?: boolean | PacienteCountOutputTypeCountAgendamentosArgs
  }

  // Custom InputTypes
  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteCountOutputType
     */
    select?: PacienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountEspecialidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteEspecialidadeWhereInput
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentoPacienteWhereInput
  }


  /**
   * Count Type EspecialidadeCountOutputType
   */

  export type EspecialidadeCountOutputType = {
    profissionais: number
    agendamentos: number
    pacientes: number
  }

  export type EspecialidadeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissionais?: boolean | EspecialidadeCountOutputTypeCountProfissionaisArgs
    agendamentos?: boolean | EspecialidadeCountOutputTypeCountAgendamentosArgs
    pacientes?: boolean | EspecialidadeCountOutputTypeCountPacientesArgs
  }

  // Custom InputTypes
  /**
   * EspecialidadeCountOutputType without action
   */
  export type EspecialidadeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecialidadeCountOutputType
     */
    select?: EspecialidadeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EspecialidadeCountOutputType without action
   */
  export type EspecialidadeCountOutputTypeCountProfissionaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfissionalWhereInput
  }

  /**
   * EspecialidadeCountOutputType without action
   */
  export type EspecialidadeCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentoWhereInput
  }

  /**
   * EspecialidadeCountOutputType without action
   */
  export type EspecialidadeCountOutputTypeCountPacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteEspecialidadeWhereInput
  }


  /**
   * Count Type ProfissionalCountOutputType
   */

  export type ProfissionalCountOutputType = {
    horarios: number
    agendamentos: number
  }

  export type ProfissionalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    horarios?: boolean | ProfissionalCountOutputTypeCountHorariosArgs
    agendamentos?: boolean | ProfissionalCountOutputTypeCountAgendamentosArgs
  }

  // Custom InputTypes
  /**
   * ProfissionalCountOutputType without action
   */
  export type ProfissionalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfissionalCountOutputType
     */
    select?: ProfissionalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfissionalCountOutputType without action
   */
  export type ProfissionalCountOutputTypeCountHorariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorarioAtendimentoWhereInput
  }

  /**
   * ProfissionalCountOutputType without action
   */
  export type ProfissionalCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentoWhereInput
  }


  /**
   * Count Type AgendamentoCountOutputType
   */

  export type AgendamentoCountOutputType = {
    pacientes: number
  }

  export type AgendamentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | AgendamentoCountOutputTypeCountPacientesArgs
  }

  // Custom InputTypes
  /**
   * AgendamentoCountOutputType without action
   */
  export type AgendamentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendamentoCountOutputType
     */
    select?: AgendamentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgendamentoCountOutputType without action
   */
  export type AgendamentoCountOutputTypeCountPacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentoPacienteWhereInput
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
    nome: string | null
    email: string | null
    senha: string | null
    papel: $Enums.Papel | null
    ativo: boolean | null
    profissionalId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    papel: $Enums.Papel | null
    ativo: boolean | null
    profissionalId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    papel: number
    ativo: number
    profissionalId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    papel?: true
    ativo?: true
    profissionalId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    papel?: true
    ativo?: true
    profissionalId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    papel?: true
    ativo?: true
    profissionalId?: true
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
    nome: string
    email: string
    senha: string
    papel: $Enums.Papel
    ativo: boolean
    profissionalId: string | null
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
    nome?: boolean
    email?: boolean
    senha?: boolean
    papel?: boolean
    ativo?: boolean
    profissionalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profissional?: boolean | User$profissionalArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    papel?: boolean
    ativo?: boolean
    profissionalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profissional?: boolean | User$profissionalArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    papel?: boolean
    ativo?: boolean
    profissionalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profissional?: boolean | User$profissionalArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    papel?: boolean
    ativo?: boolean
    profissionalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "papel" | "ativo" | "profissionalId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | User$profissionalArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | User$profissionalArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | User$profissionalArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profissional: Prisma.$ProfissionalPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      senha: string
      papel: $Enums.Papel
      ativo: boolean
      profissionalId: string | null
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
    profissional<T extends User$profissionalArgs<ExtArgs> = {}>(args?: Subset<T, User$profissionalArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly nome: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly senha: FieldRef<"User", 'String'>
    readonly papel: FieldRef<"User", 'Papel'>
    readonly ativo: FieldRef<"User", 'Boolean'>
    readonly profissionalId: FieldRef<"User", 'String'>
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.profissional
   */
  export type User$profissionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    where?: ProfissionalWhereInput
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
   * Model Convenio
   */

  export type AggregateConvenio = {
    _count: ConvenioCountAggregateOutputType | null
    _min: ConvenioMinAggregateOutputType | null
    _max: ConvenioMaxAggregateOutputType | null
  }

  export type ConvenioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConvenioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConvenioCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConvenioMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConvenioMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConvenioCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConvenioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Convenio to aggregate.
     */
    where?: ConvenioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convenios to fetch.
     */
    orderBy?: ConvenioOrderByWithRelationInput | ConvenioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConvenioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convenios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convenios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Convenios
    **/
    _count?: true | ConvenioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConvenioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConvenioMaxAggregateInputType
  }

  export type GetConvenioAggregateType<T extends ConvenioAggregateArgs> = {
        [P in keyof T & keyof AggregateConvenio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConvenio[P]>
      : GetScalarType<T[P], AggregateConvenio[P]>
  }




  export type ConvenioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConvenioWhereInput
    orderBy?: ConvenioOrderByWithAggregationInput | ConvenioOrderByWithAggregationInput[]
    by: ConvenioScalarFieldEnum[] | ConvenioScalarFieldEnum
    having?: ConvenioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConvenioCountAggregateInputType | true
    _min?: ConvenioMinAggregateInputType
    _max?: ConvenioMaxAggregateInputType
  }

  export type ConvenioGroupByOutputType = {
    id: string
    nome: string
    descricao: string | null
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: ConvenioCountAggregateOutputType | null
    _min: ConvenioMinAggregateOutputType | null
    _max: ConvenioMaxAggregateOutputType | null
  }

  type GetConvenioGroupByPayload<T extends ConvenioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConvenioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConvenioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConvenioGroupByOutputType[P]>
            : GetScalarType<T[P], ConvenioGroupByOutputType[P]>
        }
      >
    >


  export type ConvenioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pacientes?: boolean | Convenio$pacientesArgs<ExtArgs>
    _count?: boolean | ConvenioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["convenio"]>

  export type ConvenioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["convenio"]>

  export type ConvenioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["convenio"]>

  export type ConvenioSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConvenioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "ativo" | "createdAt" | "updatedAt", ExtArgs["result"]["convenio"]>
  export type ConvenioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | Convenio$pacientesArgs<ExtArgs>
    _count?: boolean | ConvenioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConvenioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConvenioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConvenioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Convenio"
    objects: {
      pacientes: Prisma.$PacientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      descricao: string | null
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["convenio"]>
    composites: {}
  }

  type ConvenioGetPayload<S extends boolean | null | undefined | ConvenioDefaultArgs> = $Result.GetResult<Prisma.$ConvenioPayload, S>

  type ConvenioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConvenioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConvenioCountAggregateInputType | true
    }

  export interface ConvenioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Convenio'], meta: { name: 'Convenio' } }
    /**
     * Find zero or one Convenio that matches the filter.
     * @param {ConvenioFindUniqueArgs} args - Arguments to find a Convenio
     * @example
     * // Get one Convenio
     * const convenio = await prisma.convenio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConvenioFindUniqueArgs>(args: SelectSubset<T, ConvenioFindUniqueArgs<ExtArgs>>): Prisma__ConvenioClient<$Result.GetResult<Prisma.$ConvenioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Convenio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConvenioFindUniqueOrThrowArgs} args - Arguments to find a Convenio
     * @example
     * // Get one Convenio
     * const convenio = await prisma.convenio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConvenioFindUniqueOrThrowArgs>(args: SelectSubset<T, ConvenioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConvenioClient<$Result.GetResult<Prisma.$ConvenioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Convenio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvenioFindFirstArgs} args - Arguments to find a Convenio
     * @example
     * // Get one Convenio
     * const convenio = await prisma.convenio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConvenioFindFirstArgs>(args?: SelectSubset<T, ConvenioFindFirstArgs<ExtArgs>>): Prisma__ConvenioClient<$Result.GetResult<Prisma.$ConvenioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Convenio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvenioFindFirstOrThrowArgs} args - Arguments to find a Convenio
     * @example
     * // Get one Convenio
     * const convenio = await prisma.convenio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConvenioFindFirstOrThrowArgs>(args?: SelectSubset<T, ConvenioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConvenioClient<$Result.GetResult<Prisma.$ConvenioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Convenios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvenioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Convenios
     * const convenios = await prisma.convenio.findMany()
     * 
     * // Get first 10 Convenios
     * const convenios = await prisma.convenio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const convenioWithIdOnly = await prisma.convenio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConvenioFindManyArgs>(args?: SelectSubset<T, ConvenioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConvenioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Convenio.
     * @param {ConvenioCreateArgs} args - Arguments to create a Convenio.
     * @example
     * // Create one Convenio
     * const Convenio = await prisma.convenio.create({
     *   data: {
     *     // ... data to create a Convenio
     *   }
     * })
     * 
     */
    create<T extends ConvenioCreateArgs>(args: SelectSubset<T, ConvenioCreateArgs<ExtArgs>>): Prisma__ConvenioClient<$Result.GetResult<Prisma.$ConvenioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Convenios.
     * @param {ConvenioCreateManyArgs} args - Arguments to create many Convenios.
     * @example
     * // Create many Convenios
     * const convenio = await prisma.convenio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConvenioCreateManyArgs>(args?: SelectSubset<T, ConvenioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Convenios and returns the data saved in the database.
     * @param {ConvenioCreateManyAndReturnArgs} args - Arguments to create many Convenios.
     * @example
     * // Create many Convenios
     * const convenio = await prisma.convenio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Convenios and only return the `id`
     * const convenioWithIdOnly = await prisma.convenio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConvenioCreateManyAndReturnArgs>(args?: SelectSubset<T, ConvenioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConvenioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Convenio.
     * @param {ConvenioDeleteArgs} args - Arguments to delete one Convenio.
     * @example
     * // Delete one Convenio
     * const Convenio = await prisma.convenio.delete({
     *   where: {
     *     // ... filter to delete one Convenio
     *   }
     * })
     * 
     */
    delete<T extends ConvenioDeleteArgs>(args: SelectSubset<T, ConvenioDeleteArgs<ExtArgs>>): Prisma__ConvenioClient<$Result.GetResult<Prisma.$ConvenioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Convenio.
     * @param {ConvenioUpdateArgs} args - Arguments to update one Convenio.
     * @example
     * // Update one Convenio
     * const convenio = await prisma.convenio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConvenioUpdateArgs>(args: SelectSubset<T, ConvenioUpdateArgs<ExtArgs>>): Prisma__ConvenioClient<$Result.GetResult<Prisma.$ConvenioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Convenios.
     * @param {ConvenioDeleteManyArgs} args - Arguments to filter Convenios to delete.
     * @example
     * // Delete a few Convenios
     * const { count } = await prisma.convenio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConvenioDeleteManyArgs>(args?: SelectSubset<T, ConvenioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Convenios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvenioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Convenios
     * const convenio = await prisma.convenio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConvenioUpdateManyArgs>(args: SelectSubset<T, ConvenioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Convenios and returns the data updated in the database.
     * @param {ConvenioUpdateManyAndReturnArgs} args - Arguments to update many Convenios.
     * @example
     * // Update many Convenios
     * const convenio = await prisma.convenio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Convenios and only return the `id`
     * const convenioWithIdOnly = await prisma.convenio.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConvenioUpdateManyAndReturnArgs>(args: SelectSubset<T, ConvenioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConvenioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Convenio.
     * @param {ConvenioUpsertArgs} args - Arguments to update or create a Convenio.
     * @example
     * // Update or create a Convenio
     * const convenio = await prisma.convenio.upsert({
     *   create: {
     *     // ... data to create a Convenio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Convenio we want to update
     *   }
     * })
     */
    upsert<T extends ConvenioUpsertArgs>(args: SelectSubset<T, ConvenioUpsertArgs<ExtArgs>>): Prisma__ConvenioClient<$Result.GetResult<Prisma.$ConvenioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Convenios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvenioCountArgs} args - Arguments to filter Convenios to count.
     * @example
     * // Count the number of Convenios
     * const count = await prisma.convenio.count({
     *   where: {
     *     // ... the filter for the Convenios we want to count
     *   }
     * })
    **/
    count<T extends ConvenioCountArgs>(
      args?: Subset<T, ConvenioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConvenioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Convenio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvenioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConvenioAggregateArgs>(args: Subset<T, ConvenioAggregateArgs>): Prisma.PrismaPromise<GetConvenioAggregateType<T>>

    /**
     * Group by Convenio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConvenioGroupByArgs} args - Group by arguments.
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
      T extends ConvenioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConvenioGroupByArgs['orderBy'] }
        : { orderBy?: ConvenioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConvenioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConvenioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Convenio model
   */
  readonly fields: ConvenioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Convenio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConvenioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pacientes<T extends Convenio$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, Convenio$pacientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Convenio model
   */
  interface ConvenioFieldRefs {
    readonly id: FieldRef<"Convenio", 'String'>
    readonly nome: FieldRef<"Convenio", 'String'>
    readonly descricao: FieldRef<"Convenio", 'String'>
    readonly ativo: FieldRef<"Convenio", 'Boolean'>
    readonly createdAt: FieldRef<"Convenio", 'DateTime'>
    readonly updatedAt: FieldRef<"Convenio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Convenio findUnique
   */
  export type ConvenioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convenio
     */
    select?: ConvenioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convenio
     */
    omit?: ConvenioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvenioInclude<ExtArgs> | null
    /**
     * Filter, which Convenio to fetch.
     */
    where: ConvenioWhereUniqueInput
  }

  /**
   * Convenio findUniqueOrThrow
   */
  export type ConvenioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convenio
     */
    select?: ConvenioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convenio
     */
    omit?: ConvenioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvenioInclude<ExtArgs> | null
    /**
     * Filter, which Convenio to fetch.
     */
    where: ConvenioWhereUniqueInput
  }

  /**
   * Convenio findFirst
   */
  export type ConvenioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convenio
     */
    select?: ConvenioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convenio
     */
    omit?: ConvenioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvenioInclude<ExtArgs> | null
    /**
     * Filter, which Convenio to fetch.
     */
    where?: ConvenioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convenios to fetch.
     */
    orderBy?: ConvenioOrderByWithRelationInput | ConvenioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Convenios.
     */
    cursor?: ConvenioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convenios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convenios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Convenios.
     */
    distinct?: ConvenioScalarFieldEnum | ConvenioScalarFieldEnum[]
  }

  /**
   * Convenio findFirstOrThrow
   */
  export type ConvenioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convenio
     */
    select?: ConvenioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convenio
     */
    omit?: ConvenioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvenioInclude<ExtArgs> | null
    /**
     * Filter, which Convenio to fetch.
     */
    where?: ConvenioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convenios to fetch.
     */
    orderBy?: ConvenioOrderByWithRelationInput | ConvenioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Convenios.
     */
    cursor?: ConvenioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convenios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convenios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Convenios.
     */
    distinct?: ConvenioScalarFieldEnum | ConvenioScalarFieldEnum[]
  }

  /**
   * Convenio findMany
   */
  export type ConvenioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convenio
     */
    select?: ConvenioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convenio
     */
    omit?: ConvenioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvenioInclude<ExtArgs> | null
    /**
     * Filter, which Convenios to fetch.
     */
    where?: ConvenioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Convenios to fetch.
     */
    orderBy?: ConvenioOrderByWithRelationInput | ConvenioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Convenios.
     */
    cursor?: ConvenioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Convenios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Convenios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Convenios.
     */
    distinct?: ConvenioScalarFieldEnum | ConvenioScalarFieldEnum[]
  }

  /**
   * Convenio create
   */
  export type ConvenioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convenio
     */
    select?: ConvenioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convenio
     */
    omit?: ConvenioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvenioInclude<ExtArgs> | null
    /**
     * The data needed to create a Convenio.
     */
    data: XOR<ConvenioCreateInput, ConvenioUncheckedCreateInput>
  }

  /**
   * Convenio createMany
   */
  export type ConvenioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Convenios.
     */
    data: ConvenioCreateManyInput | ConvenioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Convenio createManyAndReturn
   */
  export type ConvenioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convenio
     */
    select?: ConvenioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Convenio
     */
    omit?: ConvenioOmit<ExtArgs> | null
    /**
     * The data used to create many Convenios.
     */
    data: ConvenioCreateManyInput | ConvenioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Convenio update
   */
  export type ConvenioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convenio
     */
    select?: ConvenioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convenio
     */
    omit?: ConvenioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvenioInclude<ExtArgs> | null
    /**
     * The data needed to update a Convenio.
     */
    data: XOR<ConvenioUpdateInput, ConvenioUncheckedUpdateInput>
    /**
     * Choose, which Convenio to update.
     */
    where: ConvenioWhereUniqueInput
  }

  /**
   * Convenio updateMany
   */
  export type ConvenioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Convenios.
     */
    data: XOR<ConvenioUpdateManyMutationInput, ConvenioUncheckedUpdateManyInput>
    /**
     * Filter which Convenios to update
     */
    where?: ConvenioWhereInput
    /**
     * Limit how many Convenios to update.
     */
    limit?: number
  }

  /**
   * Convenio updateManyAndReturn
   */
  export type ConvenioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convenio
     */
    select?: ConvenioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Convenio
     */
    omit?: ConvenioOmit<ExtArgs> | null
    /**
     * The data used to update Convenios.
     */
    data: XOR<ConvenioUpdateManyMutationInput, ConvenioUncheckedUpdateManyInput>
    /**
     * Filter which Convenios to update
     */
    where?: ConvenioWhereInput
    /**
     * Limit how many Convenios to update.
     */
    limit?: number
  }

  /**
   * Convenio upsert
   */
  export type ConvenioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convenio
     */
    select?: ConvenioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convenio
     */
    omit?: ConvenioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvenioInclude<ExtArgs> | null
    /**
     * The filter to search for the Convenio to update in case it exists.
     */
    where: ConvenioWhereUniqueInput
    /**
     * In case the Convenio found by the `where` argument doesn't exist, create a new Convenio with this data.
     */
    create: XOR<ConvenioCreateInput, ConvenioUncheckedCreateInput>
    /**
     * In case the Convenio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConvenioUpdateInput, ConvenioUncheckedUpdateInput>
  }

  /**
   * Convenio delete
   */
  export type ConvenioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convenio
     */
    select?: ConvenioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convenio
     */
    omit?: ConvenioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvenioInclude<ExtArgs> | null
    /**
     * Filter which Convenio to delete.
     */
    where: ConvenioWhereUniqueInput
  }

  /**
   * Convenio deleteMany
   */
  export type ConvenioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Convenios to delete
     */
    where?: ConvenioWhereInput
    /**
     * Limit how many Convenios to delete.
     */
    limit?: number
  }

  /**
   * Convenio.pacientes
   */
  export type Convenio$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    cursor?: PacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Convenio without action
   */
  export type ConvenioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convenio
     */
    select?: ConvenioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convenio
     */
    omit?: ConvenioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvenioInclude<ExtArgs> | null
  }


  /**
   * Model Paciente
   */

  export type AggregatePaciente = {
    _count: PacienteCountAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  export type PacienteMinAggregateOutputType = {
    id: string | null
    nome: string | null
    dataNasc: Date | null
    cpf: string | null
    telefone: string | null
    telefone2: string | null
    email: string | null
    cep: string | null
    logradouro: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    diagnostico: string | null
    observacoes: string | null
    perfil: string | null
    nomeResponsavel: string | null
    telefoneResponsavel: string | null
    relacaoResponsavel: string | null
    convenioId: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PacienteMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    dataNasc: Date | null
    cpf: string | null
    telefone: string | null
    telefone2: string | null
    email: string | null
    cep: string | null
    logradouro: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    diagnostico: string | null
    observacoes: string | null
    perfil: string | null
    nomeResponsavel: string | null
    telefoneResponsavel: string | null
    relacaoResponsavel: string | null
    convenioId: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PacienteCountAggregateOutputType = {
    id: number
    nome: number
    dataNasc: number
    cpf: number
    telefone: number
    telefone2: number
    email: number
    cep: number
    logradouro: number
    numero: number
    complemento: number
    bairro: number
    cidade: number
    estado: number
    diagnostico: number
    observacoes: number
    perfil: number
    nomeResponsavel: number
    telefoneResponsavel: number
    relacaoResponsavel: number
    convenioId: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PacienteMinAggregateInputType = {
    id?: true
    nome?: true
    dataNasc?: true
    cpf?: true
    telefone?: true
    telefone2?: true
    email?: true
    cep?: true
    logradouro?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    estado?: true
    diagnostico?: true
    observacoes?: true
    perfil?: true
    nomeResponsavel?: true
    telefoneResponsavel?: true
    relacaoResponsavel?: true
    convenioId?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PacienteMaxAggregateInputType = {
    id?: true
    nome?: true
    dataNasc?: true
    cpf?: true
    telefone?: true
    telefone2?: true
    email?: true
    cep?: true
    logradouro?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    estado?: true
    diagnostico?: true
    observacoes?: true
    perfil?: true
    nomeResponsavel?: true
    telefoneResponsavel?: true
    relacaoResponsavel?: true
    convenioId?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PacienteCountAggregateInputType = {
    id?: true
    nome?: true
    dataNasc?: true
    cpf?: true
    telefone?: true
    telefone2?: true
    email?: true
    cep?: true
    logradouro?: true
    numero?: true
    complemento?: true
    bairro?: true
    cidade?: true
    estado?: true
    diagnostico?: true
    observacoes?: true
    perfil?: true
    nomeResponsavel?: true
    telefoneResponsavel?: true
    relacaoResponsavel?: true
    convenioId?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PacienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paciente to aggregate.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pacientes
    **/
    _count?: true | PacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacienteMaxAggregateInputType
  }

  export type GetPacienteAggregateType<T extends PacienteAggregateArgs> = {
        [P in keyof T & keyof AggregatePaciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaciente[P]>
      : GetScalarType<T[P], AggregatePaciente[P]>
  }




  export type PacienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithAggregationInput | PacienteOrderByWithAggregationInput[]
    by: PacienteScalarFieldEnum[] | PacienteScalarFieldEnum
    having?: PacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacienteCountAggregateInputType | true
    _min?: PacienteMinAggregateInputType
    _max?: PacienteMaxAggregateInputType
  }

  export type PacienteGroupByOutputType = {
    id: string
    nome: string
    dataNasc: Date | null
    cpf: string | null
    telefone: string
    telefone2: string | null
    email: string | null
    cep: string | null
    logradouro: string | null
    numero: string | null
    complemento: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    diagnostico: string | null
    observacoes: string | null
    perfil: string | null
    nomeResponsavel: string | null
    telefoneResponsavel: string | null
    relacaoResponsavel: string | null
    convenioId: string | null
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: PacienteCountAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  type GetPacienteGroupByPayload<T extends PacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacienteGroupByOutputType[P]>
            : GetScalarType<T[P], PacienteGroupByOutputType[P]>
        }
      >
    >


  export type PacienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    dataNasc?: boolean
    cpf?: boolean
    telefone?: boolean
    telefone2?: boolean
    email?: boolean
    cep?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    diagnostico?: boolean
    observacoes?: boolean
    perfil?: boolean
    nomeResponsavel?: boolean
    telefoneResponsavel?: boolean
    relacaoResponsavel?: boolean
    convenioId?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    convenio?: boolean | Paciente$convenioArgs<ExtArgs>
    especialidades?: boolean | Paciente$especialidadesArgs<ExtArgs>
    agendamentos?: boolean | Paciente$agendamentosArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    dataNasc?: boolean
    cpf?: boolean
    telefone?: boolean
    telefone2?: boolean
    email?: boolean
    cep?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    diagnostico?: boolean
    observacoes?: boolean
    perfil?: boolean
    nomeResponsavel?: boolean
    telefoneResponsavel?: boolean
    relacaoResponsavel?: boolean
    convenioId?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    convenio?: boolean | Paciente$convenioArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    dataNasc?: boolean
    cpf?: boolean
    telefone?: boolean
    telefone2?: boolean
    email?: boolean
    cep?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    diagnostico?: boolean
    observacoes?: boolean
    perfil?: boolean
    nomeResponsavel?: boolean
    telefoneResponsavel?: boolean
    relacaoResponsavel?: boolean
    convenioId?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    convenio?: boolean | Paciente$convenioArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectScalar = {
    id?: boolean
    nome?: boolean
    dataNasc?: boolean
    cpf?: boolean
    telefone?: boolean
    telefone2?: boolean
    email?: boolean
    cep?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    diagnostico?: boolean
    observacoes?: boolean
    perfil?: boolean
    nomeResponsavel?: boolean
    telefoneResponsavel?: boolean
    relacaoResponsavel?: boolean
    convenioId?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PacienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "dataNasc" | "cpf" | "telefone" | "telefone2" | "email" | "cep" | "logradouro" | "numero" | "complemento" | "bairro" | "cidade" | "estado" | "diagnostico" | "observacoes" | "perfil" | "nomeResponsavel" | "telefoneResponsavel" | "relacaoResponsavel" | "convenioId" | "ativo" | "createdAt" | "updatedAt", ExtArgs["result"]["paciente"]>
  export type PacienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    convenio?: boolean | Paciente$convenioArgs<ExtArgs>
    especialidades?: boolean | Paciente$especialidadesArgs<ExtArgs>
    agendamentos?: boolean | Paciente$agendamentosArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PacienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    convenio?: boolean | Paciente$convenioArgs<ExtArgs>
  }
  export type PacienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    convenio?: boolean | Paciente$convenioArgs<ExtArgs>
  }

  export type $PacientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paciente"
    objects: {
      convenio: Prisma.$ConvenioPayload<ExtArgs> | null
      especialidades: Prisma.$PacienteEspecialidadePayload<ExtArgs>[]
      agendamentos: Prisma.$AgendamentoPacientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      dataNasc: Date | null
      cpf: string | null
      telefone: string
      telefone2: string | null
      email: string | null
      cep: string | null
      logradouro: string | null
      numero: string | null
      complemento: string | null
      bairro: string | null
      cidade: string | null
      estado: string | null
      diagnostico: string | null
      observacoes: string | null
      perfil: string | null
      nomeResponsavel: string | null
      telefoneResponsavel: string | null
      relacaoResponsavel: string | null
      convenioId: string | null
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paciente"]>
    composites: {}
  }

  type PacienteGetPayload<S extends boolean | null | undefined | PacienteDefaultArgs> = $Result.GetResult<Prisma.$PacientePayload, S>

  type PacienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacienteCountAggregateInputType | true
    }

  export interface PacienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paciente'], meta: { name: 'Paciente' } }
    /**
     * Find zero or one Paciente that matches the filter.
     * @param {PacienteFindUniqueArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacienteFindUniqueArgs>(args: SelectSubset<T, PacienteFindUniqueArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paciente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacienteFindUniqueOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacienteFindUniqueOrThrowArgs>(args: SelectSubset<T, PacienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacienteFindFirstArgs>(args?: SelectSubset<T, PacienteFindFirstArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacienteFindFirstOrThrowArgs>(args?: SelectSubset<T, PacienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.paciente.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.paciente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacienteWithIdOnly = await prisma.paciente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PacienteFindManyArgs>(args?: SelectSubset<T, PacienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paciente.
     * @param {PacienteCreateArgs} args - Arguments to create a Paciente.
     * @example
     * // Create one Paciente
     * const Paciente = await prisma.paciente.create({
     *   data: {
     *     // ... data to create a Paciente
     *   }
     * })
     * 
     */
    create<T extends PacienteCreateArgs>(args: SelectSubset<T, PacienteCreateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacientes.
     * @param {PacienteCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacienteCreateManyArgs>(args?: SelectSubset<T, PacienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pacientes and returns the data saved in the database.
     * @param {PacienteCreateManyAndReturnArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pacientes and only return the `id`
     * const pacienteWithIdOnly = await prisma.paciente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacienteCreateManyAndReturnArgs>(args?: SelectSubset<T, PacienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paciente.
     * @param {PacienteDeleteArgs} args - Arguments to delete one Paciente.
     * @example
     * // Delete one Paciente
     * const Paciente = await prisma.paciente.delete({
     *   where: {
     *     // ... filter to delete one Paciente
     *   }
     * })
     * 
     */
    delete<T extends PacienteDeleteArgs>(args: SelectSubset<T, PacienteDeleteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paciente.
     * @param {PacienteUpdateArgs} args - Arguments to update one Paciente.
     * @example
     * // Update one Paciente
     * const paciente = await prisma.paciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacienteUpdateArgs>(args: SelectSubset<T, PacienteUpdateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacientes.
     * @param {PacienteDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.paciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacienteDeleteManyArgs>(args?: SelectSubset<T, PacienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacienteUpdateManyArgs>(args: SelectSubset<T, PacienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes and returns the data updated in the database.
     * @param {PacienteUpdateManyAndReturnArgs} args - Arguments to update many Pacientes.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pacientes and only return the `id`
     * const pacienteWithIdOnly = await prisma.paciente.updateManyAndReturn({
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
    updateManyAndReturn<T extends PacienteUpdateManyAndReturnArgs>(args: SelectSubset<T, PacienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paciente.
     * @param {PacienteUpsertArgs} args - Arguments to update or create a Paciente.
     * @example
     * // Update or create a Paciente
     * const paciente = await prisma.paciente.upsert({
     *   create: {
     *     // ... data to create a Paciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paciente we want to update
     *   }
     * })
     */
    upsert<T extends PacienteUpsertArgs>(args: SelectSubset<T, PacienteUpsertArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.paciente.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends PacienteCountArgs>(
      args?: Subset<T, PacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacienteAggregateArgs>(args: Subset<T, PacienteAggregateArgs>): Prisma.PrismaPromise<GetPacienteAggregateType<T>>

    /**
     * Group by Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteGroupByArgs} args - Group by arguments.
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
      T extends PacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacienteGroupByArgs['orderBy'] }
        : { orderBy?: PacienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paciente model
   */
  readonly fields: PacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    convenio<T extends Paciente$convenioArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$convenioArgs<ExtArgs>>): Prisma__ConvenioClient<$Result.GetResult<Prisma.$ConvenioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    especialidades<T extends Paciente$especialidadesArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$especialidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacienteEspecialidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agendamentos<T extends Paciente$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Paciente model
   */
  interface PacienteFieldRefs {
    readonly id: FieldRef<"Paciente", 'String'>
    readonly nome: FieldRef<"Paciente", 'String'>
    readonly dataNasc: FieldRef<"Paciente", 'DateTime'>
    readonly cpf: FieldRef<"Paciente", 'String'>
    readonly telefone: FieldRef<"Paciente", 'String'>
    readonly telefone2: FieldRef<"Paciente", 'String'>
    readonly email: FieldRef<"Paciente", 'String'>
    readonly cep: FieldRef<"Paciente", 'String'>
    readonly logradouro: FieldRef<"Paciente", 'String'>
    readonly numero: FieldRef<"Paciente", 'String'>
    readonly complemento: FieldRef<"Paciente", 'String'>
    readonly bairro: FieldRef<"Paciente", 'String'>
    readonly cidade: FieldRef<"Paciente", 'String'>
    readonly estado: FieldRef<"Paciente", 'String'>
    readonly diagnostico: FieldRef<"Paciente", 'String'>
    readonly observacoes: FieldRef<"Paciente", 'String'>
    readonly perfil: FieldRef<"Paciente", 'String'>
    readonly nomeResponsavel: FieldRef<"Paciente", 'String'>
    readonly telefoneResponsavel: FieldRef<"Paciente", 'String'>
    readonly relacaoResponsavel: FieldRef<"Paciente", 'String'>
    readonly convenioId: FieldRef<"Paciente", 'String'>
    readonly ativo: FieldRef<"Paciente", 'Boolean'>
    readonly createdAt: FieldRef<"Paciente", 'DateTime'>
    readonly updatedAt: FieldRef<"Paciente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Paciente findUnique
   */
  export type PacienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findUniqueOrThrow
   */
  export type PacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findFirst
   */
  export type PacienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findFirstOrThrow
   */
  export type PacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findMany
   */
  export type PacienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente create
   */
  export type PacienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Paciente.
     */
    data: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
  }

  /**
   * Paciente createMany
   */
  export type PacienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paciente createManyAndReturn
   */
  export type PacienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Paciente update
   */
  export type PacienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Paciente.
     */
    data: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
    /**
     * Choose, which Paciente to update.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente updateMany
   */
  export type PacienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Paciente updateManyAndReturn
   */
  export type PacienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Paciente upsert
   */
  export type PacienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Paciente to update in case it exists.
     */
    where: PacienteWhereUniqueInput
    /**
     * In case the Paciente found by the `where` argument doesn't exist, create a new Paciente with this data.
     */
    create: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
    /**
     * In case the Paciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
  }

  /**
   * Paciente delete
   */
  export type PacienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter which Paciente to delete.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente deleteMany
   */
  export type PacienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacientes to delete
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to delete.
     */
    limit?: number
  }

  /**
   * Paciente.convenio
   */
  export type Paciente$convenioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Convenio
     */
    select?: ConvenioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Convenio
     */
    omit?: ConvenioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConvenioInclude<ExtArgs> | null
    where?: ConvenioWhereInput
  }

  /**
   * Paciente.especialidades
   */
  export type Paciente$especialidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteEspecialidade
     */
    select?: PacienteEspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteEspecialidade
     */
    omit?: PacienteEspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteEspecialidadeInclude<ExtArgs> | null
    where?: PacienteEspecialidadeWhereInput
    orderBy?: PacienteEspecialidadeOrderByWithRelationInput | PacienteEspecialidadeOrderByWithRelationInput[]
    cursor?: PacienteEspecialidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacienteEspecialidadeScalarFieldEnum | PacienteEspecialidadeScalarFieldEnum[]
  }

  /**
   * Paciente.agendamentos
   */
  export type Paciente$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendamentoPaciente
     */
    select?: AgendamentoPacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendamentoPaciente
     */
    omit?: AgendamentoPacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoPacienteInclude<ExtArgs> | null
    where?: AgendamentoPacienteWhereInput
    orderBy?: AgendamentoPacienteOrderByWithRelationInput | AgendamentoPacienteOrderByWithRelationInput[]
    cursor?: AgendamentoPacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendamentoPacienteScalarFieldEnum | AgendamentoPacienteScalarFieldEnum[]
  }

  /**
   * Paciente without action
   */
  export type PacienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
  }


  /**
   * Model Especialidade
   */

  export type AggregateEspecialidade = {
    _count: EspecialidadeCountAggregateOutputType | null
    _min: EspecialidadeMinAggregateOutputType | null
    _max: EspecialidadeMaxAggregateOutputType | null
  }

  export type EspecialidadeMinAggregateOutputType = {
    id: string | null
    nome: string | null
    tipo: $Enums.TipoEspecialidade | null
    descricao: string | null
    cor: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EspecialidadeMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    tipo: $Enums.TipoEspecialidade | null
    descricao: string | null
    cor: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EspecialidadeCountAggregateOutputType = {
    id: number
    nome: number
    tipo: number
    descricao: number
    cor: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EspecialidadeMinAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    descricao?: true
    cor?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EspecialidadeMaxAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    descricao?: true
    cor?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EspecialidadeCountAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    descricao?: true
    cor?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EspecialidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidade to aggregate.
     */
    where?: EspecialidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidades to fetch.
     */
    orderBy?: EspecialidadeOrderByWithRelationInput | EspecialidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EspecialidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Especialidades
    **/
    _count?: true | EspecialidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EspecialidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EspecialidadeMaxAggregateInputType
  }

  export type GetEspecialidadeAggregateType<T extends EspecialidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateEspecialidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEspecialidade[P]>
      : GetScalarType<T[P], AggregateEspecialidade[P]>
  }




  export type EspecialidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspecialidadeWhereInput
    orderBy?: EspecialidadeOrderByWithAggregationInput | EspecialidadeOrderByWithAggregationInput[]
    by: EspecialidadeScalarFieldEnum[] | EspecialidadeScalarFieldEnum
    having?: EspecialidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EspecialidadeCountAggregateInputType | true
    _min?: EspecialidadeMinAggregateInputType
    _max?: EspecialidadeMaxAggregateInputType
  }

  export type EspecialidadeGroupByOutputType = {
    id: string
    nome: string
    tipo: $Enums.TipoEspecialidade
    descricao: string | null
    cor: string | null
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: EspecialidadeCountAggregateOutputType | null
    _min: EspecialidadeMinAggregateOutputType | null
    _max: EspecialidadeMaxAggregateOutputType | null
  }

  type GetEspecialidadeGroupByPayload<T extends EspecialidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EspecialidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EspecialidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EspecialidadeGroupByOutputType[P]>
            : GetScalarType<T[P], EspecialidadeGroupByOutputType[P]>
        }
      >
    >


  export type EspecialidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    descricao?: boolean
    cor?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profissionais?: boolean | Especialidade$profissionaisArgs<ExtArgs>
    agendamentos?: boolean | Especialidade$agendamentosArgs<ExtArgs>
    pacientes?: boolean | Especialidade$pacientesArgs<ExtArgs>
    _count?: boolean | EspecialidadeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["especialidade"]>

  export type EspecialidadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    descricao?: boolean
    cor?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["especialidade"]>

  export type EspecialidadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    descricao?: boolean
    cor?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["especialidade"]>

  export type EspecialidadeSelectScalar = {
    id?: boolean
    nome?: boolean
    tipo?: boolean
    descricao?: boolean
    cor?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EspecialidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "tipo" | "descricao" | "cor" | "ativo" | "createdAt" | "updatedAt", ExtArgs["result"]["especialidade"]>
  export type EspecialidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissionais?: boolean | Especialidade$profissionaisArgs<ExtArgs>
    agendamentos?: boolean | Especialidade$agendamentosArgs<ExtArgs>
    pacientes?: boolean | Especialidade$pacientesArgs<ExtArgs>
    _count?: boolean | EspecialidadeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EspecialidadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EspecialidadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EspecialidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Especialidade"
    objects: {
      profissionais: Prisma.$ProfissionalPayload<ExtArgs>[]
      agendamentos: Prisma.$AgendamentoPayload<ExtArgs>[]
      pacientes: Prisma.$PacienteEspecialidadePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      tipo: $Enums.TipoEspecialidade
      descricao: string | null
      cor: string | null
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["especialidade"]>
    composites: {}
  }

  type EspecialidadeGetPayload<S extends boolean | null | undefined | EspecialidadeDefaultArgs> = $Result.GetResult<Prisma.$EspecialidadePayload, S>

  type EspecialidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EspecialidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EspecialidadeCountAggregateInputType | true
    }

  export interface EspecialidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Especialidade'], meta: { name: 'Especialidade' } }
    /**
     * Find zero or one Especialidade that matches the filter.
     * @param {EspecialidadeFindUniqueArgs} args - Arguments to find a Especialidade
     * @example
     * // Get one Especialidade
     * const especialidade = await prisma.especialidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EspecialidadeFindUniqueArgs>(args: SelectSubset<T, EspecialidadeFindUniqueArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Especialidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EspecialidadeFindUniqueOrThrowArgs} args - Arguments to find a Especialidade
     * @example
     * // Get one Especialidade
     * const especialidade = await prisma.especialidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EspecialidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, EspecialidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especialidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeFindFirstArgs} args - Arguments to find a Especialidade
     * @example
     * // Get one Especialidade
     * const especialidade = await prisma.especialidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EspecialidadeFindFirstArgs>(args?: SelectSubset<T, EspecialidadeFindFirstArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Especialidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeFindFirstOrThrowArgs} args - Arguments to find a Especialidade
     * @example
     * // Get one Especialidade
     * const especialidade = await prisma.especialidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EspecialidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, EspecialidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Especialidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Especialidades
     * const especialidades = await prisma.especialidade.findMany()
     * 
     * // Get first 10 Especialidades
     * const especialidades = await prisma.especialidade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const especialidadeWithIdOnly = await prisma.especialidade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EspecialidadeFindManyArgs>(args?: SelectSubset<T, EspecialidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Especialidade.
     * @param {EspecialidadeCreateArgs} args - Arguments to create a Especialidade.
     * @example
     * // Create one Especialidade
     * const Especialidade = await prisma.especialidade.create({
     *   data: {
     *     // ... data to create a Especialidade
     *   }
     * })
     * 
     */
    create<T extends EspecialidadeCreateArgs>(args: SelectSubset<T, EspecialidadeCreateArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Especialidades.
     * @param {EspecialidadeCreateManyArgs} args - Arguments to create many Especialidades.
     * @example
     * // Create many Especialidades
     * const especialidade = await prisma.especialidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EspecialidadeCreateManyArgs>(args?: SelectSubset<T, EspecialidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Especialidades and returns the data saved in the database.
     * @param {EspecialidadeCreateManyAndReturnArgs} args - Arguments to create many Especialidades.
     * @example
     * // Create many Especialidades
     * const especialidade = await prisma.especialidade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Especialidades and only return the `id`
     * const especialidadeWithIdOnly = await prisma.especialidade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EspecialidadeCreateManyAndReturnArgs>(args?: SelectSubset<T, EspecialidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Especialidade.
     * @param {EspecialidadeDeleteArgs} args - Arguments to delete one Especialidade.
     * @example
     * // Delete one Especialidade
     * const Especialidade = await prisma.especialidade.delete({
     *   where: {
     *     // ... filter to delete one Especialidade
     *   }
     * })
     * 
     */
    delete<T extends EspecialidadeDeleteArgs>(args: SelectSubset<T, EspecialidadeDeleteArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Especialidade.
     * @param {EspecialidadeUpdateArgs} args - Arguments to update one Especialidade.
     * @example
     * // Update one Especialidade
     * const especialidade = await prisma.especialidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EspecialidadeUpdateArgs>(args: SelectSubset<T, EspecialidadeUpdateArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Especialidades.
     * @param {EspecialidadeDeleteManyArgs} args - Arguments to filter Especialidades to delete.
     * @example
     * // Delete a few Especialidades
     * const { count } = await prisma.especialidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EspecialidadeDeleteManyArgs>(args?: SelectSubset<T, EspecialidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Especialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Especialidades
     * const especialidade = await prisma.especialidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EspecialidadeUpdateManyArgs>(args: SelectSubset<T, EspecialidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Especialidades and returns the data updated in the database.
     * @param {EspecialidadeUpdateManyAndReturnArgs} args - Arguments to update many Especialidades.
     * @example
     * // Update many Especialidades
     * const especialidade = await prisma.especialidade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Especialidades and only return the `id`
     * const especialidadeWithIdOnly = await prisma.especialidade.updateManyAndReturn({
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
    updateManyAndReturn<T extends EspecialidadeUpdateManyAndReturnArgs>(args: SelectSubset<T, EspecialidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Especialidade.
     * @param {EspecialidadeUpsertArgs} args - Arguments to update or create a Especialidade.
     * @example
     * // Update or create a Especialidade
     * const especialidade = await prisma.especialidade.upsert({
     *   create: {
     *     // ... data to create a Especialidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Especialidade we want to update
     *   }
     * })
     */
    upsert<T extends EspecialidadeUpsertArgs>(args: SelectSubset<T, EspecialidadeUpsertArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Especialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeCountArgs} args - Arguments to filter Especialidades to count.
     * @example
     * // Count the number of Especialidades
     * const count = await prisma.especialidade.count({
     *   where: {
     *     // ... the filter for the Especialidades we want to count
     *   }
     * })
    **/
    count<T extends EspecialidadeCountArgs>(
      args?: Subset<T, EspecialidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EspecialidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Especialidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EspecialidadeAggregateArgs>(args: Subset<T, EspecialidadeAggregateArgs>): Prisma.PrismaPromise<GetEspecialidadeAggregateType<T>>

    /**
     * Group by Especialidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadeGroupByArgs} args - Group by arguments.
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
      T extends EspecialidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EspecialidadeGroupByArgs['orderBy'] }
        : { orderBy?: EspecialidadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EspecialidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspecialidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Especialidade model
   */
  readonly fields: EspecialidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Especialidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EspecialidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profissionais<T extends Especialidade$profissionaisArgs<ExtArgs> = {}>(args?: Subset<T, Especialidade$profissionaisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agendamentos<T extends Especialidade$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, Especialidade$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pacientes<T extends Especialidade$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, Especialidade$pacientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacienteEspecialidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Especialidade model
   */
  interface EspecialidadeFieldRefs {
    readonly id: FieldRef<"Especialidade", 'String'>
    readonly nome: FieldRef<"Especialidade", 'String'>
    readonly tipo: FieldRef<"Especialidade", 'TipoEspecialidade'>
    readonly descricao: FieldRef<"Especialidade", 'String'>
    readonly cor: FieldRef<"Especialidade", 'String'>
    readonly ativo: FieldRef<"Especialidade", 'Boolean'>
    readonly createdAt: FieldRef<"Especialidade", 'DateTime'>
    readonly updatedAt: FieldRef<"Especialidade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Especialidade findUnique
   */
  export type EspecialidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * Filter, which Especialidade to fetch.
     */
    where: EspecialidadeWhereUniqueInput
  }

  /**
   * Especialidade findUniqueOrThrow
   */
  export type EspecialidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * Filter, which Especialidade to fetch.
     */
    where: EspecialidadeWhereUniqueInput
  }

  /**
   * Especialidade findFirst
   */
  export type EspecialidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * Filter, which Especialidade to fetch.
     */
    where?: EspecialidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidades to fetch.
     */
    orderBy?: EspecialidadeOrderByWithRelationInput | EspecialidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especialidades.
     */
    cursor?: EspecialidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialidades.
     */
    distinct?: EspecialidadeScalarFieldEnum | EspecialidadeScalarFieldEnum[]
  }

  /**
   * Especialidade findFirstOrThrow
   */
  export type EspecialidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * Filter, which Especialidade to fetch.
     */
    where?: EspecialidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidades to fetch.
     */
    orderBy?: EspecialidadeOrderByWithRelationInput | EspecialidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Especialidades.
     */
    cursor?: EspecialidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialidades.
     */
    distinct?: EspecialidadeScalarFieldEnum | EspecialidadeScalarFieldEnum[]
  }

  /**
   * Especialidade findMany
   */
  export type EspecialidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * Filter, which Especialidades to fetch.
     */
    where?: EspecialidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Especialidades to fetch.
     */
    orderBy?: EspecialidadeOrderByWithRelationInput | EspecialidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Especialidades.
     */
    cursor?: EspecialidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Especialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Especialidades.
     */
    distinct?: EspecialidadeScalarFieldEnum | EspecialidadeScalarFieldEnum[]
  }

  /**
   * Especialidade create
   */
  export type EspecialidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Especialidade.
     */
    data: XOR<EspecialidadeCreateInput, EspecialidadeUncheckedCreateInput>
  }

  /**
   * Especialidade createMany
   */
  export type EspecialidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Especialidades.
     */
    data: EspecialidadeCreateManyInput | EspecialidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Especialidade createManyAndReturn
   */
  export type EspecialidadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * The data used to create many Especialidades.
     */
    data: EspecialidadeCreateManyInput | EspecialidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Especialidade update
   */
  export type EspecialidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Especialidade.
     */
    data: XOR<EspecialidadeUpdateInput, EspecialidadeUncheckedUpdateInput>
    /**
     * Choose, which Especialidade to update.
     */
    where: EspecialidadeWhereUniqueInput
  }

  /**
   * Especialidade updateMany
   */
  export type EspecialidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Especialidades.
     */
    data: XOR<EspecialidadeUpdateManyMutationInput, EspecialidadeUncheckedUpdateManyInput>
    /**
     * Filter which Especialidades to update
     */
    where?: EspecialidadeWhereInput
    /**
     * Limit how many Especialidades to update.
     */
    limit?: number
  }

  /**
   * Especialidade updateManyAndReturn
   */
  export type EspecialidadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * The data used to update Especialidades.
     */
    data: XOR<EspecialidadeUpdateManyMutationInput, EspecialidadeUncheckedUpdateManyInput>
    /**
     * Filter which Especialidades to update
     */
    where?: EspecialidadeWhereInput
    /**
     * Limit how many Especialidades to update.
     */
    limit?: number
  }

  /**
   * Especialidade upsert
   */
  export type EspecialidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Especialidade to update in case it exists.
     */
    where: EspecialidadeWhereUniqueInput
    /**
     * In case the Especialidade found by the `where` argument doesn't exist, create a new Especialidade with this data.
     */
    create: XOR<EspecialidadeCreateInput, EspecialidadeUncheckedCreateInput>
    /**
     * In case the Especialidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EspecialidadeUpdateInput, EspecialidadeUncheckedUpdateInput>
  }

  /**
   * Especialidade delete
   */
  export type EspecialidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
    /**
     * Filter which Especialidade to delete.
     */
    where: EspecialidadeWhereUniqueInput
  }

  /**
   * Especialidade deleteMany
   */
  export type EspecialidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Especialidades to delete
     */
    where?: EspecialidadeWhereInput
    /**
     * Limit how many Especialidades to delete.
     */
    limit?: number
  }

  /**
   * Especialidade.profissionais
   */
  export type Especialidade$profissionaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    where?: ProfissionalWhereInput
    orderBy?: ProfissionalOrderByWithRelationInput | ProfissionalOrderByWithRelationInput[]
    cursor?: ProfissionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfissionalScalarFieldEnum | ProfissionalScalarFieldEnum[]
  }

  /**
   * Especialidade.agendamentos
   */
  export type Especialidade$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    where?: AgendamentoWhereInput
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    cursor?: AgendamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Especialidade.pacientes
   */
  export type Especialidade$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteEspecialidade
     */
    select?: PacienteEspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteEspecialidade
     */
    omit?: PacienteEspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteEspecialidadeInclude<ExtArgs> | null
    where?: PacienteEspecialidadeWhereInput
    orderBy?: PacienteEspecialidadeOrderByWithRelationInput | PacienteEspecialidadeOrderByWithRelationInput[]
    cursor?: PacienteEspecialidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacienteEspecialidadeScalarFieldEnum | PacienteEspecialidadeScalarFieldEnum[]
  }

  /**
   * Especialidade without action
   */
  export type EspecialidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Especialidade
     */
    select?: EspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Especialidade
     */
    omit?: EspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspecialidadeInclude<ExtArgs> | null
  }


  /**
   * Model PacienteEspecialidade
   */

  export type AggregatePacienteEspecialidade = {
    _count: PacienteEspecialidadeCountAggregateOutputType | null
    _min: PacienteEspecialidadeMinAggregateOutputType | null
    _max: PacienteEspecialidadeMaxAggregateOutputType | null
  }

  export type PacienteEspecialidadeMinAggregateOutputType = {
    pacienteId: string | null
    especialidadeId: string | null
    createdAt: Date | null
  }

  export type PacienteEspecialidadeMaxAggregateOutputType = {
    pacienteId: string | null
    especialidadeId: string | null
    createdAt: Date | null
  }

  export type PacienteEspecialidadeCountAggregateOutputType = {
    pacienteId: number
    especialidadeId: number
    createdAt: number
    _all: number
  }


  export type PacienteEspecialidadeMinAggregateInputType = {
    pacienteId?: true
    especialidadeId?: true
    createdAt?: true
  }

  export type PacienteEspecialidadeMaxAggregateInputType = {
    pacienteId?: true
    especialidadeId?: true
    createdAt?: true
  }

  export type PacienteEspecialidadeCountAggregateInputType = {
    pacienteId?: true
    especialidadeId?: true
    createdAt?: true
    _all?: true
  }

  export type PacienteEspecialidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PacienteEspecialidade to aggregate.
     */
    where?: PacienteEspecialidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacienteEspecialidades to fetch.
     */
    orderBy?: PacienteEspecialidadeOrderByWithRelationInput | PacienteEspecialidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacienteEspecialidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacienteEspecialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacienteEspecialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PacienteEspecialidades
    **/
    _count?: true | PacienteEspecialidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacienteEspecialidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacienteEspecialidadeMaxAggregateInputType
  }

  export type GetPacienteEspecialidadeAggregateType<T extends PacienteEspecialidadeAggregateArgs> = {
        [P in keyof T & keyof AggregatePacienteEspecialidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePacienteEspecialidade[P]>
      : GetScalarType<T[P], AggregatePacienteEspecialidade[P]>
  }




  export type PacienteEspecialidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteEspecialidadeWhereInput
    orderBy?: PacienteEspecialidadeOrderByWithAggregationInput | PacienteEspecialidadeOrderByWithAggregationInput[]
    by: PacienteEspecialidadeScalarFieldEnum[] | PacienteEspecialidadeScalarFieldEnum
    having?: PacienteEspecialidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacienteEspecialidadeCountAggregateInputType | true
    _min?: PacienteEspecialidadeMinAggregateInputType
    _max?: PacienteEspecialidadeMaxAggregateInputType
  }

  export type PacienteEspecialidadeGroupByOutputType = {
    pacienteId: string
    especialidadeId: string
    createdAt: Date
    _count: PacienteEspecialidadeCountAggregateOutputType | null
    _min: PacienteEspecialidadeMinAggregateOutputType | null
    _max: PacienteEspecialidadeMaxAggregateOutputType | null
  }

  type GetPacienteEspecialidadeGroupByPayload<T extends PacienteEspecialidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacienteEspecialidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacienteEspecialidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacienteEspecialidadeGroupByOutputType[P]>
            : GetScalarType<T[P], PacienteEspecialidadeGroupByOutputType[P]>
        }
      >
    >


  export type PacienteEspecialidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pacienteId?: boolean
    especialidadeId?: boolean
    createdAt?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    especialidade?: boolean | EspecialidadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacienteEspecialidade"]>

  export type PacienteEspecialidadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pacienteId?: boolean
    especialidadeId?: boolean
    createdAt?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    especialidade?: boolean | EspecialidadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacienteEspecialidade"]>

  export type PacienteEspecialidadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pacienteId?: boolean
    especialidadeId?: boolean
    createdAt?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    especialidade?: boolean | EspecialidadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacienteEspecialidade"]>

  export type PacienteEspecialidadeSelectScalar = {
    pacienteId?: boolean
    especialidadeId?: boolean
    createdAt?: boolean
  }

  export type PacienteEspecialidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pacienteId" | "especialidadeId" | "createdAt", ExtArgs["result"]["pacienteEspecialidade"]>
  export type PacienteEspecialidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    especialidade?: boolean | EspecialidadeDefaultArgs<ExtArgs>
  }
  export type PacienteEspecialidadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    especialidade?: boolean | EspecialidadeDefaultArgs<ExtArgs>
  }
  export type PacienteEspecialidadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    especialidade?: boolean | EspecialidadeDefaultArgs<ExtArgs>
  }

  export type $PacienteEspecialidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PacienteEspecialidade"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs>
      especialidade: Prisma.$EspecialidadePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pacienteId: string
      especialidadeId: string
      createdAt: Date
    }, ExtArgs["result"]["pacienteEspecialidade"]>
    composites: {}
  }

  type PacienteEspecialidadeGetPayload<S extends boolean | null | undefined | PacienteEspecialidadeDefaultArgs> = $Result.GetResult<Prisma.$PacienteEspecialidadePayload, S>

  type PacienteEspecialidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacienteEspecialidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacienteEspecialidadeCountAggregateInputType | true
    }

  export interface PacienteEspecialidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PacienteEspecialidade'], meta: { name: 'PacienteEspecialidade' } }
    /**
     * Find zero or one PacienteEspecialidade that matches the filter.
     * @param {PacienteEspecialidadeFindUniqueArgs} args - Arguments to find a PacienteEspecialidade
     * @example
     * // Get one PacienteEspecialidade
     * const pacienteEspecialidade = await prisma.pacienteEspecialidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacienteEspecialidadeFindUniqueArgs>(args: SelectSubset<T, PacienteEspecialidadeFindUniqueArgs<ExtArgs>>): Prisma__PacienteEspecialidadeClient<$Result.GetResult<Prisma.$PacienteEspecialidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PacienteEspecialidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacienteEspecialidadeFindUniqueOrThrowArgs} args - Arguments to find a PacienteEspecialidade
     * @example
     * // Get one PacienteEspecialidade
     * const pacienteEspecialidade = await prisma.pacienteEspecialidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacienteEspecialidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, PacienteEspecialidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacienteEspecialidadeClient<$Result.GetResult<Prisma.$PacienteEspecialidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PacienteEspecialidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteEspecialidadeFindFirstArgs} args - Arguments to find a PacienteEspecialidade
     * @example
     * // Get one PacienteEspecialidade
     * const pacienteEspecialidade = await prisma.pacienteEspecialidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacienteEspecialidadeFindFirstArgs>(args?: SelectSubset<T, PacienteEspecialidadeFindFirstArgs<ExtArgs>>): Prisma__PacienteEspecialidadeClient<$Result.GetResult<Prisma.$PacienteEspecialidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PacienteEspecialidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteEspecialidadeFindFirstOrThrowArgs} args - Arguments to find a PacienteEspecialidade
     * @example
     * // Get one PacienteEspecialidade
     * const pacienteEspecialidade = await prisma.pacienteEspecialidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacienteEspecialidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, PacienteEspecialidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacienteEspecialidadeClient<$Result.GetResult<Prisma.$PacienteEspecialidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PacienteEspecialidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteEspecialidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PacienteEspecialidades
     * const pacienteEspecialidades = await prisma.pacienteEspecialidade.findMany()
     * 
     * // Get first 10 PacienteEspecialidades
     * const pacienteEspecialidades = await prisma.pacienteEspecialidade.findMany({ take: 10 })
     * 
     * // Only select the `pacienteId`
     * const pacienteEspecialidadeWithPacienteIdOnly = await prisma.pacienteEspecialidade.findMany({ select: { pacienteId: true } })
     * 
     */
    findMany<T extends PacienteEspecialidadeFindManyArgs>(args?: SelectSubset<T, PacienteEspecialidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacienteEspecialidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PacienteEspecialidade.
     * @param {PacienteEspecialidadeCreateArgs} args - Arguments to create a PacienteEspecialidade.
     * @example
     * // Create one PacienteEspecialidade
     * const PacienteEspecialidade = await prisma.pacienteEspecialidade.create({
     *   data: {
     *     // ... data to create a PacienteEspecialidade
     *   }
     * })
     * 
     */
    create<T extends PacienteEspecialidadeCreateArgs>(args: SelectSubset<T, PacienteEspecialidadeCreateArgs<ExtArgs>>): Prisma__PacienteEspecialidadeClient<$Result.GetResult<Prisma.$PacienteEspecialidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PacienteEspecialidades.
     * @param {PacienteEspecialidadeCreateManyArgs} args - Arguments to create many PacienteEspecialidades.
     * @example
     * // Create many PacienteEspecialidades
     * const pacienteEspecialidade = await prisma.pacienteEspecialidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacienteEspecialidadeCreateManyArgs>(args?: SelectSubset<T, PacienteEspecialidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PacienteEspecialidades and returns the data saved in the database.
     * @param {PacienteEspecialidadeCreateManyAndReturnArgs} args - Arguments to create many PacienteEspecialidades.
     * @example
     * // Create many PacienteEspecialidades
     * const pacienteEspecialidade = await prisma.pacienteEspecialidade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PacienteEspecialidades and only return the `pacienteId`
     * const pacienteEspecialidadeWithPacienteIdOnly = await prisma.pacienteEspecialidade.createManyAndReturn({
     *   select: { pacienteId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacienteEspecialidadeCreateManyAndReturnArgs>(args?: SelectSubset<T, PacienteEspecialidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacienteEspecialidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PacienteEspecialidade.
     * @param {PacienteEspecialidadeDeleteArgs} args - Arguments to delete one PacienteEspecialidade.
     * @example
     * // Delete one PacienteEspecialidade
     * const PacienteEspecialidade = await prisma.pacienteEspecialidade.delete({
     *   where: {
     *     // ... filter to delete one PacienteEspecialidade
     *   }
     * })
     * 
     */
    delete<T extends PacienteEspecialidadeDeleteArgs>(args: SelectSubset<T, PacienteEspecialidadeDeleteArgs<ExtArgs>>): Prisma__PacienteEspecialidadeClient<$Result.GetResult<Prisma.$PacienteEspecialidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PacienteEspecialidade.
     * @param {PacienteEspecialidadeUpdateArgs} args - Arguments to update one PacienteEspecialidade.
     * @example
     * // Update one PacienteEspecialidade
     * const pacienteEspecialidade = await prisma.pacienteEspecialidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacienteEspecialidadeUpdateArgs>(args: SelectSubset<T, PacienteEspecialidadeUpdateArgs<ExtArgs>>): Prisma__PacienteEspecialidadeClient<$Result.GetResult<Prisma.$PacienteEspecialidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PacienteEspecialidades.
     * @param {PacienteEspecialidadeDeleteManyArgs} args - Arguments to filter PacienteEspecialidades to delete.
     * @example
     * // Delete a few PacienteEspecialidades
     * const { count } = await prisma.pacienteEspecialidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacienteEspecialidadeDeleteManyArgs>(args?: SelectSubset<T, PacienteEspecialidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PacienteEspecialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteEspecialidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PacienteEspecialidades
     * const pacienteEspecialidade = await prisma.pacienteEspecialidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacienteEspecialidadeUpdateManyArgs>(args: SelectSubset<T, PacienteEspecialidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PacienteEspecialidades and returns the data updated in the database.
     * @param {PacienteEspecialidadeUpdateManyAndReturnArgs} args - Arguments to update many PacienteEspecialidades.
     * @example
     * // Update many PacienteEspecialidades
     * const pacienteEspecialidade = await prisma.pacienteEspecialidade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PacienteEspecialidades and only return the `pacienteId`
     * const pacienteEspecialidadeWithPacienteIdOnly = await prisma.pacienteEspecialidade.updateManyAndReturn({
     *   select: { pacienteId: true },
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
    updateManyAndReturn<T extends PacienteEspecialidadeUpdateManyAndReturnArgs>(args: SelectSubset<T, PacienteEspecialidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacienteEspecialidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PacienteEspecialidade.
     * @param {PacienteEspecialidadeUpsertArgs} args - Arguments to update or create a PacienteEspecialidade.
     * @example
     * // Update or create a PacienteEspecialidade
     * const pacienteEspecialidade = await prisma.pacienteEspecialidade.upsert({
     *   create: {
     *     // ... data to create a PacienteEspecialidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PacienteEspecialidade we want to update
     *   }
     * })
     */
    upsert<T extends PacienteEspecialidadeUpsertArgs>(args: SelectSubset<T, PacienteEspecialidadeUpsertArgs<ExtArgs>>): Prisma__PacienteEspecialidadeClient<$Result.GetResult<Prisma.$PacienteEspecialidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PacienteEspecialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteEspecialidadeCountArgs} args - Arguments to filter PacienteEspecialidades to count.
     * @example
     * // Count the number of PacienteEspecialidades
     * const count = await prisma.pacienteEspecialidade.count({
     *   where: {
     *     // ... the filter for the PacienteEspecialidades we want to count
     *   }
     * })
    **/
    count<T extends PacienteEspecialidadeCountArgs>(
      args?: Subset<T, PacienteEspecialidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacienteEspecialidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PacienteEspecialidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteEspecialidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacienteEspecialidadeAggregateArgs>(args: Subset<T, PacienteEspecialidadeAggregateArgs>): Prisma.PrismaPromise<GetPacienteEspecialidadeAggregateType<T>>

    /**
     * Group by PacienteEspecialidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteEspecialidadeGroupByArgs} args - Group by arguments.
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
      T extends PacienteEspecialidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacienteEspecialidadeGroupByArgs['orderBy'] }
        : { orderBy?: PacienteEspecialidadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PacienteEspecialidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacienteEspecialidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PacienteEspecialidade model
   */
  readonly fields: PacienteEspecialidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PacienteEspecialidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacienteEspecialidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    especialidade<T extends EspecialidadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EspecialidadeDefaultArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PacienteEspecialidade model
   */
  interface PacienteEspecialidadeFieldRefs {
    readonly pacienteId: FieldRef<"PacienteEspecialidade", 'String'>
    readonly especialidadeId: FieldRef<"PacienteEspecialidade", 'String'>
    readonly createdAt: FieldRef<"PacienteEspecialidade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PacienteEspecialidade findUnique
   */
  export type PacienteEspecialidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteEspecialidade
     */
    select?: PacienteEspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteEspecialidade
     */
    omit?: PacienteEspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteEspecialidadeInclude<ExtArgs> | null
    /**
     * Filter, which PacienteEspecialidade to fetch.
     */
    where: PacienteEspecialidadeWhereUniqueInput
  }

  /**
   * PacienteEspecialidade findUniqueOrThrow
   */
  export type PacienteEspecialidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteEspecialidade
     */
    select?: PacienteEspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteEspecialidade
     */
    omit?: PacienteEspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteEspecialidadeInclude<ExtArgs> | null
    /**
     * Filter, which PacienteEspecialidade to fetch.
     */
    where: PacienteEspecialidadeWhereUniqueInput
  }

  /**
   * PacienteEspecialidade findFirst
   */
  export type PacienteEspecialidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteEspecialidade
     */
    select?: PacienteEspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteEspecialidade
     */
    omit?: PacienteEspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteEspecialidadeInclude<ExtArgs> | null
    /**
     * Filter, which PacienteEspecialidade to fetch.
     */
    where?: PacienteEspecialidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacienteEspecialidades to fetch.
     */
    orderBy?: PacienteEspecialidadeOrderByWithRelationInput | PacienteEspecialidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PacienteEspecialidades.
     */
    cursor?: PacienteEspecialidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacienteEspecialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacienteEspecialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PacienteEspecialidades.
     */
    distinct?: PacienteEspecialidadeScalarFieldEnum | PacienteEspecialidadeScalarFieldEnum[]
  }

  /**
   * PacienteEspecialidade findFirstOrThrow
   */
  export type PacienteEspecialidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteEspecialidade
     */
    select?: PacienteEspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteEspecialidade
     */
    omit?: PacienteEspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteEspecialidadeInclude<ExtArgs> | null
    /**
     * Filter, which PacienteEspecialidade to fetch.
     */
    where?: PacienteEspecialidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacienteEspecialidades to fetch.
     */
    orderBy?: PacienteEspecialidadeOrderByWithRelationInput | PacienteEspecialidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PacienteEspecialidades.
     */
    cursor?: PacienteEspecialidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacienteEspecialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacienteEspecialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PacienteEspecialidades.
     */
    distinct?: PacienteEspecialidadeScalarFieldEnum | PacienteEspecialidadeScalarFieldEnum[]
  }

  /**
   * PacienteEspecialidade findMany
   */
  export type PacienteEspecialidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteEspecialidade
     */
    select?: PacienteEspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteEspecialidade
     */
    omit?: PacienteEspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteEspecialidadeInclude<ExtArgs> | null
    /**
     * Filter, which PacienteEspecialidades to fetch.
     */
    where?: PacienteEspecialidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PacienteEspecialidades to fetch.
     */
    orderBy?: PacienteEspecialidadeOrderByWithRelationInput | PacienteEspecialidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PacienteEspecialidades.
     */
    cursor?: PacienteEspecialidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PacienteEspecialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PacienteEspecialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PacienteEspecialidades.
     */
    distinct?: PacienteEspecialidadeScalarFieldEnum | PacienteEspecialidadeScalarFieldEnum[]
  }

  /**
   * PacienteEspecialidade create
   */
  export type PacienteEspecialidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteEspecialidade
     */
    select?: PacienteEspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteEspecialidade
     */
    omit?: PacienteEspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteEspecialidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a PacienteEspecialidade.
     */
    data: XOR<PacienteEspecialidadeCreateInput, PacienteEspecialidadeUncheckedCreateInput>
  }

  /**
   * PacienteEspecialidade createMany
   */
  export type PacienteEspecialidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PacienteEspecialidades.
     */
    data: PacienteEspecialidadeCreateManyInput | PacienteEspecialidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PacienteEspecialidade createManyAndReturn
   */
  export type PacienteEspecialidadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteEspecialidade
     */
    select?: PacienteEspecialidadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteEspecialidade
     */
    omit?: PacienteEspecialidadeOmit<ExtArgs> | null
    /**
     * The data used to create many PacienteEspecialidades.
     */
    data: PacienteEspecialidadeCreateManyInput | PacienteEspecialidadeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteEspecialidadeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PacienteEspecialidade update
   */
  export type PacienteEspecialidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteEspecialidade
     */
    select?: PacienteEspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteEspecialidade
     */
    omit?: PacienteEspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteEspecialidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a PacienteEspecialidade.
     */
    data: XOR<PacienteEspecialidadeUpdateInput, PacienteEspecialidadeUncheckedUpdateInput>
    /**
     * Choose, which PacienteEspecialidade to update.
     */
    where: PacienteEspecialidadeWhereUniqueInput
  }

  /**
   * PacienteEspecialidade updateMany
   */
  export type PacienteEspecialidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PacienteEspecialidades.
     */
    data: XOR<PacienteEspecialidadeUpdateManyMutationInput, PacienteEspecialidadeUncheckedUpdateManyInput>
    /**
     * Filter which PacienteEspecialidades to update
     */
    where?: PacienteEspecialidadeWhereInput
    /**
     * Limit how many PacienteEspecialidades to update.
     */
    limit?: number
  }

  /**
   * PacienteEspecialidade updateManyAndReturn
   */
  export type PacienteEspecialidadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteEspecialidade
     */
    select?: PacienteEspecialidadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteEspecialidade
     */
    omit?: PacienteEspecialidadeOmit<ExtArgs> | null
    /**
     * The data used to update PacienteEspecialidades.
     */
    data: XOR<PacienteEspecialidadeUpdateManyMutationInput, PacienteEspecialidadeUncheckedUpdateManyInput>
    /**
     * Filter which PacienteEspecialidades to update
     */
    where?: PacienteEspecialidadeWhereInput
    /**
     * Limit how many PacienteEspecialidades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteEspecialidadeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PacienteEspecialidade upsert
   */
  export type PacienteEspecialidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteEspecialidade
     */
    select?: PacienteEspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteEspecialidade
     */
    omit?: PacienteEspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteEspecialidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the PacienteEspecialidade to update in case it exists.
     */
    where: PacienteEspecialidadeWhereUniqueInput
    /**
     * In case the PacienteEspecialidade found by the `where` argument doesn't exist, create a new PacienteEspecialidade with this data.
     */
    create: XOR<PacienteEspecialidadeCreateInput, PacienteEspecialidadeUncheckedCreateInput>
    /**
     * In case the PacienteEspecialidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacienteEspecialidadeUpdateInput, PacienteEspecialidadeUncheckedUpdateInput>
  }

  /**
   * PacienteEspecialidade delete
   */
  export type PacienteEspecialidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteEspecialidade
     */
    select?: PacienteEspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteEspecialidade
     */
    omit?: PacienteEspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteEspecialidadeInclude<ExtArgs> | null
    /**
     * Filter which PacienteEspecialidade to delete.
     */
    where: PacienteEspecialidadeWhereUniqueInput
  }

  /**
   * PacienteEspecialidade deleteMany
   */
  export type PacienteEspecialidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PacienteEspecialidades to delete
     */
    where?: PacienteEspecialidadeWhereInput
    /**
     * Limit how many PacienteEspecialidades to delete.
     */
    limit?: number
  }

  /**
   * PacienteEspecialidade without action
   */
  export type PacienteEspecialidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteEspecialidade
     */
    select?: PacienteEspecialidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PacienteEspecialidade
     */
    omit?: PacienteEspecialidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteEspecialidadeInclude<ExtArgs> | null
  }


  /**
   * Model Profissional
   */

  export type AggregateProfissional = {
    _count: ProfissionalCountAggregateOutputType | null
    _min: ProfissionalMinAggregateOutputType | null
    _max: ProfissionalMaxAggregateOutputType | null
  }

  export type ProfissionalMinAggregateOutputType = {
    id: string | null
    nome: string | null
    registro: string | null
    especialidadeId: string | null
    telefone: string | null
    email: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfissionalMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    registro: string | null
    especialidadeId: string | null
    telefone: string | null
    email: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfissionalCountAggregateOutputType = {
    id: number
    nome: number
    registro: number
    especialidadeId: number
    telefone: number
    email: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfissionalMinAggregateInputType = {
    id?: true
    nome?: true
    registro?: true
    especialidadeId?: true
    telefone?: true
    email?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfissionalMaxAggregateInputType = {
    id?: true
    nome?: true
    registro?: true
    especialidadeId?: true
    telefone?: true
    email?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfissionalCountAggregateInputType = {
    id?: true
    nome?: true
    registro?: true
    especialidadeId?: true
    telefone?: true
    email?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfissionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profissional to aggregate.
     */
    where?: ProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionals to fetch.
     */
    orderBy?: ProfissionalOrderByWithRelationInput | ProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profissionals
    **/
    _count?: true | ProfissionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfissionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfissionalMaxAggregateInputType
  }

  export type GetProfissionalAggregateType<T extends ProfissionalAggregateArgs> = {
        [P in keyof T & keyof AggregateProfissional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfissional[P]>
      : GetScalarType<T[P], AggregateProfissional[P]>
  }




  export type ProfissionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfissionalWhereInput
    orderBy?: ProfissionalOrderByWithAggregationInput | ProfissionalOrderByWithAggregationInput[]
    by: ProfissionalScalarFieldEnum[] | ProfissionalScalarFieldEnum
    having?: ProfissionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfissionalCountAggregateInputType | true
    _min?: ProfissionalMinAggregateInputType
    _max?: ProfissionalMaxAggregateInputType
  }

  export type ProfissionalGroupByOutputType = {
    id: string
    nome: string
    registro: string | null
    especialidadeId: string
    telefone: string | null
    email: string | null
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProfissionalCountAggregateOutputType | null
    _min: ProfissionalMinAggregateOutputType | null
    _max: ProfissionalMaxAggregateOutputType | null
  }

  type GetProfissionalGroupByPayload<T extends ProfissionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfissionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfissionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfissionalGroupByOutputType[P]>
            : GetScalarType<T[P], ProfissionalGroupByOutputType[P]>
        }
      >
    >


  export type ProfissionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    registro?: boolean
    especialidadeId?: boolean
    telefone?: boolean
    email?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    especialidade?: boolean | EspecialidadeDefaultArgs<ExtArgs>
    horarios?: boolean | Profissional$horariosArgs<ExtArgs>
    agendamentos?: boolean | Profissional$agendamentosArgs<ExtArgs>
    user?: boolean | Profissional$userArgs<ExtArgs>
    _count?: boolean | ProfissionalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profissional"]>

  export type ProfissionalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    registro?: boolean
    especialidadeId?: boolean
    telefone?: boolean
    email?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    especialidade?: boolean | EspecialidadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profissional"]>

  export type ProfissionalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    registro?: boolean
    especialidadeId?: boolean
    telefone?: boolean
    email?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    especialidade?: boolean | EspecialidadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profissional"]>

  export type ProfissionalSelectScalar = {
    id?: boolean
    nome?: boolean
    registro?: boolean
    especialidadeId?: boolean
    telefone?: boolean
    email?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfissionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "registro" | "especialidadeId" | "telefone" | "email" | "ativo" | "createdAt" | "updatedAt", ExtArgs["result"]["profissional"]>
  export type ProfissionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especialidade?: boolean | EspecialidadeDefaultArgs<ExtArgs>
    horarios?: boolean | Profissional$horariosArgs<ExtArgs>
    agendamentos?: boolean | Profissional$agendamentosArgs<ExtArgs>
    user?: boolean | Profissional$userArgs<ExtArgs>
    _count?: boolean | ProfissionalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfissionalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especialidade?: boolean | EspecialidadeDefaultArgs<ExtArgs>
  }
  export type ProfissionalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    especialidade?: boolean | EspecialidadeDefaultArgs<ExtArgs>
  }

  export type $ProfissionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profissional"
    objects: {
      especialidade: Prisma.$EspecialidadePayload<ExtArgs>
      horarios: Prisma.$HorarioAtendimentoPayload<ExtArgs>[]
      agendamentos: Prisma.$AgendamentoPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      registro: string | null
      especialidadeId: string
      telefone: string | null
      email: string | null
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profissional"]>
    composites: {}
  }

  type ProfissionalGetPayload<S extends boolean | null | undefined | ProfissionalDefaultArgs> = $Result.GetResult<Prisma.$ProfissionalPayload, S>

  type ProfissionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfissionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfissionalCountAggregateInputType | true
    }

  export interface ProfissionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profissional'], meta: { name: 'Profissional' } }
    /**
     * Find zero or one Profissional that matches the filter.
     * @param {ProfissionalFindUniqueArgs} args - Arguments to find a Profissional
     * @example
     * // Get one Profissional
     * const profissional = await prisma.profissional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfissionalFindUniqueArgs>(args: SelectSubset<T, ProfissionalFindUniqueArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profissional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfissionalFindUniqueOrThrowArgs} args - Arguments to find a Profissional
     * @example
     * // Get one Profissional
     * const profissional = await prisma.profissional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfissionalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfissionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalFindFirstArgs} args - Arguments to find a Profissional
     * @example
     * // Get one Profissional
     * const profissional = await prisma.profissional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfissionalFindFirstArgs>(args?: SelectSubset<T, ProfissionalFindFirstArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profissional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalFindFirstOrThrowArgs} args - Arguments to find a Profissional
     * @example
     * // Get one Profissional
     * const profissional = await prisma.profissional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfissionalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfissionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profissionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profissionals
     * const profissionals = await prisma.profissional.findMany()
     * 
     * // Get first 10 Profissionals
     * const profissionals = await prisma.profissional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profissionalWithIdOnly = await prisma.profissional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfissionalFindManyArgs>(args?: SelectSubset<T, ProfissionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profissional.
     * @param {ProfissionalCreateArgs} args - Arguments to create a Profissional.
     * @example
     * // Create one Profissional
     * const Profissional = await prisma.profissional.create({
     *   data: {
     *     // ... data to create a Profissional
     *   }
     * })
     * 
     */
    create<T extends ProfissionalCreateArgs>(args: SelectSubset<T, ProfissionalCreateArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profissionals.
     * @param {ProfissionalCreateManyArgs} args - Arguments to create many Profissionals.
     * @example
     * // Create many Profissionals
     * const profissional = await prisma.profissional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfissionalCreateManyArgs>(args?: SelectSubset<T, ProfissionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profissionals and returns the data saved in the database.
     * @param {ProfissionalCreateManyAndReturnArgs} args - Arguments to create many Profissionals.
     * @example
     * // Create many Profissionals
     * const profissional = await prisma.profissional.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profissionals and only return the `id`
     * const profissionalWithIdOnly = await prisma.profissional.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfissionalCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfissionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profissional.
     * @param {ProfissionalDeleteArgs} args - Arguments to delete one Profissional.
     * @example
     * // Delete one Profissional
     * const Profissional = await prisma.profissional.delete({
     *   where: {
     *     // ... filter to delete one Profissional
     *   }
     * })
     * 
     */
    delete<T extends ProfissionalDeleteArgs>(args: SelectSubset<T, ProfissionalDeleteArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profissional.
     * @param {ProfissionalUpdateArgs} args - Arguments to update one Profissional.
     * @example
     * // Update one Profissional
     * const profissional = await prisma.profissional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfissionalUpdateArgs>(args: SelectSubset<T, ProfissionalUpdateArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profissionals.
     * @param {ProfissionalDeleteManyArgs} args - Arguments to filter Profissionals to delete.
     * @example
     * // Delete a few Profissionals
     * const { count } = await prisma.profissional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfissionalDeleteManyArgs>(args?: SelectSubset<T, ProfissionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profissionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profissionals
     * const profissional = await prisma.profissional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfissionalUpdateManyArgs>(args: SelectSubset<T, ProfissionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profissionals and returns the data updated in the database.
     * @param {ProfissionalUpdateManyAndReturnArgs} args - Arguments to update many Profissionals.
     * @example
     * // Update many Profissionals
     * const profissional = await prisma.profissional.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profissionals and only return the `id`
     * const profissionalWithIdOnly = await prisma.profissional.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfissionalUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfissionalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profissional.
     * @param {ProfissionalUpsertArgs} args - Arguments to update or create a Profissional.
     * @example
     * // Update or create a Profissional
     * const profissional = await prisma.profissional.upsert({
     *   create: {
     *     // ... data to create a Profissional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profissional we want to update
     *   }
     * })
     */
    upsert<T extends ProfissionalUpsertArgs>(args: SelectSubset<T, ProfissionalUpsertArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profissionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalCountArgs} args - Arguments to filter Profissionals to count.
     * @example
     * // Count the number of Profissionals
     * const count = await prisma.profissional.count({
     *   where: {
     *     // ... the filter for the Profissionals we want to count
     *   }
     * })
    **/
    count<T extends ProfissionalCountArgs>(
      args?: Subset<T, ProfissionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfissionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profissional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfissionalAggregateArgs>(args: Subset<T, ProfissionalAggregateArgs>): Prisma.PrismaPromise<GetProfissionalAggregateType<T>>

    /**
     * Group by Profissional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfissionalGroupByArgs} args - Group by arguments.
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
      T extends ProfissionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfissionalGroupByArgs['orderBy'] }
        : { orderBy?: ProfissionalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfissionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfissionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profissional model
   */
  readonly fields: ProfissionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profissional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfissionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    especialidade<T extends EspecialidadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EspecialidadeDefaultArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    horarios<T extends Profissional$horariosArgs<ExtArgs> = {}>(args?: Subset<T, Profissional$horariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioAtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agendamentos<T extends Profissional$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, Profissional$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Profissional$userArgs<ExtArgs> = {}>(args?: Subset<T, Profissional$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Profissional model
   */
  interface ProfissionalFieldRefs {
    readonly id: FieldRef<"Profissional", 'String'>
    readonly nome: FieldRef<"Profissional", 'String'>
    readonly registro: FieldRef<"Profissional", 'String'>
    readonly especialidadeId: FieldRef<"Profissional", 'String'>
    readonly telefone: FieldRef<"Profissional", 'String'>
    readonly email: FieldRef<"Profissional", 'String'>
    readonly ativo: FieldRef<"Profissional", 'Boolean'>
    readonly createdAt: FieldRef<"Profissional", 'DateTime'>
    readonly updatedAt: FieldRef<"Profissional", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profissional findUnique
   */
  export type ProfissionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissional to fetch.
     */
    where: ProfissionalWhereUniqueInput
  }

  /**
   * Profissional findUniqueOrThrow
   */
  export type ProfissionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissional to fetch.
     */
    where: ProfissionalWhereUniqueInput
  }

  /**
   * Profissional findFirst
   */
  export type ProfissionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissional to fetch.
     */
    where?: ProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionals to fetch.
     */
    orderBy?: ProfissionalOrderByWithRelationInput | ProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profissionals.
     */
    cursor?: ProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profissionals.
     */
    distinct?: ProfissionalScalarFieldEnum | ProfissionalScalarFieldEnum[]
  }

  /**
   * Profissional findFirstOrThrow
   */
  export type ProfissionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissional to fetch.
     */
    where?: ProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionals to fetch.
     */
    orderBy?: ProfissionalOrderByWithRelationInput | ProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profissionals.
     */
    cursor?: ProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profissionals.
     */
    distinct?: ProfissionalScalarFieldEnum | ProfissionalScalarFieldEnum[]
  }

  /**
   * Profissional findMany
   */
  export type ProfissionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter, which Profissionals to fetch.
     */
    where?: ProfissionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profissionals to fetch.
     */
    orderBy?: ProfissionalOrderByWithRelationInput | ProfissionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profissionals.
     */
    cursor?: ProfissionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profissionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profissionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profissionals.
     */
    distinct?: ProfissionalScalarFieldEnum | ProfissionalScalarFieldEnum[]
  }

  /**
   * Profissional create
   */
  export type ProfissionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * The data needed to create a Profissional.
     */
    data: XOR<ProfissionalCreateInput, ProfissionalUncheckedCreateInput>
  }

  /**
   * Profissional createMany
   */
  export type ProfissionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profissionals.
     */
    data: ProfissionalCreateManyInput | ProfissionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profissional createManyAndReturn
   */
  export type ProfissionalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * The data used to create many Profissionals.
     */
    data: ProfissionalCreateManyInput | ProfissionalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profissional update
   */
  export type ProfissionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * The data needed to update a Profissional.
     */
    data: XOR<ProfissionalUpdateInput, ProfissionalUncheckedUpdateInput>
    /**
     * Choose, which Profissional to update.
     */
    where: ProfissionalWhereUniqueInput
  }

  /**
   * Profissional updateMany
   */
  export type ProfissionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profissionals.
     */
    data: XOR<ProfissionalUpdateManyMutationInput, ProfissionalUncheckedUpdateManyInput>
    /**
     * Filter which Profissionals to update
     */
    where?: ProfissionalWhereInput
    /**
     * Limit how many Profissionals to update.
     */
    limit?: number
  }

  /**
   * Profissional updateManyAndReturn
   */
  export type ProfissionalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * The data used to update Profissionals.
     */
    data: XOR<ProfissionalUpdateManyMutationInput, ProfissionalUncheckedUpdateManyInput>
    /**
     * Filter which Profissionals to update
     */
    where?: ProfissionalWhereInput
    /**
     * Limit how many Profissionals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profissional upsert
   */
  export type ProfissionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * The filter to search for the Profissional to update in case it exists.
     */
    where: ProfissionalWhereUniqueInput
    /**
     * In case the Profissional found by the `where` argument doesn't exist, create a new Profissional with this data.
     */
    create: XOR<ProfissionalCreateInput, ProfissionalUncheckedCreateInput>
    /**
     * In case the Profissional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfissionalUpdateInput, ProfissionalUncheckedUpdateInput>
  }

  /**
   * Profissional delete
   */
  export type ProfissionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
    /**
     * Filter which Profissional to delete.
     */
    where: ProfissionalWhereUniqueInput
  }

  /**
   * Profissional deleteMany
   */
  export type ProfissionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profissionals to delete
     */
    where?: ProfissionalWhereInput
    /**
     * Limit how many Profissionals to delete.
     */
    limit?: number
  }

  /**
   * Profissional.horarios
   */
  export type Profissional$horariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtendimento
     */
    select?: HorarioAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtendimento
     */
    omit?: HorarioAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtendimentoInclude<ExtArgs> | null
    where?: HorarioAtendimentoWhereInput
    orderBy?: HorarioAtendimentoOrderByWithRelationInput | HorarioAtendimentoOrderByWithRelationInput[]
    cursor?: HorarioAtendimentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HorarioAtendimentoScalarFieldEnum | HorarioAtendimentoScalarFieldEnum[]
  }

  /**
   * Profissional.agendamentos
   */
  export type Profissional$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    where?: AgendamentoWhereInput
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    cursor?: AgendamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Profissional.user
   */
  export type Profissional$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Profissional without action
   */
  export type ProfissionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profissional
     */
    select?: ProfissionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profissional
     */
    omit?: ProfissionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfissionalInclude<ExtArgs> | null
  }


  /**
   * Model HorarioAtendimento
   */

  export type AggregateHorarioAtendimento = {
    _count: HorarioAtendimentoCountAggregateOutputType | null
    _avg: HorarioAtendimentoAvgAggregateOutputType | null
    _sum: HorarioAtendimentoSumAggregateOutputType | null
    _min: HorarioAtendimentoMinAggregateOutputType | null
    _max: HorarioAtendimentoMaxAggregateOutputType | null
  }

  export type HorarioAtendimentoAvgAggregateOutputType = {
    duracaoSessao: number | null
    intervaloSessoes: number | null
  }

  export type HorarioAtendimentoSumAggregateOutputType = {
    duracaoSessao: number | null
    intervaloSessoes: number | null
  }

  export type HorarioAtendimentoMinAggregateOutputType = {
    id: string | null
    profissionalId: string | null
    diaSemana: $Enums.DiaSemana | null
    horaInicio: string | null
    duracaoSessao: number | null
    intervaloSessoes: number | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HorarioAtendimentoMaxAggregateOutputType = {
    id: string | null
    profissionalId: string | null
    diaSemana: $Enums.DiaSemana | null
    horaInicio: string | null
    duracaoSessao: number | null
    intervaloSessoes: number | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HorarioAtendimentoCountAggregateOutputType = {
    id: number
    profissionalId: number
    diaSemana: number
    horaInicio: number
    duracaoSessao: number
    intervaloSessoes: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HorarioAtendimentoAvgAggregateInputType = {
    duracaoSessao?: true
    intervaloSessoes?: true
  }

  export type HorarioAtendimentoSumAggregateInputType = {
    duracaoSessao?: true
    intervaloSessoes?: true
  }

  export type HorarioAtendimentoMinAggregateInputType = {
    id?: true
    profissionalId?: true
    diaSemana?: true
    horaInicio?: true
    duracaoSessao?: true
    intervaloSessoes?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HorarioAtendimentoMaxAggregateInputType = {
    id?: true
    profissionalId?: true
    diaSemana?: true
    horaInicio?: true
    duracaoSessao?: true
    intervaloSessoes?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HorarioAtendimentoCountAggregateInputType = {
    id?: true
    profissionalId?: true
    diaSemana?: true
    horaInicio?: true
    duracaoSessao?: true
    intervaloSessoes?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HorarioAtendimentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorarioAtendimento to aggregate.
     */
    where?: HorarioAtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioAtendimentos to fetch.
     */
    orderBy?: HorarioAtendimentoOrderByWithRelationInput | HorarioAtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HorarioAtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioAtendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioAtendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HorarioAtendimentos
    **/
    _count?: true | HorarioAtendimentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HorarioAtendimentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HorarioAtendimentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HorarioAtendimentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HorarioAtendimentoMaxAggregateInputType
  }

  export type GetHorarioAtendimentoAggregateType<T extends HorarioAtendimentoAggregateArgs> = {
        [P in keyof T & keyof AggregateHorarioAtendimento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHorarioAtendimento[P]>
      : GetScalarType<T[P], AggregateHorarioAtendimento[P]>
  }




  export type HorarioAtendimentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorarioAtendimentoWhereInput
    orderBy?: HorarioAtendimentoOrderByWithAggregationInput | HorarioAtendimentoOrderByWithAggregationInput[]
    by: HorarioAtendimentoScalarFieldEnum[] | HorarioAtendimentoScalarFieldEnum
    having?: HorarioAtendimentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HorarioAtendimentoCountAggregateInputType | true
    _avg?: HorarioAtendimentoAvgAggregateInputType
    _sum?: HorarioAtendimentoSumAggregateInputType
    _min?: HorarioAtendimentoMinAggregateInputType
    _max?: HorarioAtendimentoMaxAggregateInputType
  }

  export type HorarioAtendimentoGroupByOutputType = {
    id: string
    profissionalId: string
    diaSemana: $Enums.DiaSemana
    horaInicio: string
    duracaoSessao: number
    intervaloSessoes: number
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: HorarioAtendimentoCountAggregateOutputType | null
    _avg: HorarioAtendimentoAvgAggregateOutputType | null
    _sum: HorarioAtendimentoSumAggregateOutputType | null
    _min: HorarioAtendimentoMinAggregateOutputType | null
    _max: HorarioAtendimentoMaxAggregateOutputType | null
  }

  type GetHorarioAtendimentoGroupByPayload<T extends HorarioAtendimentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HorarioAtendimentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HorarioAtendimentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HorarioAtendimentoGroupByOutputType[P]>
            : GetScalarType<T[P], HorarioAtendimentoGroupByOutputType[P]>
        }
      >
    >


  export type HorarioAtendimentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profissionalId?: boolean
    diaSemana?: boolean
    horaInicio?: boolean
    duracaoSessao?: boolean
    intervaloSessoes?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horarioAtendimento"]>

  export type HorarioAtendimentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profissionalId?: boolean
    diaSemana?: boolean
    horaInicio?: boolean
    duracaoSessao?: boolean
    intervaloSessoes?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horarioAtendimento"]>

  export type HorarioAtendimentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profissionalId?: boolean
    diaSemana?: boolean
    horaInicio?: boolean
    duracaoSessao?: boolean
    intervaloSessoes?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horarioAtendimento"]>

  export type HorarioAtendimentoSelectScalar = {
    id?: boolean
    profissionalId?: boolean
    diaSemana?: boolean
    horaInicio?: boolean
    duracaoSessao?: boolean
    intervaloSessoes?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HorarioAtendimentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profissionalId" | "diaSemana" | "horaInicio" | "duracaoSessao" | "intervaloSessoes" | "ativo" | "createdAt" | "updatedAt", ExtArgs["result"]["horarioAtendimento"]>
  export type HorarioAtendimentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
  }
  export type HorarioAtendimentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
  }
  export type HorarioAtendimentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
  }

  export type $HorarioAtendimentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HorarioAtendimento"
    objects: {
      profissional: Prisma.$ProfissionalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profissionalId: string
      diaSemana: $Enums.DiaSemana
      horaInicio: string
      duracaoSessao: number
      intervaloSessoes: number
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["horarioAtendimento"]>
    composites: {}
  }

  type HorarioAtendimentoGetPayload<S extends boolean | null | undefined | HorarioAtendimentoDefaultArgs> = $Result.GetResult<Prisma.$HorarioAtendimentoPayload, S>

  type HorarioAtendimentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HorarioAtendimentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HorarioAtendimentoCountAggregateInputType | true
    }

  export interface HorarioAtendimentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HorarioAtendimento'], meta: { name: 'HorarioAtendimento' } }
    /**
     * Find zero or one HorarioAtendimento that matches the filter.
     * @param {HorarioAtendimentoFindUniqueArgs} args - Arguments to find a HorarioAtendimento
     * @example
     * // Get one HorarioAtendimento
     * const horarioAtendimento = await prisma.horarioAtendimento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HorarioAtendimentoFindUniqueArgs>(args: SelectSubset<T, HorarioAtendimentoFindUniqueArgs<ExtArgs>>): Prisma__HorarioAtendimentoClient<$Result.GetResult<Prisma.$HorarioAtendimentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HorarioAtendimento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HorarioAtendimentoFindUniqueOrThrowArgs} args - Arguments to find a HorarioAtendimento
     * @example
     * // Get one HorarioAtendimento
     * const horarioAtendimento = await prisma.horarioAtendimento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HorarioAtendimentoFindUniqueOrThrowArgs>(args: SelectSubset<T, HorarioAtendimentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HorarioAtendimentoClient<$Result.GetResult<Prisma.$HorarioAtendimentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorarioAtendimento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioAtendimentoFindFirstArgs} args - Arguments to find a HorarioAtendimento
     * @example
     * // Get one HorarioAtendimento
     * const horarioAtendimento = await prisma.horarioAtendimento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HorarioAtendimentoFindFirstArgs>(args?: SelectSubset<T, HorarioAtendimentoFindFirstArgs<ExtArgs>>): Prisma__HorarioAtendimentoClient<$Result.GetResult<Prisma.$HorarioAtendimentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HorarioAtendimento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioAtendimentoFindFirstOrThrowArgs} args - Arguments to find a HorarioAtendimento
     * @example
     * // Get one HorarioAtendimento
     * const horarioAtendimento = await prisma.horarioAtendimento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HorarioAtendimentoFindFirstOrThrowArgs>(args?: SelectSubset<T, HorarioAtendimentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__HorarioAtendimentoClient<$Result.GetResult<Prisma.$HorarioAtendimentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HorarioAtendimentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioAtendimentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HorarioAtendimentos
     * const horarioAtendimentos = await prisma.horarioAtendimento.findMany()
     * 
     * // Get first 10 HorarioAtendimentos
     * const horarioAtendimentos = await prisma.horarioAtendimento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const horarioAtendimentoWithIdOnly = await prisma.horarioAtendimento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HorarioAtendimentoFindManyArgs>(args?: SelectSubset<T, HorarioAtendimentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioAtendimentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HorarioAtendimento.
     * @param {HorarioAtendimentoCreateArgs} args - Arguments to create a HorarioAtendimento.
     * @example
     * // Create one HorarioAtendimento
     * const HorarioAtendimento = await prisma.horarioAtendimento.create({
     *   data: {
     *     // ... data to create a HorarioAtendimento
     *   }
     * })
     * 
     */
    create<T extends HorarioAtendimentoCreateArgs>(args: SelectSubset<T, HorarioAtendimentoCreateArgs<ExtArgs>>): Prisma__HorarioAtendimentoClient<$Result.GetResult<Prisma.$HorarioAtendimentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HorarioAtendimentos.
     * @param {HorarioAtendimentoCreateManyArgs} args - Arguments to create many HorarioAtendimentos.
     * @example
     * // Create many HorarioAtendimentos
     * const horarioAtendimento = await prisma.horarioAtendimento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HorarioAtendimentoCreateManyArgs>(args?: SelectSubset<T, HorarioAtendimentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HorarioAtendimentos and returns the data saved in the database.
     * @param {HorarioAtendimentoCreateManyAndReturnArgs} args - Arguments to create many HorarioAtendimentos.
     * @example
     * // Create many HorarioAtendimentos
     * const horarioAtendimento = await prisma.horarioAtendimento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HorarioAtendimentos and only return the `id`
     * const horarioAtendimentoWithIdOnly = await prisma.horarioAtendimento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HorarioAtendimentoCreateManyAndReturnArgs>(args?: SelectSubset<T, HorarioAtendimentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioAtendimentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HorarioAtendimento.
     * @param {HorarioAtendimentoDeleteArgs} args - Arguments to delete one HorarioAtendimento.
     * @example
     * // Delete one HorarioAtendimento
     * const HorarioAtendimento = await prisma.horarioAtendimento.delete({
     *   where: {
     *     // ... filter to delete one HorarioAtendimento
     *   }
     * })
     * 
     */
    delete<T extends HorarioAtendimentoDeleteArgs>(args: SelectSubset<T, HorarioAtendimentoDeleteArgs<ExtArgs>>): Prisma__HorarioAtendimentoClient<$Result.GetResult<Prisma.$HorarioAtendimentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HorarioAtendimento.
     * @param {HorarioAtendimentoUpdateArgs} args - Arguments to update one HorarioAtendimento.
     * @example
     * // Update one HorarioAtendimento
     * const horarioAtendimento = await prisma.horarioAtendimento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HorarioAtendimentoUpdateArgs>(args: SelectSubset<T, HorarioAtendimentoUpdateArgs<ExtArgs>>): Prisma__HorarioAtendimentoClient<$Result.GetResult<Prisma.$HorarioAtendimentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HorarioAtendimentos.
     * @param {HorarioAtendimentoDeleteManyArgs} args - Arguments to filter HorarioAtendimentos to delete.
     * @example
     * // Delete a few HorarioAtendimentos
     * const { count } = await prisma.horarioAtendimento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HorarioAtendimentoDeleteManyArgs>(args?: SelectSubset<T, HorarioAtendimentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HorarioAtendimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioAtendimentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HorarioAtendimentos
     * const horarioAtendimento = await prisma.horarioAtendimento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HorarioAtendimentoUpdateManyArgs>(args: SelectSubset<T, HorarioAtendimentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HorarioAtendimentos and returns the data updated in the database.
     * @param {HorarioAtendimentoUpdateManyAndReturnArgs} args - Arguments to update many HorarioAtendimentos.
     * @example
     * // Update many HorarioAtendimentos
     * const horarioAtendimento = await prisma.horarioAtendimento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HorarioAtendimentos and only return the `id`
     * const horarioAtendimentoWithIdOnly = await prisma.horarioAtendimento.updateManyAndReturn({
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
    updateManyAndReturn<T extends HorarioAtendimentoUpdateManyAndReturnArgs>(args: SelectSubset<T, HorarioAtendimentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorarioAtendimentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HorarioAtendimento.
     * @param {HorarioAtendimentoUpsertArgs} args - Arguments to update or create a HorarioAtendimento.
     * @example
     * // Update or create a HorarioAtendimento
     * const horarioAtendimento = await prisma.horarioAtendimento.upsert({
     *   create: {
     *     // ... data to create a HorarioAtendimento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HorarioAtendimento we want to update
     *   }
     * })
     */
    upsert<T extends HorarioAtendimentoUpsertArgs>(args: SelectSubset<T, HorarioAtendimentoUpsertArgs<ExtArgs>>): Prisma__HorarioAtendimentoClient<$Result.GetResult<Prisma.$HorarioAtendimentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HorarioAtendimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioAtendimentoCountArgs} args - Arguments to filter HorarioAtendimentos to count.
     * @example
     * // Count the number of HorarioAtendimentos
     * const count = await prisma.horarioAtendimento.count({
     *   where: {
     *     // ... the filter for the HorarioAtendimentos we want to count
     *   }
     * })
    **/
    count<T extends HorarioAtendimentoCountArgs>(
      args?: Subset<T, HorarioAtendimentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HorarioAtendimentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HorarioAtendimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioAtendimentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HorarioAtendimentoAggregateArgs>(args: Subset<T, HorarioAtendimentoAggregateArgs>): Prisma.PrismaPromise<GetHorarioAtendimentoAggregateType<T>>

    /**
     * Group by HorarioAtendimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioAtendimentoGroupByArgs} args - Group by arguments.
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
      T extends HorarioAtendimentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HorarioAtendimentoGroupByArgs['orderBy'] }
        : { orderBy?: HorarioAtendimentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HorarioAtendimentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorarioAtendimentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HorarioAtendimento model
   */
  readonly fields: HorarioAtendimentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HorarioAtendimento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HorarioAtendimentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profissional<T extends ProfissionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfissionalDefaultArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HorarioAtendimento model
   */
  interface HorarioAtendimentoFieldRefs {
    readonly id: FieldRef<"HorarioAtendimento", 'String'>
    readonly profissionalId: FieldRef<"HorarioAtendimento", 'String'>
    readonly diaSemana: FieldRef<"HorarioAtendimento", 'DiaSemana'>
    readonly horaInicio: FieldRef<"HorarioAtendimento", 'String'>
    readonly duracaoSessao: FieldRef<"HorarioAtendimento", 'Int'>
    readonly intervaloSessoes: FieldRef<"HorarioAtendimento", 'Int'>
    readonly ativo: FieldRef<"HorarioAtendimento", 'Boolean'>
    readonly createdAt: FieldRef<"HorarioAtendimento", 'DateTime'>
    readonly updatedAt: FieldRef<"HorarioAtendimento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HorarioAtendimento findUnique
   */
  export type HorarioAtendimentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtendimento
     */
    select?: HorarioAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtendimento
     */
    omit?: HorarioAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which HorarioAtendimento to fetch.
     */
    where: HorarioAtendimentoWhereUniqueInput
  }

  /**
   * HorarioAtendimento findUniqueOrThrow
   */
  export type HorarioAtendimentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtendimento
     */
    select?: HorarioAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtendimento
     */
    omit?: HorarioAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which HorarioAtendimento to fetch.
     */
    where: HorarioAtendimentoWhereUniqueInput
  }

  /**
   * HorarioAtendimento findFirst
   */
  export type HorarioAtendimentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtendimento
     */
    select?: HorarioAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtendimento
     */
    omit?: HorarioAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which HorarioAtendimento to fetch.
     */
    where?: HorarioAtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioAtendimentos to fetch.
     */
    orderBy?: HorarioAtendimentoOrderByWithRelationInput | HorarioAtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorarioAtendimentos.
     */
    cursor?: HorarioAtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioAtendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioAtendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorarioAtendimentos.
     */
    distinct?: HorarioAtendimentoScalarFieldEnum | HorarioAtendimentoScalarFieldEnum[]
  }

  /**
   * HorarioAtendimento findFirstOrThrow
   */
  export type HorarioAtendimentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtendimento
     */
    select?: HorarioAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtendimento
     */
    omit?: HorarioAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which HorarioAtendimento to fetch.
     */
    where?: HorarioAtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioAtendimentos to fetch.
     */
    orderBy?: HorarioAtendimentoOrderByWithRelationInput | HorarioAtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HorarioAtendimentos.
     */
    cursor?: HorarioAtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioAtendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioAtendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorarioAtendimentos.
     */
    distinct?: HorarioAtendimentoScalarFieldEnum | HorarioAtendimentoScalarFieldEnum[]
  }

  /**
   * HorarioAtendimento findMany
   */
  export type HorarioAtendimentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtendimento
     */
    select?: HorarioAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtendimento
     */
    omit?: HorarioAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtendimentoInclude<ExtArgs> | null
    /**
     * Filter, which HorarioAtendimentos to fetch.
     */
    where?: HorarioAtendimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HorarioAtendimentos to fetch.
     */
    orderBy?: HorarioAtendimentoOrderByWithRelationInput | HorarioAtendimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HorarioAtendimentos.
     */
    cursor?: HorarioAtendimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HorarioAtendimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HorarioAtendimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HorarioAtendimentos.
     */
    distinct?: HorarioAtendimentoScalarFieldEnum | HorarioAtendimentoScalarFieldEnum[]
  }

  /**
   * HorarioAtendimento create
   */
  export type HorarioAtendimentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtendimento
     */
    select?: HorarioAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtendimento
     */
    omit?: HorarioAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtendimentoInclude<ExtArgs> | null
    /**
     * The data needed to create a HorarioAtendimento.
     */
    data: XOR<HorarioAtendimentoCreateInput, HorarioAtendimentoUncheckedCreateInput>
  }

  /**
   * HorarioAtendimento createMany
   */
  export type HorarioAtendimentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HorarioAtendimentos.
     */
    data: HorarioAtendimentoCreateManyInput | HorarioAtendimentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HorarioAtendimento createManyAndReturn
   */
  export type HorarioAtendimentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtendimento
     */
    select?: HorarioAtendimentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtendimento
     */
    omit?: HorarioAtendimentoOmit<ExtArgs> | null
    /**
     * The data used to create many HorarioAtendimentos.
     */
    data: HorarioAtendimentoCreateManyInput | HorarioAtendimentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtendimentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HorarioAtendimento update
   */
  export type HorarioAtendimentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtendimento
     */
    select?: HorarioAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtendimento
     */
    omit?: HorarioAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtendimentoInclude<ExtArgs> | null
    /**
     * The data needed to update a HorarioAtendimento.
     */
    data: XOR<HorarioAtendimentoUpdateInput, HorarioAtendimentoUncheckedUpdateInput>
    /**
     * Choose, which HorarioAtendimento to update.
     */
    where: HorarioAtendimentoWhereUniqueInput
  }

  /**
   * HorarioAtendimento updateMany
   */
  export type HorarioAtendimentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HorarioAtendimentos.
     */
    data: XOR<HorarioAtendimentoUpdateManyMutationInput, HorarioAtendimentoUncheckedUpdateManyInput>
    /**
     * Filter which HorarioAtendimentos to update
     */
    where?: HorarioAtendimentoWhereInput
    /**
     * Limit how many HorarioAtendimentos to update.
     */
    limit?: number
  }

  /**
   * HorarioAtendimento updateManyAndReturn
   */
  export type HorarioAtendimentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtendimento
     */
    select?: HorarioAtendimentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtendimento
     */
    omit?: HorarioAtendimentoOmit<ExtArgs> | null
    /**
     * The data used to update HorarioAtendimentos.
     */
    data: XOR<HorarioAtendimentoUpdateManyMutationInput, HorarioAtendimentoUncheckedUpdateManyInput>
    /**
     * Filter which HorarioAtendimentos to update
     */
    where?: HorarioAtendimentoWhereInput
    /**
     * Limit how many HorarioAtendimentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtendimentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HorarioAtendimento upsert
   */
  export type HorarioAtendimentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtendimento
     */
    select?: HorarioAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtendimento
     */
    omit?: HorarioAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtendimentoInclude<ExtArgs> | null
    /**
     * The filter to search for the HorarioAtendimento to update in case it exists.
     */
    where: HorarioAtendimentoWhereUniqueInput
    /**
     * In case the HorarioAtendimento found by the `where` argument doesn't exist, create a new HorarioAtendimento with this data.
     */
    create: XOR<HorarioAtendimentoCreateInput, HorarioAtendimentoUncheckedCreateInput>
    /**
     * In case the HorarioAtendimento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HorarioAtendimentoUpdateInput, HorarioAtendimentoUncheckedUpdateInput>
  }

  /**
   * HorarioAtendimento delete
   */
  export type HorarioAtendimentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtendimento
     */
    select?: HorarioAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtendimento
     */
    omit?: HorarioAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtendimentoInclude<ExtArgs> | null
    /**
     * Filter which HorarioAtendimento to delete.
     */
    where: HorarioAtendimentoWhereUniqueInput
  }

  /**
   * HorarioAtendimento deleteMany
   */
  export type HorarioAtendimentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HorarioAtendimentos to delete
     */
    where?: HorarioAtendimentoWhereInput
    /**
     * Limit how many HorarioAtendimentos to delete.
     */
    limit?: number
  }

  /**
   * HorarioAtendimento without action
   */
  export type HorarioAtendimentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorarioAtendimento
     */
    select?: HorarioAtendimentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HorarioAtendimento
     */
    omit?: HorarioAtendimentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorarioAtendimentoInclude<ExtArgs> | null
  }


  /**
   * Model Agendamento
   */

  export type AggregateAgendamento = {
    _count: AgendamentoCountAggregateOutputType | null
    _avg: AgendamentoAvgAggregateOutputType | null
    _sum: AgendamentoSumAggregateOutputType | null
    _min: AgendamentoMinAggregateOutputType | null
    _max: AgendamentoMaxAggregateOutputType | null
  }

  export type AgendamentoAvgAggregateOutputType = {
    numeroSessoes: number | null
  }

  export type AgendamentoSumAggregateOutputType = {
    numeroSessoes: number | null
  }

  export type AgendamentoMinAggregateOutputType = {
    id: string | null
    tipo: $Enums.TipoAgendamento | null
    profissionalId: string | null
    especialidadeId: string | null
    dataHoraInicio: Date | null
    dataHoraFim: Date | null
    numeroSessoes: number | null
    status: $Enums.StatusAgendamento | null
    observacoes: string | null
    origem: $Enums.OrigemAgendamento | null
    recorrenciaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgendamentoMaxAggregateOutputType = {
    id: string | null
    tipo: $Enums.TipoAgendamento | null
    profissionalId: string | null
    especialidadeId: string | null
    dataHoraInicio: Date | null
    dataHoraFim: Date | null
    numeroSessoes: number | null
    status: $Enums.StatusAgendamento | null
    observacoes: string | null
    origem: $Enums.OrigemAgendamento | null
    recorrenciaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgendamentoCountAggregateOutputType = {
    id: number
    tipo: number
    profissionalId: number
    especialidadeId: number
    dataHoraInicio: number
    dataHoraFim: number
    numeroSessoes: number
    status: number
    observacoes: number
    origem: number
    recorrenciaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AgendamentoAvgAggregateInputType = {
    numeroSessoes?: true
  }

  export type AgendamentoSumAggregateInputType = {
    numeroSessoes?: true
  }

  export type AgendamentoMinAggregateInputType = {
    id?: true
    tipo?: true
    profissionalId?: true
    especialidadeId?: true
    dataHoraInicio?: true
    dataHoraFim?: true
    numeroSessoes?: true
    status?: true
    observacoes?: true
    origem?: true
    recorrenciaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgendamentoMaxAggregateInputType = {
    id?: true
    tipo?: true
    profissionalId?: true
    especialidadeId?: true
    dataHoraInicio?: true
    dataHoraFim?: true
    numeroSessoes?: true
    status?: true
    observacoes?: true
    origem?: true
    recorrenciaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgendamentoCountAggregateInputType = {
    id?: true
    tipo?: true
    profissionalId?: true
    especialidadeId?: true
    dataHoraInicio?: true
    dataHoraFim?: true
    numeroSessoes?: true
    status?: true
    observacoes?: true
    origem?: true
    recorrenciaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AgendamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agendamento to aggregate.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgendamentoWhereUniqueInput
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
    _count?: true | AgendamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgendamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgendamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgendamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgendamentoMaxAggregateInputType
  }

  export type GetAgendamentoAggregateType<T extends AgendamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateAgendamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgendamento[P]>
      : GetScalarType<T[P], AggregateAgendamento[P]>
  }




  export type AgendamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentoWhereInput
    orderBy?: AgendamentoOrderByWithAggregationInput | AgendamentoOrderByWithAggregationInput[]
    by: AgendamentoScalarFieldEnum[] | AgendamentoScalarFieldEnum
    having?: AgendamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgendamentoCountAggregateInputType | true
    _avg?: AgendamentoAvgAggregateInputType
    _sum?: AgendamentoSumAggregateInputType
    _min?: AgendamentoMinAggregateInputType
    _max?: AgendamentoMaxAggregateInputType
  }

  export type AgendamentoGroupByOutputType = {
    id: string
    tipo: $Enums.TipoAgendamento
    profissionalId: string
    especialidadeId: string
    dataHoraInicio: Date
    dataHoraFim: Date
    numeroSessoes: number
    status: $Enums.StatusAgendamento
    observacoes: string | null
    origem: $Enums.OrigemAgendamento
    recorrenciaId: string | null
    createdAt: Date
    updatedAt: Date
    _count: AgendamentoCountAggregateOutputType | null
    _avg: AgendamentoAvgAggregateOutputType | null
    _sum: AgendamentoSumAggregateOutputType | null
    _min: AgendamentoMinAggregateOutputType | null
    _max: AgendamentoMaxAggregateOutputType | null
  }

  type GetAgendamentoGroupByPayload<T extends AgendamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgendamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgendamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgendamentoGroupByOutputType[P]>
            : GetScalarType<T[P], AgendamentoGroupByOutputType[P]>
        }
      >
    >


  export type AgendamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    profissionalId?: boolean
    especialidadeId?: boolean
    dataHoraInicio?: boolean
    dataHoraFim?: boolean
    numeroSessoes?: boolean
    status?: boolean
    observacoes?: boolean
    origem?: boolean
    recorrenciaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    especialidade?: boolean | EspecialidadeDefaultArgs<ExtArgs>
    pacientes?: boolean | Agendamento$pacientesArgs<ExtArgs>
    _count?: boolean | AgendamentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamento"]>

  export type AgendamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    profissionalId?: boolean
    especialidadeId?: boolean
    dataHoraInicio?: boolean
    dataHoraFim?: boolean
    numeroSessoes?: boolean
    status?: boolean
    observacoes?: boolean
    origem?: boolean
    recorrenciaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    especialidade?: boolean | EspecialidadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamento"]>

  export type AgendamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    profissionalId?: boolean
    especialidadeId?: boolean
    dataHoraInicio?: boolean
    dataHoraFim?: boolean
    numeroSessoes?: boolean
    status?: boolean
    observacoes?: boolean
    origem?: boolean
    recorrenciaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    especialidade?: boolean | EspecialidadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamento"]>

  export type AgendamentoSelectScalar = {
    id?: boolean
    tipo?: boolean
    profissionalId?: boolean
    especialidadeId?: boolean
    dataHoraInicio?: boolean
    dataHoraFim?: boolean
    numeroSessoes?: boolean
    status?: boolean
    observacoes?: boolean
    origem?: boolean
    recorrenciaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AgendamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "profissionalId" | "especialidadeId" | "dataHoraInicio" | "dataHoraFim" | "numeroSessoes" | "status" | "observacoes" | "origem" | "recorrenciaId" | "createdAt" | "updatedAt", ExtArgs["result"]["agendamento"]>
  export type AgendamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    especialidade?: boolean | EspecialidadeDefaultArgs<ExtArgs>
    pacientes?: boolean | Agendamento$pacientesArgs<ExtArgs>
    _count?: boolean | AgendamentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgendamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    especialidade?: boolean | EspecialidadeDefaultArgs<ExtArgs>
  }
  export type AgendamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profissional?: boolean | ProfissionalDefaultArgs<ExtArgs>
    especialidade?: boolean | EspecialidadeDefaultArgs<ExtArgs>
  }

  export type $AgendamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agendamento"
    objects: {
      profissional: Prisma.$ProfissionalPayload<ExtArgs>
      especialidade: Prisma.$EspecialidadePayload<ExtArgs>
      pacientes: Prisma.$AgendamentoPacientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipo: $Enums.TipoAgendamento
      profissionalId: string
      especialidadeId: string
      dataHoraInicio: Date
      dataHoraFim: Date
      numeroSessoes: number
      status: $Enums.StatusAgendamento
      observacoes: string | null
      origem: $Enums.OrigemAgendamento
      recorrenciaId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["agendamento"]>
    composites: {}
  }

  type AgendamentoGetPayload<S extends boolean | null | undefined | AgendamentoDefaultArgs> = $Result.GetResult<Prisma.$AgendamentoPayload, S>

  type AgendamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgendamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgendamentoCountAggregateInputType | true
    }

  export interface AgendamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agendamento'], meta: { name: 'Agendamento' } }
    /**
     * Find zero or one Agendamento that matches the filter.
     * @param {AgendamentoFindUniqueArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgendamentoFindUniqueArgs>(args: SelectSubset<T, AgendamentoFindUniqueArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agendamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgendamentoFindUniqueOrThrowArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgendamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, AgendamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoFindFirstArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgendamentoFindFirstArgs>(args?: SelectSubset<T, AgendamentoFindFirstArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoFindFirstOrThrowArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgendamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, AgendamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agendamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agendamentos
     * const agendamentos = await prisma.agendamento.findMany()
     * 
     * // Get first 10 Agendamentos
     * const agendamentos = await prisma.agendamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agendamentoWithIdOnly = await prisma.agendamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgendamentoFindManyArgs>(args?: SelectSubset<T, AgendamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agendamento.
     * @param {AgendamentoCreateArgs} args - Arguments to create a Agendamento.
     * @example
     * // Create one Agendamento
     * const Agendamento = await prisma.agendamento.create({
     *   data: {
     *     // ... data to create a Agendamento
     *   }
     * })
     * 
     */
    create<T extends AgendamentoCreateArgs>(args: SelectSubset<T, AgendamentoCreateArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agendamentos.
     * @param {AgendamentoCreateManyArgs} args - Arguments to create many Agendamentos.
     * @example
     * // Create many Agendamentos
     * const agendamento = await prisma.agendamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgendamentoCreateManyArgs>(args?: SelectSubset<T, AgendamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agendamentos and returns the data saved in the database.
     * @param {AgendamentoCreateManyAndReturnArgs} args - Arguments to create many Agendamentos.
     * @example
     * // Create many Agendamentos
     * const agendamento = await prisma.agendamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agendamentos and only return the `id`
     * const agendamentoWithIdOnly = await prisma.agendamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgendamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, AgendamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agendamento.
     * @param {AgendamentoDeleteArgs} args - Arguments to delete one Agendamento.
     * @example
     * // Delete one Agendamento
     * const Agendamento = await prisma.agendamento.delete({
     *   where: {
     *     // ... filter to delete one Agendamento
     *   }
     * })
     * 
     */
    delete<T extends AgendamentoDeleteArgs>(args: SelectSubset<T, AgendamentoDeleteArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agendamento.
     * @param {AgendamentoUpdateArgs} args - Arguments to update one Agendamento.
     * @example
     * // Update one Agendamento
     * const agendamento = await prisma.agendamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgendamentoUpdateArgs>(args: SelectSubset<T, AgendamentoUpdateArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agendamentos.
     * @param {AgendamentoDeleteManyArgs} args - Arguments to filter Agendamentos to delete.
     * @example
     * // Delete a few Agendamentos
     * const { count } = await prisma.agendamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgendamentoDeleteManyArgs>(args?: SelectSubset<T, AgendamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agendamentos
     * const agendamento = await prisma.agendamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgendamentoUpdateManyArgs>(args: SelectSubset<T, AgendamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agendamentos and returns the data updated in the database.
     * @param {AgendamentoUpdateManyAndReturnArgs} args - Arguments to update many Agendamentos.
     * @example
     * // Update many Agendamentos
     * const agendamento = await prisma.agendamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agendamentos and only return the `id`
     * const agendamentoWithIdOnly = await prisma.agendamento.updateManyAndReturn({
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
    updateManyAndReturn<T extends AgendamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, AgendamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agendamento.
     * @param {AgendamentoUpsertArgs} args - Arguments to update or create a Agendamento.
     * @example
     * // Update or create a Agendamento
     * const agendamento = await prisma.agendamento.upsert({
     *   create: {
     *     // ... data to create a Agendamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agendamento we want to update
     *   }
     * })
     */
    upsert<T extends AgendamentoUpsertArgs>(args: SelectSubset<T, AgendamentoUpsertArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoCountArgs} args - Arguments to filter Agendamentos to count.
     * @example
     * // Count the number of Agendamentos
     * const count = await prisma.agendamento.count({
     *   where: {
     *     // ... the filter for the Agendamentos we want to count
     *   }
     * })
    **/
    count<T extends AgendamentoCountArgs>(
      args?: Subset<T, AgendamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgendamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agendamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgendamentoAggregateArgs>(args: Subset<T, AgendamentoAggregateArgs>): Prisma.PrismaPromise<GetAgendamentoAggregateType<T>>

    /**
     * Group by Agendamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoGroupByArgs} args - Group by arguments.
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
      T extends AgendamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgendamentoGroupByArgs['orderBy'] }
        : { orderBy?: AgendamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgendamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agendamento model
   */
  readonly fields: AgendamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agendamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgendamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profissional<T extends ProfissionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfissionalDefaultArgs<ExtArgs>>): Prisma__ProfissionalClient<$Result.GetResult<Prisma.$ProfissionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    especialidade<T extends EspecialidadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EspecialidadeDefaultArgs<ExtArgs>>): Prisma__EspecialidadeClient<$Result.GetResult<Prisma.$EspecialidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pacientes<T extends Agendamento$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, Agendamento$pacientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Agendamento model
   */
  interface AgendamentoFieldRefs {
    readonly id: FieldRef<"Agendamento", 'String'>
    readonly tipo: FieldRef<"Agendamento", 'TipoAgendamento'>
    readonly profissionalId: FieldRef<"Agendamento", 'String'>
    readonly especialidadeId: FieldRef<"Agendamento", 'String'>
    readonly dataHoraInicio: FieldRef<"Agendamento", 'DateTime'>
    readonly dataHoraFim: FieldRef<"Agendamento", 'DateTime'>
    readonly numeroSessoes: FieldRef<"Agendamento", 'Int'>
    readonly status: FieldRef<"Agendamento", 'StatusAgendamento'>
    readonly observacoes: FieldRef<"Agendamento", 'String'>
    readonly origem: FieldRef<"Agendamento", 'OrigemAgendamento'>
    readonly recorrenciaId: FieldRef<"Agendamento", 'String'>
    readonly createdAt: FieldRef<"Agendamento", 'DateTime'>
    readonly updatedAt: FieldRef<"Agendamento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Agendamento findUnique
   */
  export type AgendamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento findUniqueOrThrow
   */
  export type AgendamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento findFirst
   */
  export type AgendamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agendamentos.
     */
    cursor?: AgendamentoWhereUniqueInput
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
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Agendamento findFirstOrThrow
   */
  export type AgendamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agendamentos.
     */
    cursor?: AgendamentoWhereUniqueInput
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
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Agendamento findMany
   */
  export type AgendamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamentos to fetch.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agendamentos.
     */
    cursor?: AgendamentoWhereUniqueInput
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
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Agendamento create
   */
  export type AgendamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Agendamento.
     */
    data: XOR<AgendamentoCreateInput, AgendamentoUncheckedCreateInput>
  }

  /**
   * Agendamento createMany
   */
  export type AgendamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agendamentos.
     */
    data: AgendamentoCreateManyInput | AgendamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agendamento createManyAndReturn
   */
  export type AgendamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Agendamentos.
     */
    data: AgendamentoCreateManyInput | AgendamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agendamento update
   */
  export type AgendamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Agendamento.
     */
    data: XOR<AgendamentoUpdateInput, AgendamentoUncheckedUpdateInput>
    /**
     * Choose, which Agendamento to update.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento updateMany
   */
  export type AgendamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agendamentos.
     */
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyInput>
    /**
     * Filter which Agendamentos to update
     */
    where?: AgendamentoWhereInput
    /**
     * Limit how many Agendamentos to update.
     */
    limit?: number
  }

  /**
   * Agendamento updateManyAndReturn
   */
  export type AgendamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * The data used to update Agendamentos.
     */
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyInput>
    /**
     * Filter which Agendamentos to update
     */
    where?: AgendamentoWhereInput
    /**
     * Limit how many Agendamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agendamento upsert
   */
  export type AgendamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Agendamento to update in case it exists.
     */
    where: AgendamentoWhereUniqueInput
    /**
     * In case the Agendamento found by the `where` argument doesn't exist, create a new Agendamento with this data.
     */
    create: XOR<AgendamentoCreateInput, AgendamentoUncheckedCreateInput>
    /**
     * In case the Agendamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgendamentoUpdateInput, AgendamentoUncheckedUpdateInput>
  }

  /**
   * Agendamento delete
   */
  export type AgendamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter which Agendamento to delete.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento deleteMany
   */
  export type AgendamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agendamentos to delete
     */
    where?: AgendamentoWhereInput
    /**
     * Limit how many Agendamentos to delete.
     */
    limit?: number
  }

  /**
   * Agendamento.pacientes
   */
  export type Agendamento$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendamentoPaciente
     */
    select?: AgendamentoPacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendamentoPaciente
     */
    omit?: AgendamentoPacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoPacienteInclude<ExtArgs> | null
    where?: AgendamentoPacienteWhereInput
    orderBy?: AgendamentoPacienteOrderByWithRelationInput | AgendamentoPacienteOrderByWithRelationInput[]
    cursor?: AgendamentoPacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendamentoPacienteScalarFieldEnum | AgendamentoPacienteScalarFieldEnum[]
  }

  /**
   * Agendamento without action
   */
  export type AgendamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
  }


  /**
   * Model AgendamentoPaciente
   */

  export type AggregateAgendamentoPaciente = {
    _count: AgendamentoPacienteCountAggregateOutputType | null
    _min: AgendamentoPacienteMinAggregateOutputType | null
    _max: AgendamentoPacienteMaxAggregateOutputType | null
  }

  export type AgendamentoPacienteMinAggregateOutputType = {
    agendamentoId: string | null
    pacienteId: string | null
  }

  export type AgendamentoPacienteMaxAggregateOutputType = {
    agendamentoId: string | null
    pacienteId: string | null
  }

  export type AgendamentoPacienteCountAggregateOutputType = {
    agendamentoId: number
    pacienteId: number
    _all: number
  }


  export type AgendamentoPacienteMinAggregateInputType = {
    agendamentoId?: true
    pacienteId?: true
  }

  export type AgendamentoPacienteMaxAggregateInputType = {
    agendamentoId?: true
    pacienteId?: true
  }

  export type AgendamentoPacienteCountAggregateInputType = {
    agendamentoId?: true
    pacienteId?: true
    _all?: true
  }

  export type AgendamentoPacienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgendamentoPaciente to aggregate.
     */
    where?: AgendamentoPacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgendamentoPacientes to fetch.
     */
    orderBy?: AgendamentoPacienteOrderByWithRelationInput | AgendamentoPacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgendamentoPacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgendamentoPacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgendamentoPacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgendamentoPacientes
    **/
    _count?: true | AgendamentoPacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgendamentoPacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgendamentoPacienteMaxAggregateInputType
  }

  export type GetAgendamentoPacienteAggregateType<T extends AgendamentoPacienteAggregateArgs> = {
        [P in keyof T & keyof AggregateAgendamentoPaciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgendamentoPaciente[P]>
      : GetScalarType<T[P], AggregateAgendamentoPaciente[P]>
  }




  export type AgendamentoPacienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentoPacienteWhereInput
    orderBy?: AgendamentoPacienteOrderByWithAggregationInput | AgendamentoPacienteOrderByWithAggregationInput[]
    by: AgendamentoPacienteScalarFieldEnum[] | AgendamentoPacienteScalarFieldEnum
    having?: AgendamentoPacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgendamentoPacienteCountAggregateInputType | true
    _min?: AgendamentoPacienteMinAggregateInputType
    _max?: AgendamentoPacienteMaxAggregateInputType
  }

  export type AgendamentoPacienteGroupByOutputType = {
    agendamentoId: string
    pacienteId: string
    _count: AgendamentoPacienteCountAggregateOutputType | null
    _min: AgendamentoPacienteMinAggregateOutputType | null
    _max: AgendamentoPacienteMaxAggregateOutputType | null
  }

  type GetAgendamentoPacienteGroupByPayload<T extends AgendamentoPacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgendamentoPacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgendamentoPacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgendamentoPacienteGroupByOutputType[P]>
            : GetScalarType<T[P], AgendamentoPacienteGroupByOutputType[P]>
        }
      >
    >


  export type AgendamentoPacienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    agendamentoId?: boolean
    pacienteId?: boolean
    agendamento?: boolean | AgendamentoDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamentoPaciente"]>

  export type AgendamentoPacienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    agendamentoId?: boolean
    pacienteId?: boolean
    agendamento?: boolean | AgendamentoDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamentoPaciente"]>

  export type AgendamentoPacienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    agendamentoId?: boolean
    pacienteId?: boolean
    agendamento?: boolean | AgendamentoDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamentoPaciente"]>

  export type AgendamentoPacienteSelectScalar = {
    agendamentoId?: boolean
    pacienteId?: boolean
  }

  export type AgendamentoPacienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"agendamentoId" | "pacienteId", ExtArgs["result"]["agendamentoPaciente"]>
  export type AgendamentoPacienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamento?: boolean | AgendamentoDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }
  export type AgendamentoPacienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamento?: boolean | AgendamentoDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }
  export type AgendamentoPacienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamento?: boolean | AgendamentoDefaultArgs<ExtArgs>
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
  }

  export type $AgendamentoPacientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgendamentoPaciente"
    objects: {
      agendamento: Prisma.$AgendamentoPayload<ExtArgs>
      paciente: Prisma.$PacientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      agendamentoId: string
      pacienteId: string
    }, ExtArgs["result"]["agendamentoPaciente"]>
    composites: {}
  }

  type AgendamentoPacienteGetPayload<S extends boolean | null | undefined | AgendamentoPacienteDefaultArgs> = $Result.GetResult<Prisma.$AgendamentoPacientePayload, S>

  type AgendamentoPacienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgendamentoPacienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgendamentoPacienteCountAggregateInputType | true
    }

  export interface AgendamentoPacienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgendamentoPaciente'], meta: { name: 'AgendamentoPaciente' } }
    /**
     * Find zero or one AgendamentoPaciente that matches the filter.
     * @param {AgendamentoPacienteFindUniqueArgs} args - Arguments to find a AgendamentoPaciente
     * @example
     * // Get one AgendamentoPaciente
     * const agendamentoPaciente = await prisma.agendamentoPaciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgendamentoPacienteFindUniqueArgs>(args: SelectSubset<T, AgendamentoPacienteFindUniqueArgs<ExtArgs>>): Prisma__AgendamentoPacienteClient<$Result.GetResult<Prisma.$AgendamentoPacientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AgendamentoPaciente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgendamentoPacienteFindUniqueOrThrowArgs} args - Arguments to find a AgendamentoPaciente
     * @example
     * // Get one AgendamentoPaciente
     * const agendamentoPaciente = await prisma.agendamentoPaciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgendamentoPacienteFindUniqueOrThrowArgs>(args: SelectSubset<T, AgendamentoPacienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgendamentoPacienteClient<$Result.GetResult<Prisma.$AgendamentoPacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgendamentoPaciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoPacienteFindFirstArgs} args - Arguments to find a AgendamentoPaciente
     * @example
     * // Get one AgendamentoPaciente
     * const agendamentoPaciente = await prisma.agendamentoPaciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgendamentoPacienteFindFirstArgs>(args?: SelectSubset<T, AgendamentoPacienteFindFirstArgs<ExtArgs>>): Prisma__AgendamentoPacienteClient<$Result.GetResult<Prisma.$AgendamentoPacientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgendamentoPaciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoPacienteFindFirstOrThrowArgs} args - Arguments to find a AgendamentoPaciente
     * @example
     * // Get one AgendamentoPaciente
     * const agendamentoPaciente = await prisma.agendamentoPaciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgendamentoPacienteFindFirstOrThrowArgs>(args?: SelectSubset<T, AgendamentoPacienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgendamentoPacienteClient<$Result.GetResult<Prisma.$AgendamentoPacientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AgendamentoPacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoPacienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgendamentoPacientes
     * const agendamentoPacientes = await prisma.agendamentoPaciente.findMany()
     * 
     * // Get first 10 AgendamentoPacientes
     * const agendamentoPacientes = await prisma.agendamentoPaciente.findMany({ take: 10 })
     * 
     * // Only select the `agendamentoId`
     * const agendamentoPacienteWithAgendamentoIdOnly = await prisma.agendamentoPaciente.findMany({ select: { agendamentoId: true } })
     * 
     */
    findMany<T extends AgendamentoPacienteFindManyArgs>(args?: SelectSubset<T, AgendamentoPacienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AgendamentoPaciente.
     * @param {AgendamentoPacienteCreateArgs} args - Arguments to create a AgendamentoPaciente.
     * @example
     * // Create one AgendamentoPaciente
     * const AgendamentoPaciente = await prisma.agendamentoPaciente.create({
     *   data: {
     *     // ... data to create a AgendamentoPaciente
     *   }
     * })
     * 
     */
    create<T extends AgendamentoPacienteCreateArgs>(args: SelectSubset<T, AgendamentoPacienteCreateArgs<ExtArgs>>): Prisma__AgendamentoPacienteClient<$Result.GetResult<Prisma.$AgendamentoPacientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AgendamentoPacientes.
     * @param {AgendamentoPacienteCreateManyArgs} args - Arguments to create many AgendamentoPacientes.
     * @example
     * // Create many AgendamentoPacientes
     * const agendamentoPaciente = await prisma.agendamentoPaciente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgendamentoPacienteCreateManyArgs>(args?: SelectSubset<T, AgendamentoPacienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgendamentoPacientes and returns the data saved in the database.
     * @param {AgendamentoPacienteCreateManyAndReturnArgs} args - Arguments to create many AgendamentoPacientes.
     * @example
     * // Create many AgendamentoPacientes
     * const agendamentoPaciente = await prisma.agendamentoPaciente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgendamentoPacientes and only return the `agendamentoId`
     * const agendamentoPacienteWithAgendamentoIdOnly = await prisma.agendamentoPaciente.createManyAndReturn({
     *   select: { agendamentoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgendamentoPacienteCreateManyAndReturnArgs>(args?: SelectSubset<T, AgendamentoPacienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPacientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AgendamentoPaciente.
     * @param {AgendamentoPacienteDeleteArgs} args - Arguments to delete one AgendamentoPaciente.
     * @example
     * // Delete one AgendamentoPaciente
     * const AgendamentoPaciente = await prisma.agendamentoPaciente.delete({
     *   where: {
     *     // ... filter to delete one AgendamentoPaciente
     *   }
     * })
     * 
     */
    delete<T extends AgendamentoPacienteDeleteArgs>(args: SelectSubset<T, AgendamentoPacienteDeleteArgs<ExtArgs>>): Prisma__AgendamentoPacienteClient<$Result.GetResult<Prisma.$AgendamentoPacientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AgendamentoPaciente.
     * @param {AgendamentoPacienteUpdateArgs} args - Arguments to update one AgendamentoPaciente.
     * @example
     * // Update one AgendamentoPaciente
     * const agendamentoPaciente = await prisma.agendamentoPaciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgendamentoPacienteUpdateArgs>(args: SelectSubset<T, AgendamentoPacienteUpdateArgs<ExtArgs>>): Prisma__AgendamentoPacienteClient<$Result.GetResult<Prisma.$AgendamentoPacientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AgendamentoPacientes.
     * @param {AgendamentoPacienteDeleteManyArgs} args - Arguments to filter AgendamentoPacientes to delete.
     * @example
     * // Delete a few AgendamentoPacientes
     * const { count } = await prisma.agendamentoPaciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgendamentoPacienteDeleteManyArgs>(args?: SelectSubset<T, AgendamentoPacienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgendamentoPacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoPacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgendamentoPacientes
     * const agendamentoPaciente = await prisma.agendamentoPaciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgendamentoPacienteUpdateManyArgs>(args: SelectSubset<T, AgendamentoPacienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgendamentoPacientes and returns the data updated in the database.
     * @param {AgendamentoPacienteUpdateManyAndReturnArgs} args - Arguments to update many AgendamentoPacientes.
     * @example
     * // Update many AgendamentoPacientes
     * const agendamentoPaciente = await prisma.agendamentoPaciente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AgendamentoPacientes and only return the `agendamentoId`
     * const agendamentoPacienteWithAgendamentoIdOnly = await prisma.agendamentoPaciente.updateManyAndReturn({
     *   select: { agendamentoId: true },
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
    updateManyAndReturn<T extends AgendamentoPacienteUpdateManyAndReturnArgs>(args: SelectSubset<T, AgendamentoPacienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPacientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AgendamentoPaciente.
     * @param {AgendamentoPacienteUpsertArgs} args - Arguments to update or create a AgendamentoPaciente.
     * @example
     * // Update or create a AgendamentoPaciente
     * const agendamentoPaciente = await prisma.agendamentoPaciente.upsert({
     *   create: {
     *     // ... data to create a AgendamentoPaciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgendamentoPaciente we want to update
     *   }
     * })
     */
    upsert<T extends AgendamentoPacienteUpsertArgs>(args: SelectSubset<T, AgendamentoPacienteUpsertArgs<ExtArgs>>): Prisma__AgendamentoPacienteClient<$Result.GetResult<Prisma.$AgendamentoPacientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AgendamentoPacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoPacienteCountArgs} args - Arguments to filter AgendamentoPacientes to count.
     * @example
     * // Count the number of AgendamentoPacientes
     * const count = await prisma.agendamentoPaciente.count({
     *   where: {
     *     // ... the filter for the AgendamentoPacientes we want to count
     *   }
     * })
    **/
    count<T extends AgendamentoPacienteCountArgs>(
      args?: Subset<T, AgendamentoPacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgendamentoPacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgendamentoPaciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoPacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgendamentoPacienteAggregateArgs>(args: Subset<T, AgendamentoPacienteAggregateArgs>): Prisma.PrismaPromise<GetAgendamentoPacienteAggregateType<T>>

    /**
     * Group by AgendamentoPaciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoPacienteGroupByArgs} args - Group by arguments.
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
      T extends AgendamentoPacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgendamentoPacienteGroupByArgs['orderBy'] }
        : { orderBy?: AgendamentoPacienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgendamentoPacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendamentoPacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgendamentoPaciente model
   */
  readonly fields: AgendamentoPacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgendamentoPaciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgendamentoPacienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agendamento<T extends AgendamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgendamentoDefaultArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AgendamentoPaciente model
   */
  interface AgendamentoPacienteFieldRefs {
    readonly agendamentoId: FieldRef<"AgendamentoPaciente", 'String'>
    readonly pacienteId: FieldRef<"AgendamentoPaciente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AgendamentoPaciente findUnique
   */
  export type AgendamentoPacienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendamentoPaciente
     */
    select?: AgendamentoPacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendamentoPaciente
     */
    omit?: AgendamentoPacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoPacienteInclude<ExtArgs> | null
    /**
     * Filter, which AgendamentoPaciente to fetch.
     */
    where: AgendamentoPacienteWhereUniqueInput
  }

  /**
   * AgendamentoPaciente findUniqueOrThrow
   */
  export type AgendamentoPacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendamentoPaciente
     */
    select?: AgendamentoPacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendamentoPaciente
     */
    omit?: AgendamentoPacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoPacienteInclude<ExtArgs> | null
    /**
     * Filter, which AgendamentoPaciente to fetch.
     */
    where: AgendamentoPacienteWhereUniqueInput
  }

  /**
   * AgendamentoPaciente findFirst
   */
  export type AgendamentoPacienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendamentoPaciente
     */
    select?: AgendamentoPacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendamentoPaciente
     */
    omit?: AgendamentoPacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoPacienteInclude<ExtArgs> | null
    /**
     * Filter, which AgendamentoPaciente to fetch.
     */
    where?: AgendamentoPacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgendamentoPacientes to fetch.
     */
    orderBy?: AgendamentoPacienteOrderByWithRelationInput | AgendamentoPacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgendamentoPacientes.
     */
    cursor?: AgendamentoPacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgendamentoPacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgendamentoPacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgendamentoPacientes.
     */
    distinct?: AgendamentoPacienteScalarFieldEnum | AgendamentoPacienteScalarFieldEnum[]
  }

  /**
   * AgendamentoPaciente findFirstOrThrow
   */
  export type AgendamentoPacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendamentoPaciente
     */
    select?: AgendamentoPacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendamentoPaciente
     */
    omit?: AgendamentoPacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoPacienteInclude<ExtArgs> | null
    /**
     * Filter, which AgendamentoPaciente to fetch.
     */
    where?: AgendamentoPacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgendamentoPacientes to fetch.
     */
    orderBy?: AgendamentoPacienteOrderByWithRelationInput | AgendamentoPacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgendamentoPacientes.
     */
    cursor?: AgendamentoPacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgendamentoPacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgendamentoPacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgendamentoPacientes.
     */
    distinct?: AgendamentoPacienteScalarFieldEnum | AgendamentoPacienteScalarFieldEnum[]
  }

  /**
   * AgendamentoPaciente findMany
   */
  export type AgendamentoPacienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendamentoPaciente
     */
    select?: AgendamentoPacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendamentoPaciente
     */
    omit?: AgendamentoPacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoPacienteInclude<ExtArgs> | null
    /**
     * Filter, which AgendamentoPacientes to fetch.
     */
    where?: AgendamentoPacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgendamentoPacientes to fetch.
     */
    orderBy?: AgendamentoPacienteOrderByWithRelationInput | AgendamentoPacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgendamentoPacientes.
     */
    cursor?: AgendamentoPacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgendamentoPacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgendamentoPacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgendamentoPacientes.
     */
    distinct?: AgendamentoPacienteScalarFieldEnum | AgendamentoPacienteScalarFieldEnum[]
  }

  /**
   * AgendamentoPaciente create
   */
  export type AgendamentoPacienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendamentoPaciente
     */
    select?: AgendamentoPacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendamentoPaciente
     */
    omit?: AgendamentoPacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoPacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a AgendamentoPaciente.
     */
    data: XOR<AgendamentoPacienteCreateInput, AgendamentoPacienteUncheckedCreateInput>
  }

  /**
   * AgendamentoPaciente createMany
   */
  export type AgendamentoPacienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgendamentoPacientes.
     */
    data: AgendamentoPacienteCreateManyInput | AgendamentoPacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgendamentoPaciente createManyAndReturn
   */
  export type AgendamentoPacienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendamentoPaciente
     */
    select?: AgendamentoPacienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgendamentoPaciente
     */
    omit?: AgendamentoPacienteOmit<ExtArgs> | null
    /**
     * The data used to create many AgendamentoPacientes.
     */
    data: AgendamentoPacienteCreateManyInput | AgendamentoPacienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoPacienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgendamentoPaciente update
   */
  export type AgendamentoPacienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendamentoPaciente
     */
    select?: AgendamentoPacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendamentoPaciente
     */
    omit?: AgendamentoPacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoPacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a AgendamentoPaciente.
     */
    data: XOR<AgendamentoPacienteUpdateInput, AgendamentoPacienteUncheckedUpdateInput>
    /**
     * Choose, which AgendamentoPaciente to update.
     */
    where: AgendamentoPacienteWhereUniqueInput
  }

  /**
   * AgendamentoPaciente updateMany
   */
  export type AgendamentoPacienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgendamentoPacientes.
     */
    data: XOR<AgendamentoPacienteUpdateManyMutationInput, AgendamentoPacienteUncheckedUpdateManyInput>
    /**
     * Filter which AgendamentoPacientes to update
     */
    where?: AgendamentoPacienteWhereInput
    /**
     * Limit how many AgendamentoPacientes to update.
     */
    limit?: number
  }

  /**
   * AgendamentoPaciente updateManyAndReturn
   */
  export type AgendamentoPacienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendamentoPaciente
     */
    select?: AgendamentoPacienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgendamentoPaciente
     */
    omit?: AgendamentoPacienteOmit<ExtArgs> | null
    /**
     * The data used to update AgendamentoPacientes.
     */
    data: XOR<AgendamentoPacienteUpdateManyMutationInput, AgendamentoPacienteUncheckedUpdateManyInput>
    /**
     * Filter which AgendamentoPacientes to update
     */
    where?: AgendamentoPacienteWhereInput
    /**
     * Limit how many AgendamentoPacientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoPacienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgendamentoPaciente upsert
   */
  export type AgendamentoPacienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendamentoPaciente
     */
    select?: AgendamentoPacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendamentoPaciente
     */
    omit?: AgendamentoPacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoPacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the AgendamentoPaciente to update in case it exists.
     */
    where: AgendamentoPacienteWhereUniqueInput
    /**
     * In case the AgendamentoPaciente found by the `where` argument doesn't exist, create a new AgendamentoPaciente with this data.
     */
    create: XOR<AgendamentoPacienteCreateInput, AgendamentoPacienteUncheckedCreateInput>
    /**
     * In case the AgendamentoPaciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgendamentoPacienteUpdateInput, AgendamentoPacienteUncheckedUpdateInput>
  }

  /**
   * AgendamentoPaciente delete
   */
  export type AgendamentoPacienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendamentoPaciente
     */
    select?: AgendamentoPacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendamentoPaciente
     */
    omit?: AgendamentoPacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoPacienteInclude<ExtArgs> | null
    /**
     * Filter which AgendamentoPaciente to delete.
     */
    where: AgendamentoPacienteWhereUniqueInput
  }

  /**
   * AgendamentoPaciente deleteMany
   */
  export type AgendamentoPacienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgendamentoPacientes to delete
     */
    where?: AgendamentoPacienteWhereInput
    /**
     * Limit how many AgendamentoPacientes to delete.
     */
    limit?: number
  }

  /**
   * AgendamentoPaciente without action
   */
  export type AgendamentoPacienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendamentoPaciente
     */
    select?: AgendamentoPacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendamentoPaciente
     */
    omit?: AgendamentoPacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoPacienteInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    papel: 'papel',
    ativo: 'ativo',
    profissionalId: 'profissionalId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ConvenioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConvenioScalarFieldEnum = (typeof ConvenioScalarFieldEnum)[keyof typeof ConvenioScalarFieldEnum]


  export const PacienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    dataNasc: 'dataNasc',
    cpf: 'cpf',
    telefone: 'telefone',
    telefone2: 'telefone2',
    email: 'email',
    cep: 'cep',
    logradouro: 'logradouro',
    numero: 'numero',
    complemento: 'complemento',
    bairro: 'bairro',
    cidade: 'cidade',
    estado: 'estado',
    diagnostico: 'diagnostico',
    observacoes: 'observacoes',
    perfil: 'perfil',
    nomeResponsavel: 'nomeResponsavel',
    telefoneResponsavel: 'telefoneResponsavel',
    relacaoResponsavel: 'relacaoResponsavel',
    convenioId: 'convenioId',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PacienteScalarFieldEnum = (typeof PacienteScalarFieldEnum)[keyof typeof PacienteScalarFieldEnum]


  export const EspecialidadeScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    tipo: 'tipo',
    descricao: 'descricao',
    cor: 'cor',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EspecialidadeScalarFieldEnum = (typeof EspecialidadeScalarFieldEnum)[keyof typeof EspecialidadeScalarFieldEnum]


  export const PacienteEspecialidadeScalarFieldEnum: {
    pacienteId: 'pacienteId',
    especialidadeId: 'especialidadeId',
    createdAt: 'createdAt'
  };

  export type PacienteEspecialidadeScalarFieldEnum = (typeof PacienteEspecialidadeScalarFieldEnum)[keyof typeof PacienteEspecialidadeScalarFieldEnum]


  export const ProfissionalScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    registro: 'registro',
    especialidadeId: 'especialidadeId',
    telefone: 'telefone',
    email: 'email',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfissionalScalarFieldEnum = (typeof ProfissionalScalarFieldEnum)[keyof typeof ProfissionalScalarFieldEnum]


  export const HorarioAtendimentoScalarFieldEnum: {
    id: 'id',
    profissionalId: 'profissionalId',
    diaSemana: 'diaSemana',
    horaInicio: 'horaInicio',
    duracaoSessao: 'duracaoSessao',
    intervaloSessoes: 'intervaloSessoes',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HorarioAtendimentoScalarFieldEnum = (typeof HorarioAtendimentoScalarFieldEnum)[keyof typeof HorarioAtendimentoScalarFieldEnum]


  export const AgendamentoScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    profissionalId: 'profissionalId',
    especialidadeId: 'especialidadeId',
    dataHoraInicio: 'dataHoraInicio',
    dataHoraFim: 'dataHoraFim',
    numeroSessoes: 'numeroSessoes',
    status: 'status',
    observacoes: 'observacoes',
    origem: 'origem',
    recorrenciaId: 'recorrenciaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AgendamentoScalarFieldEnum = (typeof AgendamentoScalarFieldEnum)[keyof typeof AgendamentoScalarFieldEnum]


  export const AgendamentoPacienteScalarFieldEnum: {
    agendamentoId: 'agendamentoId',
    pacienteId: 'pacienteId'
  };

  export type AgendamentoPacienteScalarFieldEnum = (typeof AgendamentoPacienteScalarFieldEnum)[keyof typeof AgendamentoPacienteScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Papel'
   */
  export type EnumPapelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Papel'>
    


  /**
   * Reference to a field of type 'Papel[]'
   */
  export type ListEnumPapelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Papel[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TipoEspecialidade'
   */
  export type EnumTipoEspecialidadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoEspecialidade'>
    


  /**
   * Reference to a field of type 'TipoEspecialidade[]'
   */
  export type ListEnumTipoEspecialidadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoEspecialidade[]'>
    


  /**
   * Reference to a field of type 'DiaSemana'
   */
  export type EnumDiaSemanaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiaSemana'>
    


  /**
   * Reference to a field of type 'DiaSemana[]'
   */
  export type ListEnumDiaSemanaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiaSemana[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TipoAgendamento'
   */
  export type EnumTipoAgendamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoAgendamento'>
    


  /**
   * Reference to a field of type 'TipoAgendamento[]'
   */
  export type ListEnumTipoAgendamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoAgendamento[]'>
    


  /**
   * Reference to a field of type 'StatusAgendamento'
   */
  export type EnumStatusAgendamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAgendamento'>
    


  /**
   * Reference to a field of type 'StatusAgendamento[]'
   */
  export type ListEnumStatusAgendamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAgendamento[]'>
    


  /**
   * Reference to a field of type 'OrigemAgendamento'
   */
  export type EnumOrigemAgendamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrigemAgendamento'>
    


  /**
   * Reference to a field of type 'OrigemAgendamento[]'
   */
  export type ListEnumOrigemAgendamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrigemAgendamento[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nome?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    senha?: StringFilter<"User"> | string
    papel?: EnumPapelFilter<"User"> | $Enums.Papel
    ativo?: BoolFilter<"User"> | boolean
    profissionalId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profissional?: XOR<ProfissionalNullableScalarRelationFilter, ProfissionalWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    papel?: SortOrder
    ativo?: SortOrder
    profissionalId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profissional?: ProfissionalOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    profissionalId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nome?: StringFilter<"User"> | string
    senha?: StringFilter<"User"> | string
    papel?: EnumPapelFilter<"User"> | $Enums.Papel
    ativo?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profissional?: XOR<ProfissionalNullableScalarRelationFilter, ProfissionalWhereInput> | null
  }, "id" | "email" | "profissionalId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    papel?: SortOrder
    ativo?: SortOrder
    profissionalId?: SortOrderInput | SortOrder
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
    nome?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    senha?: StringWithAggregatesFilter<"User"> | string
    papel?: EnumPapelWithAggregatesFilter<"User"> | $Enums.Papel
    ativo?: BoolWithAggregatesFilter<"User"> | boolean
    profissionalId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ConvenioWhereInput = {
    AND?: ConvenioWhereInput | ConvenioWhereInput[]
    OR?: ConvenioWhereInput[]
    NOT?: ConvenioWhereInput | ConvenioWhereInput[]
    id?: StringFilter<"Convenio"> | string
    nome?: StringFilter<"Convenio"> | string
    descricao?: StringNullableFilter<"Convenio"> | string | null
    ativo?: BoolFilter<"Convenio"> | boolean
    createdAt?: DateTimeFilter<"Convenio"> | Date | string
    updatedAt?: DateTimeFilter<"Convenio"> | Date | string
    pacientes?: PacienteListRelationFilter
  }

  export type ConvenioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pacientes?: PacienteOrderByRelationAggregateInput
  }

  export type ConvenioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConvenioWhereInput | ConvenioWhereInput[]
    OR?: ConvenioWhereInput[]
    NOT?: ConvenioWhereInput | ConvenioWhereInput[]
    nome?: StringFilter<"Convenio"> | string
    descricao?: StringNullableFilter<"Convenio"> | string | null
    ativo?: BoolFilter<"Convenio"> | boolean
    createdAt?: DateTimeFilter<"Convenio"> | Date | string
    updatedAt?: DateTimeFilter<"Convenio"> | Date | string
    pacientes?: PacienteListRelationFilter
  }, "id">

  export type ConvenioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConvenioCountOrderByAggregateInput
    _max?: ConvenioMaxOrderByAggregateInput
    _min?: ConvenioMinOrderByAggregateInput
  }

  export type ConvenioScalarWhereWithAggregatesInput = {
    AND?: ConvenioScalarWhereWithAggregatesInput | ConvenioScalarWhereWithAggregatesInput[]
    OR?: ConvenioScalarWhereWithAggregatesInput[]
    NOT?: ConvenioScalarWhereWithAggregatesInput | ConvenioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Convenio"> | string
    nome?: StringWithAggregatesFilter<"Convenio"> | string
    descricao?: StringNullableWithAggregatesFilter<"Convenio"> | string | null
    ativo?: BoolWithAggregatesFilter<"Convenio"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Convenio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Convenio"> | Date | string
  }

  export type PacienteWhereInput = {
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    id?: StringFilter<"Paciente"> | string
    nome?: StringFilter<"Paciente"> | string
    dataNasc?: DateTimeNullableFilter<"Paciente"> | Date | string | null
    cpf?: StringNullableFilter<"Paciente"> | string | null
    telefone?: StringFilter<"Paciente"> | string
    telefone2?: StringNullableFilter<"Paciente"> | string | null
    email?: StringNullableFilter<"Paciente"> | string | null
    cep?: StringNullableFilter<"Paciente"> | string | null
    logradouro?: StringNullableFilter<"Paciente"> | string | null
    numero?: StringNullableFilter<"Paciente"> | string | null
    complemento?: StringNullableFilter<"Paciente"> | string | null
    bairro?: StringNullableFilter<"Paciente"> | string | null
    cidade?: StringNullableFilter<"Paciente"> | string | null
    estado?: StringNullableFilter<"Paciente"> | string | null
    diagnostico?: StringNullableFilter<"Paciente"> | string | null
    observacoes?: StringNullableFilter<"Paciente"> | string | null
    perfil?: StringNullableFilter<"Paciente"> | string | null
    nomeResponsavel?: StringNullableFilter<"Paciente"> | string | null
    telefoneResponsavel?: StringNullableFilter<"Paciente"> | string | null
    relacaoResponsavel?: StringNullableFilter<"Paciente"> | string | null
    convenioId?: StringNullableFilter<"Paciente"> | string | null
    ativo?: BoolFilter<"Paciente"> | boolean
    createdAt?: DateTimeFilter<"Paciente"> | Date | string
    updatedAt?: DateTimeFilter<"Paciente"> | Date | string
    convenio?: XOR<ConvenioNullableScalarRelationFilter, ConvenioWhereInput> | null
    especialidades?: PacienteEspecialidadeListRelationFilter
    agendamentos?: AgendamentoPacienteListRelationFilter
  }

  export type PacienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    dataNasc?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    telefone?: SortOrder
    telefone2?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    logradouro?: SortOrderInput | SortOrder
    numero?: SortOrderInput | SortOrder
    complemento?: SortOrderInput | SortOrder
    bairro?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    diagnostico?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    perfil?: SortOrderInput | SortOrder
    nomeResponsavel?: SortOrderInput | SortOrder
    telefoneResponsavel?: SortOrderInput | SortOrder
    relacaoResponsavel?: SortOrderInput | SortOrder
    convenioId?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    convenio?: ConvenioOrderByWithRelationInput
    especialidades?: PacienteEspecialidadeOrderByRelationAggregateInput
    agendamentos?: AgendamentoPacienteOrderByRelationAggregateInput
  }

  export type PacienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cpf?: string
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    nome?: StringFilter<"Paciente"> | string
    dataNasc?: DateTimeNullableFilter<"Paciente"> | Date | string | null
    telefone?: StringFilter<"Paciente"> | string
    telefone2?: StringNullableFilter<"Paciente"> | string | null
    email?: StringNullableFilter<"Paciente"> | string | null
    cep?: StringNullableFilter<"Paciente"> | string | null
    logradouro?: StringNullableFilter<"Paciente"> | string | null
    numero?: StringNullableFilter<"Paciente"> | string | null
    complemento?: StringNullableFilter<"Paciente"> | string | null
    bairro?: StringNullableFilter<"Paciente"> | string | null
    cidade?: StringNullableFilter<"Paciente"> | string | null
    estado?: StringNullableFilter<"Paciente"> | string | null
    diagnostico?: StringNullableFilter<"Paciente"> | string | null
    observacoes?: StringNullableFilter<"Paciente"> | string | null
    perfil?: StringNullableFilter<"Paciente"> | string | null
    nomeResponsavel?: StringNullableFilter<"Paciente"> | string | null
    telefoneResponsavel?: StringNullableFilter<"Paciente"> | string | null
    relacaoResponsavel?: StringNullableFilter<"Paciente"> | string | null
    convenioId?: StringNullableFilter<"Paciente"> | string | null
    ativo?: BoolFilter<"Paciente"> | boolean
    createdAt?: DateTimeFilter<"Paciente"> | Date | string
    updatedAt?: DateTimeFilter<"Paciente"> | Date | string
    convenio?: XOR<ConvenioNullableScalarRelationFilter, ConvenioWhereInput> | null
    especialidades?: PacienteEspecialidadeListRelationFilter
    agendamentos?: AgendamentoPacienteListRelationFilter
  }, "id" | "cpf">

  export type PacienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    dataNasc?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    telefone?: SortOrder
    telefone2?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    logradouro?: SortOrderInput | SortOrder
    numero?: SortOrderInput | SortOrder
    complemento?: SortOrderInput | SortOrder
    bairro?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    diagnostico?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    perfil?: SortOrderInput | SortOrder
    nomeResponsavel?: SortOrderInput | SortOrder
    telefoneResponsavel?: SortOrderInput | SortOrder
    relacaoResponsavel?: SortOrderInput | SortOrder
    convenioId?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PacienteCountOrderByAggregateInput
    _max?: PacienteMaxOrderByAggregateInput
    _min?: PacienteMinOrderByAggregateInput
  }

  export type PacienteScalarWhereWithAggregatesInput = {
    AND?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    OR?: PacienteScalarWhereWithAggregatesInput[]
    NOT?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Paciente"> | string
    nome?: StringWithAggregatesFilter<"Paciente"> | string
    dataNasc?: DateTimeNullableWithAggregatesFilter<"Paciente"> | Date | string | null
    cpf?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    telefone?: StringWithAggregatesFilter<"Paciente"> | string
    telefone2?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    email?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    cep?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    logradouro?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    numero?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    complemento?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    bairro?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    cidade?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    estado?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    diagnostico?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    observacoes?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    perfil?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    nomeResponsavel?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    telefoneResponsavel?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    relacaoResponsavel?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    convenioId?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    ativo?: BoolWithAggregatesFilter<"Paciente"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
  }

  export type EspecialidadeWhereInput = {
    AND?: EspecialidadeWhereInput | EspecialidadeWhereInput[]
    OR?: EspecialidadeWhereInput[]
    NOT?: EspecialidadeWhereInput | EspecialidadeWhereInput[]
    id?: StringFilter<"Especialidade"> | string
    nome?: StringFilter<"Especialidade"> | string
    tipo?: EnumTipoEspecialidadeFilter<"Especialidade"> | $Enums.TipoEspecialidade
    descricao?: StringNullableFilter<"Especialidade"> | string | null
    cor?: StringNullableFilter<"Especialidade"> | string | null
    ativo?: BoolFilter<"Especialidade"> | boolean
    createdAt?: DateTimeFilter<"Especialidade"> | Date | string
    updatedAt?: DateTimeFilter<"Especialidade"> | Date | string
    profissionais?: ProfissionalListRelationFilter
    agendamentos?: AgendamentoListRelationFilter
    pacientes?: PacienteEspecialidadeListRelationFilter
  }

  export type EspecialidadeOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    cor?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profissionais?: ProfissionalOrderByRelationAggregateInput
    agendamentos?: AgendamentoOrderByRelationAggregateInput
    pacientes?: PacienteEspecialidadeOrderByRelationAggregateInput
  }

  export type EspecialidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EspecialidadeWhereInput | EspecialidadeWhereInput[]
    OR?: EspecialidadeWhereInput[]
    NOT?: EspecialidadeWhereInput | EspecialidadeWhereInput[]
    nome?: StringFilter<"Especialidade"> | string
    tipo?: EnumTipoEspecialidadeFilter<"Especialidade"> | $Enums.TipoEspecialidade
    descricao?: StringNullableFilter<"Especialidade"> | string | null
    cor?: StringNullableFilter<"Especialidade"> | string | null
    ativo?: BoolFilter<"Especialidade"> | boolean
    createdAt?: DateTimeFilter<"Especialidade"> | Date | string
    updatedAt?: DateTimeFilter<"Especialidade"> | Date | string
    profissionais?: ProfissionalListRelationFilter
    agendamentos?: AgendamentoListRelationFilter
    pacientes?: PacienteEspecialidadeListRelationFilter
  }, "id">

  export type EspecialidadeOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    cor?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EspecialidadeCountOrderByAggregateInput
    _max?: EspecialidadeMaxOrderByAggregateInput
    _min?: EspecialidadeMinOrderByAggregateInput
  }

  export type EspecialidadeScalarWhereWithAggregatesInput = {
    AND?: EspecialidadeScalarWhereWithAggregatesInput | EspecialidadeScalarWhereWithAggregatesInput[]
    OR?: EspecialidadeScalarWhereWithAggregatesInput[]
    NOT?: EspecialidadeScalarWhereWithAggregatesInput | EspecialidadeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Especialidade"> | string
    nome?: StringWithAggregatesFilter<"Especialidade"> | string
    tipo?: EnumTipoEspecialidadeWithAggregatesFilter<"Especialidade"> | $Enums.TipoEspecialidade
    descricao?: StringNullableWithAggregatesFilter<"Especialidade"> | string | null
    cor?: StringNullableWithAggregatesFilter<"Especialidade"> | string | null
    ativo?: BoolWithAggregatesFilter<"Especialidade"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Especialidade"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Especialidade"> | Date | string
  }

  export type PacienteEspecialidadeWhereInput = {
    AND?: PacienteEspecialidadeWhereInput | PacienteEspecialidadeWhereInput[]
    OR?: PacienteEspecialidadeWhereInput[]
    NOT?: PacienteEspecialidadeWhereInput | PacienteEspecialidadeWhereInput[]
    pacienteId?: StringFilter<"PacienteEspecialidade"> | string
    especialidadeId?: StringFilter<"PacienteEspecialidade"> | string
    createdAt?: DateTimeFilter<"PacienteEspecialidade"> | Date | string
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    especialidade?: XOR<EspecialidadeScalarRelationFilter, EspecialidadeWhereInput>
  }

  export type PacienteEspecialidadeOrderByWithRelationInput = {
    pacienteId?: SortOrder
    especialidadeId?: SortOrder
    createdAt?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
    especialidade?: EspecialidadeOrderByWithRelationInput
  }

  export type PacienteEspecialidadeWhereUniqueInput = Prisma.AtLeast<{
    pacienteId_especialidadeId?: PacienteEspecialidadePacienteIdEspecialidadeIdCompoundUniqueInput
    AND?: PacienteEspecialidadeWhereInput | PacienteEspecialidadeWhereInput[]
    OR?: PacienteEspecialidadeWhereInput[]
    NOT?: PacienteEspecialidadeWhereInput | PacienteEspecialidadeWhereInput[]
    pacienteId?: StringFilter<"PacienteEspecialidade"> | string
    especialidadeId?: StringFilter<"PacienteEspecialidade"> | string
    createdAt?: DateTimeFilter<"PacienteEspecialidade"> | Date | string
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    especialidade?: XOR<EspecialidadeScalarRelationFilter, EspecialidadeWhereInput>
  }, "pacienteId_especialidadeId">

  export type PacienteEspecialidadeOrderByWithAggregationInput = {
    pacienteId?: SortOrder
    especialidadeId?: SortOrder
    createdAt?: SortOrder
    _count?: PacienteEspecialidadeCountOrderByAggregateInput
    _max?: PacienteEspecialidadeMaxOrderByAggregateInput
    _min?: PacienteEspecialidadeMinOrderByAggregateInput
  }

  export type PacienteEspecialidadeScalarWhereWithAggregatesInput = {
    AND?: PacienteEspecialidadeScalarWhereWithAggregatesInput | PacienteEspecialidadeScalarWhereWithAggregatesInput[]
    OR?: PacienteEspecialidadeScalarWhereWithAggregatesInput[]
    NOT?: PacienteEspecialidadeScalarWhereWithAggregatesInput | PacienteEspecialidadeScalarWhereWithAggregatesInput[]
    pacienteId?: StringWithAggregatesFilter<"PacienteEspecialidade"> | string
    especialidadeId?: StringWithAggregatesFilter<"PacienteEspecialidade"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PacienteEspecialidade"> | Date | string
  }

  export type ProfissionalWhereInput = {
    AND?: ProfissionalWhereInput | ProfissionalWhereInput[]
    OR?: ProfissionalWhereInput[]
    NOT?: ProfissionalWhereInput | ProfissionalWhereInput[]
    id?: StringFilter<"Profissional"> | string
    nome?: StringFilter<"Profissional"> | string
    registro?: StringNullableFilter<"Profissional"> | string | null
    especialidadeId?: StringFilter<"Profissional"> | string
    telefone?: StringNullableFilter<"Profissional"> | string | null
    email?: StringNullableFilter<"Profissional"> | string | null
    ativo?: BoolFilter<"Profissional"> | boolean
    createdAt?: DateTimeFilter<"Profissional"> | Date | string
    updatedAt?: DateTimeFilter<"Profissional"> | Date | string
    especialidade?: XOR<EspecialidadeScalarRelationFilter, EspecialidadeWhereInput>
    horarios?: HorarioAtendimentoListRelationFilter
    agendamentos?: AgendamentoListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ProfissionalOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    registro?: SortOrderInput | SortOrder
    especialidadeId?: SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    especialidade?: EspecialidadeOrderByWithRelationInput
    horarios?: HorarioAtendimentoOrderByRelationAggregateInput
    agendamentos?: AgendamentoOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type ProfissionalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfissionalWhereInput | ProfissionalWhereInput[]
    OR?: ProfissionalWhereInput[]
    NOT?: ProfissionalWhereInput | ProfissionalWhereInput[]
    nome?: StringFilter<"Profissional"> | string
    registro?: StringNullableFilter<"Profissional"> | string | null
    especialidadeId?: StringFilter<"Profissional"> | string
    telefone?: StringNullableFilter<"Profissional"> | string | null
    email?: StringNullableFilter<"Profissional"> | string | null
    ativo?: BoolFilter<"Profissional"> | boolean
    createdAt?: DateTimeFilter<"Profissional"> | Date | string
    updatedAt?: DateTimeFilter<"Profissional"> | Date | string
    especialidade?: XOR<EspecialidadeScalarRelationFilter, EspecialidadeWhereInput>
    horarios?: HorarioAtendimentoListRelationFilter
    agendamentos?: AgendamentoListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ProfissionalOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    registro?: SortOrderInput | SortOrder
    especialidadeId?: SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfissionalCountOrderByAggregateInput
    _max?: ProfissionalMaxOrderByAggregateInput
    _min?: ProfissionalMinOrderByAggregateInput
  }

  export type ProfissionalScalarWhereWithAggregatesInput = {
    AND?: ProfissionalScalarWhereWithAggregatesInput | ProfissionalScalarWhereWithAggregatesInput[]
    OR?: ProfissionalScalarWhereWithAggregatesInput[]
    NOT?: ProfissionalScalarWhereWithAggregatesInput | ProfissionalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profissional"> | string
    nome?: StringWithAggregatesFilter<"Profissional"> | string
    registro?: StringNullableWithAggregatesFilter<"Profissional"> | string | null
    especialidadeId?: StringWithAggregatesFilter<"Profissional"> | string
    telefone?: StringNullableWithAggregatesFilter<"Profissional"> | string | null
    email?: StringNullableWithAggregatesFilter<"Profissional"> | string | null
    ativo?: BoolWithAggregatesFilter<"Profissional"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Profissional"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profissional"> | Date | string
  }

  export type HorarioAtendimentoWhereInput = {
    AND?: HorarioAtendimentoWhereInput | HorarioAtendimentoWhereInput[]
    OR?: HorarioAtendimentoWhereInput[]
    NOT?: HorarioAtendimentoWhereInput | HorarioAtendimentoWhereInput[]
    id?: StringFilter<"HorarioAtendimento"> | string
    profissionalId?: StringFilter<"HorarioAtendimento"> | string
    diaSemana?: EnumDiaSemanaFilter<"HorarioAtendimento"> | $Enums.DiaSemana
    horaInicio?: StringFilter<"HorarioAtendimento"> | string
    duracaoSessao?: IntFilter<"HorarioAtendimento"> | number
    intervaloSessoes?: IntFilter<"HorarioAtendimento"> | number
    ativo?: BoolFilter<"HorarioAtendimento"> | boolean
    createdAt?: DateTimeFilter<"HorarioAtendimento"> | Date | string
    updatedAt?: DateTimeFilter<"HorarioAtendimento"> | Date | string
    profissional?: XOR<ProfissionalScalarRelationFilter, ProfissionalWhereInput>
  }

  export type HorarioAtendimentoOrderByWithRelationInput = {
    id?: SortOrder
    profissionalId?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    duracaoSessao?: SortOrder
    intervaloSessoes?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profissional?: ProfissionalOrderByWithRelationInput
  }

  export type HorarioAtendimentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HorarioAtendimentoWhereInput | HorarioAtendimentoWhereInput[]
    OR?: HorarioAtendimentoWhereInput[]
    NOT?: HorarioAtendimentoWhereInput | HorarioAtendimentoWhereInput[]
    profissionalId?: StringFilter<"HorarioAtendimento"> | string
    diaSemana?: EnumDiaSemanaFilter<"HorarioAtendimento"> | $Enums.DiaSemana
    horaInicio?: StringFilter<"HorarioAtendimento"> | string
    duracaoSessao?: IntFilter<"HorarioAtendimento"> | number
    intervaloSessoes?: IntFilter<"HorarioAtendimento"> | number
    ativo?: BoolFilter<"HorarioAtendimento"> | boolean
    createdAt?: DateTimeFilter<"HorarioAtendimento"> | Date | string
    updatedAt?: DateTimeFilter<"HorarioAtendimento"> | Date | string
    profissional?: XOR<ProfissionalScalarRelationFilter, ProfissionalWhereInput>
  }, "id">

  export type HorarioAtendimentoOrderByWithAggregationInput = {
    id?: SortOrder
    profissionalId?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    duracaoSessao?: SortOrder
    intervaloSessoes?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HorarioAtendimentoCountOrderByAggregateInput
    _avg?: HorarioAtendimentoAvgOrderByAggregateInput
    _max?: HorarioAtendimentoMaxOrderByAggregateInput
    _min?: HorarioAtendimentoMinOrderByAggregateInput
    _sum?: HorarioAtendimentoSumOrderByAggregateInput
  }

  export type HorarioAtendimentoScalarWhereWithAggregatesInput = {
    AND?: HorarioAtendimentoScalarWhereWithAggregatesInput | HorarioAtendimentoScalarWhereWithAggregatesInput[]
    OR?: HorarioAtendimentoScalarWhereWithAggregatesInput[]
    NOT?: HorarioAtendimentoScalarWhereWithAggregatesInput | HorarioAtendimentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HorarioAtendimento"> | string
    profissionalId?: StringWithAggregatesFilter<"HorarioAtendimento"> | string
    diaSemana?: EnumDiaSemanaWithAggregatesFilter<"HorarioAtendimento"> | $Enums.DiaSemana
    horaInicio?: StringWithAggregatesFilter<"HorarioAtendimento"> | string
    duracaoSessao?: IntWithAggregatesFilter<"HorarioAtendimento"> | number
    intervaloSessoes?: IntWithAggregatesFilter<"HorarioAtendimento"> | number
    ativo?: BoolWithAggregatesFilter<"HorarioAtendimento"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"HorarioAtendimento"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HorarioAtendimento"> | Date | string
  }

  export type AgendamentoWhereInput = {
    AND?: AgendamentoWhereInput | AgendamentoWhereInput[]
    OR?: AgendamentoWhereInput[]
    NOT?: AgendamentoWhereInput | AgendamentoWhereInput[]
    id?: StringFilter<"Agendamento"> | string
    tipo?: EnumTipoAgendamentoFilter<"Agendamento"> | $Enums.TipoAgendamento
    profissionalId?: StringFilter<"Agendamento"> | string
    especialidadeId?: StringFilter<"Agendamento"> | string
    dataHoraInicio?: DateTimeFilter<"Agendamento"> | Date | string
    dataHoraFim?: DateTimeFilter<"Agendamento"> | Date | string
    numeroSessoes?: IntFilter<"Agendamento"> | number
    status?: EnumStatusAgendamentoFilter<"Agendamento"> | $Enums.StatusAgendamento
    observacoes?: StringNullableFilter<"Agendamento"> | string | null
    origem?: EnumOrigemAgendamentoFilter<"Agendamento"> | $Enums.OrigemAgendamento
    recorrenciaId?: StringNullableFilter<"Agendamento"> | string | null
    createdAt?: DateTimeFilter<"Agendamento"> | Date | string
    updatedAt?: DateTimeFilter<"Agendamento"> | Date | string
    profissional?: XOR<ProfissionalScalarRelationFilter, ProfissionalWhereInput>
    especialidade?: XOR<EspecialidadeScalarRelationFilter, EspecialidadeWhereInput>
    pacientes?: AgendamentoPacienteListRelationFilter
  }

  export type AgendamentoOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    profissionalId?: SortOrder
    especialidadeId?: SortOrder
    dataHoraInicio?: SortOrder
    dataHoraFim?: SortOrder
    numeroSessoes?: SortOrder
    status?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    origem?: SortOrder
    recorrenciaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profissional?: ProfissionalOrderByWithRelationInput
    especialidade?: EspecialidadeOrderByWithRelationInput
    pacientes?: AgendamentoPacienteOrderByRelationAggregateInput
  }

  export type AgendamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AgendamentoWhereInput | AgendamentoWhereInput[]
    OR?: AgendamentoWhereInput[]
    NOT?: AgendamentoWhereInput | AgendamentoWhereInput[]
    tipo?: EnumTipoAgendamentoFilter<"Agendamento"> | $Enums.TipoAgendamento
    profissionalId?: StringFilter<"Agendamento"> | string
    especialidadeId?: StringFilter<"Agendamento"> | string
    dataHoraInicio?: DateTimeFilter<"Agendamento"> | Date | string
    dataHoraFim?: DateTimeFilter<"Agendamento"> | Date | string
    numeroSessoes?: IntFilter<"Agendamento"> | number
    status?: EnumStatusAgendamentoFilter<"Agendamento"> | $Enums.StatusAgendamento
    observacoes?: StringNullableFilter<"Agendamento"> | string | null
    origem?: EnumOrigemAgendamentoFilter<"Agendamento"> | $Enums.OrigemAgendamento
    recorrenciaId?: StringNullableFilter<"Agendamento"> | string | null
    createdAt?: DateTimeFilter<"Agendamento"> | Date | string
    updatedAt?: DateTimeFilter<"Agendamento"> | Date | string
    profissional?: XOR<ProfissionalScalarRelationFilter, ProfissionalWhereInput>
    especialidade?: XOR<EspecialidadeScalarRelationFilter, EspecialidadeWhereInput>
    pacientes?: AgendamentoPacienteListRelationFilter
  }, "id">

  export type AgendamentoOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    profissionalId?: SortOrder
    especialidadeId?: SortOrder
    dataHoraInicio?: SortOrder
    dataHoraFim?: SortOrder
    numeroSessoes?: SortOrder
    status?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    origem?: SortOrder
    recorrenciaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AgendamentoCountOrderByAggregateInput
    _avg?: AgendamentoAvgOrderByAggregateInput
    _max?: AgendamentoMaxOrderByAggregateInput
    _min?: AgendamentoMinOrderByAggregateInput
    _sum?: AgendamentoSumOrderByAggregateInput
  }

  export type AgendamentoScalarWhereWithAggregatesInput = {
    AND?: AgendamentoScalarWhereWithAggregatesInput | AgendamentoScalarWhereWithAggregatesInput[]
    OR?: AgendamentoScalarWhereWithAggregatesInput[]
    NOT?: AgendamentoScalarWhereWithAggregatesInput | AgendamentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agendamento"> | string
    tipo?: EnumTipoAgendamentoWithAggregatesFilter<"Agendamento"> | $Enums.TipoAgendamento
    profissionalId?: StringWithAggregatesFilter<"Agendamento"> | string
    especialidadeId?: StringWithAggregatesFilter<"Agendamento"> | string
    dataHoraInicio?: DateTimeWithAggregatesFilter<"Agendamento"> | Date | string
    dataHoraFim?: DateTimeWithAggregatesFilter<"Agendamento"> | Date | string
    numeroSessoes?: IntWithAggregatesFilter<"Agendamento"> | number
    status?: EnumStatusAgendamentoWithAggregatesFilter<"Agendamento"> | $Enums.StatusAgendamento
    observacoes?: StringNullableWithAggregatesFilter<"Agendamento"> | string | null
    origem?: EnumOrigemAgendamentoWithAggregatesFilter<"Agendamento"> | $Enums.OrigemAgendamento
    recorrenciaId?: StringNullableWithAggregatesFilter<"Agendamento"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Agendamento"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Agendamento"> | Date | string
  }

  export type AgendamentoPacienteWhereInput = {
    AND?: AgendamentoPacienteWhereInput | AgendamentoPacienteWhereInput[]
    OR?: AgendamentoPacienteWhereInput[]
    NOT?: AgendamentoPacienteWhereInput | AgendamentoPacienteWhereInput[]
    agendamentoId?: StringFilter<"AgendamentoPaciente"> | string
    pacienteId?: StringFilter<"AgendamentoPaciente"> | string
    agendamento?: XOR<AgendamentoScalarRelationFilter, AgendamentoWhereInput>
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
  }

  export type AgendamentoPacienteOrderByWithRelationInput = {
    agendamentoId?: SortOrder
    pacienteId?: SortOrder
    agendamento?: AgendamentoOrderByWithRelationInput
    paciente?: PacienteOrderByWithRelationInput
  }

  export type AgendamentoPacienteWhereUniqueInput = Prisma.AtLeast<{
    agendamentoId_pacienteId?: AgendamentoPacienteAgendamentoIdPacienteIdCompoundUniqueInput
    AND?: AgendamentoPacienteWhereInput | AgendamentoPacienteWhereInput[]
    OR?: AgendamentoPacienteWhereInput[]
    NOT?: AgendamentoPacienteWhereInput | AgendamentoPacienteWhereInput[]
    agendamentoId?: StringFilter<"AgendamentoPaciente"> | string
    pacienteId?: StringFilter<"AgendamentoPaciente"> | string
    agendamento?: XOR<AgendamentoScalarRelationFilter, AgendamentoWhereInput>
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
  }, "agendamentoId_pacienteId">

  export type AgendamentoPacienteOrderByWithAggregationInput = {
    agendamentoId?: SortOrder
    pacienteId?: SortOrder
    _count?: AgendamentoPacienteCountOrderByAggregateInput
    _max?: AgendamentoPacienteMaxOrderByAggregateInput
    _min?: AgendamentoPacienteMinOrderByAggregateInput
  }

  export type AgendamentoPacienteScalarWhereWithAggregatesInput = {
    AND?: AgendamentoPacienteScalarWhereWithAggregatesInput | AgendamentoPacienteScalarWhereWithAggregatesInput[]
    OR?: AgendamentoPacienteScalarWhereWithAggregatesInput[]
    NOT?: AgendamentoPacienteScalarWhereWithAggregatesInput | AgendamentoPacienteScalarWhereWithAggregatesInput[]
    agendamentoId?: StringWithAggregatesFilter<"AgendamentoPaciente"> | string
    pacienteId?: StringWithAggregatesFilter<"AgendamentoPaciente"> | string
  }

  export type UserCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    papel: $Enums.Papel
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profissional?: ProfissionalCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    papel: $Enums.Papel
    ativo?: boolean
    profissionalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    papel?: EnumPapelFieldUpdateOperationsInput | $Enums.Papel
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profissional?: ProfissionalUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    papel?: EnumPapelFieldUpdateOperationsInput | $Enums.Papel
    ativo?: BoolFieldUpdateOperationsInput | boolean
    profissionalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    nome: string
    email: string
    senha: string
    papel: $Enums.Papel
    ativo?: boolean
    profissionalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    papel?: EnumPapelFieldUpdateOperationsInput | $Enums.Papel
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    papel?: EnumPapelFieldUpdateOperationsInput | $Enums.Papel
    ativo?: BoolFieldUpdateOperationsInput | boolean
    profissionalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConvenioCreateInput = {
    id?: string
    nome: string
    descricao?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pacientes?: PacienteCreateNestedManyWithoutConvenioInput
  }

  export type ConvenioUncheckedCreateInput = {
    id?: string
    nome: string
    descricao?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pacientes?: PacienteUncheckedCreateNestedManyWithoutConvenioInput
  }

  export type ConvenioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pacientes?: PacienteUpdateManyWithoutConvenioNestedInput
  }

  export type ConvenioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pacientes?: PacienteUncheckedUpdateManyWithoutConvenioNestedInput
  }

  export type ConvenioCreateManyInput = {
    id?: string
    nome: string
    descricao?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConvenioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConvenioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteCreateInput = {
    id?: string
    nome: string
    dataNasc?: Date | string | null
    cpf?: string | null
    telefone: string
    telefone2?: string | null
    email?: string | null
    cep?: string | null
    logradouro?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
    diagnostico?: string | null
    observacoes?: string | null
    perfil?: string | null
    nomeResponsavel?: string | null
    telefoneResponsavel?: string | null
    relacaoResponsavel?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    convenio?: ConvenioCreateNestedOneWithoutPacientesInput
    especialidades?: PacienteEspecialidadeCreateNestedManyWithoutPacienteInput
    agendamentos?: AgendamentoPacienteCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateInput = {
    id?: string
    nome: string
    dataNasc?: Date | string | null
    cpf?: string | null
    telefone: string
    telefone2?: string | null
    email?: string | null
    cep?: string | null
    logradouro?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
    diagnostico?: string | null
    observacoes?: string | null
    perfil?: string | null
    nomeResponsavel?: string | null
    telefoneResponsavel?: string | null
    relacaoResponsavel?: string | null
    convenioId?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    especialidades?: PacienteEspecialidadeUncheckedCreateNestedManyWithoutPacienteInput
    agendamentos?: AgendamentoPacienteUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataNasc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    telefone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    perfil?: NullableStringFieldUpdateOperationsInput | string | null
    nomeResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    relacaoResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    convenio?: ConvenioUpdateOneWithoutPacientesNestedInput
    especialidades?: PacienteEspecialidadeUpdateManyWithoutPacienteNestedInput
    agendamentos?: AgendamentoPacienteUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataNasc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    telefone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    perfil?: NullableStringFieldUpdateOperationsInput | string | null
    nomeResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    relacaoResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    convenioId?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    especialidades?: PacienteEspecialidadeUncheckedUpdateManyWithoutPacienteNestedInput
    agendamentos?: AgendamentoPacienteUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteCreateManyInput = {
    id?: string
    nome: string
    dataNasc?: Date | string | null
    cpf?: string | null
    telefone: string
    telefone2?: string | null
    email?: string | null
    cep?: string | null
    logradouro?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
    diagnostico?: string | null
    observacoes?: string | null
    perfil?: string | null
    nomeResponsavel?: string | null
    telefoneResponsavel?: string | null
    relacaoResponsavel?: string | null
    convenioId?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PacienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataNasc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    telefone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    perfil?: NullableStringFieldUpdateOperationsInput | string | null
    nomeResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    relacaoResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataNasc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    telefone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    perfil?: NullableStringFieldUpdateOperationsInput | string | null
    nomeResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    relacaoResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    convenioId?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EspecialidadeCreateInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoEspecialidade
    descricao?: string | null
    cor?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profissionais?: ProfissionalCreateNestedManyWithoutEspecialidadeInput
    agendamentos?: AgendamentoCreateNestedManyWithoutEspecialidadeInput
    pacientes?: PacienteEspecialidadeCreateNestedManyWithoutEspecialidadeInput
  }

  export type EspecialidadeUncheckedCreateInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoEspecialidade
    descricao?: string | null
    cor?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profissionais?: ProfissionalUncheckedCreateNestedManyWithoutEspecialidadeInput
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutEspecialidadeInput
    pacientes?: PacienteEspecialidadeUncheckedCreateNestedManyWithoutEspecialidadeInput
  }

  export type EspecialidadeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEspecialidadeFieldUpdateOperationsInput | $Enums.TipoEspecialidade
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profissionais?: ProfissionalUpdateManyWithoutEspecialidadeNestedInput
    agendamentos?: AgendamentoUpdateManyWithoutEspecialidadeNestedInput
    pacientes?: PacienteEspecialidadeUpdateManyWithoutEspecialidadeNestedInput
  }

  export type EspecialidadeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEspecialidadeFieldUpdateOperationsInput | $Enums.TipoEspecialidade
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profissionais?: ProfissionalUncheckedUpdateManyWithoutEspecialidadeNestedInput
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutEspecialidadeNestedInput
    pacientes?: PacienteEspecialidadeUncheckedUpdateManyWithoutEspecialidadeNestedInput
  }

  export type EspecialidadeCreateManyInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoEspecialidade
    descricao?: string | null
    cor?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EspecialidadeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEspecialidadeFieldUpdateOperationsInput | $Enums.TipoEspecialidade
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EspecialidadeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEspecialidadeFieldUpdateOperationsInput | $Enums.TipoEspecialidade
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteEspecialidadeCreateInput = {
    createdAt?: Date | string
    paciente: PacienteCreateNestedOneWithoutEspecialidadesInput
    especialidade: EspecialidadeCreateNestedOneWithoutPacientesInput
  }

  export type PacienteEspecialidadeUncheckedCreateInput = {
    pacienteId: string
    especialidadeId: string
    createdAt?: Date | string
  }

  export type PacienteEspecialidadeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteUpdateOneRequiredWithoutEspecialidadesNestedInput
    especialidade?: EspecialidadeUpdateOneRequiredWithoutPacientesNestedInput
  }

  export type PacienteEspecialidadeUncheckedUpdateInput = {
    pacienteId?: StringFieldUpdateOperationsInput | string
    especialidadeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteEspecialidadeCreateManyInput = {
    pacienteId: string
    especialidadeId: string
    createdAt?: Date | string
  }

  export type PacienteEspecialidadeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteEspecialidadeUncheckedUpdateManyInput = {
    pacienteId?: StringFieldUpdateOperationsInput | string
    especialidadeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfissionalCreateInput = {
    id?: string
    nome: string
    registro?: string | null
    telefone?: string | null
    email?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    especialidade: EspecialidadeCreateNestedOneWithoutProfissionaisInput
    horarios?: HorarioAtendimentoCreateNestedManyWithoutProfissionalInput
    agendamentos?: AgendamentoCreateNestedManyWithoutProfissionalInput
    user?: UserCreateNestedOneWithoutProfissionalInput
  }

  export type ProfissionalUncheckedCreateInput = {
    id?: string
    nome: string
    registro?: string | null
    especialidadeId: string
    telefone?: string | null
    email?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    horarios?: HorarioAtendimentoUncheckedCreateNestedManyWithoutProfissionalInput
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutProfissionalInput
    user?: UserUncheckedCreateNestedOneWithoutProfissionalInput
  }

  export type ProfissionalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    registro?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    especialidade?: EspecialidadeUpdateOneRequiredWithoutProfissionaisNestedInput
    horarios?: HorarioAtendimentoUpdateManyWithoutProfissionalNestedInput
    agendamentos?: AgendamentoUpdateManyWithoutProfissionalNestedInput
    user?: UserUpdateOneWithoutProfissionalNestedInput
  }

  export type ProfissionalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    registro?: NullableStringFieldUpdateOperationsInput | string | null
    especialidadeId?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    horarios?: HorarioAtendimentoUncheckedUpdateManyWithoutProfissionalNestedInput
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutProfissionalNestedInput
    user?: UserUncheckedUpdateOneWithoutProfissionalNestedInput
  }

  export type ProfissionalCreateManyInput = {
    id?: string
    nome: string
    registro?: string | null
    especialidadeId: string
    telefone?: string | null
    email?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfissionalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    registro?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfissionalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    registro?: NullableStringFieldUpdateOperationsInput | string | null
    especialidadeId?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioAtendimentoCreateInput = {
    id?: string
    diaSemana: $Enums.DiaSemana
    horaInicio: string
    duracaoSessao: number
    intervaloSessoes?: number
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profissional: ProfissionalCreateNestedOneWithoutHorariosInput
  }

  export type HorarioAtendimentoUncheckedCreateInput = {
    id?: string
    profissionalId: string
    diaSemana: $Enums.DiaSemana
    horaInicio: string
    duracaoSessao: number
    intervaloSessoes?: number
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorarioAtendimentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaInicio?: StringFieldUpdateOperationsInput | string
    duracaoSessao?: IntFieldUpdateOperationsInput | number
    intervaloSessoes?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profissional?: ProfissionalUpdateOneRequiredWithoutHorariosNestedInput
  }

  export type HorarioAtendimentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaInicio?: StringFieldUpdateOperationsInput | string
    duracaoSessao?: IntFieldUpdateOperationsInput | number
    intervaloSessoes?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioAtendimentoCreateManyInput = {
    id?: string
    profissionalId: string
    diaSemana: $Enums.DiaSemana
    horaInicio: string
    duracaoSessao: number
    intervaloSessoes?: number
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorarioAtendimentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaInicio?: StringFieldUpdateOperationsInput | string
    duracaoSessao?: IntFieldUpdateOperationsInput | number
    intervaloSessoes?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioAtendimentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profissionalId?: StringFieldUpdateOperationsInput | string
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaInicio?: StringFieldUpdateOperationsInput | string
    duracaoSessao?: IntFieldUpdateOperationsInput | number
    intervaloSessoes?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoCreateInput = {
    id?: string
    tipo: $Enums.TipoAgendamento
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    numeroSessoes?: number
    status?: $Enums.StatusAgendamento
    observacoes?: string | null
    origem?: $Enums.OrigemAgendamento
    recorrenciaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profissional: ProfissionalCreateNestedOneWithoutAgendamentosInput
    especialidade: EspecialidadeCreateNestedOneWithoutAgendamentosInput
    pacientes?: AgendamentoPacienteCreateNestedManyWithoutAgendamentoInput
  }

  export type AgendamentoUncheckedCreateInput = {
    id?: string
    tipo: $Enums.TipoAgendamento
    profissionalId: string
    especialidadeId: string
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    numeroSessoes?: number
    status?: $Enums.StatusAgendamento
    observacoes?: string | null
    origem?: $Enums.OrigemAgendamento
    recorrenciaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pacientes?: AgendamentoPacienteUncheckedCreateNestedManyWithoutAgendamentoInput
  }

  export type AgendamentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAgendamentoFieldUpdateOperationsInput | $Enums.TipoAgendamento
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroSessoes?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAgendamentoFieldUpdateOperationsInput | $Enums.StatusAgendamento
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: EnumOrigemAgendamentoFieldUpdateOperationsInput | $Enums.OrigemAgendamento
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profissional?: ProfissionalUpdateOneRequiredWithoutAgendamentosNestedInput
    especialidade?: EspecialidadeUpdateOneRequiredWithoutAgendamentosNestedInput
    pacientes?: AgendamentoPacienteUpdateManyWithoutAgendamentoNestedInput
  }

  export type AgendamentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAgendamentoFieldUpdateOperationsInput | $Enums.TipoAgendamento
    profissionalId?: StringFieldUpdateOperationsInput | string
    especialidadeId?: StringFieldUpdateOperationsInput | string
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroSessoes?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAgendamentoFieldUpdateOperationsInput | $Enums.StatusAgendamento
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: EnumOrigemAgendamentoFieldUpdateOperationsInput | $Enums.OrigemAgendamento
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pacientes?: AgendamentoPacienteUncheckedUpdateManyWithoutAgendamentoNestedInput
  }

  export type AgendamentoCreateManyInput = {
    id?: string
    tipo: $Enums.TipoAgendamento
    profissionalId: string
    especialidadeId: string
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    numeroSessoes?: number
    status?: $Enums.StatusAgendamento
    observacoes?: string | null
    origem?: $Enums.OrigemAgendamento
    recorrenciaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendamentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAgendamentoFieldUpdateOperationsInput | $Enums.TipoAgendamento
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroSessoes?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAgendamentoFieldUpdateOperationsInput | $Enums.StatusAgendamento
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: EnumOrigemAgendamentoFieldUpdateOperationsInput | $Enums.OrigemAgendamento
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAgendamentoFieldUpdateOperationsInput | $Enums.TipoAgendamento
    profissionalId?: StringFieldUpdateOperationsInput | string
    especialidadeId?: StringFieldUpdateOperationsInput | string
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroSessoes?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAgendamentoFieldUpdateOperationsInput | $Enums.StatusAgendamento
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: EnumOrigemAgendamentoFieldUpdateOperationsInput | $Enums.OrigemAgendamento
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoPacienteCreateInput = {
    agendamento: AgendamentoCreateNestedOneWithoutPacientesInput
    paciente: PacienteCreateNestedOneWithoutAgendamentosInput
  }

  export type AgendamentoPacienteUncheckedCreateInput = {
    agendamentoId: string
    pacienteId: string
  }

  export type AgendamentoPacienteUpdateInput = {
    agendamento?: AgendamentoUpdateOneRequiredWithoutPacientesNestedInput
    paciente?: PacienteUpdateOneRequiredWithoutAgendamentosNestedInput
  }

  export type AgendamentoPacienteUncheckedUpdateInput = {
    agendamentoId?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
  }

  export type AgendamentoPacienteCreateManyInput = {
    agendamentoId: string
    pacienteId: string
  }

  export type AgendamentoPacienteUpdateManyMutationInput = {

  }

  export type AgendamentoPacienteUncheckedUpdateManyInput = {
    agendamentoId?: StringFieldUpdateOperationsInput | string
    pacienteId?: StringFieldUpdateOperationsInput | string
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

  export type EnumPapelFilter<$PrismaModel = never> = {
    equals?: $Enums.Papel | EnumPapelFieldRefInput<$PrismaModel>
    in?: $Enums.Papel[] | ListEnumPapelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Papel[] | ListEnumPapelFieldRefInput<$PrismaModel>
    not?: NestedEnumPapelFilter<$PrismaModel> | $Enums.Papel
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ProfissionalNullableScalarRelationFilter = {
    is?: ProfissionalWhereInput | null
    isNot?: ProfissionalWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    papel?: SortOrder
    ativo?: SortOrder
    profissionalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    papel?: SortOrder
    ativo?: SortOrder
    profissionalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    papel?: SortOrder
    ativo?: SortOrder
    profissionalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumPapelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Papel | EnumPapelFieldRefInput<$PrismaModel>
    in?: $Enums.Papel[] | ListEnumPapelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Papel[] | ListEnumPapelFieldRefInput<$PrismaModel>
    not?: NestedEnumPapelWithAggregatesFilter<$PrismaModel> | $Enums.Papel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPapelFilter<$PrismaModel>
    _max?: NestedEnumPapelFilter<$PrismaModel>
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

  export type PacienteListRelationFilter = {
    every?: PacienteWhereInput
    some?: PacienteWhereInput
    none?: PacienteWhereInput
  }

  export type PacienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConvenioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConvenioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConvenioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type ConvenioNullableScalarRelationFilter = {
    is?: ConvenioWhereInput | null
    isNot?: ConvenioWhereInput | null
  }

  export type PacienteEspecialidadeListRelationFilter = {
    every?: PacienteEspecialidadeWhereInput
    some?: PacienteEspecialidadeWhereInput
    none?: PacienteEspecialidadeWhereInput
  }

  export type AgendamentoPacienteListRelationFilter = {
    every?: AgendamentoPacienteWhereInput
    some?: AgendamentoPacienteWhereInput
    none?: AgendamentoPacienteWhereInput
  }

  export type PacienteEspecialidadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgendamentoPacienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    dataNasc?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    telefone2?: SortOrder
    email?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    diagnostico?: SortOrder
    observacoes?: SortOrder
    perfil?: SortOrder
    nomeResponsavel?: SortOrder
    telefoneResponsavel?: SortOrder
    relacaoResponsavel?: SortOrder
    convenioId?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PacienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    dataNasc?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    telefone2?: SortOrder
    email?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    diagnostico?: SortOrder
    observacoes?: SortOrder
    perfil?: SortOrder
    nomeResponsavel?: SortOrder
    telefoneResponsavel?: SortOrder
    relacaoResponsavel?: SortOrder
    convenioId?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PacienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    dataNasc?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    telefone2?: SortOrder
    email?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    diagnostico?: SortOrder
    observacoes?: SortOrder
    perfil?: SortOrder
    nomeResponsavel?: SortOrder
    telefoneResponsavel?: SortOrder
    relacaoResponsavel?: SortOrder
    convenioId?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumTipoEspecialidadeFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEspecialidade | EnumTipoEspecialidadeFieldRefInput<$PrismaModel>
    in?: $Enums.TipoEspecialidade[] | ListEnumTipoEspecialidadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoEspecialidade[] | ListEnumTipoEspecialidadeFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoEspecialidadeFilter<$PrismaModel> | $Enums.TipoEspecialidade
  }

  export type ProfissionalListRelationFilter = {
    every?: ProfissionalWhereInput
    some?: ProfissionalWhereInput
    none?: ProfissionalWhereInput
  }

  export type AgendamentoListRelationFilter = {
    every?: AgendamentoWhereInput
    some?: AgendamentoWhereInput
    none?: AgendamentoWhereInput
  }

  export type ProfissionalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgendamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EspecialidadeCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    cor?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EspecialidadeMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    cor?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EspecialidadeMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    descricao?: SortOrder
    cor?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTipoEspecialidadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEspecialidade | EnumTipoEspecialidadeFieldRefInput<$PrismaModel>
    in?: $Enums.TipoEspecialidade[] | ListEnumTipoEspecialidadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoEspecialidade[] | ListEnumTipoEspecialidadeFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoEspecialidadeWithAggregatesFilter<$PrismaModel> | $Enums.TipoEspecialidade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoEspecialidadeFilter<$PrismaModel>
    _max?: NestedEnumTipoEspecialidadeFilter<$PrismaModel>
  }

  export type PacienteScalarRelationFilter = {
    is?: PacienteWhereInput
    isNot?: PacienteWhereInput
  }

  export type EspecialidadeScalarRelationFilter = {
    is?: EspecialidadeWhereInput
    isNot?: EspecialidadeWhereInput
  }

  export type PacienteEspecialidadePacienteIdEspecialidadeIdCompoundUniqueInput = {
    pacienteId: string
    especialidadeId: string
  }

  export type PacienteEspecialidadeCountOrderByAggregateInput = {
    pacienteId?: SortOrder
    especialidadeId?: SortOrder
    createdAt?: SortOrder
  }

  export type PacienteEspecialidadeMaxOrderByAggregateInput = {
    pacienteId?: SortOrder
    especialidadeId?: SortOrder
    createdAt?: SortOrder
  }

  export type PacienteEspecialidadeMinOrderByAggregateInput = {
    pacienteId?: SortOrder
    especialidadeId?: SortOrder
    createdAt?: SortOrder
  }

  export type HorarioAtendimentoListRelationFilter = {
    every?: HorarioAtendimentoWhereInput
    some?: HorarioAtendimentoWhereInput
    none?: HorarioAtendimentoWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type HorarioAtendimentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfissionalCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    registro?: SortOrder
    especialidadeId?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfissionalMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    registro?: SortOrder
    especialidadeId?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfissionalMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    registro?: SortOrder
    especialidadeId?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDiaSemanaFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaSemana | EnumDiaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaSemanaFilter<$PrismaModel> | $Enums.DiaSemana
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

  export type ProfissionalScalarRelationFilter = {
    is?: ProfissionalWhereInput
    isNot?: ProfissionalWhereInput
  }

  export type HorarioAtendimentoCountOrderByAggregateInput = {
    id?: SortOrder
    profissionalId?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    duracaoSessao?: SortOrder
    intervaloSessoes?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HorarioAtendimentoAvgOrderByAggregateInput = {
    duracaoSessao?: SortOrder
    intervaloSessoes?: SortOrder
  }

  export type HorarioAtendimentoMaxOrderByAggregateInput = {
    id?: SortOrder
    profissionalId?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    duracaoSessao?: SortOrder
    intervaloSessoes?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HorarioAtendimentoMinOrderByAggregateInput = {
    id?: SortOrder
    profissionalId?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    duracaoSessao?: SortOrder
    intervaloSessoes?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HorarioAtendimentoSumOrderByAggregateInput = {
    duracaoSessao?: SortOrder
    intervaloSessoes?: SortOrder
  }

  export type EnumDiaSemanaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaSemana | EnumDiaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaSemanaWithAggregatesFilter<$PrismaModel> | $Enums.DiaSemana
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiaSemanaFilter<$PrismaModel>
    _max?: NestedEnumDiaSemanaFilter<$PrismaModel>
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

  export type EnumTipoAgendamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAgendamento | EnumTipoAgendamentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAgendamento[] | ListEnumTipoAgendamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAgendamento[] | ListEnumTipoAgendamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAgendamentoFilter<$PrismaModel> | $Enums.TipoAgendamento
  }

  export type EnumStatusAgendamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAgendamento | EnumStatusAgendamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAgendamento[] | ListEnumStatusAgendamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAgendamento[] | ListEnumStatusAgendamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAgendamentoFilter<$PrismaModel> | $Enums.StatusAgendamento
  }

  export type EnumOrigemAgendamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.OrigemAgendamento | EnumOrigemAgendamentoFieldRefInput<$PrismaModel>
    in?: $Enums.OrigemAgendamento[] | ListEnumOrigemAgendamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrigemAgendamento[] | ListEnumOrigemAgendamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumOrigemAgendamentoFilter<$PrismaModel> | $Enums.OrigemAgendamento
  }

  export type AgendamentoCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    profissionalId?: SortOrder
    especialidadeId?: SortOrder
    dataHoraInicio?: SortOrder
    dataHoraFim?: SortOrder
    numeroSessoes?: SortOrder
    status?: SortOrder
    observacoes?: SortOrder
    origem?: SortOrder
    recorrenciaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgendamentoAvgOrderByAggregateInput = {
    numeroSessoes?: SortOrder
  }

  export type AgendamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    profissionalId?: SortOrder
    especialidadeId?: SortOrder
    dataHoraInicio?: SortOrder
    dataHoraFim?: SortOrder
    numeroSessoes?: SortOrder
    status?: SortOrder
    observacoes?: SortOrder
    origem?: SortOrder
    recorrenciaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgendamentoMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    profissionalId?: SortOrder
    especialidadeId?: SortOrder
    dataHoraInicio?: SortOrder
    dataHoraFim?: SortOrder
    numeroSessoes?: SortOrder
    status?: SortOrder
    observacoes?: SortOrder
    origem?: SortOrder
    recorrenciaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgendamentoSumOrderByAggregateInput = {
    numeroSessoes?: SortOrder
  }

  export type EnumTipoAgendamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAgendamento | EnumTipoAgendamentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAgendamento[] | ListEnumTipoAgendamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAgendamento[] | ListEnumTipoAgendamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAgendamentoWithAggregatesFilter<$PrismaModel> | $Enums.TipoAgendamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoAgendamentoFilter<$PrismaModel>
    _max?: NestedEnumTipoAgendamentoFilter<$PrismaModel>
  }

  export type EnumStatusAgendamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAgendamento | EnumStatusAgendamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAgendamento[] | ListEnumStatusAgendamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAgendamento[] | ListEnumStatusAgendamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAgendamentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusAgendamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAgendamentoFilter<$PrismaModel>
    _max?: NestedEnumStatusAgendamentoFilter<$PrismaModel>
  }

  export type EnumOrigemAgendamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrigemAgendamento | EnumOrigemAgendamentoFieldRefInput<$PrismaModel>
    in?: $Enums.OrigemAgendamento[] | ListEnumOrigemAgendamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrigemAgendamento[] | ListEnumOrigemAgendamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumOrigemAgendamentoWithAggregatesFilter<$PrismaModel> | $Enums.OrigemAgendamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrigemAgendamentoFilter<$PrismaModel>
    _max?: NestedEnumOrigemAgendamentoFilter<$PrismaModel>
  }

  export type AgendamentoScalarRelationFilter = {
    is?: AgendamentoWhereInput
    isNot?: AgendamentoWhereInput
  }

  export type AgendamentoPacienteAgendamentoIdPacienteIdCompoundUniqueInput = {
    agendamentoId: string
    pacienteId: string
  }

  export type AgendamentoPacienteCountOrderByAggregateInput = {
    agendamentoId?: SortOrder
    pacienteId?: SortOrder
  }

  export type AgendamentoPacienteMaxOrderByAggregateInput = {
    agendamentoId?: SortOrder
    pacienteId?: SortOrder
  }

  export type AgendamentoPacienteMinOrderByAggregateInput = {
    agendamentoId?: SortOrder
    pacienteId?: SortOrder
  }

  export type ProfissionalCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfissionalCreateWithoutUserInput, ProfissionalUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutUserInput
    connect?: ProfissionalWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumPapelFieldUpdateOperationsInput = {
    set?: $Enums.Papel
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProfissionalUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfissionalCreateWithoutUserInput, ProfissionalUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutUserInput
    upsert?: ProfissionalUpsertWithoutUserInput
    disconnect?: ProfissionalWhereInput | boolean
    delete?: ProfissionalWhereInput | boolean
    connect?: ProfissionalWhereUniqueInput
    update?: XOR<XOR<ProfissionalUpdateToOneWithWhereWithoutUserInput, ProfissionalUpdateWithoutUserInput>, ProfissionalUncheckedUpdateWithoutUserInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PacienteCreateNestedManyWithoutConvenioInput = {
    create?: XOR<PacienteCreateWithoutConvenioInput, PacienteUncheckedCreateWithoutConvenioInput> | PacienteCreateWithoutConvenioInput[] | PacienteUncheckedCreateWithoutConvenioInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutConvenioInput | PacienteCreateOrConnectWithoutConvenioInput[]
    createMany?: PacienteCreateManyConvenioInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type PacienteUncheckedCreateNestedManyWithoutConvenioInput = {
    create?: XOR<PacienteCreateWithoutConvenioInput, PacienteUncheckedCreateWithoutConvenioInput> | PacienteCreateWithoutConvenioInput[] | PacienteUncheckedCreateWithoutConvenioInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutConvenioInput | PacienteCreateOrConnectWithoutConvenioInput[]
    createMany?: PacienteCreateManyConvenioInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type PacienteUpdateManyWithoutConvenioNestedInput = {
    create?: XOR<PacienteCreateWithoutConvenioInput, PacienteUncheckedCreateWithoutConvenioInput> | PacienteCreateWithoutConvenioInput[] | PacienteUncheckedCreateWithoutConvenioInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutConvenioInput | PacienteCreateOrConnectWithoutConvenioInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutConvenioInput | PacienteUpsertWithWhereUniqueWithoutConvenioInput[]
    createMany?: PacienteCreateManyConvenioInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutConvenioInput | PacienteUpdateWithWhereUniqueWithoutConvenioInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutConvenioInput | PacienteUpdateManyWithWhereWithoutConvenioInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type PacienteUncheckedUpdateManyWithoutConvenioNestedInput = {
    create?: XOR<PacienteCreateWithoutConvenioInput, PacienteUncheckedCreateWithoutConvenioInput> | PacienteCreateWithoutConvenioInput[] | PacienteUncheckedCreateWithoutConvenioInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutConvenioInput | PacienteCreateOrConnectWithoutConvenioInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutConvenioInput | PacienteUpsertWithWhereUniqueWithoutConvenioInput[]
    createMany?: PacienteCreateManyConvenioInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutConvenioInput | PacienteUpdateWithWhereUniqueWithoutConvenioInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutConvenioInput | PacienteUpdateManyWithWhereWithoutConvenioInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type ConvenioCreateNestedOneWithoutPacientesInput = {
    create?: XOR<ConvenioCreateWithoutPacientesInput, ConvenioUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: ConvenioCreateOrConnectWithoutPacientesInput
    connect?: ConvenioWhereUniqueInput
  }

  export type PacienteEspecialidadeCreateNestedManyWithoutPacienteInput = {
    create?: XOR<PacienteEspecialidadeCreateWithoutPacienteInput, PacienteEspecialidadeUncheckedCreateWithoutPacienteInput> | PacienteEspecialidadeCreateWithoutPacienteInput[] | PacienteEspecialidadeUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: PacienteEspecialidadeCreateOrConnectWithoutPacienteInput | PacienteEspecialidadeCreateOrConnectWithoutPacienteInput[]
    createMany?: PacienteEspecialidadeCreateManyPacienteInputEnvelope
    connect?: PacienteEspecialidadeWhereUniqueInput | PacienteEspecialidadeWhereUniqueInput[]
  }

  export type AgendamentoPacienteCreateNestedManyWithoutPacienteInput = {
    create?: XOR<AgendamentoPacienteCreateWithoutPacienteInput, AgendamentoPacienteUncheckedCreateWithoutPacienteInput> | AgendamentoPacienteCreateWithoutPacienteInput[] | AgendamentoPacienteUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: AgendamentoPacienteCreateOrConnectWithoutPacienteInput | AgendamentoPacienteCreateOrConnectWithoutPacienteInput[]
    createMany?: AgendamentoPacienteCreateManyPacienteInputEnvelope
    connect?: AgendamentoPacienteWhereUniqueInput | AgendamentoPacienteWhereUniqueInput[]
  }

  export type PacienteEspecialidadeUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<PacienteEspecialidadeCreateWithoutPacienteInput, PacienteEspecialidadeUncheckedCreateWithoutPacienteInput> | PacienteEspecialidadeCreateWithoutPacienteInput[] | PacienteEspecialidadeUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: PacienteEspecialidadeCreateOrConnectWithoutPacienteInput | PacienteEspecialidadeCreateOrConnectWithoutPacienteInput[]
    createMany?: PacienteEspecialidadeCreateManyPacienteInputEnvelope
    connect?: PacienteEspecialidadeWhereUniqueInput | PacienteEspecialidadeWhereUniqueInput[]
  }

  export type AgendamentoPacienteUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<AgendamentoPacienteCreateWithoutPacienteInput, AgendamentoPacienteUncheckedCreateWithoutPacienteInput> | AgendamentoPacienteCreateWithoutPacienteInput[] | AgendamentoPacienteUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: AgendamentoPacienteCreateOrConnectWithoutPacienteInput | AgendamentoPacienteCreateOrConnectWithoutPacienteInput[]
    createMany?: AgendamentoPacienteCreateManyPacienteInputEnvelope
    connect?: AgendamentoPacienteWhereUniqueInput | AgendamentoPacienteWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ConvenioUpdateOneWithoutPacientesNestedInput = {
    create?: XOR<ConvenioCreateWithoutPacientesInput, ConvenioUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: ConvenioCreateOrConnectWithoutPacientesInput
    upsert?: ConvenioUpsertWithoutPacientesInput
    disconnect?: ConvenioWhereInput | boolean
    delete?: ConvenioWhereInput | boolean
    connect?: ConvenioWhereUniqueInput
    update?: XOR<XOR<ConvenioUpdateToOneWithWhereWithoutPacientesInput, ConvenioUpdateWithoutPacientesInput>, ConvenioUncheckedUpdateWithoutPacientesInput>
  }

  export type PacienteEspecialidadeUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<PacienteEspecialidadeCreateWithoutPacienteInput, PacienteEspecialidadeUncheckedCreateWithoutPacienteInput> | PacienteEspecialidadeCreateWithoutPacienteInput[] | PacienteEspecialidadeUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: PacienteEspecialidadeCreateOrConnectWithoutPacienteInput | PacienteEspecialidadeCreateOrConnectWithoutPacienteInput[]
    upsert?: PacienteEspecialidadeUpsertWithWhereUniqueWithoutPacienteInput | PacienteEspecialidadeUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: PacienteEspecialidadeCreateManyPacienteInputEnvelope
    set?: PacienteEspecialidadeWhereUniqueInput | PacienteEspecialidadeWhereUniqueInput[]
    disconnect?: PacienteEspecialidadeWhereUniqueInput | PacienteEspecialidadeWhereUniqueInput[]
    delete?: PacienteEspecialidadeWhereUniqueInput | PacienteEspecialidadeWhereUniqueInput[]
    connect?: PacienteEspecialidadeWhereUniqueInput | PacienteEspecialidadeWhereUniqueInput[]
    update?: PacienteEspecialidadeUpdateWithWhereUniqueWithoutPacienteInput | PacienteEspecialidadeUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: PacienteEspecialidadeUpdateManyWithWhereWithoutPacienteInput | PacienteEspecialidadeUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: PacienteEspecialidadeScalarWhereInput | PacienteEspecialidadeScalarWhereInput[]
  }

  export type AgendamentoPacienteUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<AgendamentoPacienteCreateWithoutPacienteInput, AgendamentoPacienteUncheckedCreateWithoutPacienteInput> | AgendamentoPacienteCreateWithoutPacienteInput[] | AgendamentoPacienteUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: AgendamentoPacienteCreateOrConnectWithoutPacienteInput | AgendamentoPacienteCreateOrConnectWithoutPacienteInput[]
    upsert?: AgendamentoPacienteUpsertWithWhereUniqueWithoutPacienteInput | AgendamentoPacienteUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: AgendamentoPacienteCreateManyPacienteInputEnvelope
    set?: AgendamentoPacienteWhereUniqueInput | AgendamentoPacienteWhereUniqueInput[]
    disconnect?: AgendamentoPacienteWhereUniqueInput | AgendamentoPacienteWhereUniqueInput[]
    delete?: AgendamentoPacienteWhereUniqueInput | AgendamentoPacienteWhereUniqueInput[]
    connect?: AgendamentoPacienteWhereUniqueInput | AgendamentoPacienteWhereUniqueInput[]
    update?: AgendamentoPacienteUpdateWithWhereUniqueWithoutPacienteInput | AgendamentoPacienteUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: AgendamentoPacienteUpdateManyWithWhereWithoutPacienteInput | AgendamentoPacienteUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: AgendamentoPacienteScalarWhereInput | AgendamentoPacienteScalarWhereInput[]
  }

  export type PacienteEspecialidadeUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<PacienteEspecialidadeCreateWithoutPacienteInput, PacienteEspecialidadeUncheckedCreateWithoutPacienteInput> | PacienteEspecialidadeCreateWithoutPacienteInput[] | PacienteEspecialidadeUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: PacienteEspecialidadeCreateOrConnectWithoutPacienteInput | PacienteEspecialidadeCreateOrConnectWithoutPacienteInput[]
    upsert?: PacienteEspecialidadeUpsertWithWhereUniqueWithoutPacienteInput | PacienteEspecialidadeUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: PacienteEspecialidadeCreateManyPacienteInputEnvelope
    set?: PacienteEspecialidadeWhereUniqueInput | PacienteEspecialidadeWhereUniqueInput[]
    disconnect?: PacienteEspecialidadeWhereUniqueInput | PacienteEspecialidadeWhereUniqueInput[]
    delete?: PacienteEspecialidadeWhereUniqueInput | PacienteEspecialidadeWhereUniqueInput[]
    connect?: PacienteEspecialidadeWhereUniqueInput | PacienteEspecialidadeWhereUniqueInput[]
    update?: PacienteEspecialidadeUpdateWithWhereUniqueWithoutPacienteInput | PacienteEspecialidadeUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: PacienteEspecialidadeUpdateManyWithWhereWithoutPacienteInput | PacienteEspecialidadeUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: PacienteEspecialidadeScalarWhereInput | PacienteEspecialidadeScalarWhereInput[]
  }

  export type AgendamentoPacienteUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<AgendamentoPacienteCreateWithoutPacienteInput, AgendamentoPacienteUncheckedCreateWithoutPacienteInput> | AgendamentoPacienteCreateWithoutPacienteInput[] | AgendamentoPacienteUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: AgendamentoPacienteCreateOrConnectWithoutPacienteInput | AgendamentoPacienteCreateOrConnectWithoutPacienteInput[]
    upsert?: AgendamentoPacienteUpsertWithWhereUniqueWithoutPacienteInput | AgendamentoPacienteUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: AgendamentoPacienteCreateManyPacienteInputEnvelope
    set?: AgendamentoPacienteWhereUniqueInput | AgendamentoPacienteWhereUniqueInput[]
    disconnect?: AgendamentoPacienteWhereUniqueInput | AgendamentoPacienteWhereUniqueInput[]
    delete?: AgendamentoPacienteWhereUniqueInput | AgendamentoPacienteWhereUniqueInput[]
    connect?: AgendamentoPacienteWhereUniqueInput | AgendamentoPacienteWhereUniqueInput[]
    update?: AgendamentoPacienteUpdateWithWhereUniqueWithoutPacienteInput | AgendamentoPacienteUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: AgendamentoPacienteUpdateManyWithWhereWithoutPacienteInput | AgendamentoPacienteUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: AgendamentoPacienteScalarWhereInput | AgendamentoPacienteScalarWhereInput[]
  }

  export type ProfissionalCreateNestedManyWithoutEspecialidadeInput = {
    create?: XOR<ProfissionalCreateWithoutEspecialidadeInput, ProfissionalUncheckedCreateWithoutEspecialidadeInput> | ProfissionalCreateWithoutEspecialidadeInput[] | ProfissionalUncheckedCreateWithoutEspecialidadeInput[]
    connectOrCreate?: ProfissionalCreateOrConnectWithoutEspecialidadeInput | ProfissionalCreateOrConnectWithoutEspecialidadeInput[]
    createMany?: ProfissionalCreateManyEspecialidadeInputEnvelope
    connect?: ProfissionalWhereUniqueInput | ProfissionalWhereUniqueInput[]
  }

  export type AgendamentoCreateNestedManyWithoutEspecialidadeInput = {
    create?: XOR<AgendamentoCreateWithoutEspecialidadeInput, AgendamentoUncheckedCreateWithoutEspecialidadeInput> | AgendamentoCreateWithoutEspecialidadeInput[] | AgendamentoUncheckedCreateWithoutEspecialidadeInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutEspecialidadeInput | AgendamentoCreateOrConnectWithoutEspecialidadeInput[]
    createMany?: AgendamentoCreateManyEspecialidadeInputEnvelope
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
  }

  export type PacienteEspecialidadeCreateNestedManyWithoutEspecialidadeInput = {
    create?: XOR<PacienteEspecialidadeCreateWithoutEspecialidadeInput, PacienteEspecialidadeUncheckedCreateWithoutEspecialidadeInput> | PacienteEspecialidadeCreateWithoutEspecialidadeInput[] | PacienteEspecialidadeUncheckedCreateWithoutEspecialidadeInput[]
    connectOrCreate?: PacienteEspecialidadeCreateOrConnectWithoutEspecialidadeInput | PacienteEspecialidadeCreateOrConnectWithoutEspecialidadeInput[]
    createMany?: PacienteEspecialidadeCreateManyEspecialidadeInputEnvelope
    connect?: PacienteEspecialidadeWhereUniqueInput | PacienteEspecialidadeWhereUniqueInput[]
  }

  export type ProfissionalUncheckedCreateNestedManyWithoutEspecialidadeInput = {
    create?: XOR<ProfissionalCreateWithoutEspecialidadeInput, ProfissionalUncheckedCreateWithoutEspecialidadeInput> | ProfissionalCreateWithoutEspecialidadeInput[] | ProfissionalUncheckedCreateWithoutEspecialidadeInput[]
    connectOrCreate?: ProfissionalCreateOrConnectWithoutEspecialidadeInput | ProfissionalCreateOrConnectWithoutEspecialidadeInput[]
    createMany?: ProfissionalCreateManyEspecialidadeInputEnvelope
    connect?: ProfissionalWhereUniqueInput | ProfissionalWhereUniqueInput[]
  }

  export type AgendamentoUncheckedCreateNestedManyWithoutEspecialidadeInput = {
    create?: XOR<AgendamentoCreateWithoutEspecialidadeInput, AgendamentoUncheckedCreateWithoutEspecialidadeInput> | AgendamentoCreateWithoutEspecialidadeInput[] | AgendamentoUncheckedCreateWithoutEspecialidadeInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutEspecialidadeInput | AgendamentoCreateOrConnectWithoutEspecialidadeInput[]
    createMany?: AgendamentoCreateManyEspecialidadeInputEnvelope
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
  }

  export type PacienteEspecialidadeUncheckedCreateNestedManyWithoutEspecialidadeInput = {
    create?: XOR<PacienteEspecialidadeCreateWithoutEspecialidadeInput, PacienteEspecialidadeUncheckedCreateWithoutEspecialidadeInput> | PacienteEspecialidadeCreateWithoutEspecialidadeInput[] | PacienteEspecialidadeUncheckedCreateWithoutEspecialidadeInput[]
    connectOrCreate?: PacienteEspecialidadeCreateOrConnectWithoutEspecialidadeInput | PacienteEspecialidadeCreateOrConnectWithoutEspecialidadeInput[]
    createMany?: PacienteEspecialidadeCreateManyEspecialidadeInputEnvelope
    connect?: PacienteEspecialidadeWhereUniqueInput | PacienteEspecialidadeWhereUniqueInput[]
  }

  export type EnumTipoEspecialidadeFieldUpdateOperationsInput = {
    set?: $Enums.TipoEspecialidade
  }

  export type ProfissionalUpdateManyWithoutEspecialidadeNestedInput = {
    create?: XOR<ProfissionalCreateWithoutEspecialidadeInput, ProfissionalUncheckedCreateWithoutEspecialidadeInput> | ProfissionalCreateWithoutEspecialidadeInput[] | ProfissionalUncheckedCreateWithoutEspecialidadeInput[]
    connectOrCreate?: ProfissionalCreateOrConnectWithoutEspecialidadeInput | ProfissionalCreateOrConnectWithoutEspecialidadeInput[]
    upsert?: ProfissionalUpsertWithWhereUniqueWithoutEspecialidadeInput | ProfissionalUpsertWithWhereUniqueWithoutEspecialidadeInput[]
    createMany?: ProfissionalCreateManyEspecialidadeInputEnvelope
    set?: ProfissionalWhereUniqueInput | ProfissionalWhereUniqueInput[]
    disconnect?: ProfissionalWhereUniqueInput | ProfissionalWhereUniqueInput[]
    delete?: ProfissionalWhereUniqueInput | ProfissionalWhereUniqueInput[]
    connect?: ProfissionalWhereUniqueInput | ProfissionalWhereUniqueInput[]
    update?: ProfissionalUpdateWithWhereUniqueWithoutEspecialidadeInput | ProfissionalUpdateWithWhereUniqueWithoutEspecialidadeInput[]
    updateMany?: ProfissionalUpdateManyWithWhereWithoutEspecialidadeInput | ProfissionalUpdateManyWithWhereWithoutEspecialidadeInput[]
    deleteMany?: ProfissionalScalarWhereInput | ProfissionalScalarWhereInput[]
  }

  export type AgendamentoUpdateManyWithoutEspecialidadeNestedInput = {
    create?: XOR<AgendamentoCreateWithoutEspecialidadeInput, AgendamentoUncheckedCreateWithoutEspecialidadeInput> | AgendamentoCreateWithoutEspecialidadeInput[] | AgendamentoUncheckedCreateWithoutEspecialidadeInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutEspecialidadeInput | AgendamentoCreateOrConnectWithoutEspecialidadeInput[]
    upsert?: AgendamentoUpsertWithWhereUniqueWithoutEspecialidadeInput | AgendamentoUpsertWithWhereUniqueWithoutEspecialidadeInput[]
    createMany?: AgendamentoCreateManyEspecialidadeInputEnvelope
    set?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    disconnect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    delete?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    update?: AgendamentoUpdateWithWhereUniqueWithoutEspecialidadeInput | AgendamentoUpdateWithWhereUniqueWithoutEspecialidadeInput[]
    updateMany?: AgendamentoUpdateManyWithWhereWithoutEspecialidadeInput | AgendamentoUpdateManyWithWhereWithoutEspecialidadeInput[]
    deleteMany?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
  }

  export type PacienteEspecialidadeUpdateManyWithoutEspecialidadeNestedInput = {
    create?: XOR<PacienteEspecialidadeCreateWithoutEspecialidadeInput, PacienteEspecialidadeUncheckedCreateWithoutEspecialidadeInput> | PacienteEspecialidadeCreateWithoutEspecialidadeInput[] | PacienteEspecialidadeUncheckedCreateWithoutEspecialidadeInput[]
    connectOrCreate?: PacienteEspecialidadeCreateOrConnectWithoutEspecialidadeInput | PacienteEspecialidadeCreateOrConnectWithoutEspecialidadeInput[]
    upsert?: PacienteEspecialidadeUpsertWithWhereUniqueWithoutEspecialidadeInput | PacienteEspecialidadeUpsertWithWhereUniqueWithoutEspecialidadeInput[]
    createMany?: PacienteEspecialidadeCreateManyEspecialidadeInputEnvelope
    set?: PacienteEspecialidadeWhereUniqueInput | PacienteEspecialidadeWhereUniqueInput[]
    disconnect?: PacienteEspecialidadeWhereUniqueInput | PacienteEspecialidadeWhereUniqueInput[]
    delete?: PacienteEspecialidadeWhereUniqueInput | PacienteEspecialidadeWhereUniqueInput[]
    connect?: PacienteEspecialidadeWhereUniqueInput | PacienteEspecialidadeWhereUniqueInput[]
    update?: PacienteEspecialidadeUpdateWithWhereUniqueWithoutEspecialidadeInput | PacienteEspecialidadeUpdateWithWhereUniqueWithoutEspecialidadeInput[]
    updateMany?: PacienteEspecialidadeUpdateManyWithWhereWithoutEspecialidadeInput | PacienteEspecialidadeUpdateManyWithWhereWithoutEspecialidadeInput[]
    deleteMany?: PacienteEspecialidadeScalarWhereInput | PacienteEspecialidadeScalarWhereInput[]
  }

  export type ProfissionalUncheckedUpdateManyWithoutEspecialidadeNestedInput = {
    create?: XOR<ProfissionalCreateWithoutEspecialidadeInput, ProfissionalUncheckedCreateWithoutEspecialidadeInput> | ProfissionalCreateWithoutEspecialidadeInput[] | ProfissionalUncheckedCreateWithoutEspecialidadeInput[]
    connectOrCreate?: ProfissionalCreateOrConnectWithoutEspecialidadeInput | ProfissionalCreateOrConnectWithoutEspecialidadeInput[]
    upsert?: ProfissionalUpsertWithWhereUniqueWithoutEspecialidadeInput | ProfissionalUpsertWithWhereUniqueWithoutEspecialidadeInput[]
    createMany?: ProfissionalCreateManyEspecialidadeInputEnvelope
    set?: ProfissionalWhereUniqueInput | ProfissionalWhereUniqueInput[]
    disconnect?: ProfissionalWhereUniqueInput | ProfissionalWhereUniqueInput[]
    delete?: ProfissionalWhereUniqueInput | ProfissionalWhereUniqueInput[]
    connect?: ProfissionalWhereUniqueInput | ProfissionalWhereUniqueInput[]
    update?: ProfissionalUpdateWithWhereUniqueWithoutEspecialidadeInput | ProfissionalUpdateWithWhereUniqueWithoutEspecialidadeInput[]
    updateMany?: ProfissionalUpdateManyWithWhereWithoutEspecialidadeInput | ProfissionalUpdateManyWithWhereWithoutEspecialidadeInput[]
    deleteMany?: ProfissionalScalarWhereInput | ProfissionalScalarWhereInput[]
  }

  export type AgendamentoUncheckedUpdateManyWithoutEspecialidadeNestedInput = {
    create?: XOR<AgendamentoCreateWithoutEspecialidadeInput, AgendamentoUncheckedCreateWithoutEspecialidadeInput> | AgendamentoCreateWithoutEspecialidadeInput[] | AgendamentoUncheckedCreateWithoutEspecialidadeInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutEspecialidadeInput | AgendamentoCreateOrConnectWithoutEspecialidadeInput[]
    upsert?: AgendamentoUpsertWithWhereUniqueWithoutEspecialidadeInput | AgendamentoUpsertWithWhereUniqueWithoutEspecialidadeInput[]
    createMany?: AgendamentoCreateManyEspecialidadeInputEnvelope
    set?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    disconnect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    delete?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    update?: AgendamentoUpdateWithWhereUniqueWithoutEspecialidadeInput | AgendamentoUpdateWithWhereUniqueWithoutEspecialidadeInput[]
    updateMany?: AgendamentoUpdateManyWithWhereWithoutEspecialidadeInput | AgendamentoUpdateManyWithWhereWithoutEspecialidadeInput[]
    deleteMany?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
  }

  export type PacienteEspecialidadeUncheckedUpdateManyWithoutEspecialidadeNestedInput = {
    create?: XOR<PacienteEspecialidadeCreateWithoutEspecialidadeInput, PacienteEspecialidadeUncheckedCreateWithoutEspecialidadeInput> | PacienteEspecialidadeCreateWithoutEspecialidadeInput[] | PacienteEspecialidadeUncheckedCreateWithoutEspecialidadeInput[]
    connectOrCreate?: PacienteEspecialidadeCreateOrConnectWithoutEspecialidadeInput | PacienteEspecialidadeCreateOrConnectWithoutEspecialidadeInput[]
    upsert?: PacienteEspecialidadeUpsertWithWhereUniqueWithoutEspecialidadeInput | PacienteEspecialidadeUpsertWithWhereUniqueWithoutEspecialidadeInput[]
    createMany?: PacienteEspecialidadeCreateManyEspecialidadeInputEnvelope
    set?: PacienteEspecialidadeWhereUniqueInput | PacienteEspecialidadeWhereUniqueInput[]
    disconnect?: PacienteEspecialidadeWhereUniqueInput | PacienteEspecialidadeWhereUniqueInput[]
    delete?: PacienteEspecialidadeWhereUniqueInput | PacienteEspecialidadeWhereUniqueInput[]
    connect?: PacienteEspecialidadeWhereUniqueInput | PacienteEspecialidadeWhereUniqueInput[]
    update?: PacienteEspecialidadeUpdateWithWhereUniqueWithoutEspecialidadeInput | PacienteEspecialidadeUpdateWithWhereUniqueWithoutEspecialidadeInput[]
    updateMany?: PacienteEspecialidadeUpdateManyWithWhereWithoutEspecialidadeInput | PacienteEspecialidadeUpdateManyWithWhereWithoutEspecialidadeInput[]
    deleteMany?: PacienteEspecialidadeScalarWhereInput | PacienteEspecialidadeScalarWhereInput[]
  }

  export type PacienteCreateNestedOneWithoutEspecialidadesInput = {
    create?: XOR<PacienteCreateWithoutEspecialidadesInput, PacienteUncheckedCreateWithoutEspecialidadesInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutEspecialidadesInput
    connect?: PacienteWhereUniqueInput
  }

  export type EspecialidadeCreateNestedOneWithoutPacientesInput = {
    create?: XOR<EspecialidadeCreateWithoutPacientesInput, EspecialidadeUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: EspecialidadeCreateOrConnectWithoutPacientesInput
    connect?: EspecialidadeWhereUniqueInput
  }

  export type PacienteUpdateOneRequiredWithoutEspecialidadesNestedInput = {
    create?: XOR<PacienteCreateWithoutEspecialidadesInput, PacienteUncheckedCreateWithoutEspecialidadesInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutEspecialidadesInput
    upsert?: PacienteUpsertWithoutEspecialidadesInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutEspecialidadesInput, PacienteUpdateWithoutEspecialidadesInput>, PacienteUncheckedUpdateWithoutEspecialidadesInput>
  }

  export type EspecialidadeUpdateOneRequiredWithoutPacientesNestedInput = {
    create?: XOR<EspecialidadeCreateWithoutPacientesInput, EspecialidadeUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: EspecialidadeCreateOrConnectWithoutPacientesInput
    upsert?: EspecialidadeUpsertWithoutPacientesInput
    connect?: EspecialidadeWhereUniqueInput
    update?: XOR<XOR<EspecialidadeUpdateToOneWithWhereWithoutPacientesInput, EspecialidadeUpdateWithoutPacientesInput>, EspecialidadeUncheckedUpdateWithoutPacientesInput>
  }

  export type EspecialidadeCreateNestedOneWithoutProfissionaisInput = {
    create?: XOR<EspecialidadeCreateWithoutProfissionaisInput, EspecialidadeUncheckedCreateWithoutProfissionaisInput>
    connectOrCreate?: EspecialidadeCreateOrConnectWithoutProfissionaisInput
    connect?: EspecialidadeWhereUniqueInput
  }

  export type HorarioAtendimentoCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<HorarioAtendimentoCreateWithoutProfissionalInput, HorarioAtendimentoUncheckedCreateWithoutProfissionalInput> | HorarioAtendimentoCreateWithoutProfissionalInput[] | HorarioAtendimentoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: HorarioAtendimentoCreateOrConnectWithoutProfissionalInput | HorarioAtendimentoCreateOrConnectWithoutProfissionalInput[]
    createMany?: HorarioAtendimentoCreateManyProfissionalInputEnvelope
    connect?: HorarioAtendimentoWhereUniqueInput | HorarioAtendimentoWhereUniqueInput[]
  }

  export type AgendamentoCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<AgendamentoCreateWithoutProfissionalInput, AgendamentoUncheckedCreateWithoutProfissionalInput> | AgendamentoCreateWithoutProfissionalInput[] | AgendamentoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutProfissionalInput | AgendamentoCreateOrConnectWithoutProfissionalInput[]
    createMany?: AgendamentoCreateManyProfissionalInputEnvelope
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutProfissionalInput = {
    create?: XOR<UserCreateWithoutProfissionalInput, UserUncheckedCreateWithoutProfissionalInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfissionalInput
    connect?: UserWhereUniqueInput
  }

  export type HorarioAtendimentoUncheckedCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<HorarioAtendimentoCreateWithoutProfissionalInput, HorarioAtendimentoUncheckedCreateWithoutProfissionalInput> | HorarioAtendimentoCreateWithoutProfissionalInput[] | HorarioAtendimentoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: HorarioAtendimentoCreateOrConnectWithoutProfissionalInput | HorarioAtendimentoCreateOrConnectWithoutProfissionalInput[]
    createMany?: HorarioAtendimentoCreateManyProfissionalInputEnvelope
    connect?: HorarioAtendimentoWhereUniqueInput | HorarioAtendimentoWhereUniqueInput[]
  }

  export type AgendamentoUncheckedCreateNestedManyWithoutProfissionalInput = {
    create?: XOR<AgendamentoCreateWithoutProfissionalInput, AgendamentoUncheckedCreateWithoutProfissionalInput> | AgendamentoCreateWithoutProfissionalInput[] | AgendamentoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutProfissionalInput | AgendamentoCreateOrConnectWithoutProfissionalInput[]
    createMany?: AgendamentoCreateManyProfissionalInputEnvelope
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedOneWithoutProfissionalInput = {
    create?: XOR<UserCreateWithoutProfissionalInput, UserUncheckedCreateWithoutProfissionalInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfissionalInput
    connect?: UserWhereUniqueInput
  }

  export type EspecialidadeUpdateOneRequiredWithoutProfissionaisNestedInput = {
    create?: XOR<EspecialidadeCreateWithoutProfissionaisInput, EspecialidadeUncheckedCreateWithoutProfissionaisInput>
    connectOrCreate?: EspecialidadeCreateOrConnectWithoutProfissionaisInput
    upsert?: EspecialidadeUpsertWithoutProfissionaisInput
    connect?: EspecialidadeWhereUniqueInput
    update?: XOR<XOR<EspecialidadeUpdateToOneWithWhereWithoutProfissionaisInput, EspecialidadeUpdateWithoutProfissionaisInput>, EspecialidadeUncheckedUpdateWithoutProfissionaisInput>
  }

  export type HorarioAtendimentoUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<HorarioAtendimentoCreateWithoutProfissionalInput, HorarioAtendimentoUncheckedCreateWithoutProfissionalInput> | HorarioAtendimentoCreateWithoutProfissionalInput[] | HorarioAtendimentoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: HorarioAtendimentoCreateOrConnectWithoutProfissionalInput | HorarioAtendimentoCreateOrConnectWithoutProfissionalInput[]
    upsert?: HorarioAtendimentoUpsertWithWhereUniqueWithoutProfissionalInput | HorarioAtendimentoUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: HorarioAtendimentoCreateManyProfissionalInputEnvelope
    set?: HorarioAtendimentoWhereUniqueInput | HorarioAtendimentoWhereUniqueInput[]
    disconnect?: HorarioAtendimentoWhereUniqueInput | HorarioAtendimentoWhereUniqueInput[]
    delete?: HorarioAtendimentoWhereUniqueInput | HorarioAtendimentoWhereUniqueInput[]
    connect?: HorarioAtendimentoWhereUniqueInput | HorarioAtendimentoWhereUniqueInput[]
    update?: HorarioAtendimentoUpdateWithWhereUniqueWithoutProfissionalInput | HorarioAtendimentoUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: HorarioAtendimentoUpdateManyWithWhereWithoutProfissionalInput | HorarioAtendimentoUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: HorarioAtendimentoScalarWhereInput | HorarioAtendimentoScalarWhereInput[]
  }

  export type AgendamentoUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<AgendamentoCreateWithoutProfissionalInput, AgendamentoUncheckedCreateWithoutProfissionalInput> | AgendamentoCreateWithoutProfissionalInput[] | AgendamentoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutProfissionalInput | AgendamentoCreateOrConnectWithoutProfissionalInput[]
    upsert?: AgendamentoUpsertWithWhereUniqueWithoutProfissionalInput | AgendamentoUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: AgendamentoCreateManyProfissionalInputEnvelope
    set?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    disconnect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    delete?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    update?: AgendamentoUpdateWithWhereUniqueWithoutProfissionalInput | AgendamentoUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: AgendamentoUpdateManyWithWhereWithoutProfissionalInput | AgendamentoUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
  }

  export type UserUpdateOneWithoutProfissionalNestedInput = {
    create?: XOR<UserCreateWithoutProfissionalInput, UserUncheckedCreateWithoutProfissionalInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfissionalInput
    upsert?: UserUpsertWithoutProfissionalInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfissionalInput, UserUpdateWithoutProfissionalInput>, UserUncheckedUpdateWithoutProfissionalInput>
  }

  export type HorarioAtendimentoUncheckedUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<HorarioAtendimentoCreateWithoutProfissionalInput, HorarioAtendimentoUncheckedCreateWithoutProfissionalInput> | HorarioAtendimentoCreateWithoutProfissionalInput[] | HorarioAtendimentoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: HorarioAtendimentoCreateOrConnectWithoutProfissionalInput | HorarioAtendimentoCreateOrConnectWithoutProfissionalInput[]
    upsert?: HorarioAtendimentoUpsertWithWhereUniqueWithoutProfissionalInput | HorarioAtendimentoUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: HorarioAtendimentoCreateManyProfissionalInputEnvelope
    set?: HorarioAtendimentoWhereUniqueInput | HorarioAtendimentoWhereUniqueInput[]
    disconnect?: HorarioAtendimentoWhereUniqueInput | HorarioAtendimentoWhereUniqueInput[]
    delete?: HorarioAtendimentoWhereUniqueInput | HorarioAtendimentoWhereUniqueInput[]
    connect?: HorarioAtendimentoWhereUniqueInput | HorarioAtendimentoWhereUniqueInput[]
    update?: HorarioAtendimentoUpdateWithWhereUniqueWithoutProfissionalInput | HorarioAtendimentoUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: HorarioAtendimentoUpdateManyWithWhereWithoutProfissionalInput | HorarioAtendimentoUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: HorarioAtendimentoScalarWhereInput | HorarioAtendimentoScalarWhereInput[]
  }

  export type AgendamentoUncheckedUpdateManyWithoutProfissionalNestedInput = {
    create?: XOR<AgendamentoCreateWithoutProfissionalInput, AgendamentoUncheckedCreateWithoutProfissionalInput> | AgendamentoCreateWithoutProfissionalInput[] | AgendamentoUncheckedCreateWithoutProfissionalInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutProfissionalInput | AgendamentoCreateOrConnectWithoutProfissionalInput[]
    upsert?: AgendamentoUpsertWithWhereUniqueWithoutProfissionalInput | AgendamentoUpsertWithWhereUniqueWithoutProfissionalInput[]
    createMany?: AgendamentoCreateManyProfissionalInputEnvelope
    set?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    disconnect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    delete?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    update?: AgendamentoUpdateWithWhereUniqueWithoutProfissionalInput | AgendamentoUpdateWithWhereUniqueWithoutProfissionalInput[]
    updateMany?: AgendamentoUpdateManyWithWhereWithoutProfissionalInput | AgendamentoUpdateManyWithWhereWithoutProfissionalInput[]
    deleteMany?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
  }

  export type UserUncheckedUpdateOneWithoutProfissionalNestedInput = {
    create?: XOR<UserCreateWithoutProfissionalInput, UserUncheckedCreateWithoutProfissionalInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfissionalInput
    upsert?: UserUpsertWithoutProfissionalInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfissionalInput, UserUpdateWithoutProfissionalInput>, UserUncheckedUpdateWithoutProfissionalInput>
  }

  export type ProfissionalCreateNestedOneWithoutHorariosInput = {
    create?: XOR<ProfissionalCreateWithoutHorariosInput, ProfissionalUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutHorariosInput
    connect?: ProfissionalWhereUniqueInput
  }

  export type EnumDiaSemanaFieldUpdateOperationsInput = {
    set?: $Enums.DiaSemana
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfissionalUpdateOneRequiredWithoutHorariosNestedInput = {
    create?: XOR<ProfissionalCreateWithoutHorariosInput, ProfissionalUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutHorariosInput
    upsert?: ProfissionalUpsertWithoutHorariosInput
    connect?: ProfissionalWhereUniqueInput
    update?: XOR<XOR<ProfissionalUpdateToOneWithWhereWithoutHorariosInput, ProfissionalUpdateWithoutHorariosInput>, ProfissionalUncheckedUpdateWithoutHorariosInput>
  }

  export type ProfissionalCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<ProfissionalCreateWithoutAgendamentosInput, ProfissionalUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutAgendamentosInput
    connect?: ProfissionalWhereUniqueInput
  }

  export type EspecialidadeCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<EspecialidadeCreateWithoutAgendamentosInput, EspecialidadeUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: EspecialidadeCreateOrConnectWithoutAgendamentosInput
    connect?: EspecialidadeWhereUniqueInput
  }

  export type AgendamentoPacienteCreateNestedManyWithoutAgendamentoInput = {
    create?: XOR<AgendamentoPacienteCreateWithoutAgendamentoInput, AgendamentoPacienteUncheckedCreateWithoutAgendamentoInput> | AgendamentoPacienteCreateWithoutAgendamentoInput[] | AgendamentoPacienteUncheckedCreateWithoutAgendamentoInput[]
    connectOrCreate?: AgendamentoPacienteCreateOrConnectWithoutAgendamentoInput | AgendamentoPacienteCreateOrConnectWithoutAgendamentoInput[]
    createMany?: AgendamentoPacienteCreateManyAgendamentoInputEnvelope
    connect?: AgendamentoPacienteWhereUniqueInput | AgendamentoPacienteWhereUniqueInput[]
  }

  export type AgendamentoPacienteUncheckedCreateNestedManyWithoutAgendamentoInput = {
    create?: XOR<AgendamentoPacienteCreateWithoutAgendamentoInput, AgendamentoPacienteUncheckedCreateWithoutAgendamentoInput> | AgendamentoPacienteCreateWithoutAgendamentoInput[] | AgendamentoPacienteUncheckedCreateWithoutAgendamentoInput[]
    connectOrCreate?: AgendamentoPacienteCreateOrConnectWithoutAgendamentoInput | AgendamentoPacienteCreateOrConnectWithoutAgendamentoInput[]
    createMany?: AgendamentoPacienteCreateManyAgendamentoInputEnvelope
    connect?: AgendamentoPacienteWhereUniqueInput | AgendamentoPacienteWhereUniqueInput[]
  }

  export type EnumTipoAgendamentoFieldUpdateOperationsInput = {
    set?: $Enums.TipoAgendamento
  }

  export type EnumStatusAgendamentoFieldUpdateOperationsInput = {
    set?: $Enums.StatusAgendamento
  }

  export type EnumOrigemAgendamentoFieldUpdateOperationsInput = {
    set?: $Enums.OrigemAgendamento
  }

  export type ProfissionalUpdateOneRequiredWithoutAgendamentosNestedInput = {
    create?: XOR<ProfissionalCreateWithoutAgendamentosInput, ProfissionalUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: ProfissionalCreateOrConnectWithoutAgendamentosInput
    upsert?: ProfissionalUpsertWithoutAgendamentosInput
    connect?: ProfissionalWhereUniqueInput
    update?: XOR<XOR<ProfissionalUpdateToOneWithWhereWithoutAgendamentosInput, ProfissionalUpdateWithoutAgendamentosInput>, ProfissionalUncheckedUpdateWithoutAgendamentosInput>
  }

  export type EspecialidadeUpdateOneRequiredWithoutAgendamentosNestedInput = {
    create?: XOR<EspecialidadeCreateWithoutAgendamentosInput, EspecialidadeUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: EspecialidadeCreateOrConnectWithoutAgendamentosInput
    upsert?: EspecialidadeUpsertWithoutAgendamentosInput
    connect?: EspecialidadeWhereUniqueInput
    update?: XOR<XOR<EspecialidadeUpdateToOneWithWhereWithoutAgendamentosInput, EspecialidadeUpdateWithoutAgendamentosInput>, EspecialidadeUncheckedUpdateWithoutAgendamentosInput>
  }

  export type AgendamentoPacienteUpdateManyWithoutAgendamentoNestedInput = {
    create?: XOR<AgendamentoPacienteCreateWithoutAgendamentoInput, AgendamentoPacienteUncheckedCreateWithoutAgendamentoInput> | AgendamentoPacienteCreateWithoutAgendamentoInput[] | AgendamentoPacienteUncheckedCreateWithoutAgendamentoInput[]
    connectOrCreate?: AgendamentoPacienteCreateOrConnectWithoutAgendamentoInput | AgendamentoPacienteCreateOrConnectWithoutAgendamentoInput[]
    upsert?: AgendamentoPacienteUpsertWithWhereUniqueWithoutAgendamentoInput | AgendamentoPacienteUpsertWithWhereUniqueWithoutAgendamentoInput[]
    createMany?: AgendamentoPacienteCreateManyAgendamentoInputEnvelope
    set?: AgendamentoPacienteWhereUniqueInput | AgendamentoPacienteWhereUniqueInput[]
    disconnect?: AgendamentoPacienteWhereUniqueInput | AgendamentoPacienteWhereUniqueInput[]
    delete?: AgendamentoPacienteWhereUniqueInput | AgendamentoPacienteWhereUniqueInput[]
    connect?: AgendamentoPacienteWhereUniqueInput | AgendamentoPacienteWhereUniqueInput[]
    update?: AgendamentoPacienteUpdateWithWhereUniqueWithoutAgendamentoInput | AgendamentoPacienteUpdateWithWhereUniqueWithoutAgendamentoInput[]
    updateMany?: AgendamentoPacienteUpdateManyWithWhereWithoutAgendamentoInput | AgendamentoPacienteUpdateManyWithWhereWithoutAgendamentoInput[]
    deleteMany?: AgendamentoPacienteScalarWhereInput | AgendamentoPacienteScalarWhereInput[]
  }

  export type AgendamentoPacienteUncheckedUpdateManyWithoutAgendamentoNestedInput = {
    create?: XOR<AgendamentoPacienteCreateWithoutAgendamentoInput, AgendamentoPacienteUncheckedCreateWithoutAgendamentoInput> | AgendamentoPacienteCreateWithoutAgendamentoInput[] | AgendamentoPacienteUncheckedCreateWithoutAgendamentoInput[]
    connectOrCreate?: AgendamentoPacienteCreateOrConnectWithoutAgendamentoInput | AgendamentoPacienteCreateOrConnectWithoutAgendamentoInput[]
    upsert?: AgendamentoPacienteUpsertWithWhereUniqueWithoutAgendamentoInput | AgendamentoPacienteUpsertWithWhereUniqueWithoutAgendamentoInput[]
    createMany?: AgendamentoPacienteCreateManyAgendamentoInputEnvelope
    set?: AgendamentoPacienteWhereUniqueInput | AgendamentoPacienteWhereUniqueInput[]
    disconnect?: AgendamentoPacienteWhereUniqueInput | AgendamentoPacienteWhereUniqueInput[]
    delete?: AgendamentoPacienteWhereUniqueInput | AgendamentoPacienteWhereUniqueInput[]
    connect?: AgendamentoPacienteWhereUniqueInput | AgendamentoPacienteWhereUniqueInput[]
    update?: AgendamentoPacienteUpdateWithWhereUniqueWithoutAgendamentoInput | AgendamentoPacienteUpdateWithWhereUniqueWithoutAgendamentoInput[]
    updateMany?: AgendamentoPacienteUpdateManyWithWhereWithoutAgendamentoInput | AgendamentoPacienteUpdateManyWithWhereWithoutAgendamentoInput[]
    deleteMany?: AgendamentoPacienteScalarWhereInput | AgendamentoPacienteScalarWhereInput[]
  }

  export type AgendamentoCreateNestedOneWithoutPacientesInput = {
    create?: XOR<AgendamentoCreateWithoutPacientesInput, AgendamentoUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: AgendamentoCreateOrConnectWithoutPacientesInput
    connect?: AgendamentoWhereUniqueInput
  }

  export type PacienteCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<PacienteCreateWithoutAgendamentosInput, PacienteUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutAgendamentosInput
    connect?: PacienteWhereUniqueInput
  }

  export type AgendamentoUpdateOneRequiredWithoutPacientesNestedInput = {
    create?: XOR<AgendamentoCreateWithoutPacientesInput, AgendamentoUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: AgendamentoCreateOrConnectWithoutPacientesInput
    upsert?: AgendamentoUpsertWithoutPacientesInput
    connect?: AgendamentoWhereUniqueInput
    update?: XOR<XOR<AgendamentoUpdateToOneWithWhereWithoutPacientesInput, AgendamentoUpdateWithoutPacientesInput>, AgendamentoUncheckedUpdateWithoutPacientesInput>
  }

  export type PacienteUpdateOneRequiredWithoutAgendamentosNestedInput = {
    create?: XOR<PacienteCreateWithoutAgendamentosInput, PacienteUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutAgendamentosInput
    upsert?: PacienteUpsertWithoutAgendamentosInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutAgendamentosInput, PacienteUpdateWithoutAgendamentosInput>, PacienteUncheckedUpdateWithoutAgendamentosInput>
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

  export type NestedEnumPapelFilter<$PrismaModel = never> = {
    equals?: $Enums.Papel | EnumPapelFieldRefInput<$PrismaModel>
    in?: $Enums.Papel[] | ListEnumPapelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Papel[] | ListEnumPapelFieldRefInput<$PrismaModel>
    not?: NestedEnumPapelFilter<$PrismaModel> | $Enums.Papel
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumPapelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Papel | EnumPapelFieldRefInput<$PrismaModel>
    in?: $Enums.Papel[] | ListEnumPapelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Papel[] | ListEnumPapelFieldRefInput<$PrismaModel>
    not?: NestedEnumPapelWithAggregatesFilter<$PrismaModel> | $Enums.Papel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPapelFilter<$PrismaModel>
    _max?: NestedEnumPapelFilter<$PrismaModel>
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

  export type NestedEnumTipoEspecialidadeFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEspecialidade | EnumTipoEspecialidadeFieldRefInput<$PrismaModel>
    in?: $Enums.TipoEspecialidade[] | ListEnumTipoEspecialidadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoEspecialidade[] | ListEnumTipoEspecialidadeFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoEspecialidadeFilter<$PrismaModel> | $Enums.TipoEspecialidade
  }

  export type NestedEnumTipoEspecialidadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEspecialidade | EnumTipoEspecialidadeFieldRefInput<$PrismaModel>
    in?: $Enums.TipoEspecialidade[] | ListEnumTipoEspecialidadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoEspecialidade[] | ListEnumTipoEspecialidadeFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoEspecialidadeWithAggregatesFilter<$PrismaModel> | $Enums.TipoEspecialidade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoEspecialidadeFilter<$PrismaModel>
    _max?: NestedEnumTipoEspecialidadeFilter<$PrismaModel>
  }

  export type NestedEnumDiaSemanaFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaSemana | EnumDiaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaSemanaFilter<$PrismaModel> | $Enums.DiaSemana
  }

  export type NestedEnumDiaSemanaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiaSemana | EnumDiaSemanaFieldRefInput<$PrismaModel>
    in?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiaSemana[] | ListEnumDiaSemanaFieldRefInput<$PrismaModel>
    not?: NestedEnumDiaSemanaWithAggregatesFilter<$PrismaModel> | $Enums.DiaSemana
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiaSemanaFilter<$PrismaModel>
    _max?: NestedEnumDiaSemanaFilter<$PrismaModel>
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

  export type NestedEnumTipoAgendamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAgendamento | EnumTipoAgendamentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAgendamento[] | ListEnumTipoAgendamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAgendamento[] | ListEnumTipoAgendamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAgendamentoFilter<$PrismaModel> | $Enums.TipoAgendamento
  }

  export type NestedEnumStatusAgendamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAgendamento | EnumStatusAgendamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAgendamento[] | ListEnumStatusAgendamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAgendamento[] | ListEnumStatusAgendamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAgendamentoFilter<$PrismaModel> | $Enums.StatusAgendamento
  }

  export type NestedEnumOrigemAgendamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.OrigemAgendamento | EnumOrigemAgendamentoFieldRefInput<$PrismaModel>
    in?: $Enums.OrigemAgendamento[] | ListEnumOrigemAgendamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrigemAgendamento[] | ListEnumOrigemAgendamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumOrigemAgendamentoFilter<$PrismaModel> | $Enums.OrigemAgendamento
  }

  export type NestedEnumTipoAgendamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAgendamento | EnumTipoAgendamentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoAgendamento[] | ListEnumTipoAgendamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoAgendamento[] | ListEnumTipoAgendamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoAgendamentoWithAggregatesFilter<$PrismaModel> | $Enums.TipoAgendamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoAgendamentoFilter<$PrismaModel>
    _max?: NestedEnumTipoAgendamentoFilter<$PrismaModel>
  }

  export type NestedEnumStatusAgendamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAgendamento | EnumStatusAgendamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAgendamento[] | ListEnumStatusAgendamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAgendamento[] | ListEnumStatusAgendamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAgendamentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusAgendamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAgendamentoFilter<$PrismaModel>
    _max?: NestedEnumStatusAgendamentoFilter<$PrismaModel>
  }

  export type NestedEnumOrigemAgendamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrigemAgendamento | EnumOrigemAgendamentoFieldRefInput<$PrismaModel>
    in?: $Enums.OrigemAgendamento[] | ListEnumOrigemAgendamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrigemAgendamento[] | ListEnumOrigemAgendamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumOrigemAgendamentoWithAggregatesFilter<$PrismaModel> | $Enums.OrigemAgendamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrigemAgendamentoFilter<$PrismaModel>
    _max?: NestedEnumOrigemAgendamentoFilter<$PrismaModel>
  }

  export type ProfissionalCreateWithoutUserInput = {
    id?: string
    nome: string
    registro?: string | null
    telefone?: string | null
    email?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    especialidade: EspecialidadeCreateNestedOneWithoutProfissionaisInput
    horarios?: HorarioAtendimentoCreateNestedManyWithoutProfissionalInput
    agendamentos?: AgendamentoCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalUncheckedCreateWithoutUserInput = {
    id?: string
    nome: string
    registro?: string | null
    especialidadeId: string
    telefone?: string | null
    email?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    horarios?: HorarioAtendimentoUncheckedCreateNestedManyWithoutProfissionalInput
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutProfissionalInput
  }

  export type ProfissionalCreateOrConnectWithoutUserInput = {
    where: ProfissionalWhereUniqueInput
    create: XOR<ProfissionalCreateWithoutUserInput, ProfissionalUncheckedCreateWithoutUserInput>
  }

  export type ProfissionalUpsertWithoutUserInput = {
    update: XOR<ProfissionalUpdateWithoutUserInput, ProfissionalUncheckedUpdateWithoutUserInput>
    create: XOR<ProfissionalCreateWithoutUserInput, ProfissionalUncheckedCreateWithoutUserInput>
    where?: ProfissionalWhereInput
  }

  export type ProfissionalUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfissionalWhereInput
    data: XOR<ProfissionalUpdateWithoutUserInput, ProfissionalUncheckedUpdateWithoutUserInput>
  }

  export type ProfissionalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    registro?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    especialidade?: EspecialidadeUpdateOneRequiredWithoutProfissionaisNestedInput
    horarios?: HorarioAtendimentoUpdateManyWithoutProfissionalNestedInput
    agendamentos?: AgendamentoUpdateManyWithoutProfissionalNestedInput
  }

  export type ProfissionalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    registro?: NullableStringFieldUpdateOperationsInput | string | null
    especialidadeId?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    horarios?: HorarioAtendimentoUncheckedUpdateManyWithoutProfissionalNestedInput
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutProfissionalNestedInput
  }

  export type PacienteCreateWithoutConvenioInput = {
    id?: string
    nome: string
    dataNasc?: Date | string | null
    cpf?: string | null
    telefone: string
    telefone2?: string | null
    email?: string | null
    cep?: string | null
    logradouro?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
    diagnostico?: string | null
    observacoes?: string | null
    perfil?: string | null
    nomeResponsavel?: string | null
    telefoneResponsavel?: string | null
    relacaoResponsavel?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    especialidades?: PacienteEspecialidadeCreateNestedManyWithoutPacienteInput
    agendamentos?: AgendamentoPacienteCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutConvenioInput = {
    id?: string
    nome: string
    dataNasc?: Date | string | null
    cpf?: string | null
    telefone: string
    telefone2?: string | null
    email?: string | null
    cep?: string | null
    logradouro?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
    diagnostico?: string | null
    observacoes?: string | null
    perfil?: string | null
    nomeResponsavel?: string | null
    telefoneResponsavel?: string | null
    relacaoResponsavel?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    especialidades?: PacienteEspecialidadeUncheckedCreateNestedManyWithoutPacienteInput
    agendamentos?: AgendamentoPacienteUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutConvenioInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutConvenioInput, PacienteUncheckedCreateWithoutConvenioInput>
  }

  export type PacienteCreateManyConvenioInputEnvelope = {
    data: PacienteCreateManyConvenioInput | PacienteCreateManyConvenioInput[]
    skipDuplicates?: boolean
  }

  export type PacienteUpsertWithWhereUniqueWithoutConvenioInput = {
    where: PacienteWhereUniqueInput
    update: XOR<PacienteUpdateWithoutConvenioInput, PacienteUncheckedUpdateWithoutConvenioInput>
    create: XOR<PacienteCreateWithoutConvenioInput, PacienteUncheckedCreateWithoutConvenioInput>
  }

  export type PacienteUpdateWithWhereUniqueWithoutConvenioInput = {
    where: PacienteWhereUniqueInput
    data: XOR<PacienteUpdateWithoutConvenioInput, PacienteUncheckedUpdateWithoutConvenioInput>
  }

  export type PacienteUpdateManyWithWhereWithoutConvenioInput = {
    where: PacienteScalarWhereInput
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyWithoutConvenioInput>
  }

  export type PacienteScalarWhereInput = {
    AND?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
    OR?: PacienteScalarWhereInput[]
    NOT?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
    id?: StringFilter<"Paciente"> | string
    nome?: StringFilter<"Paciente"> | string
    dataNasc?: DateTimeNullableFilter<"Paciente"> | Date | string | null
    cpf?: StringNullableFilter<"Paciente"> | string | null
    telefone?: StringFilter<"Paciente"> | string
    telefone2?: StringNullableFilter<"Paciente"> | string | null
    email?: StringNullableFilter<"Paciente"> | string | null
    cep?: StringNullableFilter<"Paciente"> | string | null
    logradouro?: StringNullableFilter<"Paciente"> | string | null
    numero?: StringNullableFilter<"Paciente"> | string | null
    complemento?: StringNullableFilter<"Paciente"> | string | null
    bairro?: StringNullableFilter<"Paciente"> | string | null
    cidade?: StringNullableFilter<"Paciente"> | string | null
    estado?: StringNullableFilter<"Paciente"> | string | null
    diagnostico?: StringNullableFilter<"Paciente"> | string | null
    observacoes?: StringNullableFilter<"Paciente"> | string | null
    perfil?: StringNullableFilter<"Paciente"> | string | null
    nomeResponsavel?: StringNullableFilter<"Paciente"> | string | null
    telefoneResponsavel?: StringNullableFilter<"Paciente"> | string | null
    relacaoResponsavel?: StringNullableFilter<"Paciente"> | string | null
    convenioId?: StringNullableFilter<"Paciente"> | string | null
    ativo?: BoolFilter<"Paciente"> | boolean
    createdAt?: DateTimeFilter<"Paciente"> | Date | string
    updatedAt?: DateTimeFilter<"Paciente"> | Date | string
  }

  export type ConvenioCreateWithoutPacientesInput = {
    id?: string
    nome: string
    descricao?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConvenioUncheckedCreateWithoutPacientesInput = {
    id?: string
    nome: string
    descricao?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConvenioCreateOrConnectWithoutPacientesInput = {
    where: ConvenioWhereUniqueInput
    create: XOR<ConvenioCreateWithoutPacientesInput, ConvenioUncheckedCreateWithoutPacientesInput>
  }

  export type PacienteEspecialidadeCreateWithoutPacienteInput = {
    createdAt?: Date | string
    especialidade: EspecialidadeCreateNestedOneWithoutPacientesInput
  }

  export type PacienteEspecialidadeUncheckedCreateWithoutPacienteInput = {
    especialidadeId: string
    createdAt?: Date | string
  }

  export type PacienteEspecialidadeCreateOrConnectWithoutPacienteInput = {
    where: PacienteEspecialidadeWhereUniqueInput
    create: XOR<PacienteEspecialidadeCreateWithoutPacienteInput, PacienteEspecialidadeUncheckedCreateWithoutPacienteInput>
  }

  export type PacienteEspecialidadeCreateManyPacienteInputEnvelope = {
    data: PacienteEspecialidadeCreateManyPacienteInput | PacienteEspecialidadeCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type AgendamentoPacienteCreateWithoutPacienteInput = {
    agendamento: AgendamentoCreateNestedOneWithoutPacientesInput
  }

  export type AgendamentoPacienteUncheckedCreateWithoutPacienteInput = {
    agendamentoId: string
  }

  export type AgendamentoPacienteCreateOrConnectWithoutPacienteInput = {
    where: AgendamentoPacienteWhereUniqueInput
    create: XOR<AgendamentoPacienteCreateWithoutPacienteInput, AgendamentoPacienteUncheckedCreateWithoutPacienteInput>
  }

  export type AgendamentoPacienteCreateManyPacienteInputEnvelope = {
    data: AgendamentoPacienteCreateManyPacienteInput | AgendamentoPacienteCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type ConvenioUpsertWithoutPacientesInput = {
    update: XOR<ConvenioUpdateWithoutPacientesInput, ConvenioUncheckedUpdateWithoutPacientesInput>
    create: XOR<ConvenioCreateWithoutPacientesInput, ConvenioUncheckedCreateWithoutPacientesInput>
    where?: ConvenioWhereInput
  }

  export type ConvenioUpdateToOneWithWhereWithoutPacientesInput = {
    where?: ConvenioWhereInput
    data: XOR<ConvenioUpdateWithoutPacientesInput, ConvenioUncheckedUpdateWithoutPacientesInput>
  }

  export type ConvenioUpdateWithoutPacientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConvenioUncheckedUpdateWithoutPacientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteEspecialidadeUpsertWithWhereUniqueWithoutPacienteInput = {
    where: PacienteEspecialidadeWhereUniqueInput
    update: XOR<PacienteEspecialidadeUpdateWithoutPacienteInput, PacienteEspecialidadeUncheckedUpdateWithoutPacienteInput>
    create: XOR<PacienteEspecialidadeCreateWithoutPacienteInput, PacienteEspecialidadeUncheckedCreateWithoutPacienteInput>
  }

  export type PacienteEspecialidadeUpdateWithWhereUniqueWithoutPacienteInput = {
    where: PacienteEspecialidadeWhereUniqueInput
    data: XOR<PacienteEspecialidadeUpdateWithoutPacienteInput, PacienteEspecialidadeUncheckedUpdateWithoutPacienteInput>
  }

  export type PacienteEspecialidadeUpdateManyWithWhereWithoutPacienteInput = {
    where: PacienteEspecialidadeScalarWhereInput
    data: XOR<PacienteEspecialidadeUpdateManyMutationInput, PacienteEspecialidadeUncheckedUpdateManyWithoutPacienteInput>
  }

  export type PacienteEspecialidadeScalarWhereInput = {
    AND?: PacienteEspecialidadeScalarWhereInput | PacienteEspecialidadeScalarWhereInput[]
    OR?: PacienteEspecialidadeScalarWhereInput[]
    NOT?: PacienteEspecialidadeScalarWhereInput | PacienteEspecialidadeScalarWhereInput[]
    pacienteId?: StringFilter<"PacienteEspecialidade"> | string
    especialidadeId?: StringFilter<"PacienteEspecialidade"> | string
    createdAt?: DateTimeFilter<"PacienteEspecialidade"> | Date | string
  }

  export type AgendamentoPacienteUpsertWithWhereUniqueWithoutPacienteInput = {
    where: AgendamentoPacienteWhereUniqueInput
    update: XOR<AgendamentoPacienteUpdateWithoutPacienteInput, AgendamentoPacienteUncheckedUpdateWithoutPacienteInput>
    create: XOR<AgendamentoPacienteCreateWithoutPacienteInput, AgendamentoPacienteUncheckedCreateWithoutPacienteInput>
  }

  export type AgendamentoPacienteUpdateWithWhereUniqueWithoutPacienteInput = {
    where: AgendamentoPacienteWhereUniqueInput
    data: XOR<AgendamentoPacienteUpdateWithoutPacienteInput, AgendamentoPacienteUncheckedUpdateWithoutPacienteInput>
  }

  export type AgendamentoPacienteUpdateManyWithWhereWithoutPacienteInput = {
    where: AgendamentoPacienteScalarWhereInput
    data: XOR<AgendamentoPacienteUpdateManyMutationInput, AgendamentoPacienteUncheckedUpdateManyWithoutPacienteInput>
  }

  export type AgendamentoPacienteScalarWhereInput = {
    AND?: AgendamentoPacienteScalarWhereInput | AgendamentoPacienteScalarWhereInput[]
    OR?: AgendamentoPacienteScalarWhereInput[]
    NOT?: AgendamentoPacienteScalarWhereInput | AgendamentoPacienteScalarWhereInput[]
    agendamentoId?: StringFilter<"AgendamentoPaciente"> | string
    pacienteId?: StringFilter<"AgendamentoPaciente"> | string
  }

  export type ProfissionalCreateWithoutEspecialidadeInput = {
    id?: string
    nome: string
    registro?: string | null
    telefone?: string | null
    email?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    horarios?: HorarioAtendimentoCreateNestedManyWithoutProfissionalInput
    agendamentos?: AgendamentoCreateNestedManyWithoutProfissionalInput
    user?: UserCreateNestedOneWithoutProfissionalInput
  }

  export type ProfissionalUncheckedCreateWithoutEspecialidadeInput = {
    id?: string
    nome: string
    registro?: string | null
    telefone?: string | null
    email?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    horarios?: HorarioAtendimentoUncheckedCreateNestedManyWithoutProfissionalInput
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutProfissionalInput
    user?: UserUncheckedCreateNestedOneWithoutProfissionalInput
  }

  export type ProfissionalCreateOrConnectWithoutEspecialidadeInput = {
    where: ProfissionalWhereUniqueInput
    create: XOR<ProfissionalCreateWithoutEspecialidadeInput, ProfissionalUncheckedCreateWithoutEspecialidadeInput>
  }

  export type ProfissionalCreateManyEspecialidadeInputEnvelope = {
    data: ProfissionalCreateManyEspecialidadeInput | ProfissionalCreateManyEspecialidadeInput[]
    skipDuplicates?: boolean
  }

  export type AgendamentoCreateWithoutEspecialidadeInput = {
    id?: string
    tipo: $Enums.TipoAgendamento
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    numeroSessoes?: number
    status?: $Enums.StatusAgendamento
    observacoes?: string | null
    origem?: $Enums.OrigemAgendamento
    recorrenciaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profissional: ProfissionalCreateNestedOneWithoutAgendamentosInput
    pacientes?: AgendamentoPacienteCreateNestedManyWithoutAgendamentoInput
  }

  export type AgendamentoUncheckedCreateWithoutEspecialidadeInput = {
    id?: string
    tipo: $Enums.TipoAgendamento
    profissionalId: string
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    numeroSessoes?: number
    status?: $Enums.StatusAgendamento
    observacoes?: string | null
    origem?: $Enums.OrigemAgendamento
    recorrenciaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pacientes?: AgendamentoPacienteUncheckedCreateNestedManyWithoutAgendamentoInput
  }

  export type AgendamentoCreateOrConnectWithoutEspecialidadeInput = {
    where: AgendamentoWhereUniqueInput
    create: XOR<AgendamentoCreateWithoutEspecialidadeInput, AgendamentoUncheckedCreateWithoutEspecialidadeInput>
  }

  export type AgendamentoCreateManyEspecialidadeInputEnvelope = {
    data: AgendamentoCreateManyEspecialidadeInput | AgendamentoCreateManyEspecialidadeInput[]
    skipDuplicates?: boolean
  }

  export type PacienteEspecialidadeCreateWithoutEspecialidadeInput = {
    createdAt?: Date | string
    paciente: PacienteCreateNestedOneWithoutEspecialidadesInput
  }

  export type PacienteEspecialidadeUncheckedCreateWithoutEspecialidadeInput = {
    pacienteId: string
    createdAt?: Date | string
  }

  export type PacienteEspecialidadeCreateOrConnectWithoutEspecialidadeInput = {
    where: PacienteEspecialidadeWhereUniqueInput
    create: XOR<PacienteEspecialidadeCreateWithoutEspecialidadeInput, PacienteEspecialidadeUncheckedCreateWithoutEspecialidadeInput>
  }

  export type PacienteEspecialidadeCreateManyEspecialidadeInputEnvelope = {
    data: PacienteEspecialidadeCreateManyEspecialidadeInput | PacienteEspecialidadeCreateManyEspecialidadeInput[]
    skipDuplicates?: boolean
  }

  export type ProfissionalUpsertWithWhereUniqueWithoutEspecialidadeInput = {
    where: ProfissionalWhereUniqueInput
    update: XOR<ProfissionalUpdateWithoutEspecialidadeInput, ProfissionalUncheckedUpdateWithoutEspecialidadeInput>
    create: XOR<ProfissionalCreateWithoutEspecialidadeInput, ProfissionalUncheckedCreateWithoutEspecialidadeInput>
  }

  export type ProfissionalUpdateWithWhereUniqueWithoutEspecialidadeInput = {
    where: ProfissionalWhereUniqueInput
    data: XOR<ProfissionalUpdateWithoutEspecialidadeInput, ProfissionalUncheckedUpdateWithoutEspecialidadeInput>
  }

  export type ProfissionalUpdateManyWithWhereWithoutEspecialidadeInput = {
    where: ProfissionalScalarWhereInput
    data: XOR<ProfissionalUpdateManyMutationInput, ProfissionalUncheckedUpdateManyWithoutEspecialidadeInput>
  }

  export type ProfissionalScalarWhereInput = {
    AND?: ProfissionalScalarWhereInput | ProfissionalScalarWhereInput[]
    OR?: ProfissionalScalarWhereInput[]
    NOT?: ProfissionalScalarWhereInput | ProfissionalScalarWhereInput[]
    id?: StringFilter<"Profissional"> | string
    nome?: StringFilter<"Profissional"> | string
    registro?: StringNullableFilter<"Profissional"> | string | null
    especialidadeId?: StringFilter<"Profissional"> | string
    telefone?: StringNullableFilter<"Profissional"> | string | null
    email?: StringNullableFilter<"Profissional"> | string | null
    ativo?: BoolFilter<"Profissional"> | boolean
    createdAt?: DateTimeFilter<"Profissional"> | Date | string
    updatedAt?: DateTimeFilter<"Profissional"> | Date | string
  }

  export type AgendamentoUpsertWithWhereUniqueWithoutEspecialidadeInput = {
    where: AgendamentoWhereUniqueInput
    update: XOR<AgendamentoUpdateWithoutEspecialidadeInput, AgendamentoUncheckedUpdateWithoutEspecialidadeInput>
    create: XOR<AgendamentoCreateWithoutEspecialidadeInput, AgendamentoUncheckedCreateWithoutEspecialidadeInput>
  }

  export type AgendamentoUpdateWithWhereUniqueWithoutEspecialidadeInput = {
    where: AgendamentoWhereUniqueInput
    data: XOR<AgendamentoUpdateWithoutEspecialidadeInput, AgendamentoUncheckedUpdateWithoutEspecialidadeInput>
  }

  export type AgendamentoUpdateManyWithWhereWithoutEspecialidadeInput = {
    where: AgendamentoScalarWhereInput
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyWithoutEspecialidadeInput>
  }

  export type AgendamentoScalarWhereInput = {
    AND?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
    OR?: AgendamentoScalarWhereInput[]
    NOT?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
    id?: StringFilter<"Agendamento"> | string
    tipo?: EnumTipoAgendamentoFilter<"Agendamento"> | $Enums.TipoAgendamento
    profissionalId?: StringFilter<"Agendamento"> | string
    especialidadeId?: StringFilter<"Agendamento"> | string
    dataHoraInicio?: DateTimeFilter<"Agendamento"> | Date | string
    dataHoraFim?: DateTimeFilter<"Agendamento"> | Date | string
    numeroSessoes?: IntFilter<"Agendamento"> | number
    status?: EnumStatusAgendamentoFilter<"Agendamento"> | $Enums.StatusAgendamento
    observacoes?: StringNullableFilter<"Agendamento"> | string | null
    origem?: EnumOrigemAgendamentoFilter<"Agendamento"> | $Enums.OrigemAgendamento
    recorrenciaId?: StringNullableFilter<"Agendamento"> | string | null
    createdAt?: DateTimeFilter<"Agendamento"> | Date | string
    updatedAt?: DateTimeFilter<"Agendamento"> | Date | string
  }

  export type PacienteEspecialidadeUpsertWithWhereUniqueWithoutEspecialidadeInput = {
    where: PacienteEspecialidadeWhereUniqueInput
    update: XOR<PacienteEspecialidadeUpdateWithoutEspecialidadeInput, PacienteEspecialidadeUncheckedUpdateWithoutEspecialidadeInput>
    create: XOR<PacienteEspecialidadeCreateWithoutEspecialidadeInput, PacienteEspecialidadeUncheckedCreateWithoutEspecialidadeInput>
  }

  export type PacienteEspecialidadeUpdateWithWhereUniqueWithoutEspecialidadeInput = {
    where: PacienteEspecialidadeWhereUniqueInput
    data: XOR<PacienteEspecialidadeUpdateWithoutEspecialidadeInput, PacienteEspecialidadeUncheckedUpdateWithoutEspecialidadeInput>
  }

  export type PacienteEspecialidadeUpdateManyWithWhereWithoutEspecialidadeInput = {
    where: PacienteEspecialidadeScalarWhereInput
    data: XOR<PacienteEspecialidadeUpdateManyMutationInput, PacienteEspecialidadeUncheckedUpdateManyWithoutEspecialidadeInput>
  }

  export type PacienteCreateWithoutEspecialidadesInput = {
    id?: string
    nome: string
    dataNasc?: Date | string | null
    cpf?: string | null
    telefone: string
    telefone2?: string | null
    email?: string | null
    cep?: string | null
    logradouro?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
    diagnostico?: string | null
    observacoes?: string | null
    perfil?: string | null
    nomeResponsavel?: string | null
    telefoneResponsavel?: string | null
    relacaoResponsavel?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    convenio?: ConvenioCreateNestedOneWithoutPacientesInput
    agendamentos?: AgendamentoPacienteCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutEspecialidadesInput = {
    id?: string
    nome: string
    dataNasc?: Date | string | null
    cpf?: string | null
    telefone: string
    telefone2?: string | null
    email?: string | null
    cep?: string | null
    logradouro?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
    diagnostico?: string | null
    observacoes?: string | null
    perfil?: string | null
    nomeResponsavel?: string | null
    telefoneResponsavel?: string | null
    relacaoResponsavel?: string | null
    convenioId?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    agendamentos?: AgendamentoPacienteUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutEspecialidadesInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutEspecialidadesInput, PacienteUncheckedCreateWithoutEspecialidadesInput>
  }

  export type EspecialidadeCreateWithoutPacientesInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoEspecialidade
    descricao?: string | null
    cor?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profissionais?: ProfissionalCreateNestedManyWithoutEspecialidadeInput
    agendamentos?: AgendamentoCreateNestedManyWithoutEspecialidadeInput
  }

  export type EspecialidadeUncheckedCreateWithoutPacientesInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoEspecialidade
    descricao?: string | null
    cor?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profissionais?: ProfissionalUncheckedCreateNestedManyWithoutEspecialidadeInput
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutEspecialidadeInput
  }

  export type EspecialidadeCreateOrConnectWithoutPacientesInput = {
    where: EspecialidadeWhereUniqueInput
    create: XOR<EspecialidadeCreateWithoutPacientesInput, EspecialidadeUncheckedCreateWithoutPacientesInput>
  }

  export type PacienteUpsertWithoutEspecialidadesInput = {
    update: XOR<PacienteUpdateWithoutEspecialidadesInput, PacienteUncheckedUpdateWithoutEspecialidadesInput>
    create: XOR<PacienteCreateWithoutEspecialidadesInput, PacienteUncheckedCreateWithoutEspecialidadesInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutEspecialidadesInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutEspecialidadesInput, PacienteUncheckedUpdateWithoutEspecialidadesInput>
  }

  export type PacienteUpdateWithoutEspecialidadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataNasc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    telefone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    perfil?: NullableStringFieldUpdateOperationsInput | string | null
    nomeResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    relacaoResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    convenio?: ConvenioUpdateOneWithoutPacientesNestedInput
    agendamentos?: AgendamentoPacienteUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutEspecialidadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataNasc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    telefone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    perfil?: NullableStringFieldUpdateOperationsInput | string | null
    nomeResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    relacaoResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    convenioId?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agendamentos?: AgendamentoPacienteUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type EspecialidadeUpsertWithoutPacientesInput = {
    update: XOR<EspecialidadeUpdateWithoutPacientesInput, EspecialidadeUncheckedUpdateWithoutPacientesInput>
    create: XOR<EspecialidadeCreateWithoutPacientesInput, EspecialidadeUncheckedCreateWithoutPacientesInput>
    where?: EspecialidadeWhereInput
  }

  export type EspecialidadeUpdateToOneWithWhereWithoutPacientesInput = {
    where?: EspecialidadeWhereInput
    data: XOR<EspecialidadeUpdateWithoutPacientesInput, EspecialidadeUncheckedUpdateWithoutPacientesInput>
  }

  export type EspecialidadeUpdateWithoutPacientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEspecialidadeFieldUpdateOperationsInput | $Enums.TipoEspecialidade
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profissionais?: ProfissionalUpdateManyWithoutEspecialidadeNestedInput
    agendamentos?: AgendamentoUpdateManyWithoutEspecialidadeNestedInput
  }

  export type EspecialidadeUncheckedUpdateWithoutPacientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEspecialidadeFieldUpdateOperationsInput | $Enums.TipoEspecialidade
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profissionais?: ProfissionalUncheckedUpdateManyWithoutEspecialidadeNestedInput
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutEspecialidadeNestedInput
  }

  export type EspecialidadeCreateWithoutProfissionaisInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoEspecialidade
    descricao?: string | null
    cor?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    agendamentos?: AgendamentoCreateNestedManyWithoutEspecialidadeInput
    pacientes?: PacienteEspecialidadeCreateNestedManyWithoutEspecialidadeInput
  }

  export type EspecialidadeUncheckedCreateWithoutProfissionaisInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoEspecialidade
    descricao?: string | null
    cor?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutEspecialidadeInput
    pacientes?: PacienteEspecialidadeUncheckedCreateNestedManyWithoutEspecialidadeInput
  }

  export type EspecialidadeCreateOrConnectWithoutProfissionaisInput = {
    where: EspecialidadeWhereUniqueInput
    create: XOR<EspecialidadeCreateWithoutProfissionaisInput, EspecialidadeUncheckedCreateWithoutProfissionaisInput>
  }

  export type HorarioAtendimentoCreateWithoutProfissionalInput = {
    id?: string
    diaSemana: $Enums.DiaSemana
    horaInicio: string
    duracaoSessao: number
    intervaloSessoes?: number
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorarioAtendimentoUncheckedCreateWithoutProfissionalInput = {
    id?: string
    diaSemana: $Enums.DiaSemana
    horaInicio: string
    duracaoSessao: number
    intervaloSessoes?: number
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorarioAtendimentoCreateOrConnectWithoutProfissionalInput = {
    where: HorarioAtendimentoWhereUniqueInput
    create: XOR<HorarioAtendimentoCreateWithoutProfissionalInput, HorarioAtendimentoUncheckedCreateWithoutProfissionalInput>
  }

  export type HorarioAtendimentoCreateManyProfissionalInputEnvelope = {
    data: HorarioAtendimentoCreateManyProfissionalInput | HorarioAtendimentoCreateManyProfissionalInput[]
    skipDuplicates?: boolean
  }

  export type AgendamentoCreateWithoutProfissionalInput = {
    id?: string
    tipo: $Enums.TipoAgendamento
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    numeroSessoes?: number
    status?: $Enums.StatusAgendamento
    observacoes?: string | null
    origem?: $Enums.OrigemAgendamento
    recorrenciaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    especialidade: EspecialidadeCreateNestedOneWithoutAgendamentosInput
    pacientes?: AgendamentoPacienteCreateNestedManyWithoutAgendamentoInput
  }

  export type AgendamentoUncheckedCreateWithoutProfissionalInput = {
    id?: string
    tipo: $Enums.TipoAgendamento
    especialidadeId: string
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    numeroSessoes?: number
    status?: $Enums.StatusAgendamento
    observacoes?: string | null
    origem?: $Enums.OrigemAgendamento
    recorrenciaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pacientes?: AgendamentoPacienteUncheckedCreateNestedManyWithoutAgendamentoInput
  }

  export type AgendamentoCreateOrConnectWithoutProfissionalInput = {
    where: AgendamentoWhereUniqueInput
    create: XOR<AgendamentoCreateWithoutProfissionalInput, AgendamentoUncheckedCreateWithoutProfissionalInput>
  }

  export type AgendamentoCreateManyProfissionalInputEnvelope = {
    data: AgendamentoCreateManyProfissionalInput | AgendamentoCreateManyProfissionalInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutProfissionalInput = {
    id?: string
    nome: string
    email: string
    senha: string
    papel: $Enums.Papel
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutProfissionalInput = {
    id?: string
    nome: string
    email: string
    senha: string
    papel: $Enums.Papel
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutProfissionalInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfissionalInput, UserUncheckedCreateWithoutProfissionalInput>
  }

  export type EspecialidadeUpsertWithoutProfissionaisInput = {
    update: XOR<EspecialidadeUpdateWithoutProfissionaisInput, EspecialidadeUncheckedUpdateWithoutProfissionaisInput>
    create: XOR<EspecialidadeCreateWithoutProfissionaisInput, EspecialidadeUncheckedCreateWithoutProfissionaisInput>
    where?: EspecialidadeWhereInput
  }

  export type EspecialidadeUpdateToOneWithWhereWithoutProfissionaisInput = {
    where?: EspecialidadeWhereInput
    data: XOR<EspecialidadeUpdateWithoutProfissionaisInput, EspecialidadeUncheckedUpdateWithoutProfissionaisInput>
  }

  export type EspecialidadeUpdateWithoutProfissionaisInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEspecialidadeFieldUpdateOperationsInput | $Enums.TipoEspecialidade
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agendamentos?: AgendamentoUpdateManyWithoutEspecialidadeNestedInput
    pacientes?: PacienteEspecialidadeUpdateManyWithoutEspecialidadeNestedInput
  }

  export type EspecialidadeUncheckedUpdateWithoutProfissionaisInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEspecialidadeFieldUpdateOperationsInput | $Enums.TipoEspecialidade
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutEspecialidadeNestedInput
    pacientes?: PacienteEspecialidadeUncheckedUpdateManyWithoutEspecialidadeNestedInput
  }

  export type HorarioAtendimentoUpsertWithWhereUniqueWithoutProfissionalInput = {
    where: HorarioAtendimentoWhereUniqueInput
    update: XOR<HorarioAtendimentoUpdateWithoutProfissionalInput, HorarioAtendimentoUncheckedUpdateWithoutProfissionalInput>
    create: XOR<HorarioAtendimentoCreateWithoutProfissionalInput, HorarioAtendimentoUncheckedCreateWithoutProfissionalInput>
  }

  export type HorarioAtendimentoUpdateWithWhereUniqueWithoutProfissionalInput = {
    where: HorarioAtendimentoWhereUniqueInput
    data: XOR<HorarioAtendimentoUpdateWithoutProfissionalInput, HorarioAtendimentoUncheckedUpdateWithoutProfissionalInput>
  }

  export type HorarioAtendimentoUpdateManyWithWhereWithoutProfissionalInput = {
    where: HorarioAtendimentoScalarWhereInput
    data: XOR<HorarioAtendimentoUpdateManyMutationInput, HorarioAtendimentoUncheckedUpdateManyWithoutProfissionalInput>
  }

  export type HorarioAtendimentoScalarWhereInput = {
    AND?: HorarioAtendimentoScalarWhereInput | HorarioAtendimentoScalarWhereInput[]
    OR?: HorarioAtendimentoScalarWhereInput[]
    NOT?: HorarioAtendimentoScalarWhereInput | HorarioAtendimentoScalarWhereInput[]
    id?: StringFilter<"HorarioAtendimento"> | string
    profissionalId?: StringFilter<"HorarioAtendimento"> | string
    diaSemana?: EnumDiaSemanaFilter<"HorarioAtendimento"> | $Enums.DiaSemana
    horaInicio?: StringFilter<"HorarioAtendimento"> | string
    duracaoSessao?: IntFilter<"HorarioAtendimento"> | number
    intervaloSessoes?: IntFilter<"HorarioAtendimento"> | number
    ativo?: BoolFilter<"HorarioAtendimento"> | boolean
    createdAt?: DateTimeFilter<"HorarioAtendimento"> | Date | string
    updatedAt?: DateTimeFilter<"HorarioAtendimento"> | Date | string
  }

  export type AgendamentoUpsertWithWhereUniqueWithoutProfissionalInput = {
    where: AgendamentoWhereUniqueInput
    update: XOR<AgendamentoUpdateWithoutProfissionalInput, AgendamentoUncheckedUpdateWithoutProfissionalInput>
    create: XOR<AgendamentoCreateWithoutProfissionalInput, AgendamentoUncheckedCreateWithoutProfissionalInput>
  }

  export type AgendamentoUpdateWithWhereUniqueWithoutProfissionalInput = {
    where: AgendamentoWhereUniqueInput
    data: XOR<AgendamentoUpdateWithoutProfissionalInput, AgendamentoUncheckedUpdateWithoutProfissionalInput>
  }

  export type AgendamentoUpdateManyWithWhereWithoutProfissionalInput = {
    where: AgendamentoScalarWhereInput
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyWithoutProfissionalInput>
  }

  export type UserUpsertWithoutProfissionalInput = {
    update: XOR<UserUpdateWithoutProfissionalInput, UserUncheckedUpdateWithoutProfissionalInput>
    create: XOR<UserCreateWithoutProfissionalInput, UserUncheckedCreateWithoutProfissionalInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfissionalInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfissionalInput, UserUncheckedUpdateWithoutProfissionalInput>
  }

  export type UserUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    papel?: EnumPapelFieldUpdateOperationsInput | $Enums.Papel
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    papel?: EnumPapelFieldUpdateOperationsInput | $Enums.Papel
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfissionalCreateWithoutHorariosInput = {
    id?: string
    nome: string
    registro?: string | null
    telefone?: string | null
    email?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    especialidade: EspecialidadeCreateNestedOneWithoutProfissionaisInput
    agendamentos?: AgendamentoCreateNestedManyWithoutProfissionalInput
    user?: UserCreateNestedOneWithoutProfissionalInput
  }

  export type ProfissionalUncheckedCreateWithoutHorariosInput = {
    id?: string
    nome: string
    registro?: string | null
    especialidadeId: string
    telefone?: string | null
    email?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutProfissionalInput
    user?: UserUncheckedCreateNestedOneWithoutProfissionalInput
  }

  export type ProfissionalCreateOrConnectWithoutHorariosInput = {
    where: ProfissionalWhereUniqueInput
    create: XOR<ProfissionalCreateWithoutHorariosInput, ProfissionalUncheckedCreateWithoutHorariosInput>
  }

  export type ProfissionalUpsertWithoutHorariosInput = {
    update: XOR<ProfissionalUpdateWithoutHorariosInput, ProfissionalUncheckedUpdateWithoutHorariosInput>
    create: XOR<ProfissionalCreateWithoutHorariosInput, ProfissionalUncheckedCreateWithoutHorariosInput>
    where?: ProfissionalWhereInput
  }

  export type ProfissionalUpdateToOneWithWhereWithoutHorariosInput = {
    where?: ProfissionalWhereInput
    data: XOR<ProfissionalUpdateWithoutHorariosInput, ProfissionalUncheckedUpdateWithoutHorariosInput>
  }

  export type ProfissionalUpdateWithoutHorariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    registro?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    especialidade?: EspecialidadeUpdateOneRequiredWithoutProfissionaisNestedInput
    agendamentos?: AgendamentoUpdateManyWithoutProfissionalNestedInput
    user?: UserUpdateOneWithoutProfissionalNestedInput
  }

  export type ProfissionalUncheckedUpdateWithoutHorariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    registro?: NullableStringFieldUpdateOperationsInput | string | null
    especialidadeId?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutProfissionalNestedInput
    user?: UserUncheckedUpdateOneWithoutProfissionalNestedInput
  }

  export type ProfissionalCreateWithoutAgendamentosInput = {
    id?: string
    nome: string
    registro?: string | null
    telefone?: string | null
    email?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    especialidade: EspecialidadeCreateNestedOneWithoutProfissionaisInput
    horarios?: HorarioAtendimentoCreateNestedManyWithoutProfissionalInput
    user?: UserCreateNestedOneWithoutProfissionalInput
  }

  export type ProfissionalUncheckedCreateWithoutAgendamentosInput = {
    id?: string
    nome: string
    registro?: string | null
    especialidadeId: string
    telefone?: string | null
    email?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    horarios?: HorarioAtendimentoUncheckedCreateNestedManyWithoutProfissionalInput
    user?: UserUncheckedCreateNestedOneWithoutProfissionalInput
  }

  export type ProfissionalCreateOrConnectWithoutAgendamentosInput = {
    where: ProfissionalWhereUniqueInput
    create: XOR<ProfissionalCreateWithoutAgendamentosInput, ProfissionalUncheckedCreateWithoutAgendamentosInput>
  }

  export type EspecialidadeCreateWithoutAgendamentosInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoEspecialidade
    descricao?: string | null
    cor?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profissionais?: ProfissionalCreateNestedManyWithoutEspecialidadeInput
    pacientes?: PacienteEspecialidadeCreateNestedManyWithoutEspecialidadeInput
  }

  export type EspecialidadeUncheckedCreateWithoutAgendamentosInput = {
    id?: string
    nome: string
    tipo: $Enums.TipoEspecialidade
    descricao?: string | null
    cor?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    profissionais?: ProfissionalUncheckedCreateNestedManyWithoutEspecialidadeInput
    pacientes?: PacienteEspecialidadeUncheckedCreateNestedManyWithoutEspecialidadeInput
  }

  export type EspecialidadeCreateOrConnectWithoutAgendamentosInput = {
    where: EspecialidadeWhereUniqueInput
    create: XOR<EspecialidadeCreateWithoutAgendamentosInput, EspecialidadeUncheckedCreateWithoutAgendamentosInput>
  }

  export type AgendamentoPacienteCreateWithoutAgendamentoInput = {
    paciente: PacienteCreateNestedOneWithoutAgendamentosInput
  }

  export type AgendamentoPacienteUncheckedCreateWithoutAgendamentoInput = {
    pacienteId: string
  }

  export type AgendamentoPacienteCreateOrConnectWithoutAgendamentoInput = {
    where: AgendamentoPacienteWhereUniqueInput
    create: XOR<AgendamentoPacienteCreateWithoutAgendamentoInput, AgendamentoPacienteUncheckedCreateWithoutAgendamentoInput>
  }

  export type AgendamentoPacienteCreateManyAgendamentoInputEnvelope = {
    data: AgendamentoPacienteCreateManyAgendamentoInput | AgendamentoPacienteCreateManyAgendamentoInput[]
    skipDuplicates?: boolean
  }

  export type ProfissionalUpsertWithoutAgendamentosInput = {
    update: XOR<ProfissionalUpdateWithoutAgendamentosInput, ProfissionalUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<ProfissionalCreateWithoutAgendamentosInput, ProfissionalUncheckedCreateWithoutAgendamentosInput>
    where?: ProfissionalWhereInput
  }

  export type ProfissionalUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: ProfissionalWhereInput
    data: XOR<ProfissionalUpdateWithoutAgendamentosInput, ProfissionalUncheckedUpdateWithoutAgendamentosInput>
  }

  export type ProfissionalUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    registro?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    especialidade?: EspecialidadeUpdateOneRequiredWithoutProfissionaisNestedInput
    horarios?: HorarioAtendimentoUpdateManyWithoutProfissionalNestedInput
    user?: UserUpdateOneWithoutProfissionalNestedInput
  }

  export type ProfissionalUncheckedUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    registro?: NullableStringFieldUpdateOperationsInput | string | null
    especialidadeId?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    horarios?: HorarioAtendimentoUncheckedUpdateManyWithoutProfissionalNestedInput
    user?: UserUncheckedUpdateOneWithoutProfissionalNestedInput
  }

  export type EspecialidadeUpsertWithoutAgendamentosInput = {
    update: XOR<EspecialidadeUpdateWithoutAgendamentosInput, EspecialidadeUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<EspecialidadeCreateWithoutAgendamentosInput, EspecialidadeUncheckedCreateWithoutAgendamentosInput>
    where?: EspecialidadeWhereInput
  }

  export type EspecialidadeUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: EspecialidadeWhereInput
    data: XOR<EspecialidadeUpdateWithoutAgendamentosInput, EspecialidadeUncheckedUpdateWithoutAgendamentosInput>
  }

  export type EspecialidadeUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEspecialidadeFieldUpdateOperationsInput | $Enums.TipoEspecialidade
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profissionais?: ProfissionalUpdateManyWithoutEspecialidadeNestedInput
    pacientes?: PacienteEspecialidadeUpdateManyWithoutEspecialidadeNestedInput
  }

  export type EspecialidadeUncheckedUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEspecialidadeFieldUpdateOperationsInput | $Enums.TipoEspecialidade
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    cor?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profissionais?: ProfissionalUncheckedUpdateManyWithoutEspecialidadeNestedInput
    pacientes?: PacienteEspecialidadeUncheckedUpdateManyWithoutEspecialidadeNestedInput
  }

  export type AgendamentoPacienteUpsertWithWhereUniqueWithoutAgendamentoInput = {
    where: AgendamentoPacienteWhereUniqueInput
    update: XOR<AgendamentoPacienteUpdateWithoutAgendamentoInput, AgendamentoPacienteUncheckedUpdateWithoutAgendamentoInput>
    create: XOR<AgendamentoPacienteCreateWithoutAgendamentoInput, AgendamentoPacienteUncheckedCreateWithoutAgendamentoInput>
  }

  export type AgendamentoPacienteUpdateWithWhereUniqueWithoutAgendamentoInput = {
    where: AgendamentoPacienteWhereUniqueInput
    data: XOR<AgendamentoPacienteUpdateWithoutAgendamentoInput, AgendamentoPacienteUncheckedUpdateWithoutAgendamentoInput>
  }

  export type AgendamentoPacienteUpdateManyWithWhereWithoutAgendamentoInput = {
    where: AgendamentoPacienteScalarWhereInput
    data: XOR<AgendamentoPacienteUpdateManyMutationInput, AgendamentoPacienteUncheckedUpdateManyWithoutAgendamentoInput>
  }

  export type AgendamentoCreateWithoutPacientesInput = {
    id?: string
    tipo: $Enums.TipoAgendamento
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    numeroSessoes?: number
    status?: $Enums.StatusAgendamento
    observacoes?: string | null
    origem?: $Enums.OrigemAgendamento
    recorrenciaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profissional: ProfissionalCreateNestedOneWithoutAgendamentosInput
    especialidade: EspecialidadeCreateNestedOneWithoutAgendamentosInput
  }

  export type AgendamentoUncheckedCreateWithoutPacientesInput = {
    id?: string
    tipo: $Enums.TipoAgendamento
    profissionalId: string
    especialidadeId: string
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    numeroSessoes?: number
    status?: $Enums.StatusAgendamento
    observacoes?: string | null
    origem?: $Enums.OrigemAgendamento
    recorrenciaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendamentoCreateOrConnectWithoutPacientesInput = {
    where: AgendamentoWhereUniqueInput
    create: XOR<AgendamentoCreateWithoutPacientesInput, AgendamentoUncheckedCreateWithoutPacientesInput>
  }

  export type PacienteCreateWithoutAgendamentosInput = {
    id?: string
    nome: string
    dataNasc?: Date | string | null
    cpf?: string | null
    telefone: string
    telefone2?: string | null
    email?: string | null
    cep?: string | null
    logradouro?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
    diagnostico?: string | null
    observacoes?: string | null
    perfil?: string | null
    nomeResponsavel?: string | null
    telefoneResponsavel?: string | null
    relacaoResponsavel?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    convenio?: ConvenioCreateNestedOneWithoutPacientesInput
    especialidades?: PacienteEspecialidadeCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutAgendamentosInput = {
    id?: string
    nome: string
    dataNasc?: Date | string | null
    cpf?: string | null
    telefone: string
    telefone2?: string | null
    email?: string | null
    cep?: string | null
    logradouro?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
    diagnostico?: string | null
    observacoes?: string | null
    perfil?: string | null
    nomeResponsavel?: string | null
    telefoneResponsavel?: string | null
    relacaoResponsavel?: string | null
    convenioId?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    especialidades?: PacienteEspecialidadeUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutAgendamentosInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutAgendamentosInput, PacienteUncheckedCreateWithoutAgendamentosInput>
  }

  export type AgendamentoUpsertWithoutPacientesInput = {
    update: XOR<AgendamentoUpdateWithoutPacientesInput, AgendamentoUncheckedUpdateWithoutPacientesInput>
    create: XOR<AgendamentoCreateWithoutPacientesInput, AgendamentoUncheckedCreateWithoutPacientesInput>
    where?: AgendamentoWhereInput
  }

  export type AgendamentoUpdateToOneWithWhereWithoutPacientesInput = {
    where?: AgendamentoWhereInput
    data: XOR<AgendamentoUpdateWithoutPacientesInput, AgendamentoUncheckedUpdateWithoutPacientesInput>
  }

  export type AgendamentoUpdateWithoutPacientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAgendamentoFieldUpdateOperationsInput | $Enums.TipoAgendamento
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroSessoes?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAgendamentoFieldUpdateOperationsInput | $Enums.StatusAgendamento
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: EnumOrigemAgendamentoFieldUpdateOperationsInput | $Enums.OrigemAgendamento
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profissional?: ProfissionalUpdateOneRequiredWithoutAgendamentosNestedInput
    especialidade?: EspecialidadeUpdateOneRequiredWithoutAgendamentosNestedInput
  }

  export type AgendamentoUncheckedUpdateWithoutPacientesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAgendamentoFieldUpdateOperationsInput | $Enums.TipoAgendamento
    profissionalId?: StringFieldUpdateOperationsInput | string
    especialidadeId?: StringFieldUpdateOperationsInput | string
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroSessoes?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAgendamentoFieldUpdateOperationsInput | $Enums.StatusAgendamento
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: EnumOrigemAgendamentoFieldUpdateOperationsInput | $Enums.OrigemAgendamento
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteUpsertWithoutAgendamentosInput = {
    update: XOR<PacienteUpdateWithoutAgendamentosInput, PacienteUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<PacienteCreateWithoutAgendamentosInput, PacienteUncheckedCreateWithoutAgendamentosInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutAgendamentosInput, PacienteUncheckedUpdateWithoutAgendamentosInput>
  }

  export type PacienteUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataNasc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    telefone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    perfil?: NullableStringFieldUpdateOperationsInput | string | null
    nomeResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    relacaoResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    convenio?: ConvenioUpdateOneWithoutPacientesNestedInput
    especialidades?: PacienteEspecialidadeUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutAgendamentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataNasc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    telefone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    perfil?: NullableStringFieldUpdateOperationsInput | string | null
    nomeResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    relacaoResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    convenioId?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    especialidades?: PacienteEspecialidadeUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteCreateManyConvenioInput = {
    id?: string
    nome: string
    dataNasc?: Date | string | null
    cpf?: string | null
    telefone: string
    telefone2?: string | null
    email?: string | null
    cep?: string | null
    logradouro?: string | null
    numero?: string | null
    complemento?: string | null
    bairro?: string | null
    cidade?: string | null
    estado?: string | null
    diagnostico?: string | null
    observacoes?: string | null
    perfil?: string | null
    nomeResponsavel?: string | null
    telefoneResponsavel?: string | null
    relacaoResponsavel?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PacienteUpdateWithoutConvenioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataNasc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    telefone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    perfil?: NullableStringFieldUpdateOperationsInput | string | null
    nomeResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    relacaoResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    especialidades?: PacienteEspecialidadeUpdateManyWithoutPacienteNestedInput
    agendamentos?: AgendamentoPacienteUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutConvenioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataNasc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    telefone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    perfil?: NullableStringFieldUpdateOperationsInput | string | null
    nomeResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    relacaoResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    especialidades?: PacienteEspecialidadeUncheckedUpdateManyWithoutPacienteNestedInput
    agendamentos?: AgendamentoPacienteUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateManyWithoutConvenioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataNasc?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    telefone2?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    perfil?: NullableStringFieldUpdateOperationsInput | string | null
    nomeResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefoneResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    relacaoResponsavel?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteEspecialidadeCreateManyPacienteInput = {
    especialidadeId: string
    createdAt?: Date | string
  }

  export type AgendamentoPacienteCreateManyPacienteInput = {
    agendamentoId: string
  }

  export type PacienteEspecialidadeUpdateWithoutPacienteInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    especialidade?: EspecialidadeUpdateOneRequiredWithoutPacientesNestedInput
  }

  export type PacienteEspecialidadeUncheckedUpdateWithoutPacienteInput = {
    especialidadeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteEspecialidadeUncheckedUpdateManyWithoutPacienteInput = {
    especialidadeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoPacienteUpdateWithoutPacienteInput = {
    agendamento?: AgendamentoUpdateOneRequiredWithoutPacientesNestedInput
  }

  export type AgendamentoPacienteUncheckedUpdateWithoutPacienteInput = {
    agendamentoId?: StringFieldUpdateOperationsInput | string
  }

  export type AgendamentoPacienteUncheckedUpdateManyWithoutPacienteInput = {
    agendamentoId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfissionalCreateManyEspecialidadeInput = {
    id?: string
    nome: string
    registro?: string | null
    telefone?: string | null
    email?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendamentoCreateManyEspecialidadeInput = {
    id?: string
    tipo: $Enums.TipoAgendamento
    profissionalId: string
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    numeroSessoes?: number
    status?: $Enums.StatusAgendamento
    observacoes?: string | null
    origem?: $Enums.OrigemAgendamento
    recorrenciaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PacienteEspecialidadeCreateManyEspecialidadeInput = {
    pacienteId: string
    createdAt?: Date | string
  }

  export type ProfissionalUpdateWithoutEspecialidadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    registro?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    horarios?: HorarioAtendimentoUpdateManyWithoutProfissionalNestedInput
    agendamentos?: AgendamentoUpdateManyWithoutProfissionalNestedInput
    user?: UserUpdateOneWithoutProfissionalNestedInput
  }

  export type ProfissionalUncheckedUpdateWithoutEspecialidadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    registro?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    horarios?: HorarioAtendimentoUncheckedUpdateManyWithoutProfissionalNestedInput
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutProfissionalNestedInput
    user?: UserUncheckedUpdateOneWithoutProfissionalNestedInput
  }

  export type ProfissionalUncheckedUpdateManyWithoutEspecialidadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    registro?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoUpdateWithoutEspecialidadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAgendamentoFieldUpdateOperationsInput | $Enums.TipoAgendamento
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroSessoes?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAgendamentoFieldUpdateOperationsInput | $Enums.StatusAgendamento
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: EnumOrigemAgendamentoFieldUpdateOperationsInput | $Enums.OrigemAgendamento
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profissional?: ProfissionalUpdateOneRequiredWithoutAgendamentosNestedInput
    pacientes?: AgendamentoPacienteUpdateManyWithoutAgendamentoNestedInput
  }

  export type AgendamentoUncheckedUpdateWithoutEspecialidadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAgendamentoFieldUpdateOperationsInput | $Enums.TipoAgendamento
    profissionalId?: StringFieldUpdateOperationsInput | string
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroSessoes?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAgendamentoFieldUpdateOperationsInput | $Enums.StatusAgendamento
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: EnumOrigemAgendamentoFieldUpdateOperationsInput | $Enums.OrigemAgendamento
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pacientes?: AgendamentoPacienteUncheckedUpdateManyWithoutAgendamentoNestedInput
  }

  export type AgendamentoUncheckedUpdateManyWithoutEspecialidadeInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAgendamentoFieldUpdateOperationsInput | $Enums.TipoAgendamento
    profissionalId?: StringFieldUpdateOperationsInput | string
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroSessoes?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAgendamentoFieldUpdateOperationsInput | $Enums.StatusAgendamento
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: EnumOrigemAgendamentoFieldUpdateOperationsInput | $Enums.OrigemAgendamento
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteEspecialidadeUpdateWithoutEspecialidadeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteUpdateOneRequiredWithoutEspecialidadesNestedInput
  }

  export type PacienteEspecialidadeUncheckedUpdateWithoutEspecialidadeInput = {
    pacienteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteEspecialidadeUncheckedUpdateManyWithoutEspecialidadeInput = {
    pacienteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioAtendimentoCreateManyProfissionalInput = {
    id?: string
    diaSemana: $Enums.DiaSemana
    horaInicio: string
    duracaoSessao: number
    intervaloSessoes?: number
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendamentoCreateManyProfissionalInput = {
    id?: string
    tipo: $Enums.TipoAgendamento
    especialidadeId: string
    dataHoraInicio: Date | string
    dataHoraFim: Date | string
    numeroSessoes?: number
    status?: $Enums.StatusAgendamento
    observacoes?: string | null
    origem?: $Enums.OrigemAgendamento
    recorrenciaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HorarioAtendimentoUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaInicio?: StringFieldUpdateOperationsInput | string
    duracaoSessao?: IntFieldUpdateOperationsInput | number
    intervaloSessoes?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioAtendimentoUncheckedUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaInicio?: StringFieldUpdateOperationsInput | string
    duracaoSessao?: IntFieldUpdateOperationsInput | number
    intervaloSessoes?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorarioAtendimentoUncheckedUpdateManyWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    diaSemana?: EnumDiaSemanaFieldUpdateOperationsInput | $Enums.DiaSemana
    horaInicio?: StringFieldUpdateOperationsInput | string
    duracaoSessao?: IntFieldUpdateOperationsInput | number
    intervaloSessoes?: IntFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAgendamentoFieldUpdateOperationsInput | $Enums.TipoAgendamento
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroSessoes?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAgendamentoFieldUpdateOperationsInput | $Enums.StatusAgendamento
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: EnumOrigemAgendamentoFieldUpdateOperationsInput | $Enums.OrigemAgendamento
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    especialidade?: EspecialidadeUpdateOneRequiredWithoutAgendamentosNestedInput
    pacientes?: AgendamentoPacienteUpdateManyWithoutAgendamentoNestedInput
  }

  export type AgendamentoUncheckedUpdateWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAgendamentoFieldUpdateOperationsInput | $Enums.TipoAgendamento
    especialidadeId?: StringFieldUpdateOperationsInput | string
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroSessoes?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAgendamentoFieldUpdateOperationsInput | $Enums.StatusAgendamento
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: EnumOrigemAgendamentoFieldUpdateOperationsInput | $Enums.OrigemAgendamento
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pacientes?: AgendamentoPacienteUncheckedUpdateManyWithoutAgendamentoNestedInput
  }

  export type AgendamentoUncheckedUpdateManyWithoutProfissionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoAgendamentoFieldUpdateOperationsInput | $Enums.TipoAgendamento
    especialidadeId?: StringFieldUpdateOperationsInput | string
    dataHoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataHoraFim?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroSessoes?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusAgendamentoFieldUpdateOperationsInput | $Enums.StatusAgendamento
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    origem?: EnumOrigemAgendamentoFieldUpdateOperationsInput | $Enums.OrigemAgendamento
    recorrenciaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoPacienteCreateManyAgendamentoInput = {
    pacienteId: string
  }

  export type AgendamentoPacienteUpdateWithoutAgendamentoInput = {
    paciente?: PacienteUpdateOneRequiredWithoutAgendamentosNestedInput
  }

  export type AgendamentoPacienteUncheckedUpdateWithoutAgendamentoInput = {
    pacienteId?: StringFieldUpdateOperationsInput | string
  }

  export type AgendamentoPacienteUncheckedUpdateManyWithoutAgendamentoInput = {
    pacienteId?: StringFieldUpdateOperationsInput | string
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