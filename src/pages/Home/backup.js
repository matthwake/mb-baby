import { LoginButton, AccessToken } from 'react-native-fbsdk';

const passwordRef = useRef();

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

<FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={() => {}}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>

          <LoginButton
            onLoginFinished={(error, result) => {
              if (error) {
                console.log(`login has error: ${result.error}`);
              } else if (result.isCancelled) {
                console.log('login is cancelled.');
              } else {
                AccessToken.getCurrentAccessToken().then((data) => {
                  console.log(data.accessToken.toString());
                });
              }
            }}
            onLogoutFinished={() => console.log('logout.')}
          />







          <Button
            title="Entrar com Facebook"
            onPress={() =>
              onFacebookButtonPress().then(() =>
                console.log('Conectado com o Facebook!')
              )
            }
          />

          async function onFacebookButtonPress() {
            const result = await LoginManager.logInWithPermissions(['public_profile']);

            if (result.isCancelled) {
              return console.log('User cancelled the login process');
            }

            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
              return console.log('Something went wrong obtaining access token');
            }

            const facebookCredential = auth.FacebookAuthProvider.credential(
              data.accessToken
            );

            auth().signInWithCredential(facebookCredential);

            console.tron.log(facebookCredential.token);
          }












          <LoginButton
            onLoginFinished={(error, result) => {
              if (error) {
                console.log(`login has error: ${result.error}`);
              } else if (result.isCancelled) {
                console.log('login is cancelled.');
              } else {
                AccessToken.getCurrentAccessToken().then((data) => {
                  console.log(data.accessToken.toString());
                });
              }
            }}
            onLogoutFinished={() => console.log('logout.')}
          />
