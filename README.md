# Netlog Dev

This project is a web application built with the following technologies:

- **Backend:** Cloudflare Worker
- **Database:** Cloudflare D1
- **Frontend:** React (with Vite) + TypeScript
- **UI Framework:** Bootstrap 5

## Development

To set up and run the project locally, follow these steps:

1.  **Install Dependencies:**
    ```bash
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

2.  **Run Frontend:**
    ```bash
    cd frontend
    npm run dev
    ```

3.  **Run Backend:**
    ```bash
    cd backend
    npx wrangler dev
    ```

## Backend Details

The backend is built with Cloudflare Workers, utilizing TypeScript and the Hono.js web framework. It interacts with Cloudflare D1 for database operations.

### Database Schema

The database consists of two tables:

-   **`event_sources`**: Stores information about different event sources.
    -   `id`: Primary key (INTEGER, auto-increment)
    -   `name`: Name of the event source (TEXT, NOT NULL, UNIQUE)

-   **`event_logs`**: Stores individual event logs.
    -   `id`: Primary key (INTEGER, auto-increment)
    -   `event_source_id`: Foreign key referencing `event_sources.id` (INTEGER, NOT NULL)
    -   `timestamp`: Timestamp of the event (TEXT, NOT NULL, ISO8601 format)
    -   `content`: Content of the event log (TEXT, NOT NULL)

### API Endpoints

The backend exposes the following API endpoints:

#### Event Sources

-   `POST /event-sources`
    -   **Description:** Creates a new event source or retrieves an existing one if a source with the given name already exists.
    -   **Request Body:** `{ "name": "string" }`
    -   **Response:** `{ "id": number, "name": "string" }`

-   `GET /event-sources`
    -   **Description:** Retrieves a list of all event sources.
    -   **Response:** `Array<{ "id": number, "name": "string" }>`

-   `GET /event-sources/:id`
    -   **Description:** Retrieves a specific event source by its ID.
    -   **Response:** `{ "id": number, "name": "string" }`

#### Event Logs

-   `POST /event-logs`
    -   **Description:** Creates a new event log associated with a specified event source. If the event source does not exist, it will be created.
    -   **Request Body:** `{ "event_source_name": "string", "content": "string" }`
    -   **Response:** `{ "id": number, "event_source_id": number, "timestamp": "string", "content": "string", "event_source_name": "string" }`

-   `GET /event-logs`
    -   **Description:** Retrieves a list of all event logs, ordered by timestamp in descending order.
    -   **Response:** `Array<{ "id": number, "event_source_id": number, "timestamp": "string", "content": "string", "event_source_name": "string" }>`

-   `GET /event-logs/:id`
    -   **Description:** Retrieves a specific event log by its ID.
    -   **Response:** `{ "id": number, "event_source_id": number, "timestamp": "string", "content": "string", "event_source_name": "string" }`

-   `GET /event-logs/source/:event_source_id`
    -   **Description:** Retrieves all event logs for a specific event source, ordered by timestamp in descending order.
    -   **Response:** `Array<{ "id": number, "event_source_id": number, "timestamp": "string", "content": "string", "event_source_name": "string" }>`

