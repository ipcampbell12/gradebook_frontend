import React, { useContext, useState, useEffect } from 'react';

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}