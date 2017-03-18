module Routing exposing (..)

import Model exposing (Route(..))
import Navigation exposing (Location)
import UrlParser exposing (..)


matchers : Parser (Route -> a) a
matchers =
    oneOf
        [ map LandingRoute top
        , map LaunchesRoute (s "launches")
        ]

parseLocation : Location -> Route
parseLocation location = 
    case (parseHash matchers location) of 
        Just route ->
            route
        Nothing ->
            NotFoundRoute