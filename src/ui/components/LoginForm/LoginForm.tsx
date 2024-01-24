import { TextField } from '@mui/material';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../application/authContext';
import { UserLogin, userLoginValidator } from '../../../domain/user';
import { login } from '../../../services/user';
import { yupResolver } from '@hookform/resolvers/yup';

interface LoginFormProps {
  onClose?: (value: boolean) => void;
}

export const LoginForm = ({ onClose }: LoginFormProps): JSX.Element => {
  const authContext = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>({
    resolver: yupResolver(userLoginValidator),
  });

  const onSubmit = async (data: UserLogin) => {
    const result = await login(data);
    authContext.login(result.data.auth_token);
    onClose?.(true);
  };

  return (
    <form className="modal" onSubmit={handleSubmit(onSubmit)}>
      <h1>Welcome Back</h1>
      <TextField
        className="text-field"
        label="Email Address"
        type="email"
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
        {...register('email')}
        error={!!errors?.email}
      />
      <TextField
        className="text-field"
        label="Password"
        type="password"
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
        {...register('password')}
        error={!!errors?.password}
      />
      <button
        type="submit"
        className={'btn btn--pink btn--squared full-width create-btn'}
      >
        Login to your Account
      </button>
    </form>
  );
};
