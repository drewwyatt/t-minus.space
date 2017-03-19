module Main exposing (..)
import Models exposing (Model, initialModel)
import View exposing (view)
import Update exposing (update)
import Navigation exposing (..)
import Messages as Msgs exposing (Msg)
import Routing

init : Location -> ( Model, Cmd Msg )
init location =
    let
        currentRoute =
            Routing.parseLocation location
    in
        ( initialModel currentRoute, Cmd.none )

subscriptions : Model -> Sub Msg
subscriptions model = 
    Sub.none

main : Program Never Model Msg
main = Navigation.program Msgs.OnLocationChange
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }

