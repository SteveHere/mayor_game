# MayorGame

Make sure postgres is installed./

To start your Phoenix server:

`mix setup`

or

- Install dependencies with `mix deps.get`
- Create and migrate your database with `mix ecto.setup`
- Install Node.js dependencies with `npm install` inside the `assets` directory

make sure Postgres is running

then,
Start Phoenix endpoint with `mix phx.server`

Most of the code is in `lib`

- `mayor_game` folder has the server stuff
  - `auth` has auth
  - `city` has modules for city stuff — buildables, citizens, details, info(cities)
  - other files like city, repo are functions for DB calls / etc
- `mayor_game_web` has the live-view and web stuff

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html).

## Learn more

- Official website: https://www.phoenixframework.org/
- Guides: https://hexdocs.pm/phoenix/overview.html
- Docs: https://hexdocs.pm/phoenix
- Forum: https://elixirforum.com/c/phoenix-forum
- Source: https://github.com/phoenixframework/phoenix
