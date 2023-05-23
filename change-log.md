## <u>Showtime</u>

---

| Version            |
|:-------------------|
| [`0.1.0`](#v0.1.0) |


### <a id="v0.1.0"/>`0.1.0`

- Added `change-log.md` to the app
- Added [`.nvmrc`](./.nvmrc) to add the exact node version to the app
- Completed the [`home (search)`](./src/app/page.tsx) and [`movie details`](./src/app/%5Bid%5D/page.tsx)
- Added [`useMovie`](./src/hooks/useMovie.tsx) to handle the request
- Added [`Search`](./src/components/pages/Search.tsx) and [`Filter`](./src/components/pages/Filter.tsx) to get a specific type of data
- Added [`debounce`](./src/utils/debounce.util.ts) helper function to prevent unnecessary request on search input
- Added `Abort` functionality to the search request to prevent parallel request to the same end point
- Added `Intercepting Route` to show the movie in a modal and with refresh the page, user will redirect to the movie page
