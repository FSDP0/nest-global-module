export class CamelCaseConverter {
  static convertToPascalCase = <T extends string | object | Array<T>>(
    target: T
  ): CamelCase.Pascalize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToPascalCase(item)
      ) satisfies CamelCase.Pascalize<T>[] as CamelCase.Pascalize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return `${target.charAt(0).toUpperCase()}${target.slice(1)}` satisfies string as CamelCase.Pascalize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [this.convertToPascalCase(key), this.convertToPascalCase(value)];

            return { ...obj, [key]: value };
          }, {}) satisfies object as CamelCase.Pascalize<T>;
        default:
          return target as CamelCase.Pascalize<T>;
      }
    }
  };

  static convertToSnakeCase = <T extends string | object | Array<T>>(
    target: T
  ): CamelCase.Snakelize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToSnakeCase(item)
      ) satisfies CamelCase.Snakelize<T>[] as CamelCase.Snakelize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return `${target.charAt(0).toLocaleLowerCase()}${target.slice(1).replace(/[A-Z]/g, (char: string) => `_${char.toLocaleLowerCase()}`)}` satisfies string as CamelCase.Snakelize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [this.convertToSnakeCase(key), this.convertToSnakeCase(value)];

            return { ...obj, [key]: value };
          }, {}) satisfies object as CamelCase.Snakelize<T>;
        default:
          return target as CamelCase.Snakelize<T>;
      }
    }
  };

  static convertToKebabCase = <T extends string | object | Array<T>>(
    target: T
  ): CamelCase.Kebablize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToKebabCase(item)
      ) satisfies CamelCase.Kebablize<T>[] as CamelCase.Kebablize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return `${target.charAt(0).toLocaleLowerCase()}${target.slice(1).replace(/[A-Z]/g, (char: string) => `-${char.toLocaleLowerCase()}`)}` satisfies string as CamelCase.Kebablize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [this.convertToKebabCase(key), this.convertToKebabCase(value)];

            return { ...obj, [key]: value };
          }, {}) satisfies object as CamelCase.Kebablize<T>;
        default:
          return target as CamelCase.Kebablize<T>;
      }
    }
  };
}

export class SnakeCaseConverter {
  static convertToCamelCase = <T extends string | object | Array<T>>(
    target: T
  ): SnakeCase.Camelize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToCamelCase(item)
      ) satisfies SnakeCase.Camelize<T>[] as SnakeCase.Camelize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return target.replace(/_([a-z])/g, (_, char: string) =>
            char.toUpperCase()
          ) satisfies string as SnakeCase.Camelize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [this.convertToCamelCase(key), this.convertToCamelCase(value)];

            return { ...obj, [key]: value };
          }, {}) satisfies object as SnakeCase.Camelize<T>;
        default:
          return target as SnakeCase.Camelize<T>;
      }
    }
  };

  static convertToPascalCase = <T extends string | object | Array<T>>(
    target: T
  ): SnakeCase.Pascalize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToPascalCase(item)
      ) satisfies SnakeCase.Pascalize<T>[] as SnakeCase.Pascalize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return `${target.charAt(0).toUpperCase()}${target.slice(1).replace(/_([a-z])/g, (_, char: string) => char.toUpperCase())}` satisfies string as SnakeCase.Pascalize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [this.convertToPascalCase(key), this.convertToPascalCase(value)];

            return { ...obj, [key]: value };
          }, {}) satisfies object as SnakeCase.Pascalize<T>;
        default:
          return target as SnakeCase.Pascalize<T>;
      }
    }
  };

  static convertToKebabCase = <T extends string | object | Array<T>>(
    target: T
  ): SnakeCase.Kebablize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToKebabCase(item)
      ) satisfies SnakeCase.Kebablize<T>[] as SnakeCase.Kebablize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return target.replace(
            /_([a-z])/g,
            (_, char: string) => `-${char.toLowerCase()}`
          ) satisfies string as SnakeCase.Kebablize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [this.convertToKebabCase(key), this.convertToKebabCase(value)];

            return { ...obj, [key]: value };
          }, {}) satisfies object as SnakeCase.Kebablize<T>;
        default:
          return target as SnakeCase.Kebablize<T>;
      }
    }
  };
}

