FROM python:3.6

RUN mkdir api

WORKDIR /api

COPY ["requirements.txt","./"]

ADD app .

ADD Data .

ADD model . 

RUN pip install -r requirements.txt

CMD ["uvicorn", "app:app", "--proxy-headers", "--host", "0.0.0.0", "--port", "5000"]