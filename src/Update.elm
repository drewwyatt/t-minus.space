module Update exposing (..)

import Messages as Msgs exposing (Msg(..))
import Models exposing (Model)
import Routing exposing (parseLocation)

update : Msg -> Model -> (Model, Cmd msg)
update msg model = 
    case msg of
        Msgs.OnLocationChange location -> 
            let newRoute =
                parseLocation location
            in
                ( { model | route = newRoute }, Cmd.none )
