<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <title>Document</title>
    </head>
    <body>
        <h1>test</h1>
        <div id="test"></div>

        <script src="{{ mix('ts/test.js') }}"></script>
    </body>
</html>
