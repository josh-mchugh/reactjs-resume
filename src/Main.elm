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


port updateDisplay : Model -> Cmd msg



-- MODEL


type alias Model =
    { firstName : String }


{-| Init function to initialize application state
-}
init : () -> ( Model, Cmd Msg )
init () =
    ( { firstName = "" }, Cmd.none )



-- Update


type Msg
    = FirstName String


{-| Update function for handling Msg types
-}
update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        FirstName firstName ->
            ( { model | firstName = firstName }
            , updateDisplay model
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
        , label [ for "firstName" ] [ text "First Name" ]
        , input
            [ id "firstName"
            , type_ "text"
            , placeholder "First Name"
            , value model.firstName
            , onInput FirstName
            ]
            []
        , label [ for "lastName" ] [ text "Last Name" ]
        , input [ id "lastName", type_ "text", placeholder "Last Name" ] []
        , label [ for "jobTitle" ] [ text "Job Title" ]
        , input [ id "jobTitle", type_ "text", placeholder "Job Title " ] []
        , label [ for "summary" ] [ text "Summary" ]
        , input [ id "summary", type_ "text", placeholder "Summary" ] []
        ]
