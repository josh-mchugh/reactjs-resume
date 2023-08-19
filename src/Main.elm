port module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (class, for, id, placeholder, type_, value)
import Html.Events exposing (onInput)



-- MAIN


{-| Main function to generate program for Elm element
-}
main : Program () Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }



-- PORTS


port updateDisplay : String -> Cmd msg



-- MODEL


type alias Model =
    { name : String }


{-| Init function to initialize application state
-}
init : () -> ( Model, Cmd Msg )
init () =
    ( { name = "" }, Cmd.none )



-- Update


type Msg
    = UpdateName String


{-| Update function for handling Msg types
-}
update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        UpdateName name ->
            ( { model | name = name }
            , updateDisplay name
            )


{-| Subscrtions functions to handle subscriptions
-}
subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- View


{-| Main view function for handling applictions view
-}
view : Model -> Html Msg
view model =
    div [ class "input__section" ]
        [ div [ class "section__header" ] [ text "Your Details" ]
        , label [ for "name" ] [ text "Name" ]
        , input
            [ id "name"
            , type_ "text"
            , placeholder "Name"
            , value model.name
            , onInput UpdateName
            ]
            []
        , label [ for "title" ] [ text "Title" ]
        , input [ id "title", type_ "text", placeholder "Title " ] []
        , label [ for "summary" ] [ text "Summary" ]
        , input [ id "summary", type_ "text", placeholder "Summary" ] []
        ]
