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


type alias Contact =
    { phone : String
    , email : String
    , location : String
    }


type alias Model =
    { name : String
    , title : String
    , summary : String
    , contact : Contact
    }


initContact : Contact
initContact =
    { phone = ""
    , email = ""
    , location = ""
    }


{-| Init function to initialize application state
-}
init : () -> ( Model, Cmd Msg )
init () =
    ( { name = ""
      , title = ""
      , summary = ""
      , contact = initContact
      }
    , Cmd.none
    )



-- Update


type Msg
    = UpdateName String
    | UpdateSummary String
    | UpdateTitle String
    | UpdatePhone String
    | UpdateEmail String
    | UpdateLocation String


{-| Update function for handling Msg types
-}
update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    let
        newModel =
            case msg of
                UpdateName name ->
                    { model | name = name }

                UpdateSummary summary ->
                    { model | summary = summary }

                UpdateTitle title ->
                    { model | title = title }

                UpdatePhone phone ->
                    { model | contact = updateContactPhone model phone }

                UpdateEmail email ->
                    { model | contact = updateContactEmail model email }

                UpdateLocation location ->
                    { model | contact = updateContactLocation model location }
    in
    ( newModel, updateDisplay newModel )


updateContactPhone : Model -> String -> Contact
updateContactPhone model phone =
    let
        contact =
            model.contact
    in
    { contact | phone = phone }


updateContactEmail : Model -> String -> Contact
updateContactEmail model email =
    let
        contact =
            model.contact
    in
    { contact | email = email }


updateContactLocation : Model -> String -> Contact
updateContactLocation model location =
    let
        contact =
            model.contact
    in
    { contact | location = location }


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
    div []
        [ div [ class "input__section" ]
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
            , input
                [ id "title"
                , type_ "text"
                , placeholder "Title "
                , onInput UpdateTitle
                ]
                []
            , label [ for "summary" ] [ text "Summary" ]
            , input
                [ id "summary"
                , type_ "text"
                , placeholder "Summary"
                , onInput UpdateSummary
                ]
                []
            ]
        , div [ class "input__section" ]
            [ div [ class "section__header" ] [ text "Contact Details" ]
            , label [ for "phone" ] [ text "Phone" ]
            , input
                [ id "phone"
                , type_ "text"
                , placeholder "Phone"
                , value model.contact.phone
                , onInput UpdatePhone
                ]
                []
            , label [ for "email" ] [ text "Email" ]
            , input
                [ id "email"
                , type_ "text"
                , placeholder "Email"
                , value model.contact.email
                , onInput UpdateEmail
                ]
                []
            , label [ for "location" ] [ text "Location" ]
            , input
                [ id "location"
                , type_ "text"
                , placeholder "Location"
                , value model.contact.location
                , onInput UpdateLocation
                ]
                []
            ]
        ]
