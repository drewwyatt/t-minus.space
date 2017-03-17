module Main exposing (..)
import Html exposing (div, h1, text)
import Html.Attributes exposing (..)

main : Html.Html msg
main =
    div []
        [ h1 
            [ style 
                [ ("text-align", "center")
                , ("margin", "0")
                , ("padding", "0")
                , ("position", "absolute")
                , ("top", "50%")
                , ("left", "50%")
                , ("transform", "translate(-50%, -50%)") ] ] [ text "t-minus.space" ]
        ]