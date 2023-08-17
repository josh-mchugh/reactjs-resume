module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (class, for, id, placeholder, type_, value)
import Html.Events exposing(onInput)


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
    { firstName: String }


init : () -> ( Model, Cmd Msg )
init () =
    ( { firstName = "" }, Cmd.none )



-- Update


type Msg
    = FirstName String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        FirstName firstName ->
            ( { model | firstName = firstName }, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- View


view : Model -> Html Msg
view model =
    div [ class "input__section" ]
        [ div [ class "section__header" ] [ text "Your Details" ]
        , label [ for "firstName" ] [ text "First Name" ]
        , input [ id "firstName"
                , type_ "text"
                , placeholder "First Name"
                , value model.firstName
                , onInput FirstName
                ] []
        , label [ for "lastName" ] [ text "Last Name" ]
        , input [ id "lastName", type_ "text", placeholder "Last Name" ] []
        , label [ for "jobTitle" ] [ text "Job Title" ]
        , input [ id "jobTitle", type_ "text", placeholder "Job Title " ] []
        , label [ for "summary" ] [ text "Summary" ]
        , input [ id "summary", type_ "text", placeholder "Summary" ] []
        ]
