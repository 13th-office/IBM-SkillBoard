FROM ruby:3.0.2

WORKDIR /rails

COPY Gemfile Gemfile.lock ./

RUN bundle install

COPY . .

RUN bundle exec bootsnap precompile --gemfile app/ lib/

EXPOSE 3000

RUN chmod +x /rails/docker-entrypoint.sh

ENTRYPOINT ["/rails/docker-entrypoint.sh"]
