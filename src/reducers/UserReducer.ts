type UserState = {
    avatar: string;
    favorites: any[]; // Substitua 'any[]' pelo tipo apropriado para seus favoritos
    appointments: any[]; // Substitua 'any[]' pelo tipo apropriado para seus compromissos
};

type UserAction = { type: 'setAvatar'; payload: { avatar: string } };

const initialState: UserState = {
    avatar: '',
    favorites: [],
    appointments: [],
};

const UserReducer = (state: UserState, action: UserAction): UserState => {
    switch (action.type) {
        case 'setAvatar':
            return { ...state, avatar: action.payload.avatar };
        default:
            return state;
    }
};

export { initialState, UserReducer };
