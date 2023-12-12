import Tasks from "./Tasks";
import { render, screen } from "@testing-library/react";

import { setupWorker } from 'msw/browser'
import { http, HttpResponse } from 'msw'

describe('Task component', () => {
    const worker = setupWorker(
        http.get(
            "https://jsonplaceholder.typicode.com/todos?_limit=10",
            async () => HttpResponse.json(
                {
                    userId: 1,
                    id: 1,
                    title: 'delectus aut autem',
                    completed: false
                }
            ))
    )

    beforeAll(() => {
        worker.start()
    })

    


    it('should fetch and show tasks on button click', () => {
        render(<Tasks />)

        const button = screen.getByText('Get tasks from API')
    });
});