TEXT="Тестирование выполнено: (☉_☉) %0A%0AProject:+$CI_PROJECT_NAME%0AURL:+$CI_PROJECT_URL/pipelines/$CI_PIPELINE_ID/%0ABranch:+$CI_COMMIT_REF_SLUG%0A
отчет доступен по ссылке:"
curl -s -X POST https://api.telegram.org/$TELEGRAM_BOT_TOKEN/sendMessage -d chat_id=$TELEGRAM_USER_ID -d text="$TEXT"

curl -F chat_id=$TELEGRAM_USER_ID -F document=@"jest-report/test-report.html" https://api.telegram.org/$TELEGRAM_BOT_TOKEN/sendDocument
