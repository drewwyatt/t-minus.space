module Models exposing (..)

type Route
    = LandingRoute
    | LaunchesRoute
    | NotFoundRoute

type alias Model = 
    { route : Route
    }

initialModel : Route -> Model
initialModel route = 
    { route = route
    }