## 1. Дженерики: определение, отличие от any, пример с ограничением.

**Дженерики** - универсальный тип, который позволяют передавать тип как параметр.

```ts
function identity<T>(value: T): T {
  return value;
}

const numberValue = identity(42); // number
const textValue = identity("TypeScript"); // string
```

### Дженерики и `any`

`any` отключает проверку типов (не рекомендован к использованию). Дженерик сохраняет конкретный тип и позволяет использовать его безопасно.

### Ограничение дженерика

Через `extends` можно создать ограничение.

В этом случае добавляется ограничение, которое не дает возможности при вызове функции передавать числа, булевы значения, так как они не являются объектами

```ts
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

getLength("hello"); // 5
getLength([1, 2, 3]); // 3
// getLength(123); // Ошибка: у number нет свойства length
```

## 2. type vs interface: различия, критерии выбора, extends.

Оба инструмента описывают форму значения, но имеют разные возможности и область применения.

- `interface` удобно использовать, когда мы хотим расширять интерфейс в будущем. Интерфейсы для классов. Ключевое слово extends позволяет расширить интерфейс. Возможно создавать несколько с одинаковым названием - в этом случае интерфейсы сольются в один

```ts
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}
```

- `type` подходит для union, intersection, примитивных псевдонимов и их комбинаций, для объеднинения литералов. Для псевдонимов типов доступны объединение и пересечение: & и |

```ts
type Coordinates = [number, number];
type UserWithStatus = User & { isActive: boolean };
type Result = "success" | "error";
```

## 3. Intersaction и Union: разница, работа со свойствами, type guard.

### Union (`|`)

Union - пересечение типов. Позволяют объявить переменную, которая может содержать значения разных типов или несколько значений одного типа

```ts
type Status = "loading" | "success" | "error"; // можем использовать одно из этих значений
```

### Intersection (`&`)

Intersection объединяет варианты нескольких типов. Тогда значение соответствовует всем типам одновременно.

```ts
type HasId = { id: number };
type HasTimestamp = { createdAt: Date };
type Entity = HasId & HasTimestamp;

const entity: Entity = {
  id: 1,
  createdAt: new Date(),
};
```

### Type guard

**Type guard** сужает широкий тип до конкретного варианта. Некое выражение, выполняющее проверку во время выполнения, гарантирующую наличие типа в некоторой области видимости. Возвращает булево значение

Для примитивов часто используют `typeof`, для объектов — оператор `in` или функцию с предикатом `value is Type`.

```ts
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```

## 4. Объяснить работу типа

```ts
type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];
```

1. `type KeysOfType<T, U>` извлекает из типа T ключи, значения для которых имеют тип U
2. `keyof T` получает объединение ключей типа `T`.
3. `K in keyof T` перебирает каждый ключ и создаёт mapped type.
4. `T[K] extends U ? K : never` тернарный оператор - оставляет ключ, если тип его значения совместим с `U`, иначе записывает `never`.
5. `[keyof T]` индексирует получившийся объект всеми ключами и превращает значения в union.

## 5. Утилитарные типы: Partial, Pick, Omit, Record, Readonly. Назначение, примеры.

Утилитарные типы — обобщённые типы TypeScript для преобразования существующих типов.

```ts
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
```

### `Partial<T>`

Делает все свойства необязательными. Partial<User>

```ts
interface User {
  id?: number;
  name?: string;
  email?: string;
  isActive?: boolean;
}
```

### `Pick<T, K>`

Оставляет только перечисленные свойства. Первый параметр - объектная струткура, второй - то, что хотим оставить

```ts
type UserPreview = Pick<User, "id" | "name">;
```

### `Omit<T, K>`

Противоположность Pick. Удаляет перечисленные свойства.

```ts
type CreateUser = Omit<User, "id">;
```

### `Record<K, T>`

Создаёт объект, в котором ключи имеют тип `K`, а значения — тип `T`.

```ts
type UserRole = "admin" | "editor" | "viewer";
const roleLabels: Record<UserRole, string> = {
  admin: "Администратор",
  editor: "Редактор",
  viewer: "Наблюдатель",
};
```

### `Readonly<T>`

Позволяет сделать значения неизменяемыми

```ts
interface Todo {
   id: string;
   title: string;
   description: string;
   completed: boolean;
   createdAt: number;
}

type ReadOnlyTodo = Readonly<Todo>;

type ReadOnlyTodo = {
   readonly id: string;
   readonly title: string;
   readonly description: string;
   readonly completed: boolean;
   readonly createdAt: number;
}
```
