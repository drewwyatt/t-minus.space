module NotFound.View exposing (..)
import Html exposing (div, h1, text)
import Html.Attributes exposing (style)

view : Html.Html msg
view =
    div []
        [ h1 
            [ style 
                [ ("text-align", "center")
                , ("margin", "0")
                , ("padding", "0")
                , ("position", "absolute")
                , ("top", "50%")
                , ("left", "50%")
                , ("transform", "translate(-50%, -50%)") ] ] [ text "404" ]
        ]