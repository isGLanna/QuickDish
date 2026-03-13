cd mobile
npx expo start &
MOBILE_PID=$!

cd ../web
yarn dev &
WEB_PID=$!

cd ../backend
go run . &
BACK_PID=$!

trap "kill $MOBILE_PID $WEB_PID $BACK_PID" EXIT
wait