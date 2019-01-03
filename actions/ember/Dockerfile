FROM node:11-slim

LABEL version="1.0.0"
LABEL maintainer="gossi"

LABEL com.github.actions.name="GitHub Action for Ember"
LABEL com.github.actions.description="Wraps the ember CLI to enable common ember commands."
LABEL com.github.actions.icon="activity"
LABEL com.github.actions.color="orange"
# COPY LICENSE README.md THIRD_PARTY_NOTICE.md /

RUN apt-get install git

COPY "entrypoint.sh" "/entrypoint.sh"
ENTRYPOINT ["/entrypoint.sh"]
CMD ["help"]
