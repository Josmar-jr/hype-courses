interface NodeModule {
  hot: {
    accept(path: string | undefined, fn: () => void): void;
  };
}

declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames;
  export = classNames;
}

declare module "*.less" {
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames;
  export = classNames;
}

declare module "*.graphql" {
  import type { DocumentNode } from "graphql";

  const Schema: DocumentNode;
  export = Schema;
}

declare module "*.svg" {
  const svgUrl: string;
  const svgComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  export default svgUrl;
  export { svgComponent as ReactComponent };
}

declare module "*.png" {
  const content: string;
  export default content;
}

