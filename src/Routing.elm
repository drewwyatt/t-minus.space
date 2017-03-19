module Routing exposing (..)

import Models exposing (Route(..))
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
    case (parsePath matchers location) of 
        Just route ->
            route
        Nothing ->
            NotFoundRoute