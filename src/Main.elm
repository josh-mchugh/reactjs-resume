module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (class, for, id, placeholder, type_)


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }



-- Model


type alias Model =
    String


init : () -> ( Model, Cmd Msg )
init () =
    ( "Hello, Elm here", Cmd.none )



-- Update


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- View


view : Model -> Html Msg
view model =
    div [ class "input__section" ]
        [ div [ class "section__header" ] [ text "Your Details" ]
        , label [ for "firstName" ] [ text "First Name" ]
        , input [ id "firstName", type_ "text", placeholder "First Name" ] []
        , label [ for "lastName" ] [ text "Last Name" ]
        , input [ id "lastName", type_ "text", placeholder "Last Name" ] []
        , label [ for "jobTitle" ] [ text "Job Title" ]
        , input [ id "jobTitle", type_ "text", placeholder "Job Title " ] []
        , label [ for "summary" ] [ text "Summary" ]
        , input [ id "summary", type_ "text", placeholder "Summary" ] []
        ]
