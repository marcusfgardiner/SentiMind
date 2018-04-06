class Tweet:
   'Wraps #user, #text and #sentiment'

   def __init__(self, user, text):
      self.user = user
      self.text = text
      self.sentiment = None
      
