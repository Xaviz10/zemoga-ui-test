## What was used?

- ⚡️ Next.js 13
- ⚛️ React 18
- ⛑ TypeScript
- 💅 Styled Components - CssInJs for component styling
- ✨ Tailwind - Utility-first framework for fast customization
- ✨ Twin Macro - For Tailwind integration with Styled Components
- 📏 ESLint — To find and fix problems in your code
- 🎯 Clean Code architecture - Modular, decoupled, testable, maintainable, scalable, reusable, understandable, flexible, SOLID, and adaptable.

## Architecture

For this project was used a clean code architecture, this approach was adapted from a React.js project to a Next.js project, using the app folder as a routes' folder. For maintaining the modularization, the project is divided in three other folders:

- 📀 Data: The data folder represents the data layer of the clean architecture. This layer represents the interaction with data sources such as databases, APIs, or external services. It contains implementations of business rules related to data management. The data layer is dependent on the domain layer and provides concrete implementations of the interfaces defined in the domain layer.

- 📂 Domain : The domain folder represents the domain layer of the clean architecture. The domain layer encapsulates the core business logic and rules of the application. It contains entities that represent the business objects (in this case, all the country entities needed) and use cases that define the actions or operations that can be performed on those entities. The domain layer is independent of other layers and should not have dependencies on frameworks or external libraries.

- 🏞️ UI: The UI folder represents the user interface layer of the clean architecture. This layer is responsible for handling the user interaction and rendering the user interface components. It includes components, pages, hooks, assets, and styles related to the presentation of the application.

## Features

For the features needed for the project were used a variety of approaches and some libraries.

| Feature                      | Description                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HTTP Requests                | It was used [axios](https://www.npmjs.com/package/axios) and the implementation was made inside the 📀 Data Folder.                                                                                                                                                                                                                                                                             |
| Search Bar and Region Filter | For each one was made a custom component. For the Search Bar was used a native input field that was customized. For the select component used in the Region Filter was used the Select component from [MUI](https://mui.com/material-ui/react-select/), this component was customized following the MUI documentation. All the logic for applying the filtering is on the homeViewModel folder. |
| Responsive design            | Was used a "Desktop first" approach, and were used the breakpoints provided by [Tailwind](https://tailwindcss.com/docs/screens).                                                                                                                                                                                                                                                                |
| Routing                      | Were used the provided hooks from Next.js ([useRouter](https://nextjs.org/docs/app/api-reference/functions/use-router) and [useSearchParams](https://nextjs.org/docs/app/api-reference/functions/use-search-params))                                                                                                                                                                            |
| Dark Mode                    | It was used a combination of [next-themes](https://www.npmjs.com/package/next-themes) and [Tailwind](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually).                                                                                                                                                                                                                       |
| Unit tests                   | Were applied unit tests only for the components.                                                                                                                                                                                                                                                                                                                                                |
