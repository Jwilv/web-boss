import { LazyExoticComponent } from "react";

type JSXElement = () => JSX.Element

export interface Route {
    component: LazyExoticComponent<JSXElement> | JSXElement;
    name: string;
    path: string;
    children?: Route[];
}