module View exposing (..)

import Html exposing (Html, div, text)
import Model exposing (Model, Route(..))
import Messages as Msgs exposing (Msg)
import Landing.View exposing (..)
import NotFound.View exposing (..)


view : Model -> Html Msg
view model =
    div []
        [ page model ]


page : Model -> Html Msg
page model =
    case model.route of
        LandingRoute ->
            Landing.View.view

        LaunchesRoute ->
            Landing.View.view

        NotFoundRoute ->
            NotFound.View.view
