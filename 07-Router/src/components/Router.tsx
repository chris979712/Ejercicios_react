import { NAVIGATION_EVENTS } from "../utils/consts";
import React, { useState, useEffect } from "react";
import { PageNotFound } from "../pages/NotFound";
import { match } from "path-to-regexp";
import { getCurrentPath } from "../utils/utils";

type Route = {
    path: string;
    Component: React.ComponentType<any>;
}

type RouterProps = {
    routes: Route[],
    children: React.ReactNode
}


export function Router (props: RouterProps)
{
    const {routes, children} = props;
    const [currentPath, setCurrentPath] = useState(getCurrentPath())
    useEffect(() => {
        const onLocatinChange = () => {
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener(NAVIGATION_EVENTS.PUSHSTATE, onLocatinChange)
        window.addEventListener(NAVIGATION_EVENTS.POPSTATE, onLocatinChange)

        return() => {
            window.removeEventListener(NAVIGATION_EVENTS.PUSHSTATE, onLocatinChange)
            window.removeEventListener(NAVIGATION_EVENTS.POPSTATE, onLocatinChange)
        }
    }, [])

    let routeParams = {}

    const routesFromChildren: Route[] = React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return null;
        const { type } = child;
        const { name } = type as { name?: string };
        const isRoute = name === "Route";
        if (!isRoute) return null;
        const { path, Component } = child.props as Route;
        return { path, Component };
    })?.filter(Boolean) as Route[]; 

    const routesToUse = routes.concat(routesFromChildren).filter(Boolean);

    const route = routesToUse.find(({path}) => {
        const matcher = match(path, {decode: decodeURIComponent, end:true});
        const matched = matcher(currentPath);
        if(matched){
            routeParams = matched.params;
            return true;
        }
        return false;
    });

    const Page = route?.Component;

    return Page ? <Page routeParams={routeParams}/> : <PageNotFound />
}