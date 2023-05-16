FROM ruby:3.0.2

WORKDIR /rails

COPY Gemfile Gemfile.lock ./

RUN bundle install

COPY . .

RUN bundle exec bootsnap precompile --gemfile app/ lib/

ENTRYPOINT ["/rails/bin/docker-entrypoint"]

EXPOSE 3000

CMD ["./bin/rails", "server", "-b", "0.0.0.0"]
