FROM python:3.9
# from the docker hub ->python web page

WORKDIR /app
# the/workdir/path

EXPOSE 5050

COPY Pipfile Pipfile.lock ./

RUN pip install pipenv
RUN pipenv requirements > requirements.txt
#   pipenv lock --requirements > requirements.txt

RUN pip install -r requirements.txt

COPY . ./

CMD [ "python", "main.py" ]