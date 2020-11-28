<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <link rel="stylesheet" href="{{ mix('css/app.css') }}" />
        <title>image_uploader</title>
    </head>
    <body>
        <div id="app"></div>

        <script src="{{ mix('ts/app.js') }}"></script>
    </body>
</html>
