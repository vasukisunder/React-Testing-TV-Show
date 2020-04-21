import { fetchShow as mockFetchShow } from "./api/fetchShow"
import React from "react"
import { render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"

jest.mock("./api/fetchShow");

const data = {
    id: 2993,
    name: "Stranger Things",
    runtime: 60,
    image: {
        medium:
            "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
        original:
            "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
    },
    summary:
        "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
    _embedded: {
        episodes: [
            {
                id: 553946,
                name: "Chapter One: The Vanishing of Will Byers",
                season: 1,
                number: 1,
                runtime: 60,
                image: {
                    medium:
                        "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
                    original:
                        "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg",
                },
            },
            {
                id: 909340,
                name: "Chapter One: MADMAX",
                season: 2,
                number: 1,
                runtime: 60,
                image: {
                    medium:
                        "http://static.tvmaze.com/uploads/images/medium_landscape/132/331976.jpg",
                    original:
                        "http://static.tvmaze.com/uploads/images/original_untouched/132/331976.jpg",
                },
            },
        ]}
    };


    test("episodes render when season button clicked", async() => {

        mockFetchShow.mockResolvedValueOnce(data)

        const {getByText, getAllByText} = render(<App />)
        await waitFor(() => {

            getByText(/select a season/i)
         
     
         })

         const button = getByText(/select a season/i)
         userEvent.click(button);
         expect(getAllByText(/season /i)).toHaveLength(2);
        
     })