export class PascalCaseConverter {
  static convertToSnakeCase = <T extends string | object | Array<T>>(
    target: T
  ): PascalCase.Snakelize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToSnakeCase(item)
      ) satisfies PascalCase.Snakelize<T>[] as PascalCase.Snakelize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return `${target.charAt(0).toLocaleLowerCase()}${target.slice(1).replace(/[A-Z]/g, (char: string) => `_${char.toLowerCase()}`)}` satisfies string as PascalCase.Snakelize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [this.convertToSnakeCase(key), this.convertToSnakeCase(value)];

            return { ...obj, [key]: value };
          }, {}) satisfies object as PascalCase.Snakelize<T>;
        default:
          return target as PascalCase.Snakelize<T>;
      }
    }
  };

  static convertToCamelCase = <T extends string | object | Array<T>>(
    target: T
  ): PascalCase.Camelize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToCamelCase(item)
      ) satisfies PascalCase.Camelize<T>[] as PascalCase.Camelize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return `${target.charAt(0).toLowerCase()}${target.slice(1)}` satisfies string as PascalCase.Camelize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [this.convertToCamelCase(key), this.convertToCamelCase(value)];

            return { ...obj, [key]: value };
          }, {}) satisfies object as PascalCase.Camelize<T>;
        default:
          return target as PascalCase.Camelize<T>;
      }
    }
  };

  static convertToKebabCase = <T extends string | object | Array<T>>(
    target: T
  ): PascalCase.Kebablize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToKebabCase(item)
      ) satisfies PascalCase.Kebablize<T>[] as PascalCase.Kebablize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return `${target.charAt(0).toLocaleLowerCase()}${target.slice(1).replace(/[A-Z]/g, (char: string) => `-${char.toLowerCase()}`)}` satisfies string as PascalCase.Kebablize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [this.convertToKebabCase(key), this.convertToKebabCase(value)];

            return { ...obj, [key]: value };
          }, {}) satisfies object as PascalCase.Kebablize<T>;
        default:
          return target as PascalCase.Kebablize<T>;
      }
    }
  };
}

export class KebabCaseConverter {
  static convertToCamelCase = <T extends string | object | Array<T>>(
    target: T
  ): KebabCase.Camelize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToCamelCase(item)
      ) satisfies KebabCase.Camelize<T>[] as KebabCase.Camelize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return target.replace(/-([a-z])/g, (_, char: string) =>
            char.toUpperCase()
          ) satisfies string as KebabCase.Camelize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [this.convertToCamelCase(key), this.convertToCamelCase(value)];

            return { ...obj, [key]: value };
          }, {}) satisfies object as KebabCase.Camelize<T>;
        default:
          return target as KebabCase.Camelize<T>;
      }
    }
  };

  static convertToSnakeCase = <T extends string | object | Array<T>>(
    target: T
  ): KebabCase.Snakelize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToSnakeCase(item)
      ) satisfies KebabCase.Snakelize<T>[] as KebabCase.Snakelize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return target.replace(
            /-([a-z])/g,
            (_, char: string) => `_${char.toLowerCase()}`
          ) satisfies string as KebabCase.Snakelize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [this.convertToSnakeCase(key), this.convertToSnakeCase(value)];

            return { ...obj, [key]: value };
          }, {}) satisfies object as KebabCase.Snakelize<T>;
        default:
          return target as KebabCase.Snakelize<T>;
      }
    }
  };

  static convertToPascalCase = <T extends string | object | Array<T>>(
    target: T
  ): KebabCase.Pascalize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToPascalCase(item)
      ) satisfies KebabCase.Pascalize<T>[] as KebabCase.Pascalize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return `${target.charAt(0).toUpperCase()}${target.slice(1).replace(/-([a-z])/g, (_, char: string) => char.toUpperCase())}` satisfies string as KebabCase.Pascalize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [this.convertToPascalCase(key), this.convertToPascalCase(value)];

            return { ...obj, [key]: value };
          }, {}) satisfies object as KebabCase.Pascalize<T>;
        default:
          return target as KebabCase.Pascalize<T>;
      }
    }
  };
}
