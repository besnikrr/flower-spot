import { TextField } from '@mui/material';
import { User, userSignUpValidator } from '../../../domain/user';
import { useForm } from 'react-hook-form';
import { signUp } from '../../../services/user';
import { yupResolver } from '@hookform/resolvers/yup';
interface SignUpFormProps {
  onClose: (value: boolean) => void;
}

export const SignUpForm = ({ onClose }: SignUpFormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(userSignUpValidator),
  });

  const onSubmit = async (data: User) => {
    await signUp(data);
    onClose(true);
  };

  return (
    <form className="modal" onSubmit={handleSubmit(onSubmit)}>
      <h1>Create an Account</h1>
      <div className="name">
        <TextField
          className="text-field field"
          label="First Name"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          {...register('first_name')}
          error={!!errors?.first_name}
        />
        <TextField
          className="text-field"
          label="Last Name"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          {...register('last_name')}
          error={!!errors?.last_name}
        />
      </div>
      <TextField
        className="text-field"
        label="Date of Birth"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
        {...register('date_of_birth')}
        error={!!errors?.date_of_birth}
      />
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
        Create Account
      </button>
    </form>
  );
};
